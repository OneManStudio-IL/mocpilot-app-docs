---
id: Sounds
title: Звуки
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Звуки {#sounds}

Блоки звуку відтворюють звуки на телефоні, планшеті чи комп’ютері, де працює MOCPilot: сигнали, гудки, клаксони, ефекти та ваші власні записи. Хаб Robot Inventor має й власний динамік, див. [Динамік хаба Robot Inventor](#robot-inventor-sounds).

## Які звуки можна відтворювати {#which-sounds-you-can-play}

Список звуків у блоках складається з двох частин:

- **Вбудована бібліотека**: короткі сигнали, щебет, сигнал заднього ходу, сирена, тривога, сигнали успіху й помилки, клаксони автомобіля, вантажівки й потяга, велосипедний дзвінок, звук поворотника та кілька ефектів (клацання, хлопок, лазер, монетка, увімкнення, вимкнення).
- **Ваші власні звуки**: натисніть **Додати звук** вгорі категорії й виберіть аудіофайл. Застосунок конвертує його й зберігає в профілі, тож звук переходить разом із профілем на інші ваші пристрої та в каталог. Профіль може містити до 30 звуків; довший файл обрізається до 15 секунд. Керувати ними можна кнопками **Перейменувати звук** і **Видалити звук**; блоки, що відтворювали видалений звук, замовкають.

<Screenshot name="blocks-add-sound" alt="Діалог «Додати звук» у Логічних блоках" width={900} />

## Блоки {#blocks}

### `звук … грати / грати до кінця / повторювати` (Початківець) {#block_sounds_play}

<img src={useBaseUrl('/img/blocks/block_sounds_play.svg')} alt="block_sounds_play.svg" />

Відтворює вибраний звук.

- `грати`: запускає звук і одразу переходить до наступного блока. Звуки, призначені для циклічного відтворення (як-от сирена чи сигнал заднього ходу), повторюються.
- `грати до кінця`: відтворює звук один раз і чекає, доки він закінчиться.
- `повторювати`: відтворює звук по колу, доки ви його не зупините.
- Якщо запустити звук, який уже грає, він почнеться спочатку.
- Замість вибору зі списку в поле можна вставити репортер **звук** (або змінну, що його містить).

### `пищати … Гц … с` (Початківець) {#block_sounds_beep}

<img src={useBaseUrl('/img/blocks/block_sounds_beep.svg')} alt="block_sounds_beep.svg" />

Відтворює тон заданої висоти й тривалості та чекає, доки він закінчиться.

- Висота: від 50 до 8000 Гц (типово 440).
- Тривалість: від 0,02 до 10 секунд (типово 0,2).

### `зупинити звук …` (Початківець) {#block_sounds_stop}

<img src={useBaseUrl('/img/blocks/block_sounds_stop.svg')} alt="block_sounds_stop.svg" />

Зупиняє вибраний звук.

### `зупинити всі звуки` (Початківець) {#block_sounds_stop_all}

<img src={useBaseUrl('/img/blocks/block_sounds_stop_all.svg')} alt="block_sounds_stop_all.svg" />

Зупиняє всі звуки, що відтворюються.

### `встановити гучність звуку на … %` (Просунутий) {#block_sounds_set_volume}

<img src={useBaseUrl('/img/blocks/block_sounds_set_volume.svg')} alt="block_sounds_set_volume.svg" />

Задає гучність усіх звуків програми, від 0 до 100 %. Коли програма зупиняється, гучність повертається до 100 %.

### `гучність звуку` (Просунутий) {#block_sounds_volume}

<img src={useBaseUrl('/img/blocks/block_sounds_volume.svg')} alt="block_sounds_volume.svg" />

Повертає поточну гучність звуку, від 0 до 100.

### `звук …` (Просунутий) {#block_sounds_sound}

<img src={useBaseUrl('/img/blocks/block_sounds_sound.svg')} alt="block_sounds_sound.svg" />

Повертає вибраний звук як значення.

- Для чого: зберегти звук у змінній чи списку або передати його в один із [Моїх блоків](/docs/Application/BlockBuilder/Blocks/MyBlocks), а потім відтворити блоком **звук … грати**.

## Динамік хаба Robot Inventor {#robot-inventor-sounds}

Ці блоки взято із застосунку Robot Inventor, і вони відтворюють звуки через динамік [хаба MINDSTORMS Robot Inventor або SPIKE Prime](/docs/Application/Hubs/RobotInventorHub), а не на вашому пристрої. На них є значок хаба. Ноти задаються номерами MIDI: 60 — це до першої октави, кожен крок — півтон (від 0 до 132).

### `відтворити сигнал … протягом … секунди` (Початківець) {#block_ri_sound_beep_for}

<img src={useBaseUrl('/img/blocks/block_ri_sound_beep_for.svg')} alt="block_ri_sound_beep_for.svg" />

Відтворює сигнал заданої ноти (типово 60) протягом заданого часу (типово 0,2 с) і чекає, доки він не закінчиться.

### `почати сигнал …` (Просунутий) {#block_ri_sound_beep}

<img src={useBaseUrl('/img/blocks/block_ri_sound_beep.svg')} alt="block_ri_sound_beep.svg" />

Запускає сигнал заданої ноти й відразу переходить далі. Сигнал звучить до блока **зупинити всі звуки** або до іншого звуку хаба.

### `відтворити звук … до кінця` (Початківець) {#block_ri_sound_play_until_done}

<img src={useBaseUrl('/img/blocks/block_ri_sound_play_until_done.svg')} alt="block_ri_sound_play_until_done.svg" />

Відтворює один зі звуків робота, що зберігаються в хабі (Affirmative, Laser, Hello, Tadaa та ще 80), і чекає, доки він не закінчиться. Звуки входять до програмного забезпечення хаба; якщо хаб мовчить, див. [Якщо хаб не запускається](/docs/Application/Hubs/RobotInventorHub#restore).

### `запустити звук …` (Початківець) {#block_ri_sound_play}

<img src={useBaseUrl('/img/blocks/block_ri_sound_play.svg')} alt="block_ri_sound_play.svg" />

Запускає звук робота на хабі й відразу переходить далі.

### `зупинити всі звуки` (хаб) (Початківець) {#block_ri_sound_stop}

<img src={useBaseUrl('/img/blocks/block_ri_sound_stop.svg')} alt="block_ri_sound_stop.svg" />

Зупиняє звук і сигнал на хабі. Блок із такою самою назвою, але без значка хаба зупиняє звуки вашого пристрою.

### `встановити гучність хаба на … %` (Просунутий) {#block_ri_sound_set_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_set_volume.svg')} alt="block_ri_sound_set_volume.svg" />

Задає гучність сигналів, звуків і нот хаба, від 0 до 100 % (100 %, доки ви її не зміните).

### `змінити гучність хаба на …` (Просунутий) {#block_ri_sound_change_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_change_volume.svg')} alt="block_ri_sound_change_volume.svg" />

Робить хаб гучнішим або тихішим на задану величину (типово −10); гучність лишається в межах від 0 до 100 %.

### `гучність хаба` (Просунутий) {#block_ri_sound_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_volume.svg')} alt="block_ri_sound_volume.svg" />

Повертає гучність хаба, від 0 до 100.

### `налаштувати … ефект на …` (Просунутий) {#block_ri_sound_set_effect}

<img src={useBaseUrl('/img/blocks/block_ri_sound_set_effect.svg')} alt="block_ri_sound_set_effect.svg" />

Задає звуковий ефект для звуків робота, які запускаються після нього.

- `висота звуку`: від −360 до 360; додатні значення роблять звуки вищими й швидшими, від’ємні — нижчими й повільнішими. 0 — звичайне звучання.
- `баланс вліво/вправо`: від −100 до 100. Хаб має один динамік, тож ви цього не почуєте; значення зберігається для програм, створених у застосунку Robot Inventor.

### `змінити … ефект на …` (Просунутий) {#block_ri_sound_change_effect}

<img src={useBaseUrl('/img/blocks/block_ri_sound_change_effect.svg')} alt="block_ri_sound_change_effect.svg" />

Змінює ефект висоти звуку або балансу на задану величину (типово 10) у тих самих межах.

### `прибрати звукові ефекти` (Просунутий) {#block_ri_sound_clear_effects}

<img src={useBaseUrl('/img/blocks/block_ri_sound_clear_effects.svg')} alt="block_ri_sound_clear_effects.svg" />

Повертає висоту звуку й баланс до 0.

### Музика {#robot-inventor-music}

Музичні блоки рахують час у **тактах**: за темпу 60 тактів на хвилину (типово) один такт триває одну секунду. Поки програма працює в MOCPilot, ноти звучать як сигнали хаба потрібної висоти й тривалості, а барабани — як короткі сигнали; інструмент поки не змінює звучання.

#### `грати ноту … протягом … тактів` (Просунутий) {#block_ri_sound_music_note}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_note.svg')} alt="block_ri_sound_music_note.svg" />

Відтворює ноту (типово 60) протягом заданої кількості тактів (типово 0,25) і чекає.

#### `грати на барабані … протягом … тактів` (Просунутий) {#block_ri_sound_music_drum}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_drum.svg')} alt="block_ri_sound_music_drum.svg" />

Відтворює один із 18 барабанів (малий барабан, бас-барабан, хай-хет, коров’ячий дзвіночок та інші) і чекає задану кількість тактів.

#### `пауза … тактів` (Просунутий) {#block_ri_sound_music_rest}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_rest.svg')} alt="block_ri_sound_music_rest.svg" />

Чекає задану кількість тактів, нічого не відтворюючи.

#### `встановити інструмент …` (Гуру) {#block_ri_sound_music_instrument}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_instrument.svg')} alt="block_ri_sound_music_instrument.svg" />

Вибирає один із 21 інструмента (фортепіано, орган, гітара, флейта, хор, синтезатор та інші) для наступних нот.

#### `встановити темп …` (Просунутий) {#block_ri_sound_music_set_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_set_tempo.svg')} alt="block_ri_sound_music_set_tempo.svg" />

Задає темп у тактах на хвилину, від 20 до 500 (типово 60).

#### `змінити темп на …` (Просунутий) {#block_ri_sound_music_change_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_change_tempo.svg')} alt="block_ri_sound_music_change_tempo.svg" />

Пришвидшує або сповільнює музику на задану кількість тактів на хвилину (типово 20).

#### `темп` (Просунутий) {#block_ri_sound_music_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_tempo.svg')} alt="block_ri_sound_music_tempo.svg" />

Повертає поточний темп у тактах на хвилину.
