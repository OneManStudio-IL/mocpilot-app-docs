---
id: Light
title: Світло
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Світло {#light}

Блоки світла керують індикатором стану хаба, світлом, підключеним до портів, і світловою матрицею хабів, що її мають. Категорія з’являється, коли в хабі профілю є що засвітити.

## Світло хаба й портів {#hub-and-port-lights}

### `встановити колір LED на …` (Початківець) {#block_hubs_all_light_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_led_color.svg')} alt="block_hubs_all_light_set_led_color.svg" />

Задає колір індикатора стану хаба.

- Хаби: хаби LEGO Powered Up (зокрема Technic Move Hub), WeDo 2.0 і хаб MINDSTORMS Robot Inventor.
- Для чого: показати стан моделі (готова, працює, попередження, помилка).

### `увімкнути на … % яскравість` (Початківець) {#block_hubs_all_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_to.svg')} alt="block_hubs_all_light_light_turn_to.svg" />

Вмикає світло, підключене до вибраного порту, із заданою яскравістю.

- Хаби: усі хаби з портами, крім WeDo 2.0.
- Technic Move Hub: порти `1`–`6` — це шість лампочок хаба, пронумерованих на хабі. Кожну лампочку можна вмикати окремо, яскравість 0–100 %.
- Для чого: фари, регульоване освітлення.

### `вимкнути` (Початківець) {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

Вимикає світло, підключене до вибраного порту.

- Хаби: ті самі, що й для **увімкнути на … % яскравість**.

### `увімкнути світло …` (Початківець) {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

Вмикає або вимикає світло Technic Move Hub через його профіль автомобіля.

- Варіанти: `вимкнено`, `увімкнено`
- Хаби: Technic Move Hub. Щоб налаштовувати кожну лампочку окремо, використовуйте натомість **увімкнути на … % яскравість** з портами `1`–`6`; не змішуйте ці два способи на одному хабі (див. [Technic Move Hub](/docs/Application/BlockBuilder/Blocks/Motors#technic-move-hub)).

## Світлова матриця {#light-matrix}

Ці блоки працюють зі світловою матрицею 5×5, вбудованою в хаб MINDSTORMS Robot Inventor.

### `увімкнути …` (Просунутий) {#block_hubs_all_light_set_internal_led_matrix_image}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_image.svg')} alt="block_hubs_all_light_set_internal_led_matrix_image.svg" />

Показує вибране зображення на світловій матриці й одразу переходить до наступного блока. Зображення залишається, доки інший блок не змінить матрицю або програма не зупиниться.

### `написати …` (Початківець) {#block_hubs_all_light_set_internal_led_matrix_text}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_text.svg')} alt="block_hubs_all_light_set_internal_led_matrix_text.svg" />

Прокручує текст світловою матрицею, по одній літері.

### `вимкнути пікселі` (Початківець) {#block_hubs_all_light_turn_off_internal_led_matrix_pixels}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_turn_off_internal_led_matrix_pixels.svg')} alt="block_hubs_all_light_turn_off_internal_led_matrix_pixels.svg" />

Вимикає всі пікселі світлової матриці.

### `встановити піксель … x … y … яскравість …` (Просунутий) {#block_hubs_all_light_set_internal_led_matrix_pixel}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_pixel.svg')} alt="block_hubs_all_light_set_internal_led_matrix_pixel.svg" />

Задає яскравість одного пікселя; решта матриці не змінюється. `x` — стовпець, `y` — рядок; піксель `1, 1` у лівому верхньому куті.

### `повернути орієнтацію …` (Просунутий) {#block_hubs_all_light_rotate_internal_led_matrix_orientation}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_rotate_internal_led_matrix_orientation.svg')} alt="block_hubs_all_light_rotate_internal_led_matrix_orientation.svg" />

Повертає зображення на світловій матриці на 90 градусів за годинниковою стрілкою або проти. Нова орієнтація діє для блоків світла, що виконуються після нього.

### `встановити орієнтацію …` (Просунутий) {#block_hubs_all_light_set_internal_led_matrix_orientation}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_set_internal_led_matrix_orientation.svg')} alt="block_hubs_all_light_set_internal_led_matrix_orientation.svg" />

Задає орієнтацію зображення на світловій матриці. Типово — `прямо`; нова орієнтація діє для блоків світла, що виконуються після нього.

- Варіанти: `прямо`, `вліво`, `вправо`, `догори дриґом`

## Світло датчика відстані {#distance-sensor-lights}

### `засвітити …` (Початківець) {#block_hubs_all_light_port_distance_sensor_light_up}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_port_distance_sensor_light_up.svg')} alt="block_hubs_all_light_port_distance_sensor_light_up.svg" />

Керує світлом навколо «очей» датчика відстані на вибраному порту. Кожен вогник можна ввімкнути чи вимкнути або вставити в поле список, щоб задати яскравість кожного вогника.

- Хаби: [MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (на блоці значок хаба).

## Світлова матриця Robot Inventor {#robot-inventor-light}

Ці блоки взято із застосунку Robot Inventor, і вони працюють лише з [хабами MINDSTORMS Robot Inventor і SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). На них є значок хаба. Торкніться картинки в блоці, щоб її намалювати; у блоках анімації на ній видно перший кадр і кількість кадрів.

### `увімкнути … протягом … секунди` (Початківець) {#block_ri_light_image_for}

<img src={useBaseUrl('/img/blocks/block_ri_light_image_for.svg')} alt="block_ri_light_image_for.svg" />

Показує картинку на світловій матриці заданий час (типово 2 секунди), а потім гасить її. Блок чекає, доки час не мине.

### `відтворити анімацію … на … кадрів за секунду до кінця` (Початківець) {#block_ri_light_animation_until_done}

<img src={useBaseUrl('/img/blocks/block_ri_light_animation_until_done.svg')} alt="block_ri_light_animation_until_done.svg" />

Один раз програє кадри анімації із заданою швидкістю (типово 4 кадри за секунду) і чекає останнього кадру.

### `запустити анімацію … на … кадрів за секунду …` (Початківець) {#block_ri_light_animation_start}

<img src={useBaseUrl('/img/blocks/block_ri_light_animation_start.svg')} alt="block_ri_light_animation_start.svg" />

Запускає анімацію і відразу переходить до наступного блока.

- `один раз`: програє її один раз.
- `повторити` (типово): програє її знову і знову, доки інший блок світла не змінить матрицю.

### `встановити яскравість пікселів на … %` (Просунутий) {#block_ri_light_set_brightness}

<img src={useBaseUrl('/img/blocks/block_ri_light_set_brightness.svg')} alt="block_ri_light_set_brightness.svg" />

Задає яскравість картинок і анімацій описаних вище блоків Robot Inventor, від 0 до 100 %. Доки цей блок не виконано, вони світяться з повною яскравістю. Кожен піксель зберігає свою яскравість відносно інших.

### Малювання картинок і анімацій {#animation-editor}

Торкніться картинки в блоці світла, щоб відкрити редактор:

- **Пікселі**: торкайтеся сітки 5×5 або ведіть по ній, щоб малювати вибраною яскравістю.
- **Яскравість**: шкала біля сітки вибирає яскравість для малювання (10 рівнів, від вимкненого до повної).
- **Усе вимкнути / усе ввімкнути**: очистити картинку або залити її вибраною яскравістю.
- **Кадри** (лише в блоках анімації): смуга під сіткою показує поточний кадр, наприклад **2/3**. Кнопки переходять до **попереднього** і **наступного** кадру, **додають** порожній кадр після поточного, **дублюють** поточний кадр або **видаляють** його (в анімації завжди лишається щонайменше один кадр).

<Screenshot name="robot-inventor-animation-editor" alt="Редактор анімації: сітка 5×5, шкала яскравості й смуга кадрів" width={600} />

## Світлодіоди портів BuWizz 3 {#buwizz-3-port-leds}

Ці блоки задають колір світлодіода біля порту BuWizz 3.

### `встановити колір LED порту на …` (Початківець) {#block_hubs_buwizz3_light_port_set_led_color}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color.svg')} alt="block_hubs_buwizz3_light_port_set_led_color.svg" />

Встановлює світлодіод порту в один із наперед заданих кольорів.

### `встановити колір LED порту на … … …` (RGB) (Просунутий) {#block_hubs_buwizz3_light_port_set_led_color_rgb}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_rgb.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_rgb.svg" />

Задає колір світлодіода порту значеннями червоного, зеленого й синього.

- Для чого: будь-який колір на ваш смак, плавні зміни кольору.

### `встановити колір LED порту з рядка …` (Гуру) {#block_hubs_buwizz3_light_port_set_led_color_string}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_light_port_set_led_color_string.svg')} alt="block_hubs_buwizz3_light_port_set_led_color_string.svg" />

Задає колір світлодіода порту з тексту.

- Для чого: брати колір зі змінної або списку.
