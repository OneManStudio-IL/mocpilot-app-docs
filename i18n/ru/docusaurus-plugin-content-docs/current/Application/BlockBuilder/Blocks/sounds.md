---
id: Sounds
title: Звуки
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Звуки

Блоки звуков проигрывают звуки на телефоне, планшете или компьютере, где работает MOCPilot: сигналы, гудки, эффекты и ваши собственные записи. У хаба Robot Inventor есть и собственный динамик, см. [Динамик хаба Robot Inventor](#robot-inventor-sounds).

## Какие звуки можно проиграть

Список звуков в блоках состоит из двух частей:

- **Встроенная библиотека**: короткие бипы, писки, сигнал заднего хода, сирена, тревога, сигналы успеха и ошибки, клаксон, гудки грузовика и поезда, велозвонок, поворотник и несколько эффектов (щелчок, хлопок, лазер, монетка, включение, выключение).
- **Ваши звуки**: нажмите **Добавить звук** в начале категории и выберите аудиофайл. Приложение перекодирует его и сохранит в профиле, так что звук переедет вместе с профилем на другие устройства и в каталог. В профиле может быть до 30 звуков; слишком длинный файл обрезается до 15 секунд. Управлять ими помогают кнопки **Переименовать звук** и **Удалить звук**; блоки, которые играли удалённый звук, замолчат.

<Screenshot name="blocks-add-sound" alt="Окно «Добавить звук» в Логических блоках" width={900} />

## Блоки

### `звук … играть / играть до конца / повторять` (Новичок) {#block_sounds_play}

<img src={useBaseUrl('/img/blocks/block_sounds_play.svg')} alt="block_sounds_play.svg" />

Проигрывает выбранный звук.

- `играть` — запускает звук и сразу переходит к следующему блоку. Звуки, рассчитанные на повтор (например, сирена или сигнал заднего хода), играют по кругу.
- `играть до конца` — проигрывает звук один раз и ждёт, пока он закончится.
- `повторять` — играет звук по кругу, пока его не остановят.
- Если звук уже играет, он начинается заново.
- Вместо выбора из списка в гнездо можно вставить блок **звук** (или переменную, в которой он хранится).

### `пищать … Гц … с` (Новичок) {#block_sounds_beep}

<img src={useBaseUrl('/img/blocks/block_sounds_beep.svg')} alt="block_sounds_beep.svg" />

Проигрывает тон заданной высоты и длительности и ждёт, пока он закончится.

- Высота: от 50 до 8000 Гц (по умолчанию 440).
- Длительность: от 0,02 до 10 секунд (по умолчанию 0,2).

### `остановить звук …` (Новичок) {#block_sounds_stop}

<img src={useBaseUrl('/img/blocks/block_sounds_stop.svg')} alt="block_sounds_stop.svg" />

Останавливает выбранный звук.

### `остановить все звуки` (Новичок) {#block_sounds_stop_all}

<img src={useBaseUrl('/img/blocks/block_sounds_stop_all.svg')} alt="block_sounds_stop_all.svg" />

Останавливает все звуки, которые сейчас играют.

### `установить громкость звука на … %` (Продвинутый) {#block_sounds_set_volume}

<img src={useBaseUrl('/img/blocks/block_sounds_set_volume.svg')} alt="block_sounds_set_volume.svg" />

Задаёт громкость всех звуков программы от 0 до 100 %. Когда программа останавливается, громкость возвращается к 100 %.

### `громкость звука` (Продвинутый) {#block_sounds_volume}

<img src={useBaseUrl('/img/blocks/block_sounds_volume.svg')} alt="block_sounds_volume.svg" />

Возвращает текущую громкость звука от 0 до 100.

### `звук …` (Продвинутый) {#block_sounds_sound}

<img src={useBaseUrl('/img/blocks/block_sounds_sound.svg')} alt="block_sounds_sound.svg" />

Возвращает выбранный звук как значение.

- Для чего: сохранить звук в переменной или списке либо передать его в [собственный блок](/docs/Application/BlockBuilder/Blocks/MyBlocks), а потом проиграть блоком **звук … играть**.

## Динамик хаба Robot Inventor {#robot-inventor-sounds}

Эти блоки взяты из приложения Robot Inventor и проигрывают звуки через динамик [хаба MINDSTORMS Robot Inventor или SPIKE Prime](/docs/Application/Hubs/RobotInventorHub), а не на вашем устройстве. На них есть значок хаба. Ноты задаются номерами MIDI: 60 — это до первой октавы, каждый шаг — полутон (от 0 до 132).

### `воспроизвести сигнал … в течение … секунды` (Новичок) {#block_ri_sound_beep_for}

<img src={useBaseUrl('/img/blocks/block_ri_sound_beep_for.svg')} alt="block_ri_sound_beep_for.svg" />

Проигрывает сигнал заданной ноты (по умолчанию 60) заданное время (по умолчанию 0,2 с) и ждёт, пока он не закончится.

### `начать сигнал …` (Продвинутый) {#block_ri_sound_beep}

<img src={useBaseUrl('/img/blocks/block_ri_sound_beep.svg')} alt="block_ri_sound_beep.svg" />

Запускает сигнал заданной ноты и сразу переходит дальше. Сигнал звучит до блока **остановить все звуки** или до другого звука хаба.

### `воспроизвести звук … до конца` (Новичок) {#block_ri_sound_play_until_done}

<img src={useBaseUrl('/img/blocks/block_ri_sound_play_until_done.svg')} alt="block_ri_sound_play_until_done.svg" />

Проигрывает один из звуков робота, хранящихся в хабе (Affirmative, Laser, Hello, Tadaa и ещё 80), и ждёт, пока он не закончится. Звуки входят в программное обеспечение хаба; если хаб молчит, см. [Если хаб не запускается](/docs/Application/Hubs/RobotInventorHub#restore).

### `запустить звук …` (Новичок) {#block_ri_sound_play}

<img src={useBaseUrl('/img/blocks/block_ri_sound_play.svg')} alt="block_ri_sound_play.svg" />

Запускает звук робота на хабе и сразу переходит дальше.

### `остановить все звуки` (хаб) (Новичок) {#block_ri_sound_stop}

<img src={useBaseUrl('/img/blocks/block_ri_sound_stop.svg')} alt="block_ri_sound_stop.svg" />

Останавливает звук и сигнал на хабе. Блок с таким же названием, но без значка хаба останавливает звуки вашего устройства.

### `установить громкость хаба на … %` (Продвинутый) {#block_ri_sound_set_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_set_volume.svg')} alt="block_ri_sound_set_volume.svg" />

Задаёт громкость сигналов, звуков и нот хаба от 0 до 100 % (100 %, пока вы её не измените).

### `изменить громкость хаба на …` (Продвинутый) {#block_ri_sound_change_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_change_volume.svg')} alt="block_ri_sound_change_volume.svg" />

Делает хаб громче или тише на заданную величину (по умолчанию −10); громкость остаётся в пределах от 0 до 100 %.

### `громкость хаба` (Продвинутый) {#block_ri_sound_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_volume.svg')} alt="block_ri_sound_volume.svg" />

Возвращает громкость хаба от 0 до 100.

### `установить … эффект на …` (Продвинутый) {#block_ri_sound_set_effect}

<img src={useBaseUrl('/img/blocks/block_ri_sound_set_effect.svg')} alt="block_ri_sound_set_effect.svg" />

Задаёт звуковой эффект для звуков робота, которые запускаются после него.

- `тангаж` (здесь это высота звука): от −360 до 360; положительные значения делают звуки выше и быстрее, отрицательные — ниже и медленнее. 0 — обычное звучание.
- `баланс влево/вправо`: от −100 до 100. У хаба один динамик, поэтому вы этого не услышите; значение сохраняется для программ, созданных в приложении Robot Inventor.

### `изменить … эффект на …` (Продвинутый) {#block_ri_sound_change_effect}

<img src={useBaseUrl('/img/blocks/block_ri_sound_change_effect.svg')} alt="block_ri_sound_change_effect.svg" />

Меняет эффект высоты звука или баланса на заданную величину (по умолчанию 10) в тех же пределах.

### `убрать звуковые эффекты` (Продвинутый) {#block_ri_sound_clear_effects}

<img src={useBaseUrl('/img/blocks/block_ri_sound_clear_effects.svg')} alt="block_ri_sound_clear_effects.svg" />

Возвращает высоту звука и баланс к 0.

### Музыка {#robot-inventor-music}

Музыкальные блоки считают время в **тактах**: при темпе 60 тактов в минуту (по умолчанию) один такт длится одну секунду. Пока программа работает в MOCPilot, ноты звучат как сигналы хаба нужной высоты и длительности, а барабаны — как короткие сигналы; инструмент пока не меняет звучание.

#### `играть ноту … в течение … тактов` (Продвинутый) {#block_ri_sound_music_note}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_note.svg')} alt="block_ri_sound_music_note.svg" />

Проигрывает ноту (по умолчанию 60) заданное число тактов (по умолчанию 0,25) и ждёт.

#### `играть на барабане … в течение … тактов` (Продвинутый) {#block_ri_sound_music_drum}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_drum.svg')} alt="block_ri_sound_music_drum.svg" />

Проигрывает один из 18 барабанов (малый барабан, бас-барабан, хай-хэт, коровий колокольчик и другие) и ждёт заданное число тактов.

#### `пауза … тактов` (Продвинутый) {#block_ri_sound_music_rest}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_rest.svg')} alt="block_ri_sound_music_rest.svg" />

Ждёт заданное число тактов, ничего не проигрывая.

#### `установить инструмент …` (Гуру) {#block_ri_sound_music_instrument}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_instrument.svg')} alt="block_ri_sound_music_instrument.svg" />

Выбирает один из 21 инструмента (фортепиано, орган, гитара, флейта, хор, синтезатор и другие) для следующих нот.

#### `установить темп …` (Продвинутый) {#block_ri_sound_music_set_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_set_tempo.svg')} alt="block_ri_sound_music_set_tempo.svg" />

Задаёт темп в тактах в минуту, от 20 до 500 (по умолчанию 60).

#### `изменить темп на …` (Продвинутый) {#block_ri_sound_music_change_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_change_tempo.svg')} alt="block_ri_sound_music_change_tempo.svg" />

Ускоряет или замедляет музыку на заданное число тактов в минуту (по умолчанию 20).

#### `темп` (Продвинутый) {#block_ri_sound_music_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_tempo.svg')} alt="block_ri_sound_music_tempo.svg" />

Возвращает текущий темп в тактах в минуту.
