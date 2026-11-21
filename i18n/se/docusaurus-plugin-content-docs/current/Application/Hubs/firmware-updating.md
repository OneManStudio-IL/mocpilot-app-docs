---
id: FirmwareUpdating
title: Uppdatera firmware
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Uppdatera firmware {#firmware-updating}

MOCPilot kan uppdatera firmware i LEGO® Powered Up-hubbar som stöds när en nyare kompatibel version finns.

Vissa hubbar behöver uppdateras innan de fungerar korrekt med MOCPilot: nyare firmware rättar fel i hubben och lägger till funktioner som appen är beroende av.

## Hubbar som stöds {#supported-hubs}

MOCPilot kan uppdatera dessa hubbar:

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

## Innan du börjar {#before-you-start}

Se till att både hubben och din telefon, surfplatta eller dator har tillräckligt med batteri.

Låt hubben vara påslagen under hela uppdateringen och håll enheten nära den så att Bluetooth-anslutningen förblir stabil. Stäng inte MOCPilot, stäng inte av Bluetooth och slå inte av hubben medan firmware laddas upp.

:::warning Viktigt
En avbruten uppdatering kan lämna hubben med ofullständig firmware. Hubben kan då behöva en återställning av firmware innan du kan använda den igen.
:::

## Starta uppdateringen {#starting-the-update}

När du ansluter en hubb kontrollerar MOCPilot dess firmwareversion. Om en nyare version krävs visar appen dialogrutan **Firmwareuppdatering krävs**.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_1.png')} alt="Dialogrutan Firmwareuppdatering krävs" />

Välj **Uppdatera** för att starta firmwareuppdateringen direkt.

Om du vill uppdatera senare väljer du **Avbryt**. Du kan när som helst starta uppdateringen från hubbens meny.

## Uppdatera senare från hubbens meny {#updating-later-from-the-hub-menu}

Så startar du uppdateringen själv:

1. Öppna **Mina Bluetooth-hubbar**.
2. Leta upp hubben som behöver uppdateras.
3. Öppna hubbens meny.
4. Välj **Uppdatera fast programvara**.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_2.png')} alt="Åtgärden Uppdatera fast programvara i hubbens snabbmeny" />

## Under firmwareuppdateringen {#during-the-firmware-update}

MOCPilot laddar upp firmware till hubben och visar förloppet.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_3.png')} alt="Förloppet för firmwareuppdateringen" />

Vänta tills uppladdningen är klar. Hubben kan starta om eller kopplas från en kort stund medan den nya firmware installeras.

Därefter söker MOCPilot efter hubben igen. Håll hubben i närheten och vänta tills appen har återanslutit.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_4.png')} alt="Firmware uppladdad, sökning efter hubben pågår" />

## Slutföra uppdateringen {#finishing-the-update}

När uppdateringen är klar visar MOCPilot en bekräftelse.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_5.png')} alt="Dialogruta om att firmwareuppdateringen är klar" />

Välj **OK**. Hubben återansluter och dess kort visar den nya firmwareversionen.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_6.png')} alt="Hubbkort med den uppdaterade firmwareversionen" />

Nu kan du fortsätta använda hubben med MOCPilot.

## Om uppdateringen misslyckas {#if-the-update-fails}

Om uppdateringen misslyckas visar MOCPilot ett felmeddelande.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_7.png')} alt="Dialogruta om att firmwareuppdateringen misslyckades" />

Stäng först av hubben, slå på den igen och kör uppdateringen en gång till:

1. Stäng av hubben.
2. Slå på hubben igen.
3. Håll hubben nära din enhet.
4. Anslut till hubben i MOCPilot.
5. Starta firmwareuppdateringen igen.

Om hubben fortfarande inte svarar som vanligt kan den behöva en återställning av firmware: se [Återställa hubbens firmware](/docs/Application/Hubs/RecoveryHubFirmware/).
