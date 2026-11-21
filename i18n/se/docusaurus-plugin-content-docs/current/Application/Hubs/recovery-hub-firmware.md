---
id: RecoveryHubFirmware
title: Återställa hubbens firmware
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Återställa hubbens firmware {#hub-firmware-recovery}

Återställning av firmware får igång en hubb som inte kan starta normalt efter en avbruten eller misslyckad firmwareuppdatering.

MOCPilot laddar upp fungerande firmware till hubben så att den kan köras och uppdateras igen. Använd återställning bara när hubben inte svarar som vanligt, när MOCPilot visar att hubben är i återställningsläge eller efter en misslyckad uppdatering.

:::warning Viktigt
Låt hubben vara påslagen och håll enheten nära den under hela återställningen. Om du stänger av Bluetooth, stänger MOCPilot, tar ut batterierna eller slår av hubben under uppladdningen kan återställningen misslyckas.
:::

## När återställning behövs {#when-recovery-is-required}

Du kan behöva återställa om:

- En firmwareuppdatering inte slutfördes.
- Hubben inte längre ansluter som en vanlig hubb.
- Hubben visas som **LEGO Bootloader** i MOCPilot.
- MOCPilot upptäcker att hubben är ansluten i återställningsläge.

Innan du börjar ska du se till att hubben har tillräckligt med batteri, att din telefon, surfplatta eller dator är laddad och att Bluetooth är påslaget.

## Hubbar som stöds {#supported-hubs}

Återställning fungerar för samma hubbar som firmwareuppdatering:

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

## Försätta Technic Hub, Boost Hub eller City Hub i återställningsläge {#put-a-technic-hub-boost-hub-or-city-hub-into-recovery-mode}

Dessa hubbar ansluter via sin bootloader:

1. Stäng av hubben.
2. Tryck på den gröna knappen och håll den intryckt.
3. Fortsätt hålla knappen tills hubbens lysdiod börjar blinka lila.
4. Släpp inte knappen medan lysdioden blinkar lila.
5. Håll fortfarande knappen intryckt, öppna **Mina Bluetooth-hubbar** i MOCPilot och anslut till hubben.
6. När hubben är ansluten i bootloader-läge kan du släppa knappen.

När hubben är i återställningsläge kan den visas som **LEGO Bootloader** i stället för sitt vanliga namn.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_2.png')} alt="Hubben LEGO Bootloader i hubblistan med åtgärden för att återställa firmware" />

## Försätta Technic Move Hub i återställningsläge {#put-a-technic-move-hub-into-recovery-mode}

Technic Move Hub återställs på ett annat sätt: den ansluter inte som **LEGO Bootloader**. I stället läser knappsekvensen nedan in fabriksfirmware **1.2.3**, som inte är avsedd för vardagligt bruk.

Så återställer du dess firmware:

1. Stäng av hubben.
2. Tryck på den gröna knappen och håll den intryckt.
3. Håll den gröna knappen intryckt i ungefär en minut.
4. Släpp knappen.
5. Vänta tills hubbens lysdiod börjar blinka vitt.
6. Öppna **Mina Bluetooth-hubbar** i MOCPilot och anslut till hubben.

När hubben ansluter upptäcker MOCPilot fabriksfirmware och erbjuder att uppdatera den till den senaste versionen. Starta uppdateringen och vänta tills den är klar.

## Starta återställningen från dialogrutan {#start-recovery-from-the-dialog}

När MOCPilot upptäcker en hubb som är ansluten i återställningsläge visas en dialogruta för återställning.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_1.png')} alt="Dialogruta om att hubbens återställningsläge har upptäckts" />

Välj **Återställ** för att börja ladda upp firmware till hubben.

Om du inte är redo väljer du **Avbryt**. Du kan starta återställningen senare från hubbens meny.

## Starta återställningen från hubbens meny {#start-recovery-from-the-hub-menu}

Så startar du återställningen själv:

1. Öppna **Mina Bluetooth-hubbar**.
2. Leta upp hubben som visas som **LEGO Bootloader**.
3. Öppna hubbens meny.
4. Välj **Återställ hubbens fasta programvara**.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_2.png')} alt="Åtgärden Återställ hubbens fasta programvara i hubbens snabbmeny" />

## Under återställningen {#during-firmware-recovery}

MOCPilot laddar upp firmware till hubben och visar förloppet.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_3.png')} alt="Förloppet för återställningen av firmware" />

Vänta tills den är klar. Flytta inte hubben från enheten, stäng inte appen, stäng inte av Bluetooth och bryt inte strömmen till hubben.

Hubben kan starta om eller återansluta flera gånger. Det är normalt: låt MOCPilot vara öppet och vänta.

## Slutföra återställningen {#finish-recovery}

När återställningen är klar visar MOCPilot en bekräftelse.

<img src={useBaseUrl('/img/hubs/firmware-recovery/fur_4.png')} alt="Dialogruta om att återställningen av firmware är klar" />

Välj **OK**. Hubben bör starta om och återansluta som en vanlig hubb i stället för **LEGO Bootloader**.

Kontrollera sedan hubben i **Mina Bluetooth-hubbar**. Om MOCPilot fortfarande ber om en firmwareuppdatering kör du en vanlig [firmwareuppdatering](/docs/Application/Hubs/FirmwareUpdating/).

## Om återställningen misslyckas {#if-recovery-fails}

Om återställningen misslyckas:

1. Håll hubben nära din enhet.
2. Stäng av hubben och slå på den igen.
3. Försätt hubben i återställningsläge igen.
4. Anslut till **LEGO Bootloader** i MOCPilot.
5. Starta **Återställ hubbens fasta programvara** igen.

Om felet visas igen upprepar du hela proceduren. Om flera försök misslyckas byter eller laddar du batterierna och försöker igen.
