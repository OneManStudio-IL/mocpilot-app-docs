---
id: BluetoothPermissions
title: Bluetooth și permisiuni
description: "Ce permisiuni cere MOCPilot pe fiecare platformă, de ce și cum rezolvi o permisiune refuzată sau o problemă cu Bluetooth."
---

# Bluetooth și permisiuni {#bluetooth-and-permissions}

MOCPilot comunică cu huburile prin Bluetooth, așa că sistemul îți cere să-i permiți acest lucru. Câteva alte permisiuni sunt cerute doar când folosești o funcție care are nevoie de ele.

## Ce cere MOCPilot și de ce {#what-mocpilot-asks-for-and-why}

| Permisiune | Când este cerută | De ce |
|---|---|---|
| **Bluetooth** (iPhone, iPad, Mac) | prima dată când cauți un hub | pentru a găsi și conecta huburi |
| **Dispozitive din apropiere** (Android 12 și mai nou) | prima dată când cauți un hub | pentru a găsi și conecta huburi |
| **Locație**, precisă (Android 10 și 11) | prima dată când cauți un hub | Android o cere pentru scanarea Bluetooth pe aceste versiuni. MOCPilot nu colectează, nu stochează și nu partajează locația ta |
| **Locație** (Android, huburi Mould King) | când conectezi un hub Mould King | aplicația trimite comenzile către huburile Mould King ca difuzări Bluetooth și cere Locația pentru asta pe orice versiune de Android |
| **Cameră** (telefon, tabletă) | când scanezi un cod QR în **Conectează o telecomandă** | pentru a citi [codul de conectare](/docs/Application/Profiles/RemoteControl). Poți tasta în schimb cele 6 cifre |
| **Microfon** (iPhone, iPad, Mac, Android) | prima dată când dictezi o cerere pentru [constructorul AI](/docs/Application/Profiles/AiBuilder) | introducere vocală |
| **Recunoașterea vorbirii** (iPhone, iPad, Mac) | împreună cu microfonul | pentru a transforma vocea ta în text |

Pe Windows, MOCPilot nu cere permisiune pentru Bluetooth; Bluetooth trebuie doar să fie pornit. Pentru introducerea vocală pe Windows, MOCPilot sugerează tastarea vocală din Windows (Win+H).

## Dacă ai refuzat o permisiune {#if-you-denied-a-permission}

Dacă ai refuzat o permisiune, de obicei sistemul nu o mai cere. MOCPilot afișează atunci un mesaj, de exemplu **Scanarea a eșuat** cu „Aplicația necesită permisiune pentru a scana dispozitivele din apropiere…”, „Permite MOCPilot să folosească camera în setările sistemului pentru a scana codul.” sau „Permite accesul la microfon pentru MOCPilot în setările sistemului”. Activează permisiunea în setările sistemului și revino în aplicație:

**iPhone și iPad**
1. Deschide **Configurări** și derulează până la **MOCPilot**.
2. Activează **Bluetooth** (și **Cameră**, **Microfon** sau **Recunoaștere vocală**, dacă ai nevoie de ele).

**Android** (denumirile diferă puțin în funcție de producător)
1. Deschide **Setări → Aplicații → MOCPilot → Permisiuni**.
2. Permite **Dispozitive din apropiere**. Pe Android 10 și 11 sau pentru huburile Mould King, permite și **Locație** și activează **Folosește locația exactă**.
3. Permite **Cameră** sau **Microfon**, dacă ai nevoie de ele.

**Mac**
1. Deschide **Configurări sistem → Confidențialitate și securitate**.
2. Alege **Bluetooth** (sau **Microfon**, **Recunoaștere vocală**) și activează **MOCPilot**.

**Windows**
1. Deschide **Setări → Bluetooth și dispozitive** și pornește **Bluetooth**.

## „Bluetooth este oprit” {#bluetooth-is-off}

MOCPilot afișează **Bluetooth este oprit** când Bluetooth-ul dispozitivului este dezactivat. Pornește-l din centrul de control, din setările rapide sau din setările sistemului, apoi confirmă mesajul: aplicația caută din nou.

## Adaptoare Bluetooth pe Windows {#bluetooth-adapters-on-windows}

- Ai nevoie de un adaptor Bluetooth 4.0 (LE) sau mai nou: încorporat în computer sau un adaptor USB.
- **Mould King 6.0** are nevoie de un adaptor și un driver care pot trimite difuzări Bluetooth (advertising). Nu orice adaptor poate face asta.
- **Mould King 4.0** nu funcționează pe Windows: aplicația afișează „Hub-urile Mould King cu 4 porturi necesită anunțuri Bluetooth cu date de serviciu, pe care Windows nu le acceptă.” Folosește un telefon sau o tabletă pentru aceste huburi.

## Huburi cu Bluetooth clasic {#classic-bluetooth-hubs}

Hubul **Robot Inventor** folosește Bluetooth clasic, nu Bluetooth Low Energy. Funcționează pe Android, Mac și Windows, dar nu pe iPhone și iPad. Pe Windows, dacă MOCPilot nu îl găsește, asociază mai întâi hubul din **Setări → Bluetooth și dispozitive → Adăugare dispozitiv**, apoi caută din nou în aplicație.

Toate celelalte huburi acceptate folosesc Bluetooth Low Energy și se adaugă doar în MOCPilot, nu în setările Bluetooth ale sistemului.

## O conexiune stabilă {#a-stable-connection}

- **O singură aplicație odată.** Un hub acceptă o singură conexiune. Închide aplicațiile LEGO® și alte aplicații de telecomandă și deconectează hubul de pe alte telefoane.
- **Raza de acțiune.** Ține dispozitivul la câțiva metri de model. Pereții, metalul, corpul tău și alte dispozitive pe 2,4 GHz (routere Wi-Fi, alte dispozitive Bluetooth) reduc raza de acțiune.
- **Bateriile.** Bateriile slabe provoacă deconectări când motoarele lucrează din greu.
- **Ține aplicația deschisă.** Condu cu MOCPilot pe ecran și activează **Menține ecranul aprins** în [Setări](/docs/Application/Account/Settings), ca ecranul să nu se stingă cât timp un profil este deschis.

Alte soluții pentru huburile care nu sunt găsite sau se tot deconectează: [Depanare](/docs/Help/Troubleshooting#hubs).
