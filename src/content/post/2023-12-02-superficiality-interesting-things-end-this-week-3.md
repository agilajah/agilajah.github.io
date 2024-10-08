---
title: "Some interesting things to end this week #3"
publishDate: "02 December 2023"
description: "Delving deep into LLMs reasoning ability and DeepMind breakthrough in material discovery."
tags: ["weekly-digest", "AI", "technology", "machine-learning"]
---


:::note
**This post is also published on my newsletter, Superficial Intelligence [here](https://open.substack.com/pub/superficiality/p/some-interesting-things-to-end-this-126?r=7buma&utm_campaign=post&utm_medium=web&showWelcome=true)**
:::
---


Throughout history, humanity has witnessed several inflection points that have dramatically advanced our civilization. We tamed fire, not just for s'mores, but to forge civilizations. We crafted languages, because grunts and gestures only get you so far - now we are able to communicate in all complexities, in many forms. Written words came next, allowing for the preservation and dissemination of knowledge. Then the printing press arrived – talk about going viral pre-internet! Then the development of self-propelled vehicles, transforming mobility, including cars turned our world from a walkathon to a road trip. All the way to the moon landing, and recently, isn't chatting with Emojis with someone across the globe in real-time just sci-fi turned reality?

Each of these milestones has played a crucial role in shaping human society, culture, and technological progress.

In contemporary discussions, many regard Artificial Intelligence (AI) - ASI to be specific - as the next significant technological advancement. As for me, I think that’s true, along with Synthetic Biology. (just realized that the next big things are either synthetic or artificial).

Large Language Models (LLMs) are at the forefront of this AI revolution. Their rapid development suggests that we might be on the cusp of achieving Artificial Super Intelligence (ASI) - which, [according to Elon](https://twitter.com/i/broadcasts/1MYxNoaVRjoKw?s=20) will be reached within the next three years. ASI represents a form of AI that could perform any intellectual task that a human being can and do them even better than we do. Please refer to the Levels of AGI presented in the previous article.

The exploration of AI touches upon 'the realm of the complex' — mind and intelligence, which have been so far beyond our reach. This venture into understanding and replicating human intelligence signifies a bold step into a domain that have had 'Do Not Disturb' signs for eons - always been mysterious and elusive.

It's like trying to understand a teenager, but harder.

Anyway, the potential to replicate or even enhance aspects of human cognition and problem-solving represents a monumental leap in our understanding of ourselves and our capabilities.

However, the current AI systems have some limitations. One significant constraint is their autoregressive nature, where outputs are sequentially generated based on previous outputs. This limitation can impact the efficiency and accuracy of AI systems, especially in complex tasks that require an understanding of broader contexts or the integration of diverse data types, which led us the the first topic…

## 1. Can LLMs reason and plan?

![](/assets/2023/december/superficiality-3-1.webp)
_Image Source: DALL-E_

> Picture ChatGPT as that brilliant lyricist who can whip up a banger in seconds flat. But here's the catch – it's all studio magic. ChatGPT's got no real-world chops, no tours under its belt, no late nights in dingy clubs. It's never felt the sting of a breakup or the thrill of a road trip. It's just riffing on the echoes of a thousand other songs it's heard, remixing them into something new. - ChatGPT’s describing itself

The usability of Large language models (LLMs) have taken many by surprise, particularly in the past year following the launch of ChatGPT. Originally designed to generate text, scaled-up versions of language models such as GPT and PaLM have demonstrated a growing ability to handle a broad spectrum of tasks that involve mathematical, symbolic, commonsense, and knowledge-based reasoning. It's quite astonishing that the foundation of these advancements is still the original autoregressive text generation mechanism, which processes text token by token in a sequential left-to-right manner.

Clearly, while LLMs exhibit surprising emergent generalization properties and “fluent hallucinations”, LLMs also make factual errors, logical errors, are inconsistent, and they are also — regularly— struggle on many simple reasoning tasks such as arithmetic and parity.

This raises the question: Is such a straightforward method sufficient for developing a language model into a universal problem-solving tool? are they merely “glorified” autocomplete models, which happened to memorize the entire internet? or are they truly performing novel logical reasoning?

![](/assets/2023/december/superficiality-3-2.webp)
_Image Source: [Chain-of-thought Paper](https://arxiv.org/pdf/2201.11903.pdf)_

For LLMs, reasoning typically involves decomposing complex inputs into sequential intermediate steps before producing a final answer. It has been shown that the ability of language models to compute complex functions can be greatly enhanced by using chain-of-thought [[Wei et al](https://arxiv.org/abs/2201.11903) , [Kojima et al](https://arxiv.org/abs/2205.11916) , [Lightman et al](https://arxiv.org/abs/2305.20050)] and scratchpad [[Nye et al](https://arxiv.org/abs/2112.00114)] techniques.

An advanced iteration, known as ["Tree of Thoughts" (ToT)](https://arxiv.org/pdf/2305.10601.pdf), takes this concept further by navigating through well-defined segments of text, or "thoughts." These thoughts act as stepping stones in the problem-solving process. ToT empowers Language Models to engage in more intentional decision-making by weighing different logical pathways and assessing their options to determine the subsequent step. It also incorporates the ability to anticipate future implications or to reconsider past decisions (backtracking), thereby enabling more global choices.

![](/assets/2023/december/superficiality-3-3.webp)
_Image Source: [Tree of Thoughts Paper](https://arxiv.org/pdf/2305.10601.pdf)_

There are also other works worth mentioning, such as:

1. RAP (Reasoning via Planning): This approach is similar to ToT but uses Monte Carlo Tree Search (MCTS) instead of depth-first or breadth-first search. It relies on heuristics from a language model, such as the likelihood or confidence of an action, to aid in the search process.

2. [Language Agent Tree Search (LATS)](https://arxiv.org/abs/2310.04406) that aims at unifying planning, reasoning, and acting which borrows some ideas from AlphaGO. LATS draws on Monte Carlo tree search techniques from model-based reinforcement learning and repurposes LLMs as agents, value functions, and optimizers. The core idea is to use an environment for external feedback, which provides a more deliberate and adaptive problem-solving approach, surpassing the limitations of existing techniques.

![](/assets/2023/december/superficiality-3-4.webp)

However, [Yann LeCun](http://yann.lecun.com/), Vice President and Chief AI Scientist at Meta, has been a prominent voice [suggesting](https://youtu.be/mViTAXCg1xQ?si=i2IhR5PRAhck9hvx) that the underlying architecture of autoregressive models — the ones being used in current LLMs — possesses intrinsic shortcomings that could hinder their sustainability in the long run.

> Five years from now, nobody in their right mind would use them [autoregressive models] - Yann LeCun

![](/assets/2023/december/superficiality-3-5.webp)
_Image Source: [Yann LeCun Talk](https://youtu.be/mViTAXCg1xQ?si=i2IhR5PRAhck9hvx)_

It’s not a surprise that OpenAI might have thought of the same thing. Hence leading to the development of the enigmatic Q* that I also cover in [the previous post](https://superficiality.substack.com/p/some-interesting-things-to-end-this), which according to the [latest piece from The Verge](https://www.wired.com/story/fast-forward-clues-hint-openai-shadowy-q-project/), was a leak (meaning it’s real). Seems to me that the speculation around Q* mostly refers to the enhanced ability to plan and reason.

This is a super interesting topic, but I’ll have to stop here for now.

## 2. AI Unlocks the Door to New Material Discoveries: A DeepMind Breakthrough

![](/assets/2023/december/superficiality-3-6.webp)
_Image Source: DALL-E_

Moving on from LLMs.

I can’t help but seen so many breakthroughs in science was powered by Graph Neural Networks (GNNs) recently.

DeepMind just released a groundbreaking AI tool, Graph Networks for Materials Exploration (GNoME), which I think has unleashed a new era in materials science by discovering a staggering 2.2 million new crystals, including 380,000 stable materials. This breakthrough, equivalent to nearly eight centuries of human knowledge, opens up a world of possibilities for future technologies, from superconductors and supercomputers to next-generation batteries for electric vehicles​​.

Material discovery has transitioned from labor-intensive, traditional methods to computational approaches, and now to AI-driven techniques. Where earlier methods, including those led by [the Materials Project](https://next-gen.materialsproject.org/), identified approximately 48,000 stable crystals, GNoME has expanded this to a remarkable 421,000. This transformation in material discovery methodology signifies an unprecedented scale and accuracy in predicting viable materials​​.

![](/assets/2023/december/superficiality-3-7.webp)

_Image Source: Author, adapted from DeepMind. About 20,000 of the crystals experimentally identified in the ICSD database are computationally stable. Computational approaches drawing from the Materials Project, Open Quantum Materials Database and WBM database boosted this number to 48,000 stable crystals. GNoME expands the number of stable materials known to humanity to 421,000._

GNoME utilizes graph neural networks (GNNs) to predict the stability of new materials. The tool has two distinct pipelines: a structural pipeline that creates candidates based on known crystal structures, and a compositional pipeline that takes a more randomized approach based on chemical formula.

![](/assets/2023/december/superficiality-3-8.webp)
_Image Source: [Scaling deep learning for materials discovery](https://www.nature.com/articles/s41586-023-06735-9#Fig1)_

I’ve looked at the open-sourced code and found two models:

1. GNoME Model: Utilizes a graph-based approach for predicting material stability and properties.
2. Nequip Model: Focuses on training interatomic potentials, instrumental in understanding material behavior.

These predictions undergo rigorous testing using Density Functional Theory calculations, enhancing the AI's learning and prediction accuracy from 50% to a notable 80%​​.

GNoME has not only accelerated the discovery of new materials but also driven down their discovery costs. Its database of crystals is a treasure trove for scientists, offering 'recipes' for new materials. The technology has been validated by external researchers, who have created 736 of GNoME's predicted materials in labs globally. Following are six examples ranging from a first-of-its-kind Alkaline-Earth Diamond-Like optical material (Li4MgGe2S7) to a potential superconductor (Mo5GeB2).

![](/assets/2023/december/superficiality-3-9.webp)
![](/assets/2023/december/superficiality-3-10.webp)

One thing that I think made it even mind-blowing is that DeepMind and Berkeley Lab truly take it to the next level. They set up a [robot-run lab called A-Lab](https://www.nature.com/articles/s41586-023-06734-w#Sec6) to make new materials fast using automatic methods. They used info from the Materials Project and tips on which materials would last from GNoME. Over 17 days of operation, the A-Lab successfully synthesized 41 of 58 target materials that span 33 elements and 41 structural prototypes. This success highlights how powerful it is to combine computer calculations from the ground up, machine learning, knowledge from past experiences, and automated processes in experiments. The materials-discovery pipeline followed by the A-Lab is schematically shown in the below.

![](/assets/2023/december/superficiality-3-11.webp)
_Image Source: [Autonomous materials discovery with A-Lab](https://www.nature.com/articles/s41586-023-06734-w/figures/1)_

DeepMind's AlphaFold and GNoME projects are great examples of AI solving big scientific challenges. AlphaFold's success in figuring out protein structures has been a game-changer in biology. Then, with GNoME, DeepMind moved into new territory by finding millions of new materials.

The future looks so bright.. 😎☀️
