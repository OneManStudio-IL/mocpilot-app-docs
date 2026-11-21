---
id: Control
title: Контроль
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Контроль

Блоки этой категории определяют, как выполняется скрипт: ожидание, циклы, ветвления и остановка. Если в профиле есть хабы, здесь же появляются блоки, которые подключают хабы и меняют их настройки.

## Ожидание

### `ждать … секунды` (Новичок) {#block_control_wait_for}

<img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />

Приостанавливает скрипт на заданное число секунд.

### `подождите до …` (Продвинутый) {#block_control_wait_until}

<img src={useBaseUrl('/img/blocks/block_control_wait_until.svg')} alt="block_control_wait_until.svg" />

Приостанавливает скрипт, пока условие не станет истинным.

## Циклы

### `повторить …` (Продвинутый) {#block_control_repeat_for}

<img src={useBaseUrl('/img/blocks/block_control_repeat_for.svg')} alt="block_control_repeat_for.svg" />

Выполняет вложенные блоки заданное число раз (по умолчанию 10).

### `повторять пока …` (Продвинутый) {#block_control_repeat_until}

<img src={useBaseUrl('/img/blocks/block_control_repeat_until.svg')} alt="block_control_repeat_until.svg" />

Выполняет вложенные блоки снова и снова, пока условие не станет истинным.

### `повторять всегда` (Продвинутый) {#block_control_repeat_forever}

<img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />

Выполняет вложенные блоки по кругу, пока не остановится скрипт или программа. Под ним ничего присоединить нельзя.

## Ветвления

### `если … тогда` (Новичок) {#block_control_if}

<img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />

Выполняет вложенные блоки, только если условие истинно.

### `если … тогда … то` (Продвинутый) {#block_control_if_else}

<img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />

Если условие истинно, выполняет первую ветку, иначе — вторую.

### `сделай это … и это` (Гуру) {#block_control_do_this_and_this}

<img src={useBaseUrl('/img/blocks/block_control_do_this_and_this.svg')} alt="block_control_do_this_and_this.svg" />

Выполняет первую группу блоков, затем вторую и только после этого переходит к блокам ниже.

## Остановка

### `остановить …` (Новичок) {#block_control_stop}

<img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />

Останавливает скрипты; что именно — зависит от выбранного варианта.

- `все` — все скрипты.
- `этот стек` — только этот скрипт.
- `и выйти из программы` — программу целиком.

### `остановить другие стеки` (Гуру) {#block_control_stop_other_stacks}

<img src={useBaseUrl('/img/blocks/block_control_stop_other_stacks.svg')} alt="block_control_stop_other_stacks.svg" />

Останавливает все остальные запущенные скрипты, а текущий продолжает работать.

## Блоки хабов

### `подключить / отключить …` (Новичок) {#block_hubs_control_set_connect}

<img src={useBaseUrl('/img/blocks/block_hubs_control_set_connect.svg')} alt="block_hubs_control_set_connect.svg" />

Подключает или отключает выбранный хаб прямо из программы.

- Варианты: `подключить`, `отключить`
- Хабы: все.

### `… подключено` (Новичок) {#block_hubs_all_sensors_is_connected}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_connected.svg')} alt="block_hubs_all_sensors_is_connected.svg" />

Возвращает `true`, если выбранный хаб подключён.

- Тип: логический блок
- Хабы: все.

### `установить … конфигурацию на …` (Продвинутый) {#block_hubs_set_hub_config}

<img src={useBaseUrl('/img/blocks/block_hubs_set_hub_config.svg')} alt="block_hubs_set_hub_config.svg" />

Переключает хаб на одну из его конфигураций.

- Хабы: Technic Move Hub (пока это единственный хаб с конфигурациями).
- Для чего: сменить конфигурацию хаба перед следующими блоками.

### `получить … конфигурация как …` (Продвинутый) {#block_hubs_all_control_hub_config}

<img src={useBaseUrl('/img/blocks/block_hubs_all_control_hub_config.svg')} alt="block_hubs_all_control_hub_config.svg" />

Возвращает текущую конфигурацию хаба.

- Тип: блок-репортёр
- Результат: `текст` или `индекс`
- Хабы: Technic Move Hub.
- Возвращает `NaN`, если хаб не подключён или конфигурации нет.

### `установить … режим питания на …` (Новичок) {#block_hubs_buwizz_sensors_set_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_set_power_mode.svg')} alt="block_hubs_buwizz_sensors_set_power_mode.svg" />

Задаёт режим питания BuWizz 2.

- Режимы: `Slow`, `Normal`, `Fast`, `Ludicrous`
- Хабы: BuWizz 2.

### `получить … режим питания как …` (Гуру) {#block_hubs_buwizz_sensors_get_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_power_mode.svg')} alt="block_hubs_buwizz_sensors_get_power_mode.svg" />

Возвращает текущий режим питания BuWizz 2.

- Результат: `текст` или `индекс`
- Хабы: BuWizz 2.

### `установить … канал управления на …` (Продвинутый) {#block_hubs_mouldking_control_set_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_set_control_channel.svg')} alt="block_hubs_mouldking_control_set_control_channel.svg" />

Задаёт канал управления хаба Mould King.

- Каналы: `A`, `B`, `C`
- Хабы: Mould King 4.0 и 6.0.

### `получить … канал управления как …` (Продвинутый) {#block_hubs_mouldking_control_get_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_get_control_channel.svg')} alt="block_hubs_mouldking_control_get_control_channel.svg" />

Возвращает текущий канал управления хаба Mould King.

- Результат: `текст` или `индекс`
- Хабы: Mould King 4.0 и 6.0.
