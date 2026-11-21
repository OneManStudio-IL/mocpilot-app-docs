---
id: Examples
title: 示例
description: "逻辑积木示例程序：驾驶、转向、灯光、声音、电量警告和传感器。"
---

# 示例 {#examples}

可以作为起点的简短程序。积木名称与[积木参考](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing#block-reference)一致；括号中的值是集线器、端口，或放在插槽中的报告积木。缩进的行位于 C 形积木内部。

## 用操纵杆驾驶 {#drive-with-a-joystick}

仪表板：操纵杆 **JOY1**。驱动电机接在端口 A。

```text
当程序启动时
永远重复
    启动电机于 (操纵杆 JOY1 Y轴) 速度 %  (Hub 1, 端口 A)
```

## 用舵机转向 {#steer-with-a-servo}

转向电机（角度电机）接在端口 B。先把它的当前位置设为中心，然后跟随操纵杆：`× 0.9` 把操纵杆的 −100…100 转换为 −90…90 度。

```text
当程序启动时
设置相对位置 0  (Hub 1, 端口 B)
永远重复
    移动到相对位置 (操纵杆 JOY1 X轴 × 0.9) 在 100 速度 %  (Hub 1, 端口 B)
```

对于带限位的转向齿条，请先进行校准（请参阅[电机](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_calibrate_steering_rack)）。`中心值` 和 `范围` 是变量。校准后齿条停在中间，但此时它的相对位置是中心值而不是 0，所以在转向前要先把它设为 0：

```text
当程序启动时
校准齿条 (中心值) 中心 (范围) 度  (Hub 1, 端口 B)
设置相对位置 0  (Hub 1, 端口 B)
永远重复
    移动到相对位置 ((范围 × 操纵杆 JOY1 X轴) ÷ 100) 在 100 速度 %  (Hub 1, 端口 B)
```

## 用开关控制灯光 {#lights-on-a-switch}

```text
当开关 SWCH1 已切换 开
    在...打开 100 亮度 %  (Hub 1, 端口 C)
当开关 SWCH1 已切换 关
    关闭  (Hub 1, 端口 C)
```

## 喇叭按钮 {#horn-button}

```text
当按钮 BTN1 按下
    声音 Car horn 播放直到结束
```

## 电量警告 {#battery-warning}

监视器 **MNTR1**；电量低时按钮变为红色。

```text
当程序启动时
永远重复
    显示 (Hub 1 % 电池) 在 MNTR1 监视器
    如果 (Hub 1 % 电池) < 20 然后
        设置 BTN1 颜色到 红色
    等待 5 秒
```

## 在障碍物前停车 {#stop-before-an-obstacle}

Technic 距离传感器接在端口 D，驱动电机接在端口 A。

```text
当程序启动时
永远重复
    如果 (距离 厘米  (Hub 1, 端口 D)) < 10 然后
        停止电机  (Hub 1, 端口 A)
        设置 LED 颜色为 红色  (Hub 1)
    其他
        启动电机于 (滑块 SLDR1) 速度 %  (Hub 1, 端口 A)
        设置 LED 颜色为 绿色  (Hub 1)
```

## 用步进开关限速 {#speed-limit-on-a-stepper}

有 4 个挡位的步进开关 **STPR1** 用来限制最高速度。

```text
当程序启动时
永远重复
    设置 (限速) 为 (步进开关 STPR1 × 25)
    启动电机于 (操纵杆 JOY1 Y轴 × 限速 / 100) 速度 %  (Hub 1, 端口 A)
```

`限速` 是一个变量（**变量 → 创建变量**）。

## 启动检查 {#startup-check}

在两个集线器都连接之前锁定油门。

```text
当程序启动时
设置 JOY1 交互性 禁用
等待直到 (Hub 1 已连接) 和 (Hub 2 已连接)
显示 "就绪" 在 MNTR1 监视器
设置 JOY1 交互性 启用
```

## 游戏手柄 {#gamepad}

在[游戏手柄页面](/docs/Application/Dashboard/Gamepad)上把**游戏手柄数值范围**设为 −100…100，并开启**启用游戏手柄块**。

```text
当程序启动时
永远重复
    启动电机于 (摇杆 左 Y轴) 速度 %  (Hub 1, 端口 A)
    移动到相对位置 (摇杆 右 X轴 × 0.9) 在 100 速度 %  (Hub 1, 端口 B)
```

## 带踏板的汽车 {#car-with-pedals}

关于用踏板、变速箱和手刹驾驶的汽车，请参阅[模拟器](/docs/Application/BlockBuilder/Blocks/Simulator)。

## 更多 {#more}

- 从[目录](/docs/Application/Profiles/Catalog)中安装官方配置文件，研究它们的程序。
- 在 [mocpilot.com](https://mocpilot.com) 上试用逻辑积木演示。
