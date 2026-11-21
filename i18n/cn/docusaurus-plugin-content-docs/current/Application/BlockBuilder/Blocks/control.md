---
id: Control
title: 控制
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 控制 {#control}

控制积木决定脚本如何运行：等待、循环、分支和停止。当配置文件中有集线器时，这个类别还包含用于连接集线器和更改其设置的积木。

## 等待积木 {#wait-blocks}

### `等待 … 秒`（初学者） {#block_control_wait_for}

<img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />

让脚本暂停指定的秒数。

### `等待直到 …`（进阶） {#block_control_wait_until}

<img src={useBaseUrl('/img/blocks/block_control_wait_until.svg')} alt="block_control_wait_until.svg" />

让脚本暂停，直到条件变为真。

## 循环 {#loops}

### `重复 …`（进阶） {#block_control_repeat_for}

<img src={useBaseUrl('/img/blocks/block_control_repeat_for.svg')} alt="block_control_repeat_for.svg" />

把其中的积木运行指定的次数（默认 10 次）。

### `重复直到 …`（进阶） {#block_control_repeat_until}

<img src={useBaseUrl('/img/blocks/block_control_repeat_until.svg')} alt="block_control_repeat_until.svg" />

反复运行其中的积木，直到条件变为真。

### `永远重复`（进阶） {#block_control_repeat_forever}

<img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />

不断地运行其中的积木，直到脚本或程序停止。下面不能再连接任何积木。

## 分支 {#branches}

### `如果 … 然后`（初学者） {#block_control_if}

<img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />

只有条件为真时，才运行其中的积木。

### `如果 … 然后 … 其他`（进阶） {#block_control_if_else}

<img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />

条件为真时运行第一个分支，否则运行第二个分支。

### `做这个 … 和这个`（大师） {#block_control_do_this_and_this}

<img src={useBaseUrl('/img/blocks/block_control_do_this_and_this.svg')} alt="block_control_do_this_and_this.svg" />

先运行第一组积木，再运行第二组，然后才继续运行它下面的积木。

## 停止 {#stopping}

### `停止 …`（初学者） {#block_control_stop}

<img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />

停止脚本；具体停止什么取决于所选选项。

- `全部`：停止所有脚本。
- `这个堆栈`：只停止当前脚本。
- `并退出程序`：停止程序。

### `停止其他堆栈`（大师） {#block_control_stop_other_stacks}

<img src={useBaseUrl('/img/blocks/block_control_stop_other_stacks.svg')} alt="block_control_stop_other_stacks.svg" />

停止其他所有正在运行的脚本；当前脚本继续运行。

## 集线器积木 {#hub-blocks}

### `连接 / 断开连接 …`（初学者） {#block_hubs_control_set_connect}

<img src={useBaseUrl('/img/blocks/block_hubs_control_set_connect.svg')} alt="block_hubs_control_set_connect.svg" />

让程序连接或断开所选集线器。

- 选项：`连接`、`断开连接`
- 集线器：全部。

### `… 已连接`（初学者） {#block_hubs_all_sensors_is_connected}

<img src={useBaseUrl('/img/blocks/block_hubs_all_sensors_is_connected.svg')} alt="block_hubs_all_sensors_is_connected.svg" />

所选集线器已连接时返回 `true`。

- 类型：布尔积木
- 集线器：全部。

### `设置 … 配置为 …`（进阶） {#block_hubs_set_hub_config}

<img src={useBaseUrl('/img/blocks/block_hubs_set_hub_config.svg')} alt="block_hubs_set_hub_config.svg" />

把集线器切换到它的某个配置。

- 集线器：Technic Move Hub（目前唯一支持配置的集线器）。
- 典型用法：在后续积木运行之前，把集线器切换到另一个配置。

### `获取 … 配置为 …`（进阶） {#block_hubs_all_control_hub_config}

<img src={useBaseUrl('/img/blocks/block_hubs_all_control_hub_config.svg')} alt="block_hubs_all_control_hub_config.svg" />

返回集线器的当前配置。

- 类型：报告积木
- 输出：`文本` 或 `索引`
- 集线器：Technic Move Hub。
- 集线器未连接或没有配置时返回 `NaN`。

### `设置 … 电源模式为 …`（初学者） {#block_hubs_buwizz_sensors_set_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_set_power_mode.svg')} alt="block_hubs_buwizz_sensors_set_power_mode.svg" />

设置 BuWizz 2 的功率模式。

- 模式：`慢`、`正常`、`快`、`Ludicrous`
- 集线器：BuWizz 2。

### `获取 … 功率模式为 …`（大师） {#block_hubs_buwizz_sensors_get_power_mode}

<img src={useBaseUrl('/img/blocks/block_hubs_buwizz_sensors_get_power_mode.svg')} alt="block_hubs_buwizz_sensors_get_power_mode.svg" />

返回 BuWizz 2 的当前功率模式。

- 输出：`文本` 或 `索引`
- 集线器：BuWizz 2。

### `设置 … 控制通道到 …`（进阶） {#block_hubs_mouldking_control_set_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_set_control_channel.svg')} alt="block_hubs_mouldking_control_set_control_channel.svg" />

设置 Mould King 集线器的控制通道。

- 通道：`A`、`B`、`C`
- 集线器：Mould King 4.0 和 6.0。

### `获取 … 作为控制通道 …`（进阶） {#block_hubs_mouldking_control_get_control_channel}

<img src={useBaseUrl('/img/blocks/block_hubs_mouldking_control_get_control_channel.svg')} alt="block_hubs_mouldking_control_get_control_channel.svg" />

返回 Mould King 集线器的当前控制通道。

- 输出：`文本` 或 `索引`
- 集线器：Mould King 4.0 和 6.0。
