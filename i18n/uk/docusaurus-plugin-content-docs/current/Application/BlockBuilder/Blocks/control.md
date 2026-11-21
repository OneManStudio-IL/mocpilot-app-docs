---
id: Control
title: Контроль
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Контроль {#control}

Блоки контролю визначають, як виконується скрипт: очікування, цикли, розгалуження й зупинка. Коли в профілі є хаби, у цій категорії також є блоки, що підключають хаби й змінюють їхні налаштування.

## Блоки очікування {#wait-blocks}

### `чекати … секунди` (Початківець) {#block_control_wait_for}

<img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />

Призупиняє скрипт на задану кількість секунд.

### `чекайте до …` (Просунутий) {#block_control_wait_until}

<img src={useBaseUrl('/img/blocks/block_control_wait_until.svg')} alt="block_control_wait_until.svg" />

Призупиняє скрипт, доки умова не стане істинною.

## Цикли {#loops}

### `повторити …` (Просунутий) {#block_control_repeat_for}

<img src={useBaseUrl('/img/blocks/block_control_repeat_for.svg')} alt="block_control_repeat_for.svg" />

Виконує блоки всередині задану кількість разів (типово 10).

### `повторювати поки …` (Просунутий) {#block_control_repeat_until}

<img src={useBaseUrl('/img/blocks/block_control_repeat_until.svg')} alt="block_control_repeat_until.svg" />

Виконує блоки всередині знову й знову, доки умова не стане істинною.

### `повторювати завжди` (Просунутий) {#block_control_repeat_forever}

<img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />

Виконує блоки всередині знову й знову, доки не зупиниться скрипт або програма. Під ним нічого не можна приєднати.

## Розгалуження {#branches}

### `якщо … тоді` (Початківець) {#block_control_if}

<img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />

Виконує блоки всередині, лише коли умова істинна.

### `якщо … тоді … інше` (Просунутий) {#block_control_if_else}

<img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />

Виконує першу гілку, коли умова істинна, і другу — в іншому разі.

### `зроби це … і це` (Гуру) {#block_control_do_this_and_this}

<img src={useBaseUrl('/img/blocks/block_control_do_this_and_this.svg')} alt="block_control_do_this_and_this.svg" />

Виконує першу групу блоків, потім другу, і лише після цього переходить до блоків під ним.

## Зупинка {#stopping}

### `зупинити …` (Початківець) {#block_control_stop}

<img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />

Зупиняє скрипти; що саме зупиняється, залежить від варіанта.

- `всі`: зупиняє всі скрипти.
- `цей стек`: зупиняє лише цей скрипт.
- `і вийти з програми`: зупиняє програму.

### `зупинити інші стеки` (Гуру) {#block_control_stop_other_stacks}

<img src={useBaseUrl('/img/blocks/block_control_stop_other_stacks.svg')} alt="block_control_stop_other_stacks.svg" />

Зупиняє всі інші запущені скрипти; цей продовжує працювати.

## Блоки хабів {#hub-blocks}

### `підключити / від’єднати …` (Початківець) {#block_hubs_control_set_connect}

<img src={useBaseUrl('/img/blocks/block_hubs_control_set_connect.svg')} alt="block_hubs_control_set_connect.svg" />

Підключає вибраний хаб до програми або від’єднує його.

- Варіанти: `підключити`, `від’єднати`
- Хаби: усі.

### `… підключено` (Початківець) {#block_hubs_all_sensors_is_connected}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_connected.svg')} alt="block_hubs_all_sensors_is_connected.svg" />

Повертає `true`, коли вибраний хаб підключено.

- Тип: булевий блок
- Хаби: усі.

### `налаштувати … конфігурацію на …` (Просунутий) {#block_hubs_set_hub_config}

<img src={useBaseUrl('/img/blocks/block_hubs_set_hub_config.svg')} alt="block_hubs_set_hub_config.svg" />

Перемикає хаб на одну з його конфігурацій.

- Хаби: Technic Move Hub (на сьогодні єдиний хаб із конфігураціями).
- Для чого: перемкнути хаб на іншу конфігурацію перед виконанням наступних блоків.

### `отримати … конфігурація як …` (Просунутий) {#block_hubs_all_control_hub_config}

<img src={useBaseUrl('/img/blocks/block_hubs_all_control_hub_config.svg')} alt="block_hubs_all_control_hub_config.svg" />

Повертає поточну конфігурацію хаба.

- Тип: блок-репортер
- Результат: `текст` або `індекс`
- Хаби: Technic Move Hub.
- Повертає `NaN`, коли хаб не підключено або він не має конфігурації.

### `налаштувати … режим живлення на …` (Початківець) {#block_hubs_buwizz_sensors_set_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_set_power_mode.svg')} alt="block_hubs_buwizz_sensors_set_power_mode.svg" />

Задає режим потужності BuWizz 2.

- Режими: `повільний`, `нормальний`, `швидкий`, `Ludicrous`
- Хаби: BuWizz 2.

### `отримати … режим живлення як …` (Гуру) {#block_hubs_buwizz_sensors_get_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_power_mode.svg')} alt="block_hubs_buwizz_sensors_get_power_mode.svg" />

Повертає поточний режим потужності BuWizz 2.

- Результат: `текст` або `індекс`
- Хаби: BuWizz 2.

### `налаштувати … канал керування до …` (Просунутий) {#block_hubs_mouldking_control_set_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_set_control_channel.svg')} alt="block_hubs_mouldking_control_set_control_channel.svg" />

Задає канал керування хаба Mould King.

- Канали: `A`, `B`, `C`
- Хаби: Mould King 4.0 і 6.0.

### `отримати … канал керування як …` (Просунутий) {#block_hubs_mouldking_control_get_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_get_control_channel.svg')} alt="block_hubs_mouldking_control_get_control_channel.svg" />

Повертає поточний канал керування хаба Mould King.

- Результат: `текст` або `індекс`
- Хаби: Mould King 4.0 і 6.0.
