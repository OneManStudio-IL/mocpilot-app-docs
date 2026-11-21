---
id: BluetoothPermissions
title: Bluetooth e permissões
description: "Quais permissões o MOCPilot pede em cada plataforma, por que, e como resolver uma permissão negada ou um problema de Bluetooth."
---

# Bluetooth e permissões {#bluetooth-and-permissions}

O MOCPilot se comunica com os hubs por Bluetooth, por isso o sistema pede que você permita o acesso. Algumas outras permissões só são pedidas quando você usa um recurso que precisa delas.

## O que o MOCPilot pede e por quê {#what-mocpilot-asks-for-and-why}

| Permissão | Quando é pedida | Por quê |
|---|---|---|
| **Bluetooth** (iPhone, iPad, Mac) | na primeira vez que você procura um hub | para encontrar e conectar hubs |
| **Dispositivos próximos** (Android 12 e mais recentes) | na primeira vez que você procura um hub | para encontrar e conectar hubs |
| **Localização**, exata (Android 10 e 11) | na primeira vez que você procura um hub | o Android exige essa permissão para a busca por Bluetooth nessas versões. O MOCPilot não coleta, não guarda e não compartilha sua localização |
| **Localização** (Android, hubs Mould King) | quando você conecta um hub Mould King | o app envia comandos aos hubs Mould King como transmissões Bluetooth e, para isso, pede a Localização em todas as versões do Android |
| **Câmera** (celular, tablet) | quando você escaneia um código QR em **Conectar um controle remoto** | para ler o [código de conexão](/docs/Application/Profiles/RemoteControl). Você também pode digitar os 6 dígitos |
| **Microfone** (iPhone, iPad, Mac, Android) | na primeira vez que você dita um pedido ao [construtor com IA](/docs/Application/Profiles/AiBuilder) | entrada de voz |
| **Reconhecimento de fala** (iPhone, iPad, Mac) | junto com o microfone | para transformar sua voz em texto |

No Windows, o MOCPilot não pede permissão de Bluetooth; basta o Bluetooth estar ligado. Para entrada de voz no Windows, o MOCPilot sugere a digitação por voz do Windows (Win+H).

## Se você negou uma permissão {#if-you-denied-a-permission}

Se você negou uma permissão, normalmente o sistema não pergunta de novo. O MOCPilot então mostra uma mensagem, por exemplo **Falha na varredura** com “O aplicativo requer permissão para escanear dispositivos próximos…”, “Permita que o MOCPilot use a câmera nas configurações do sistema para escanear o código.” ou “Permita o acesso ao microfone para o MOCPilot nas configurações do sistema”. Ative a permissão nas configurações do sistema e volte ao app:

**iPhone e iPad**
1. Abra **Ajustes** e role para baixo até **MOCPilot**.
2. Ative **Bluetooth** (e **Câmera**, **Microfone** ou **Reconhecimento de Fala**, se precisar).

**Android** (os nomes variam um pouco conforme o fabricante)
1. Abra **Configurações → Apps → MOCPilot → Permissões**.
2. Permita **Dispositivos próximos**. No Android 10 e 11, ou para hubs Mould King, permita também **Localização** e ative **Usar local exato**.
3. Permita **Câmera** ou **Microfone**, se precisar.

**Mac**
1. Abra **Ajustes do Sistema → Privacidade e Segurança**.
2. Escolha **Bluetooth** (ou **Microfone**, **Reconhecimento de Fala**) e ative **MOCPilot**.

**Windows**
1. Abra **Configurações → Bluetooth e dispositivos** e ative o **Bluetooth**.

## “O Bluetooth está desligado” {#bluetooth-is-off}

O MOCPilot mostra **O Bluetooth está desligado** quando o Bluetooth do dispositivo está desligado. Ligue-o na central de controle, nas configurações rápidas ou nas configurações do sistema e confirme a mensagem: o app procura de novo.

## Adaptadores Bluetooth no Windows {#bluetooth-adapters-on-windows}

- Você precisa de um adaptador Bluetooth 4.0 (LE) ou mais recente: embutido no computador ou um adaptador USB.
- O **Mould King 6.0** precisa de um adaptador e de um driver capazes de enviar transmissões Bluetooth (advertising). Nem todo adaptador consegue.
- O **Mould King 4.0** não funciona no Windows: o app informa “Os hubs Mould King de 4 portas exigem anúncios Bluetooth com dados de serviço, que o Windows não suporta.” Use um celular ou tablet para esses hubs.

## Hubs com Bluetooth clássico {#classic-bluetooth-hubs}

O hub **Robot Inventor** usa Bluetooth clássico, não Bluetooth Low Energy. Ele funciona no Android, no Mac e no Windows, mas não no iPhone e no iPad. No Windows, se o MOCPilot não o encontrar, emparelhe o hub primeiro em **Configurações → Bluetooth e dispositivos → Adicionar dispositivo** e depois procure de novo no app.

Todos os outros hubs compatíveis usam Bluetooth Low Energy e são adicionados só no MOCPilot, não nas configurações de Bluetooth do sistema.

## Uma conexão estável {#a-stable-connection}

- **Um app por vez.** Um hub aceita só uma conexão. Feche os apps da LEGO® e outros apps de controle remoto e desconecte o hub de outros celulares.
- **Alcance.** Mantenha o dispositivo a poucos metros do modelo. Paredes, metal, seu corpo e outros dispositivos de 2,4 GHz (roteadores Wi-Fi, outros dispositivos Bluetooth) reduzem o alcance.
- **Pilhas e baterias.** Pilhas fracas causam desconexões quando os motores fazem muito esforço.
- **Mantenha o app aberto.** Dirija com o MOCPilot na tela e ative **Manter a tela ligada** nas [Configurações](/docs/Application/Account/Settings), para que a tela não se apague enquanto um perfil estiver aberto.

Mais soluções para hubs que não são encontrados ou que desconectam com frequência: [Solução de problemas](/docs/Help/Troubleshooting#hubs).
