---
id: Troubleshooting
title: Solução de problemas
description: "Soluções para problemas comuns com hubs, motores, painel, sincronização, compras, atualizações, som, construtor com IA e controle remoto."
---

# Solução de problemas {#troubleshooting}

## Hubs {#hubs}

**O hub não é encontrado**
- Ligue o Bluetooth e permita que o MOCPilot use o Bluetooth (no Android, também Dispositivos próximos ou Localização) nas configurações do sistema. Veja [Bluetooth e permissões](/docs/Help/BluetoothPermissions).
- Ligue o hub e pressione o botão dele logo antes da busca; toque em **Iniciar varredura** de novo.
- Verifique se o hub não está conectado a outro celular ou app (apps da LEGO®, outro controle remoto). Feche-os.
- Troque ou carregue as pilhas.
- Robot Inventor: não disponível no iPhone e no iPad. Mould King 4.0: não disponível no Windows.

**O hub desconecta**
- Aproxime o dispositivo: paredes, metal e outros dispositivos de 2,4 GHz reduzem o alcance.
- Pilhas fracas causam desconexões sob carga: carregue-as ou troque-as.
- Alguns hubs se desligam depois de um tempo sem comandos; reconecte em **Meus hubs**.
- Mais sobre alcance, adaptadores e permissões: [Bluetooth e permissões](/docs/Help/BluetoothPermissions).

**“Atualização de firmware necessária”**
- O MOCPilot precisa de um firmware compatível nos hubs Technic, Technic Move, BOOST e City. Siga [Atualização de firmware](/docs/Application/Hubs/FirmwareUpdating). Se uma atualização falhou, veja [Recuperação de firmware](/docs/Application/Hubs/RecoveryHubFirmware).

**O Mould King não reage**
- Os hubs Mould King apenas recebem comandos. Use **Conectar novamente**, verifique o canal (**Selecionar canal**) e use só um tipo de Mould King por perfil.

## Motores e programa {#motors-and-the-program}

**O motor não se mexe**
- O programa está rodando (**Executar**)? O hub está conectado?
- O motor está na porta que o programa usa? Confira no [monitor do hub](/docs/Application/Hubs/ConnectingHubs#hub-monitor).
- Ligações rápidas: abra **Problemas**; acompanhe os valores ao vivo ao longo da linha. Veja [Executar e corrigir problemas](/docs/Application/Links/Problems).
- Blocos lógicos: o script começa com um bloco de evento? Use o **Monitor** para observar os valores.

**O motor gira para o lado errado**
- Ligações rápidas: adicione **Inverter** à linha. Blocos lógicos: multiplique o valor por −1.

**O motor se arrasta ou zumbe quando o joystick é solto**
- Ligações rápidas: adicione **Zona morta**. Blocos lógicos: ignore valores pequenos com *está entre*.

**A direção por servo fica descentralizada ou bate no batente**
- Ligações rápidas: Servo com calibração **Auto**, ou **Manual** com **Definir como zero** e **Centro**; reduza o **Ângulo**. Blocos lógicos: *calibrar barra de direção*.
- Servo, Girar por graus e Ir para a posição precisam de motores com encoder; motores simples e as portas do SBrick aceitam só velocidade.

**Os motores continuam girando depois de Parar**
- Blocos lógicos: ative **Parar portas do hub quando o programa parar** nas Configurações do editor.

## Painel {#dashboard}

**Não consigo mover nem excluir um controle**
- Ele está bloqueado: use **Desbloquear** no menu dele. Um controle usado pelo programa não pode ser excluído até você remover as linhas ou os blocos dele.

**“Não há espaço disponível na tela”**
- Mova ou diminua outros controles, ou escolha um tamanho menor.

**Um tema ou controle está bloqueado**
- Você não o possui: compre-o ou assine o [MocPilot Pro](/docs/Application/Account/Pro), ou passe o controle para o tema Básico com **Alterar tema**.

**O gamepad não é detectado**
- Emparelhe o gamepad nas configurações de Bluetooth do sistema (ou ligue-o por USB). A página **Gamepad** mostra **Gamepad: (nome)** quando o app o detecta, e “O gamepad não está conectado” quando não.
- Ative **Ativar blocos de gamepad** na página **Gamepad**; caso contrário, as entradas e os blocos de gamepad não aparecem.
- Vários gamepads conectados? Escolha um em **Selecionar gamepad**.
- Teste os botões e os analógicos com **Testar gamepad**.
- Windows: controles Xbox (XInput) e Sony DualSense / DualSense Edge funcionam; outros controles sem suporte a XInput podem não funcionar.
- Veja [Gamepad](/docs/Application/Dashboard/Gamepad).

## Perfis e sincronização {#profiles-and-sync}

**Meus perfis não aparecem no meu outro dispositivo**
- Entre com a mesma conta nos dois dispositivos e verifique a conexão com a internet. Se o app mostrar **Off-line**, toque em **Tentar novamente** ou **Ficar on-line**.

**“O perfil não é compatível”**
- O perfil foi criado com uma versão mais nova do MOCPilot. Atualize o app.

**Perdi meus perfis depois de reinstalar o app**
- No modo convidado, os perfis existem só no dispositivo e se perdem junto com o app. Com uma conta, entre de novo e eles voltam.

## E-mails da conta {#account-emails}

**O e-mail de ativação ou o código de redefinição de senha não chega**
- Espere alguns minutos e verifique a pasta de spam ou lixo eletrônico. Os e-mails vêm de no-reply@mocpilot.com.
- Verifique se você digitou o endereço de e-mail corretamente.
- Ativação: abra a página da sua conta e toque em **Reenviar e-mail de ativação**. Até a conta ser verificada, alguns recursos ficam desativados.
- Redefinição de senha: “E-mail não encontrado” significa que não existe conta com esse e-mail; tente o endereço com que você se cadastrou. Caso contrário, toque de novo em **Redefinir** ao lado de “Esqueceu a senha?” para receber um novo código. Veja [Conta](/docs/Application/Account/UserAccount).

## Compras {#purchases}

**Uma compra está faltando**
- Entre com a conta em que você fez a compra e vá em **Conta → Compras → Restaurar**.
- “Assinatura vinculada a outra conta”: a assinatura Pro desta conta da loja pertence a outra conta MOCPilot.

**“O MocPilot Pro precisa de uma verificação on-line”**
- O Pro foi usado off-line por muito tempo. Conecte-se à internet, e a verificação é feita sozinha.

## Atualizações do app {#app-updates}

**“Atualização necessária”**
- A mensagem em tela cheia “Esta versão do MOCPilot já não é suportada…” significa que esta versão não pode mais ser usada. Toque em **Atualizar** para abrir a loja e instalar a nova versão. A tela também mostra sua **Versão instalada**.
- No editor web, o botão é **Recarregar página**: o editor mais recente é carregado.

**“MOCPilot (versão) está disponível”**
- Saiu uma versão mais nova. Toque em **Atualizar** (no editor web, **Recarregar página**) ou feche o aviso com ×: ele só volta na próxima versão.

## Som {#sound}

**Não há som**
- Ative **Som** nas [Configurações](/docs/Application/Account/Settings): essa opção silencia todos os sons do app, dos controles e dos programas.
- Aumente o volume de mídia do dispositivo. Se houver fones de ouvido ou uma caixa de som Bluetooth conectados, o som toca neles.
- Blocos lógicos: verifique se o programa não define o volume do som como 0 nem para todos os sons. Veja [Sons](/docs/Application/BlockBuilder/Blocks/Sounds).

## Construtor com IA {#ai-builder}

**O construtor com IA não está disponível ou mostra um erro**
- O construtor com IA precisa do [MocPilot Pro](/docs/Application/Account/Pro) e de conexão com a internet: “O construtor com IA requer o MocPilot Pro.” ou “Não foi possível acessar o serviço de IA. Verifique sua conexão com a internet e tente novamente.”
- “O serviço de IA está temporariamente indisponível. Tente mais tarde.” ou “Há pedidos demais para a IA agora. Tente novamente em um minuto.”: espere e tente de novo.
- Há limites diários e mensais: “Você atingiu o limite diário de solicitações à IA. Tente novamente amanhã.”
- Entrada de voz: permita o microfone (e o reconhecimento de fala nos dispositivos Apple) nas configurações do sistema; veja [Bluetooth e permissões](/docs/Help/BluetoothPermissions).
- Todas as mensagens e o que fazer: [Construtor com IA](/docs/Application/Profiles/AiBuilder).

## Controle remoto {#remote-control}

**O dispositivo com os hubs não se conecta ou a conexão cai**
- “O controlo remoto faz parte do MocPilot Pro”: a conta do controle remoto precisa do [MocPilot Pro](/docs/Application/Account/Pro).
- “O código expirou…” ou “Código errado ou expirado…”: o código de conexão vale por 5 minutos. Mostre um novo código no controle remoto e escaneie ou digite de novo.
- “Permita que o MOCPilot use a câmera nas configurações do sistema para escanear o código.”: permita a câmera nas configurações do sistema ([como](/docs/Help/BluetoothPermissions)) ou toque em **Digitar código** e digite os 6 dígitos.
- “Esta versão do app não pode se conectar a um controle remoto” ou “O outro dispositivo não conseguiu abrir o perfil”: atualize o MOCPilot nos dois dispositivos.
- “Conexão com o controle remoto perdida…”: verifique se os dois dispositivos estão on-line. Se a conexão ficar perdida por cerca de 4 segundos, o dispositivo com os hubs para o perfil e todos os motores.
- Mais: [Controle remoto](/docs/Application/Profiles/RemoteControl).

## Ainda com problemas? {#still-stuck}

Use **Fazer uma pergunta** ou **Relatar um erro** na **Ajuda** do app (no computador, o menu **Ajuda**). A resposta chega por e-mail e em **Notificações**.
