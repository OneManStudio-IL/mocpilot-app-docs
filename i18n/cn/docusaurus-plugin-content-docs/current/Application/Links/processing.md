---
id: Processing
title: 处理
description: "快速连接的处理积木：反转、限制、死区、阈值、平滑和切换。"
---

# 处理 {#processing}

处理积木位于输入和操作之间，在途中改变数值。一行中可以没有处理积木，也可以有一个或多个，顺序不限。设置项和允许的数值请参阅[处理积木](/docs/Application/Links/Blocks/ProcessingBlocks)。

| 积木 | 作用 |
|---|---|
| [反转](/docs/Application/Links/Blocks/ProcessingBlocks#mod-invert) | 反转方向，或互换开和关 |
| [限制](/docs/Application/Links/Blocks/ProcessingBlocks#mod-limit) | 限制数值上限 |
| [死区](/docs/Application/Links/Blocks/ProcessingBlocks#mod-deadzone) | 忽略零点附近的微小移动 |
| [阈值](/docs/Application/Links/Blocks/ProcessingBlocks#mod-threshold) | 把数值转换为开/关 |
| [平滑](/docs/Application/Links/Blocks/ProcessingBlocks#mod-smooth) | 逐渐加速和减速 |
| [切换](/docs/Application/Links/Blocks/ProcessingBlocks#mod-toggle) | 按一次为开，再按一次为关 |

## 反转 {#invert}

电机转反了？加一个**反转**就行，不用重新搭建模型。如果两个电机必须朝相反方向转动（左右履带、变速箱两侧），就用同一个输入做两行，并在其中一行加上反转。

## 限制 {#limit}

让模型更慢、更容易控制：把**最大值**设为 50 % 时，摇杆推到底只有一半速度。适合孩子、室内驾驶和精密机构。

## 死区 {#dead-zone}

操纵杆松开后很少正好停在零点，电机可能会嗡嗡作响或缓慢蠕动。**死区**会把很小的数值当作零。10 % 是个不错的起点。

## 阈值 {#threshold}

把数值转换为开/关：“数值**高于** 20 % 时开启”。配合传感器使用时，*距离传感器* → *阈值*（低于，20 %）会在有物体靠近时开启。阈值带有少量回差，因此在临界点不会来回闪烁。

## 平滑 {#smooth}

像真实车辆一样逐渐启动和停止。加速和减速分别设置：一辆重型卡车可能需要 2 秒加速、0.5 秒停下。用在灯光上时，平滑会让灯光渐亮和渐灭。

## 切换 {#toggle}

把按钮变成开关：按一次开启，再按一次关闭。*按钮* → *切换* → *灯光*。

## 提示 {#tips}

- 顺序很重要：*死区 → 限制 → 平滑* 是驾驶时很好用的组合。
- 与信号不匹配的积木无法吸附：切换需要开/关输入；死区和阈值需要数值。
- 程序运行时观察实时数值，就能看到每个积木的作用。
