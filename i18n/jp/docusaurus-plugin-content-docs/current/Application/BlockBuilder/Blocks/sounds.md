---
id: Sounds
title: サウンド
---

import Screenshot from '@site/src/components/Screenshot';
import useBaseUrl from '@docusaurus/useBaseUrl';

# サウンド {#sounds}

サウンドブロックは、MOCPilot を実行しているスマートフォン、タブレット、コンピューターでサウンドを再生します。ビープ音、合図、クラクション、効果音、そして自分で録音した音を鳴らせます。Robot Inventor のハブにも専用のスピーカーがあります。[Robot Inventor のハブのスピーカー](#robot-inventor-sounds) を参照してください。

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

## Robot Inventor のハブのスピーカー {#robot-inventor-sounds}

これらのブロックは Robot Inventor アプリから来たもので、お使いのデバイスではなく [MINDSTORMS Robot Inventor または SPIKE Prime のハブ](/docs/Application/Hubs/RobotInventorHub)のスピーカーで音を鳴らします。ハブのアイコンが付いています。音符は MIDI のノート番号で指定します。60 が真ん中のド（C）で、1 つ増えるごとに半音上がります（0～132）。

### `ビープ音を鳴らす … の間 … 秒` (初心者) {#block_ri_sound_beep_for}

<img src={useBaseUrl('/img/blocks/block_ri_sound_beep_for.svg')} alt="block_ri_sound_beep_for.svg" />

指定した音符（初期値 60）のビープ音を指定した時間（初期値 0.2 秒）鳴らし、終わるまで待ちます。

### `ビープ音を開始 …` (上級者) {#block_ri_sound_beep}

<img src={useBaseUrl('/img/blocks/block_ri_sound_beep.svg')} alt="block_ri_sound_beep.svg" />

指定した音符のビープ音を鳴らし始め、すぐに次へ進みます。ビープ音は **すべての音を止める** か、ハブの別の音が鳴るまで続きます。

### `音を鳴らす … 終わるまで` (初心者) {#block_ri_sound_play_until_done}

<img src={useBaseUrl('/img/blocks/block_ri_sound_play_until_done.svg')} alt="block_ri_sound_play_until_done.svg" />

ハブに保存されているロボットサウンド（Affirmative、Laser、Hello、Tadaa ほか 80 種類）の 1 つを鳴らし、終わるまで待ちます。サウンドはハブのソフトウェアに含まれています。ハブから音が出ない場合は、[ハブが起動しない場合](/docs/Application/Hubs/RobotInventorHub#restore) を参照してください。

### `音を開始 …` (初心者) {#block_ri_sound_play}

<img src={useBaseUrl('/img/blocks/block_ri_sound_play.svg')} alt="block_ri_sound_play.svg" />

ハブのロボットサウンドを鳴らし始め、すぐに次へ進みます。

### `すべての音を止める` (ハブ) (初心者) {#block_ri_sound_stop}

<img src={useBaseUrl('/img/blocks/block_ri_sound_stop.svg')} alt="block_ri_sound_stop.svg" />

ハブのサウンドとビープ音を止めます。ハブのアイコンが付いていない同じ名前のブロックは、お使いのデバイスの音を止めます。

### `ハブの音量を設定 … %` (上級者) {#block_ri_sound_set_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_set_volume.svg')} alt="block_ri_sound_set_volume.svg" />

ハブのビープ音、サウンド、音符の音量を 0～100 % で設定します（変えるまでは 100 %）。

### `ハブの音量を変える …` (上級者) {#block_ri_sound_change_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_change_volume.svg')} alt="block_ri_sound_change_volume.svg" />

ハブの音を指定した量（初期値 −10）だけ大きく、または小さくします。音量は 0～100 % の範囲に収まります。

### `ハブの音量` (上級者) {#block_ri_sound_volume}

<img src={useBaseUrl('/img/blocks/block_ri_sound_volume.svg')} alt="block_ri_sound_volume.svg" />

ハブの音量を 0～100 で返します。

### `設定する … の効果を …` (上級者) {#block_ri_sound_set_effect}

<img src={useBaseUrl('/img/blocks/block_ri_sound_set_effect.svg')} alt="block_ri_sound_set_effect.svg" />

このあとに始まるロボットサウンドに音の効果を設定します。

- `ピッチ`：−360～360。プラスの値で音は高く速く、マイナスの値で低く遅くなります。0 が通常です。
- `左右にパン`：−100～100。ハブのスピーカーは 1 つしかないので聞き分けられません。この値は Robot Inventor アプリで作ったプログラムのために保持されています。

### `変更する … の効果を次だけ変える: …` (上級者) {#block_ri_sound_change_effect}

<img src={useBaseUrl('/img/blocks/block_ri_sound_change_effect.svg')} alt="block_ri_sound_change_effect.svg" />

ピッチまたはパンの効果を、同じ範囲内で指定した量（初期値 10）だけ変えます。

### `音の効果をなくす` (上級者) {#block_ri_sound_clear_effects}

<img src={useBaseUrl('/img/blocks/block_ri_sound_clear_effects.svg')} alt="block_ri_sound_clear_effects.svg" />

ピッチとパンを 0 に戻します。

### 音楽 {#robot-inventor-music}

音楽のブロックは時間を **拍** で数えます。テンポが 1 分あたり 60 拍（初期値）のとき、1 拍は 1 秒です。MOCPilot でプログラムを実行している間、音符は正しい高さと長さのハブのビープ音として、ドラムは短いビープ音として鳴ります。楽器による音の違いはまだありません。

#### `音符を鳴らす … の間 … 拍` (上級者) {#block_ri_sound_music_note}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_note.svg')} alt="block_ri_sound_music_note.svg" />

音符（初期値 60）を指定した拍数（初期値 0.25）だけ鳴らし、待ちます。

#### `ドラムを鳴らす … の間 … 拍` (上級者) {#block_ri_sound_music_drum}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_drum.svg')} alt="block_ri_sound_music_drum.svg" />

18 種類のドラム（スネアドラム、バスドラム、ハイハット、カウベルなど）の 1 つを鳴らし、指定した拍数だけ待ちます。

#### `休む … 拍` (上級者) {#block_ri_sound_music_rest}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_rest.svg')} alt="block_ri_sound_music_rest.svg" />

何も鳴らさずに、指定した拍数だけ待ちます。

#### `楽器を設定 …` (達人) {#block_ri_sound_music_instrument}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_instrument.svg')} alt="block_ri_sound_music_instrument.svg" />

このあとの音符に使う楽器を 21 種類（ピアノ、オルガン、ギター、フルート、合唱、シンセなど）から選びます。

#### `テンポを設定 …` (上級者) {#block_ri_sound_music_set_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_set_tempo.svg')} alt="block_ri_sound_music_set_tempo.svg" />

テンポを 1 分あたりの拍数で、20～500（初期値 60）の範囲で設定します。

#### `テンポを変える …` (上級者) {#block_ri_sound_music_change_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_change_tempo.svg')} alt="block_ri_sound_music_change_tempo.svg" />

音楽を、指定した 1 分あたりの拍数（初期値 20）だけ速く、または遅くします。

#### `テンポ` (上級者) {#block_ri_sound_music_tempo}

<img src={useBaseUrl('/img/blocks/block_ri_sound_music_tempo.svg')} alt="block_ri_sound_music_tempo.svg" />

現在のテンポを 1 分あたりの拍数で返します。
