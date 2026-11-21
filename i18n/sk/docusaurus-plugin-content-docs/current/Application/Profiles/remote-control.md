---
id: RemoteControl
title: Diaľkové ovládanie
description: "Spustite profil na telefóne, tablete alebo počítači pri modeli a ovládajte ho z iného zariadenia alebo z webového editora."
---

import Screenshot from '@site/src/components/Screenshot';

# Diaľkové ovládanie {#remote-control}

Diaľkové ovládanie vám umožní riadiť model, ktorý je pripojený k inému zariadeniu. Jedno zariadenie zostáva pri modeli a komunikuje s hubmi cez Bluetooth; druhé držíte v ruke a používate jeho panel. Rovnako riadite model aj z [webového editora](/docs/Introducing/WebEditor), pretože prehliadače sa k hubom pripojiť nedokážu.

## Dve zariadenia {#the-two-devices}

- **Zariadenie s hubmi** je telefón, tablet alebo počítač pri modeli. Jeho aplikácia MOCPilot pripája huby a spúšťa profil. Nepotrebuje účet.
- **Diaľkový ovládač** je to, z čoho ovládate: aplikácia MOCPilot na inom zariadení alebo webový editor na [mocpilot.com](https://mocpilot.com). Profil sa otvára na diaľkovom ovládači a ten ho posiela zariadeniu s hubmi.

## Čo potrebujete {#what-you-need}

- [MocPilot Pro](/docs/Application/Account/Pro) na účte prihlásenom na **diaľkovom ovládači**. Zariadenie s hubmi nepotrebuje účet ani Pro.
- Aplikáciu MOCPilot na zariadení s hubmi.
- Pripojenie na internet na oboch zariadeniach.

## Pripojenie zariadenia s hubmi {#connect-a-hub-device}

1. Na diaľkovom ovládači otvorte profil a na hornej lište profilu stlačte **Diaľkové ovládanie** (ikona diaľkového ovládania: domček s oblúkmi signálu). Vo webovom editore stlačte v otvorenom paneli **Zobraziť kód**.

   Diaľkový ovládač zobrazí **kód pripojenia**: QR kód a 6 číslic.
2. Na zariadení s hubmi otvorte MOCPilot a na stránke **Moje profily** ťuknite na **Pripojiť diaľkový ovládač**. Na Macu môžete zvoliť aj **Súbor → Pripojiť diaľkový ovládač…**.
3. Zadajte kód:
   - **na telefóne alebo tablete** namierte fotoaparát na QR kód, alebo ťuknite na **Zadať kód** a zadajte 6 číslic;
   - **na počítači** zadajte 6 číslic a stlačte **Pripojiť**.
4. Zariadenia sa prepoja. Diaľkový ovládač pošle profil zariadeniu s hubmi a spustí ho na ňom a zariadenie s hubmi zobrazí stránku **Diaľkové ovládanie** na celú obrazovku.

<Screenshot name="remote-control-code" alt="Panel Diaľkové ovládanie v otvorenom profile s QR kódom a 6-miestnym kódom" width={900} />

O kóde pripojenia:

- Funguje raz a platí 5 minút. Kým ho diaľkový ovládač zobrazuje, po vypršaní ho nahradí nový kód.
- Skenujte ho v aplikácii MOCPilot, nie v aplikácii fotoaparátu telefónu.
- Ak panel na diaľkovom ovládači zatvoríte skôr, než sa zariadenie s hubmi pripojí, nič sa nenastaví; pre nový kód znova stlačte **Diaľkové ovládanie**.

<Screenshot name="remote-connect-code-entry" alt="Okno Pripojiť diaľkový ovládač na počítači s poľom pre 6 číslic" width={900} />

## Keď sú zariadenia prepojené {#when-the-devices-are-connected}

**Na diaľkovom ovládači:**

- Tlačidlo **Diaľkové ovládanie** zozelenie (na telefóne alebo tablete zelený krúžok) a jeho panel ukazuje názov zariadenia s hubmi a tlačidlo **Odpojiť**.
- **Moje huby** zobrazujú huby zariadenia s hubmi. Huby odtiaľ pripájajte ako zvyčajne: hľadá ich zariadenie s hubmi, takže keď budete vyzvaní, stlačte tlačidlo na hube.
- Panel ovláda model.

**Na zariadení s hubmi** ukazuje stránka **Diaľkové ovládanie** na celú obrazovku:

- stav, napríklad **Beží «Moje auto»**;
- **Pripojené huby: N** a počas hľadania **Hľadanie hubu: stlačte tlačidlo na hube.**;
- pripomienku: **Nechajte aplikáciu otvorenú. Toto je zariadenie s hubmi: pripája huby a spúšťa profil, diaľkový ovládač ho len ovláda.**;
- tlačidlo **Zastaviť**.

Obrazovka zariadenia s hubmi zostáva počas pripojenia zapnutá. Profil sa na zariadení s hubmi neukladá a nezobrazuje sa v jeho zozname profilov.

<Screenshot name="remote-hub-device" alt="Stránka Diaľkové ovládanie na celú obrazovku na zariadení s hubmi so stavom pripojenia, počtom pripojených hubov a tlačidlom Zastaviť" width={900} />

## Spustiť a Zastaviť {#run-and-stop}

- Stlačením **Zastaviť** na diaľkovom ovládači zastavíte profil na zariadení s hubmi. Zariadenie s hubmi vždy zastaví všetky motory, aj keď je v profile vypnuté **Zastaviť porty hubu pri zastavení programu**.
- Stlačením **Spustiť** na diaľkovom ovládači ho na zariadení s hubmi znova spustíte.
- Vo webovom editore zostáva zariadenie s hubmi spárované pre každý profil, ktorý otvoríte v tej istej karte prehliadača: **Spustiť** spustí profil na zariadení s hubmi. Keď nie je spárované žiadne zariadenie s hubmi, **Spustiť** spustí profil v prehliadači, bez hubov.

## Ak sa spojenie preruší {#if-the-connection-drops}

:::caution Bezpečnosť
Ak zariadenie s hubmi 4 sekundy nedostane od diaľkového ovládača žiadnu správu, zastaví profil aj všetky motory.
:::

Potom:

- zariadenie s hubmi zobrazí **Spojenie s diaľkovým ovládačom sa stratilo. Profil bol zastavený. Čaká sa na diaľkový ovládač…** a čaká;
- aplikácia na diaľkovom ovládači zobrazí **Spojenie sa stratilo. Skúšam znova…** s možnosťami **Skúsiť znova** a **Odpojiť**;
- webový editor zobrazí **Zariadenie s hubmi sa odpojilo**: „*zariadenie* neodpovedá. Profil na ňom bol zastavený a motory vypnuté.“ Neustále sa pokúša znova pripojiť; môžete stlačiť aj **Znova pripojiť**, **Spustiť v prehliadači** alebo **Zastaviť**.

Keď sú zariadenia znova prepojené, skontrolujte stav na diaľkovom ovládači a ak profil nebeží, stlačte **Spustiť**.

## Odpojenie {#disconnect}

- **Na diaľkovom ovládači**: stlačte **Diaľkové ovládanie** a zvoľte **Odpojiť**.
- **Na zariadení s hubmi**: na stránke **Diaľkové ovládanie** stlačte **Zastaviť**.

V oboch prípadoch sa profil aj motory zastavia a zariadenie s hubmi profil zatvorí.

## Riešenie problémov {#troubleshooting}

| Správa | Kde | Čo robiť |
|---|---|---|
| **Diaľkové ovládanie je súčasťou MocPilot Pro** | diaľkový ovládač | Predplaťte si [MocPilot Pro](/docs/Application/Account/Pro) na účte diaľkového ovládača. V prehliadači sa predplatiť nedá: urobte to v aplikácii a Pro bude fungovať aj vo webovom editore |
| **Žiadne spojenie so serverom** | obe | Skontrolujte pripojenie na internet a skúste to znova |
| **Nepodarilo sa získať kód zo servera** | diaľkový ovládač | Stlačením **Zobraziť kód** to skúste znova |
| **Nesprávny alebo neplatný kód. Skontrolujte 6 číslic zobrazených na ovládači.** | zariadenie s hubmi | Zadajte 6 číslic, ktoré diaľkový ovládač práve zobrazuje |
| **Platnosť kódu vypršala. Zobrazte na ovládači nový kód a naskenujte ho znova.** | zariadenie s hubmi | Na diaľkovom ovládači stlačte **Diaľkové ovládanie** a naskenujte nový kód |
| **Toto nie je kód MOCPilot. Naskenujte kód, ktorý zobrazuje diaľkový ovládač.** | zariadenie s hubmi | Naskenujte QR kód v paneli **Diaľkové ovládanie** na diaľkovom ovládači |
| **Príliš veľa nesprávnych kódov. Skúste to znova o pár minút.** | zariadenie s hubmi | Počkajte niekoľko minút a potom zadajte aktuálny kód |
| **Na skenovanie kódu povoľte aplikácii MOCPilot používať kameru v systémových nastaveniach.** | zariadenie s hubmi | Povoľte prístup ku kamere v systémových nastaveniach, alebo ťuknite na **Zadať kód** a zadajte 6 číslic |
| **Diaľkový ovládač neodpovedá. Skontrolujte, či je na ňom otvorený profil a či je online.** | zariadenie s hubmi | Nechajte profil na diaľkovom ovládači otvorený a skontrolujte jeho pripojenie na internet |
| **Táto verzia aplikácie sa nemôže pripojiť k diaľkovému ovládaču** | obe | Aktualizujte MOCPilot |
| **Tento prehliadač nemôže otvoriť priame spojenie (WebRTC)** | webový editor | Použite iný prehliadač, napríklad Chrome, Edge alebo Safari |
| **Profil je príliš veľký** / **Profil neprišiel celý** | obe | Skontrolujte pripojenie a znova stlačte **Spustiť** |
| **Druhé zariadenie nemohlo profil uložiť** / **Druhé zariadenie nemohlo profil otvoriť** | diaľkový ovládač | Znova stlačte **Spustiť**; ak sa to opakuje, zariadenie s hubmi odpojte a znova pripojte |
| **Spojenie s *zariadením* sa stratilo** / **Spojenie s ovládačom sa stratilo. Čaká sa naň…** | obe | Pozrite si [Ak sa spojenie preruší](#if-the-connection-drops) |
