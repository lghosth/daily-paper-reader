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
- 最新运行日期：2026-08-11
- 运行时间：2026-08-11 04:01:55 北京时间
- 运行状态：成功
- 本次总论文数：6
- 精读区：2
- 速读区：4
- 下次更新：约 2026-08-12 02:30 北京时间（每日 02:30 自动刷新，受排队影响可能延后 0~60 分钟）

### 今日简报（AI）
今日聚焦图神经网络训练加速与分布式优化理论两大核心。  
最值精读：SNI-GNN以网内嵌入预测突破全图训练瓶颈；分布式优化理论兼顾通信效率与稳健性。  
建议优先消化这两篇，速读可关注联邦低秩压缩与无令牌流式学习。
- 详情：[2026-08-11 日报](/202608/10/README)

### 精读区论文标签
1. [SNI-GNN: SmartNIC-Assisted Full-Graph GNN Training with In-Network Embedding Prediction](/202608/10/2608.06441v1-sni-gnn-smartnic-assisted-full-graph-gnn-training-with-in-network-embedding-prediction)  
   标签：评分：10.0/10、query:dgnn-nas
   evidence：利用智能网卡预测嵌入以减少节点间通信，直接对应通信高效图学习系统。
2. [Theoretical Foundations of Communication-Efficient, Robust, and Practical Distributed and Federated Optimization](/202608/10/2608.06563v1-theoretical-foundations-of-communication-efficient-robust-and-practical-distributed-and-federated-optimization)  
   标签：评分：9.0/10、query:dgnn-nas
   evidence：直接研究通信高效训练，提出ProxSkip并证明局部梯度步骤可加速通信

### 速读区论文标签
1. [FraQ: Efficient Coordinate-Space Recompression for Federated Low-Rank Adaptation](/202608/10/2608.03605v1-fraq-efficient-coordinate-space-recompression-for-federated-low-rank-adaptation)  
   标签：评分：7.0/10、query:dgnn-nas
   evidence：联邦LoRA通过高效坐标空间重压缩降低分布式微调的通信开销
2. [Stream Learning: Partition-Fair Gossip Learning Without Tokens](/202608/10/2608.06946v1-stream-learning-partition-fair-gossip-learning-without-tokens)  
   标签：评分：7.0/10、query:dgnn-nas
   evidence：闲聊学习中的分区调度提升通信公平性与效率，支持异步去中心化训练
3. [StateFlow: Sequence Pipeline Parallelism for Long-Context Modeling with Linear Recurrence](/202608/10/2608.06838v1-stateflow-sequence-pipeline-parallelism-for-long-context-modeling-with-linear-recurrence)  
   标签：评分：6.0/10、query:dgnn-nas
   evidence：面向高效长上下文训练的序列流水线并行，降低激活内存并重叠通信
4. [FedLBW: A Loss-Based Weighting Strategy for Federated Learning on Non-IID Data in Wireless Networks](/202608/10/2608.07007v1-fedlbw-a-loss-based-weighting-strategy-for-federated-learning-on-non-iid-data-in-wireless-networks)  
   标签：评分：6.0/10、query:dgnn-nas
   evidence：面向非独立同分布与掉线场景的联邦学习加权策略，提升分布式训练效率与鲁棒性


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
