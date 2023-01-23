---
title: "Generative Modelling Part 3 - Adversarial Perturbation Elimination"
description: "A series where we can discuss about generative modelling and its application. It is the third instalment of the series."
publishDate: "21 April 2018"
tags: ["machine-learning", "generative-modelling"]
---

![Generative Modelling 3 Cover, DNN vs Perturbation. Who would win?. Source: https://www.reddit.com/r/ProgrammerHumor/comments/79g0m6/one_pixel_attack_for_fooling_deep_neural_networks/](assets/2018/july/generative-modelling-3-cover.jpeg "Generative Modelling 3 Cover, DNN vs Perturbation. Who would win?. Source: https://www.reddit.com/r/ProgrammerHumor/comments/79g0m6/one_pixel_attack_for_fooling_deep_neural_networks/")

**Disclaimer:** This article was originally published on my LinkedIn ([click here](https://www.linkedin.com/pulse/generative-modelling-part-3-adversarial-perturbation-ifdillah/)) on April 21, 2018.

## Introduction

This is the 3rd instalment of 'On Generative Modelling' series. If you haven't read my previous articles, go check them out: [part one](http://febiagil.me/posts/2018-07-18-generative-modelling-1-driving-simulator/), [part two](http://febiagil.me/posts/2018-07-18-generative-modelling-2-adversarial-neural-cryptography/). Each part has a different topic from the other, so feel free to jump to whichever part you want.

In this article, we will continue our discussion about generative modelling. However, in contrast to the previous articles, we are going to be dissecting multiple papers at once. So it is going to be a long post. But all rooted in one topic.. perturbation.

![Aw, man... Source: http://media.makeameme.org/created/Everyones-out-at.jpg](assets/2018/july/generative-modelling-3-1.jpeg "Aw, man... Source: http://media.makeameme.org/created/Everyones-out-at.jpg")

## Perturbation? As in Perturbation Theory? What is this, Quantum Mechanics?

Umm, yes. No, and NO.

To understand what this is all about, we need to go back to 2014.

But before we begin, let's take a look at several important terms being used in this article which are borrowed from [4]:

- **Adversarial example/image** is a modified version of a clean image that is intentionally perturbed (e.g. by adding noise) to confuse/fool a machine learning technique, such as deep neural networks.
- **Adversarial perturbation** is the noise that is added to the clean image to make it an adversarial example.
- **Adversarial training** uses adversarial images besides the clean images to train machine learning models.

OK, now we're good to go.

## 2014: Where it all began

As we all know, neural networks have been producing some incredible results - in vision, language understanding, speech recognition, playing games, and many more. It is apparent that deep learning solutions, especially those originating from Computer Vision problems are about to play a major role in our daily lives[4]: self-driving cars, Face ID security, etc. But boy oh boy, are we damned or what (pardon my language). About 4 years ago, researchers[9] found something really amazing yet disturbing:

> Several machine learning models, including neural networks, consistently misclassify adversarial examples—inputs formed by applying small but intentionally worst-case perturbations to examples from the dataset, such that the perturbed input results in the model outputting an incorrect answer with high confidence. - Goodfellow et al (2014)

This means it is possible to take any input, let's say an image, and find a **small modification** to its pixel values that caused the network to produce wrong output (misclassify the image). The cover image of this post above depicts this phenomenon perfectly, it's a 'battle' between machine learning models vs small perturbation and believe me it is an important topic.

![Adversarial attack on a picture of a panda. Source: http://arxiv.org/pdf/1412.6572.pdf](assets/2018/july/generative-modelling-3-2.png "Adversarial attack on a picture of a panda. Source: http://arxiv.org/pdf/1412.6572.pdf")

In the picture above, we are faced with two seemingly 'identical' photos of a panda, one classified correctly and the other incorrectly in a ridiculous way (with HIGH confidence, 99.3%-high confidence!). I mean, look at the modification. It was very small. So small that we human barely even notice it. Yet it affects our models dearly.

Then, another result discovered by researchers from École Polytechnique Fédérale de Lausanne (EFPL) showed that there are universal perturbations[3]. Meaning adversarial perturbations are able to fool a network on ‘**any**’ image with high probability. These perturbations were found to generalize over different Neural Networks architectures and training datasets. This means that an attacker can train a classifier and use it to generate the adversarial version of an image, then use it to fool another model.

What do these perturbations look like:

![Take a look a these perturbations. Source: http://openaccess.thecvf.com/content_cvpr_2017/papers/Moosavi-Dezfooli_Universal_Adversarial_Perturbations_CVPR_2017_paper.pdf](assets/2018/july/generative-modelling-3-3.png "Take a look a these perturbations. Source: http://openaccess.thecvf.com/content_cvpr_2017/papers/Moosavi-Dezfooli_Universal_Adversarial_Perturbations_CVPR_2017_paper.pdf")

An extreme case for the adversarial attack is when **only one pixel** in the image is changed to fool the classifier. Su et al. [5] claimed successful fooling of three different network models on 70.97% of the tested images by changing just **one pixel** per image. They also reported that the average confidence of the networks on the wrong labels was found to be 97.47%.

**This is serious**.

Attacks with such perturbations would cause damage in multiple areas including biometrics (face attributes, face recognition), traffic (road-sign, self-driving cars), or even within the deep learning area itself: autoencoders, deep reinforcement learning, attacks on object detection.

> What if, let's say, a self-driving car is made to crash because an adversarial signal was injected into the video feed?

## But, Lu et al (2017) say NO need to worry!

Well, yes, and no.

Lu et al. [6] had previously claimed that adversarial examples are not a concern for object detection in Autonomous Vehicles because of the changing physical conditions in a moving car. However, the attacking methods they employed were somewhat primitive [4], such as performing a line search using the Box-constrained L-BFGS method.

Moreover, Evtimov et al [7] found some **robust attacks** which counter Lu et al claims. But, interestingly, in their follow-up work, Lu et al [8] showed that the detectors like YOLO 9000 and FasterRCNN are ‘currently’ not fooled by the attacks introduced by Etimov et al [7].

So it's kind of back and forth. But I personally think that there is no harm in being cautious.

## Isn't there anything we can do about it then?

Fortunately, yes.

Regarding this phenomena, one might think, "Maybe it all happened because you didn't train the network enough. Just add more data. Or even, add those adversarial images to the training data so the model will be less sensitive to adversarial attacks."

Well, in some senses, that is correct. Actually, that is one of several approaches that we can use to protect our networks called **adversarial training**, which was first observed by Szegedy et al in 2014 [9].

Currently, the defences against the adversarial attacks are being developed along three main directions[4]:

1. Using modified training during learning or modified input during testing.
2. Modifying networks, e.g. by adding more layers/sub-networks, changing loss/activation functions etc.
3. Using external models as network add-on when classifying unseen examples.

To me, the third method is more interesting. This approach will keep the original model as it is and then appends external model(s) to it during testing. This is different with the second approach where we modify the network, or with the first approach which does not directly deal with the models whatsoever.

## GAN-based defences

Most adversarial attacks are gradient-based methods. Namely, the attackers modify the image in the direction of the gradient of the loss function with respect to the input image.

One of the gradient-based methods is Fast Gradient Sign Method (FGSM) that computes an adversarial image by adding a pixel-wide perturbation of magnitude in the direction of the gradient. The origin of FGSM is actually quite interesting, soon after Szegedy et al [9] found out that the robustness of DNN could be improved by adversarial training, Goodfellow et al [3] developed FGSM to compute adversarial perturbation of a given image efficiently. With the said method, we can generate more and more adversarial examples, which enables us to do the adversarial training 'effectively'. Nice.

What is even more interesting: GAN framework can be employed to train a network that is robust to FGSM like attacks. I've found two papers regarding this approach, namely Shen et al (2017) APE-GAN [1] and Lee et al (2017) Generative Adversarial Trainer.[10].

In their works, Lee et al (2017) train a classifier along with a generator that attempts to generate perturbation. Then, the classifier has to correctly classify both the clean and perturbed images. In contrast with Lee et al (2017), Shen et al (2017) use the generator part of the network to clean the perturbed image (eliminate the adversarial perturbation).

This is **interesting**.

Man, I've been saying 'interesting' for like a hundred times. But it actually is though, because Shen et al (2017) work had brought a new perspective of defending neural networks against adversarial examples. Instead of dealing with the neural networks, or adding more data. They just eliminate the source of the pain directly. Cool.

The image below summarizes their work:

![Summary of Shen et al (2017). Source: http://arxiv.org/pdf/1707.05474.pdf](assets/2018/july/generative-modelling-3-4.png "Summary of Shen et al (2017). Source: http://arxiv.org/pdf/1707.05474.pdf")

So basically, with this figure, Shen et al (2017) wanted us to know that[1]:

1. The traditional deep learning framework shows its robustness to clean images but is highly vulnerable to adversarial examples.
2. The existing adversarial training frameworks can increase the robustness of the target model with enhanced training data.
3. Then, they propose an adversarial perturbation elimination framework named APE-GAN to eliminate the perturbation of the adversarial examples before feeding it into the target model to increase the robustness.

To generate adversarial examples, they utilized six different methods namely L-BFGS attack, Fast Gradient Sign Method Attack (FGSM), Iterative Gradient Sign, DeepFool attack, Jacobian-Based Saliency Map Attack (JSMA), and Carlini & Wagner Attack (CW). The details of these attacks are beyond the scope of this article.

## The Approach

First, we need to choose the right type of the GANs carefully. The problem with GANs is that they are hard to train. Basically, you want to maintain the balance of the discriminator (D) and the generator (G). Remember, Nash Equilibria? That's why the authors employed Deep Convolutional Generative Adversarial Network (DCGAN), because this kind of GAN is more stable to train in most settings.

Second, we need to define the difference of adversarial image (AI) and clean image (CI), called N. This is the 'adversarial perturbation' and we want to get rid this thing of our images. If we can eliminate perturbations N, it means the distributions of the adversarial image (AI) is highly consistent with the clean image (CI).

**Fun fact**; As we all know, we considered GANs 'optimal' IF the generative distribution of G and the data generating distribution of D is consistent:

\begin{align}
Pg = Pdata
\end{align}

And you know what? The procedure of converging to a good estimator Pdata **COINCIDES** with the demand of the elimination of adversarial perturbations N. **Boom**.

So this task can be thought of as to train a generating function G that is capable of estimating a corresponding counterpart CI of an adversarial input image (AI).

> While the generator G is trained to alter the perturbation with tiny changes to the input examples, the discriminator D is optimized to separate the clean examples and reconstructed examples without adversarial perturbations obtained from G. - Shen et al (2017)

Cool, right?

Man, this is a long post. But I hope you enjoy it and learn something as I did. I skipped the details of loss functions(discriminator loss, generator loss) and the networks architecture on purpose so that you can check them by yourself.

## Final Thoughts

Now we all know, in spite of their success, neural networks often suffer a tremendous defeat from adversarial attacks. A lot of new defences coming up, and yet at the same time lots of new attacks raising. Studying adversarial attacks and defences have never been this important. And due to the seriousness of adversarial threats, I think we need to actively investigate the possibilities of threats/remedies beyond classification/ recognition tasks as well.

New approach proposed by Shen at all (2017) has brought a new perspective and really is an inspiration. The fact that we can leverage generative modelling techniques even in such a task made me realize how pervasive these techniques are.

## References

- [1] Shen, S., Jin, G., Gao, K., & Zhang, Y. (2017). Ape-gan: Adversarial perturbation elimination with gan. ICLR Submission, available on OpenReview.

- [2] Goodfellow, I. J., Shlens, J., & Szegedy, C. (2014). Explaining and harnessing adversarial examples. arXiv preprint arXiv:1412.6572.

- [3] Moosavi-Dezfooli, S. M., Fawzi, A., Fawzi, O., & Frossard, P. (2017). Universal adversarial perturbations. arXiv preprint.

- [4] Akhtar, N., & Mian, A. (2018). Threat of Adversarial Attacks on Deep Learning in Computer Vision: A Survey. arXiv preprint arXiv:1801.00553.

- [5] Su, J., Vargas, D. V., & Kouichi, S. (2017). One pixel attack for fooling deep neural networks. arXiv preprint arXiv:1710.08864.

- [6] Lu, J., Sibai, H., Fabry, E., & Forsyth, D. (2017). No need to worry about adversarial examples in object detection in autonomous vehicles. arXiv preprint arXiv:1707.03501.

- [7] Evtimov, I., Eykholt, K., Fernandes, E., Kohno, T., Li, B., Prakash, A., Rahmati, A. and Song, D., 2017. Robust Physical-World Attacks on Deep Learning Models. arXiv preprint arXiv:1707.08945, 1.

- [8] Lu, J., Sibai, H., Fabry, E., & Forsyth, D. (2017b). Standard detectors aren't (currently) fooled by physical adversarial stop signs. arXiv preprint arXiv:1710.03337.

- [9] C. Szegedy, W. Zaremba, I. Sutskever, J. Bruna, D. Erhan, I. Goodfellow, R. Fergus, Intriguing properties of neural networks, arXiv preprint arXiv:1312.6199, 2014.

- [10] Lee, H., Han, S., & Lee, J. (2017). Generative Adversarial Trainer: Defense to Adversarial Perturbations with GAN. arXiv preprint arXiv:1705.03387.

- [11] https://medium.com/onfido-tech/adversarial-attacks-and-defences-for-convolutional-neural-networks-66915ece52e7
