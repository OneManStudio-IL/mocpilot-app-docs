---
id: HowItWorks
title: MOCPilot 的工作原理
description: "配置文件、仪表板、集线器和程序：每个 MOCPilot 模型都由这四部分组成。"
---

import HowItWorks from '@site/src/components/HowItWorks';
import Screenshot from '@site/src/components/Screenshot';

# MOCPilot 的工作原理 {#how-mocpilot-works}

MOCPilot 中的一切都由四个部分构成。了解它们之后，每个界面都一目了然。

<HowItWorks />

## 1. 配置文件：一个模型 {#1-profile-one-model}

一个**配置文件**包含一个模型的全部内容：它的集线器、仪表板和程序。每个模型建一个配置文件，例如“Technic 越野车”或“起重机卡车”。

创建配置文件时，需要选择它的**程序类型**：逻辑积木或快速连接。之后无法更改。参见[创建配置文件](/docs/Application/Profiles/CreateProfile)。

## 2. 集线器：模型的电子部分 {#2-hubs-the-models-electronics}

**集线器**是模型中的蓝牙主机砖，电机、灯光和传感器都插在它的端口上。配置文件中有若干集线器**槽位**。你只需把模型的集线器添加到槽位中一次，以后每次打开配置文件，MOCPilot 都会自动连接它们。参见[集线器](/docs/Application/Hubs/HubsOverview)。

## 3. 仪表板：你的控制界面 {#3-dashboard-your-controls}

**仪表板**是你用来驾驶的界面。你可以在网格上摆放控件：操纵杆、滑块、按钮、开关、步进开关和监视器，以及方向盘、踏板等特殊控件。控件本身什么都不做，它只是把数值传给程序。参见[仪表板](/docs/Application/Dashboard/DashboardOverview)。

你也可以使用游戏手柄，与仪表板一起使用或代替仪表板。参见[游戏手柄](/docs/Application/Dashboard/Gamepad)。

## 4. 程序：把它们连接起来 {#4-program-what-connects-them}

**程序**决定移动控件时会发生什么：哪个电机转动、转多快，哪盏灯闪烁，监视器显示什么。

- 在**快速连接**中，程序是一组行：*输入 → 处理 → 操作 → 集线器*。参见[快速连接](/docs/Application/Links/LinksIntroducing)。
- 在**逻辑积木**中，程序由积木组成：事件、循环、条件、变量和传感器。参见[逻辑积木](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing)。

## 5. 运行 {#5-run}

按下**运行**（▶）。程序启动，仪表板上的控件开始工作，模型随之响应。按下**停止**即可回到编辑状态。参见[驾驶模型](/docs/Application/Profiles/PlayMode)。

<Screenshot name="links-editor" alt="快速连接程序：仪表板控件连接到集线器端口" width={900} />

## 典型的使用流程 {#a-typical-session}

1. 打开一个配置文件，或[新建一个](/docs/Application/Profiles/CreateProfile)。
2. 在**我的集线器**中添加集线器并打开电源。
3. 在**仪表板**上摆放控件。
4. 在**程序**中把它们连接到电机和灯光。
5. 按下**运行**，驾驶、调整，然后重复。

## 数据存储在哪里 {#what-is-stored-where}

- 配置文件保存在你的设备上。登录后，它们还会保存在你的账户中，并出现在你的所有设备上。参见[设备间同步](/docs/Application/Account/Sync)。
- 主题和其他购买项目属于你的账户。参见 [MocPilot Pro 与购买](/docs/Application/Account/Pro)。
