---
id: WebEditor
title: Webový editor
description: "Upravujte svoje profily MOCPilot v prehliadači na mocpilot.com a riaďte model cez aplikáciu na inom zariadení."
---

import Screenshot from '@site/src/components/Screenshot';

# Webový editor na mocpilot.com {#web-editor-on-mocpilotcom}

Webový editor je MOCPilot spustený vo vašom prehliadači. Je to tá istá aplikácia s rovnakými editormi, panelom a témami, takže všetko v tejto dokumentácii platí aj preň.

Prehliadače nedokážu komunikovať s Bluetooth hubmi, preto je webový editor určený na **úpravy**. Ak chcete profil otestovať, spustite ho v prehliadači bez hubov; ak chcete riadiť model, nechajte huby pripojiť aplikáciu MOCPilot na telefóne, tablete alebo počítači (pozrite si [Diaľkové ovládanie](/docs/Application/Profiles/RemoteControl)).

## Vyskúšajte bez účtu {#try-it-without-an-account}

Na domovskej stránke [mocpilot.com](https://mocpilot.com) má každý editor (Logické bloky aj Rýchle prepojenia) tlačidlo **Vyskúšať demo**, ktoré otvorí ukážkový profil. Demo nepotrebuje účet ani huby. V deme môžete vyskúšať každú tému a každý špeciálny ovládací prvok; nič sa neukladá.

## Úprava vlastných profilov {#edit-your-own-profiles}

1. Prihláste sa na [mocpilot.com](https://mocpilot.com) svojím účtom MOCPilot.
2. Otvorte svoje profily a pri jednom z nich kliknite na **Upraviť**.
3. Zmeňte huby, panel alebo program, rovnako ako v aplikácii.
4. Zatvorte profil (tlačidlo Domov). Editor profil uloží a nahrá a zmena sa cez [synchronizáciu](/docs/Application/Account/Sync) dostane do aplikácie na vašich zariadeniach.

Poznámky:

- Upravovať môžete iba profily účtu, ktorým ste prihlásení. Inak sa zobrazí „Tento profil nie je vo vašom účte“ a tlačidlo **Späť na web**.
- Vaše nákupy a MocPilot Pro fungujú v prehliadači rovnako ako v aplikácii.
- V prehliadači na počítači je panel plávajúce okno, ktoré môžete presúvať a meniť jeho veľkosť.
- Témy sa sťahujú znova pri každej návšteve (približne 15 MB), takže prvé otvorenie môže chvíľu trvať.
- Import a export súborov `.dat` nie je v prehliadači k dispozícii; použite aplikáciu.

## Spustenie profilu {#run-a-profile}

**Spustiť** vo webovom editore spustí profil v prehliadači: funguje každý blok aj riadok okrem Bluetooth, čo sa hodí na testovanie logiky, monitorov a panela. Keď je spárované zariadenie s hubmi (MocPilot Pro, pozrite nižšie), **Spustiť** namiesto toho spustí profil na zariadení s hubmi.

## Diaľkové ovládanie {#remote-control}

S [MocPilot Pro](/docs/Application/Account/Pro) môže byť webový editor **diaľkovým ovládačom**: aplikácia MOCPilot na telefóne, tablete alebo počítači pri modeli (**zariadenie s hubmi**) pripája huby a spúšťa profil a stránka v prehliadači ho ovláda. Stlačte **Diaľkové ovládanie** na hornej lište profilu a potom **Zobraziť kód** a na zariadení s hubmi ťuknite na stránke **Moje profily** na **Pripojiť diaľkový ovládač** a naskenujte kód. Pozrite si [Diaľkové ovládanie](/docs/Application/Profiles/RemoteControl).
