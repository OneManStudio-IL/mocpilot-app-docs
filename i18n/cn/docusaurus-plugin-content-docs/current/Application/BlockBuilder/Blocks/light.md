---
id: Light
title: 灯光
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# 灯光 {#light}

灯光积木控制集线器的状态灯、连接在端口上的灯，以及支持该功能的集线器上的灯光点阵。当配置文件中有集线器带有可点亮的部件时，就会出现这个类别。

## 集线器和端口灯光 {#hub-and-port-lights}

### `设置 LED 颜色为 …`（初学者） {#block_hubs_all_light_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_led_color.svg')} alt="block_hubs_all_light_set_led_color.svg" />

设置集线器状态灯的颜色。

- 集线器：LEGO Powered Up 集线器（包括 Technic Move Hub）、WeDo 2.0 和 MINDSTORMS Robot Inventor 集线器。
- 典型用法：显示模型的状态（就绪、运行中、警告、错误）。

### `在...打开 … 亮度 %`（初学者） {#block_hubs_all_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_to.svg')} alt="block_hubs_all_light_light_turn_to.svg" />

以指定亮度打开连接在所选端口上的灯。

- 集线器：除 WeDo 2.0 外所有带端口的集线器。
- Technic Move Hub：端口 `1`–`6` 是集线器的六盏灯，编号标在集线器上。每盏灯都可以单独设置，亮度为 0–100 %。
- 典型用法：前大灯、可调光照明。

### `关闭`（初学者） {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

关闭连接在所选端口上的灯。

- 集线器：与**在...打开 … 亮度 %**相同。

### `打开灯光 …`（初学者） {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

通过汽车配置打开或关闭 Technic Move Hub 的灯。

- 选项：`关`、`开`
- 集线器：Technic Move Hub。如需单独设置每盏灯，请改用端口 `1`–`6` 的**在...打开 … 亮度 %**；不要在同一个集线器上混用这两种方式（请参阅 [Technic Move Hub](/docs/Application/BlockBuilder/Blocks/Motors#technic-move-hub)）。

## 灯光点阵 {#light-matrix}

这些积木用于 MINDSTORMS Robot Inventor 集线器内置的 5×5 灯光点阵。

### `开启 …`（进阶） {#block_hubs_all_light_set_internal_led_matrix_image}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_image.svg')} alt="block_hubs_all_light_set_internal_led_matrix_image.svg" />

在灯光点阵上显示所选图片，并立即继续执行下一个积木。图片会一直显示，直到其他积木改变点阵或程序停止。

### `写入 …`（初学者） {#block_hubs_all_light_set_internal_led_matrix_text}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_text.svg')} alt="block_hubs_all_light_set_internal_led_matrix_text.svg" />

在灯光点阵上逐个字符地滚动显示文本。

### `关闭像素`（初学者） {#block_hubs_all_light_turn_off_internal_led_matrix_pixels}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_turn_off_internal_led_matrix_pixels.svg')} alt="block_hubs_all_light_turn_off_internal_led_matrix_pixels.svg" />

关闭灯光点阵的所有像素。

### `设置像素 … x … y … 亮度 …`（进阶） {#block_hubs_all_light_set_internal_led_matrix_pixel}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_pixel.svg')} alt="block_hubs_all_light_set_internal_led_matrix_pixel.svg" />

设置单个像素的亮度；点阵的其余部分保持不变。`x` 是列，`y` 是行；像素 `1, 1` 位于左上角。

### `旋转方向 …`（进阶） {#block_hubs_all_light_rotate_internal_led_matrix_orientation}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_rotate_internal_led_matrix_orientation.svg')} alt="block_hubs_all_light_rotate_internal_led_matrix_orientation.svg" />

把灯光点阵上的图像顺时针或逆时针旋转 90 度。新方向适用于之后运行的灯光积木。

### `将方向设为 …`（进阶） {#block_hubs_all_light_set_internal_led_matrix_orientation}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_orientation.svg')} alt="block_hubs_all_light_set_internal_led_matrix_orientation.svg" />

设置灯光点阵上图像的方向。默认为 `正立`；新方向适用于之后运行的灯光积木。

- 选项：`正立`、`左`、`右`、`倒置`

## 距离传感器灯光 {#distance-sensor-lights}

### `点亮 …`（初学者） {#block_hubs_all_light_port_distance_sensor_light_up}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_port_distance_sensor_light_up.svg')} alt="block_hubs_all_light_port_distance_sensor_light_up.svg" />

控制所选端口上距离传感器“眼睛”周围的灯。你可以分别打开或关闭每盏灯，也可以在插槽中放入一个列表来设置每盏灯的亮度。

- 集线器：[MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub)（积木带有集线器图标）。

## Robot Inventor 灯光点阵 {#robot-inventor-light}

这些积木来自 Robot Inventor 应用，只适用于 [MINDSTORMS Robot Inventor 和 SPIKE Prime 集线器](/docs/Application/Hubs/RobotInventorHub)。它们带有集线器图标。点按积木中的图片即可绘制它；在动画积木中，图片显示第一帧和帧数。

### `开启 … 持续 … 秒`（初学者） {#block_ri_light_image_for}

<img src={useBaseUrl('/img/blocks/block_ri_light_image_for.svg')} alt="block_ri_light_image_for.svg" />

在灯光点阵上显示图像，持续指定的时间（默认 2 秒），然后将其关闭。积木会一直等到时间结束。

### `播放动画 … 在 … 帧/秒，直到播完`（初学者） {#block_ri_light_animation_until_done}

<img src={useBaseUrl('/img/blocks/block_ri_light_animation_until_done.svg')} alt="block_ri_light_animation_until_done.svg" />

以指定的速度（默认每秒 4 帧）把动画的各帧播放一遍，并等到最后一帧。

### `开始播放动画 … 在 … 帧/秒 …`（初学者） {#block_ri_light_animation_start}

<img src={useBaseUrl('/img/blocks/block_ri_light_animation_start.svg')} alt="block_ri_light_animation_start.svg" />

开始播放动画，并立即继续执行下一个积木。

- `一次`：播放一遍。
- `重复`（默认）：反复播放，直到另一个灯光积木改变点阵。

### `设置像素亮度为 … %`（进阶） {#block_ri_light_set_brightness}

<img src={useBaseUrl('/img/blocks/block_ri_light_set_brightness.svg')} alt="block_ri_light_set_brightness.svg" />

设置上面这些 Robot Inventor 积木的图像和动画的亮度，范围 0 到 100 %。在这个积木运行之前，它们以最大亮度显示。每个像素相对于其他像素保持自己的亮度。

### 绘制图像和动画 {#animation-editor}

点按灯光积木中的图片即可打开编辑器：

- **像素**：在 5×5 网格上点按或拖动，用所选亮度绘制。
- **亮度**：网格旁边的刻度用于选择绘制所用的亮度（10 级，从关闭到最亮）。
- **全部关闭 / 全部点亮**：清除图像，或用所选亮度填满图像。
- **帧**（仅限动画积木）：网格下方的条显示当前帧，例如 **2/3**。按钮可以转到**上一帧**和**下一帧**、在当前帧之后**添加**一个空白帧、**复制**当前帧或**删除**当前帧（动画至少保留一帧）。

<Screenshot name="robot-inventor-animation-editor" alt="动画编辑器：5×5 网格、亮度刻度和帧条" width={600} />

## BuWizz 3 端口 LED {#buwizz-3-port-leds}

这些积木设置 BuWizz 3 端口旁边 LED 的颜色。

### `设置端口LED颜色为 …`（初学者） {#block_hubs_buwizz3_light_port_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color.svg')} alt="block_hubs_buwizz3_light_port_set_led_color.svg" />

把端口 LED 设置为某种预设颜色。

### `设置端口LED颜色为 … … …`（RGB）（进阶） {#block_hubs_buwizz3_light_port_set_led_color_rgb}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_rgb.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_rgb.svg" />

根据红、绿、蓝数值设置端口 LED 的颜色。

- 典型用法：任意你喜欢的颜色、平滑的颜色变化。

### `从字符串设置端口LED颜色 …`（大师） {#block_hubs_buwizz3_light_port_set_led_color_string}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_string.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_string.svg" />

根据文本设置端口 LED 的颜色。

- 典型用法：从变量或列表中获取颜色。
