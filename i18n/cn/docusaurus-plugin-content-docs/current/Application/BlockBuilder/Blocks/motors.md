---
id: Motors
title: 电机
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 电机 {#motors}

电机积木用于启动、停止连接在集线器端口上的电机并控制其位置，还可以调整电机的运动方式。当配置文件中有带电机端口的集线器时，就会出现这个类别。在每个积木中，你都要选择集线器以及一个或多个端口。

有些积木需要带内置旋转传感器（编码器）的电机（例如 Technic 角度电机），以及能够控制它的集线器。这些积木标有“编码器电机”。它们不适用于 SBrick、SBrick Plus、BuWizz 2、WeDo 2.0 和 Mould King 集线器。Technic Move Hub 也可以使用这些积木（它的电机是端口 `A`、`B` 和 `C`），此外还有自己的汽车配置积木：请参阅本页末尾的 [Technic Move Hub](#technic-move-hub)。

## 运行电机 {#running-motors}

### `设置速度为 …`（进阶） {#block_hubs_all_motors_port_set_motor_speed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_speed.svg')} alt="block_hubs_all_motors_port_set_motor_speed.svg" />

设置这些端口上**启动电机**和**运行 … 持续 …**所使用的速度（−100 到 100 %）。这个积木本身不会启动电机。

### `启动电机 …`（初学者） {#block_hubs_all_motors_port_start_motor}

<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor.svg')} alt="block_hubs_all_motors_port_start_motor.svg" />

按所选方向、以**设置速度为**设定的速度启动电机。

- 方向：顺时针或逆时针

### `启动电机于 … 速度 %`（初学者） {#block_hubs_all_motors_port_start_motor_at_speed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor_at_speed.svg')} alt="block_hubs_all_motors_port_start_motor_at_speed.svg" />

以指定速度（−100 到 100 %）启动电机。速度为负时电机反向转动。

- 典型用法：用操纵杆或滑块驾驶：把控件的数值放进速度插槽。

### `停止电机`（初学者） {#block_hubs_all_motors_port_stop_motor}

<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_stop_motor.svg')} alt="block_hubs_all_motors_port_stop_motor.svg" />

停止电机。

### `运行 … 持续 …`（进阶） {#block_hubs_all_motors_port_run_for}

<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for.svg')} alt="block_hubs_all_motors_port_run_for.svg" />

让电机按所选方向运行一定的圈数、度数或秒数。

- 方向：顺时针或逆时针
- 单位：`旋转`、`度`、`秒`
- 仅限编码器电机。

### `运行持续 … 在 … 速度 %`（进阶） {#block_hubs_all_motors_port_run_for_at_speed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for_at_speed.svg')} alt="block_hubs_all_motors_port_run_for_at_speed.svg" />

让电机以指定速度运行一定的圈数、度数或秒数。

- 单位：`旋转`、`度`、`秒`
- 仅限编码器电机。

## 位置 {#position}

### `前进 … 到位置 …`（进阶） {#block_hubs_all_motors_port_go_to_position}

<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_position.svg')} alt="block_hubs_all_motors_port_go_to_position.svg" />

让电机转到一个绝对位置（电机自身的零点标记）。

- 路径：`最短路径`、`顺时针`、`逆时针`
- 仅限编码器电机。

### `移动到相对位置 … 在 … 速度 %`（初学者） {#block_hubs_all_motors_port_go_to_relative_position}

<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_relative_position.svg')} alt="block_hubs_all_motors_port_go_to_relative_position.svg" />

让电机转到一个以度为单位的位置，该位置从**设置相对位置**设定的点开始计算。

- 典型用法：用舵机转向，由操纵杆的数值给出角度。
- 仅限编码器电机；BuWizz 3 请使用下面的积木。

### `移动到相对位置 …`（BuWizz 3）（初学者） {#block_hubs_buwizz3_motors_port_go_to_relative_position}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_motors_port_go_to_relative_position.svg')} alt="block_hubs_buwizz3_motors_port_go_to_relative_position.svg" />

上面那个积木的 BuWizz 3 版本，没有速度输入。

- 集线器：BuWizz 3，配合编码器电机使用。

### `设置相对位置 …`（初学者） {#block_hubs_all_motors_port_set_relative_position}

<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_relative_position.svg')} alt="block_hubs_all_motors_port_set_relative_position.svg" />

把电机的当前位置声明为指定的值。相对位置从这里开始计算。

- 仅限编码器电机。

### `校准齿条 … 中心 … 度 …`（初学者） {#block_hubs_all_motors_port_calibrate_steering_rack}

<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_calibrate_steering_rack.svg')} alt="block_hubs_all_motors_port_calibrate_steering_rack.svg" />

找出转向齿条的中心和行程。

- 电机会把齿条转到两端，测量它能移动多远，并把结果存入你放在插槽中的两个变量：中心位置和以度为单位的范围（从中心到一端）。齿条会停在中间，该点即成为相对位置 0：然后用**移动到相对位置** `范围 × 操纵杆 / 100` 来转向。
- 转向机构两端必须有坚固的机械限位（齿条末端或齿轮传动的末端）。
- 仅限编码器电机。

## 电机设置 {#motor-settings}

### `设置电机为 … 停止时`（大师） {#block_hubs_all_motors_port_set_motor_to_at_stop}

<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_to_at_stop.svg')} alt="block_hubs_all_motors_port_set_motor_to_at_stop.svg" />

选择电机停止时的行为。

- `刹车`：快速停止。
- `保持位置`：主动保持当前位置（适合转向）。
- `惯性滑行`：自由减速停转。
- 仅限编码器电机。

### `启用卡死检测 …`（大师） {#block_hubs_all_motors_port_set_motors_stall_detection}

<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motors_stall_detection.svg')} alt="block_hubs_all_motors_port_set_motors_stall_detection.svg" />

开启或关闭卡死检测。开启后，被卡住的电机会放弃而不是继续用力，这样等待该电机的积木就能结束。

- 集线器：[MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub)（积木带有集线器图标）。

### `设置加速度为 …`（大师） {#block_hubs_all_motors_port_set_acceleration}

<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_acceleration.svg')} alt="block_hubs_all_motors_port_set_acceleration.svg" />

选择电机加速的快慢。

- 选项：`默认`、`快`、`均衡`、`平滑`、`慢`、`很慢`
- 仅限编码器电机。

### `设置减速度为 …`（大师） {#block_hubs_all_motors_port_set_deceleration}

<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_deceleration.svg')} alt="block_hubs_all_motors_port_set_deceleration.svg" />

选择电机减速的快慢。

- 选项：`默认`、`快`、`均衡`、`平滑`、`慢`、`很慢`
- 仅限编码器电机。

## 电机数值 {#motor-values}

### `位置`（初学者） {#block_hubs_all_motors_port_position}

<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_position.svg')} alt="block_hubs_all_motors_port_position.svg" />

返回电机的绝对位置。

- 仅限编码器电机。

### `相对位置`（初学者） {#block_hubs_all_motors_port_relative_position}

<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_relative_position.svg')} alt="block_hubs_all_motors_port_relative_position.svg" />

返回电机的相对位置，以度为单位。

- 仅限编码器电机。

### `速度`（初学者） {#block_hubs_all_motors_port_speed}

<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_speed.svg')} alt="block_hubs_all_motors_port_speed.svg" />

返回电机的当前速度。

### `功率`（进阶） {#block_hubs_all_motors_port_power}

<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_power.svg')} alt="block_hubs_all_motors_port_power.svg" />

返回电机的当前功率。

- 集线器：[MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub)（积木带有集线器图标）。

## Robot Inventor {#robot-inventor-motors}

这些积木来自 Robot Inventor 应用，只适用于 [MINDSTORMS Robot Inventor 和 SPIKE Prime 集线器](/docs/Application/Hubs/RobotInventorHub)。它们带有集线器图标。要驾驶两轮机器人，请参阅[运动](/docs/Application/BlockBuilder/Blocks/Movement)积木。

### `启动电机于 … 功率 %`（进阶） {#block_ri_motor_start_power}

<img src={useBaseUrl('/img/blocks/block_ri_motor_start_power.svg')} alt="block_ri_motor_start_power.svg" />

以指定的功率启动所选端口上的电机，范围 −100 到 100 %（默认 75 %）。与**启动电机于 … 速度 %**不同，电机不会保持受调节的速度：负载下它会变慢，就像没有编码器的电机一样。

### `电机被中断了吗？`（大师） {#block_ri_motor_was_interrupted}

<img src={useBaseUrl('/img/blocks/block_ri_motor_was_interrupted.svg')} alt="block_ri_motor_was_interrupted.svg" />

如果这个端口上电机的上一条命令因为同一端口上的另一个电机积木中途打断而没有完成，就为 `true`。

## Technic Move Hub {#technic-move-hub}

Technic Move Hub（用于 LEGO® Technic 遥控车）有两种编程方式：

- **端口积木**（上面的电机积木）。集线器的三个内置电机就是端口：`A` 和 `B` 是驱动电机，`C` 是转向电机。它们是编码器电机，因此上面所有电机积木都适用于它们，**启用卡死检测**和**功率**除外。在 LEGO 汽车模型中，`A` 要与 `B` 反向转动才能前进，而 `C` 上的转向机构有限位：先在 `C` 上运行一次**校准齿条**，然后在 `C` 上用**移动到相对位置**转向（0 为中心）。集线器的六盏灯是[灯光积木](/docs/Application/BlockBuilder/Blocks/Light)的端口 `1`–`6`，它的[倾斜、加速度和方向](/docs/Application/BlockBuilder/Blocks/Sensors#hub-tilt-and-orientation)积木与在 Technic Hub 上的用法相同。
- **汽车配置积木**（见下文）：通过加载到集线器中的汽车配置来控制驱动、转向、刹车、动力脉冲、灯光和功率模式。请参阅 [Technic Move Hub 配置](/docs/Application/Hubs/TechnicMoveHubConfigurations)。

:::caution 每个集线器只用一种方式
配置积木和端口积木控制的是同一组电机和灯：以最后一条命令为准，而且配置积木会重新接管电机和灯。积木编辑器中的程序检查会在该集线器的每个端口积木上发出警告：“… 同时由其汽车配置文件积木和端口积木控制”。
:::

### `以此启动电机 … 速度 %`（初学者） {#block_hubs_technicmove_motors_start_motors_at_speed}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_start_motors_at_speed.svg')} alt="block_hubs_technicmove_motors_start_motors_at_speed.svg" />

以指定速度启动驱动电机。

### `动力脉冲`（初学者） {#block_hubs_technicmove_motors_power_pulse}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_power_pulse.svg')} alt="block_hubs_technicmove_motors_power_pulse.svg" />

向驱动电机发送一次动力脉冲。

- 典型用法：在后续积木运行前短暂加速。

### `停止电机`（初学者） {#block_hubs_technicmove_motors_stop_motors}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_stop_motors.svg')} alt="block_hubs_technicmove_motors_stop_motors.svg" />

停止驱动电机。

### `设置电机刹车 …`（初学者） {#block_hubs_technicmove_motors_brake}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_brake.svg')} alt="block_hubs_technicmove_motors_brake.svg" />

开启或关闭驱动电机的刹车。

- 选项：`关`、`开`

### `设置转向架为 …`（初学者） {#block_hubs_technicmove_motors_set_steering_rack_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_set_steering_rack_to.svg')} alt="block_hubs_technicmove_motors_set_steering_rack_to.svg" />

把转向转到指定位置。

### `校准转向架`（初学者） {#block_hubs_technicmove_motors_calibrate_steering_rack}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_calibrate_steering_rack.svg')} alt="block_hubs_technicmove_motors_calibrate_steering_rack.svg" />

用集线器自带的算法校准转向，自动找出转向范围。

- 转向机构必须有坚固的机械限位（例如转向齿条的两端）。
