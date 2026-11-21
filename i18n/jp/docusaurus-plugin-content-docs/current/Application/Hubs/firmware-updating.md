---
id: FirmwareUpdating
title: ファームウェアの更新
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# ファームウェアの更新 {#firmware-updating}

MOCPilot は、対応する LEGO® Powered Up ハブに新しい互換バージョンがある場合、そのファームウェアを更新できます。

ハブによっては、MOCPilot で正しく動作させるために更新が必要です。新しいファームウェアでハブの不具合が修正され、アプリが利用する機能が追加されます。

## 対応ハブ {#supported-hubs}

MOCPilot で更新できるハブは次のとおりです。

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

## 始める前に {#before-you-start}

ハブと、スマートフォン、タブレット、コンピューターのバッテリーが十分にあることを確認してください。

更新中はハブの電源を入れたままにし、Bluetooth 接続が安定するようデバイスをハブの近くに置いてください。ファームウェアのアップロード中に MOCPilot を閉じたり、Bluetooth をオフにしたり、ハブの電源を切ったりしないでください。

:::warning 重要
更新が中断されると、ハブのファームウェアが不完全な状態になることがあります。その場合、再びハブを使うにはファームウェアの復旧が必要になることがあります。
:::

## 更新を開始する {#starting-the-update}

ハブを接続すると、MOCPilot がファームウェアのバージョンを確認します。新しいバージョンが必要な場合は、**ファームウェア更新が必要です**ダイアログが表示されます。

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_1.png')} alt="「ファームウェア更新が必要です」ダイアログ" />

すぐにファームウェアを更新するには**更新**を選択します。

後で更新する場合は**キャンセル**を選択します。更新はいつでもハブのメニューから開始できます。

## 後でハブのメニューから更新する {#updating-later-from-the-hub-menu}

自分で更新を開始するには：

1. **私のBluetoothハブ**を開きます。
2. 更新が必要なハブを探します。
3. ハブのメニューを開きます。
4. **ファームウェアを更新**を選択します。

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_2.png')} alt="ハブのコンテキストメニューの「ファームウェアを更新」" />

## ファームウェアの更新中 {#during-the-firmware-update}

MOCPilot がファームウェアをハブにアップロードし、進行状況を表示します。

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_3.png')} alt="ファームウェア更新の進行状況画面" />

アップロードが終わるまで待ちます。新しいファームウェアが適用される間、ハブが再起動したり、一時的に切断されたりすることがあります。

その後、MOCPilot がもう一度ハブを検索します。ハブを近くに置いたまま、アプリが再接続するまで待ってください。

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_4.png')} alt="ファームウェアのアップロード完了後、ハブを検索中" />

## 更新を完了する {#finishing-the-update}

更新が完了すると、MOCPilot に確認画面が表示されます。

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_5.png')} alt="ファームウェア更新完了ダイアログ" />

**OK** を選択します。ハブが再接続し、カードに新しいファームウェアのバージョンが表示されます。

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_6.png')} alt="更新後のファームウェアバージョンを表示するハブのカード" />

これで引き続き MOCPilot でハブを使えます。

## 更新に失敗した場合 {#if-the-update-fails}

更新に失敗すると、MOCPilot にエラーメッセージが表示されます。

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_7.png')} alt="ファームウェア更新失敗ダイアログ" />

まず、ハブの電源を入れ直してから、もう一度更新を実行してください。

1. ハブの電源を切ります。
2. ハブの電源をもう一度入れます。
3. ハブをデバイスの近くに置きます。
4. MOCPilot でハブに接続します。
5. もう一度ファームウェアの更新を開始します。

それでもハブが正常に応答しない場合は、ファームウェアの復旧が必要かもしれません。[ハブのファームウェアの復旧](/docs/Application/Hubs/RecoveryHubFirmware/)を参照してください。
