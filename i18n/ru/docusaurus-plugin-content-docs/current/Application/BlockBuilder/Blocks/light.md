---
id: Light
title: Свет
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Свет

Блоки света управляют индикатором хаба, светом на портах и светодиодной матрицей у хабов, где она есть. Категория появляется, если у хаба профиля есть чем светить.

## Индикатор хаба и свет на портах

### `установить цвет LED в …` (Новичок) {#block_hubs_all_light_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_led_color.svg')} alt="block_hubs_all_light_set_led_color.svg" />

Задаёт цвет индикатора хаба.

- Хабы: LEGO Powered Up (включая Technic Move Hub), WeDo 2.0 и хаб MINDSTORMS Robot Inventor.
- Для чего: показать состояние модели (готова, работает, предупреждение, ошибка).

### `включить на … % яркость` (Новичок) {#block_hubs_all_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_to.svg')} alt="block_hubs_all_light_light_turn_to.svg" />

Включает свет на выбранном порту с заданной яркостью.

- Хабы: все хабы с портами, кроме WeDo 2.0.
- Для чего: фары, регулируемая подсветка.

### `выключить` (Новичок) {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

Выключает свет на выбранном порту.

- Хабы: те же, что у блока **включить на … % яркость**.

### `включить свет …` (Новичок) {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

Включает или выключает свет Technic Move Hub.

- Варианты: `выключено`, `включено`
- Хабы: Technic Move Hub.

## Светодиодная матрица

Эти блоки работают с матрицей 5×5, встроенной в хаб MINDSTORMS Robot Inventor.

### `включить …` (Продвинутый) {#block_hubs_all_light_set_internal_led_matrix_image}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_image.svg')} alt="block_hubs_all_light_set_internal_led_matrix_image.svg" />

Показывает на матрице выбранную картинку и сразу переходит к следующему блоку. Картинка остаётся, пока другой блок не изменит матрицу или программа не остановится.

### `написать …` (Новичок) {#block_hubs_all_light_set_internal_led_matrix_text}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_text.svg')} alt="block_hubs_all_light_set_internal_led_matrix_text.svg" />

Прокручивает текст по матрице, по одной букве.

### `выключить пиксели` (Новичок) {#block_hubs_all_light_turn_off_internal_led_matrix_pixels}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_turn_off_internal_led_matrix_pixels.svg')} alt="block_hubs_all_light_turn_off_internal_led_matrix_pixels.svg" />

Гасит все пиксели матрицы.

### `установить пиксель … x … y … яркость …` (Продвинутый) {#block_hubs_all_light_set_internal_led_matrix_pixel}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_pixel.svg')} alt="block_hubs_all_light_set_internal_led_matrix_pixel.svg" />

Задаёт яркость одного пикселя, остальная часть матрицы не меняется. `x` — столбец, `y` — строка; пиксель `1, 1` находится в левом верхнем углу.

### `повернуть ориентацию …` (Продвинутый) {#block_hubs_all_light_rotate_internal_led_matrix_orientation}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_rotate_internal_led_matrix_orientation.svg')} alt="block_hubs_all_light_rotate_internal_led_matrix_orientation.svg" />

Поворачивает изображение на матрице на 90 градусов по часовой или против часовой стрелки. Новая ориентация действует для блоков света, которые выполняются после него.

### `установить ориентацию …` (Продвинутый) {#block_hubs_all_light_set_internal_led_matrix_orientation}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_orientation.svg')} alt="block_hubs_all_light_set_internal_led_matrix_orientation.svg" />

Задаёт ориентацию изображения на матрице. По умолчанию — `прямо`; новая ориентация действует для блоков света, которые выполняются после него.

- Варианты: `прямо`, `влево`, `вправо`, `вверх ногами`

## Подсветка датчика расстояния

### `зажечь …` (Новичок) {#block_hubs_all_light_port_distance_sensor_light_up}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_port_distance_sensor_light_up.svg')} alt="block_hubs_all_light_port_distance_sensor_light_up.svg" />

Управляет подсветкой вокруг «глаз» датчика расстояния на выбранном порту. Можно включить или выключить каждый огонёк либо вставить в поле список, чтобы задать яркость каждого.

- Хабы: MINDSTORMS Robot Inventor.

## Индикаторы портов BuWizz 3

Эти блоки задают цвет светодиода рядом с портом BuWizz 3.

### `установить цвет LED порта на …` (Новичок) {#block_hubs_buwizz3_light_port_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color.svg')} alt="block_hubs_buwizz3_light_port_set_led_color.svg" />

Включает на индикаторе порта один из готовых цветов.

### `установить цвет LED порта на … … …` (RGB) (Продвинутый) {#block_hubs_buwizz3_light_port_set_led_color_rgb}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_rgb.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_rgb.svg" />

Задаёт цвет индикатора порта по значениям красного, зелёного и синего.

- Для чего: любой цвет на ваш выбор, плавная смена цветов.

### `установить цвет LED порта из строки …` (Гуру) {#block_hubs_buwizz3_light_port_set_led_color_string}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_string.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_string.svg" />

Задаёт цвет индикатора порта из текста.

- Для чего: брать цвет из переменной или списка.
