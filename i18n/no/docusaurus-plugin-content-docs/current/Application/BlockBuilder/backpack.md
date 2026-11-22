---
id: Backpack
title: Ryggsekk
description: "Ta vare på deler av Logikkblokker-programmene dine i ryggsekken og sett dem inn i hvilken som helst profil, på alle enhetene dine."
---

import Screenshot from '@site/src/components/Screenshot';

# Ryggsekk {#backpack}

**Ryggsekken** er stedet der du tar vare på deler av blokkprogrammene dine for å bruke dem igjen i andre profiler: en styrerutine, et lysshow, en Min blokk du har skrevet én gang og vil ha overalt. Lagre en stabel med blokker i ryggsekken i én profil, og sett den deretter inn i hvilken som helst annen profil, på denne enheten eller på en hvilken som helst enhet der du er logget inn.

Ryggsekken er en del av editoren for [Logikkblokker](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing). Profiler med Hurtigkoblinger har den ikke.

<Screenshot name="backpack-panel" alt="Ryggsekk-panelet ved siden av et blokkprogram" width={900} />

## Hva ryggsekken tar vare på {#what-the-backpack-keeps}

Hvert element i ryggsekken er en **kopi** av blokkene du lagret:

- **En stabel**: blokken du valgte, sammen med alt som er festet under den og inni den, akkurat slik **Dupliser** kopierer den.
- **En Min blokk**: hvis du lagrer `define …`-blokken til en [Min blokk](/docs/Application/BlockBuilder/Blocks/MyBlocks), tar ryggsekken vare på hele definisjonen. Slike elementer er merket **Min blokk**.

Elementet husker også hvilke Mine blokker blokkene dine bruker (også via andre Mine blokker), og navnene på variablene, listene, meldingene, kjøretøyene og lydene de viser til, slik at blokkene fungerer når du setter dem inn et annet sted.

Innsatte blokker blir en vanlig del av programmet i profilen. Ingenting i profilen er avhengig av ryggsekken: sletter du eller gir nytt navn til et element, endres ikke programmene du har satt det inn i. Elementer kan ikke redigeres i ryggsekken. Vil du endre et element, setter du det inn, redigerer blokkene i programmet og lagrer dem i ryggsekken igjen som et nytt element.

## Lagre blokker i ryggsekken {#save-blocks}

1. Høyreklikk på en blokk i programmet (datamaskin), eller hold fingeren på den (telefon, nettbrett).
2. Velg **Legg i ryggsekken**.
3. Skriv inn et navn i **Navn på blokkene** og trykk **Lagre**.

Blokken og alt som er festet til den, havner i ryggsekken. For å lagre definisjonen av en Min blokk åpner du menyen på `define …`-blokken.

<Screenshot name="backpack-add" alt="Blokkmenyen med Legg i ryggsekken og navnevinduet" width={900} />

## Åpne ryggsekken {#open}

- **Datamaskin og webeditor**: **Ryggsekk**-knappen i topplinjen i editoren, **Vis → Ryggsekk** i menyen eller **Ctrl+Shift+B** (**⌘⇧B** på en Mac). Hvis vinduet er smalt, ligger knappen i **Mer**-menyen. Ryggsekken åpnes som et panel på høyre side av editoren, ved siden av [Monitor](/docs/Application/BlockBuilder/Editor#monitor) hvis den også er åpen.
- **Telefon og nettbrett**: **Mer → Ryggsekk** i topplinjen i editoren. Ryggsekken åpnes som et panel over editoren.

Knappen er uthevet mens ryggsekken er åpen. Trykk på den igjen for å lukke ryggsekken.

Hvert element viser bildet, navnet og antall blokker det inneholder (**Blokker: N**). Merknaden nederst i panelet forteller hvor ryggsekken lagres (se [nedenfor](#where-it-is-kept)).

## Sette inn blokker i et program {#insert}

- **Trykk på et element**: blokkene vises i den synlige delen av programmet.
- **Dra et element inn i programmet**: blokkene havner der du slipper dem. Dra sidelengs, mot programmet; drar du opp eller ned, ruller listen.
- **Elementmenyen (⋯)**: **Sett inn**, **Gi nytt navn…** eller **Slett**.

På telefoner og nettbrett lukkes ryggsekken etter innsettingen, slik at du ser blokkene. Ett **Angre** fjerner alt som ble satt inn.

### Hva som skjer når du setter inn {#what-happens}

- **Mine blokker**: en Min blokk som profilen allerede har med samme innhold, brukes på nytt, så setter du inn de samme blokkene igjen, lages det ingen kopier av den. Hvis en annen Min blokk i profilen bruker det samme navnet internt, får den innsatte sin egen. Setter du inn et Min blokk-element som allerede finnes i profilen, skjer ingenting, og **Finnes allerede** vises: du finner blokken under **Mine blokker**.
- **Variabler, lister, meldinger og kjøretøy**: hvis profilen har en med samme navn, bruker blokkene den; ellers opprettes den. Verdiene i variabler og innholdet i lister kopieres ikke. Hvis navnet er opptatt av noe annet, får du en melding som *Variabelen «speed» kunne ikke opprettes: navnet er i bruk*.
- **Lyder**: dine egne lyder er filer i profilen og lagres ikke i ryggsekken. Hvis profilen ikke har en lyd med det navnet, ser du *Lyden «…» finnes ikke i denne profilen: velg en lyd i blokkene*. Innebygde lyder fungerer overalt.
- **Hub- og dashboardblokker**: blokker for en hub, en dashboardkontroll eller en spillkontroller som profilen ikke har, kan ikke settes inn. Før noe endres, viser appen **Noen blokker kan ikke settes inn** med en liste over slike blokker og hvor mange som blir utelatt, og spør om de andre skal settes inn. Legg til huben eller dashboardkontrollen først hvis du vil beholde dem. Hvis ingen av blokkene passer til profilen, settes ingenting inn.

## Gi nytt navn og slette {#rename-delete}

Åpne elementmenyen (⋯):

- **Gi nytt navn…** endrer navnet på elementet.
- **Slett** fjerner det etter at du har bekreftet (**Slette fra ryggsekken?**). Programmer du har satt det inn i, beholder blokkene sine.

Ryggsekken fjerner aldri elementer av seg selv: slett det du ikke lenger trenger.

## Hvor ryggsekken lagres {#where-it-is-kept}

- **Uten konto (gjest)**: bare på denne enheten. Panelet sier *Lagret på denne enheten. Logg inn for å ha ryggsekken på alle enhetene dine.*
- **Logget inn**: også på kontoen din, slik at du har den samme ryggsekken på alle enhetene dine, også i [webeditoren](/docs/Introducing/WebEditor). Panelet sier *Lagret på kontoen din: den samme ryggsekken på alle enhetene dine.* Endringer du gjør på én enhet, vises på de andre.
- **Første innlogging**: elementer du lagret som gjest på denne enheten, flyttes til kontoen din.

Du kan bruke ryggsekken uten nett. Endringene lagres på enheten og sendes til kontoen din når tilkoblingen er tilbake (panelet viser **Synkroniserer…** så lenge). Et element som fortsatt lastes ned fra kontoen din, kan ikke settes inn ennå: appen sier **Ikke klar ennå**, så prøv igjen om et øyeblikk.

## Begrensninger {#limits}

| | Grense |
|---|---|
| Elementer i ryggsekken | 200 |
| Størrelse på ett element | omtrent 512 kB (en svært stor programdel får kanskje ikke plass: lagre en mindre del) |
| Navn på elementet | opptil 100 tegn |

Hvis ryggsekken på kontoen din er full eller et element er for stort for den, blir elementet bare liggende på denne enheten, og appen gir deg beskjed. Elementer som er lagret med en nyere versjon av appen, kan først settes inn etter at du har oppdatert appen.

## Feilsøking {#troubleshooting}

| Melding | Hva du gjør |
|---|---|
| **Ryggsekken er full (200 elementer). Slett noe du ikke trenger.** | Slett elementer du ikke lenger bruker. |
| **For mange blokker til ryggsekken. Lagre en mindre del.** | Lagre en mindre stabel, eller del programmet opp i flere elementer. |
| **Noen blokker kan ikke settes inn** | Profilen mangler en hub, en dashboardkontroll eller en spillkontroller som blokkene trenger. Legg den til og sett inn på nytt, eller sett inn de andre blokkene. |
| **Finnes allerede** | Blokken finnes allerede i denne profilen: du finner den under **Mine blokker**. |
| **Ikke klar ennå** | Elementet lastes fortsatt ned fra kontoen din. Vent et øyeblikk og prøv igjen. |
| **Disse blokkene ble lagret med en nyere versjon av appen. Oppdater appen for å bruke dem.** | Oppdater MOCPilot på denne enheten. |
