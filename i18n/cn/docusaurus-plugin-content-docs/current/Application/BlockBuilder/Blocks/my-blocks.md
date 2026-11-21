---
id: MyBlocks
title: 我的模块
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 我的模块 {#my-blocks}

“我的模块”让你可以制作自己的可复用积木。
它的作用类似于普通编程中的函数：只需描述一次行为，就能在任意多个地方使用。

## 积木 {#the-blocks}

### `定义 …`（大师） {#block_my_block_define}

<img src={useBaseUrl('/img/blocks/block_my_block_define.svg')} alt="block_my_block_define.svg" />

按类别顶部的**创建一个块**即可创建新积木。随后程序区中会出现一个带有你积木名称的 `定义` 帽子积木：连接在它下面的积木就是你的积木要做的事情。

- 典型用法：把重复的逻辑放进一个名称清晰的积木中。

### 你的积木（大师） {#block_my_block}

<img src={useBaseUrl('/img/blocks/block_my_block.svg')} alt="block_my_block.svg" />

你制作的每个积木都会以其名称出现在积木面板中。使用它时，会运行连接在其 `定义` 积木下的积木。

- 类型：堆叠积木
- 典型用法：在多个地方使用相同的逻辑，而无需复制积木堆。

## 不同输入的示例 {#examples-with-different-inputs}

带有不同输入组合的自定义积木：

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758091855.svg')} alt="block_myblock_1775758091855.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758113259.svg')} alt="block_myblock_1775758113259.svg" />
</div>

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758130609.svg')} alt="block_myblock_1775758130609.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758145135.svg')} alt="block_myblock_1775758145135.svg" />
</div>

## 在程序中使用自定义积木 {#using-a-custom-block-in-a-program}

<img src={useBaseUrl('/img/my-blocks/my-blocks-usage-example.png')} alt="my-blocks-usage-example.png" />

这里的自定义积木用在 `当程序启动时` 下面，而 `定义` 积木堆中包含它要运行的电机逻辑。

- 常见做法：在事件脚本中使用你的积木。
- 好处：定义一次，多处使用。

## 积木编辑器 {#the-block-editor}

<img src={useBaseUrl('/img/my-blocks/my-blocks-editor-cropped.png')} alt="my-blocks-editor-cropped.png" />

在**创建一个块**编辑器中，你可以设计积木的外观：添加标签（**添加标签**）和输入（**添加输入**：*数字或文本*或*布尔值*）。在 `定义` 积木堆中，这些输入就像变量一样，保存传给该积木的值。

## 为什么要使用“我的模块” {#why-use-my-blocks}

- 复用：写一次，用多次。
- 可读性：用一个有意义的名称代替冗长的重复积木堆。
- 修改方便：只需在一处修正逻辑，而不必修改每个副本。
- 结构清晰：把大型程序拆分成小的逻辑部分。

## 注意事项 {#notes}

- 自定义积木属于配置文件，可以在该配置文件程序的任何地方使用。
- 给积木起的名字应说明它做什么，而不是怎么做。
- 调用自身的积木可能会无限循环；编辑器会对此发出警告。
