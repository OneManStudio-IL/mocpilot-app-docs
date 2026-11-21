---
id: CreateProfile
title: 创建配置文件
description: "创建配置文件，并在逻辑积木和快速连接两种程序编辑器之间做出选择。"
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# 创建配置文件 {#create-a-profile}

1. 前往**我的配置文件**。
   - 手机：轻点 **+** → **新建配置文件**。
   - 平板：页眉中的**新建配置文件**。
   - 电脑：**文件 → 新建配置文件**（⌘N / Ctrl+N）。
2. 选择**程序类型**（见下文）。
3. 填写配置文件详情。
4. 轻点**创建**。配置文件会在编辑器中打开。

<Screenshot name="create-profile-tiles" alt="新建配置文件页面" width={900} />

## 选择程序类型 {#choose-the-program-type}

程序类型决定配置文件使用哪种编辑器。**之后无法更改。**想尝试另一种编辑器，请再创建一个配置文件。

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', margin: '16px 0'}}>
  <div>
    <img src={useBaseUrl('/img/illustrations/program_links.svg')} alt="快速连接" style={{width: '100%', maxWidth: 320}} />
    <h3>快速连接</h3>
    <p><em>简化的连接方式，与 Controlz 类似。</em>逐行把仪表板控件连接到集线器的电机和灯光：输入、处理、操作、集线器。几分钟即可完成。</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/illustrations/program_blocks.svg')} alt="逻辑积木" style={{width: '100%', maxWidth: 320}} />
    <h3>逻辑积木</h3>
    <p><em>机器人、算法和高级场景。</em>用积木为模型编程：事件、循环、条件、变量和传感器数据。适合机器人和自动化。</p>
  </div>
</div>

| | 快速连接 | 逻辑积木 |
|---|---|---|
| 搭建方式 | 行：输入 → 处理 → 操作 → 集线器 | 积木拼接成脚本 |
| 学习时间 | 几分钟 | 更长；可能性更多 |
| 最适合 | 小车、卡车、火车、起重机：“这个控件驱动那个电机” | 机器人、自动序列、传感器逻辑、游戏 |
| 逻辑（如果、循环、变量） | 不支持（只有阈值和切换） | 支持 |
| 传感器 | 集线器传感器作为输入；数值输出到指示器 | 所有集线器和手机传感器，可进行任意计算 |
| 平稳起步、限制、死区 | 现成积木 | 用积木搭建 |
| 带校准的舵机转向 | 现成积木 | 积木 |
| 游戏手柄 | 支持 | 支持 |
| 多个集线器 | 支持 | 支持 |

**不确定？**先从快速连接开始。如果之后需要逻辑，再为该模型创建一个逻辑积木配置文件。

如果没有选择类型就轻点**创建**，磁贴会高亮显示。每个磁贴上都有一个**文档 ↗**链接，指向本文档中的相应部分。

## 配置文件详情 {#profile-details}

- **图片**：点击图片区域（在触摸屏上长按）即可选择图片。上下拖动图片可选择显示的部分。之后可以用**更新图片**和**移除**进行更改。
- **名称**：必填，且必须唯一：“名为‘…’的个人资料已存在”表示你已经有一个同名的配置文件。
- **积木级别**（仅逻辑积木）：**初学者**、**进阶**或**大师**。它决定面板为此配置文件显示哪些积木。之后可以在编辑器设置中更改。参见[在编辑器中工作](/docs/Application/BlockBuilder/Editor#block-levels)。
- **标签**：用于描述配置文件，并帮助他人找到它。标签来自一个共享列表，联网时加载。

除程序类型外，其他内容之后都可以在**编辑配置文件**中更改；你还可以在那里添加描述，并把配置文件标记为**收藏**。

## 后续步骤 {#next-steps}

1. 添加集线器：[添加并连接集线器](/docs/Application/Hubs/ConnectingHubs)。
2. 摆放控件：[仪表板](/docs/Application/Dashboard/DashboardOverview)。
3. 编写程序：[快速连接](/docs/Application/Links/LinksIntroducing)或[逻辑积木](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing)。

:::tip AI 构建器
有了 [MocPilot Pro](/docs/Application/Account/Pro)，你可以用文字或语音描述模型，让 AI 构建器创建集线器、仪表板和程序（逻辑积木或快速连接）。请说明你使用的集线器、每个端口接了什么以及它应该做什么。参见[如何获得理想的结果](/docs/Application/Profiles/AiBuilder#ai-builder-tips)。
:::
