---
id: HowItWorks
title: Miten MOCPilot toimii
description: "Profiilit, kojelauta, hubit ja ohjelma: jokaisen MOCPilot-mallin neljä osaa."
---

import HowItWorks from '@site/src/components/HowItWorks';
import Screenshot from '@site/src/components/Screenshot';

# Miten MOCPilot toimii {#how-mocpilot-works}

Kaikki MOCPilotissa rakentuu neljästä osasta. Kun tunnet ne, jokainen näkymä on helppo ymmärtää.

<HowItWorks />

## 1. Profiili: yksi malli {#1-profile-one-model}

**Profiili** sisältää kaiken yhdestä mallista: sen hubit, kojelaudan ja ohjelman. Tee jokaiselle mallille oma profiili, esimerkiksi ”Technic Buggy” tai ”Nosturiauto”.

Kun luot profiilin, valitset sen **ohjelman tyypin**: Logiikkalohkot tai Pikalinkit. Sitä ei voi muuttaa myöhemmin. Katso [Profiilin luominen](/docs/Application/Profiles/CreateProfile).

## 2. Hubit: mallin elektroniikka {#2-hubs-the-models-electronics}

**Hubit** ovat mallisi Bluetooth-palikoita; moottorit, valot ja anturit kytketään niiden portteihin. Profiilissa on hubien **paikat**. Lisäät mallisi hubit paikkoihin kerran, ja MOCPilot yhdistää niihin aina, kun avaat profiilin. Katso [Hubit](/docs/Application/Hubs/HubsOverview).

## 3. Kojelauta: ohjaimesi {#3-dashboard-your-controls}

**Kojelauta** on näkymä, josta ajat mallia. Sijoitat ohjaimet ruudukkoon: ohjainsauvat, liukusäätimet, painikkeet, kytkimet, askelkytkimet ja näytöt sekä erikoisohjaimet, kuten ohjauspyörän ja polkimet. Ohjain ei tee yksinään mitään; se välittää arvonsa ohjelmalle. Katso [Kojelauta](/docs/Application/Dashboard/DashboardOverview).

Voit käyttää myös peliohjainta kojelaudan kanssa tai sen sijaan. Katso [Peliohjain](/docs/Application/Dashboard/Gamepad).

## 4. Ohjelma: mikä yhdistää ne {#4-program-what-connects-them}

**Ohjelma** päättää, mitä tapahtuu, kun liikutat ohjainta: mikä moottori pyörii ja kuinka nopeasti, mikä valo vilkkuu ja mitä näyttö näyttää.

- **Pikalinkeissä** ohjelma on luettelo rivejä: *syöte → käsittely → toiminto → hubi*. Katso [Pikalinkit](/docs/Application/Links/LinksIntroducing).
- **Logiikkalohkoissa** ohjelma koostuu lohkoista: tapahtumista, silmukoista, ehdoista, muuttujista ja antureista. Katso [Logiikkalohkot](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing).

## 5. Suorita {#5-run}

Paina **Suorita** (▶). Ohjelma käynnistyy, kojelaudan ohjaimet heräävät eloon ja malli reagoi. Palaa muokkaamaan painamalla **Pysäytä**. Katso [Mallin ajaminen](/docs/Application/Profiles/PlayMode).

<Screenshot name="links-editor" alt="Pikalinkit-ohjelma: kojelaudan ohjaimet yhdistettyinä hubin portteihin" width={900} />

## Tyypillinen käyttökerta {#a-typical-session}

1. Avaa profiili tai [luo uusi](/docs/Application/Profiles/CreateProfile).
2. Lisää hubisi kohdassa **Omat hubit** ja kytke ne päälle.
3. Sijoita ohjaimet **Kojelautaan**.
4. Yhdistä ne moottoreihin ja valoihin **ohjelmassa**.
5. Paina **Suorita**, aja, säädä ja toista.

## Mitä tallennetaan minne {#what-is-stored-where}

- Profiilit tallennetaan laitteellesi. Kun olet kirjautunut sisään, ne tallennetaan myös tiliisi ja näkyvät kaikilla laitteillasi. Katso [Synkronointi laitteiden välillä](/docs/Application/Account/Sync).
- Teemat ja muut ostokset kuuluvat tiliisi. Katso [MocPilot Pro ja ostokset](/docs/Application/Account/Pro).
