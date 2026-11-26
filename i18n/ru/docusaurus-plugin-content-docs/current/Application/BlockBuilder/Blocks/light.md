---
id: Light
title: Свет
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

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
- Technic Move Hub: порты `1`–`6` — это шесть лампочек хаба, пронумерованных на хабе. Каждую лампочку можно включать отдельно, яркость 0–100 %.
- Для чего: фары, регулируемая подсветка.

### `выключить` (Новичок) {#block_hubs_all_light_light_turn_off}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_light_turn_off.svg')} alt="block_hubs_all_light_light_turn_off.svg" />

Выключает свет на выбранном порту.

- Хабы: те же, что у блока **включить на … % яркость**.

### `включить свет …` (Новичок) {#block_hubs_technicmove_light_light_turn_to}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_light_light_turn_to.svg')} alt="block_hubs_technicmove_light_light_turn_to.svg" />

Включает или выключает свет Technic Move Hub через его профиль машины.

- Варианты: `выключено`, `включено`
- Хабы: Technic Move Hub. Чтобы задавать каждую лампочку отдельно, используйте вместо него **включить на … % яркость** с портами `1`–`6`; не смешивайте эти два способа на одном хабе (см. [Technic Move Hub](/docs/Application/BlockBuilder/Blocks/Motors#technic-move-hub)).

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

- Хабы: [MINDSTORMS Robot Inventor и SPIKE Prime](/docs/Application/Hubs/RobotInventorHub), а также Technic Hub (на блоке значок хаба Robot Inventor). Пока подсветка горит, датчик продолжает измерять расстояние.

### `подсветить датчик цвета 1 … 2 … 3 … %` (Продвинутый) {#block_hubs_all_light_port_color_sensor_light_up}

<img src={useBaseUrl('/img/blocks/block_hubs_all_light_port_color_sensor_light_up.svg')} alt="block_hubs_all_light_port_color_sensor_light_up.svg" />

Задаёт яркость трёх огоньков вокруг линзы датчика цвета Technic (датчика цвета SPIKE) на выбранном порту — каждого от 0 до 100 %.

- Хабы: Technic Hub.
- Пока огоньки горят, датчик не измеряет: его значения цвета и света остаются прежними. Прежде чем снова читать датчик, примените к этому порту блок Датчик Technic: **установить режим на …** (`по умолчанию` или `окружающий`). Проверка программы в редакторе блоков предупреждает, если программа подсвечивает датчик и читает его без блока **установить режим на …**.
- Типичное применение: сигнальный огонёк на модели или глаза робота.

## Световая матрица Robot Inventor {#robot-inventor-light}

Эти блоки взяты из приложения Robot Inventor и работают только с [хабами MINDSTORMS Robot Inventor и SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). На них есть значок хаба. Нажмите на картинку в блоке, чтобы её нарисовать; в блоках анимации на ней видны первый кадр и число кадров.

### `включить … в течение … секунды` (Новичок) {#block_ri_light_image_for}

<img src={useBaseUrl('/img/blocks/block_ri_light_image_for.svg')} alt="block_ri_light_image_for.svg" />

Показывает картинку на световой матрице заданное время (по умолчанию 2 секунды), а потом гасит её. Блок ждёт, пока время не истечёт.

### `воспроизвести анимацию … в … кадров в секунду до конца` (Новичок) {#block_ri_light_animation_until_done}

<img src={useBaseUrl('/img/blocks/block_ri_light_animation_until_done.svg')} alt="block_ri_light_animation_until_done.svg" />

Один раз проигрывает кадры анимации с заданной скоростью (по умолчанию 4 кадра в секунду) и ждёт последнего кадра.

### `запустить анимацию … в … кадров в секунду …` (Новичок) {#block_ri_light_animation_start}

<img src={useBaseUrl('/img/blocks/block_ri_light_animation_start.svg')} alt="block_ri_light_animation_start.svg" />

Запускает анимацию и сразу переходит к следующему блоку.

- `один раз` — проигрывает её один раз.
- `повторить` (по умолчанию) — проигрывает её снова и снова, пока другой блок света не изменит матрицу.

### `установить яркость пикселей на … %` (Продвинутый) {#block_ri_light_set_brightness}

<img src={useBaseUrl('/img/blocks/block_ri_light_set_brightness.svg')} alt="block_ri_light_set_brightness.svg" />

Задаёт яркость картинок и анимаций описанных выше блоков Robot Inventor, от 0 до 100 %. Пока этот блок не выполнен, они горят с полной яркостью. Каждый пиксель сохраняет свою яркость относительно остальных.

### Рисование картинок и анимаций {#animation-editor}

Нажмите на картинку в блоке света, чтобы открыть редактор:

- **Пиксели**: нажимайте на сетку 5×5 или проводите по ней, чтобы закрашивать выбранной яркостью.
- **Яркость**: шкала рядом с сеткой выбирает яркость для рисования (10 уровней, от выключенного до полной).
- **Всё выключить / всё включить**: очистить картинку или залить её выбранной яркостью.
- **Кадры** (только в блоках анимации): полоса под сеткой показывает текущий кадр, например **2/3**. Кнопки переходят к **предыдущему** и **следующему** кадру, **добавляют** пустой кадр после текущего, **дублируют** текущий кадр или **удаляют** его (в анимации остаётся хотя бы один кадр).

<Screenshot name="robot-inventor-animation-editor" alt="Редактор анимации: сетка 5×5, шкала яркости и полоса кадров" width={600} />

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
