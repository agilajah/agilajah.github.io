---
layout: post
title: ML.rand() Part 1 - Synthetic Gradients and Decoupled Neural Interfaces
description: "A brand-new series where we can discuss virtually anything about Machine Learning, randomly."
tags: [Machine Learning, RandomML]
comments: true
---

## Introduction

![Random ML 1 Cover, Train DNN without backpropagation. Source: Forgotten, sorry.]({{site.url }}/images/2018/july/random-ml-1-cover.jpeg "Random ML 1 Cover, Train DNN withou backpropagation. Source: Forgotten, sorry.")

Welcome to ML.rand(), a brand-new series where we can discuss virtually anything about Machine Learning, randomly. As opposed to  ['On Generative Modelling'](http://febiagil.me/blog/2018/07/18/generative-modelling-1-driving-simulator/) series which is limited in terms of its subject matter, ML.rand() has much broader topics. In fact, it's kind of a super-set of my previous series. I hope you enjoy it.

This is actually the first article of the series. Here we are going to be dissecting a paper [1] published in 2016 by Jaderberg, M. et al (2016) from DeepMind: [Decoupled Neural Interfaces Using Synthetic Gradients](https://arxiv.org/abs/1608.05343).

## Synthetic what now?

First of all, we need to understand that Neural Networks (mostly) learn by comparing the outputs to the true values in a dataset. Then, they try to compute the gradients and backpropagate them to adjust the weights accordingly in order to make the outputs more accurate.

![Random ML 1 Cover, Train DNN withou backpropagation. Source: Forgotten, sorry.]({{site.url }}/images/2018/july/random-ml-1-cover.jpeg "Random ML 1 Cover, Train DNN withou backpropagation. Source: Forgotten, sorry.")
