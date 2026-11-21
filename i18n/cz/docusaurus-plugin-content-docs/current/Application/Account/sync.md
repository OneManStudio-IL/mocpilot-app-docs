---
id: Sync
title: Synchronizace mezi zařízeními
description: "Udržujte profily a nastavení MOCPilotu synchronizované mezi telefony, tablety, počítači a webovým editorem a pracujte offline."
---

import Screenshot from '@site/src/components/Screenshot';

# Synchronizace mezi zařízeními {#sync-between-devices}

Když jste přihlášeni, udržuje MOCPilot vaše profily a nastavení stejné na všech zařízeních: na telefonu, tabletu, počítači i ve [webovém editoru](/docs/Introducing/WebEditor). Nic nemusíte zapínat: s účtem je synchronizace zapnutá vždy.

## Jak to funguje {#how-it-works}

- Změny se nejprve uloží v zařízení a nahrají se, jakmile jste online („Synchronizace profilů…“).
- Ostatní zařízení si novou verzi stáhnou, když jsou online.
- Nákupy se nesynchronizují jako soubory; patří k vašemu účtu a jsou k dispozici všude, kde se přihlásíte.
- Profily přidané na webu (**Add to my account** v katalogu) nebo upravené ve webovém editoru dorazí díky synchronizaci.
- V režimu hosta se nic nesynchronizuje: profily zůstávají jen v tomto zařízení.

## Konflikty {#conflicts}

Pokud byl stejný profil změněn na dvou zařízeních dřív, než se synchronizovala, vyhraje verze z vašeho účtu a vaše verze v tomto zařízení se uloží jako kopie (k názvu se přidá „(copy)“). MOCPilot vás na to upozorní zprávou **Synchronizace profilů**. Totéž se stane, pokud byl profil, který jste změnili zde, na jiném zařízení smazán.

Pokud otevřete profil, který se právě upravuje na jiném zařízení, můžete zvolit **Pouze zobrazit** (změny se neuloží), nebo **Převzít úpravy**.

## Práce offline {#working-offline}

Huby, vaše profily a stažené motivy fungují bez internetu.

- Pokud se MOCPilot při spuštění nemůže spojit se serverem, zobrazí **Žádné připojení k internetu** s tlačítky **Pracovat offline** a **Zkusit znovu**.
- Když jste offline, je nahoře zobrazen štítek **Offline**. Funkce, které potřebují server (katalog a publikování, AI tvůrce, dálkové ovládání, oznámení, nákupy, zprávy podpoře), vám oznámí, že vyžadují připojení k internetu.
- Změny provedené offline se nahrají, jakmile se připojení obnoví. Když aplikace server znovu uvidí, zobrazí **Připojení je zpět** s tlačítkem **Přejít online**.

<Screenshot name="offline-prompt" alt="Zpráva Žádné připojení k internetu s tlačítky Pracovat offline a Zkusit znovu" width={900} />

## Odhlášení {#signing-out}

Odhlášení odstraní vaše profily a nastavení z tohoto zařízení; zůstanou ve vašem účtu a vrátí se, když se znovu přihlásíte. Pokud některé změny ještě nebyly nahrány, MOCPilot vás nejprve upozorní a vypíše dotčené profily: připojte se k internetu a nechte synchronizaci dokončit, nebo zvolte **Přesto se odhlásit** (kopie zůstane ve složce Backup aplikace).

## Tipy {#tips}

- Před publikováním profilu do katalogu se ujistěte, že je synchronizovaný: katalog si ho bere z vašeho účtu.
- Chcete-li přenést profily do zařízení bez účtu, použijte **Sdílet** a **Importovat profil…** se soubory `.dat`. Viz [Správa profilů](/docs/Application/Profiles/ManageProfiles).
