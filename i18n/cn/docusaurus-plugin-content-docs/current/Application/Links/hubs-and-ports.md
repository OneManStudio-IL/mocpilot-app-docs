---
id: HubsAndPorts
title: 集线器积木与端口
description: "快速连接中的集线器积木：选择端口、端口检查以及端口被占用时的提示。"
---

import Screenshot from '@site/src/components/Screenshot';

# 集线器积木与端口 {#hub-block-and-ports}

[集线器](/docs/Application/Links/Blocks/OutputBlocks#hub-out)输出跟在操作后面，结束一行。**我的集线器**中的每个集线器各对应一个集线器积木，所以请先在那里添加集线器。在此之前，标签页会提示“在‘我的集线器’中添加集线器或在仪表板上添加指示器：它们会显示在这里”。

## 集线器积木显示的内容 {#what-the-hub-block-shows}

- 集线器的名称和一个**连接圆点**（是否已连接）；
- 以选项形式显示的**端口**：LEGO® 集线器和 SBrick 上为 A、B、C、D…（Robot Inventor 和 Mould King 6.0 上为 A–F），BuWizz 2.0 上为 1–4，BuWizz 3.0 Pro 上为 1–4 加上 A 和 B；
- 一行副标题：“端口 A, B”“选择端口”“整个集线器”（在整个集线器的操作之后）或“驱动、转向、灯光”（Technic Move）。

## 选择端口 {#choose-ports}

点按端口选项即可使用该端口；再点按一次即可释放。一行可以同时驱动**多个端口**，例如 A 和 B 上的两个驱动电机。

需要两个电机朝相反方向转动？用同一个输入做两行，并在其中一行加上**反转**。

## 一个端口，一行 {#one-port-one-row}

一个端口只属于一行。如果你选择的端口已被另一行使用，MOCPilot 会询问：

> **端口已被占用**：在“Technic Hub”上，端口 A 已在第 2 行（电机）中使用。要在此行使用吗？另一行将失去此端口并停止驱动它。

**在此行使用**会把端口移到当前行；**取消**则保持原样。被两行同时使用的端口（例如在旧文件中）会被报告为问题：“端口 A 也在第 2 行中使用”。

<Screenshot name="port-in-use" alt="“端口已被占用”对话框" width={700} />

## 端口检查 {#port-checks}

集线器连接后，MOCPilot 知道每个端口上插的是什么，并检查操作是否匹配：

| 问题 | 含义 |
|---|---|
| “端口 A：此设备不能用作舵机（需要带编码器的电机）” | 舵机和按角度运行需要带编码器的电机 |
| “端口 A：电机没有绝对位置（仅限角度电机）” | 转到位置需要角度电机 |
| “端口 A 连接的是传感器，不是电机” | 端口上的设备是传感器 |
| “端口 A 只接受简单的速度命令：不支持位置控制” | 此端口无法控制位置 |
| “端口 A 没有 LED：请使用端口 1-4” | 端口颜色仅适用于 BuWizz 3.0 Pro 的端口 1–4 |
| “传感器灯光：只选一个端口，即接距离传感器的端口” | 传感器灯光只能使用一个端口 |

集线器无法执行的操作不会为它提供。如果把某一行切换到另一个集线器，这一行会指出哪个操作不匹配，例如“刹车：仅 Technic Move（…没有刹车命令）”。

## Technic Move Hub {#technic-move-hub}

Technic Move Hub（用于 LEGO® Technic 遥控车）按功能而不是按端口驱动：它的集线器积木显示**驱动、转向、灯光**，不需要选择端口。用**电机**或**定时电机**驱动，用**舵机**转向，用**灯光**控制灯，用**刹车**、**Boost** 和**动力脉冲**实现特殊功能。

驱动、转向、灯光、刹车和 Boost 各自只能由一行使用（“第 2 行已负责此 Technic Move 的驱动”）。

要把汽车配置加载到集线器中（Porsche、Lamborghini、Batmobile），请使用**我的集线器 → 选择配置**。请参阅 [Technic Move Hub 配置](/docs/Application/Hubs/TechnicMoveHubConfigurations)。

## Mould King {#mould-king}

Mould King 集线器只接收命令，因此没有输入，也不提供连接反馈。要切换集线器的控制通道，请使用[通道](/docs/Application/Links/Blocks/OutputBlocks#op-channel)操作。
