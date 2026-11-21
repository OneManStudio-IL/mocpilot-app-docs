---
id: TechnicMoveHubConfigurations
title: Technic Move Hub の構成
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Technic Move Hub の構成 {#technic-move-hub-configurations}

## 概要 {#overview}

ほかの LEGO® Powered Up ハブと違い、Technic Move Hub は読み込まれている構成によって動作が変わります。

MOCPilot はこの構成を変更して、操作したい公式 LEGO セットにハブを合わせることができます。

## 対応する構成 {#supported-configurations}

MOCPilot が扱える構成は次のとおりです。

- **Porsche GT4 e-Performance**
- **Lamborghini Revuelto**
- **Batmobile™ Tumbler**

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_4.png')} alt="ハブ構成設定ブロックの Technic Move Hub 構成の選択肢" />

## 「私のBluetoothハブ」で構成を変更する {#change-configuration-from-my-bluetooth-hubs}

**私のBluetoothハブ**ページで構成を変更するには：

1. **私のBluetoothハブ**を開きます。
2. Technic Move Hub を探します。
3. ハブのメニューを開きます。
4. **設定を選択**を選択します。
5. 構成を選びます。
6. ダイアログで確定します。

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_0.png')} alt="「設定を選択」がある Technic Move Hub のコンテキストメニュー" />

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_1.png')} alt="Technic Move Hub の構成のサブメニュー" />

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_3.png')} alt="Technic Move Hub の再設定の確認ダイアログ" />

:::warning 重要
構成を変更すると、ファームウェアの更新と同じように、ハブにプログラムが書き込まれます。

処理の間はずっとハブの電源を入れたままにし、Bluetooth 接続が安定するよう、スマートフォン、タブレット、コンピューターも電源を入れたままハブの近くに置いてください。構成の変更中に MOCPilot を閉じたり、Bluetooth をオフにしたり、ハブの電源を切ったりしないでください。

変更が中断されると、ハブのファームウェアが壊れることがあります。その場合、再びハブを使うには[ファームウェアの復旧](/docs/Application/Hubs/RecoveryHubFirmware/)が必要になることがあります。
:::

構成の変更中、ハブは通常のコマンドを受け付けず、LED の色が順に切り替わります。新しい構成が適用されると、ハブが再起動します。

## 構成ブロック {#configuration-blocks}

ロジックブロックでは、プログラムの実行中に構成を読み取ったり変更したりできます。

### ハブの構成を設定 {#set-hub-configuration}

<img src={useBaseUrl('/img/blocks/block_hubs_set_hub_config.svg')} alt="ハブの構成を設定するブロック" />

`設定する … 設定を …` ブロックは、対応する構成の 1 つを選択したハブに読み込みます。

- ハブの選択：再設定するハブを選びます。
- 構成の選択：適用する構成を選びます。
- Technic Move Hub で使える構成：**Porsche GT4 e-Performance**、**Lamborghini Revuelto**、**Batmobile™ Tumbler**。

[ハブの構成を設定するブロックの説明](/docs/Application/BlockBuilder/Blocks/Control/#block_hubs_set_hub_config)を参照してください。

### ハブの構成 {#hub-configuration}

<img src={useBaseUrl('/img/blocks/block_hubs_all_control_hub_config.svg')} alt="ハブの構成を返す値ブロック" />

`取得する … 設定を次の形式で …` ブロックは、選択したハブの現在の構成を返します。

- ハブの選択：読み取るハブを選びます。
- 出力形式：**テキスト**は構成名を返します。
- 出力形式：**インデックス**は構成の番号を返します。条件での比較に便利です。

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_5.png')} alt="ハブの構成ブロックの出力形式の選択肢" />

[ハブの構成ブロックの説明](/docs/Application/BlockBuilder/Blocks/Control/#block_hubs_all_control_hub_config)を参照してください。

### パワーパルス {#power-pulse}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_power_pulse.svg')} alt="Technic Move Hub のパワーパルスブロック" />

**パワーパルス**ブロックは、選択した Technic Move Hub にパワーパルスを送ります。**Batmobile™ Tumbler** の構成でのみ動作します。

ハブは短時間（約 1〜2 秒）、モーターを最大の電力と速度で回します。クイックリンクでは、同じ機能を[パワーパルス](/docs/Application/Links/Blocks/OutputBlocks#op-pulse)操作で使えます。

[パワーパルスブロックの説明](/docs/Application/BlockBuilder/Blocks/Motors/#block_hubs_technicmove_motors_power_pulse)を参照してください。

## プログラムの実行中に構成を変更する {#change-configuration-during-program-runtime}

プログラムは実行中に構成を変更することもできます。典型的な手順は次のとおりです。

1. ハブの現在の構成を読み取ります。
2. プロフィールに必要な構成と比較します。
3. 構成が異なる場合は、必要な構成を設定します。
4. 再設定後にもう一度構成を読み取ります。
5. ハブが期待どおりの構成を返したときだけ先に進みます。
6. 必要な構成が適用されなかった場合は、切断するかプログラムを停止します。

このハブ用の既製プロフィールで、その方法を確認できます。

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_6.png')} alt="実行中に Technic Move Hub の構成を変更するブロックの例" />
