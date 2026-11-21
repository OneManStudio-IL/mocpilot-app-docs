---
id: Sounds
title: 声音
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# 声音 {#sounds}

声音积木在运行 MOCPilot 的手机、平板电脑或电脑上播放声音：提示音、信号音、喇叭声、音效以及你自己的录音。

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
