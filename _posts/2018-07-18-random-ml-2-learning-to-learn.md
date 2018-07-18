---
layout: post
title: ML.rand() Part 2 - Learning to Learn
description: "A brand-new series where we can discuss virtually anything about Machine Learning, randomly."
tags: [Machine Learning, RandomML]
comments: true
---

![Random ML 2 Cover, Learning to learn. Source: https://memegenerator.net.]({{site.url }}/images/2018/july/random-ml-2-cover.jpeg "Random ML 2 Cover, Learning to learn. Source: https://memegenerator.net")

**Disclaimer:** This article was originally published on my LinkedIn ([click here](https://www.linkedin.com/pulse/mlrand-2-learning-learn-febi-agil-ifdillah/)) on May 6, 2018.

**Note**: the primary goal of these series that I've been working on is simply to keep a record of the papers I've read and things I learned along the way. If you find anything inaccurate, kindly let me know.

**TLDR**; We want to make an optimizer as general as possible by replacing hand-designed update rules with a learned update rule, which is modelled by an RNN. Now, you might ask why...

![Why tho.... Source: Forgotten, sorry.]({{site.url }}/images/2018/july/random-ml-2-1.jpeg "Why tho.... Source: Forgotten, sorry.")

The answer lies with the rest of this article :)

## Introduction

Welcome to the second instalment of ML.rand(), a brand-new series where we can discuss virtually anything about Machine Learning randomly.

In a previous article, we've learned about how to train a neural network 'without' backpropagation. Now, we're going to learn about how to teach a machine to learn how to learn (It's kind of confusing, but bear with me. :D) from a paper which was released in 2016 by a team of researchers from Google DeepMind, University of Oxford, and Canadian Institute for Advanced Research named: Learning to learn by gradient descent by gradient descent.


