---
id: Inputs
title: 入力
description: "クイックリンクの入力：ダッシュボードのコントロール、シミュレーションの車両、ゲームパッド、ハブのボタンとセンサー。"
---

import Screenshot from '@site/src/components/Screenshot';

# 入力 {#inputs}

どの行も入力から始まります。パレットの **入力** タブには次のものが並びます。

- **ダッシュボードのコントロール**ごとに 1 つのブロック。複数のチャンネルを持つコントロール（ジョイスティックと十字キーの軸、ハンドル、ペダル、シフトレバー、サイドブレーキ、ウインカー）は、チャンネルごとに 1 つのブロックになります。
- ダッシュボードにペダル、シフトレバー、サイドブレーキのいずれかがあるときは **車両** ブロック
- ゲームパッドブロックがオンのときは **ゲームパッド** ブロック
- プロフィールのハブごとに 1 つの **ハブ** ブロック（ボタンもセンサーもない Mould King は除く）

タブが空のときは、「ダッシュボードにコントローラーを、マイハブにハブを追加すると、ここに表示されます」と表示されます。

<Screenshot name="links-palette-inputs" alt="クイックリンクのパレットの「入力」タブ" width={900} />

各入力のすべての設定と値は、[入力ブロック](/docs/Application/Links/Blocks/InputBlocks)のリファレンスにまとめています。

## ダッシュボードのコントロール {#dashboard-controls}

[コントローラー](/docs/Application/Links/Blocks/InputBlocks#src-controller)ブロックは、ダッシュボードのコントロールを名前（**JOY1**、**SLDR1**、**BTN2**…）で受け取ります。コントロールに複数のチャンネルがある場合は、使う **チャンネル** も選びます。

| コントロール | 行に送られるもの |
|---|---|
| [ジョイスティック](/docs/Application/Links/Blocks/InputBlocks#controller-joystick) | **X 軸** または **Y 軸**、−1…1 |
| [スライダー](/docs/Application/Links/Blocks/InputBlocks#controller-slider)、[マスコン](/docs/Application/Links/Blocks/InputBlocks#controller-train)、[ロータリーノブ](/docs/Application/Links/Blocks/InputBlocks#controller-knob) | その位置 |
| [ハンドル](/docs/Application/Links/Blocks/InputBlocks#controller-wheel) | **ハンドル角度** −1…1、または **ホーン** |
| [ペダル](/docs/Application/Links/Blocks/InputBlocks#controller-pedals) | **アクセルペダル** または **ブレーキペダル**、0…1 |
| [シフトレバー](/docs/Application/Links/Blocks/InputBlocks#controller-gear) | **ギア** または **方向（R − / 前進 +）** |
| [サイドブレーキ](/docs/Application/Links/Blocks/InputBlocks#controller-handbrake) | **サイドブレーキ固定**（オン/オフ）または **サイドブレーキの強さ** |
| [ウインカー](/docs/Application/Links/Blocks/InputBlocks#controller-turnsignals) | **ウインカー（左 − / 右 +）**、**左ウインカー**、**右ウインカー**、または **ライト** |
| [十字キー](/docs/Application/Links/Blocks/InputBlocks#controller-dpad) | **上 / 下** または **左 / 右**：−1、0、+1 |
| [ボタン](/docs/Application/Links/Blocks/InputBlocks#controller-button) | 押している間オン |
| [スイッチ](/docs/Application/Links/Blocks/InputBlocks#controller-switch) | オン / オフ |
| [ステップスイッチ](/docs/Application/Links/Blocks/InputBlocks#controller-stepper) | 現在のステップ |

ダッシュボードでコントロールを追加、名前変更、変更すると、パレットと行も自動的に追従します。ジョイスティックを **水平のみ (X)** にすると、その Y 軸を使っている行には「… はこの軸に沿って動きません」と表示されます。

## 本物の車のように走らせる {#drive-like-a-real-car}

ハンドル、ペダル、シフトレバー、サイドブレーキは、そのままの位置を送ります。ペダルの行では、ペダルを踏み込んだ分だけモーターが回ります。車のように振る舞うモデル（慣性で加速し、惰性で走り、ブレーキをかけ、R で後退する）には、代わりに[車両](/docs/Application/Links/Blocks/InputBlocks#src-vehicle)入力を使います。車両入力はペダル、シフトレバー、サイドブレーキをまとめて読み取り、車両の **速度**、**エンジン回転数（rpm）**、**ブレーキ中**、または **サイドブレーキ中** を出力します。

- *車両（速度）* → *モーター* → 駆動モーター
- *ハンドル（ハンドル角度）* → *サーボ* → ステアリング
- *車両（ブレーキ中）* → *ライト* → ブレーキランプ
- *ウインカー（左ウインカー）* → *ライト* → 左のウインカーランプ

## ゲームパッド {#gamepad}

[ゲームパッド](/docs/Application/Links/Blocks/InputBlocks#src-gamepad)ブロック 1 つでコントローラー全体を扱えます。**入力** でスティック、トリガー、ボタンを選びます。先に[ゲームパッドページ](/docs/Application/Dashboard/Gamepad)で **ゲームパッドブロックを有効にする** をオンにしてください。ラベルは **ゲームパッドのボタン配置**（Xbox または PlayStation）に従います。

## ハブのボタンとセンサー {#hub-buttons-and-sensors}

[ハブ](/docs/Application/Links/Blocks/InputBlocks#src-hub)入力は、ハブのボタンやセンサーの 1 つを読み取ります。バッテリー、傾き、加速度、モーターの速度と位置、ポートの距離センサーやカラーセンサーなどです。リストには、そのハブが報告できるものだけが表示されます。傾きと加速度では、ハブがモデルにどう取り付けられているかに合わせて **ハブの向き** を設定します。

値は −1…1 にスケーリングされて行を流れます。センサーの直後にテキストの **モニター** を置くと、「7.85 V」や「−12°」のように単位付きの実際の値が表示されます。

よくある使い方：

- *バッテリー* → *インジケーター*（バッテリーレベル）
- *距離センサー* → *しきい値*（下回る、20 %） → *時間指定モーター*：何かが近づいたら後退する
- *ボタン 1*（Powered Up リモコン） → *モーター*：実物のリモコンで操縦する
