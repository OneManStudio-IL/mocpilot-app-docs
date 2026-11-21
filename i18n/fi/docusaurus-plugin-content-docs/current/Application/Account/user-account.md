---
id: UserAccount
title: Tili
description: "Kirjautuminen, tilin luominen, vierastila, Microsoft Store -ostosten palauttaminen, alue, salasana, uloskirjautuminen ja tilin poistaminen."
---

import Screenshot from '@site/src/components/Screenshot';

# Tili {#account}

MOCPilot-tili pitää profiilisi, asetuksesi ja ostoksesi turvassa ja käytettävissä kaikilla laitteillasi.

## Miksi tili kannattaa {#why-have-an-account}

- Profiilit ja asetukset tallennetaan palvelimelle ja synkronoidaan laitteidesi välillä.
- Saat kaiken takaisin, jos vaihdat laitteen tai kadotat sen.
- Ostokset ja MocPilot Pro toimivat kaikilla laitteillasi ja verkkoeditorissa.
- Voit julkaista profiileja katalogissa ja saada ilmoituksia.

## Kirjautuminen {#sign-in}

Kirjoita kirjautumisnäkymässä **Sähköposti tai käyttäjätunnus** ja **Salasana** tai käytä toimintoa **Kirjaudu Googlella** / **Kirjaudu Apple ID:llä**.

<Screenshot name="sign-in" alt="MOCPilotin kirjautumisnäkymä" width={900} />

**Kirjaudu QR-koodilla** kirjaa sinut sisään tällä laitteella, kun skannaat koodin puhelimellasi ja vahvistat Face ID:llä tai sormenjäljellä. Se vaatii puhelimeen pääsyavaimen: lisää sellainen kerran osoitteessa mocpilot.com kohdassa **Account → Settings → Passkeys**.

## Tilin luominen {#create-an-account}

Napauta **Luo tili**: kirjoita sähköpostiosoitteesi kahdesti, käyttäjänimi ja salasana (kahdesti) ja vahvista alueesi. Voit myös käyttää toimintoa **Jatka Googlella** / **Jatka Apple ID:llä**. Vahvista sähköpostiosoitteesi aktivointiviestin avulla; osa toiminnoista on poissa käytöstä, kunnes tili on vahvistettu (napauta **Lähetä aktivointiviesti uudelleen**, jos viesti ei tullut).

## Unohtunut salasana {#forgot-your-password}

Napauta **Nollaa** kohdan ”Unohtuiko salasana?” vieressä, kirjoita sähköpostiosoitteesi ja syötä sähköpostin koodi asettaaksesi uuden salasanan.

## Vierastila {#guest-mode}

Kirjautumisnäkymän **Jatka ilman tiliä** avaa lyhyen näkymän, joka kertoo, mitä tili tarjoaa. Napauta siellä uudelleen **Jatka ilman tiliä** aloittaaksesi sovelluksen käytön heti. Kaikki pysyy vain tällä laitteella ja katoaa, jos poistat sovelluksen tai kadotat laitteen.

Voit kirjautua sisään myöhemmin: napauta puhelimessa **Asetusten** yläosassa **Luo tili tai kirjaudu sisään**; avaa tabletissa tai tietokoneella **Tili** (vierastilassa **Kirjaudu sisään**), joka näyttää saman näkymän ja vaihtoehdot **Luo tili** ja **Onko sinulla jo tili?**.

### Microsoft Store -ostosten palauttaminen {#restore-microsoft-store-purchases}

Windowsissa vierasnäkymässä on myös **Palauta Microsoft Store -ostokset**. Microsoft Store -ostokset kuuluvat Microsoft-tilille, jota käytät Windowsissa, joten et tarvitse MOCPilot-tiliä niiden palauttamiseen: napsauta painiketta (sovellus tarvitsee internetyhteyden), niin sovellus tarkistaa Microsoft Storen (**Tarkistetaan Microsoft Storea...**) ja avaa tällä PC:llä sen, mitä kyseinen Microsoft-tili on ostanut, MocPilot Pro -tilaus mukaan lukien.

<Screenshot name="guest-mode-windows" alt="Vierasnäkymä Windowsissa ja Palauta Microsoft Store -ostokset -painike" width={900} />

## Alue {#region}

Jos tilisi luotiin ennen kuin MOCPilot alkoi kysyä aluetta, sovellus kysyy sitä kerran jokaisella laitteella muutama sekunti kirjautumisen jälkeen: **Aseta alueesi**. Alueen avulla sovellus tarjoaa oikean kaupan ja hinnat. Napauta **Valitse** valitaksesi maasi kohdassa **Tilin tiedot** tai **Ei nyt** ohittaaksesi. Voit vaihtaa alueen milloin tahansa kohdassa **Tilin tiedot**.

## Tilisivu {#account-page}

Puhelin: **Asetukset → Tili**. Tabletti: tilisi sivupalkin alaosassa. Tietokone: yläpalkin **Tili**-painike.

- **Tilin tiedot**: käyttäjätunnus, sähköposti, alue ja tilin tunnus (kopioi kohde napauttamalla sitä).
- **Ostokset**: katso [MocPilot Pro ja ostokset](/docs/Application/Account/Pro#purchases).
- **Vaihda salasana**.
- **Kirjaudu ulos**: katso [Uloskirjautuminen](/docs/Application/Account/Sync#signing-out).
- **Poista tili**.

## Tilin poistaminen {#delete-your-account}

**Poista tili** poistaa tilisi tiedot pysyvästi: henkilötiedot, asetukset, historian ja palvelimelle tallennetut profiilit. Menetät myös pääsyn kaikkeen tiliin liitettyyn ostettuun tai tilattuun sisältöön. Tätä ei voi perua.

Kirjoita nykyinen salasanasi ja vahvista toiminnolla **Vedä poistaaksesi tilin** (kosketusnäytöt) tai **Poista tili** (tietokone).

Aktiivista tilausta hallitaan kaupassa: peruuta se siellä ennen tilin poistamista.

## Ilmoitukset {#notifications}

**Ilmoitukset** (tietokoneella kello; puhelimessa ja tabletissa **Ilmoitukset**-välilehti) näyttää julkaisemiesi profiilien tarkistustulokset, vastaukset tukipyyntöihisi ja MOCPilot-tiimin uutiset. Voit merkitä ne luetuiksi, valita ne ja poistaa ne. Ilmoitukset vaativat tilin.
