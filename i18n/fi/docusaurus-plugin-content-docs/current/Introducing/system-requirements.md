---
id: SystemRequirements
title: Järjestelmävaatimukset
description: "MOCPilotin tukemat käyttöjärjestelmät, Bluetooth, muisti ja selaimet."
---

# Järjestelmävaatimukset {#system-requirements}

MOCPilot toimii puhelimissa, tableteissa ja tietokoneissa. Mallin ajamiseen laite tarvitsee lisäksi Bluetoothin ja [tuetun hubin](/docs/Introducing/SupportedDevices).

## Käyttöjärjestelmät {#operating-systems}

| Alusta | Vähimmäisversio | Mistä saat sen |
|---|---|---|
| iPhone ja iPad | iOS / iPadOS 17 | App Store |
| Android-puhelimet ja -tabletit | Android 10 | Google Play |
| Mac | macOS 13 Ventura | App Store |
| Windows-PC (64-bittinen, x64) | Windows 10 -versio 1809 tai Windows 11 | Microsoft Store |

Kauppojen linkit löydät osoitteesta [mocpilot.com](https://mocpilot.com). Sovellus valitsee puhelin-, tabletti- tai työpöytäasettelun itse; katso [Puhelin, tabletti ja työpöytä](/docs/Introducing/Layouts).

## Bluetooth {#bluetooth}

- Hubit yhdistetään **Bluetooth Low Energy** -yhteydellä (Bluetooth 4.0 tai uudempi). Se on lähes jokaisessa puhelimessa ja tabletissa; tietokoneessa voit käyttää sisäänrakennettua sovitinta tai USB-Bluetooth-sovitinta.
- **Robot Inventor** -hubi käyttää perinteistä Bluetoothia. Se toimii Androidissa, Macissa ja Windowsissa, mutta ei iPhonessa eikä iPadissa.
- **Mould King** -hubit vastaanottavat komennot Bluetooth-lähetyksinä (advertising). Windowsissa Mould King 6.0 tarvitsee sovittimen ja ajurin, jotka pystyvät lähettämään, eikä Mould King 4.0 toimi lainkaan; käytä sen kanssa puhelinta tai tablettia.
- Sovellus pyytää Bluetooth-luvan (Androidissa myös Lähellä olevat laitteet- tai Sijainti-luvan). Katso [Bluetooth ja käyttöoikeudet](/docs/Help/BluetoothPermissions).

## Muisti {#memory}

Laitteissa, joissa on alle 4 Gt muistia, MOCPilot piirtää Logiikkalohkot yksinkertaisemmin, jotta suuretkin ohjelmat pysyvät sujuvina. Tämä tapahtuu automaattisesti; lohkot toimivat samalla tavalla.

## Verkkoeditori {#web-editor}

Osoitteessa mocpilot.com oleva [verkkoeditori](/docs/Introducing/WebEditor) toimii selaimessa:

- käytä ajantasaista työpöytäselainta; editori tarvitsee WebAssemblyn;
- ensimmäisellä avauskerralla ladataan noin 20 Mt editoria varten ja noin 15 Mt teemoja, joten nopea yhteys auttaa;
- selaimet eivät voi yhdistää Bluetooth-hubeihin: aja mallia selaimesta [etäohjauksella](/docs/Application/Profiles/RemoteControl), joka vaatii WebRTC:tä tukevan selaimen;
- jos näet ilmoituksen ”The editor could not start in this browser.”, päivitä selain tai kokeile toista.

## Internet {#internet}

Hubit, profiilisi ja ladatut teemat toimivat offline-tilassa. Kirjautuminen, synkronointi, katalogi, tekoälyrakentaja, etäohjaus ja ostokset vaativat internetyhteyden. Katso [Offline-käyttö](/docs/Application/Account/Sync#working-offline).
