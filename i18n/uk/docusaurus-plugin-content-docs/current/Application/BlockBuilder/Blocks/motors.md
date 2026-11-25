---
id: Motors
title: Мотори
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Мотори {#motors}

Блоки моторів запускають, зупиняють і повертають у потрібну позицію мотори, підключені до портів хаба, а також налаштовують їхній рух. Категорія з’являється, коли хаб профілю має порти для моторів. У кожному блоці вибираються хаб і один або кілька портів.

Деяким блокам потрібен мотор із вбудованим датчиком обертання (енкодером), наприклад кутові мотори Technic, і хаб, що вміє ним керувати. Такі блоки позначено «мотори з енкодером». Їх немає для хабів SBrick, SBrick Plus, BuWizz 2, WeDo 2.0 і Mould King. Technic Move Hub теж працює з цими блоками (його мотори — порти `A`, `B` і `C`), а також має власні блоки профілю автомобіля: див. [Technic Move Hub](#technic-move-hub) наприкінці сторінки.

## Запуск моторів {#running-motors}

### `встановити швидкість на …` (Просунутий) {#block_hubs_all_motors_port_set_motor_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_speed.svg')} alt="block_hubs_all_motors_port_set_motor_speed.svg" />
Задає швидкість (від −100 до 100 %), з якою на цих портах працюють **запустити мотор** і **запустити … протягом**. Сам блок мотор не запускає.

### `запустити мотор …` (Початківець) {#block_hubs_all_motors_port_start_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor.svg')} alt="block_hubs_all_motors_port_start_motor.svg" />
Запускає мотор у вибраному напрямку зі швидкістю, заданою блоком **встановити швидкість на**.

- Напрямок: за годинниковою стрілкою або проти

### `запустити мотор на … % швидкість` (Початківець) {#block_hubs_all_motors_port_start_motor_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_start_motor_at_speed.svg')} alt="block_hubs_all_motors_port_start_motor_at_speed.svg" />
Запускає мотор із заданою швидкістю від −100 до 100 %. Від’ємна швидкість обертає його в інший бік.

- Для чого: рух від джойстика чи повзунка — підставте значення елемента в поле швидкості.

### `зупинити мотор` (Початківець) {#block_hubs_all_motors_port_stop_motor}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_stop_motor.svg')} alt="block_hubs_all_motors_port_stop_motor.svg" />
Зупиняє мотор.

### `запустити … протягом …` (Просунутий) {#block_hubs_all_motors_port_run_for}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for.svg')} alt="block_hubs_all_motors_port_run_for.svg" />
Обертає мотор у вибраному напрямку задану кількість обертів, градусів або секунд.

- Напрямок: за годинниковою стрілкою або проти
- Одиниці: `оберти`, `градуси`, `секунди`
- Лише мотори з енкодером.

### `запустити на … на … % швидкість` (Просунутий) {#block_hubs_all_motors_port_run_for_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_run_for_at_speed.svg')} alt="block_hubs_all_motors_port_run_for_at_speed.svg" />
Обертає мотор задану кількість обертів, градусів або секунд із заданою швидкістю.

- Одиниці: `оберти`, `градуси`, `секунди`
- Лише мотори з енкодером.

## Позиція {#position}

### `йти … до позиції …` (Просунутий) {#block_hubs_all_motors_port_go_to_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_position.svg')} alt="block_hubs_all_motors_port_go_to_position.svg" />
Повертає мотор в абсолютну позицію (відносно власної нульової позначки мотора).

- Шлях: `найкоротший шлях`, `за годинниковою стрілкою`, `проти годинникової стрілки`
- Лише мотори з енкодером.

### `перейти до відносної позиції … на … % швидкість` (Початківець) {#block_hubs_all_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_go_to_relative_position.svg')} alt="block_hubs_all_motors_port_go_to_relative_position.svg" />
Повертає мотор у позицію в градусах, відраховану від точки, заданої блоком **встановити відносну позицію**.

- Для чого: кермування серво, коли значення джойстика задає кут.
- Лише мотори з енкодером; для BuWizz 3 використовуйте блок нижче.

### `перейти до відносної позиції …` (BuWizz 3) (Початківець) {#block_hubs_buwizz3_motors_port_go_to_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_buwizz3_motors_port_go_to_relative_position.svg')} alt="block_hubs_buwizz3_motors_port_go_to_relative_position.svg" />
Версія попереднього блока для BuWizz 3, без поля швидкості.

- Хаби: BuWizz 3, з моторами з енкодером.

### `встановити відносну позицію …` (Початківець) {#block_hubs_all_motors_port_set_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_relative_position.svg')} alt="block_hubs_all_motors_port_set_relative_position.svg" />
Оголошує поточну позицію мотора рівною заданому значенню. Від неї відраховуються відносні позиції.

- Лише мотори з енкодером.

### `калібрувати рейку … центр … градуси …` (Початківець) {#block_hubs_all_motors_port_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_calibrate_steering_rack.svg')} alt="block_hubs_all_motors_port_calibrate_steering_rack.svg" />
Знаходить центр і хід рульової рейки.

- Мотор доводить рейку до обох кінців, вимірює, наскільки далеко вона може зайти, і записує результат у дві змінні, які ви вставили в поля: позицію центру й діапазон у градусах (від центру до одного кінця). Рейка зупиняється посередині, і ця точка стає відносною позицією 0: кермуйте блоком **перейти до відносної позиції** `діапазон × джойстик / 100`.
- Рульовий механізм повинен мати жорсткі механічні упори з обох боків (кінець рейки або передачі).
- Лише мотори з енкодером.

## Налаштування мотора {#motor-settings}

### `встановити мотор на … при зупинці` (Гуру) {#block_hubs_all_motors_port_set_motor_to_at_stop}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motor_to_at_stop.svg')} alt="block_hubs_all_motors_port_set_motor_to_at_stop.svg" />
Визначає, що робить мотор під час зупинки.

- `гальмо`: швидко зупиняється.
- `утримати позицію`: активно утримує позицію (корисно для керма).
- `вільний рух`: вільно зупиняється за інерцією.
- Лише мотори з енкодером.

### `увімкнути виявлення блокування …` (Гуру) {#block_hubs_all_motors_port_set_motors_stall_detection}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_motors_stall_detection.svg')} alt="block_hubs_all_motors_port_set_motors_stall_detection.svg" />
Вмикає або вимикає виявлення заклинювання. Коли воно ввімкнене, заблокований мотор здається, а не тисне далі, тож блок, який чекає на мотор, може завершитися.

- Хаби: [MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (на блоці значок хаба).

### `встановити прискорення на …` (Гуру) {#block_hubs_all_motors_port_set_acceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_acceleration.svg')} alt="block_hubs_all_motors_port_set_acceleration.svg" />
Визначає, як швидко мотор розганяється.

- Варіанти: `за замовчуванням`, `швидкий`, `збалансований`, `плавний`, `повільний`, `дуже повільний`
- Лише мотори з енкодером.

### `встановити уповільнення на …` (Гуру) {#block_hubs_all_motors_port_set_deceleration}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_set_deceleration.svg')} alt="block_hubs_all_motors_port_set_deceleration.svg" />
Визначає, як швидко мотор сповільнюється.

- Варіанти: `за замовчуванням`, `швидкий`, `збалансований`, `плавний`, `повільний`, `дуже повільний`
- Лише мотори з енкодером.

## Значення мотора {#motor-values}

### `позиція` (Початківець) {#block_hubs_all_motors_port_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_position.svg')} alt="block_hubs_all_motors_port_position.svg" />
Повертає абсолютну позицію мотора.

- Лише мотори з енкодером.

### `відносна позиція` (Початківець) {#block_hubs_all_motors_port_relative_position}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_relative_position.svg')} alt="block_hubs_all_motors_port_relative_position.svg" />
Повертає відносну позицію мотора в градусах.

- Лише мотори з енкодером.

### `швидкість` (Початківець) {#block_hubs_all_motors_port_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_speed.svg')} alt="block_hubs_all_motors_port_speed.svg" />
Повертає поточну швидкість мотора.

### `потужність` (Просунутий) {#block_hubs_all_motors_port_power}
<img src={useBaseUrl('/img/blocks/block_hubs_all_motors_port_power.svg')} alt="block_hubs_all_motors_port_power.svg" />
Повертає поточну потужність мотора.

- Хаби: [MINDSTORMS Robot Inventor](/docs/Application/Hubs/RobotInventorHub) (на блоці значок хаба).

## Robot Inventor {#robot-inventor-motors}

Ці блоки взято із застосунку Robot Inventor, і вони працюють лише з [хабами MINDSTORMS Robot Inventor і SPIKE Prime](/docs/Application/Hubs/RobotInventorHub). На них є значок хаба. Щоб керувати двоколісним роботом, використовуйте блоки категорії [Рух](/docs/Application/BlockBuilder/Blocks/Movement).

### `запустити мотор на … % потужність` (Просунутий) {#block_ri_motor_start_power}
<img src={useBaseUrl('/img/blocks/block_ri_motor_start_power.svg')} alt="block_ri_motor_start_power.svg" />
Запускає мотори на вибраних портах із заданою потужністю, від −100 до 100 % (типово 75 %). На відміну від **запустити мотор на … % швидкість**, мотор не підтримує регульовану швидкість: під навантаженням він сповільнюється, як мотор без енкодера.

### `мотор був перерваний?` (Гуру) {#block_ri_motor_was_interrupted}
<img src={useBaseUrl('/img/blocks/block_ri_motor_was_interrupted.svg')} alt="block_ri_motor_was_interrupted.svg" />
`true`, якщо остання команда мотора на цьому порту не завершилася, бо її перервав інший блок мотора на тому самому порту.

## Technic Move Hub {#technic-move-hub}

Technic Move Hub (у радіокерованих автомобілях LEGO® Technic) можна програмувати двома способами:

- **Блоки портів** (блоки моторів вище). Три вбудовані мотори хаба — це порти: `A` і `B` — ходові мотори, `C` — мотор керма. Це мотори з енкодером, тож на них працюють усі блоки моторів вище, крім **увімкнути виявлення блокування** і **потужність**. У моделях автомобілів LEGO `A` для руху вперед обертається в інший бік, ніж `B`, а кермо на `C` має упори: один раз виконайте **калібрувати рейку** на `C`, потім кермуйте блоком **перейти до відносної позиції** на `C` (0 — центр). Шість лампочок хаба — це порти `1`–`6` [блоків світла](/docs/Application/BlockBuilder/Blocks/Light), а блоки [нахилу, прискорення й орієнтації](/docs/Application/BlockBuilder/Blocks/Sensors#hub-tilt-and-orientation) працюють так само, як на Technic Hub.
- **Блоки профілю автомобіля** (нижче): хід, кермо, гальмо, силовий імпульс, світло й режим живлення — через конфігурацію автомобіля, завантажену в хаб. Див. [Конфігурації Technic Move Hub](/docs/Application/Hubs/TechnicMoveHubConfigurations).

:::caution Один спосіб на хаб
Блоки профілю й блоки портів керують тими самими моторами та лампочками: діє остання команда, а блок профілю забирає мотори й лампочки назад. Перевірка програми в редакторі блоків попереджає про це на кожному блоці порту цього хаба: «… керується і блоками профілю машини, і блоками портів».
:::

### `запустити мотори при … % швидкість` (Початківець) {#block_hubs_technicmove_motors_start_motors_at_speed}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_start_motors_at_speed.svg')} alt="block_hubs_technicmove_motors_start_motors_at_speed.svg" />
Запускає ходові мотори із заданою швидкістю.

### `силовий імпульс` (Початківець) {#block_hubs_technicmove_motors_power_pulse}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_power_pulse.svg')} alt="block_hubs_technicmove_motors_power_pulse.svg" />
Надсилає силовий імпульс ходовим моторам.

- Для чого: короткий ривок перед наступними блоками.

### `зупинити мотори` (Початківець) {#block_hubs_technicmove_motors_stop_motors}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_stop_motors.svg')} alt="block_hubs_technicmove_motors_stop_motors.svg" />
Зупиняє ходові мотори.

### `встановити гальмо моторів …` (Початківець) {#block_hubs_technicmove_motors_brake}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_brake.svg')} alt="block_hubs_technicmove_motors_brake.svg" />
Вмикає або вимикає гальмо ходових моторів.

- Варіанти: `вимкнено`, `увімкнено`

### `встановити рульову рейку на …` (Початківець) {#block_hubs_technicmove_motors_set_steering_rack_to}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_set_steering_rack_to.svg')} alt="block_hubs_technicmove_motors_set_steering_rack_to.svg" />
Повертає кермо в задану позицію.

### `калібрувати рульову рейку` (Початківець) {#block_hubs_technicmove_motors_calibrate_steering_rack}
<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_calibrate_steering_rack.svg')} alt="block_hubs_technicmove_motors_calibrate_steering_rack.svg" />
Калібрує кермо власним алгоритмом хаба, який автоматично знаходить діапазон керма.

- Рульовий механізм повинен мати жорсткі механічні упори (наприклад, кінці рульової рейки).
