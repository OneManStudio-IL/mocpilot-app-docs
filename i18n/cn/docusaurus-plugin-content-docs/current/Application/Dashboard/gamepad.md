---
id: Gamepad
title: 游戏手柄
description: "用 Xbox 或 PlayStation 风格的游戏手柄驾驶你的模型。"
---

import Screenshot from '@site/src/components/Screenshot';

# 游戏手柄 {#gamepad}

实体游戏手柄往往比触摸屏更好用：有真实的摇杆、扳机和按键。MOCPilot 支持设备系统所支持的蓝牙和 USB 游戏手柄（在 iPhone、iPad、Android、Mac 和 Windows 上使用 Xbox 和 PlayStation 风格的手柄）。

游戏手柄与仪表板可以同时使用。

## 连接游戏手柄 {#connect-a-gamepad}

1. 在系统的蓝牙设置中，把游戏手柄与手机、平板或电脑配对（或通过 USB 连接）。
2. 打开一个配置文件，在编辑器中轻点**游戏手柄**。
3. 页面标题会显示 **游戏手柄：（名称）**。“游戏手柄未连接”表示系统还没有识别到它。

<Screenshot name="gamepad" alt="游戏手柄页面" width={900} />

## 游戏手柄页面 {#gamepad-page}

- **启用游戏手柄块**：为此配置文件开启游戏手柄输入。不开启时，带有游戏手柄输入的快速连接行会提示“请在‘游戏手柄’页面（顶栏）中启用游戏手柄积木”，逻辑积木中也不会显示游戏手柄类别。
- **游戏手柄按钮布局**：**Xbox**（A、B、X、Y、LB、RB、LT、RT）或 **Sony PS**（叉、圆、方、三角、L1、R1、L2、R2）。编辑器会按此选择标注按键。
- **游戏手柄数值范围**（逻辑积木）：摇杆输出 **-1..1** 或 **-100..100**。
- **选择游戏手柄**：连接了多个游戏手柄时使用。
- **测试手柄** → **测试**：实时测试工具，会显示按键、扳机、摇杆和方向键，方便你在使用前检查一切是否正常。

这些设置保存在配置文件中。

## 在快速连接中使用游戏手柄 {#use-the-gamepad-in-quick-links}

把**游戏手柄**输入拖到一行中，并选择它的**输入**：

- 摇杆：左摇杆 Y、左摇杆 X、右摇杆 Y、右摇杆 X；
- 扳机：RT / LT（R2 / L2）；
- 正面按键：A、B、X、Y（叉、圆、方、三角）；
- 肩键：LB / RB（L1 / R1）；
- 方向键：上、下、左、右。

示例：*游戏手柄*（左摇杆 Y）→ *平滑* → *电机* → *集线器*（端口 A）。参见[输入](/docs/Application/Links/Inputs#gamepad)。

## 在逻辑积木中使用游戏手柄 {#use-the-gamepad-in-logic-blocks}

**游戏手柄**类别中有事件积木（*当游戏手柄按键 …*、*当游戏手柄方向键 …*、*当游戏手柄摇杆 …*）和数值积木（按键、方向键、摇杆、扳机压力）。参见[游戏手柄积木](/docs/Application/BlockBuilder/Blocks/Gamepad)。

## 用于发布的配置文件 {#profiles-for-publishing}

只使用游戏手柄、没有仪表板控件的配置文件也可以发布到目录：要求是“仪表板控制器或游戏手柄”。
