---
id: Sounds
title: 声音
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# 声音 {#sounds}

声音积木在运行 MOCPilot 的手机、平板电脑或电脑上播放声音：提示音、信号音、喇叭声、音效以及你自己的录音。Robot Inventor 集线器也有自己的扬声器，请参阅 [Robot Inventor 集线器扬声器](#robot-inventor-sounds)。

## 可以播放哪些声音 {#which-sounds-you-can-play}

积木中的声音列表分为两部分：

- **内置声音库**：短促的提示音、啾啾声、倒车提示音、警笛、警报、成功和错误提示音、轿车、卡车和火车的喇叭声、自行车铃、转向灯声以及一些音效（咔哒声、啵声、激光、金币、能量提升、能量下降）。
- **你自己的声音**：按类别顶部的**添加声音**，然后选择一个音频文件。应用会转换该文件并保存在配置文件中，因此它会随配置文件一起同步到你的其他设备和目录中。一个配置文件最多可以容纳 30 个声音；较长的文件会被截取为 15 秒。使用**重命名声音**和**删除声音**来管理它们；播放已删除声音的积木将不再发出声音。

<Screenshot name="blocks-add-sound" alt="逻辑积木中的“添加声音”对话框" width={900} />

## 积木 {#blocks}

### `声音 … 播放 / 播放直到结束 / 重复`（初学者） {#block_sounds_play}

<img src={useBaseUrl('/img/blocks/block_sounds_play.svg')} alt="block_sounds_play.svg" />

播放所选声音。

- `播放`：开始播放声音，并立即继续执行下一个积木。本身就是循环播放的声音（例如警笛或倒车提示音）会一直重复。
- `播放直到结束`：播放一次声音，并等待它结束。
- `重复`：循环播放声音，直到你停止它。
- 再次启动正在播放的声音会让它从头开始。
- 你可以在插槽中放入一个**声音**报告积木（或保存声音的变量），而不必从列表中选择。

### `蜂鸣 … Hz 持续 … 秒`（初学者） {#block_sounds_beep}

<img src={useBaseUrl('/img/blocks/block_sounds_beep.svg')} alt="block_sounds_beep.svg" />

播放指定音高和时长的音调，并等待它结束。

- 音高：50 到 8000 Hz（默认 440）。
- 时长：0.02 到 10 秒（默认 0.2）。

### `停止声音 …`（初学者） {#block_sounds_stop}

<img src={useBaseUrl('/img/blocks/block_sounds_stop.svg')} alt="block_sounds_stop.svg" />

停止所选声音。

### `停止所有声音`（初学者） {#block_sounds_stop_all}

<img src={useBaseUrl('/img/blocks/block_sounds_stop_all.svg')} alt="block_sounds_stop_all.svg" />

停止所有正在播放的声音。

### `将音量设为 … %`（进阶） {#block_sounds_set_volume}

<img src={useBaseUrl('/img/blocks/block_sounds_set_volume.svg')} alt="block_sounds_set_volume.svg" />

设置程序中所有声音的音量，范围 0 到 100 %。程序停止时，音量恢复为 100 %。

### `音量`（进阶） {#block_sounds_volume}

<img src={useBaseUrl('/img/blocks/block_sounds_volume.svg')} alt="block_sounds_volume.svg" />

返回当前音量，范围 0 到 100。

### `声音 …`（进阶） {#block_sounds_sound}

<img src={useBaseUrl('/img/blocks/block_sounds_sound.svg')} alt="block_sounds_sound.svg" />

以数值形式返回所选声音。

- 典型用法：把声音保存在变量或列表中，或者传给[我的模块](/docs/Application/BlockBuilder/Blocks/MyBlocks)中的某个积木，然后用**声音 … 播放**来播放它。

## Robot Inventor 集线器扬声器 {#robot-inventor-sounds}

这些积木来自 Robot Inventor 应用，在 [MINDSTORMS Robot Inventor 或 SPIKE Prime 集线器](/docs/Application/Hubs/RobotInventorHub)的扬声器上播放声音，而不是在你的设备上。它们带有集线器图标。音符使用 MIDI 音符编号：60 是中央 C，每增加 1 升高一个半音（0 到 132）。

### `播放蜂鸣 … 持续 … 秒`（初学者） {#block_ri_sound_beep_for}

<img src={useBaseUrl('/img/blocks/block_ri_sound_beep_for.svg')} alt="block_ri_sound_beep_for.svg" />

以指定的音符（默认 60）播放蜂鸣，持续指定的时间（默认 0.2 秒），并等到它结束。

### `开始播放蜂鸣 …`（进阶） {#block_ri_sound_beep}

<img src={useBaseUrl('/img/blocks/block_ri_sound_beep.svg')} alt="block_ri_sound_beep.svg" />

开始以指定的音符播放蜂鸣，并立即继续。蜂鸣会一直响，直到**停止所有声音**或另一个集线器声音。

### `播放声音 … 直到播完`（初学者） {#block_ri_sound_play_until_done}

<img src={useBaseUrl('/img/blocks/block_ri_sound_play_until_done.svg')} alt="block_ri_sound_play_until_done.svg" />

播放集线器上存储的某个机器人声音（Affirmative、Laser、Hello、Tadaa 以及另外 80 个），并等到它结束。这些声音随集线器软件一起提供；如果集线器不发声，请参阅[如果集线器无法启动](/docs/Application/Hubs/RobotInventorHub#restore)。

### `开始播放声音 …`（初学者） {#block_ri_sound_play}

<img src={useBaseUrl('/img/blocks/block_ri_sound_play.svg')} alt="block_ri_sound_play.svg" />

开始播放集线器的某个机器人声音，并立即继续。

### `停止所有声音`（集线器）（初学者） {#block_ri_sound_stop}

<img src={useBaseUrl('/img/blocks/block_ri_sound_stop.svg')} alt="block_ri_sound_stop.svg" />

停止集线器上的声音和蜂鸣。不带集线器图标的同名积木用于停止你的设备上的声音。

### `设置集线器音量为 … %`（进阶） {#block_ri_sound_set_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_set_volume.svg')} alt="block_ri_sound_set_volume.svg" />

设置集线器的蜂鸣、声音和音符的音量，范围 0 到 100 %（在你更改之前为 100 %）。

### `将集线器音量增加 …`（进阶） {#block_ri_sound_change_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_change_volume.svg')} alt="block_ri_sound_change_volume.svg" />

把集线器的音量调大或调小指定的量（默认 −10）；音量保持在 0 到 100 % 之间。

### `集线器音量`（进阶） {#block_ri_sound_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_volume.svg')} alt="block_ri_sound_volume.svg" />

返回集线器的音量，范围 0 到 100。

### `设置 … 音效设为 …`（进阶） {#block_ri_sound_set_effect}

<img src={useBaseUrl('/img/blocks/block_ri_sound_set_effect.svg')} alt="block_ri_sound_set_effect.svg" />

为之后开始播放的机器人声音设置音效。

- `音调`：−360 到 360；正值让声音更高、更快，负值让声音更低、更慢。0 为正常。
- `左右平衡`：−100 到 100。集线器只有一个扬声器，所以你听不出效果；保留这个值是为了兼容在 Robot Inventor 应用中制作的程序。

### `更改 … 音效增加 …`（进阶） {#block_ri_sound_change_effect}

<img src={useBaseUrl('/img/blocks/block_ri_sound_change_effect.svg')} alt="block_ri_sound_change_effect.svg" />

把音调或左右平衡效果改变指定的量（默认 10），范围限制相同。

### `清除音效`（进阶） {#block_ri_sound_clear_effects}

<img src={useBaseUrl('/img/blocks/block_ri_sound_clear_effects.svg')} alt="block_ri_sound_clear_effects.svg" />

把音调和左右平衡恢复为 0。

### 音乐 {#robot-inventor-music}

音乐积木以**拍**计时：在每分钟 60 拍的演奏速度（默认）下，一拍持续一秒。程序在 MOCPilot 中运行时，音符以音高和时长正确的集线器蜂鸣发声，鼓声则是短促的蜂鸣；乐器暂时还不会改变声音。

#### `演奏音符 … 持续 … 拍`（进阶） {#block_ri_sound_music_note}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_note.svg')} alt="block_ri_sound_music_note.svg" />

演奏一个音符（默认 60），持续指定的拍数（默认 0.25），并等待。

#### `击打 … 持续 … 拍`（进阶） {#block_ri_sound_music_drum}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_drum.svg')} alt="block_ri_sound_music_drum.svg" />

演奏 18 种鼓中的一种（小军鼓、低音鼓、踩镲、牛铃等），并等待指定的拍数。

#### `休止 … 拍`（进阶） {#block_ri_sound_music_rest}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_rest.svg')} alt="block_ri_sound_music_rest.svg" />

等待指定的拍数，不演奏任何声音。

#### `将乐器设为 …`（大师） {#block_ri_sound_music_instrument}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_instrument.svg')} alt="block_ri_sound_music_instrument.svg" />

为之后的音符选择 21 种乐器中的一种（钢琴、风琴、吉他、长笛、唱诗班、合成器等）。

#### `将演奏速度设为 …`（进阶） {#block_ri_sound_music_set_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_set_tempo.svg')} alt="block_ri_sound_music_set_tempo.svg" />

设置演奏速度，以每分钟拍数为单位，范围 20 到 500（默认 60）。

#### `将演奏速度增加 …`（进阶） {#block_ri_sound_music_change_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_change_tempo.svg')} alt="block_ri_sound_music_change_tempo.svg" />

把音乐加快或减慢指定的每分钟拍数（默认 20）。

#### `演奏速度`（进阶） {#block_ri_sound_music_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_tempo.svg')} alt="block_ri_sound_music_tempo.svg" />

返回当前的演奏速度，以每分钟拍数为单位。
