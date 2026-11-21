---
id: TechnicMoveHubConfigurations
title: Конфігурації Technic Move Hub
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Конфігурації Technic Move Hub {#technic-move-hub-configurations}

## Огляд {#overview}

На відміну від інших хабів LEGO® Powered Up, Technic Move Hub поводиться по-різному залежно від завантаженої в нього конфігурації.

MOCPilot може змінити цю конфігурацію, щоб хаб відповідав офіційному набору LEGO, яким ви хочете керувати.

## Підтримувані конфігурації {#supported-configurations}

MOCPilot знає такі конфігурації:

- **Porsche GT4 e-Performance**
- **Lamborghini Revuelto**
- **Batmobile™ Tumbler**

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_4.png')} alt="Варіанти конфігурації Technic Move Hub у блоці встановлення конфігурації хаба" />

## Зміна конфігурації в розділі «Мої Bluetooth хаби» {#change-configuration-from-my-bluetooth-hubs}

Щоб змінити конфігурацію на сторінці **Мої Bluetooth хаби**:

1. Відкрийте **Мої Bluetooth хаби**.
2. Знайдіть Technic Move Hub.
3. Відкрийте меню хаба.
4. Виберіть **Вибрати конфігурацію**.
5. Виберіть конфігурацію.
6. Підтвердьте в діалозі.

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_0.png')} alt="Контекстне меню Technic Move Hub із дією «Вибрати конфігурацію»" />

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_1.png')} alt="Підменю конфігурацій Technic Move Hub" />

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_3.png')} alt="Діалог підтвердження зміни конфігурації Technic Move Hub" />

:::warning Важливо
Зміна конфігурації записує програму в хаб, приблизно як оновлення прошивки.

Не вимикайте хаб протягом усього процесу, а телефон, планшет або комп’ютер тримайте увімкненим і поруч із хабом, щоб з’єднання Bluetooth було стабільним. Не закривайте MOCPilot, не вимикайте Bluetooth і не вимикайте хаб, поки змінюється конфігурація.

Перервана зміна може пошкодити прошивку хаба. Тоді перед подальшим використанням хабу може знадобитися [відновлення прошивки](/docs/Application/Hubs/RecoveryHubFirmware/).
:::

Поки конфігурація змінюється, хаб ігнорує звичайні команди, а його світлодіод перебирає кольори. Коли нову конфігурацію встановлено, хаб перезапускається.

## Блоки конфігурації {#configuration-blocks}

Логічні блоки можуть читати й змінювати конфігурацію під час роботи програми.

### Встановити конфігурацію хаба {#set-hub-configuration}

<img src={useBaseUrl('/img/blocks/block_hubs_set_hub_config.svg')} alt="Блок встановлення конфігурації хаба" />

Блок **Встановити конфігурацію хаба** завантажує одну з підтримуваних конфігурацій у вибраний хаб.

- Вибір хаба: хаб, який потрібно переналаштувати.
- Вибір конфігурації: цільова конфігурація.
- Доступні конфігурації для Technic Move Hub: **Porsche GT4 e-Performance**, **Lamborghini Revuelto** і **Batmobile™ Tumbler**.

Див. [опис блока встановлення конфігурації хаба](/docs/Application/BlockBuilder/Blocks/Control/#block_hubs_set_hub_config).

### Конфігурація хаба {#hub-configuration}

<img src={useBaseUrl('/img/blocks/block_hubs_all_control_hub_config.svg')} alt="Блок-репортер конфігурації хаба" />

Блок **Конфігурація хаба** повідомляє поточну конфігурацію вибраного хаба.

- Вибір хаба: хаб, з якого потрібно прочитати конфігурацію.
- Формат виводу: **текст** повертає назву конфігурації.
- Формат виводу: **індекс** повертає номер конфігурації, що зручно для порівнянь в умовах.

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_5.png')} alt="Варіанти формату виводу блока конфігурації хаба" />

Див. [опис блока конфігурації хаба](/docs/Application/BlockBuilder/Blocks/Control/#block_hubs_all_control_hub_config).

### Силовий імпульс {#power-pulse}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_power_pulse.svg')} alt="Блок силового імпульсу Technic Move Hub" />

Блок **Силовий імпульс** надсилає силовий імпульс вибраному Technic Move Hub. Він працює лише з конфігурацією **Batmobile™ Tumbler**.

Після цього хаб ненадовго, приблизно на 1–2 секунди, запускає мотори на максимальній потужності й швидкості. У Швидких зв’язках ту саму функцію виконує операція [Силовий імпульс](/docs/Application/Links/Blocks/OutputBlocks#op-pulse).

Див. [опис блока силового імпульсу](/docs/Application/BlockBuilder/Blocks/Motors/#block_hubs_technicmove_motors_power_pulse).

## Зміна конфігурації під час роботи програми {#change-configuration-during-program-runtime}

Програма також може змінювати конфігурацію під час роботи. Типовий підхід:

1. Прочитати поточну конфігурацію хаба.
2. Порівняти її з конфігурацією, якої потребує профіль.
3. Якщо конфігурація інша, встановити потрібну.
4. Після зміни знову прочитати конфігурацію.
5. Продовжувати лише тоді, коли хаб повідомляє очікувану конфігурацію.
6. Від’єднатися або зупинити програму, якщо потрібну конфігурацію не застосовано.

Як це зробити, показує готовий профіль для цього хаба.

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_6.png')} alt="Приклад блоків зі зміною конфігурації Technic Move Hub під час роботи" />
