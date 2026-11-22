---
id: BlocksIntroducing
title: ロジックブロックの紹介
description: "ロジックブロックは MOCPilot のビジュアルなブロックプログラミングエディターです。イベント、繰り返し、条件、変数、センサー、サウンドを使えます。"
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# ロジックブロック {#logic-blocks}

**ロジックブロック** は、MOCPilot のブロックプログラミングエディターです。Scratch と同じように、ブロックを組み合わせてプログラムを作ります。イベント、繰り返し、条件、変数、リスト、自分で作るブロック、サウンドのほか、モーター、ライト、センサー、ダッシュボードのコントロール、ゲームパッド用のブロックがあります。

ロボット、自動で進む動作、センサーへの反応、起動時のチェック、ゲームなど、モデルにロジックが必要なときはロジックブロックを選びましょう。コントロールをモーターにつなぐだけなら、[クイックリンク](/docs/Application/Links/LinksIntroducing) のほうが手早く作れます。

<img src={useBaseUrl('/img/illustrations/editor_blocks.svg')} alt="ロジックブロックのプログラム" style={{width: '100%', maxWidth: 720}} />

:::warning Scratch ではありません
ロジックブロックには独自のブロックと独自の動作があります。MOCPilot のプログラムを Scratch に読み込んだり、Scratch のプロジェクトを MOCPilot に読み込んだりすることはできません。
:::

## エディターの概要 {#the-editor-at-a-glance}

<Screenshot name="blocks-editor" alt="パレットとプログラムが表示されたロジックブロックのエディター" width={900} />

- **パレット** には、ブロックのカテゴリーが並んでいます。**イベント**、**コントロール**、**センサー**、**サウンド**、**演算子**、**変数**、**リスト**、**私のブロック** です。プロフィールで必要になると、ほかのカテゴリーも表示されます。**モーター** と **ライト**（ハブが対応している場合）、**シミュレーター**（ダッシュボードにペダル、ギアボックス、ハンドブレーキがある場合）、**オンスクリーンコントローラー**、**ゲームパッド** です。
- **プログラムエリア** は、ブロックをドラッグしてスクリプトを組み立てる場所です。
- 上部バーには、**元に戻す** と **やり直す**、**ダッシュボード**、**マイハブ**、**ゲームパッド**、サイドパネルの **AI ビルダー**、[**バックパック**](/docs/Application/BlockBuilder/Backpack)、**モニター**、**その他**（**エディター設定** はここにあります）、**実行**／**停止** があります。スマートフォンやタブレットでは、サイドパネルとゲームパッドは **その他** にあります。

詳しくは [エディターでの作業](/docs/Application/BlockBuilder/Editor) をご覧ください。

## プログラムの動き方 {#how-a-program-runs}

- スクリプトは **イベント** ブロック（ハットブロック）から始まります。*プログラムが開始されたとき*、*ボタンを押したとき … 押された*、*受信したとき …* などです。
- その下につないだブロックが、上から順に実行されます。
- 複数のスクリプトは **同時に** 動きます。スクリプトどうしの連携にはメッセージ（*伝える*）を使います。
- **繰り返し**（*いつも繰り返す*、*繰り返す*、*～まで繰り返す*）でスクリプトを続けて動かし、**条件**（*もし*、*もし … 他の*、*まで待つ*）で判断を行います。
- **値** ブロック（角が丸い形）は値を返し、ほかのブロックの入力欄にはめ込めます。**真偽値** ブロック（両端がとがった形）は、条件に使う真（true）または偽（false）を返します。
- **変数** と **リスト** は、ブロックやスクリプトのあいだで値を保持します。

## ブロックの形 {#block-shapes}

### ハットブロック {#hat-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_event_when_program_started.svg')} alt="block_event_when_program_started.svg" />
  <img src={useBaseUrl('/img/blocks/block_event_when.svg')} alt="block_event_when.svg" />
</div>

何かが起きたときにスクリプトを開始します。ブロックは下側にしかつなげられません。

---

### スタックブロック {#stack-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_wait_for.svg')} alt="block_control_wait_for.svg" />
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_reset.svg')} alt="block_sensors_timer_reset.svg" />
</div>

基本となる命令ブロックです。それぞれが 1 つの動作を行います。

---

### C 型ブロック {#c-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_if.svg')} alt="block_control_if.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_if_else.svg')} alt="block_control_if_else.svg" />
</div>

中にほかのブロックを入れられる C の形をしたブロックです。繰り返しや条件に使います。

---

### 値ブロック {#reporter-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_sensors_timer_value_float.svg')} alt="block_sensors_timer_value_float.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />
</div>

数値やテキストなどの値を返します。

---

### 真偽値ブロック {#boolean-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />
  <img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />
</div>

`true` か `false` だけを返します。主に条件の中で使います。

---

### キャップブロック {#cap-blocks}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_control_stop.svg')} alt="block_control_stop.svg" />
  <img src={useBaseUrl('/img/blocks/block_control_repeat_forever.svg')} alt="block_control_repeat_forever.svg" />
</div>

スクリプトを終わらせるブロックです。下には何もつなげられません。

---

### ブロックのスタック {#block-stack}

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks_stack.svg')} alt="blocks_stack.svg" />
</div>

スタックとは、つながったブロックのまとまりで、1 つのスクリプトとして上から順に実行されます。
スタックはふつうイベントブロックで始まり、そのあとに順番に実行されるブロックが続きます。

---


## ハブ、ポート、コントロール {#hubs-ports-and-controls}

- モーターブロックとライトブロックでは、**ハブ** と **ポート** を指定します。「モーター」と「ライト」のカテゴリーは、プロフィール内のハブが対応している場合にだけ表示されます。また、特定のハブ専用のブロックもあります（BuWizz のパワーモードや Technic Move Hub の機能など）。各ブロックの説明に、対応するハブを記載しています。
- ダッシュボードのブロックは、コントロールを名前（**JOY1**、**BTN2**）で参照します。ブロックで使われているコントロールは、ダッシュボードから削除できません。先にそのブロックを取り除いてください。
- ゲームパッドのブロックは、[ゲームパッドページ](/docs/Application/Dashboard/Gamepad) で **ゲームパッドブロックを有効にする** をオンにすると表示されます。

## ブロックレベル {#block-levels}

プロフィールごとに **ブロックレベル** があります。**初心者** ではいちばんシンプルなブロックだけを表示し、**上級者** ではよく使うロジックやデバイスのブロックが加わり、**達人** ではすべてのブロックを表示します。レベルはプロフィールの作成時に選ぶか、あとからエディター設定で変更できます。このリファレンスでは、各ブロック名の横にレベルを記載しています。

## おすすめの進め方 {#recommended-workflow}

1. まずイベントブロック 1 つと短いスクリプトから始め、**実行** を押して動作を確認します。
2. モーターの回転方向と値の範囲は早めに確認しましょう（モニターが便利です）。
3. プログラムを、メッセージでやり取りする小さなスクリプトに分けます。何度も使う処理は [私のブロック](/docs/Application/BlockBuilder/Blocks/MyBlocks) にまとめます。
4. 安全対策を入れます。制限値、停止、起動時のチェック、ハブの接続が切れたときの対処などです。

## よくある失敗 {#common-pitfalls}

- イベントブロックのないスクリプトは、いつまでも始まりません。
- 選んだハブやポートが間違っていると、目に見える変化は何も起きません。
- テキスト、数値、真偽値を混ぜて使うと、予想外の結果になります。
- 絞り込みをせずに頻繁すぎるイベントを使うと（たとえば、わずかな変化のたびに起きるセンサーイベントなど）、プログラムに負荷がかかりすぎることがあります。しきい値や短い待ち時間を使いましょう。

## ブロックリファレンス {#block-reference}

- [イベント](/docs/Application/BlockBuilder/Blocks/Events) · [コントロール](/docs/Application/BlockBuilder/Blocks/Control) · [演算子](/docs/Application/BlockBuilder/Blocks/Operators)
- [変数](/docs/Application/BlockBuilder/Blocks/Variables) · [リスト](/docs/Application/BlockBuilder/Blocks/Lists) · [私のブロック](/docs/Application/BlockBuilder/Blocks/MyBlocks)
- [モーター](/docs/Application/BlockBuilder/Blocks/Motors) · [ライト](/docs/Application/BlockBuilder/Blocks/Light) · [センサー](/docs/Application/BlockBuilder/Blocks/Sensors) · [サウンド](/docs/Application/BlockBuilder/Blocks/Sounds)
- [シミュレーター](/docs/Application/BlockBuilder/Blocks/Simulator) · [オンスクリーンコントローラー](/docs/Application/BlockBuilder/Blocks/DashboardControllers) · [ゲームパッド](/docs/Application/BlockBuilder/Blocks/Gamepad)

アプリでブロックを長押し（または右クリック）して **ブロックについて** を選ぶと、ここにあるそのブロックの説明が開きます。

すぐに使えるプログラム：[サンプル](/docs/Application/BlockBuilder/Examples)
