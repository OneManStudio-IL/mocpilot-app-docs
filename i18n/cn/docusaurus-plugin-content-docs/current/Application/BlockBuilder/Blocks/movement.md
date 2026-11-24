---
id: Movement
title: 运动
description: "运动积木在 MINDSTORMS Robot Inventor 或 SPIKE 集线器上驱动双电机机器人：移动、转向、坦克式驾驶、速度、加速度和停止。"
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 运动

运动积木把一台有两个轮子、每个轮子由各自电机驱动的机器人作为一个整体来驾驶：“向前移动 10 厘米”“顺时针转 1 圈”“向右转向 30”。它们与 LEGO® MINDSTORMS® Robot Inventor 应用中的运动积木相同。当配置文件中有 [Robot Inventor 或 SPIKE Prime 集线器](/docs/Application/Hubs/RobotInventorHub)时，这个类别会出现在积木面板的最前面。它的所有积木都带有黑白的集线器图标。

## 运动的工作方式 {#how-movement-works}

- **移动电机。** 默认情况下，左轮接在端口 **A**，右轮接在端口 **B**。用[设置移动电机为](#block_ri_move_set_pair)可以选择其他端口。在机器人上这两个电机是面对面安装的，所以 MOCPilot 会让右侧电机反向转动：正的速度总是让机器人向前行驶。
- **移动速度。** 没有自己速度的积木使用移动速度：在[设置移动速度为](#block_ri_move_set_speed)更改它之前为 **50 %**。
- **转向**是一个 −100 到 100 之间的数字。**0** 表示直行。正值向右转，负值向左转：内侧轮子会减速，转向值越接近 ±100，减速越多（为 50 时内侧轮子以一半速度转动）。为 **100** 或 **−100** 时，两个轮子朝相反方向转动，机器人原地旋转。
- **单位。** 距离可以用 `厘米`、`英寸`，或电机的 `旋转`（圈数）和 `度` 表示，很多积木还可以用 `秒`。厘米和英寸根据电机每转一圈移动的距离来换算：默认为 **17.5 厘米**（Robot Inventor 的轮子），可以用[设置电机转 1 圈为](#block_ri_move_set_distance)更改。距离为负时机器人朝反方向行驶。
- **等待。** 带距离的积木（`移动 … 移动 …`）会等到机器人走完这段距离。以**开始移动**开头的积木会立即返回：机器人会一直行驶，直到**停止移动**或另一个运动积木。

## 运动设置 {#movement-settings}

### `设置移动电机为 … …`（初学者） {#block_ri_move_set_pair}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_pair.svg')} alt="block_ri_move_set_pair.svg" />
选择左轮电机和右轮电机的端口。默认：**A** 和 **B**。两个端口必须不同。

### `设置移动速度为 … %`（初学者） {#block_ri_move_set_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_speed.svg')} alt="block_ri_move_set_speed.svg" />
为没有自己速度的运动积木设置速度，范围 −100 到 100 %。默认：50 %。这个积木不会启动电机。

### `设置电机转 1 圈为 … 厘米 / 英寸 的距离`（进阶） {#block_ri_move_set_distance}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_distance.svg')} alt="block_ri_move_set_distance.svg" />
告诉 MOCPilot 电机每转一圈机器人移动多远，这样以厘米和英寸表示的距离才准确。默认：17.5 厘米。请实际测量你的机器人：让它向前移动 1 圈，然后量出移动的距离。数值为 0 时会被忽略。

### `设置移动加速度为 …`（大师） {#block_ri_move_set_acceleration}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_acceleration.svg')} alt="block_ri_move_set_acceleration.svg" />
移动电机加速和减速的快慢。

- 选项：`默认`、`快速`（0.1 秒）、`平衡`（0.35 秒）、`平稳`（0.8 秒）、`慢速`（1.2 秒）、`非常慢`（2 秒）：从静止到全速所用的时间。

### `设置移动电机为 … 停止时`（进阶） {#block_ri_move_set_stop}
<img src={useBaseUrl('/img/blocks/block_ri_move_set_stop.svg')} alt="block_ri_move_set_stop.svg" />
机器人停止时电机的行为。

- `惯性滑行`：电机自由转动，机器人滑行后停下。
- `刹车`（默认）：电机刹车。
- `保持位置`：电机主动保持自己的位置，即使你推动机器人也不变。

## 移动 {#moving}

### `移动 … 移动 …`（初学者） {#block_ri_move}
<img src={useBaseUrl('/img/blocks/block_ri_move.svg')} alt="block_ri_move.svg" />
以移动速度驱动机器人，并等到完成。

- 方向：`向前`、`向后`、`顺时针`、`逆时针`（后两个让机器人原地旋转）。
- 单位：`厘米`、`英寸`、`旋转`、`度`、`秒`。默认：10 厘米。

### `移动 … 移动 …`（带转向）（初学者） {#block_ri_move_steer}
<img src={useBaseUrl('/img/blocks/block_ri_move_steer.svg')} alt="block_ri_move_steer.svg" />
以指定的转向值（−100 到 100）和移动速度驱动机器人，并等到完成。转向值为 30 时，机器人沿向右的弧线行驶。

- 单位：`厘米`、`英寸`、`旋转`、`度`、`秒`。

### `移动 … 移动 … 在 … 速度 %`（进阶） {#block_ri_move_steer_distance_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_steer_distance_speed.svg')} alt="block_ri_move_steer_distance_speed.svg" />
与上一个积木相同，但使用自己的速度而不是移动速度。

- 单位：`厘米`、`英寸`、`旋转`、`度`。

### `移动 … 在 … … 速度 %`（进阶） {#block_ri_move_distance_dual_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_distance_dual_speed.svg')} alt="block_ri_move_distance_dual_speed.svg" />
按距离进行坦克式驾驶：分别设置左轮和右轮的速度（各为 −100 到 100 %），并等到机器人走完这段距离。

- 单位：`厘米`、`英寸`、`旋转`、`度`、`秒`。

### `开始移动 …`（初学者） {#block_ri_move_start_steer}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer.svg')} alt="block_ri_move_start_steer.svg" />
以指定的转向值和移动速度开始移动，并立即继续执行下一个积木。

### `开始移动 … 在 … 速度 %`（进阶） {#block_ri_move_start_steer_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer_speed.svg')} alt="block_ri_move_start_steer_speed.svg" />
以指定的转向值和速度开始移动。

- 典型用法：把仪表板上的滑块放进转向插槽，把踏板放进速度插槽。

### `开始移动 … 在 … 功率 %`（大师） {#block_ri_move_start_steer_power}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_steer_power.svg')} alt="block_ri_move_start_steer_power.svg" />
与上一个积木类似，但设置的是电机的**功率**，而不是受调节的速度：机器人爬坡或负重时，电机不会努力保持速度。

### `开始移动 … … 速度 %`（进阶） {#block_ri_move_start_dual_speed}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_dual_speed.svg')} alt="block_ri_move_start_dual_speed.svg" />
坦克式驾驶：让左轮和右轮以各自的速度开始转动。

### `开始移动 … … 功率 %`（大师） {#block_ri_move_start_dual_power}
<img src={useBaseUrl('/img/blocks/block_ri_move_start_dual_power.svg')} alt="block_ri_move_start_dual_power.svg" />
使用每个轮子的电机功率而不是受调节速度的坦克式驾驶。

### `停止移动`（初学者） {#block_ri_move_stop}
<img src={useBaseUrl('/img/blocks/block_ri_move_stop.svg')} alt="block_ri_move_stop.svg" />
按照**设置移动电机为 … 停止时**的设定停止两个移动电机（默认为刹车）。

### `移动被中断了吗？`（大师） {#block_ri_move_was_interrupted}
<img src={useBaseUrl('/img/blocks/block_ri_move_was_interrupted.svg')} alt="block_ri_move_was_interrupted.svg" />
如果上一次移动没有完成，就为 `true`：另一个运动积木或**停止移动**中途打断了它。
