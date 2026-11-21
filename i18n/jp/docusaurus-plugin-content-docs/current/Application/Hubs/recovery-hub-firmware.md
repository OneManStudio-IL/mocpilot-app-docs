---
id: RecoveryHubFirmware
title: ハブのファームウェアの復旧
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# ハブのファームウェアの復旧 {#hub-firmware-recovery}

ファームウェアの復旧は、ファームウェアの更新が中断または失敗して正常に起動できなくなったハブを元に戻す機能です。

MOCPilot が動作するファームウェアをハブにアップロードし、ハブが再び動作して更新できる状態にします。復旧は、ハブが正常に応答しないとき、MOCPilot にハブがリカバリーモードであると表示されたとき、または更新に失敗した後にだけ使ってください。

:::warning 重要
復旧の間はずっとハブの電源を入れたままにし、デバイスをハブの近くに置いてください。アップロード中に Bluetooth をオフにしたり、MOCPilot を閉じたり、電池を抜いたり、ハブの電源を切ったりすると、復旧に失敗することがあります。
:::

## 復旧が必要な場合 {#when-recovery-is-required}

次のような場合は復旧が必要かもしれません。

- ファームウェアの更新が正常に完了しなかった。
- ハブが通常のハブとして接続できなくなった。
- MOCPilot でハブが **LEGO Bootloader** と表示される。
- ハブがファームウェアのリカバリーモードで接続されていることを MOCPilot が検出した。

始める前に、ハブのバッテリーが十分にあること、スマートフォン、タブレット、コンピューターが充電されていること、Bluetooth がオンになっていることを確認してください。

## 対応ハブ {#supported-hubs}

復旧は、ファームウェアの更新と同じハブで使えます。

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px', margin: '16px 0 24px'}}>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/devices/technic_hub_p.webp')} alt="Technic Hub" style={{maxWidth: '140px'}} />
    <div><strong>Technic Hub</strong></div>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/devices/city_hub_p.webp')} alt="City Hub" style={{maxWidth: '140px'}} />
    <div><strong>City Hub</strong></div>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/devices/boost_hub_p.webp')} alt="Boost Hub" style={{maxWidth: '140px'}} />
    <div><strong>Boost Hub</strong></div>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/devices/technic_move_hub_p.webp')} alt="Technic Move Hub" style={{maxWidth: '140px'}} />
    <div><strong>Technic Move Hub</strong></div>
  </div>
</div>

## Technic Hub、Boost Hub、City Hub をリカバリーモードにする {#put-a-technic-hub-boost-hub-or-city-hub-into-recovery-mode}

これらのハブはブートローダー経由で接続します。

1. ハブの電源を切ります。
2. 緑のボタンを押し続けます。
3. ハブの LED が紫色に点滅し始めるまで、ボタンを押し続けます。
4. LED が紫色に点滅している間は、ボタンを離さないでください。
5. ボタンを押したまま、MOCPilot で**私のBluetoothハブ**を開き、ハブに接続します。
6. ハブがブートローダーモードで接続されたら、ボタンを離してかまいません。

リカバリーモードのハブは、通常のハブ名ではなく **LEGO Bootloader** と表示されることがあります。

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_2.png')} alt="ハブ一覧の LEGO Bootloader とファームウェア復旧の操作" />

## Technic Move Hub をリカバリーモードにする {#put-a-technic-move-hub-into-recovery-mode}

Technic Move Hub の復旧方法は異なります。**LEGO Bootloader** としては接続されず、代わりに以下のボタン操作で工場出荷時のファームウェア **1.2.3** が読み込まれます。このファームウェアは日常的な使用を想定していません。

ファームウェアを元に戻すには：

1. ハブの電源を切ります。
2. 緑のボタンを押し続けます。
3. 緑のボタンを約 1 分間押し続けます。
4. ボタンを離します。
5. ハブの LED が白く点滅し始めるまで待ちます。
6. MOCPilot で**私のBluetoothハブ**を開き、ハブに接続します。

ハブが接続されると、MOCPilot が工場出荷時のファームウェアを検出し、最新バージョンへの更新を提案します。更新を開始し、完了するまで待ってください。

## ダイアログから復旧を開始する {#start-recovery-from-the-dialog}

リカバリーモードで接続されたハブを検出すると、MOCPilot は復旧ダイアログを表示します。

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_1.png')} alt="「ハブのリカバリーモードを検出しました」ダイアログ" />

**復旧**を選択すると、ハブへのファームウェアのアップロードが始まります。

準備ができていない場合は**キャンセル**を選択します。復旧は後でハブのメニューから開始できます。

## ハブのメニューから復旧を開始する {#start-recovery-from-the-hub-menu}

自分で復旧を開始するには：

1. **私のBluetoothハブ**を開きます。
2. **LEGO Bootloader** と表示されているハブを探します。
3. ハブのメニューを開きます。
4. **ハブのファームウェアを復旧**を選択します。

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_2.png')} alt="ハブのコンテキストメニューの「ハブのファームウェアを復旧」" />

## ファームウェアの復旧中 {#during-firmware-recovery}

MOCPilot がファームウェアをハブにアップロードし、進行状況を表示します。

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_3.png')} alt="ファームウェア復旧の進行状況画面" />

完了するまで待ってください。ハブをデバイスから離したり、アプリを閉じたり、Bluetooth をオフにしたり、ハブの電源を切ったりしないでください。

ハブが何度か再起動または再接続することがあります。これは正常な動作です。MOCPilot を開いたまま待ってください。

## 復旧を完了する {#finish-recovery}

復旧が完了すると、MOCPilot に確認画面が表示されます。

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_4.png')} alt="ファームウェア復旧完了ダイアログ" />

**OK** を選択します。ハブが再起動し、**LEGO Bootloader** ではなく通常のハブとして再接続されるはずです。

その後、**私のBluetoothハブ**でハブを確認してください。MOCPilot がまだファームウェアの更新を求める場合は、通常の[ファームウェアの更新](/docs/Application/Hubs/FirmwareUpdating/)を実行してください。

## 復旧に失敗した場合 {#if-recovery-fails}

復旧に失敗した場合は：

1. ハブをデバイスの近くに置きます。
2. ハブの電源を入れ直します。
3. もう一度ハブをリカバリーモードにします。
4. MOCPilot で **LEGO Bootloader** に接続します。
5. もう一度**ハブのファームウェアを復旧**を開始します。

再びエラーが表示された場合は、手順全体を繰り返してください。何度試しても失敗する場合は、電池を交換または充電してからもう一度お試しください。
