---
id: AboutApp
title: MOCPilot について
description: "MOCPilot は、スマートフォン、タブレット、パソコンを LEGO® や互換 Bluetooth モデルのリモコンに変えるアプリです。"
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# MOCPilot：作って、走らせて、すべてを操る {#mocpilot-build-it-drive-it-control-everything}

**MOCPilot** は、スマートフォン、タブレット、パソコンを LEGO® や互換 Bluetooth モデルのリモコンに変えるアプリです。車、トラック、列車、クレーン、ロボット、そしてあなた自身の MOC を操作できます。

操作画面は自分でデザインします。ジョイスティック、スライダー、ボタン、ハンドル、インジケーターを並べた**ダッシュボード**です。そして**プログラム**が、ダッシュボードと**ハブ**につながったモーターやライトを結び付けます。MOCPilot には 2 種類のプログラムエディターがあります。

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', margin: '24px 0'}}>
  <div>
    <img src={useBaseUrl('/img/illustrations/editor_links.svg')} alt="クイックリンクエディター：入力からハブまでの行" style={{width: '100%'}} />
    <h3>クイックリンク</h3>
    <p>コード不要。1 行で 1 つのコントロールをモーターやライトに結び付けます：<em>入力 → 処理 → 動作 → ハブ</em>。数分で車を走らせられます。<a href="/docs/Application/Links/LinksIntroducing">詳しく見る</a>。</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/illustrations/editor_blocks.svg')} alt="ロジックブロックエディター：ブロックで作ったプログラム" style={{width: '100%'}} />
    <h3>ロジックブロック</h3>
    <p>イベント、ループ、条件、変数、センサーデータを扱えるビジュアルブロック。ロボットや自動化など、ロジックが必要なものに向いています。<a href="/docs/Application/BlockBuilder/Blocks/BlocksIntroducing">詳しく見る</a>。</p>
  </div>
</div>

## できること {#what-you-can-do}

- **どんなモデルも操作**：自分でデザインしたダッシュボードで操作できます。ジョイスティック、スライダー、ボタン、スイッチ、ステップスイッチ、モニター、さらにハンドル、ペダル、変速機、サイドブレーキ、ウインカー、マスコンなどの特殊コントロールも使えます。
- **実物のハブを使用**：LEGO® Powered Up、Technic™、Technic Move、BOOST、City、WeDo 2.0、Robot Inventor、BuWizz、SBrick、Mould King に対応しています。[対応デバイス](/docs/Introducing/SupportedDevices)を参照してください。
- **ゲームパッドを使用**：タッチスクリーンの代わりに Xbox や PlayStation タイプのゲームパッドで操作できます。
- **センサーを読み取る**：ハブのバッテリーと傾き、モーターの速度と位置、カラーセンサーや距離センサー、スマートフォンの傾きを読み取れます。
- **ダッシュボードを自分好みに**：[テーマ](/docs/Application/Themes/ThemesOverview)で見た目を変えられます。
- **プロフィールをどこでも**：アカウントがあれば、プロフィールはデバイス間で同期され、[mocpilot.com](/docs/Introducing/WebEditor) のブラウザーでも編集できます。
- **別のデバイスから操作**：MocPilot Pro なら、1 台のデバイスがハブに接続し、別のデバイスや Web エディターがリモコンになります。
- **共有**：[プロフィールカタログ](/docs/Application/Profiles/Catalog)からプロフィールをインストールしたり、自分のプロフィールを公開したりできます。

<Screenshot name="dashboard-run" alt="モデルを操作中の MOCPilot のダッシュボード" width={900} />

## MOCPilot が動く環境 {#where-mocpilot-runs}

| デバイス | レイアウト |
|---|---|
| iPhone と Android スマートフォン | スマートフォン用レイアウト：下部バー。開いたプロフィールは横向きの全画面で表示 |
| iPad と Android タブレット | タブレット用レイアウト：サイドバー。エディターを広く使える |
| Mac と Windows パソコン | デスクトップ用レイアウト：メニュー、キーボードショートカット、ダッシュボードは専用ウインドウ |
| mocpilot.com のブラウザー | [Web エディター](/docs/Introducing/WebEditor)：プロフィールを編集。ハブへの接続は別のデバイスのアプリが担当 |

詳しくは[スマートフォン、タブレット、デスクトップ](/docs/Introducing/Layouts)を参照してください。

ハブ、プロフィール、ダウンロード済みのテーマはインターネットなしでも使えます。[オフラインでの作業](/docs/Application/Account/Sync#working-offline)を参照してください。

## はじめの一歩 {#where-to-start}

1. [MOCPilot のしくみ](/docs/Introducing/HowItWorks)を読みましょう。5 分で、ほかのすべてがわかりやすくなります。
2. [クイックスタート](/docs/Introducing/QuickStart)に沿って、最初のモデルを走らせましょう。
3. どちらのエディターを選ぶか迷ったら、[プロフィールの作成](/docs/Application/Profiles/CreateProfile#choose-the-program-type)で比較してください。

:::note
LEGO®、LEGO ロゴ、Powered Up、Technic は LEGO Group の商標です。LEGO Group は MOCPilot のスポンサーではなく、MOCPilot を認可または推奨するものではありません。
:::
