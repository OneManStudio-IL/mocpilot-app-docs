---
id: HowItWorks
title: MOCPilot のしくみ
description: "プロフィール、ダッシュボード、ハブ、プログラム：すべての MOCPilot モデルを構成する 4 つの要素。"
---

import HowItWorks from '@site/src/components/HowItWorks';
import Screenshot from '@site/src/components/Screenshot';

# MOCPilot のしくみ {#how-mocpilot-works}

MOCPilot のすべては 4 つの要素でできています。これを知っておけば、どの画面も理解しやすくなります。

<HowItWorks />

## 1. プロフィール：1 つのモデル {#1-profile-one-model}

**プロフィール**には、1 つのモデルに関するすべてが入っています。ハブ、ダッシュボード、プログラムです。モデルごとに 1 つのプロフィールを作りましょう。たとえば「Technic バギー」や「クレーントラック」のように。

プロフィールを作成するときに、**プログラムの種類**としてロジックブロックかクイックリンクを選びます。後から変更することはできません。[プロフィールの作成](/docs/Application/Profiles/CreateProfile)を参照してください。

## 2. ハブ：モデルの電子部品 {#2-hubs-the-models-electronics}

**ハブ**はモデルに組み込む Bluetooth ブロックで、そのポートにモーター、ライト、センサーをつなぎます。プロフィールにはハブの**スロット**があります。モデルのハブを一度スロットに追加すれば、プロフィールを開くたびに MOCPilot が自動で接続します。[ハブ](/docs/Application/Hubs/HubsOverview)を参照してください。

## 3. ダッシュボード：あなたの操作画面 {#3-dashboard-your-controls}

**ダッシュボード**は、モデルを操作する画面です。グリッド上にコントロールを配置します。ジョイスティック、スライダー、ボタン、スイッチ、ステップスイッチ、モニターに加えて、ハンドルやペダルなどの特殊コントロールもあります。コントロールはそれだけでは何もせず、値をプログラムに渡します。[ダッシュボード](/docs/Application/Dashboard/DashboardOverview)を参照してください。

ゲームパッドを、ダッシュボードと一緒に、または代わりに使うこともできます。[ゲームパッド](/docs/Application/Dashboard/Gamepad)を参照してください。

## 4. プログラム：すべてをつなぐもの {#4-program-what-connects-them}

**プログラム**は、コントロールを動かしたときに何が起きるかを決めます。どのモーターがどの速さで回るか、どのライトが点滅するか、モニターに何を表示するか、などです。

- **クイックリンク**では、プログラムは行のリストです：*入力 → 処理 → 動作 → ハブ*。[クイックリンク](/docs/Application/Links/LinksIntroducing)を参照してください。
- **ロジックブロック**では、プログラムはイベント、ループ、条件、変数、センサーのブロックで組み立てます。[ロジックブロック](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing)を参照してください。

## 5. 実行 {#5-run}

**実行**（▶）を押します。プログラムが始まり、ダッシュボードのコントロールが動き出し、モデルが反応します。**停止**を押すと編集に戻ります。[モデルの操作](/docs/Application/Profiles/PlayMode)を参照してください。

<Screenshot name="links-editor" alt="クイックリンクのプログラム：ダッシュボードのコントロールをハブのポートに接続" width={900} />

## よくある使い方の流れ {#a-typical-session}

1. プロフィールを開くか、[新しく作成](/docs/Application/Profiles/CreateProfile)します。
2. **マイハブ**でハブを追加し、電源を入れます。
3. **ダッシュボード**にコントロールを配置します。
4. **プログラム**でコントロールをモーターやライトに結び付けます。
5. **実行**を押して操作し、調整して、また試します。

## データの保存場所 {#what-is-stored-where}

- プロフィールはデバイスに保存されます。サインインしていれば、アカウントにも保存され、すべてのデバイスに表示されます。[デバイス間の同期](/docs/Application/Account/Sync)を参照してください。
- テーマなどの購入品はアカウントに紐づきます。[MocPilot Pro と購入](/docs/Application/Account/Pro)を参照してください。
