---
id: SystemRequirements
title: システム要件
description: "MOCPilot に対応する OS、Bluetooth、メモリ、ブラウザー。"
---

# システム要件 {#system-requirements}

MOCPilot はスマートフォン、タブレット、パソコンで動作します。モデルを操作するには、デバイスに Bluetooth があり、[対応ハブ](/docs/Introducing/SupportedDevices)を用意する必要があります。

## オペレーティングシステム {#operating-systems}

| プラットフォーム | 最低バージョン | 入手先 |
|---|---|---|
| iPhone と iPad | iOS / iPadOS 17 | App Store |
| Android スマートフォンとタブレット | Android 10 | Google Play |
| Mac | macOS 13 Ventura | App Store |
| Windows PC（64 ビット、x64） | Windows 10 バージョン 1809 または Windows 11 | Microsoft Store |

各ストアへのリンクは [mocpilot.com](https://mocpilot.com) にあります。スマートフォン、タブレット、デスクトップのレイアウトはアプリが自動で選びます。[スマートフォン、タブレット、デスクトップ](/docs/Introducing/Layouts)を参照してください。

## Bluetooth {#bluetooth}

- ハブは **Bluetooth Low Energy**（Bluetooth 4.0 以降）で接続します。ほとんどのスマートフォンとタブレットが対応しています。パソコンでは、内蔵アダプターか USB Bluetooth ドングルを使ってください。
- **Robot Inventor** ハブはクラシック Bluetooth を使います。Android、Mac、Windows では使えますが、iPhone と iPad では使えません。Windows と Mac では USB ケーブルでも接続できます。
- **Mould King** のハブは、Bluetooth のブロードキャスト（アドバタイジング）でコマンドを受信します。Windows では、Mould King 6.0 にはブロードキャストに対応したアダプターとドライバーが必要で、Mould King 4.0 はまったく動作しません。その場合はスマートフォンかタブレットを使ってください。
- アプリは Bluetooth の権限を求めます（Android では「付近のデバイス」または「位置情報」も）。[Bluetooth と権限](/docs/Help/BluetoothPermissions)を参照してください。

## メモリ {#memory}

メモリが 4 GB 未満のデバイスでは、大きなプログラムでも動作が重くならないよう、MOCPilot はロジックブロックを簡略化して描画します。これは自動で行われ、ブロックの動作は変わりません。

## Web エディター {#web-editor}

mocpilot.com の [Web エディター](/docs/Introducing/WebEditor)はブラウザーで動作します。

- 最新のデスクトップ用ブラウザーを使ってください。エディターには WebAssembly が必要です。
- 初回はエディター用に約 20 MB、テーマ用に約 15 MB をダウンロードするため、高速な回線がおすすめです。
- ブラウザーは Bluetooth ハブに接続できません。ブラウザーからモデルを操作するには[リモートコントロール](/docs/Application/Profiles/RemoteControl)を使います。これには WebRTC に対応したブラウザーが必要です。
- 「The editor could not start in this browser.」（このブラウザーではエディターを起動できませんでした）と表示された場合は、ブラウザーを更新するか、別のブラウザーを試してください。

## インターネット {#internet}

ハブ、プロフィール、ダウンロード済みのテーマはオフラインでも使えます。サインイン、同期、カタログ、AI ビルダー、リモートコントロール、購入にはインターネット接続が必要です。[オフラインでの作業](/docs/Application/Account/Sync#working-offline)を参照してください。
