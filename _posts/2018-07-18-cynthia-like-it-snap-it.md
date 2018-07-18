---
layout: post
title: Cynthia - Like it? Snap it!
description: "How to improve shopping experience using visual search technology."
tags: [Machine Learning, Visual Search]
comments: true
---

![Cynthia Logo. Source: Private Gallery]({{ site.url }}/images/2018/july/cynthia-cover.jpeg)

**Disclaimer:** This article was originally published on my LinkedIn ([click here](https://www.linkedin.com/pulse/cynthia-like-snap-febi-agil-ifdillah/)) on November 26, 2017. 

TL;DR Cynthia is a Deep Learning based visual search engine that is used for an android application called Cynthia (we were running out of name, so...) that we handed in for Indonesia Developer Summit Hackathon 2017. Cynthia was designed for discovery and programmed to enhance customer shopping experience through visual search capability.

## Introduction

Everyone. Moreover, everyone searches all the time. Searching for a forgotten key. Searching for information through a search engine, or even searching for products that we want to buy online via a search box.

When it comes to eCommerce, usually, a user is required to remember the name or any detail of the product he/she searches online or has to describe it in a word or two. If he/she fails to do so, the search engine or your eCommerce website may bring forth irrelevant results.

To me, this process of describing items is **painful** sometimes. So I wonder whether we could leverage current technology that could provide an **ease to the consumers** when they **searching for products**.

## Visual Search Technology


> How can it be that in 2017 I see something that I really like and can't just tap it and get it?



Well, that's just a hypothetical question but you get it..

So, the visual search comes to the rescue when a user (like me) is ignorant about the brand, style, design, but has an image to search for. All we have to do is just feed the eCommerce website with that image and gets a list of matching products to our requirements.

The inconveniences of randomly guessing at keywords would be eliminated completely and the only effort required was for someone to take a photo of any possibly purchasable item, click “Search”, and receive results for the exact same item.

The potential that it brings to the table is what makes us decided to build a visual search engine during the hackathon.

## Have you met Cynthia?

Imagine a world where any product in any photo, image or video, anything from your surroundings was instantly purchasable. When you find something that is interesting to you, just snap it and **Cynthia** will find the product for you. It combines **object recognition** and **machine learning** that provides accuracy and speed.

This is interesting because now we could think of our world as a catalogue, and any visual asset becomes **instantly clickable and shoppable**!

As of current version, Cynthia is developed to help women find various clothes, accessories, makeup & cosmetics via images but we see that it could be applied to any other items as well, from any resources (eCommerce etc). But we saved it for further development.

Our goal was to enhance customers’ shopping experience. But along the way, we found another use of what we built, namely to increase **brand searchability and conversions**, and to assist retailers and brands to **expand their search**.

## Another use case: Visual Recommender System

Most Internet users have come across a recommender system in one way or another. Recommender Systems (also called Recommendation System) are software tools and techniques providing suggestions to a user. The suggestions provided are aimed at supporting users in various decision-making processes, such as what items to buy, what music to listen, or what movie to watch. Various techniques for recommendation generation have been proposed and many of them have also been successfully deployed in commercial environments.

These systems play an important role in such highly rated Internet sites as Amazon.com, YouTube, Netflix, Yahoo, Tripadvisor, Last.fm, and IMDb. It is also widely used in eCommerce system like in this picture:

![Recommendation in eCommerce1. Source: Private Gallery]({{ site.url }}/images/2018/july/cynthia-1.jpeg)

But sometimes we found it fails to do the job. In the picture above, let's say I want to buy a mouse. As a customer who needed a mouse, I expect the site to recommend me some more mouse to consider. But if you look at the items presented below the product thumbnail, there are several unrelated (at least for me) items like LED TV, or a mini electric fan instead.

It turns out that it's all depends on the techniques/approach being employed by the system.

One approach of building recommendation system is collaborative filtering based recommendation in which taking into account what users with similar behaviour liked or purchased. The basic idea of these systems is that if users shared the same interests in the past – if they viewed or bought the same books, for instance – they will also have similar tastes in the future. This requires a significant amount of data, ideally millions of data points. With little or no data, we won't be able to make recommendations, like what happened to me in the aforementioned case.

On the other hand, a content-based recommendation engine doesn't need large amounts of user data, just an intelligent and automated way to classify the content and establish relations between items in terms of relevancy. The similarity of items is calculated based on the features associated with the compared items. 

This is what Cynthia excels at: learning fine-grained image similarity automatically. So, if I could think of another use case of Cynthia, it would be a visual recommendation engine. What's even better for this recommendation engine based on visually similarity is that it doesn't rely on tagging and metadata.