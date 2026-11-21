---
id: BlocksIntroducing
title: 逻辑积木简介
description: "逻辑积木是 MOCPilot 的可视化积木编程编辑器：事件、循环、条件、变量、传感器和声音。"
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# 逻辑积木 {#logic-blocks}

**逻辑积木**是 MOCPilot 中的积木编程编辑器。你可以像在 Scratch 中一样，把积木拼接起来编写程序：事件、循环、条件、变量、列表、自定义积木、声音，以及用于电机、灯光、传感器、仪表板控件和游戏手柄的积木。

当你的模型需要逻辑时，请选择逻辑积木：机器人、自动动作序列、对传感器的反应、启动检查、游戏。如果只需要把控件连接到电机，[快速连接](/docs/Application/Links/LinksIntroducing)会更快。

<img src={useBaseUrl('/img/illustrations/editor_blocks.svg')} alt="逻辑积木程序" style={{width: '100%', maxWidth: 720}} />

:::warning 不是 Scratch
逻辑积木有自己的一套积木和自己的行为方式。你不能把 MOCPilot 程序导入 Scratch，也不能把 Scratch 项目导入 MOCPilot。
:::

## 编辑器一览 {#the-editor-at-a-glance}

<Screenshot name="blocks-editor" alt="带有积木面板和程序的逻辑积木编辑器" width={900} />

- **积木面板**列出各个积木类别：**事件**、**控制**、**传感器**、**声音**、**运算符**、**变量**、**列表**和**我的模块**。其他类别会在配置文件需要时出现：**电机**和**灯光**（当集线器支持时）、**模拟器**（当仪表板上有踏板、变速箱或手刹时）、**屏幕控制器**和**游戏手柄**。
- **程序区**是你拖放积木、搭建脚本的地方。
- 顶栏中有**我的集线器**、**仪表板**、**游戏手柄**、**监视器**、**编辑器设置**、**AI 构建器**以及**运行/停止**。

详情请参阅[在编辑器中工作](/docs/Application/BlockBuilder/Editor)。

## 程序如何运行 {#how-a-program-runs}

- 脚本以一个**事件**积木（帽子积木）开头：*当程序启动时*、*当按钮 … 按下*、*当我接收时 …* 等。
- 连接在它下面的积木从上到下依次运行。
- 多个脚本会**同时**运行。用消息（*传递*）来协调它们。
- **循环**（*永远重复*、*重复*、*重复直到*）让脚本持续运行；**条件**（*如果*、*如果 … 其他*、*等待直到*）用来做判断。
- **报告**积木（圆角）返回数值，可以放进其他积木的输入中；**布尔**积木（尖角）为条件返回真或假。
- **变量**和**列表**在积木和脚本之间保存数值。

## 积木形状 {#block-shapes}

### 帽子积木 {#hat-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />
  <img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />
</div>

在某件事发生时启动脚本。只能在它们下面连接积木。

---

### 堆叠积木 {#stack-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
</div>

主要的命令积木：每个积木执行一个动作。

---

### C 形积木 {#c-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />
</div>

可以在内部容纳其他积木的 C 形积木：循环和条件。

---

### 报告积木 {#reporter-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />
</div>

返回一个值，例如数字或文本。

---

### 布尔积木 {#boolean-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />
</div>

只返回 `true` 或 `false`。通常用在条件中。

---

### 结束积木 {#cap-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />
</div>

结束一个脚本：它们下面不能再连接任何积木。

---

### 积木堆 {#block-stack}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks_stack.svg')} alt="blocks_stack.svg" />
</div>

积木堆是一组相互连接的积木，作为一个脚本从上到下运行。
积木堆通常以一个事件积木开头，后面是按顺序运行的积木。

---


## 集线器、端口和控件 {#hubs-ports-and-controls}

- 电机和灯光积木需要指定**集线器**和**端口**。只有当配置文件中的集线器支持时，才会出现“电机”和“灯光”类别；有些积木只适用于特定集线器（例如 BuWizz 功率模式或 Technic Move Hub 的功能）。每个积木的说明中都写明了它适用于哪些集线器。
- 仪表板积木按名称引用控件（**JOY1**、**BTN2**）。当有积木在使用某个控件时，不能从仪表板上删除它；请先移除这些积木。
- 在[游戏手柄页面](/docs/Application/Dashboard/Gamepad)上开启**启用游戏手柄块**后，会出现游戏手柄积木。

## 积木级别 {#block-levels}

每个配置文件都有一个**积木级别**：**初学者**显示最简单的积木，**进阶**增加常用的逻辑和设备积木，**大师**显示全部积木。可以在创建配置文件时选择，也可以稍后在编辑器设置中更改。本参考在每个积木名称旁边标出了它的级别。

## 推荐的工作流程 {#recommended-workflow}

1. 从一个事件积木和一段简短的脚本开始；按**运行**，检查它是否正常工作。
2. 尽早检查电机方向和数值范围（监视器会很有帮助）。
3. 把程序拆分成通过消息相互通信的小脚本；把重复的逻辑移到[我的模块](/docs/Application/BlockBuilder/Blocks/MyBlocks)中。
4. 加入安全措施：限制、停止、启动检查，以及集线器断开连接时的应对方案。

## 常见错误 {#common-pitfalls}

- 没有事件积木的脚本永远不会启动。
- 选错了集线器或端口，所以看不到任何效果。
- 混用文本、数字和布尔值会产生意外的结果。
- 不加过滤的高频事件（例如传感器每次微小变化都触发的事件）可能会让程序过载；请使用阈值或短暂等待。

## 积木参考 {#block-reference}

- [事件](/docs/Application/BlockBuilder/Blocks/Events) · [控制](/docs/Application/BlockBuilder/Blocks/Control) · [运算符](/docs/Application/BlockBuilder/Blocks/Operators)
- [变量](/docs/Application/BlockBuilder/Blocks/Variables) · [列表](/docs/Application/BlockBuilder/Blocks/Lists) · [我的模块](/docs/Application/BlockBuilder/Blocks/MyBlocks)
- [电机](/docs/Application/BlockBuilder/Blocks/Motors) · [灯光](/docs/Application/BlockBuilder/Blocks/Light) · [传感器](/docs/Application/BlockBuilder/Blocks/Sensors) · [声音](/docs/Application/BlockBuilder/Blocks/Sounds)
- [模拟器](/docs/Application/BlockBuilder/Blocks/Simulator) · [屏幕控制器](/docs/Application/BlockBuilder/Blocks/DashboardControllers) · [游戏手柄](/docs/Application/BlockBuilder/Blocks/Gamepad)

在应用中，长按（或右键点击）积木并选择**关于该模块**，即可在这里打开它的说明。

现成的程序：[示例](/docs/Application/BlockBuilder/Examples)。
