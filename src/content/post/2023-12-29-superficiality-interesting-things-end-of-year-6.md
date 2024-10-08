---
title: "Some interesting things to read for the end of the year #6"
publishDate: "29 December 2023"
description: "Apple GPT, Transformers against the world (RWKV, Mamba, StripedHyena), Multi-step reasoning LLM agents, all the way to Nuclear Fusion and Cancer-fighting CAR-T cells."
tags: ["weekly-digest", "AI", "technology", "machine-learning"]
---

:::note
**This post is also published on my newsletter, Superficial Intelligence [here](https://open.substack.com/pub/superficiality/p/some-interesting-things-to-read-for?r=7buma&utm_campaign=post&utm_medium=web)**
:::
---

Hi, it’s Febi here with what will likely be our final weekly roundup for the year. I wish you all a joyful and prosperous new year ahead!

In today’s edition:

-  🦦 Apple enters the LLMs race - new Multimodal LLM is out!
- 🐍 🤖 Transformers against the world (Mamba, StripedHyena, RWKV)

---

## 1. Apple releases Ferret - Refer and Ground Anywhere at Any Granularity

Compact, yet powerful models are always welcome. In fact, very much needed. The ability to train compact models with cutting-edge capabilities would democratize advanced AI, enabling a broader range of individuals and organizations to study and deploy them, instead of being an exclusive domain of a few with vast computational resources — overall better for the pocket and environment alike.

### a) LLM in Flash

LLM in Flash: [https://arxiv.org/abs/2312.11514](https://arxiv.org/abs/2312.11514) - this particular paper introduces a framework to overcome current LLMs shortcomings: they are large and require a lot of memory. Making it difficult to run them on devices with limited DRAM e.g a 7 billion parameter model requires over 14GB of memory just to load the parameters in half-precision floating point format.

Proposed solution? → Store the model parameters on flash memory. By exploiting sparsity in the FeedForward Network (FFN) layers and selectively loading only necessary parameters from flash memory - plus employing additional two techniques called (a) “windowing” which is loading parameters for only the past few tokens and reusing activations from recently computed tokens, and (b) “row-column bundling” which roughly translates into “reading larger chunks to increase throughput”. This solution resulting in increase in inference speed by 20-25x compared to naive loading approaches in CPU and GPU as well as demonstrating the ability to run LLMs up to twice of the size of available DRAM, paving the way for wider LLM deployment on resource-constrained devices.

![](/assets/2023/december/superficiality-6-1-llm-in-flash.webp)
_Image Source: [Paper: https://arxiv.org/pdf/2312.11514.pdf](https://arxiv.org/pdf/2312.11514.pdf)_

### b) Ferret

Ferret: [https://arxiv.org/abs/2310.07704](https://arxiv.org/abs/2310.07704) - this paper introduces Ferret, a Multimodal Large Language Model (MLLM) capable of understanding spatial referring of any shape or granularity within an image and accurately grounding open-vocabulary descriptions -- meaning it can point out details as specific as “the cat under the table” — much like giving LLMs a magnifying glass and a pointer. Ferret was built on top of Llava and Vicuna. It appears to be Apple's answer to Google's Gemini, potentially setting the stage for a fierce rivalry in the realm of multimodal LLMs. Here’s a TL;DR:

![](/assets/2023/december/superficiality-4-1.webp)
_Image Source: [Paper: https://arxiv.org/pdf/2310.07704.pdf](https://arxiv.org/pdf/2310.07704.pdf)_

#### Problems
1. Vision-language models need better spatial understanding (knowing where things are in an image)
2. Two important skills for this are referring (describing specific regions) and grounding (finding regions based on descriptions)
3. Current models usually learn these skills separately, but humans learn and use them together seamlessly

#### Objectives
1. Develop a model that can unify referring and grounding in a single framework, much like humans do.
2. The model should be robust and practical by:

- Representing different types of regions (points, boxes, scribbles, freeform shapes).
- Working with open-vocabulary instructions — not just pre-defined words.
- Following complex instructions involving both text and regions.

#### Key Innovations:
1. Unified framework: Combines referring and grounding using shared knowledge.
2. Hybrid region representation: Uses both discrete coordinates (like "top-left: (10, 5)") and continuous visual features (from the image) to represent any shape.
3. Spatial-aware visual sampler: Extracts features from regions of any shape, even sparse ones like scribbles.
4. Free-form input: Can handle instructions containing both referred regions and text descriptions.
5. Simultaneous generation: Outputs both text and coordinates for grounded objects.

----

All in all, I’m glad Apple seems to be further ahead in ML than I thought.

## 2. Transformers against the world - towards cheaper, and scalable architectures

2023 is without a doubt, the year of [Transformers](https://arxiv.org/abs/1706.03762). However, as we advance towards 2024, a thrilling shift with the emergence of other new architectures such as [RWKV (Receptance Weighted Key Value)](https://arxiv.org/abs/2305.13048), [StripedHyena](https://www.together.ai/blog/stripedhyena-7b), and [Mamba](https://arxiv.org/abs/2312.00752) have emerged, each offering new scaling laws for training, different inference costs, and many other things.

There are some reasons why attention, the bedrock of Transformers became the de facto architecture today, but the capabilities of these newcomers raise a question: is it time to take other architectures more seriously?

Imagine training models on massive datasets without sweating over memory constraints - that’s the promise from models the likes of RWKV which combines the strengths of RNNs and Transformers. So does Mamba, [as we’ve talked in the previous roundup](https://superficiality.substack.com/i/139385287/mixtrals-of-experts-and-mambas-state-space-models), which unlocks blazing-fast inference speeds (5x higher throughput than Transformers) as well as linear scaling in sequence length (up to million-length sequences) and StripedHyena was assembled from many advancements including [S4](https://arxiv.org/abs/2111.00396) and many lesson learned from the previous architectures: [H3](https://www.together.ai/blog/hungry-hungry-hippos-towards-language-modeling-with-state-space-models), [Hyena](https://hazyresearch.stanford.edu/blog/2023-03-07-hyena), [HyenaDNA](https://hazyresearch.stanford.edu/blog/2023-06-29-hyena-dna), and [Monarch Mixer](https://www.together.ai/blog/monarch-mixer).

From this slide [by Sasha Rush](https://github.com/srush/do-we-need-attention/blob/main/DoWeNeedAttention.pdf), I think we can see where it’s headed: an RNN Revival.

![](/assets/2023/december/superficiality-6-3-RWKV-paper.webp)
_Image Source: [Paper: https://arxiv.org/abs/2305.13048](https://arxiv.org/abs/2305.13048)_

Now, pretty much anyone in the space knows that attention is likely to be replaced - in fact some people are racing towards replacing it.. what we don’t know yet is by what (RNN?), and when (4 years?). Recent developments have shed a light on some of the strong contenders like the above but it will likely take more time than we expected. (when is time became an issue in this space? cause everyone seems to be moving very fast) Moreover, now that we’ve seen people pushing the boundaries by not only exploiting the architecture in the software realm, but also in the optimizing the hardware parts, the future architecture will not only need innovations in software but also investments in a new-kind infrastructure.


![](/assets/2023/december/superficiality-6-4.webp)
_Image Source: [Sasha Rush](https://github.com/srush/do-we-need-attention/blob/main/DoWeNeedAttention.pdf)_

Please also take your time to read a primer in this area by none other than [Nathan Lambert](https://www.interconnects.ai/p/llms-beyond-attention).

---

## Charts that caught my attention

![](/assets/2023/december/superficiality-6-5-ai-advancement.webp)
_Source: EveryPixel ([2023 the year of AI](https://journal.everypixel.com/2023-the-year-of-ai))_

![](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6cdefbac-c2ad-4f82-aa4e-f1b330fd8f18_1080x905.gif)
Source [McKinsey & Company](https://www.mckinsey.com/featured-insights/2023-year-in-review/2023-the-year-in-charts?cid=soc-web)

---

## Other Reads

### AI Papers

1. [The Truth is in There: Improving Reasoning in Language Models with Layer-Selective Rank Reduction](https://arxiv.org/abs/2312.13558) - Neural networks can often have well over 90% of their weights removed without any significant degradation in performance. In this paper, there’s a new interesting finding: careful pruning done at specific layers of Transformer models can even produce significant boosts in performance on some tasks. Even better, this discovery appears to not be limited to natural language, with performance gains also found in reinforcement learning.

2. [ReSt meet React](https://arxiv.org/abs/2312.10003) - Defining a ReAct-style LLM agent with the ability to reason and act upon external knowledge, and refine the agent through a ReST-like method. After just two iterations, achieves comparable performance to other models but with fewer parameters.

3. [Pangu-Agent](https://huggingface.co/papers/2312.14878) - Inspired by the modularity of the human brain, researchers from Huawei Noah’s Ark Lab, University College London, and University of Oxfords developed a framework that integrates Large Language Models (LLMs) to address reasoning and decision problem towards building generalist agents.

### Other interesting stuff

1. [2023: A year in charts](https://mck.co/3GFxSgg) (McKinsey)
2. [Major LLM services visits reach about 2bn combined](https://twitter.com/AravSrinivas/status/1737279359709487498) (Tweet)
3. [Nuclear Fusion Breakthrough](https://www.independent.co.uk/tech/nuclear-fusion-breakthrough-clean-energy-b2468625.html) (Independent)
4. [What I wish someone had told me](https://blog.samaltman.com/what-i-wish-someone-had-told-me) (Sam Altman)
5. [American brain drains China’s talent](https://twitter.com/Noahpinion/status/1736481030755008730) (Noah Smith)
7. [The simplest explanation isn’t always the best](https://www.pnas.org/doi/10.1073/pnas.2319169120). Dimensionality reduction can see structures that do not exist and miss structures that exist.
8. [Cancer-fighting CAR-T cells could be made inside body with viral injection](https://www.nature.com/articles/d41586-023-03969-5) (Nature)
9. [ByteDance secretly used OpenAI’s API to build their own LLM](https://www.theverge.com/2023/12/15/24003151/bytedance-china-openai-microsoft-competitor-llm) (The Verge)
10. [Samsung’s new AI-enabled smart fridge can design recipes based on your dietary needs](https://www.theverge.com/2023/12/27/24016939/samsung-2024-ai-family-hub-smart-fridge-features) (The Verge)

I’ll return next year. Happy New Year! 🎉🎉
