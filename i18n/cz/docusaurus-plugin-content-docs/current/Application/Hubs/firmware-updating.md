---
id: FirmwareUpdating
title: Aktualizace firmwaru
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Aktualizace firmwaru {#firmware-updating}

MOCPilot umí aktualizovat firmware podporovaných hubů LEGO® Powered Up, když je k dispozici novější kompatibilní verze.

Některé huby potřebují aktualizaci, aby s MOCPilotem fungovaly správně: novější firmware opravuje chyby hubu a přidává funkce, na které aplikace spoléhá.

## Podporované huby {#supported-hubs}

MOCPilot umí aktualizovat tyto huby:

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

## Než začnete {#before-you-start}

Ujistěte se, že hub i váš telefon, tablet nebo počítač mají dostatečně nabitou baterii.

Nechte hub po celou dobu aktualizace zapnutý a zařízení držte blízko něj, aby spojení přes Bluetooth zůstalo stabilní. Během nahrávání firmwaru nezavírejte MOCPilot, nevypínejte Bluetooth ani hub.

:::warning Důležité
Přerušená aktualizace může v hubu zanechat neúplný firmware. Hub pak může před dalším použitím potřebovat obnovu firmwaru.
:::

## Spuštění aktualizace {#starting-the-update}

Když připojíte hub, MOCPilot zkontroluje verzi jeho firmwaru. Pokud je potřeba novější verze, aplikace zobrazí dialog **Je vyžadována aktualizace firmwaru**.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_1.png')} alt="Dialog Je vyžadována aktualizace firmwaru" />

Vyberte **Aktualizovat** a aktualizace firmwaru se spustí okamžitě.

Chcete-li aktualizovat později, vyberte **Zrušit**. Aktualizaci můžete kdykoli spustit z nabídky hubu.

## Pozdější aktualizace z nabídky hubu {#updating-later-from-the-hub-menu}

Aktualizaci spustíte sami takto:

1. Otevřete **Moje Bluetooth huby**.
2. Najděte hub, který potřebuje aktualizaci.
3. Otevřete nabídku hubu.
4. Vyberte **Aktualizovat firmware**.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_2.png')} alt="Akce Aktualizovat firmware v kontextové nabídce hubu" />

## Během aktualizace firmwaru {#during-the-firmware-update}

MOCPilot nahraje firmware do hubu a zobrazuje průběh.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_3.png')} alt="Obrazovka s průběhem aktualizace firmwaru" />

Počkejte, až nahrávání skončí. Hub se může při použití nového firmwaru na chvíli restartovat nebo odpojit.

Potom MOCPilot hub znovu vyhledá. Nechte hub poblíž a počkejte, až se aplikace znovu připojí.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_4.png')} alt="Firmware nahrán, probíhá hledání hubu" />

## Dokončení aktualizace {#finishing-the-update}

Po dokončení aktualizace zobrazí MOCPilot potvrzení.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_5.png')} alt="Dialog o dokončení aktualizace firmwaru" />

Vyberte **OK**. Hub se znovu připojí a na jeho kartě se zobrazí nová verze firmwaru.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_6.png')} alt="Karta hubu s aktualizovanou verzí firmwaru" />

Nyní můžete hub s MOCPilotem dál používat.

## Pokud aktualizace selže {#if-the-update-fails}

Pokud aktualizace selže, MOCPilot zobrazí chybovou zprávu.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_7.png')} alt="Dialog o neúspěšné aktualizaci firmwaru" />

Nejprve hub vypněte a zapněte a spusťte aktualizaci znovu:

1. Vypněte hub.
2. Znovu hub zapněte.
3. Držte hub blízko svého zařízení.
4. Připojte se k hubu v MOCPilotu.
5. Spusťte aktualizaci firmwaru znovu.

Pokud hub ani potom nereaguje normálně, může potřebovat obnovu firmwaru: viz [Obnova firmwaru hubu](/docs/Application/Hubs/RecoveryHubFirmware/).
