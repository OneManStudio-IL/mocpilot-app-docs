---
id: FirstCarBlocks
title: 用逻辑积木制作同一辆车
description: "分步指南：在逻辑积木中为一辆带驱动、舵机转向、车灯和转向灯的 LEGO 遥控车编写程序。"
---

import Screenshot from '@site/src/components/Screenshot';

# 用逻辑积木制作同一辆车 {#the-same-car-in-logic-blocks}

本教程将再次制作[用快速连接制作你的第一辆遥控车](/docs/Tutorials/FirstCarLinks)中的小车，这次使用[逻辑积木](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing)。最终效果相同：一个操纵杆负责驾驶和转向，一个按钮负责车灯。同时，你还会学到积木编程的基础知识：事件、循环、变量和监视器。最后，你还可以添加带“嘀嗒”声的转向灯。

**你需要准备**：与快速连接教程中相同的模型：

- 一个 LEGO® Technic™ 集线器（88012）；
- 一个接在**端口 A** 上的驱动电机；
- 一个接在**端口 B** 上、带编码器的转向电机（Technic L 或 XL 电机，或任意 Technic 角度电机）；
- 接在**端口 C** 上的 LEGO® 灯（可选）。

如果使用 City 集线器，请使用端口 **A** 和 **B**，并省略车灯。

**最终效果**：

```text
当程序启动时
设置 (lights) 为 0
设置相对位置 0  (集线器 1，端口 B)
永远重复
    设置 (throttle) 为 (操纵杆 JOY1 Y轴)
    启动电机于 (throttle) 速度 %  (集线器 1，端口 A)
    移动到相对位置 (操纵杆 JOY1 X轴 × 0.9) 在 100 速度 %  (集线器 1，端口 B)

当按钮 BTN1 按下
    如果 (lights) = 0 然后
        在 100 亮度 % 打开  (集线器 1，端口 C)
        设置 (lights) 为 1
    其他
        关闭  (集线器 1，端口 C)
        设置 (lights) 为 0
```

如何阅读这些代码清单：每一行是一个积木，与应用中显示的一致。括号中的值是你在积木中选择的集线器和端口，或者是你放入插槽中的积木或变量。缩进的行位于其上方的 C 形积木内部。

## 1. 创建配置文件 {#create-the-profile}

1. 在**我的配置文件**中新建一个配置文件（手机上为 **+** → **新建配置文件**，平板上为**新建配置文件**，电脑上为**文件 → 新建配置文件**）。
2. 选择**逻辑积木**磁贴。
3. 输入**名称**，并把**积木级别**设为**进阶**。这里用到的**永远重复**循环和**如果 … 然后 … 其他**都属于进阶积木；**初学者**面板中不会显示它们。
4. 轻点**创建**。

之后可以在**编辑器设置** → **选择积木级别**中更改级别。参见[创建配置文件](/docs/Application/Profiles/CreateProfile)和[积木级别](/docs/Application/BlockBuilder/Editor#block-levels)。

## 2. 添加集线器和控件 {#hub-and-dashboard}

完全按照快速连接教程中的步骤操作：

1. 在**我的集线器**中[添加并连接集线器](/docs/Tutorials/FirstCarLinks#add-the-hub)。
2. [在仪表板上放置控件](/docs/Tutorials/FirstCarLinks#dashboard)：左侧放一个**操纵杆**（**JOY1**），右侧放一个**按钮**（**BTN1**）。

<Screenshot name="tutorial-car-dashboard" alt="仪表板：左侧是 JOY1 操纵杆，右侧是 BTN1 按钮" width={900} />

集线器添加到配置文件后，面板中会出现**电机**和**灯光**类别；控件则出现在**屏幕控制器**中。

## 3. 用事件还是用循环？ {#events-or-loop}

一个脚本以**事件**积木开头，并从上到下依次运行其下方的积木。多个脚本会同时运行。

- 像[当按钮 … 按下](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_button_event)这样的事件积木，每次事件发生时都会把它的脚本运行一次。事件适合在某一时刻发生的事情：按下按钮、拨动开关、打转向灯。
- 操纵杆则一直在变化。跟踪它最简单的方法，是用一个以[当程序启动时](/docs/Application/BlockBuilder/Blocks/Events#block_event_when_program_started)开头的脚本，在[永远重复](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_forever)循环中不断读取摇杆。

这辆车两种方式都会用到：用循环来驾驶和转向，用事件来控制车灯。

## 4. 驱动 {#drive}

1. 从**事件**中把[当程序启动时](/docs/Application/BlockBuilder/Blocks/Events#block_event_when_program_started)拖到程序区域。
2. 从**控制**中把[永远重复](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_forever)接在它下方。
3. 从**电机**中把[启动电机于 … 速度 %](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_start_motor_at_speed)放进**永远重复**内部。选择集线器和端口 **A**。
4. 从**屏幕控制器**中把[操纵杆](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_joystick_value_float)数值积木拖到速度插槽中。选择 **JOY1** 和 **Y轴**。

```text
当程序启动时
永远重复
    启动电机于 (操纵杆 JOY1 Y轴) 速度 %  (集线器 1，端口 A)
```

把车放在支架上，按下**运行**并推动操纵杆：操纵杆输出 −100 到 100，恰好就是以百分比表示的电机速度。完成后按下**停止**。

**向上推时车却在后退？**使用**运算符**中的 [… × …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_multiply)：`(操纵杆 JOY1 Y轴 × -1)`。**太快了？**改为乘以 0.5。

## 5. 转向 {#steer}

转向电机通过[移动到相对位置 … 在 … 速度 %](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_go_to_relative_position)跟随操纵杆的 X 轴。相对位置从你用[设置相对位置 …](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_set_relative_position)设定的点开始计算。

1. 把**设置相对位置**接在**当程序启动时**正下方、**永远重复**上方。数值保持为 0，并选择端口 **B**。
2. 在**永远重复**内部、电机积木下方，添加端口为 **B** 的**移动到相对位置 … 在 … 速度 %**。
3. 在它的位置插槽中放入 **… × …**，左边放操纵杆的 **X轴**，右边填 `0.9`。这会把 −100…100 转换为 −90…90 度。
4. 把速度设为 100。

```text
当程序启动时
设置相对位置 0  (集线器 1，端口 B)
永远重复
    启动电机于 (操纵杆 JOY1 Y轴) 速度 %  (集线器 1，端口 A)
    移动到相对位置 (操纵杆 JOY1 X轴 × 0.9) 在 100 速度 %  (集线器 1，端口 B)
```

每次**运行**前，请先用手把车轮摆正：这个位置就会成为中心。如果车轮转得太多，请使用比 0.9 小的数；如果转向方向反了，请使用 −0.9。

### 可选：自动校准转向 {#calibrate-rack}

如果转向机构有限位，[校准齿条 … 中心 … 度 …](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_calibrate_steering_rack)会自动帮你找出中心和行程。先创建两个变量（**变量** → **创建变量**），例如 `center` 和 `range`，然后把它们放进积木的插槽中。该积木会把齿条转到两端，停在中间，并把结果写入变量；校准完成后脚本继续运行。

```text
当程序启动时
校准齿条 (center) 中心 (range) 度  (集线器 1，端口 B)
设置相对位置 0  (集线器 1，端口 B)
永远重复
    启动电机于 (操纵杆 JOY1 Y轴) 速度 %  (集线器 1，端口 A)
    移动到相对位置 ((range × 操纵杆 JOY1 X轴) ÷ 100) 在 100 速度 %  (集线器 1，端口 B)
```

校准后紧接着执行**设置相对位置 0**，会把中间位置设为零点，这样把摇杆推到底时，车轮正好转过测得的行程。

## 6. 用按钮控制车灯 {#lights}

快速连接中有现成的切换积木。在逻辑积木中，则由一个[变量](/docs/Application/BlockBuilder/Blocks/Variables)来记住车灯是否打开。

1. 在**变量**中轻点**创建变量**，并将其命名为 `lights`。
2. 在主脚本开头添加[设置 … 为 …](/docs/Application/BlockBuilder/Blocks/Variables#block_variables_set_to)：`设置 (lights) 为 0`。
3. 从**屏幕控制器**中把[当按钮 … 按下](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_button_event)拖到空白处，并选择 **BTN1**。
4. 在它下方添加[如果 … 然后 … 其他](/docs/Application/BlockBuilder/Blocks/Control#block_control_if_else)，条件为 [… = …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_equal)：`(lights) = 0`。
5. 在第一个分支中，添加[在 … 亮度 % 打开](/docs/Application/BlockBuilder/Blocks/Light#block_hubs_all_light_light_turn_to)（端口 **C**）和 `设置 (lights) 为 1`。在第二个分支中，添加[关闭](/docs/Application/BlockBuilder/Blocks/Light#block_hubs_all_light_light_turn_off)（端口 **C**）和 `设置 (lights) 为 0`。

```text
当按钮 BTN1 按下
    如果 (lights) = 0 然后
        在 100 亮度 % 打开  (集线器 1，端口 C)
        设置 (lights) 为 1
    其他
        关闭  (集线器 1，端口 C)
        设置 (lights) 为 0
```

如果用**开关**代替按钮，就更简单了：*当开关 … 已切换为开 / 关*；参见[示例](/docs/Application/BlockBuilder/Examples)。

## 7. 运行并观察监视器 {#monitor}

如果某些功能没有按预期工作，请查看数值。[监视器](/docs/Application/BlockBuilder/Editor#monitor)（在电脑上位于顶栏中，在手机或平板上位于**更多**中）会在程序运行时显示每个变量。

1. 创建一个变量 `throttle`。
2. 在循环中把操纵杆数值存入该变量，并用这个变量作为电机速度：

```text
永远重复
    设置 (throttle) 为 (操纵杆 JOY1 Y轴)
    启动电机于 (throttle) 速度 %  (集线器 1，端口 A)
    移动到相对位置 (操纵杆 JOY1 X轴 × 0.9) 在 100 速度 %  (集线器 1，端口 B)
```

3. 按下**运行**并打开**监视器**。移动操纵杆并按下 BTN1：`throttle` 会跟随摇杆变化，`lights` 会在 0 和 1 之间切换。

<Screenshot name="blocks-monitor" alt="程序运行时显示变量和列表的监视器" width={900} />

- `throttle` 在变化但电机不转：请在**我的集线器**中检查集线器连接，并检查积木中的端口。
- `throttle` 一直为 0：请检查积木读取的是否为 **JOY1** 以及正确的轴。

在逻辑积木中，程序运行时仍可编辑，因此你可以修改一个数字并立即看到效果。完整的程序如下：

<Screenshot name="tutorial-car-blocks-program" alt="完成后的小车程序：带永远重复循环的主脚本，以及 BTN1 车灯脚本" width={900} />

更多帮助：[故障排除](/docs/Help/Troubleshooting)。

## 8. 可选：带声音的转向灯 {#turn-signals}

在仪表板上添加**转向灯**[特殊控件](/docs/Application/Dashboard/SpecialControls#turn-signals)（**STALK1**），并在**端口 D** 上接一盏灯。把拨杆向上拨为左转向灯，向下拨为右转向灯。

```text
当转向灯 STALK1 左转向灯 打开
    声音 转向灯 播放
    重复直到 不 (转向灯 STALK1 左转向灯 已打开 ？)
        在 100 亮度 % 打开  (集线器 1，端口 D)
        等待 0.5 秒
        关闭  (集线器 1，端口 D)
        等待 0.5 秒
    停止声音 转向灯
```

用到的积木：**屏幕控制器**中的[当转向灯 …](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_turnsignals_event)和[转向灯 … 已打开 ？](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_turnsignals_value_boolean)；**声音**中的[声音 … 播放](/docs/Application/BlockBuilder/Blocks/Sounds#block_sounds_play)和[停止声音 …](/docs/Application/BlockBuilder/Blocks/Sounds#block_sounds_stop)；**控制**中的[重复直到 …](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_until)和[等待 … 秒](/docs/Application/BlockBuilder/Blocks/Control#block_control_wait_for)；**运算符**中的[不 …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_not)。

**转向灯**声音会自动重复播放，直到你停止它。声音在你的手机、平板或电脑上播放。

复制该脚本（长按或右键单击 → **复制**），并在两个积木中都选择**右转向灯**。这样两侧转向灯都会让端口 D 上的同一盏灯闪烁；如果要让左右灯分开，需要两个空闲端口，例如在第二个集线器上。

## 快速连接还是逻辑积木：该选哪个？ {#which-to-choose}

| | 快速连接 | 逻辑积木 |
|---|---|---|
| 这辆车 | 3 行 | 2 个脚本、2 个变量 |
| 平稳起步、死区、限制 | 现成积木 | 自己相乘和计算 |
| 舵机转向 | 带自动校准的舵机积木 | 相对位置积木或校准齿条 |
| 用按钮控制车灯 | 切换积木 | 一个变量加*如果 … 然后 … 其他* |
| 声音、序列、条件 | 不支持 | 支持 |
| 实时数值 | 显示在行的每个连接点上 | 监视器和仪表板上的监视器 |
| 运行时编辑 | 不支持 | 支持 |

如果每个控件只是简单地驱动某个部件，请选择**快速连接**：小车、卡车、火车、起重机。如果需要逻辑，请选择**逻辑积木**：声音、闪烁模式、动作序列、对传感器的响应、游戏。程序类型无法更改，但你可以为同一个模型再创建一个配置文件。更多内容请参见[创建配置文件](/docs/Application/Profiles/CreateProfile#choose-the-program-type)。

## 后续步骤 {#next-steps}

- 在仪表板**监视器**上显示电池电量，并在电量不足时发出警告：[示例](/docs/Application/BlockBuilder/Examples#battery-warning)。
- 使用游戏手柄驾驶：[游戏手柄积木](/docs/Application/BlockBuilder/Blocks/Gamepad)和[游戏手柄示例](/docs/Application/BlockBuilder/Examples#gamepad)。
- 借助踏板、变速箱和惯性，让小车的手感更真实：[模拟器](/docs/Application/BlockBuilder/Blocks/Simulator)。
- 熟悉编辑器：[在编辑器中工作](/docs/Application/BlockBuilder/Editor)。
