---
id: BlocksIntroducing
title: Знайомство з Логічними блоками
description: "Логічні блоки — візуальний редактор блокового програмування MOCPilot: події, цикли, умови, змінні, датчики та звуки."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# Логічні блоки {#logic-blocks}

**Логічні блоки** — редактор блокового програмування в MOCPilot. Ви створюєте програми, складаючи блоки, майже як у Scratch: події, цикли, умови, змінні, списки, власні блоки, звуки, а також блоки для моторів, світла, датчиків, елементів панелі та геймпада.

Обирайте Логічні блоки, коли вашій моделі потрібна логіка: роботи, автоматичні послідовності, реакції на датчики, перевірки під час запуску, ігри. Якщо потрібно лише з’єднати елементи керування з моторами, [Швидкі зв’язки](/docs/Application/Links/LinksIntroducing) працюють швидше.

<img src={useBaseUrl('/img/illustrations/editor_blocks.svg')} alt="Програма в Логічних блоках" style={{width: '100%', maxWidth: 720}} />

:::warning Це не Scratch
Логічні блоки мають власний набір блоків і власну поведінку. Програми MOCPilot не можна імпортувати в Scratch, а проєкти Scratch — у MOCPilot.
:::

## Редактор з першого погляду {#the-editor-at-a-glance}

<Screenshot name="blocks-editor" alt="Редактор Логічних блоків із палітрою та програмою" width={900} />

- **Палітра** містить категорії блоків: **Події**, **Контроль**, **Датчики**, **Звуки**, **Оператор**, **Змінні**, **Списки** і **Мої блоки**. Інші категорії з’являються, коли вони потрібні профілю: **Двигуни** і **Світло** (коли їх підтримує хаб), **Симулятор** (коли на панелі є педалі, коробка передач або ручник), **Наекранні контролери** і **Геймпад**.
- **Область програми** — місце, куди ви перетягуєте блоки й складаєте скрипти.
- На верхній панелі є **Мої хаби**, **Панель**, **Геймпад**, **Монітор**, **Налаштування редактора**, **ШІ-конструктор** і **Запустити/Зупинити**.

Докладніше — в розділі [Робота в редакторі](/docs/Application/BlockBuilder/Editor).

## Як виконується програма {#how-a-program-runs}

- Скрипт починається з блока **події** (блока-«капелюха»): *коли програма запускається*, *коли кнопка … натиснуто*, *коли я отримую …* тощо.
- Блоки, приєднані під ним, виконуються згори донизу.
- Кілька скриптів виконуються **одночасно**. Щоб узгодити їх, використовуйте повідомлення (*передати*).
- **Цикли** (*повторювати завжди*, *повторити*, *повторювати поки*) підтримують роботу скрипту; **умови** (*якщо*, *якщо … інше*, *чекайте до*) ухвалюють рішення.
- Блоки-**репортери** (заокруглені) повертають значення й вставляються в поля інших блоків; **булеві** блоки (загострені) повертають «істина» чи «хибність» для умов.
- **Змінні** і **списки** зберігають значення між блоками та скриптами.

## Форми блоків {#block-shapes}

### Блоки-«капелюхи» {#hat-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />
  <img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />
</div>

Запускають скрипт, коли щось відбувається. Блоки можна приєднувати лише під ними.

---

### Блоки-команди {#stack-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
</div>

Основні командні блоки: кожен щось робить.

---

### C-блоки {#c-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />
</div>

Блоки у формі літери C, що містять інші блоки всередині: цикли та умови.

---

### Блоки-репортери {#reporter-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />
</div>

Повертають значення, наприклад число чи текст.

---

### Булеві блоки {#boolean-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />
</div>

Повертають лише `true` або `false`. Зазвичай їх використовують в умовах.

---

### Завершальні блоки {#cap-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />
</div>

Завершують скрипт: під ними нічого не можна приєднати.

---

### Стек блоків {#block-stack}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks_stack.svg')} alt="blocks_stack.svg" />
</div>

Стек — це група з’єднаних блоків, яка виконується як один скрипт, згори донизу.
Зазвичай стек починається з блока події, за яким ідуть блоки, що виконуються по черзі.

---


## Хаби, порти й елементи керування {#hubs-ports-and-controls}

- Блоки моторів і світла приймають **хаб** і **порт**. Категорії «Двигуни» і «Світло» з’являються лише тоді, коли їх підтримує хаб профілю, а деякі блоки існують лише для певних хабів (наприклад, режими потужності BuWizz або функції Technic Move Hub). В описі кожного блока сказано, з якими хабами він працює.
- Блоки панелі звертаються до елементів за назвою (**JOY1**, **BTN2**). Елемент не можна видалити з панелі, поки його використовують блоки; спершу приберіть ці блоки.
- Блоки геймпада з’являються, коли ввімкнено **Увімкнути блоки геймпада** на [сторінці «Геймпад»](/docs/Application/Dashboard/Gamepad).

## Рівні блоків {#block-levels}

Кожен профіль має **Рівень блоків**: **Початківець** показує найпростіші блоки, **Просунутий** додає поширені блоки логіки та пристроїв, а **Гуру** показує повний набір. Виберіть його під час створення профілю або пізніше в налаштуваннях редактора. У цьому довіднику рівень кожного блока вказано поруч із його назвою.

## Рекомендований порядок роботи {#recommended-workflow}

1. Почніть з одного блока події й короткого скрипту; натисніть **Запустити** і перевірте, що все працює.
2. Перевірте напрямки моторів і діапазони значень якомога раніше (допоможе Монітор).
3. Розбийте програму на невеликі скрипти, що спілкуються повідомленнями; повторювану логіку винесіть у [Мої блоки](/docs/Application/BlockBuilder/Blocks/MyBlocks).
4. Подбайте про безпеку: обмеження, зупинки, перевірка під час запуску та план на випадок, якщо хаб від’єднається.

## Типові помилки {#common-pitfalls}

- Скрипт без блока події ніколи не запуститься.
- Вибрано не той хаб чи порт, тож нічого помітного не відбувається.
- Змішування тексту, чисел і булевих значень дає несподівані результати.
- Дуже часті події без фільтрації (наприклад, подія датчика на кожну дрібну зміну) можуть перевантажити програму; використовуйте пороги або короткі паузи.

## Довідник блоків {#block-reference}

- [Події](/docs/Application/BlockBuilder/Blocks/Events) · [Контроль](/docs/Application/BlockBuilder/Blocks/Control) · [Оператори](/docs/Application/BlockBuilder/Blocks/Operators)
- [Змінні](/docs/Application/BlockBuilder/Blocks/Variables) · [Списки](/docs/Application/BlockBuilder/Blocks/Lists) · [Мої блоки](/docs/Application/BlockBuilder/Blocks/MyBlocks)
- [Мотори](/docs/Application/BlockBuilder/Blocks/Motors) · [Світло](/docs/Application/BlockBuilder/Blocks/Light) · [Датчики](/docs/Application/BlockBuilder/Blocks/Sensors) · [Звуки](/docs/Application/BlockBuilder/Blocks/Sounds)
- [Симулятор](/docs/Application/BlockBuilder/Blocks/Simulator) · [Наекранні контролери](/docs/Application/BlockBuilder/Blocks/DashboardControllers) · [Геймпад](/docs/Application/BlockBuilder/Blocks/Gamepad)

У застосунку довго натисніть (або клацніть правою кнопкою) блок і виберіть **Про блок**, щоб відкрити його опис тут.

Готові програми: [Приклади](/docs/Application/BlockBuilder/Examples).
