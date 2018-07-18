---
layout: post
title: On Generative Modelling Part 1 - Introduction
description: "A series where we can discuss about generative modelling and its application. It is the first instalment of the series."
tags: [Machine Learning, On Generative Modelling]
comments: true
---

**Disclaimer:** This article was originally published on my LinkedIn ([click here](https://www.linkedin.com/pulse/generative-modeling-febi-agil-ifdillah/)) on January 30, 2018. 

![Google’s self-driving car passes 700,000 accident-free miles, can now avoid cyclists, stop at railroad crossings. Source: https://googleblog.blogspot.co.id/2014/04/the-latest-chapter-for-self-driving-car.html]({{site.url }}/images/2018/july/generative-modelling-1-cover.jpeg)

>
> “What I cannot create, I do not understand.”  —Richard Feynman
>

## Introduction

Almost a year ago, I told my friends that I want to build a system that could act like an architect (for my final-year project). Given our imagination of a building, the architect can create some designs that meet our criteria. In order to do that, I had to build a system that can understand the information given to it which usually in the form of text. Then the system will use this information to create some 3D models of the building.

So I started to gather some knowledge by skimming through some papers. The closest reference that I found at the time was Zhang et al publication[1] in which they propose a method to generate high-quality 3D objects.

But it turns out that it is not an easy task to solve. I don't even understand a single term nor methods employed in those papers. All I know was that I should learn something called generative models in order to build this architect. Since then, I have been studying generative models and excited about the future of these approaches will bring. I honestly think that we're barely scratched the surface and the best is yet to come.


## Um, generative models? What?

![Neural Networks. Source: http://www.kdnuggets.com/2017/06/deep-learning-papers-reading-roadmap.html]({{ site.url }}/images/2018/july/generative-modelling-1-1.jpeg)

We use a neural network to do deep learning. A common way of describing a neural network is an approximation of some function we wish to model. There have been growing applications of deep learning in recent years. But it's currently dominated by discriminative models which try to optimize the mapping from inputs to outputs: given some data with some attributes, the model will try to 'predict' the class labels.

However, a neural network can also be thought of as a data structure that holds information. There is another type of neural network called generative models that can analyze and understand this treasure trove of data or, even better, replicate the data distribution. 

The use of deep learning techniques allows us to get a rich, hierarchical model that represent probability distributions over the kinds of data encountered in artificial intelligence applications, such as natural images, audio waveforms containing speech, and symbols in natural language corpora[3].

The models are forced to discover and efficiently internalize the essence of the data. This allows us to generate new data points after the training process is done. The intuition behind this approach follows a famous quote from Richard Feynman above. Oh, before I forget, some generative models can also perform density estimation. But the detail on that's beyond the scope of this article.

## OK, new data points. So, what?

While (Deep) Generative models have been successfully gaining interest in the deep learning community and One might have heard about its potentials, One might wonder why generative models are worth studying, especially generative models that are only capable of generating data rather than providing an estimate of the density function.

After all, when applied to images, such models seem to merely provide more images, and the world has no shortage of images, right?

Well, this is where things get interesting. From here, I will show you some of the best use cases of generative models:

## 1. Driving Simulator

Link: [Learning a Driving simulator](https://arxiv.org/abs/1608.01230)

### Introduction

Have you ever heard about [Comma.ai](https://comma.ai/)? It's an automotive AI startup founded by famed iPhone and Playstation hacker, George Hotz. Apparently, Comma.ai's research team has been playing with generative models to simulate some aspects of the world from examples of a human agent. They published a paper in 2016 in which they argue that the approach of the self-driving car should be based on vision because it is the main sensor used by a human driver.

### Approach

Comma.ai's approach to Artificial Intelligence for self-driving cars is based on an agent that learns to clone driver behaviours and plans manoeuvres by simulating future events on the road. In the paper, autonomous navigation treated as a video prediction task in which it takes into account camera frames, steering angle, and speed data.

Due to the problem complexity, the authors decided to learn the video prediction with separable networks. So, the solution is two-fold:

1. Train an autoencoder for dimensionality reduction
2. Train an action conditioned RNN for learning transitions

These training processes are **focused on generating video streams of a front-facing camera mounted in the car windshield**. Here the job is to make the video look so great that **it could be used to train a steering angle model**.

To be able to do that, the authors combine a Variational Autoencoder (VAE) and a Generative Adversarial Network (GAN) so that it can predict realistic-looking video for several frames based on previous frames.

![The architecture of the networks. Source: http://arxiv.org/pdf/1608.01230.pdf]({{ site.url }}/images/2018/july/generative-modelling-1-2.jpeg)

An autoencoder is used to embed the frames into a latent space with a dimension of 2048 which had chosen experimentally. With this approach, the problem of learning transitions directly in the pixel space simplified to learning in the latent space. Hence, the authors train an autoencoder for dimensionality reduction.

A generator network then receives both random samples from the latent space distribution and outputs of encoder network as inputs. The generator will try to fool the discriminator by producing real-but-fake images of the road as depicted in pictures below. As we can see, a model trained with VAE+GAN had the most visually appealing results (a) while MSE based neural networks generate blurred images (b). Odd columns show generated images, even columns show target images.

![Generated images. Source: http://arxiv.org/pdf/1608.01230.pdf]({{ site.url }}/images/2018/july/generative-modelling-1-3.jpeg)

After training the autoencoder, an RNN model is trained to learn to predict code that can be used to estimate future frames.

## Protect Communications

Link: [Learning to Protect Communications with Adversarial Neural Cryptography](https://arxiv.org/abs/1610.06918)

Full article can be found [here](https://arxiv.org/abs/1610.06918).

## References

* [1] Wu, J., Zhang, C., Xue, T., Freeman, B. and Tenenbaum, J., 2016. Learning a probabilistic latent space of object shapes via 3d generative-adversarial modeling. In Advances in Neural Information Processing Systems (pp. 82-90).
* [2] Bishop, C.M., 2006. Pattern recognition and machine learning (information science and statistics) Springer-Verlag New York. Inc. Secaucus, NJ, USA.
* [3] Goodfellow, I., Pouget-Abadie, J., Mirza, M., Xu, B., Warde-Farley, D., Ozair, S., Courville, A. and Bengio, Y., 2014. Generative adversarial nets. In Advances in neural information processing systems (pp. 2672-2680).
* [4] Goodfellow, I., 2016. NIPS 2016 tutorial: Generative adversarial networks. arXiv preprint arXiv:1701.00160.
* [5] Santana, E. and Hotz, G., 2016. Learning a driving simulator. arXiv preprint arXiv:1608.01230.
* [6] Kingma, D.P. and Welling, M., 2013. Auto-encoding variational bayes. arXiv preprint arXiv:1312.6114.
* [7] Abadi, M. and Andersen, D.G., 2016. Learning to protect communications with adversarial neural cryptography. arXiv preprint arXiv:1610.06918.
