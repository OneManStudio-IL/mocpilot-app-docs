---
id: BlocksIntroducing
title: Знакомство с Логическими блоками
description: "Логические блоки — визуальный редактор блочного программирования MOCPilot: события, циклы, условия, переменные, датчики и звуки."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Логические блоки

**Логические блоки** — редактор блочного программирования в MOCPilot. Программу собирают из блоков, как в Scratch: события, циклы, условия, переменные, списки, собственные блоки, звуки, а также блоки для моторов, света, датчиков, элементов панели и геймпада.

Логические блоки нужны, когда модели требуется логика: роботы, автоматические последовательности, реакция на датчики, проверки при запуске, игры. Если надо просто связать элементы управления с моторами, быстрее получится в [Быстрых связях](/docs/Application/Links/LinksIntroducing).

<img src={useBaseUrl('/img/illustrations/editor_blocks.svg')} alt="Программа на Логических блоках" style={{width: '100%', maxWidth: 720}} />

:::warning Это не Scratch
У Логических блоков свой набор блоков и своё поведение. Программы MOCPilot нельзя перенести в Scratch, а проекты Scratch — в MOCPilot.
:::

## Редактор с первого взгляда

<Screenshot name="blocks-editor" alt="Редактор Логических блоков: палитра и программа" width={900} />

- В **палитре** собраны категории блоков: **События**, **Контроль**, **Датчики**, **Звуки**, **Операторы**, **Переменные**, **Списки** и **Мои блоки**. Остальные появляются, когда они нужны профилю: **Моторы** и **Свет** (если их поддерживает хаб), **Движение** (с [хабом Robot Inventor](/docs/Application/Hubs/RobotInventorHub)), **Симулятор** (если на панели есть педали, коробка передач или ручник), **Наэкранные контроллеры** и **Геймпад**.
- В **области программы** вы раскладываете блоки и собираете из них скрипты.
- На верхней панели — **Отменить** и **Повторить**, **Панель**, **Мои хабы**, **Геймпад**, боковые панели **ИИ-конструктор**, [**Рюкзак**](/docs/Application/BlockBuilder/Backpack) и **Монитор**, **Ещё** (с **Настройками редактора**) и **Запустить/Остановить**. На телефоне и планшете боковые панели и **Геймпад** находятся в меню **Ещё**.

Подробнее — в разделе [Работа в редакторе](/docs/Application/BlockBuilder/Editor).

## Как выполняется программа

- Скрипт начинается с блока **события** (стартового блока): *когда программа запускается*, *когда кнопка … нажата*, *когда я получаю …* и т. п.
- Блоки под ним выполняются по очереди сверху вниз.
- Несколько скриптов работают **одновременно**. Согласовать их помогают сообщения (блок *передать*).
- **Циклы** (*повторять всегда*, *повторить*, *повторять пока*) не дают скрипту закончиться, **условия** (*если … тогда*, *если … тогда … то*, *подождите до*) выбирают, что делать дальше.
- **Блоки-репортёры** (скруглённые) возвращают значение и вставляются в поля других блоков; **логические** блоки (с острыми краями) возвращают «истину» или «ложь» для условий.
- **Переменные** и **списки** хранят значения, общие для блоков и скриптов.

## Формы блоков

### Стартовые блоки

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />
  <img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />
</div>

Запускают скрипт, когда что-то происходит. Другие блоки к ним присоединяются только снизу.

---

### Командные блоки

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
</div>

Основные блоки: каждый выполняет какое-то действие.

---

### C-блоки

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />
</div>

Блоки в форме буквы C, внутрь которых вкладываются другие блоки: циклы и условия.

---

### Блоки-репортёры

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />
</div>

Возвращают значение — например, число или текст.

---

### Логические блоки

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />
</div>

Возвращают только `true` или `false`; чаще всего их ставят в условия.

---

### Завершающие блоки

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />
</div>

Завершают скрипт: под ними ничего присоединить нельзя.

---

### Стек блоков

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks_stack.svg')} alt="blocks_stack.svg" />
</div>

Стек — это цепочка соединённых блоков, которая выполняется как один скрипт сверху вниз.
Обычно стек начинается с блока события, за которым по порядку идут остальные блоки.

---


## Хабы, порты и элементы управления

- В блоках моторов и света выбираются **хаб** и **порт**. Категории «Моторы» и «Свет» появляются, только если их поддерживает хаб профиля, а некоторые блоки есть лишь у определённых хабов (например, режимы питания BuWizz или функции Technic Move Hub). В описании каждого блока сказано, с какими хабами он работает.
- Блоки панели обращаются к элементам по имени (**JOY1**, **BTN2**). Элемент, который используется в блоках, нельзя удалить с панели — сначала уберите эти блоки.
- Блоки геймпада появляются, когда на [странице «Геймпад»](/docs/Application/Dashboard/Gamepad) включён параметр **Включить блоки геймпада**.

## Уровни блоков

У каждого профиля есть **уровень блоков**: **Новичок** показывает самые простые блоки, **Продвинутый** добавляет основные блоки логики и устройств, **Гуру** открывает полный набор. Уровень выбирают при создании профиля или позже в настройках редактора. В этом справочнике уровень указан рядом с названием каждого блока.

## Как лучше работать

1. Начните с одного блока события и короткого скрипта; нажмите **Запустить** и убедитесь, что всё работает.
2. Сразу проверьте направления моторов и диапазоны значений (поможет Монитор).
3. Разбейте программу на небольшие скрипты, которые общаются сообщениями; повторяющуюся логику вынесите в [Мои блоки](/docs/Application/BlockBuilder/Blocks/MyBlocks).
4. Позаботьтесь о безопасности: ограничения, остановка, проверка при запуске и действия на случай, если хаб отключится.

## Частые ошибки

- Скрипт без блока события никогда не запустится.
- Выбран не тот хаб или порт — и ничего заметного не происходит.
- Текст, числа и логические значения перемешаны, и результат получается неожиданным.
- Слишком частые события без фильтрации (например, событие датчика на каждое мельчайшее изменение) могут перегрузить программу; используйте пороги или короткие паузы.

## Справочник блоков {#block-reference}

- [События](/docs/Application/BlockBuilder/Blocks/Events) · [Контроль](/docs/Application/BlockBuilder/Blocks/Control) · [Операторы](/docs/Application/BlockBuilder/Blocks/Operators)
- [Переменные](/docs/Application/BlockBuilder/Blocks/Variables) · [Списки](/docs/Application/BlockBuilder/Blocks/Lists) · [Мои блоки](/docs/Application/BlockBuilder/Blocks/MyBlocks)
- [Движение](/docs/Application/BlockBuilder/Blocks/Movement) · [Моторы](/docs/Application/BlockBuilder/Blocks/Motors) · [Свет](/docs/Application/BlockBuilder/Blocks/Light) · [Датчики](/docs/Application/BlockBuilder/Blocks/Sensors) · [Звуки](/docs/Application/BlockBuilder/Blocks/Sounds)
- [Симулятор](/docs/Application/BlockBuilder/Blocks/Simulator) · [Наэкранные контроллеры](/docs/Application/BlockBuilder/Blocks/DashboardControllers) · [Геймпад](/docs/Application/BlockBuilder/Blocks/Gamepad)

В приложении долгое нажатие (или правый клик) по блоку → **О блоке** открывает его описание здесь.

Готовые программы — в разделе [Примеры](/docs/Application/BlockBuilder/Examples).
