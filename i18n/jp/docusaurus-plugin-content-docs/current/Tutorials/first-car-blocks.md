---
id: FirstCarBlocks
title: ロジックブロックで作る同じ車
description: "ステップごとに解説：ロジックブロックで、走行、サーボステアリング、ライト、ウインカーを備えたリモコン操作の LEGO カーをプログラムします。"
---

import Screenshot from '@site/src/components/Screenshot';

# ロジックブロックで作る同じ車 {#the-same-car-in-logic-blocks}

このチュートリアルでは、[クイックリンクで作る初めての RC カー](/docs/Tutorials/FirstCarLinks)の車を、今度は[ロジックブロック](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing)でもう一度作ります。ジョイスティックで走行とステアリング、ボタンでライトという同じ結果になり、その過程でブロックプログラミングの基本であるイベント、ループ、変数、モニターを学べます。最後に、カチカチ音の鳴るウインカーを追加することもできます。

**必要なもの**：クイックリンクのチュートリアルと同じモデル

- LEGO® Technic™ Hub（88012）
- **ポート A** に走行用モーター
- **ポート B** にエンコーダー付きのステアリング用モーター（Technic L または XL モーター、あるいは任意の Technic アンギュラーモーター）
- **ポート C** に LEGO® ライト（任意）

City Hub の場合は、ポート **A** と **B** を使い、ライトは省略します。

**完成形**：

```text
プログラムが開始されたとき
設定する (ライト) へ 0
相対位置を設定 0  (ハブ 1、ポート B)
いつも繰り返す
    設定する (スロットル) へ (ジョイスティック JOY1 Y軸)
    モーターを起動（設定値） (スロットル) 速度 %  (ハブ 1、ポート A)
    相対位置へ移動 (ジョイスティック JOY1 X軸 × 0.9) で 100 速度 %  (ハブ 1、ポート B)

ボタンを押したとき BTN1 押された
    もし (ライト) = 0 その後
        でオンにする 100 明るさ %  (ハブ 1、ポート C)
        設定する (ライト) へ 1
    他の
        オフにする  (ハブ 1、ポート C)
        設定する (ライト) へ 0
```

リストの読み方：1 行が 1 つのブロックで、アプリでの表示どおりに書いています。かっこ内の値は、ブロックで選ぶハブとポート、またはスロットに入れるブロックや変数です。字下げされた行は、その上にある C 型ブロックの中に入ります。

## 1. プロフィールを作成する {#create-the-profile}

1. **私のプロフィール** で新しいプロフィールを作成します（スマートフォンでは **+** → **新しいプロフィール**、タブレットでは **新しいプロフィール**、パソコンでは **ファイル → 新しいプロフィール**）。
2. **ロジックブロック** のタイルを選びます。
3. **名前** を入力し、**ブロックレベル** を **上級者** に設定します。ここで使う **いつも繰り返す** ループと **もし … その後 … 他の** は上級者向けのブロックで、**初心者** のパレットには表示されません。
4. **作成** をタップします。

レベルは後から **エディター設定** → **ブロックレベルを選択** で変更できます。[プロフィールの作成](/docs/Application/Profiles/CreateProfile)と[ブロックレベル](/docs/Application/BlockBuilder/Editor#block-levels)を参照してください。

## 2. ハブとコントロールを追加する {#hub-and-dashboard}

クイックリンクのチュートリアルとまったく同じ手順です。

1. **マイハブ** で[ハブを追加して接続](/docs/Tutorials/FirstCarLinks#add-the-hub)します。
2. [ダッシュボードにコントロールを配置](/docs/Tutorials/FirstCarLinks#dashboard)します：左に **ジョイスティック**（**JOY1**）、右に **ボタン**（**BTN1**）。

<Screenshot name="tutorial-car-dashboard" alt="左に JOY1 ジョイスティック、右に BTN1 ボタンを配置したダッシュボード" width={900} />

ハブをプロフィールに追加すると、パレットに **モーター** と **ライト** のカテゴリが表示されます。コントロールは **オンスクリーンコントローラー** に表示されます。

## 3. イベントか、ループか {#events-or-loop}

スクリプトは**イベント**ブロックで始まり、その下のブロックを上から順に実行します。複数のスクリプトは同時に動きます。

- [ボタンを押したとき … 押された](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_button_event) のようなイベントブロックは、そのイベントが起きるたびにスクリプトを 1 回実行します。イベントは、ボタンを押す、スイッチを切り替える、ウインカーを出すといった、ある瞬間に起きることに向いています。
- ジョイスティックの値は絶えず変わります。いちばん簡単な追い方は、[プログラムが開始されたとき](/docs/Application/BlockBuilder/Blocks/Events#block_event_when_program_started) で始まるスクリプトの中で、[いつも繰り返す](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_forever) ループでスティックを読み続けることです。

この車では両方を使います。走行とステアリングにはループ、ライトにはイベントです。

## 4. 走行 {#drive}

1. **イベント** から [プログラムが開始されたとき](/docs/Application/BlockBuilder/Blocks/Events#block_event_when_program_started) をプログラムエリアにドラッグします。
2. **コントロール** から [いつも繰り返す](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_forever) をその下につなげます。
3. **モーター** から [モーターを起動（設定値） … 速度 %](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_start_motor_at_speed) を **いつも繰り返す** の中に入れます。ハブとポート **A** を選びます。
4. **オンスクリーンコントローラー** から [ジョイスティック](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_joystick_value_float) の値ブロックを速度のスロットにドラッグします。**JOY1** と **Y軸** を選びます。

```text
プログラムが開始されたとき
いつも繰り返す
    モーターを起動（設定値） (ジョイスティック JOY1 Y軸) 速度 %  (ハブ 1、ポート A)
```

車を台に載せて **実行** を押し、ジョイスティックを倒してみましょう。ジョイスティックの値は −100 ～ 100 で、これがそのままモーターの速度（%）になります。終わったら **停止** を押します。

**上に倒すと後ろに走る場合**：**演算子** の [… × …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_multiply) を使います：`(ジョイスティック JOY1 Y軸 × -1)`。**速すぎる場合**は、代わりに 0.5 を掛けます。

## 5. ステアリング {#steer}

ステアリング用モーターは、[相対位置へ移動 … で … 速度 %](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_go_to_relative_position) でジョイスティックの X 軸に追従します。相対位置は、[相対位置を設定 …](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_set_relative_position) で設定した点を基準に数えます。

1. **相対位置を設定** を **プログラムが開始されたとき** のすぐ下、**いつも繰り返す** の上につなげます。値は 0 のままにして、ポート **B** を選びます。
2. **いつも繰り返す** の中、モーターのブロックの下に、ポート **B** の **相対位置へ移動 … で … 速度 %** を追加します。
3. その位置のスロットに **… × …** を入れ、左にジョイスティックの **X軸**、右に `0.9` を入れます。これで −100…100 が −90…90 度に変換されます。
4. 速度を 100 に設定します。

```text
プログラムが開始されたとき
相対位置を設定 0  (ハブ 1、ポート B)
いつも繰り返す
    モーターを起動（設定値） (ジョイスティック JOY1 Y軸) 速度 %  (ハブ 1、ポート A)
    相対位置へ移動 (ジョイスティック JOY1 X軸 × 0.9) で 100 速度 %  (ハブ 1、ポート B)
```

**実行** の前に毎回、手でタイヤをまっすぐにしてください。その位置が中心になります。タイヤが曲がりすぎる場合は 0.9 より小さい数を、逆に曲がる場合は −0.9 を使います。

### オプション：ステアリングを自動でキャリブレーションする {#calibrate-rack}

ステアリングにエンドストップがあれば、[ラックをキャリブレーション … 中心 … 度 …](/docs/Application/BlockBuilder/Blocks/Motors#block_hubs_all_motors_port_calibrate_steering_rack) が中心と可動範囲を見つけてくれます。先に変数を 2 つ作り（**変数** → **変数を作成**）、たとえば `中心` と `範囲` という名前にして、ブロックのスロットに入れます。ブロックはラックを両端まで動かして中央で止め、結果を変数に書き込みます。キャリブレーションが終わるとスクリプトが続行します。

```text
プログラムが開始されたとき
ラックをキャリブレーション (中心) 中心 (範囲) 度  (ハブ 1、ポート B)
相対位置を設定 0  (ハブ 1、ポート B)
いつも繰り返す
    モーターを起動（設定値） (ジョイスティック JOY1 Y軸) 速度 %  (ハブ 1、ポート A)
    相対位置へ移動 ((範囲 × ジョイスティック JOY1 X軸) ÷ 100) で 100 速度 %  (ハブ 1、ポート B)
```

キャリブレーションの直後に **相対位置を設定 0** を置くと中央がゼロになり、スティックをいっぱいに倒すと測定した可動範囲までタイヤが曲がります。

## 6. ボタンでライト {#lights}

クイックリンクには既製のトグルブロックがあります。ロジックブロックでは、ライトがついているかどうかを[変数](/docs/Application/BlockBuilder/Blocks/Variables)で覚えておきます。

1. **変数** で **変数を作成** をタップし、`ライト` という名前を付けます。
2. メインスクリプトの先頭に [設定する … へ …](/docs/Application/BlockBuilder/Blocks/Variables#block_variables_set_to) を追加します：`設定する (ライト) へ 0`。
3. **オンスクリーンコントローラー** から [ボタンを押したとき … 押された](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_button_event) を空いている場所にドラッグし、**BTN1** を選びます。
4. その下に [もし … その後 … 他の](/docs/Application/BlockBuilder/Blocks/Control#block_control_if_else) を追加し、条件に [… = …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_equal) を入れます：`(ライト) = 0`。
5. 1 つ目の分岐に [でオンにする … 明るさ %](/docs/Application/BlockBuilder/Blocks/Light#block_hubs_all_light_light_turn_to)（ポート **C**）と `設定する (ライト) へ 1` を追加します。2 つ目の分岐に [オフにする](/docs/Application/BlockBuilder/Blocks/Light#block_hubs_all_light_light_turn_off)（ポート **C**）と `設定する (ライト) へ 0` を追加します。

```text
ボタンを押したとき BTN1 押された
    もし (ライト) = 0 その後
        でオンにする 100 明るさ %  (ハブ 1、ポート C)
        設定する (ライト) へ 1
    他の
        オフにする  (ハブ 1、ポート C)
        設定する (ライト) へ 0
```

ボタンの代わりに **スイッチ** を使うと、さらに簡単です：*スイッチの場合 … 切り替えられた オン / オフ*。[作例](/docs/Application/BlockBuilder/Examples)を参照してください。

## 7. 実行してモニターを確認する {#monitor}

思いどおりに動かないときは、値を確認しましょう。上部バーの[モニター](/docs/Application/BlockBuilder/Editor#monitor)には、プログラムの実行中にすべての変数が表示されます。

1. 変数 `スロットル` を作ります。
2. ループの中でジョイスティックの値をこの変数に保存し、モーターの速度にはこの変数を使います。

```text
いつも繰り返す
    設定する (スロットル) へ (ジョイスティック JOY1 Y軸)
    モーターを起動（設定値） (スロットル) 速度 %  (ハブ 1、ポート A)
    相対位置へ移動 (ジョイスティック JOY1 X軸 × 0.9) で 100 速度 %  (ハブ 1、ポート B)
```

3. **実行** を押して **モニター** を開きます。ジョイスティックを動かして BTN1 を押すと、`スロットル` がスティックに追従し、`ライト` が 0 と 1 で切り替わります。

<Screenshot name="blocks-monitor" alt="プログラムの実行中に変数とリストを表示するモニター" width={900} />

- `スロットル` は変わるのにモーターが回らない場合：**マイハブ** でハブの接続を、ブロックでポートを確認してください。
- `スロットル` が 0 のままの場合：ブロックが **JOY1** と正しい軸を読んでいるか確認してください。

ロジックブロックでは、プログラムの実行中も編集できるので、数値を変えてすぐに効果を確かめられます。プログラム全体は次のとおりです。

<Screenshot name="tutorial-car-blocks-program" alt="完成した車のプログラム：いつも繰り返すループのあるメインスクリプトと、BTN1 のライト用スクリプト" width={900} />

そのほかのヘルプ：[トラブルシューティング](/docs/Help/Troubleshooting)。

## 8. オプション：音の出るウインカー {#turn-signals}

**ウインカー** の[特殊コントロール](/docs/Application/Dashboard/SpecialControls#turn-signals)（**STALK1**）をダッシュボードに追加し、**ポート D** にライトをつなぎます。レバーを上に動かすと左ウインカー、下に動かすと右ウインカーです。

```text
ウインカーの STALK1 左ウインカー 点灯した
    サウンド ウインカー 再生
    ～まで繰り返す ではない (ウインカー STALK1 左ウインカー 点灯中 ?)
        でオンにする 100 明るさ %  (ハブ 1、ポート D)
        待つ 0.5 秒
        オフにする  (ハブ 1、ポート D)
        待つ 0.5 秒
    サウンドを停止 ウインカー
```

使うブロック：**オンスクリーンコントローラー** の [ウインカーの …](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_turnsignals_event) と [ウインカー … 点灯中 ?](/docs/Application/BlockBuilder/Blocks/DashboardControllers#block_dashboard_controller_turnsignals_value_boolean)、**サウンド** の [サウンド … 再生](/docs/Application/BlockBuilder/Blocks/Sounds#block_sounds_play) と [サウンドを停止 …](/docs/Application/BlockBuilder/Blocks/Sounds#block_sounds_stop)、**コントロール** の [～まで繰り返す …](/docs/Application/BlockBuilder/Blocks/Control#block_control_repeat_until) と [待つ … 秒](/docs/Application/BlockBuilder/Blocks/Control#block_control_wait_for)、**演算子** の [ではない …](/docs/Application/BlockBuilder/Blocks/Operators#block_operator_not)。

**ウインカー** のサウンドは、停止するまで自動で繰り返されます。サウンドはスマートフォン、タブレット、パソコンで再生されます。

スクリプトを複製し（長押しまたは右クリック → **複製**）、両方のブロックで **右ウインカー** を選びます。すると左右どちらのウインカーもポート D の同じライトを点滅させます。左右のランプを別々にするには、空きポートが 2 つ必要です（たとえば 2 台目のハブ）。

## クイックリンクとロジックブロック、どちらを選ぶ？ {#which-to-choose}

| | クイックリンク | ロジックブロック |
|---|---|---|
| この車 | 3 行 | スクリプト 2 つ、変数 2 つ |
| なめらかな発進、デッドゾーン、制限 | 既製のブロック | 自分で掛け算・計算する |
| サーボステアリング | 自動キャリブレーション付きのサーボブロック | 相対位置のブロック、またはラックのキャリブレーション |
| ボタンでライト | トグルブロック | 変数と *もし … その後 … 他の* |
| サウンド、シーケンス、条件 | なし | あり |
| リアルタイムの値 | 行の各接続部に表示 | モニターとダッシュボードのモニター |
| 実行中の編集 | 不可 | 可能 |

どのコントロールも単に何かを動かすだけなら **クイックリンク** を選びましょう。車、トラック、列車、クレーンなどです。ロジックが必要なら **ロジックブロック** を選びましょう。サウンド、点滅パターン、シーケンス、センサーへの反応、ゲームなどです。プログラムの種類は変更できませんが、同じモデル用に 2 つ目のプロフィールを作ることはできます。詳しくは[プロフィールの作成](/docs/Application/Profiles/CreateProfile#choose-the-program-type)を参照してください。

## 次のステップ {#next-steps}

- ダッシュボードの **モニター** にバッテリー残量を表示し、少なくなったら警告する：[作例](/docs/Application/BlockBuilder/Examples#battery-warning)。
- ゲームパッドで操作する：[ゲームパッドのブロック](/docs/Application/BlockBuilder/Blocks/Gamepad)と[ゲームパッドの作例](/docs/Application/BlockBuilder/Examples#gamepad)。
- ペダル、変速機、慣性で車をリアルに：[シミュレーター](/docs/Application/BlockBuilder/Blocks/Simulator)。
- エディターを使いこなす：[エディターでの作業](/docs/Application/BlockBuilder/Editor)。
