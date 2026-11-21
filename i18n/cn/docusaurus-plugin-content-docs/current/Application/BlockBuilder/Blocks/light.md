---
id: Light
title: 灯光
---

import useBaseUrl from '@docusaurus/useBaseUrl';

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
- 典型用法：前大灯、可调光照明。

### `关闭`（初学者） {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

关闭连接在所选端口上的灯。

- 集线器：与**在...打开 … 亮度 %**相同。

### `打开灯光 …`（初学者） {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

打开或关闭 Technic Move Hub 的灯。

- 选项：`关`、`开`
- 集线器：Technic Move Hub。

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

- 集线器：MINDSTORMS Robot Inventor。

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
