---
id: QuickStart
title: クイックスタート
description: "MOCPilot をインストールしてサインインし、最初のプロフィールを作って、数分でモデルを走らせましょう。"
---

import Screenshot from '@site/src/components/Screenshot';

# クイックスタート {#quick-start}

このガイドでは、アプリのインストールから最初のモデルを走らせるまでを説明します。モーターをつないだ対応ハブが必要です。[対応デバイス](/docs/Introducing/SupportedDevices)を参照してください。

## 1. アプリをインストールする {#1-install-the-app}

MOCPilot は App Store（iPhone、iPad、Mac）、Google Play（Android）、Microsoft Store（Windows）で入手できます。各ストアへのリンクは [mocpilot.com](https://mocpilot.com) にあります。

## 2. サインインするか、アカウントなしで続行する {#2-sign-in-or-continue-without-an-account}

初回起動時に、アプリからサインインを求められます。メールアドレスまたはログイン名とパスワード、Google、Apple ID のいずれかでサインインするか、新しいアカウントを作成します。

<Screenshot name="sign-in" alt="MOCPilot のサインイン画面" width={900} />

アカウントの作成をおすすめします。

- プロフィールと設定がサーバーに保存され、デバイス間で同期されます。
- デバイスを買い替えたり紛失したりしても、データを取り戻せます。
- 購入品と MocPilot Pro がすべてのデバイスで使えます。

**アカウントなしで続行** も可能ですが、その場合すべてのデータはこのデバイスだけに保存され、アプリを削除すると失われます。後から **設定 → アカウント** でサインインできます。[アカウント](/docs/Application/Account/UserAccount)を参照してください。

## 3. 画面の構成を知る {#3-find-your-way-around}

- **スマートフォン**では、下部バーに **プロフィール**、**設定**、**ヘルプ**（サインイン後は **通知** も）があります。
- **タブレット**では、同じ項目に加えて **プロフィールカタログ** とアカウントがサイドバーにあります。
- **パソコン**では上部バーを使います。左側にメニュー、右側にアカウント、通知、設定があります。

[スマートフォン、タブレット、デスクトップ](/docs/Introducing/Layouts)を参照してください。

## 4. プロフィールを作成する {#4-create-a-profile}

1. **私のプロフィール** ページで **+** → **新しいプロフィール** をタップします（スマートフォン）。タブレットとパソコンでは **新しいプロフィール** を選びます（または **ファイル → 新しいプロフィール**）。
2. **プログラムの種類** を選びます。
   - コードを書かずにモデルを操作したいなら **クイックリンク**。初めての方に最適です。
   - イベント、ループ、条件、センサーを使いたいなら **ロジックブロック**。
3. **名前** を入力し、必要なら画像を追加します。
4. **作成** をタップします。

<Screenshot name="create-profile-tiles" alt="ロジックブロックとクイックリンクのタイルがある「新しいプロフィール」ページ" width={900} />

プロフィールがエディターで開きます。詳しくは[プロフィールの作成](/docs/Application/Profiles/CreateProfile)を参照してください。

:::tip 既製のモデルを使いたい場合
**プロフィールカタログ**（プロフィールページの **オンラインで検索**）を開き、お持ちのセット用の公式プロフィールをインストールしましょう。[カタログと公開](/docs/Application/Profiles/Catalog)を参照してください。
:::

## 5. ハブを追加する {#5-add-your-hub}

1. エディターで **マイハブ** を開きます。
2. 空いているスロットで **新しいハブを追加** をタップし、ハブのモデルを選んで **追加** をタップします。
3. ハブの電源を入れてボタンを押し、MOCPilot がハブを見つけるまで待ちます。

<Screenshot name="my-hubs" alt="ハブスロットが並ぶ「マイハブ」ページ" width={900} />

ファームウェアの更新を求められたら、[ファームウェアの更新](/docs/Application/Hubs/FirmwareUpdating)の手順に従ってください。詳しくは[ハブの追加と接続](/docs/Application/Hubs/ConnectingHubs)を参照してください。

## 6. ダッシュボードにコントロールを配置する {#6-place-controls-on-the-dashboard}

1. **ダッシュボード** を開きます。
2. **+**（**コントローラーを追加**）をタップし、**ジョイスティック** を選んで **ダッシュボードに追加** をタップします。
3. 好きな場所までドラッグします。タップすると、サイズ、色、動作を変更できます。

<Screenshot name="controller-palette" alt="ジョイスティックを選択した「コントローラーを追加」パレット" width={900} />

[コントロールの追加と配置](/docs/Application/Dashboard/ArrangingControls)を参照してください。

## 7. コントロールをモーターに結び付ける {#7-connect-the-control-to-a-motor}

**クイックリンク：** **入力** からジョイスティックの入力（たとえば *JOY1 Y 軸*）を空の行にドラッグし、**出力** から **モーター** の動作と **ハブ** の出力を追加して、モーターをつないだポートをタップします。行に赤い枠がなくなれば準備完了です。[クイックリンク](/docs/Application/Links/LinksIntroducing)を参照してください。

**ロジックブロック：** *プログラムが開始されたとき* ブロック、*いつも繰り返す* ループ、ジョイスティックの値を受け取る *モーターの速度を設定* ブロックを追加します。[ロジックブロック](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing)と[作例](/docs/Application/BlockBuilder/Examples)を参照してください。

## 8. 実行を押す {#8-press-run}

**実行**（▶）を押します。ジョイスティックを動かすと、モーターが回ります。**停止** を押すと編集に戻ります。

これで完了です。次のステップ：

- すべての[コントロールの種類](/docs/Application/Dashboard/ControlTypes)を知る。
- [テーマ](/docs/Application/Themes/ThemesOverview)でダッシュボードの見た目を変える。
- [ゲームパッド](/docs/Application/Dashboard/Gamepad)を接続する。
- うまく動かないときは、[トラブルシューティング](/docs/Help/Troubleshooting)を参照してください。
