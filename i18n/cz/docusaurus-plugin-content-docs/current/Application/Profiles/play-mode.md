---
id: PlayMode
title: Řízení modelu (Spustit)
description: "Spusťte profil, řiďte model, zastavte ho a zjistěte, co se stane, když se zastaví nebo vypadne spojení."
---

import Screenshot from '@site/src/components/Screenshot';

# Řízení modelu (Spustit) {#driving-a-model-run}

Profil má dva režimy:

- **Úpravy**: měníte huby, panel a program.
- **Spustit**: program běží a ovládací prvky panelu řídí model.

## Spuštění a zastavení {#start-and-stop}

Stiskněte **Spustit** (▶) na pravém konci horní lišty editoru; na telefonu nebo tabletu ho má i panel. Na počítači je **Spustit** oranžové tlačítko v editoru (také **Program → Spustit**, ⌘R / Ctrl+R). Stisknutím **Zastavit** (■) se vrátíte k úpravám (⌘. / Ctrl+.).

<Screenshot name="dashboard-run" alt="Panel při běhu programu" width={900} />

Když program běží:

- tečky mřížky panelu jsou skryté, stejně jako jeho tlačítka pro úpravy (na počítači nejsou k dispozici);
- ovládací prvky reagují na dotyk i na herní ovladač;
- monitory a indikátory ukazují aktuální hodnoty;
- v Rychlých propojeních editor ukazuje aktuální hodnoty mezi bloky každého řádku a řádky nelze upravovat;
- v Logických blocích zůstává program upravitelný, takže ho můžete dolaďovat za běhu.

## Na telefonu nebo tabletu {#on-a-phone-or-tablet}

Otevření profilu přepne telefon na šířku a na celou obrazovku, aby panel dostal celou plochu. Zapněte v Nastavení **Ponechat obrazovku zapnutou**, aby obrazovka během jízdy nezhasla. Viz [Nastavení](/docs/Application/Account/Settings).

## Než stisknete Spustit {#before-you-press-run}

- Zapněte huby a v **Moje huby** zkontrolujte, že jsou připojené (číslo na tlačítku **Moje huby**, na počítači **Huby**, ukazuje, kolik jich je).
- V Rychlých propojeních zkontrolujte tlačítko **Problémy**: červený „!“ znamená, že některé řádky nelze spustit. Viz [Spuštění a řešení problémů](/docs/Application/Links/Problems).
- Při prvním pokusu postavte model na stojan nebo ho držte dál od okraje stolu.

## Když se program zastaví {#when-the-program-stops}

- **Rychlá propojení** zastaví všechny motory používané řádky a resetují výstupy (LED matice se vymaže, barvy portů a světla senzorů zhasnou).
- **Logické bloky** zastaví porty hubu, pokud je v Nastavení editoru zapnuté **Zastavit porty hubu při zastavení programu**.
- Pokud se hub během běhu programu odpojí, jeho motory se zastaví. V Rychlých propojeních to může na panelu ukázat vstup hubu „Připojeno“.
- Při dálkovém ovládání: pokud se spojení mezi dálkovým ovladačem a zařízením s huby přeruší asi na 4 sekundy, zařízení s huby zastaví profil i všechny motory.

## Řízení z jiného zařízení {#drive-from-another-device}

S [MocPilot Pro](/docs/Application/Account/Pro) můžete profil spustit na jednom zařízení (zařízení s huby, které připojuje huby) a ovládat ho z jiného zařízení nebo z webového editoru. Viz [Dálkové ovládání](/docs/Application/Profiles/RemoteControl).
