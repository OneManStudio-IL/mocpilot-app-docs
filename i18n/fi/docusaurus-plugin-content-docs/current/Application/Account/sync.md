---
id: Sync
title: Synkronointi laitteiden välillä
description: "Pidä MOCPilot-profiilit ja -asetukset synkronoituina puhelimien, tablettien, tietokoneiden ja verkkoeditorin välillä ja työskentele offline-tilassa."
---

import Screenshot from '@site/src/components/Screenshot';

# Synkronointi laitteiden välillä {#sync-between-devices}

Kun olet kirjautunut sisään, MOCPilot pitää profiilisi ja asetuksesi samoina jokaisella laitteella: puhelimessa, tabletissa, tietokoneessa ja [verkkoeditorissa](/docs/Introducing/WebEditor). Mitään ei tarvitse ottaa käyttöön: synkronointi on tilillä aina päällä.

## Miten se toimii {#how-it-works}

- Muutokset tallennetaan ensin laitteelle ja lähetetään palvelimelle, kun olet verkossa (”Synkronoidaan profiileja…”).
- Muut laitteet lataavat uuden version, kun ne ovat verkossa.
- Ostoksia ei synkronoida tiedostoina; ne kuuluvat tiliisi ja ovat käytettävissä kaikkialla, missä kirjaudut sisään.
- Verkkosivustolla lisätyt profiilit (katalogin **Add to my account**) tai verkkoeditorissa muokatut profiilit saapuvat synkronoinnin kautta.
- Vierastilassa mitään ei synkronoida: profiilit pysyvät vain tällä laitteella.

## Ristiriidat {#conflicts}

Jos samaa profiilia on muutettu kahdella laitteella ennen kuin ne ehtivät synkronoitua, tililläsi oleva versio voittaa, ja tällä laitteella oleva versiosi tallennetaan kopiona (sen nimeen lisätään ”(copy)”). MOCPilot kertoo tästä **Profiilien synkronointi** -ilmoituksella. Sama tapahtuu, jos täällä muuttamasi profiili on poistettu toisella laitteella.

Jos avaat profiilin, jota muokataan parhaillaan toisella laitteella, voit valita **Vain katselu** (muutoksia ei tallenneta) tai **Ota muokkaus haltuun**.

## Offline-käyttö {#working-offline}

Hubit, profiilisi ja ladatut teemat toimivat ilman internetyhteyttä.

- Jos MOCPilot ei saa käynnistyessään yhteyttä palvelimeen, se näyttää ilmoituksen **Ei internetyhteyttä** ja painikkeet **Työskentele offline-tilassa** ja **Yritä uudelleen**.
- Offline-tilassa yläreunassa näkyy **Offline**-merkintä. Palvelinta vaativat toiminnot (katalogi ja julkaiseminen, tekoälyrakentaja, etäohjaus, ilmoitukset, ostokset, tukiviestit) kertovat tarvitsevansa internetyhteyden.
- Offline-tilassa tekemäsi muutokset lähetetään, kun yhteys palaa. Kun sovellus näkee palvelimen taas, se näyttää ilmoituksen **Yhteys palasi** ja painikkeen **Siirry verkkoon**.

<Screenshot name="offline-prompt" alt="Ei internetyhteyttä -ilmoitus, jossa ovat Työskentele offline-tilassa- ja Yritä uudelleen -painikkeet" width={900} />

## Uloskirjautuminen {#signing-out}

Uloskirjautuminen poistaa profiilisi ja asetuksesi tältä laitteelta; ne pysyvät tililläsi ja palaavat, kun kirjaudut uudelleen sisään. Jos joitakin muutoksia ei ole vielä lähetetty, MOCPilot varoittaa ensin ja luettelee profiilit: yhdistä internetiin ja anna synkronoinnin valmistua tai valitse **Kirjaudu silti ulos** (kopio säilytetään sovelluksen Backup-kansiossa).

## Vinkkejä {#tips}

- Varmista ennen profiilin julkaisemista katalogissa, että se on synkronoitu: katalogi ottaa sen tililtäsi.
- Jos haluat siirtää profiileja laitteelle, jolla ei ole tiliä, käytä toimintoja **Jaa** ja **Tuo profiili…** `.dat`-tiedostojen kanssa. Katso [Profiilien hallinta](/docs/Application/Profiles/ManageProfiles).
