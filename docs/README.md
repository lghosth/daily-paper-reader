<div class="dpr-home-notice-card dpr-home-panel">
  <div class="dpr-home-notice-header dpr-home-panel-header">
    <h3 class="dpr-home-notice-title">公告与更新</h3>
    <a class="dpr-home-notice-tutorial" href="#/tutorial/README">使用教程 <span aria-hidden="true">›</span></a>
  </div>
  <div class="dpr-home-notice-entry">
    <time class="dpr-home-notice-date" datetime="2026-07-19">07.19</time>
    <div>
      <strong class="dpr-home-notice-entry-title">首页新增社区统计</strong>
      <span class="dpr-home-notice-entry-summary">现在可以看到今天看论文的人数和项目加入人数。</span>
    </div>
  </div>
  <div class="dpr-home-site-stats" data-dpr-site-stats hidden aria-live="polite">
    <span>今天有 <strong class="dpr-home-site-stat-value" data-dpr-daily-readers>--</strong> 人在看论文</span>
    <span class="dpr-home-site-stat-separator" aria-hidden="true">·</span>
    <span>已有 <strong class="dpr-home-site-stat-value" data-dpr-fork-count>--</strong> 人加入 Daily Paper Reader</span>
  </div>
</div>

## 每次日报
- 最新运行日期：2026-07-23
- 运行时间：2026-07-23 03:54:55 北京时间
- 运行状态：成功
- 本次总论文数：5
- 精读区：0
- 速读区：5
- 下次更新：约 2026-07-24 02:30 北京时间（每日 02:30 自动刷新，受排队影响可能延后 0~60 分钟）

### 今日简报（AI）
今天我们速读了3篇联邦学习与并行计算方向的论文，均获6分，重点关注LoRA干扰缓解与多模态对齐问题。
最值得关注的方向是联邦学习中的LoRA干扰抑制（Dysco）以及MLA序列并行性的通信优化（LAGA），这两项工作分别针对模型微调与训练效率提出了实用改进。
建议优先阅读Dysco中动态子空间增强的具体实现，并关注LAGA如何在不破坏吸收机制的前提下优化通信，这有助于理解当前联邦学习与大规模并行训练的瓶颈与解法。
- 详情：[2026-07-23 日报](/202607/22/README)

### 精读区论文标签
- 本次无精读推荐。

### 速读区论文标签
1. [Dysco: Dynamic Subspace Boosting to Mitigate LoRA Interference in Federated Learning](/202607/22/2607.14367v1-dysco-dynamic-subspace-boosting-to-mitigate-lora-interference-in-federated-learning)  
   标签：评分：6.0/10、query:dgnn-nas
   evidence：通过LoRA子空间分配实现通信高效的联邦微调
2. [Toward Federated Multimodal Graph Foundation Models: A Topology-Aware Multimodal Alignment Framework](/202607/22/2607.15687v1-toward-federated-multimodal-graph-foundation-models-a-topology-aware-multimodal-alignment-framework)  
   标签：评分：6.0/10、query:dgnn-nas
   evidence：针对多模态图的联邦学习，跨隔离数据源的分布式训练
3. [A Training-Memory Regression in MLA Sequence Parallelism: Why Megatron-Core Forbids Absorption, and LAGA -- a Communication-Efficient Fix](/202607/22/2607.17644v1-a-training-memory-regression-in-mla-sequence-parallelism-why-megatron-core-forbids-absorption-and-laga----a-communication-efficient-fix)  
   标签：评分：6.0/10、query:dgnn-nas
   evidence：针对Megatron-Core中训练并行性的通信高效修复
4. [Sobek: Streaming Equivariant Tensor Product Convolutions](/202607/22/2607.18074v1-sobek-streaming-equivariant-tensor-product-convolutions)  
   标签：评分：6.0/10、query:dgnn-nas
   evidence：流式执行减少了等变GNN卷积的内存流量，支持更大规模图在GPU上训练
5. [Federated Lightweight Fine-Tuning](/202607/22/2607.18343v1-federated-lightweight-fine-tuning)  
   标签：评分：6.0/10、query:dgnn-nas
   evidence：通过低秩潜在空间映射实现通信高效的联邦微调


<div class="dpr-home-promo-card dpr-home-panel">
  <div class="dpr-home-panel-header">
    <h3 class="dpr-home-promo-title">社区与支持</h3>
  </div>
  <p class="dpr-home-promo-copy">欢迎通过 Star、Fork、Issue 或 PR 一起完善 Daily Paper Reader。</p>
  <div class="dpr-home-promo-meta">
    <span>QQ群 <strong>583867967</strong></span>
    <span class="dpr-home-promo-separator" aria-hidden="true">·</span>
    <span>已有 <strong>1,491</strong> 人参与交流</span>
  </div>
</div>
