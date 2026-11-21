---
id: LinksIntroducing
title: 快速连接简介
description: "快速连接逐行把仪表板控件连接到集线器的电机和灯光，无需编写代码。"
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# 快速连接 {#quick-links}

**快速连接**是 MOCPilot 的无代码程序编辑器。你可以把仪表板控件、游戏手柄或集线器传感器连接到电机、灯光和指示器，**一次一行**。如果你用过经典的 Controlz 应用，会觉得非常熟悉。

<img src={useBaseUrl('/img/illustrations/editor_links.svg')} alt="快速连接的行" style={{width: '100%', maxWidth: 720}} />

## 一行就像一句话 {#a-row-reads-like-a-sentence}

每一行从左到右依次是：

**输入 → 处理（可选）→ 操作 → 输出**

> *操纵杆 1，Y 轴* → *平滑* → *电机* → *Technic Hub，端口 A*
>
> “当我上下推动操纵杆时，端口 A 上的电机就会转动，并且平稳地启动和停止。”

| 部分 | 含义 | 示例 |
|---|---|---|
| **输入** | 数值从哪里来 | 仪表板控件、模拟车辆、游戏手柄、集线器按钮或传感器 |
| **处理** | 在途中改变数值（可以没有，也可以有一个或多个积木） | 反转、限制、死区、阈值、平滑、切换 |
| **操作** | 集线器要做什么 | 电机、舵机、定时电机、灯光、按角度运行、转到位置… |
| **输出** | 在哪里执行 | 一个带端口的**集线器**，或直接输出：指示器、集线器 LED、LED 点阵、校准舵机 |

直接输出（指示器、集线器 LED、LED 点阵、校准舵机）不需要操作：*集线器电池 → 指示器*。

## 编辑器 {#the-editor}

<Screenshot name="links-editor" alt="带有行和积木面板的快速连接编辑器" width={900} />

- **行**铺满屏幕，可以上下滚动。新行从最后一个空行（“新行：输入”）开始。
- 底部的**积木面板**有三个标签页：**输入**、**处理**和**输出**。它根据你的配置文件自动生成：每个仪表板控件和“我的集线器”中的每个集线器都会自动出现；开启游戏手柄积木后会出现游戏手柄；只有配置文件中的某个集线器支持的操作才会出现。
- 顶栏中的**问题**按钮：所有行都准备就绪时显示绿色对勾，否则显示红色“!”和问题数量。

## 搭建一行 {#build-a-row}

1. 从**输入**中把一个输入拖到空行里，就会创建一个新行。
2. 如有需要，从**处理**中把处理积木拖到输入后面。
3. 从**输出**中拖入一个操作（例如**电机**）。
4. 把**集线器**输出拖到操作后面，然后点按要使用的端口。
5. 点按任意积木即可修改设置：只需从选项中选择，无需输入文字。

积木像拼图一样拼接在一起。每个接口的形状表示信号类型，因此无法配合工作的积木不会吸附在一起：

- **数值**，范围 −1 到 1（操纵杆轴、滑块、踏板、传感器）；
- **开/关**（按钮、开关、阈值）；
- **操作 → 集线器**接口，因此集线器只能跟在操作后面。

要移除积木，可以把它拖回积木面板（“拖到此处删除”），或者点按它并选择**删除积木**。

## 行 {#rows}

点按行号即可打开行菜单：

- **关闭** / **开启**：关闭的行仍保留在程序中，但不会运行。做实验时很方便。
- **删除行**。

行数不限，想加多少就加多少。

## 运行 {#run}

按下**运行**。程序运行时，每个接口都会显示流经它的**实时数值**，让你清楚地看到信号在哪里中断。程序运行期间无法编辑；按**停止**即可重新编辑。请参阅[运行与排查问题](/docs/Application/Links/Problems)。

## 撤销 {#undo}

**撤销**和**重做**（⌘Z / ⇧⌘Z、Ctrl+Z / Ctrl+Shift+Z，或浮动按钮）最多可回退 100 步。程序运行时不可用。

## 了解更多 {#read-more}

- [输入](/docs/Application/Links/Inputs)：控件、车辆、游戏手柄、集线器按钮和传感器
- [处理](/docs/Application/Links/Processing)：反转、限制、死区、阈值、平滑、切换
- [操作与输出](/docs/Application/Links/Operations)
- [集线器积木与端口](/docs/Application/Links/HubsAndPorts)
- [运行与排查问题](/docs/Application/Links/Problems)
- [示例：汽车、坦克、起重机、火车](/docs/Application/Links/Examples)
- 积木参考：[输入](/docs/Application/Links/Blocks/InputBlocks)、[处理](/docs/Application/Links/Blocks/ProcessingBlocks)、[操作与输出](/docs/Application/Links/Blocks/OutputBlocks)

## 快速连接还是逻辑积木？ {#quick-links-or-logic-blocks}

如果每个控件只是简单地驱动某个部件，快速连接是理想之选。如果需要逻辑（顺序动作、条件、变量，或对传感器做出多步骤反应），请使用[逻辑积木](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing)。程序类型在创建配置文件时选择；请参阅[对比](/docs/Application/Profiles/CreateProfile#choose-the-program-type)。
