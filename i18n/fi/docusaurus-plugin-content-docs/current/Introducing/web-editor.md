---
id: WebEditor
title: Verkkoeditori
description: "Muokkaa MOCPilot-profiilejasi selaimessa osoitteessa mocpilot.com ja aja mallia toisella laitteella olevan sovelluksen kautta."
---

import Screenshot from '@site/src/components/Screenshot';

# Verkkoeditori osoitteessa mocpilot.com {#web-editor-on-mocpilotcom}

Verkkoeditori on selaimessasi toimiva MOCPilot. Se on sama sovellus samoine editoreineen, kojelautoineen ja teemoineen, joten kaikki tämän dokumentaation tiedot pätevät myös siihen.

Selaimet eivät voi viestiä Bluetooth-hubien kanssa, joten verkkoeditori on tarkoitettu **muokkaamiseen**. Testaa profiilia suorittamalla se selaimessa ilman hubeja; mallin ajamista varten anna puhelimen, tabletin tai tietokoneen MOCPilot-sovelluksen yhdistää hubit (katso [Etäohjaus](/docs/Application/Profiles/RemoteControl)).

## Kokeile ilman tiliä {#try-it-without-an-account}

[mocpilot.com](https://mocpilot.com)-etusivulla kummallakin editorilla (Logiikkalohkot ja Pikalinkit) on **Try demo** -painike, joka avaa esittelyprofiilin. Esittely ei vaadi tiliä eikä hubeja. Voit kokeilla siinä kaikkia teemoja ja erikoisohjaimia; mitään ei tallenneta.

## Muokkaa omia profiilejasi {#edit-your-own-profiles}

1. Kirjaudu sisään osoitteessa [mocpilot.com](https://mocpilot.com) MOCPilot-tililläsi.
2. Avaa profiilisi ja napsauta jonkin niistä kohdalla **Muokkaa**.
3. Muuta hubeja, kojelautaa tai ohjelmaa aivan kuten sovelluksessa.
4. Sulje profiili (Koti-painike). Editori tallentaa profiilin ja lähettää sen palvelimelle, ja muutos päätyy laitteidesi sovellukseen [synkronoinnin](/docs/Application/Account/Sync) kautta.

Huomioita:

- Voit muokata vain sen tilin profiileja, jolla olet kirjautunut sisään. Muuten näet ilmoituksen ”Tämä profiili ei ole tililläsi” ja **Takaisin verkkosivustolle** -painikkeen.
- Ostoksesi ja MocPilot Pro toimivat selaimessa samoin kuin sovelluksessa.
- Työpöytäselaimessa kojelauta on kelluva paneeli, jota voi siirtää ja jonka kokoa voi muuttaa.
- Teemat ladataan uudelleen jokaisella käyntikerralla (noin 15 Mt), joten ensimmäinen avaus voi kestää hetken.
- `.dat`-tiedostojen tuonti ja vienti ei ole käytettävissä selaimessa; käytä sovellusta.

## Profiilin suorittaminen {#run-a-profile}

Verkkoeditorin **Suorita** suorittaa profiilin selaimessa: jokainen lohko ja rivi toimii Bluetoothia lukuun ottamatta, mikä sopii hyvin logiikan, näyttöjen ja kojelaudan testaamiseen. Kun hub-laite on yhdistetty pariksi (MocPilot Pro, katso alla), **Suorita** käynnistää profiilin sen sijaan hub-laitteella.

## Etäohjaus {#remote-control}

[MocPilot Prolla](/docs/Application/Account/Pro) verkkoeditori voi toimia **kauko-ohjaimena**: mallin lähellä olevan puhelimen, tabletin tai tietokoneen MOCPilot-sovellus (**hub-laite**) yhdistää hubit ja suorittaa profiilin, ja selainsivu ohjaa sitä. Paina profiilin yläpalkissa **Etäohjaus** ja sitten **Näytä koodi**, ja napauta hub-laitteen **Omat profiilit** -sivulla **Yhdistä kauko-ohjain** ja skannaa koodi. Katso [Etäohjaus](/docs/Application/Profiles/RemoteControl).
