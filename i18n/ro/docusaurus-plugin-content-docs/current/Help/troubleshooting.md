---
id: Troubleshooting
title: Depanare
description: "Soluții pentru problemele frecvente cu huburile, motoarele, tabloul de bord, sincronizarea, achizițiile, actualizările, sunetul, constructorul AI și controlul de la distanță."
---

# Depanare {#troubleshooting}

## Huburi {#hubs}

**Hubul nu este găsit**
- Pornește Bluetooth și permite-i lui MOCPilot să folosească Bluetooth (pe Android și Dispozitive din apropiere sau Locație) în setările sistemului. Vezi [Bluetooth și permisiuni](/docs/Help/BluetoothPermissions).
- Pornește hubul și apasă-i butonul chiar înainte de scanare; atinge din nou **Pornește scanarea**.
- Asigură-te că hubul nu este conectat la alt telefon sau la altă aplicație (aplicațiile LEGO®, altă telecomandă). Închide-le.
- Înlocuiește sau încarcă bateriile.
- Robot Inventor: nu este disponibil pe iPhone și iPad. Mould King 4.0: nu este disponibil pe Windows.

**Hubul se deconectează**
- Apropie dispozitivul: pereții, metalul și alte dispozitive pe 2,4 GHz reduc raza de acțiune.
- Bateriile slabe provoacă deconectări sub sarcină: încarcă-le sau înlocuiește-le.
- Unele huburi se opresc după un timp fără comenzi; reconectează-le în **Huburile mele**.
- Mai multe despre raza de acțiune, adaptoare și permisiuni: [Bluetooth și permisiuni](/docs/Help/BluetoothPermissions).

**„Este necesară actualizarea firmware”**
- MOCPilot are nevoie de un firmware acceptat pentru huburile Technic, Technic Move, BOOST și City. Urmează [Actualizarea firmware-ului](/docs/Application/Hubs/FirmwareUpdating). Dacă o actualizare a eșuat, vezi [Recuperarea firmware-ului](/docs/Application/Hubs/RecoveryHubFirmware).

**Mould King nu reacționează**
- Huburile Mould King doar primesc comenzi. Folosește **Conectează din nou**, verifică canalul (**Selectați canalul**) și folosește un singur tip de Mould King pe profil.

## Motoarele și programul {#motors-and-the-program}

**Motorul nu se mișcă**
- Rulează programul (**Rulează**)? Este hubul conectat?
- Este motorul pe portul folosit de program? Verifică [monitorul hubului](/docs/Application/Hubs/ConnectingHubs#hub-monitor).
- Legături rapide: deschide **Probleme**; urmărește valorile în timp real de-a lungul rândului. Vezi [Rularea și rezolvarea problemelor](/docs/Application/Links/Problems).
- Blocuri logice: începe scriptul cu un bloc eveniment? Folosește **Monitor** ca să urmărești valorile.

**Motorul se rotește în sens greșit**
- Legături rapide: adaugă **Inversează** în rând. Blocuri logice: înmulțește valoarea cu −1.

**Motorul se târăște sau bâzâie când joystickul este eliberat**
- Legături rapide: adaugă **Zonă moartă**. Blocuri logice: ignoră valorile mici cu *este între*.

**Direcția cu servo nu e centrată sau lovește opritorul**
- Legături rapide: Servo cu calibrare **Auto** sau **Manual** cu **Setează ca zero** și **Centru**; micșorează **Unghi**. Blocuri logice: *calibrează axul direcției*.
- Servo, Rotire cu grade și Mergi la poziție necesită motoare cu encoder; motoarele simple și porturile SBrick acceptă doar viteza.

**Motoarele continuă să meargă după Oprește**
- Blocuri logice: activează **Oprește porturile hubului când programul se oprește** în Setări editor.

## Tablou de bord {#dashboard}

**Nu pot muta sau șterge o comandă**
- Este blocată: **Deblochează** din meniul ei. O comandă folosită de program nu poate fi ștearsă până nu îi elimini rândurile sau blocurile.

**„Nu există spațiu disponibil pe ecran”**
- Mută sau micșorează alte comenzi ori alege o dimensiune mai mică.

**O temă sau o comandă este blocată**
- Nu o deții: cumpăr-o sau obține [MocPilot Pro](/docs/Application/Account/Pro) ori trece comanda la tema De bază cu **Schimbă tema**.

**Gamepadul nu este detectat**
- Asociază gamepadul din setările Bluetooth ale sistemului (sau conectează-l prin USB). Pagina **Gamepad** afișează **Gamepad: (nume)** când aplicația îl vede și „Gamepad nu este conectat” când nu îl vede.
- Activează **Activează blocurile gamepad-ului** pe pagina **Gamepad**, altfel intrările și blocurile gamepadului nu apar.
- Ai conectate mai multe gamepaduri? Alege unul în **Selectează gamepad**.
- Verifică butoanele și stickurile cu **Testează gamepadul**.
- Windows: controlerele Xbox (XInput) și Sony DualSense / DualSense Edge funcționează; alte controlere fără suport XInput s-ar putea să nu funcționeze.
- Vezi [Gamepad](/docs/Application/Dashboard/Gamepad).

## Profiluri și sincronizare {#profiles-and-sync}

**Profilurile mele nu apar pe celălalt dispozitiv**
- Conectează-te cu același cont pe ambele dispozitive și verifică conexiunea la internet. Dacă aplicația afișează **Offline**, atinge **Reîncearcă** sau **Treci online**.

**„Profilul nu este compatibil”**
- Profilul a fost creat cu o versiune mai nouă de MOCPilot. Actualizează aplicația.

**Mi-am pierdut profilurile după reinstalare**
- În modul invitat, profilurile există doar pe dispozitiv și se pierd odată cu aplicația. Cu un cont, conectează-te din nou și ele revin.

## E-mailurile contului {#account-emails}

**E-mailul de activare sau codul de resetare a parolei nu ajunge**
- Așteaptă câteva minute și verifică dosarul de spam sau de mesaje nedorite. E-mailurile vin de la no-reply@mocpilot.com.
- Verifică dacă ai tastat corect adresa de e-mail.
- Activare: deschide pagina contului și atinge **Retrimiteți e-mailul de activare**. Până la verificarea contului, unele funcții rămân dezactivate.
- Resetarea parolei: „E-mail negăsit” înseamnă că nu există niciun cont cu această adresă; încearcă adresa cu care te-ai înregistrat. Altfel, atinge din nou **Resetare** lângă „Ți-ai uitat parola?” ca să primești un cod nou. Vezi [Cont](/docs/Application/Account/UserAccount).

## Achiziții {#purchases}

**Lipsește o achiziție**
- Conectează-te cu contul cu care ai făcut achiziția, apoi mergi la **Cont → Achiziții → Restaurează**.
- „Abonament asociat altui cont”: abonamentul Pro al acestui cont de magazin aparține altui cont MOCPilot.

**„MocPilot Pro necesită o verificare online”**
- Pro a fost folosit offline mult timp. Conectează-te la internet, iar verificarea se face singură.

## Actualizările aplicației {#app-updates}

**„Actualizare necesară”**
- Mesajul pe tot ecranul „Această versiune MOCPilot nu mai este acceptată…” înseamnă că această versiune nu mai poate fi folosită. Atinge **Actualizează** ca să deschizi magazinul și să instalezi noua versiune. Ecranul afișează și **Versiune instalată**.
- În editorul web, butonul este **Reîncarcă pagina**: se încarcă cel mai nou editor.

**„MOCPilot (versiune) este disponibil”**
- A apărut o versiune mai nouă. Atinge **Actualizează** (în editorul web, **Reîncarcă pagina**) sau închide bannerul cu ×: nu va mai apărea până la următoarea versiune.

## Sunet {#sound}

**Nu se aude niciun sunet**
- Activează **Sunet** în [Setări](/docs/Application/Account/Settings): această opțiune oprește toate sunetele aplicației, ale comenzilor și ale programelor.
- Mărește volumul media al dispozitivului. Dacă sunt conectate căști sau o boxă Bluetooth, sunetul se aude acolo.
- Blocuri logice: verifică dacă programul nu setează volumul sunetului la 0 sau nu oprește toate sunetele. Vezi [Sunete](/docs/Application/BlockBuilder/Blocks/Sounds).

## Constructorul AI {#ai-builder}

**Constructorul AI nu este disponibil sau afișează o eroare**
- Constructorul AI necesită [MocPilot Pro](/docs/Application/Account/Pro) și o conexiune la internet: „Constructorul AI necesită MocPilot Pro.” sau „Serviciul AI nu a putut fi contactat. Verifică conexiunea la internet și încearcă din nou.”
- „Serviciul AI este temporar indisponibil. Încercați mai târziu.” sau „Prea multe cereri către AI acum. Încercați din nou peste un minut.”: așteaptă și încearcă din nou.
- Există limite zilnice și lunare: „Ai atins limita zilnică de cereri AI. Încearcă din nou mâine.”
- Introducerea vocală: permite microfonul (și recunoașterea vorbirii pe dispozitivele Apple) în setările sistemului; vezi [Bluetooth și permisiuni](/docs/Help/BluetoothPermissions).
- Toate mesajele și ce trebuie făcut: [Constructor AI](/docs/Application/Profiles/AiBuilder).

## Control de la distanță {#remote-control}

**Dispozitivul cu huburi nu se conectează sau conexiunea se întrerupe**
- „Controlul de la distanță face parte din MocPilot Pro”: contul telecomenzii are nevoie de [MocPilot Pro](/docs/Application/Account/Pro).
- „Codul a expirat…” sau „Cod greșit sau expirat…”: codul de conectare este valabil 5 minute. Afișează un cod nou pe telecomandă și scanează-l sau tastează-l din nou.
- „Permite MOCPilot să folosească camera în setările sistemului pentru a scana codul.”: permite camera în setările sistemului ([cum](/docs/Help/BluetoothPermissions)) sau atinge **Introdu codul** și tastează cele 6 cifre.
- „Această versiune a aplicației nu se poate conecta la o telecomandă” sau „Celălalt dispozitiv nu a putut deschide profilul”: actualizează MOCPilot pe ambele dispozitive.
- „Conexiunea cu telecomanda s-a pierdut…”: verifică dacă ambele dispozitive sunt online. Dacă conexiunea se pierde pentru aproximativ 4 secunde, dispozitivul cu huburi oprește profilul și toate motoarele.
- Mai multe: [Control de la distanță](/docs/Application/Profiles/RemoteControl).

## Tot nu merge? {#still-stuck}

Folosește **Pune o întrebare** sau **Raportează o eroare** din **Ajutor** în aplicație (pe computer: meniul **Ajutor**). Răspunsul vine prin e-mail și în **Notificări**.
