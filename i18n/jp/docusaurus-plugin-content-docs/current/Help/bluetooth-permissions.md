---
id: BluetoothPermissions
title: Bluetooth と権限
description: "各プラットフォームで MOCPilot が求める権限とその理由、権限を拒否した場合や Bluetooth に問題がある場合の対処法。"
---

# Bluetooth と権限 {#bluetooth-and-permissions}

MOCPilot は Bluetooth でハブと通信するため、システムがその許可を求めます。そのほかの権限は、それを必要とする機能を使うときにだけ求められます。

## MOCPilot が求める権限とその理由 {#what-mocpilot-asks-for-and-why}

| 権限 | 求められるタイミング | 理由 |
|---|---|---|
| **Bluetooth**（iPhone、iPad、Mac） | 初めてハブを検索するとき | ハブを見つけて接続するため |
| **付近のデバイス**（Android 12 以降） | 初めてハブを検索するとき | ハブを見つけて接続するため |
| **位置情報**（正確な位置情報、Android 10 と 11） | 初めてハブを検索するとき | これらのバージョンの Android では、Bluetooth のスキャンに必要です。MOCPilot が位置情報を収集、保存、共有することはありません |
| **位置情報**（Android、Mould King ハブ） | Mould King ハブを接続するとき | アプリは Mould King ハブに Bluetooth のブロードキャストでコマンドを送るため、どのバージョンの Android でも位置情報を求めます |
| **カメラ**（スマートフォン、タブレット） | **リモコンを接続** で QR コードをスキャンするとき | [接続コード](/docs/Application/Profiles/RemoteControl)を読み取るため。代わりに 6 桁の数字を入力することもできます |
| **マイク**（iPhone、iPad、Mac、Android） | 初めて [AI ビルダー](/docs/Application/Profiles/AiBuilder)へのリクエストを音声入力するとき | 音声入力のため |
| **音声認識**（iPhone、iPad、Mac） | マイクと同時に | 音声をテキストに変換するため |

Windows では、MOCPilot は Bluetooth の権限を求めません。Bluetooth がオンになっていれば使えます。Windows での音声入力には、MOCPilot は Windows の音声入力（Win+H）を案内します。

## 権限を拒否した場合 {#if-you-denied-a-permission}

権限を拒否すると、通常システムは再度確認しません。その場合 MOCPilot はメッセージを表示します。たとえば「このアプリは Bluetooth デバイスを検出して接続するために、近くのデバイスをスキャンする権限が必要です…」という内容の **スキャンに失敗しました**、「コードをスキャンするには、システム設定で MOCPilot にカメラの使用を許可してください。」、「システム設定で MOCPilot にマイクへのアクセスを許可してください」などです。システム設定で権限をオンにして、アプリに戻ってください。

**iPhone と iPad**
1. **設定** を開き、下にスクロールして **MOCPilot** を選びます。
2. **Bluetooth** をオンにします（必要なら **カメラ**、**マイク**、**音声認識** も）。

**Android**（名称はメーカーによって多少異なります）
1. **設定 → アプリ → MOCPilot → 権限** を開きます。
2. **付近のデバイス** を許可します。Android 10 と 11、または Mould King ハブを使う場合は、**位置情報** も許可し、**正確な位置情報を使用** をオンにします。
3. 必要なら **カメラ** や **マイク** を許可します。

**Mac**
1. **システム設定 → プライバシーとセキュリティ** を開きます。
2. **Bluetooth**（または **マイク**、**音声認識**）を選び、**MOCPilot** をオンにします。

**Windows**
1. **設定 → Bluetooth とデバイス** を開き、**Bluetooth** をオンにします。

## 「Bluetoothがオフです」 {#bluetooth-is-off}

デバイスの Bluetooth がオフになっていると、MOCPilot は **Bluetoothがオフです** と表示します。コントロールセンター、クイック設定、またはシステム設定で Bluetooth をオンにしてから、メッセージを確認してください。アプリが再び検索を始めます。

## Windows の Bluetooth アダプター {#bluetooth-adapters-on-windows}

- Bluetooth 4.0（LE）以降のアダプターが必要です。パソコン内蔵のものでも USB ドングルでもかまいません。
- **Mould King 6.0** には、Bluetooth のブロードキャスト（アドバタイジング）を送信できるアダプターとドライバーが必要です。すべてのアダプターが対応しているわけではありません。
- **Mould King 4.0** は Windows では動作しません。アプリには「4ポートの Mould King ハブにはサービスデータ付きの Bluetooth アドバタイズが必要ですが、Windows はこれに対応していません。」と表示されます。これらのハブにはスマートフォンかタブレットを使ってください。

## クラシック Bluetooth のハブ {#classic-bluetooth-hubs}

**Robot Inventor** ハブは、Bluetooth Low Energy ではなくクラシック Bluetooth を使います。Android、Mac、Windows では使えますが、iPhone と iPad では使えません。Windows で MOCPilot がハブを見つけられない場合は、先に **設定 → Bluetooth とデバイス → デバイスの追加** でハブをペアリングしてから、アプリでもう一度検索してください。

ほかの対応ハブはすべて Bluetooth Low Energy を使い、システムの Bluetooth 設定ではなく MOCPilot の中だけで追加します。

## 安定した接続のために {#a-stable-connection}

- **一度に 1 つのアプリだけ。** ハブは 1 つの接続しか受け付けません。LEGO® のアプリやほかのリモコンアプリを閉じ、ほかのスマートフォンからハブを切断してください。
- **通信距離。** デバイスはモデルから数メートル以内に置いてください。壁、金属、人の体、ほかの 2.4 GHz 機器（Wi-Fi ルーターやほかの Bluetooth 機器）があると、通信距離が短くなります。
- **電池。** 電池が弱っていると、モーターに大きな負荷がかかったときに接続が切れます。
- **アプリを開いたままに。** MOCPilot を画面に表示した状態で操作し、[設定](/docs/Application/Account/Settings)で **画面を常にオンにする** をオンにして、プロフィールを開いている間に画面が消えないようにしましょう。

ハブが見つからない、接続が何度も切れる場合のそのほかの対処法：[トラブルシューティング](/docs/Help/Troubleshooting#hubs)。
