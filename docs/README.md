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
- 最新运行日期：2026-08-12
- 运行时间：2026-08-12 04:40:08 北京时间
- 运行状态：成功
- 本次总论文数：5
- 精读区：2
- 速读区：3
- 下次更新：约 2026-08-13 02:30 北京时间（每日 02:30 自动刷新，受排队影响可能延后 0~60 分钟）

### 今日简报（AI）
今日精读5篇论文，聚焦大模型与图神经网络训练优化，其中2篇精读、3篇速读。最值得关注的是满分论文《LGNNIC》用智能网卡加速大规模GNN训练，以及《SwiftQK》优化查询键归一化的张量并行通信。下一步建议普通读者优先精读这两篇，重点了解硬件卸载与通信效率提升的实际收益。
- 详情：[2026-08-12 日报](/202608/11/README)

### 精读区论文标签
1. [LGNNIC: Acceleration of Large-Scale GNN Training using SmartNICs](/202608/11/2608.07733v1-lgnnic-acceleration-of-large-scale-gnn-training-using-smartnics)  
   标签：评分：10.0/10、query:dgnn-nas
   evidence：利用智能网卡减少分布式图神经网络训练中的节点间通信开销
2. [SwiftQK: Fast and Communication-Efficient Tensor Parallelism for Query-Key Normalization](/202608/11/2608.09160v1-swiftqk-fast-and-communication-efficient-tensor-parallelism-for-query-key-normalization)  
   标签：评分：8.0/10、query:dgnn-nas
   evidence：面向LLM QK-Norm的通信高效张量并行内核，仅交换标量统计量并重叠点对点规约

### 速读区论文标签
1. [FEAST: Federated Shared-Space Training for Resource-Heterogeneous Clients](/202608/11/2608.09250v1-feast-federated-shared-space-training-for-resource-heterogeneous-clients)  
   标签：评分：7.0/10、query:dgnn-nas
   evidence：联邦超级网络训练结合稀疏聚合，融合通信高效训练与神经网络架构搜索
2. [Distributed Optimization with Streaming Data: A Temporal Weighting Perspective](/202608/11/2608.09565v1-distributed-optimization-with-streaming-data-a-temporal-weighting-perspective)  
   标签：评分：7.0/10、query:dgnn-nas
   evidence：面向流式数据与通信约束的分布式梯度下降分析
3. [F2STNet: Fair and Federated Spectral-Temporal Modeling for Graph Forecasting](/202608/11/2608.09082v1-f2stnet-fair-and-federated-spectral-temporal-modeling-for-graph-forecasting)  
   标签：评分：6.0/10、query:dgnn-nas
   evidence：面向去中心化客户端、基于联邦聚合的图预测框架


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
