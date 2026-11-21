---
id: Sounds
title: サウンド
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# サウンド {#sounds}

サウンドブロックは、MOCPilot を実行しているスマートフォン、タブレット、コンピューターでサウンドを再生します。ビープ音、合図、クラクション、効果音、そして自分で録音した音を鳴らせます。

## 再生できるサウンド {#which-sounds-you-can-play}

ブロックのサウンド一覧は 2 つに分かれています。

- **内蔵ライブラリ**：短いビープ音、チャープ音、バック警告音、サイレン、アラーム、成功とエラーの合図、乗用車・トラック・列車のクラクション、自転車のベル、ウインカー音、いくつかの効果音（クリック、ポップ、レーザー、コイン、パワーアップ、パワーダウン）。
- **自分のサウンド**：カテゴリーの上部にある**サウンドを追加**を押し、音声ファイルを選びます。アプリがファイルを変換してプロフィールに保存するので、サウンドはプロフィールと一緒にほかのデバイスやカタログにも届きます。1 つのプロフィールに保存できるサウンドは 30 個までで、15 秒を超えるファイルは 15 秒にカットされます。管理には**サウンドの名前を変更**と**サウンドを削除**を使います。削除したサウンドを再生していたブロックは音が出なくなります。

<Screenshot name="blocks-add-sound" alt="ロジックブロックの「サウンドを追加」ダイアログ" width={900} />

## ブロック {#blocks}

### `サウンド … 再生 / 終わるまで再生 / 繰り返し再生` (初心者) {#block_sounds_play}

<img src={useBaseUrl('/img/blocks/block_sounds_play.svg')} alt="block_sounds_play.svg" />

選択したサウンドを再生します。

- `再生`：サウンドを開始し、すぐに次のブロックへ進みます。ループ再生用のサウンド（サイレンやバック警告音など）は繰り返し鳴り続けます。
- `終わるまで再生`：サウンドを 1 回再生し、終わるまで待ちます。
- `繰り返し再生`：停止するまでサウンドをループ再生します。
- 再生中のサウンドをもう一度開始すると、最初から再生し直します。
- 一覧から選ぶ代わりに、スロットに**サウンド**値ブロック（またはサウンドを保持する変数）を入れることもできます。

### `ビープ … Hzを … 秒` (初心者) {#block_sounds_beep}

<img src={useBaseUrl('/img/blocks/block_sounds_beep.svg')} alt="block_sounds_beep.svg" />

指定した高さと長さの音を鳴らし、終わるまで待ちます。

- 高さ：50〜8000 Hz（初期値 440）。
- 長さ：0.02〜10 秒（初期値 0.2）。

### `サウンドを停止 …` (初心者) {#block_sounds_stop}

<img src={useBaseUrl('/img/blocks/block_sounds_stop.svg')} alt="block_sounds_stop.svg" />

選択したサウンドを停止します。

### `すべてのサウンドを停止` (初心者) {#block_sounds_stop_all}

<img src={useBaseUrl('/img/blocks/block_sounds_stop_all.svg')} alt="block_sounds_stop_all.svg" />

再生中のすべてのサウンドを停止します。

### `サウンド音量を設定 … %` (上級者) {#block_sounds_set_volume}

<img src={useBaseUrl('/img/blocks/block_sounds_set_volume.svg')} alt="block_sounds_set_volume.svg" />

プログラムのすべてのサウンドの音量を 0〜100 % で設定します。プログラムが停止すると、音量は 100 % に戻ります。

### `サウンド音量` (上級者) {#block_sounds_volume}

<img src={useBaseUrl('/img/blocks/block_sounds_volume.svg')} alt="block_sounds_volume.svg" />

現在のサウンド音量（0〜100）を返します。

### `サウンド …` (上級者) {#block_sounds_sound}

<img src={useBaseUrl('/img/blocks/block_sounds_sound.svg')} alt="block_sounds_sound.svg" />

選択したサウンドを値として返します。

- 主な用途：サウンドを変数やリストに保存したり、[私のブロック](/docs/Application/BlockBuilder/Blocks/MyBlocks)に渡したりして、**サウンド … 再生**で再生します。
