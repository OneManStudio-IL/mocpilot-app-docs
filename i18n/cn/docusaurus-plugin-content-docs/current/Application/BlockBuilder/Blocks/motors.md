---
id: Motors
title: 电机
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 电机 {#motors}

电机积木用于启动、停止连接在集线器端口上的电机并控制其位置，还可以调整电机的运动方式。当配置文件中有带电机端口的集线器时，就会出现这个类别。在每个积木中，你都要选择集线器以及一个或多个端口。

有些积木需要带内置旋转传感器（编码器）的电机（例如 Technic 角度电机），以及能够控制它的集线器。这些积木标有“编码器电机”。它们不适用于 SBrick、SBrick Plus、BuWizz 2、WeDo 2.0 和 Mould King 集线器。Technic Move Hub 有自己的一套积木，列在本页末尾。

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

- 电机会把齿条转到两端，测量它能移动多远，并把结果存入你放在插槽中的两个变量：中心位置和以度为单位的范围。齿条会停在中间，但此时它的相对位置等于中心值而不是 0，所以请在这个积木之后紧接着添加**设置相对位置** 0；然后用 `范围 × 操纵杆 / 100` 来转向。
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

开启或关闭卡死检测。

- 集线器：MINDSTORMS Robot Inventor。

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

- 集线器：MINDSTORMS Robot Inventor。

## Technic Move Hub {#technic-move-hub}

Technic Move Hub 使用这些积木（而不是上面的端口积木）来驱动其内置电机。

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
