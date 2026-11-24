---
id: RobotInventorHub
title: MINDSTORMS Robot Inventor のハブ
description: "LEGO MINDSTORMS Robot Inventor（51515）または SPIKE Prime のハブを Bluetooth か USB で接続し、そのブロックを使い、ハブが動かなくなったときに復旧させます。"
---

import Screenshot from '@site/src/components/Screenshot';

# MINDSTORMS Robot Inventor のハブ

LEGO® MINDSTORMS® Robot Inventor セット（51515）のハブは **LEGO® Technic™ Large Hub**（88016）です。A～F の 6 つのポート、5×5 のライトマトリックス、スピーカー、ジャイロ、加速度センサーを備えています。MOCPilot は Robot Inventor アプリと同じブロックでこのハブを動かし、さらにダッシュボード、ゲームパッド、プロフィール内のほかのハブといった MOCPilot ならではの機能も使えます。

**SPIKE™ Prime のハブ**（45601）は同じハードウェアで、LEGO® Education のファームウェアを搭載しています。MOCPilot は **SPIKE Legacy** ファームウェアの SPIKE Prime ハブに対応しています（ベータ版）。[ファームウェア](#firmware) を参照してください。

## できること {#features}

- **ロジックブロック**：Robot Inventor アプリのすべてのブロック。[Robot Inventor のブロック](#blocks) を参照してください。
- **クイックリンク**：モーター、センサー、[ライトマトリックス](/docs/Application/Links/Blocks/OutputBlocks#hub-matrix)、[距離センサーのライト](/docs/Application/Links/Blocks/OutputBlocks#op-sensorlights)。
- **ハブモニター**：バッテリー、向き、傾き、ポートにつないだデバイス。[ハブモニター](/docs/Application/Hubs/ConnectingHubs#hub-monitor) を参照してください。

ブロックのプログラムの動かし方は 2 通りあります。**ストリーミング** では MOCPilot がプログラムを実行してハブにコマンドを送ります（デバイスは接続したままにしておきます）。**ダウンロード** では MOCPilot がプログラムをハブのプログラムスロットの 1 つに書き込み、ハブが単独で実行します。[ハブでプログラムを実行する](#download) を参照してください。

## ハブを接続する {#connect}

いつもどおりハブを追加し（[ハブを追加して接続する](/docs/Application/Hubs/ConnectingHubs)）、**Lego® Large Hub**（または **LEGO® SPIKE™ Prime Hub**）を選びます。パソコンでは、接続ページの上部に **Bluetooth / USB** の切り替えがあります。MOCPilot はこのハブのモデルについて選択を記憶します。

### Bluetooth で接続する {#bluetooth}

このハブは Bluetooth Low Energy ではなくクラシック Bluetooth を使います。Android、Mac、Windows では使えますが、iPhone と iPad では使えません。

1. ハブの電源を入れます。
2. デバイスの Bluetooth 設定で、通常の Bluetooth デバイスとしてペアリングします（Windows では **設定 → Bluetooth とデバイス → デバイスの追加**）。見つけられるように、ハブの Bluetooth ボタンを押します。
3. MOCPilot で **スキャン** をタップします。

### USB ケーブルで接続する {#usb}

Windows と Mac では、代わりにハブの USB ケーブルで接続することもできます。LEGO のドライバーをインストールする必要はありません。

1. ハブを USB ケーブルでパソコンにつなぎ、ハブの電源を入れます。
2. **接続** をタップします。

MOCPilot に **USB にハブがありません** と表示されたら、ケーブル（充電専用のケーブルもあります）と、ハブの電源が入っているかを確認してください。

<Screenshot name="robot-inventor-connect" alt="Robot Inventor のハブの接続：Bluetooth / USB の切り替え" width={900} />

### 先に LEGO アプリを閉じる {#close-lego-app}

ハブが受け付ける接続は 1 つだけです。MINDSTORMS アプリや SPIKE アプリが開いていてハブをつかんでいると、MOCPilot に **ハブは使用中です：別のアプリ（LEGO MINDSTORMS または SPIKE）が使っています。そのアプリを閉じてからもう一度お試しください。** と表示されます。LEGO アプリを閉じて、もう一度接続してください。

## Robot Inventor のブロック {#blocks}

プロフィールに Robot Inventor または SPIKE Prime のハブがあると、ロジックブロックのパレットに Robot Inventor アプリのブロックが加わります。このハブでしか実行できないブロックには、白黒の **ハブのアイコン** が付いています。

| カテゴリー | Robot Inventor のブロック |
|---|---|
| [移動](/docs/Application/BlockBuilder/Blocks/Movement)（新しいカテゴリー） | 移動モーター、速度、1 回転あたりの距離、移動、ステアリング、タンク走行、加速、停止、「移動は中断された?」 |
| [モーター](/docs/Application/BlockBuilder/Blocks/Motors#robot-inventor-motors) | パワーを指定した起動、「モーターは中断された?」、さらにモーターのパワーとストール検出 |
| [ライト](/docs/Application/BlockBuilder/Blocks/Light#robot-inventor-light) | 数秒間の画像表示、フレームエディター付きのアニメーション、ピクセルの明るさ、さらに距離センサーのライト |
| [サウンド](/docs/Application/BlockBuilder/Blocks/Sounds#robot-inventor-sounds) | ビープ音、ハブのロボットサウンド、音量、音の効果、音楽：音符、ドラム、休符、楽器、テンポ |
| [センサー](/docs/Application/BlockBuilder/Blocks/Sensors#robot-inventor-sensors) | フォースセンサー、ジェスチャー、向き、ヨー／ピッチ／ロール、ヨーのリセット、角速度、加速度、傾き、ハブ間の無線通信 |
| [イベント](/docs/Application/BlockBuilder/Blocks/Events#robot-inventor-events) | ハブが振られた・タップされたとき、ある面が上を向いたとき、傾いたとき、フォースセンサーが押されたとき、無線信号が届いたとき |

Robot Inventor アプリのコントロール、演算子、変数、リスト、私のブロックは、MOCPilot 自身の[基本ブロック](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing)と同じです。一般的なハブのブロックですでにカバーされているもの（モーターの速度と位置、カラーセンサーと距離センサー、ライトマトリックス、ハブのボタン、タイマー）は、いつものカテゴリーにあります。

## ハブでプログラムを実行する {#download}

Robot Inventor アプリと同じように、MOCPilot はロジックブロックのプログラムをハブの 20 個のプログラムスロット（0～19）の 1 つに書き込めます。そのあとハブはアプリなしでプログラムを実行します。スマートフォンやパソコンを切断しても構いません。あとでハブ自身のボタンでプログラムをもう一度開始できます。

### スロットボタンとカード {#slot-card}

Robot Inventor または SPIKE Prime のハブがロジックブロックのプロフィールに接続されていると、エディターの右下、ズームの隣にボタンが表示されます。このボタンには、選択中のスロット番号が小さな 5×5 のマトリックスで、またはストリーミングの印が表示されます。タップするとカードが開きます。

- 選択中のスロットとハブ。**‹** と **›** でスロット 0～19 を選びます。
- **ダウンロード／ストリーミング**：このハブで **実行** がどう動くか。
- **ダウンロード** ボタン（⤓）：プログラムをスロットに書き込みますが、開始はしません。
- ステータス行：進行状況、*スロット 3：プログラムはハブにあります*、または何がうまくいかなかったか。

Robot Inventor または SPIKE Prime のハブを複数接続している場合、カードにはハブのボタンもあります。タップして、どのハブにプログラムを送るかを選びます。MOCPilot はモードとスロットをこのデバイスに記憶します。

<Screenshot name="robot-inventor-slot-card" alt="スロットカード：ハブ、スロットの矢印、「ダウンロード／ストリーミング」の切り替え、ダウンロードボタン" width={500} />

### ダウンロード {#download-mode}

**ダウンロード** モードでは、**実行** でブロックのプログラムがハブ用のプログラムに変換され、選択中のスロットに書き込まれて、ハブで開始されます。書き込みには数秒かかります。そのあとプログラムはハブ上で単独で動きます。

- あとでアプリなしでもう一度開始するには、ハブの左右のボタンでスロットを選び、中央ボタンを押します。
- ハブの **中央ボタン** でプログラムが止まります。
- MOCPilot からプログラムを実行する方法に戻すには、カードを **ストリーミング** に切り替えます。

### ハブで実行できるもの {#download-blocks}

ほとんどのブロックはハブに送れます。

- イベント：プログラムの開始、メッセージ、条件、タイマー、ハブのボタン、センサー、ジェスチャー、向き、傾き、無線信号
- コントロール、演算子、変数、リスト、私のブロック
- すべての Robot Inventor のブロックと、このハブのモーター、ライト、センサーのブロック

一部のブロックはアプリが必要で、ハブだけでは実行できません。ダッシュボードとゲームパッドのブロック、ほかのハブのブロック、**中央ボタン** のイベント（ハブではこのボタンがプログラムを止めます）、バッテリーと接続のイベント、温度、ラックのキャリブレーションです。プログラムにこれらが 1 つでもあると何も書き込まれず、カードに **これらのブロックはアプリなしではハブで動きません** と表示され、該当するブロックが一覧表示されます。それらのブロックを取り除くか、**ストリーミング** を使ってください。

書き込みに失敗すると、ステータス行に理由が表示されます。たとえば **ハブの空き容量が足りません** や **ハブが応答しませんでした** です。もう一度試し、失敗が続く場合はハブを再起動してください。

## ファームウェア {#firmware}

MOCPilot はハブ純正の LEGO ファームウェアで動作し、それを置き換えることはありません。

- **Robot Inventor のハブ**：MINDSTORMS Robot Inventor アプリのファームウェア。最新版はファームウェア 1.5.6、ハブソフトウェア 3.2.36 です。
- **SPIKE Prime のハブ**：**SPIKE Legacy** ファームウェア（SPIKE 2 アプリのもの）。新しい **SPIKE App 3** のファームウェアには対応していません。そのようなハブを見つけると MOCPilot がその旨を表示します。LEGO® Education SPIKE™ Legacy アプリで SPIKE Legacy ファームウェアをインストールしてから、もう一度接続してください。

ハブの準備ができると、ライトマトリックスにプログラムスロットの番号が表示されます。

## ハブが起動しない場合 {#restore}

ハブが起動しない、真っ暗なまま、スロット番号が表示されない、または SPIKE App 3 のファームウェアに切り替えられてしまった場合は、まず公式アプリで復旧させてください。

1. MINDSTORMS Robot Inventor アプリ（SPIKE Prime のハブなら SPIKE Legacy アプリ）を開き、USB ケーブルでハブを接続します。
2. ハブの更新（**Update hub firmware**）を開始します。ファームウェア、ハブソフトウェア、ロボットサウンドが書き直され、約 6 分かかります。実行中はハブを外さないでください。
3. LEGO アプリを閉じ、MOCPilot でハブを接続します。

### リカバリーモード（DFU） {#dfu}

公式アプリがハブをまったく認識できない場合に限り、ハブのリカバリーモード（DFU）でファームウェアを書き込めます。これは上級ユーザー向けです。

1. ハブの電源を切り、ケーブルを外します。**Bluetooth ボタン** を押したまま USB ケーブルを差し込み、ボタンのライトが赤、緑、青に点滅するまで押し続けます。これでパソコンには「LEGO Technic Large Hub in DFU Mode」として認識されます。
2. Windows では、そのデバイス用の WinUSB ドライバーを一度だけインストールします（たとえば Zadig を使います）。Mac と Linux ではドライバーは不要です。
3. Robot Inventor アプリのファームウェアイメージ（1.5.6）を `dfu-util` でアドレス `0x08008000` に書き込みます。完了するとハブは自動的に再起動します。書き込み中は外さないでください。
4. そのあと Robot Inventor アプリで **Update hub firmware** を実行し（上記参照）、ハブソフトウェアとサウンドを復元します。

DFU で書き込まれるのはファームウェアだけです。リカバリー用のブートローダー自体は上書きできないので、いつでもやり直せます。
