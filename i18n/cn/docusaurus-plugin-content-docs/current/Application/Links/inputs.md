---
id: Inputs
title: 输入
description: "快速连接的输入：仪表板控件、模拟车辆、游戏手柄、集线器按钮和集线器传感器。"
---

import Screenshot from '@site/src/components/Screenshot';

# 输入 {#inputs}

每一行都从一个输入开始。积木面板的**输入**标签页列出：

- 每个**仪表板控件**对应一个积木；有多个通道的控件（操纵杆和方向键的轴、方向盘、踏板、换挡杆、手刹、转向灯）每个通道各对应一个积木；
- **车辆**积木：当仪表板上有踏板、换挡杆或手刹时出现；
- **游戏手柄**积木：开启游戏手柄积木后出现；
- 配置文件中的每个集线器各对应一个**集线器**积木（Mould King 除外，它没有按钮和传感器）。

如果标签页为空，会提示“在仪表板上添加控制器或在‘我的集线器’中添加集线器：它们会显示在这里”。

<Screenshot name="links-palette-inputs" alt="快速连接积木面板的“输入”标签页" width={900} />

每个输入的所有设置和数值都列在[输入积木](/docs/Application/Links/Blocks/InputBlocks)参考中。

## 仪表板控件 {#dashboard-controls}

[控制器](/docs/Application/Links/Blocks/InputBlocks#src-controller)积木按名称（**JOY1**、**SLDR1**、**BTN2**…）选取仪表板上的控件；如果控件有多个通道，还要选择所需的**通道**：

| 控件 | 行得到的数值 |
|---|---|
| [操纵杆](/docs/Application/Links/Blocks/InputBlocks#controller-joystick) | **X 轴**或 **Y 轴**，−1…1 |
| [滑块](/docs/Application/Links/Blocks/InputBlocks#controller-slider)、[列车控制器](/docs/Application/Links/Blocks/InputBlocks#controller-train)、[旋钮](/docs/Application/Links/Blocks/InputBlocks#controller-knob) | 它的位置 |
| [方向盘](/docs/Application/Links/Blocks/InputBlocks#controller-wheel) | **转向角度** −1…1 或**喇叭** |
| [踏板](/docs/Application/Links/Blocks/InputBlocks#controller-pedals) | **油门踏板**或**刹车踏板**，0…1 |
| [换挡杆](/docs/Application/Links/Blocks/InputBlocks#controller-gear) | **挡位**或**方向（R − / 前进 +）** |
| [手刹](/docs/Application/Links/Blocks/InputBlocks#controller-handbrake) | **手刹已拉起**（开/关）或**手刹力度** |
| [转向灯](/docs/Application/Links/Blocks/InputBlocks#controller-turnsignals) | **转向灯（左 − / 右 +）**、**左转向灯**、**右转向灯**或**灯光** |
| [方向键](/docs/Application/Links/Blocks/InputBlocks#controller-dpad) | **上 / 下**或**左 / 右**：−1、0 或 +1 |
| [按钮](/docs/Application/Links/Blocks/InputBlocks#controller-button) | 按住时为开 |
| [开关](/docs/Application/Links/Blocks/InputBlocks#controller-switch) | 开 / 关 |
| [步进开关](/docs/Application/Links/Blocks/InputBlocks#controller-stepper) | 当前挡位 |

当你在仪表板上添加、重命名或修改控件时，积木面板和各行会自动同步。如果把操纵杆设为**仅水平**，使用其 Y 轴的行会提示“…不沿此轴移动”。

## 像真车一样驾驶 {#drive-like-a-real-car}

方向盘、踏板、换挡杆和手刹提供的是原始位置：踏板行会让电机严格按照踏板踩下的程度运转。如果想让模型表现得像一辆真车（带惯性加速、滑行、刹车，挂 R 挡倒车），请改用[车辆](/docs/Application/Links/Blocks/InputBlocks#src-vehicle)输入。它会同时读取踏板、换挡杆和手刹，并给出车辆的**速度**、**发动机转速（rpm）**、**制动中**或**拉着手刹**：

- *车辆（速度）* → *电机* → 驱动电机；
- *方向盘（转向角度）* → *舵机* → 转向；
- *车辆（制动中）* → *灯光* → 刹车灯；
- *转向灯（左转向灯）* → *灯光* → 左侧转向指示灯。

## 游戏手柄 {#gamepad}

一个[游戏手柄](/docs/Application/Links/Blocks/InputBlocks#src-gamepad)积木就涵盖整个手柄；在**输入**中选择摇杆、扳机或按钮。请先在[游戏手柄页面](/docs/Application/Dashboard/Gamepad)上开启**启用游戏手柄块**。按键标签跟随**游戏手柄按钮布局**（Xbox 或 PlayStation）。

## 集线器按钮和传感器 {#hub-buttons-and-sensors}

[集线器](/docs/Application/Links/Blocks/InputBlocks#src-hub)输入读取集线器的按钮或其某个传感器：电池、倾斜、加速度、电机速度和位置、端口上的距离传感器和颜色传感器等。列表只显示该集线器能够报告的内容。对于倾斜和加速度，请把**集线器方向**设置为与集线器在模型中的安装方式一致。

数值沿行传递时会被缩放到 −1…1。紧跟在传感器后面的文本**监视器**会显示带单位的真实数值，例如“7.85 V”或“−12°”。

典型用法：

- *电池* → *指示器*（电池电量）；
- *距离传感器* → *阈值*（低于，20 %）→ *定时电机*：有物体靠近时后退；
- *按钮 1*（Powered Up 遥控器）→ *电机*：用实体遥控器驾驶。
