---
id: AiBuilder
title: Constructor AI
description: "Descrie-ți modelul în cuvinte sau prin voce, iar constructorul AI configurează huburile, tabloul de bord și programul unui profil Blocuri logice sau Legături rapide."
---

import Screenshot from '@site/src/components/Screenshot';

# Constructor AI {#ai-builder}

Descrie-ți modelul cu propriile cuvinte, scris sau vorbit, iar **constructorul AI** configurează profilul în locul tău: huburile și porturile, comenzile de pe tabloul de bord și programul. Funcționează în ambele editoare: într-un profil [Blocuri logice](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing) construiește blocuri, într-un profil [Legături rapide](/docs/Application/Links/LinksIntroducing) construiește rânduri. Apoi continui să vorbești cu el ca să modifici profilul sau îl editezi chiar tu.

Constructorul AI face parte din [MocPilot Pro](/docs/Application/Account/Pro) și funcționează în aplicație și în [editorul web](/docs/Introducing/WebEditor). Are nevoie de conexiune la internet.

<Screenshot name="blocks-ai-builder" alt="Panoul constructorului AI lângă program" width={900} />

## Deschide constructorul AI {#open-the-ai-builder}

1. Deschide un profil pentru editare.
2. Pe computer, apasă butonul **Constructor AI** (pictograma cu scântei) din dreapta barei de sus sau ⇧⌘I / Ctrl+Shift+I; într-o fereastră îngustă se află în **Mai mult** (⋯). Pe telefon sau tabletă, atinge **Mai mult** → **Constructor AI**.
3. Scrie cererea în **Ce ar trebui să creeze sau să modifice AI-ul?** și apasă **Trimite** (sau Enter; Shift+Enter începe un rând nou).

Fără MocPilot Pro, butonul arată ce face constructorul AI, cu **Obține MocPilot Pro** și **Nu acum**.

Unde se deschide panoul:

- **Telefon**: o pagină pe tot ecranul, peste editor.
- **Tabletă**: un card flotant; trage-l de antet în partea stângă sau dreaptă.
- **Computer**: un card în dreapta. În aplicație (nu în browser) poți apăsa **Deschide într-o fereastră separată** în antetul lui și poți așeza fereastra lângă editor.

Cât timp AI-ul lucrează, panoul arată ce face (**Mă gândesc la modelul tău…**, **Verific profilul…** și așa mai departe). Modificările apar în editor imediat ce termină, împreună cu un scurt rezumat a ce s-a schimbat. Când panoul este gol, sugerează câteva exemple de cereri: atinge una ca s-o pui în câmpul de text, apoi trimite-o așa cum este sau modific-o mai întâi.

Conversația se păstrează pentru fiecare profil, așa că poți închide panoul și poți reveni la el mai târziu.

## Scrie o cerere bună {#ai-builder-tips}

:::tip Spune ce hub folosești, ce este conectat la fiecare port și ce trebuie să facă
O cerere de un rând precum „o mașină cu lumini” nu este suficientă: AI-ul trebuie să ghicească hubul, porturile și ce face fiecare motor, iar rezultatul va avea probabil nevoie de corecturi. Include:

- **Hubul**: Technic Hub, City Hub, BOOST Move Hub, Robot Inventor, Technic Move Hub, BuWizz, SBrick…
- **Ce este pe fiecare port**: un motor de tracțiune, un motor de direcție (servo), lumini, un senzor.
- **Ce trebuie să facă fiecare**: să conducă, să vireze cu calibrare, să se aprindă și să se stingă, o limită de viteză.
- **Cum vrei să-l controlezi**: joystickuri, glisoare, butoane, un gamepad.
:::

Spune-o așa cum i-ai explica unui prieten. Poți scrie în limba ta.

Dacă ceva tot nu e în regulă, spune-i AI-ului ce să schimbe, în loc să o iei de la capăt.

## Exemple de cereri {#example-requests}

**O mașină**: „O mașină cu Technic Hub: motorul de tracțiune pe portul A, motorul de direcție pe portul C funcționează ca servo, farurile pe portul D. Joystick de direcție în stânga, accelerație în dreapta, un buton pentru faruri.”

**O macara**: „O macara cu Technic Hub: motorul de rotire pe portul A, motorul brațului pe portul B, troliul cârligului pe portul C. Un glisor pentru rotire, butoane sus/jos pentru braț, un joystick pentru cârlig, viteza brațului limitată la 50%.”

**Un tren**: „Un tren City cu City Hub: motorul trenului pe portul A, luminile pe portul B. Un comutator pas cu pas pentru viteză, un vitezometru și un buton pentru lumini.”

## Modifică un profil existent {#change-an-existing-profile}

Deschide constructorul AI într-un profil pe care îl ai deja, chiar și unul construit manual, și spune ce trebuie schimbat. AI-ul vede huburile, tabloul de bord și programul actuale și le editează:

- „Fă direcția mai lentă.”
- „Adaugă un buton de oprire.”
- „Copiază comenzile pe gamepadul meu.”
- „Limitează viteza brațului la 50%.”

Poți și să pui întrebări despre profil, de exemplu „Pe ce port sunt luminile?”. AI-ul răspunde în panou și lasă profilul neschimbat.

## Ce se întâmplă cu profilul tău {#what-happens-to-your-profile}

- AI-ul modifică direct profilul deschis: huburile, tabloul de bord și programul se actualizează imediat. Dacă programul rulează, se oprește.
- AI-ul lucrează cu tipul de program al profilului: într-un profil Blocuri logice scrie blocuri, într-un profil Legături rapide scrie rânduri. Nu transformă niciodată un tip în celălalt. Dacă o cerere are nevoie de ceva ce rândurile Legături rapide nu pot face, AI-ul îți spune că e nevoie de un profil Blocuri logice.
- Părțile profilului pe care AI-ul nu trebuie să le modifice rămân așa cum sunt.
- **Anulează ultima modificare AI** (butonul de anulare din antetul panoului) readuce profilul la starea de dinaintea ultimei modificări AI. Apasă-l din nou ca să mergi mai înapoi, până la 10 modificări. Istoricul de anulare se șterge când deschizi alt profil.
- Poți continua oricând să editezi singur profilul.

## Introducere vocală {#voice-input}

Apasă **Dictează** (butonul cu microfon) și spune cererea; textul apare în câmp și îl poți corecta înainte de trimitere. Apasă din nou butonul ca să te oprești. Dacă sunt disponibile mai multe limbi, butonul mic de limbă de lângă microfon schimbă limba de dictare; aplicația îți ține minte alegerea.

| Unde | Cum |
|---|---|
| iPhone, iPad, Mac | **Dictează**; prima dată, permite accesul la microfon și recunoașterea vorbirii |
| Android | **Dictează**; prima dată, permite accesul la microfon |
| Windows | apasă **Win+H** ca să dictezi cu tastarea vocală din Windows (butonul cu microfon îți amintește) |
| Editor web | **Dictează** în Chrome, Edge și Safari; permite accesul la microfon pentru site. Firefox nu are dictare |

Mesajele introducerii vocale:

| Mesaj | Ce trebuie făcut |
|---|---|
| **Permite accesul la microfon pentru MOCPilot în setările sistemului** | Activează accesul la microfon pentru MOCPilot în setările sistemului |
| **Permite recunoașterea vorbirii pentru MOCPilot în setările sistemului** | Pe un dispozitiv Apple, activează recunoașterea vorbirii pentru MOCPilot în setările sistemului |
| **Permite accesul la microfon pentru acest site în browser** | Permite microfonul în setările site-ului din browser |
| **Nu s-a auzit nimic** | Apasă **Dictează** și vorbește din nou |
| **Introducerea vocală necesită o conexiune** | Conectează-te la internet sau scrie cererea |
| **Recunoașterea vorbirii nu este disponibilă acum pentru această limbă** | Schimbă limba de dictare sau scrie cererea |
| **Nu a fost găsit niciun microfon** / **Introducerea vocală nu este disponibilă pe acest dispozitiv** | Scrie cererea |

## Limite {#limits}

- Aproximativ 30 de cereri pe zi și o limită lunară. Antetul panoului arată cât ai folosit: **Azi 5/30 · Luna 12%**.
- În perioada de probă gratuită, numărul de cereri AI este limitat; ele continuă când începe abonamentul.
- O singură cerere odată: așteaptă răspunsul înainte să o trimiți pe următoarea.
- Constructorul AI doar creează și editează profiluri. Nu răspunde la întrebări pe alte subiecte.

## Mesaje de eroare {#error-messages}

| Mesaj | Ce trebuie făcut |
|---|---|
| **Constructorul AI nu este disponibil** / **Serviciul AI nu a putut fi contactat. Verifică conexiunea la internet și încearcă din nou.** | Verifică conexiunea la internet și deschide din nou panoul |
| **Nu există conexiune la serviciul AI. Verifică conexiunea la internet și încearcă din nou.** | Verifică conexiunea și trimite din nou cererea |
| **Conexiunea la serviciul AI s-a pierdut…** | Când ești din nou online, răspunsul apare în panou; altfel trimite din nou cererea |
| **AI nu a răspuns la timp. Trimite din nou cererea.** / **Cererea s-a pierdut, trimite-o din nou** | Trimite din nou cererea |
| **AI nu a putut construi un profil funcțional pentru această cerere. Încercați să o spuneți altfel.** | Reformulează cererea: numește hubul, porturile și ce face fiecare |
| **Profilul este prea mare pentru a fi construit dintr-odată. Cereți mai puține lucruri odată.** | Împarte cererea în pași mai mici |
| **AI a refuzat această cerere.** | Reformulează cererea astfel încât să fie despre profil |
| **Ai atins limita zilnică de cereri AI. Încearcă din nou mâine.** | Așteaptă până mâine sau editează singur profilul |
| **Ai atins limita lunară AI.** | Limita se resetează luna viitoare |
| **Ați folosit toate solicitările AI din perioada de probă gratuită. Vor continua când începe abonamentul.** | Așteaptă să înceapă abonamentul |
| **Constructorul AI doar creează și editează profiluri. Prea multe cereri pe alte subiecte: încearcă din nou peste o oră.** | Așteaptă o oră și întreabă doar despre profil |
| **Prea multe cereri către AI acum. Încercați din nou peste un minut.** | Încearcă din nou peste un minut |
| **Cererea anterioară încă rulează.** | Așteaptă răspunsul |
| **Serviciul AI este temporar indisponibil. Încercați mai târziu.** / **Ai MocPilot Pro. Constructorul AI nu este disponibil acum, încearcă din nou mai târziu.** | Încearcă din nou mai târziu |
| **Răspunsul era pentru alt profil** | Ai deschis alt profil cât timp AI-ul lucra, așa că modificarea nu a fost aplicată. Deschide din nou primul profil și repetă cererea |
| **Deschide mai întâi un profil pentru editare** | Deschide profilul în editor, apoi trimite cererea |
| **Profilul nu a putut fi actualizat în editor** / **Modificarea nu a putut fi anulată** | Încearcă din nou; dacă se tot întâmplă, închide și redeschide profilul |
