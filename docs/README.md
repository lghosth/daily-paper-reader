<div class="dpr-home-notice-card">
  <h3 class="dpr-home-notice-title">🚀 Start Here</h3>
  <ul class="dpr-home-notice-list">
    <li><a href="#/tutorial/README">使用教程</a></li>
  </ul>
</div>

## 每次日报
- 最新运行日期：2026-03-14 ~ 2026-04-12
- 运行时间：2026-04-12 10:48:49 UTC
- 运行状态：成功
- 本次总论文数：10
- 精读区：2
- 速读区：8

### 今日简报（AI）
<think>
1.  **分析用户请求：**
    *   **角色：** 日报编辑。
    *   **任务：** 输出 3 句以内、吸引人、简洁但具体的中文总结。
    *   **约束：** 内容必须基于给定的推荐数据，不要编造论文信息。
    *   **日期：** 2026-03-14 ~ 2026-04-12。
    *   **数据概览：** 10篇论文（2精读，8速读）。精读聚焦在图神经网络（GNN）可扩展性训练；速读覆盖NAS、图基础模型、分布式学习。
    *   **输出格式：** 1-3 行文本，不带 Markdown 标题，不带 JSON。
    *   **内容要求：**
        1.  一句概括今天做了什么（适合标题感官）。
        2.  一句给出最值得看的 1~2 个方向/结论（基于精读/速读列表）。
        3.  一句给出下步建议（面向普通读者）。

2.  **提炼关键信息：**
    *   **主题：** 图神经网络（GNN）训练的可扩展性是核心热点。
    *   **精读重点：**
        *   《EmbedPart: Embedding-Driven Graph Partitioning...》 (9.0/10): 强调图划分和嵌入。
        *   《Communication-free Sampling...》 (9.0/10): 强调通信-free采样和4D混合并行。
    *   **速读重点：**
        *   NAS (PrototypeNAS): 针对微控制器。
        *   图基础模型 (Graph Foundation Models): 探讨泛化能力。
        *   分布式学习 (GAPSL): 异构数据下的并行split learning。
    *   **趋势判断：** "可扩展性"（Scalable）是GNN领域的关键词，同时边缘/端侧AI（MCUs）也在发展。

3.  **构建三句话：**

    *   **第1句（标题/做什么）：** 本周聚焦图神经网络在大规模场景下的训练效率优化，产出2篇深度解读与8篇速览。 (涵盖了做什么：GNN训练效率/可扩展性，总量10篇)
    *   **第2句（方向/结论）：** 图嵌入分区与无通信采样成为突破GNN并行训练瓶颈的关键技术，边缘端模型自动设计亦现新思路。 (涵盖了2个精读的方向：图划分、无通信采样，以及速读的一个方向：NAS)
    *   **第3句（建议）：** 关注图计算并行策略与轻量化模型部署的融合，这将是未来工业级图应用的核心竞争力。 (面向普通读者的建议)

4.  **优化语言：**
    *   确保简洁。
    *   确保具体（嵌入分区、无通信采样）。
    *   确保吸引人。

5.  **最终输出审查：**
    *   是否超过3句？ 否。
    *   是否基于数据？ 是。
    *   是否无Markdown/JSON？ 是。
    *   是否中文？ 是。

6.  **生成文本：**
    本周聚焦大规模图神经网络的可扩展性训练优化，产出2篇精读与8篇速读。嵌入分区与无通信采样成为突破并行效率瓶颈的核心路径，边缘端自动网络设计亦是亮点。关注图计算并行策略与轻量化部署的融合趋势，以提升工业应用竞争力。
</think>

本周聚焦大规模图神经网络的可扩展性训练优化，产出2篇精读与8篇速读。嵌入分区与无通信采样成为突破并行效率瓶颈的核心路径，边缘端自动网络设计亦是亮点。关注图
- 详情：[/20260314-20260412/README](/20260314-20260412/README)

### 精读区论文标签
1. [EmbedPart: Embedding-Driven Graph Partitioning for Scalable Graph Neural Network Training](/20260314-20260412/2604.01000v1-embedpart-embedding-driven-graph-partitioning-for-scalable-graph-neural-network-training)  
   标签：评分：9.0/10、query:dgnn-nas
   evidence：用于可扩展分布式GNN训练的图划分
2. [Communication-free Sampling and 4D Hybrid Parallelism for Scalable Mini-batch GNN Training](/20260314-20260412/2604.02651v1-communication-free-sampling-and-4d-hybrid-parallelism-for-scalable-mini-batch-gnn-training)  
   标签：评分：9.0/10、query:dgnn-nas
   evidence：ScaleGNN实现通信无关的分布式采样和4D并行性用于GNN训练

### 速读区论文标签
1. [PrototypeNAS: Rapid Design of Deep Neural Networks for Microcontroller Units](/20260314-20260412/2603.15106v1-prototypenas-rapid-design-of-deep-neural-networks-for-microcontroller-units)  
   标签：评分：7.0/10、query:dgnn-nas
   evidence：零样本NAS方法用于DNN架构专用化
2. [Can Graph Foundation Models Generalize Over Architecture?](/20260314-20260412/2603.22984v1-can-graph-foundation-models-generalize-over-architecture)  
   标签：评分：7.0/10、query:dgnn-nas
   evidence：讨论GNN架构适应性和固定骨干网络的局限性，涉及神经架构搜索
3. [GAPSL: A Gradient-Aligned Parallel Split Learning on Heterogeneous Data](/20260314-20260412/2603.18540v1-gapsl-a-gradient-aligned-parallel-split-learning-on-heterogeneous-data)  
   标签：评分：6.0/10、query:dgnn-nas
   evidence：通信高效的分裂学习减少聚合开销
4. [A Federated Many-to-One Hopfield model for associative Neural Networks](/20260314-20260412/2603.19902v1-a-federated-many-to-one-hopfield-model-for-associative-neural-networks)  
   标签：评分：6.0/10、query:dgnn-nas
   evidence：联邦学习框架用于分布式客户端训练
5. [Communication-Efficient Approximate Gradient Coding](/20260314-20260412/2603.22514v1-communication-efficient-approximate-gradient-coding)  
   标签：评分：6.0/10、query:dgnn-nas
   evidence：分布式参数服务器中的通信高效梯度编码
6. [Optimization Trade-offs in Asynchronous Federated Learning: A Stochastic Networks Approach](/20260314-20260412/2603.26231v1-optimization-trade-offs-in-asynchronous-federated-learning-a-stochastic-networks-approach)  
   标签：评分：6.0/10、query:dgnn-nas
   evidence：异步联邦学习的队列动力学解决分布式训练中的通信瓶颈问题
7. [OptINC: Optical In-Network-Computing for Scalable Distributed Learning](/20260314-20260412/2603.28290v1-optinc-optical-in-network-computing-for-scalable-distributed-learning)  
   标签：评分：6.0/10、query:dgnn-nas
   evidence：光计算实现通信高效的分布式学习
8. [Complex-Valued GNNs for Distributed Basis-Invariant Control of Planar Systems](/20260314-20260412/2604.02615v1-complex-valued-gnns-for-distributed-basis-invariant-control-of-planar-systems)  
   标签：评分：6.0/10、query:dgnn-nas
   evidence：分布式GNN部署于网络化控制系统


<div class="dpr-home-promo-card">
  <h3 class="dpr-home-promo-title">💬 社区与支持</h3>
  <ul class="dpr-home-promo-list">
    <li>欢迎 Star / Fork / Issue / PR</li>
    <li>QQ群：583867967（欢迎交流，已有：1151人）</li>
  </ul>
</div>
