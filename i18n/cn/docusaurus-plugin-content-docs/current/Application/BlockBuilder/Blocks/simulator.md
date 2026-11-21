---
id: Simulator
title: 模拟器
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# 模拟器 {#simulator}

**模拟器**把仪表板上的踏板、变速箱和手刹变成一辆表现得像真车一样的汽车：它会带惯性加速、滑行、刹车、倒车和换挡。控件本身只提供原始数值；程序根据这些数值构建汽车，并把它的速度发送给电机。

当仪表板上有踏板、变速箱或手刹时，就会出现这个类别。读取这些控件的积木请参阅[屏幕控制器](/docs/Application/BlockBuilder/Blocks/DashboardControllers)。

## 车辆 {#vehicles}

按类别顶部的**创建车辆**并为它命名（例如“车辆 1”）。程序中至少有一辆车后，才会出现这些积木；在每个积木中选择它控制的是哪辆车。使用**重命名车辆**和**删除车辆**来管理车辆；当程序中还有某辆车的积木时，无法删除这辆车；当程序使用了模拟器积木时，也无法从仪表板上删除最后一个踏板、变速箱或手刹。

<Screenshot name="blocks-simulator" alt="模拟器类别，驾驶积木挂在踏板事件下" width={900} />

一辆典型的汽车：把**驾驶**挂在踏板事件下，把踏板连接到 `油门` 和 `刹车`，并在其中以车辆的 `速度` 启动驱动电机：

```text
当踏板 PDL1 任何 移动
    车辆 1  驾驶  油门 (踏板 PDL1 加速)  刹车 (踏板 PDL1 刹车)
        启动电机于 (速度 的 车辆 1) 速度 %  (Hub 1, 端口 A)
```

不需要 `永远重复` 循环：**驾驶**会自行持续运行，直到汽车停下。

## 积木 {#blocks}

### `… 驾驶 油门 … 刹车 … 挡位 … 共 … 手刹 … 锁定 …`（初学者） {#block_vehicle_drive}

<img src={useBaseUrl('/img/blocks/block_vehicle_drive.svg')} alt="block_vehicle_drive.svg" />

模拟器的核心。这是一个驾驶车辆的 C 形积木：每隔 0.1 秒读取一次输入，让汽车前进一步，并运行其中的积木（把电机积木放在这里）。当汽车静止且没有任何踏板被踩下时，它就会结束；结束前其中的积木会最后运行一次，让电机得到最终数值。

- `油门` 和 `刹车`：每个踏板踩下的深度，0 到 100。
- `挡位`：所选挡位：`-1` 倒挡，`0` 空挡，`1` 及以上为前进挡。如果在这个插槽中放入自动变速箱控件，则使用其挡杆位置（P、R、N、D），并且汽车在 D 挡时会自行选择挡位。
- `共`：变速箱的挡位数（默认 6）。
- `手刹`：手刹拉起的力度，0 到 100；`锁定`：手刹是否锁定。
- 只有放入了积木的输入才会生效；空插槽中直接填写的数字会被忽略（`共` 除外）。
- 同一时间只能有一个**驾驶**积木驾驶一辆车；同一辆车的第二个驾驶积木会跳过其内部的积木。

### `设置 … 类型为 …`（初学者） {#block_vehicle_set_type}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_type.svg')} alt="block_vehicle_set_type.svg" />

按车辆种类调整车辆的发动机：滑行持续多久（惯性）、最高倒车速度以及是否有气刹。

- 类型：`轿车`、`越野车`、`跑车`、`卡车`（卡车有气刹）

### `设置 … … 为 … %`（进阶） {#block_vehicle_set_number}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_number.svg')} alt="block_vehicle_set_number.svg" />

更改一项发动机设置。

- `发动机惯性`：数值越高，不踩油门时汽车滑行得越久（0 表示没有惯性）。
- `倒车速度`：倒车时的最高速度。

### `设置 … … 为 …`（进阶） {#block_vehicle_set_flag}

<img src={useBaseUrl('/img/blocks/block_vehicle_set_flag.svg')} alt="block_vehicle_set_flag.svg" />

开启或关闭一项车辆选项。

- `用刹车倒车`：只有踏板时，在静止状态下踩住刹车会让车辆倒车。
- `挡位限速`：每个挡位都有自己的最高速度。
- `手刹驻车`：锁定的手刹会让汽车保持不动。
- `气刹`：卡车的气刹（会产生“放气”事件）。
- `自动变速箱`：把 `挡位` 输入当作自动挡杆处理。

### `重置 …`（进阶） {#block_vehicle_reset}

<img src={useBaseUrl('/img/blocks/block_vehicle_reset.svg')} alt="block_vehicle_reset.svg" />

让车辆停在原地，并清除它的状态。

### `… 的 …`（初学者） {#block_vehicle_value_float}

<img src={useBaseUrl('/img/blocks/block_vehicle_value_float.svg')} alt="block_vehicle_value_float.svg" />

返回车辆的某个数值。

- `速度`：−100 到 100（倒车时为负），可直接用于电机速度插槽。
- `发动机转速`：0 到 100，用于转速表或发动机声音。
- `挡位`：当前挡位（`-1` 倒挡，`0` 空挡，然后是 `1`、`2`…）。

### `是否 … … ？`（初学者） {#block_vehicle_value_boolean}

<img src={useBaseUrl('/img/blocks/block_vehicle_value_boolean.svg')} alt="block_vehicle_value_boolean.svg" />

车辆处于所选状态时返回 `true`。

- 状态：`正在移动`、`制动中`、`拉着手刹`

### `当 … …`（初学者） {#block_vehicle_event}

<img src={useBaseUrl('/img/blocks/block_vehicle_event.svg')} alt="block_vehicle_event.svg" />

车辆发生某件事时运行它的脚本。

- 事件：`启动`、`停止`、`开始刹车`、`停止刹车`、`急刹车`、`放气`、`换挡`
- 典型用法：播放声音，例如在 `放气` 时播放气刹的嘶嘶声，或在 `急刹车` 时播放刹车尖啸声（请参阅[声音](/docs/Application/BlockBuilder/Blocks/Sounds)）。
