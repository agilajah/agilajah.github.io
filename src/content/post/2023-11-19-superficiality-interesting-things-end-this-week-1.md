---
title: "Some interesting things to end this week #1"
publishDate: "19 November 2023"
description: "OpenAI/Sam Altman Coup, AI is taking over the jobs, DeepMind's Graphcast, Microsoft's mega infrastructure."
tags: ["weekly-digest", "AI", "technology", "machine-learning"]
---

:::note
**This post is also published [here](https://open.substack.com/pub/superficiality/p/some-interesting-things-i-learned?r=7buma&utm_campaign=post&utm_medium=web)**
:::

---
What a week.

What a day, specifically. Waking up to [this news](https://openai.com/blog/openai-announces-leadership-transition) is nothing short of shocking.

We have been discussing the possibility of AI replacing jobs for a while now. Unfortunately, we might have a concrete evidence already. According to [a new working paper](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4544582) by Hui, Reshef, and Zhou, the introduction of ChatGPT led to a decrease in demand for freelancers on an online freelancing platform. Here’s a graph by John Burn-Murdoch:

![Source: John Burn-Murdoch](/assets/2023/november/superficiality-1-1.webp)

In light of sudden departure of Sam Altman, people on twitter (X) jokingly dubbed that some of the first victims to the rising GenAI is Sam Altman himself.

![Source: Twitter](/assets/2023/november/superficiality-1-2.webp)

## 1. OpenAI/Sam Altman Coup

Joking aside, Sam Altman’s ousting from the company sent shockwaves through the tech community, instantly becoming a trending topic on social media and tech news outlets. The unexpected departure of Greg Brockman (Co-founder), following closely on Altman’s heels, only added fuel to the fire of speculation and rumor.

There are rumblings about a division within the company’s board regarding company’s vision. One side is apparently the 'Safetyism' group, advocating for a more cautious and measured approach to the AI development. The other—the 'Acceleration' faction—is said to be pushing for a more aggressive growth plan.

Considering the whirlwind of information that's out there, it's pretty tough to separate fact from fiction—as the old saying goes, "everything you hear is an opinion, not a fact." Now, there's this one tweet (speculation, of course) that's caught my attention [here](https://twitter.com/8teAPi/status/1725724907722752008).

But one thing for sure, this internal tug-of-war is creating a lot of buzz and speculation. It's not just a simple leadership change; it's a fundamental clash of visions that could define the company's trajectory and the industry for years to come.

## 2. DeepMind’s GraphCast

![Source: Google DeepMind](/assets/2023/november/superficiality-1-3.webp)

Predicting the weather stands as one of humanity's earliest and most complex scientific pursuits. Medium range predictions are important to support key decision-making across sectors, from renewable energy to event logistics, but are difficult to do accurately and efficiently.

Traditionally, forecasts have depended on Numerical Weather Prediction (NWP), a method that starts with meticulously crafted physics equations that are subsequently converted into computer code to be processed by supercomputers. This conventional method represents a remarkable scientific and engineering achievement, but crafting these equations and their corresponding algorithms demands considerable time, specialized knowledge, and expensive computational power to yield precise predictions.

Deep learning adopts an alternative strategy, leveraging data rather than physical equations to construct a system for weather forecasting. Machine Learning model developed by learning from many years of historical weather records, enabling it to understand the intricate cause-and-effect dynamics that dictate the progression of the Earth's weather patterns from now into the forthcoming days.

A couple months ago, Huawei released [Pangu-Weather Forecast Model](https://www.huawei.com/en/news/2023/8/pangu-weather-forcast) which demonstrated promising results against ECMWF IFS (a leading global NWP - Numerical Weather Prediction system). As [reported here](https://www.huawei.com/en/news/2023/8/pangu-weather-forcast), Machine learning (ML) is rapidly proving its worth in the realm of weather forecasting, demonstrating significant potential to enhance predictive capabilities.

In May 2023, the AI-driven Pangu-Weather model successfully forecasted the path of Typhoon Mawar a full five days ahead of its unexpected shift in direction—a remarkable achievement.

Meanwhile, the rivalry in advancing machine learning for weather forecasting between Chinese and American firms has led to a rapid and competitive race, with companies from both nations consistently outpacing each other in developments.

> Our state-of-the-art model delivers 10-day weather predictions at unprecedented accuracy in under one minute - Google Deepmind

DeepMind, Google's renowned research arm, has introduced GraphCast, its cutting-edge weather forecasting model, which outshines the previous benchmarks established by the prominent Chinese company, Huawei Technologies. According to the latest test outcomes, GraphCast has outperformed Pangu-Weather, Huawei's model, in the majority of testing environments. However, Pangu-Weather still maintains an edge in certain areas, including time-resolution benchmarks, where it delivers predictions with less time interval between them.

GraphCast is a weather forecasting system based on machine learning and Graph Neural Networks (GNNs), which are a particularly useful architecture for processing spatially structured data. It’s not the first time Google used GNN in their systems - In 2021 they release an advanced traffic prediction with [GNN](https://deepmind.google/discover/blog/traffic-prediction-with-advanced-graph-neural-networks/).

Although the training phase for GraphCast required significant computational resources, the end product is an extremely efficient forecasting model. Generating a 10-day forecast with GraphCast is a quick process, clocking in at under a minute when using just one of Google's TPU v4 units. By contrast, creating a similar 10-day forecast with traditional methods like the HRES model could take several hours and involve a supercomputer harnessing the power of hundreds of machines.

I think what’s even more interesting from this development is that the code is [open-sourced](https://github.com/google-deepmind/graphcast)

## 3. Microsoft Mega Infrastructure

Microsoft is undertaking an unprecedented infrastructure expansion that, despite sounding like an exaggeration, dwarfs the spending on historical mega projects. When you compare it to the investment in national railway systems, massive dams, or even the Apollo moon missions, the projected annual expenditure of over $50 billion on data centers from 2024 onward makes these projects look modest. This ambitious expansion is designed to fast-track the journey toward AGI (Artificial General Intelligence) and integrate the capabilities of generative AI into every aspect of our lives, from work productivity tools to entertainment.

Read more [here](https://www.semianalysis.com/p/microsoft-infrastructure-ai-and-cpu?utm_source=substack&utm_campaign=post_embed&utm_medium=web).
