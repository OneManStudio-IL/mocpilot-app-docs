---
id: SpecialControls
title: Controles especiais
description: "Volante, pedais, câmbio, freio de mão, setas e controle de trem: como usá-los, configurações, aparências, valores e blocos."
---

import Screenshot from '@site/src/components/Screenshot';

# Controles especiais {#special-controls}

Os controles especiais têm visual e funcionamento de verdade: um volante, pedais, uma alavanca de câmbio, um freio de mão, uma alavanca de seta, uma caixa de transferência e um controlador de locomotiva. Cada um é um produto separado: compre os que você precisa ou tenha todos com o [MocPilot Pro](/docs/Application/Account/Pro).

<Screenshot name="special-controls-dashboard" alt="Um painel com volante, pedais, alavanca de câmbio, freio de mão, setas e controle de trem" width={900} />

| Controle | Produto | Nome no painel | O que passa ao programa |
|---|---|---|---|
| [Volante](#steering-wheel) | Volante | STWHEEL | ângulo de direção, buzina |
| [Pedais](#pedals) | Pedais | PDLS | acelerador e freio |
| [Câmbio manual](#gear-shifter) | Câmbio | GEAR | marcha: R, N, 1…6 |
| [Câmbio automático](#gear-shifter) | Câmbio | GEARA | seletor: P, R, N, D |
| [Freio de mão](#handbrake) | Freio de mão | HBRK | força, travado |
| [Setas](#turn-signals) | Setas | STALK | seta esquerda, seta direita, luz |
| [Caixa de transferência](#transfer-case) | Caixa de transferência | XFER | modo de tração: 2H, 4H, N, 4L; bloqueios do diferencial |
| [Controle de trem](#train-controller) | Controle de trem | TRTHR | ponto de potência, sentido, tração |

O **Botão giratório** não é um produto separado: ele vem com todo tema pago. Veja [Tipos de controle](/docs/Application/Dashboard/ControlTypes#rotary-knob).

## Adicionar um controle especial {#add-a-special-control}

1. Abra o painel e toque em **+** (**Adicionar controlador**; no computador, **+ Controlador**).
2. Na lista de tipos de controle, role até **Veículo e especiais** e selecione um controle.
3. A faixa de visuais mostra todas as aparências dele. Escolha uma e configure o controle em **Configurar**.
4. Toque em **Adicionar ao painel**. Para um controle que você ainda não possui, toque em **Comprar** ou **Tudo com MocPilot Pro**.

<Screenshot name="special-control-looks" alt="A paleta Adicionar controlador com o volante selecionado e as aparências dele na faixa de visuais" width={900} />

## Aparências {#looks}

Todo controle especial vem em muitas **aparências**. A maioria combina com um tema pago (Corrida, Aura, Clássico, Holograma e assim por diante), então o volante, a alavanca de câmbio e o freio de mão podem combinar com o resto do seu painel. Você pode trocar a aparência a qualquer momento: selecione o controle e escolha outra em **Aparência** na aba **Estilo**. A aparência muda só a imagem: os valores, os blocos e o programa continuam iguais.

Algumas aparências também ajustam a cor de acento para combinar quando você as escolhe.

## Configurações de todos os controles especiais {#settings-of-all-special-controls}

- **Aparência** (aba Estilo): veja acima.
- **Cor de acento** (aba Estilo): alavanca de câmbio, freio de mão, setas, caixa de transferência e controle de trem.
- **Bloquear o controlador** e **Interatividade** (aba Configurações), como em qualquer controle. Veja [Propriedades dos controles](/docs/Application/Dashboard/ControlProperties).

## Volante {#steering-wheel}

Coloque um dedo no volante e gire-o em volta do centro. Quando você solta, ele volta sozinho ao centro. Pressione o centro do volante para tocar a buzina: isso não gira o volante.

**Configurações**

- **Ângulo do volante** (20–120°, padrão 60°): quanto você precisa girar o volante para chegar ao esterço máximo. Não muda os valores que o programa recebe.
- **Efeitos sonoros**: o som da buzina e os sons que o programa toca a partir do volante. O som do app precisa estar ativado.

**Valores**: o ângulo de direção de −100 (todo à esquerda), passando por 0, até 100 (todo à direita); a buzina vale 100 enquanto você a segura e 0 no resto do tempo.

**Aparências**: Veículo off-road, Caminhão pesado, Supercarro, Madeira clássica, Volante de corrida, Rali camurça, Off-road utilitário, Conceito luminoso, Carreta, Sedã familiar, Carro urbano, Bugre, 4x4 clássico, Máquinas de construção, Áudio Hi-Fi, Aura, Blocos, Núcleo de circuito, Espaço profundo, Carga pesada, Neo Órbita, Cabine off-road, Corrida, Rock Crawler, Tático, Clássico, Pôr do sol, Miami, Alta tecnologia, Holograma.

**Sons** para o programa: Buzina de carro, Buzina de caminhão, Buzina de carro esportivo.

**Ligações rápidas**: a entrada [Volante](/docs/Application/Links/Blocks/InputBlocks#controller-wheel) com os canais **Ângulo do volante** e **Buzina**.

## Pedais {#pedals}

O pedal do freio fica à esquerda, e o acelerador, à direita. Pressione um pedal com o dedo: quanto mais alto o dedo estiver no pedal, mais fundo ele é pressionado. Perto da base, ele é pressionado de leve; perto do topo, até o fim. Solte, e o pedal volta para cima. Você pode pressionar os dois pedais ao mesmo tempo.

**Configurações**: **Efeitos sonoros**: permite que o programa toque os sons dos pedais. O som do app precisa estar ativado.

**Valores**: o acelerador e o freio, cada um de 0 a 100.

**Aparências**: Veículo off-road, Caminhão pesado, Supercarro, Cromo clássico, Carbono e vermelho, Corrida perfurado, Aderência off-road, Conceito luminoso, Carreta, Sedã familiar, Carro urbano, Bugre, 4x4 clássico, Máquinas de construção, Áudio Hi-Fi, Aura, Blocos, Núcleo de circuito, Espaço profundo, Carga pesada, Neo Órbita, Cabine off-road, Corrida, Rock Crawler, Tático, Clássico, Pôr do sol, Miami, Alta tecnologia, Holograma.

**Sons** para o programa: Freio de carro, Freio de carro esportivo, Freio a ar de caminhão, Bipe de ré.

**Ligações rápidas**: a entrada [Pedais](/docs/Application/Links/Blocks/InputBlocks#controller-pedals) com os canais **Pedal do acelerador** e **Pedal do freio**.

:::tip Só os pedais não fazem um carro
Os pedais informam apenas o quanto cada um está pressionado. Se uma linha manda o acelerador direto para um motor, o motor gira exatamente na medida em que o pedal está pressionado. Para ter um modelo que acelera aos poucos, segue no embalo, freia e dá ré, use o [simulador de veículo](#vehicle-simulator).
:::

## Câmbio {#gear-shifter}

O produto **Câmbio** tem dois controles: um **Câmbio manual** e um **Câmbio automático**.

### Câmbio manual {#manual-gearbox}

Uma grade em H com ré e até seis marchas à frente. Arraste a manopla pela linha do meio e para cima ou para baixo até uma marcha. Quando você solta, a manopla se encaixa na marcha mais próxima ou volta ao ponto morto.

- **Número de marchas** (2–6, padrão 6, aba Configurações): a grade muda conforme o número. A ré fica sempre na coluna mais à esquerda, e o ponto morto, no meio.
- **Valores**: −1 = ré (R), 0 = ponto morto (N), 1…6 = marchas à frente.

### Câmbio automático {#automatic-gearbox}

Um seletor com quatro posições: **P** (estacionamento), **R** (ré), **N** (neutro) e **D** (dirigir). A forma de operar depende da aparência:

| Seletor | Como usar | Aparências |
|---|---|---|
| Alavanca | deslize a alça pela fenda; ela para na posição mais próxima | Alta tecnologia |
| Seletor giratório | gire o seletor com um dedo; ele estala em P, R, N ou D | Clássico, Espaço profundo, Tático, Máquinas de construção, Áudio Hi-Fi, Aura, Núcleo de circuito, Rock Crawler, Cabine off-road, Neo Órbita, Off-road, Burro de carga, Conceito, Sedã, Compacto, 4x4 clássico |
| Botões | toque em P, R, N ou D | Corrida, Carga pesada, Blocos, Caminhão pesado, Retrô, Rali, Supercarro, Fórmula, Longa distância, Buggy, Pôr do sol, Miami, Holograma |

- **Número de marchas** (2–8, padrão 6, aba Configurações): por quantas marchas o [simulador de veículo](#vehicle-simulator) passa em D. Quando o simulador escolhe uma marcha, o seletor a mostra, por exemplo **D3**.
- **Valores**: −2 = P, −1 = R, 0 = N, 1 = D. Os três seletores dão os mesmos valores, então o programa funciona com qualquer aparência.

Os dois câmbios têm as mesmas aparências: Clássico, Corrida, Espaço profundo, Tático, Carga pesada, Máquinas de construção, Áudio Hi-Fi, Aura, Núcleo de circuito, Rock Crawler, Cabine off-road, Blocos, Neo Órbita, Caminhão pesado, Retrô, Rali, Off-road, Supercarro, Fórmula, Burro de carga, Conceito, Longa distância, Sedã, Compacto, Buggy, Pôr do sol, 4x4 clássico, Miami, Alta tecnologia, Holograma.

**Ligações rápidas**: a entrada [Alavanca de câmbio](/docs/Application/Links/Blocks/InputBlocks#controller-gear) com os canais **Marcha** (manual: a marcha em relação ao número de marchas, com a ré negativa; automático: o sentido) e **Sentido (R − / frente +)**: −1 em ré, 0 em neutro e em estacionamento, +1 em qualquer marcha à frente.

## Freio de mão {#handbrake}

Uma alavanca de freio de mão. Pegue a alavanca pela empunhadura e puxe-a para baixo. A força do freio acompanha o quanto você puxa. Solte, e a alavanca volta sozinha.

Para **travar**, puxe a alavanca até o fim e depois deslize o dedo ao longo da alavanca em direção à base: a empunhadura desliza para baixo, e a alavanca fica travada. Para **soltar** uma alavanca travada, toque no controle ou arraste a alavanca de volta.

**Valores**: a força de 0 a 100 e se a alavanca está travada.

**Aparências**: Clássico, Rali, Caminhão pesado, Retrô, Espaço profundo, Tático, Aura, Carga pesada, Máquinas de construção, Áudio Hi-Fi, Neo Órbita, Cabine off-road, Corrida, Blocos, Núcleo de circuito, Rock Crawler, Off-road, Supercarro, Fórmula, Burro de carga, Conceito, Longa distância, Sedã, Compacto, Buggy, Pôr do sol, 4x4 clássico, Miami, Alta tecnologia, Holograma.

**Ligações rápidas**: a entrada [Freio de mão](/docs/Application/Links/Blocks/InputBlocks#controller-handbrake) com os canais **Freio de mão puxado** (ligado/desligado, como um interruptor) e **Força do freio de mão**.

## Setas {#turn-signals}

Uma alavanca de seta com interruptor de luz.

- Arraste a alavanca **para cima** para a seta esquerda e **para baixo** para a seta direita. Ela fica onde você a deixa; arraste-a de volta para o meio para desligar a seta.
- **Toque** na alavanca ou no botão do farol para ligar ou desligar a luz. Isso não move a alavanca.

**Configurações**

- **Ícone: esquerda**, **Ícone: luz**, **Ícone: direita** (aba Estilo): os ícones das lâmpadas indicadoras.
- **As saídas das setas piscam** (aba Configurações, ativada por padrão): as saídas das setas piscam junto com a lâmpada da alavanca, então uma luz ligada a elas pisca sozinha. Quando a opção está desativada, as saídas ficam acesas sem piscar enquanto a seta está ligada. Os blocos sempre veem o estado contínuo.

**Valores**: seta esquerda, seta direita e luz, cada uma ligada ou desligada.

**Aparências**: Clássico, Corrida, Espaço profundo, Tático, Carga pesada, Máquinas de construção, Áudio Hi-Fi, Aura, Núcleo de circuito, Rock Crawler, Cabine off-road, Blocos, Neo Órbita, Caminhão pesado, Retrô, Rali, Off-road, Supercarro, Fórmula, Burro de carga, Conceito, Longa distância, Sedã, Compacto, Buggy, Pôr do sol, 4x4 clássico, Miami, Alta tecnologia, Holograma.

**Ligações rápidas**: a entrada [Setas](/docs/Application/Links/Blocks/InputBlocks#controller-turnsignals) com os canais **Setas (esquerda − / direita +)** (duas luzes de polaridade oposta em uma porta), **Seta esquerda**, **Seta direita** e **Luz**.

## Caixa de transferência {#transfer-case}

A caixa de transferência de um veículo off-road escolhe quais rodas o motor traciona. O controle tem um seletor com quatro posições e interruptores para os bloqueios do diferencial:

| Posição | O que significa |
|---|---|
| **2H** | tração em duas rodas: só as rodas traseiras são tracionadas, para estradas normais |
| **4H** | tração nas quatro rodas: todas as rodas são tracionadas, para lama, areia e neve |
| **N** | neutro: o motor fica desconectado das rodas |
| **4L** | tração nas quatro rodas com **reduzida**: lenta e forte, para subidas íngremes e trilhas em pedras |

Os **bloqueios do diferencial** fazem as rodas de um eixo (**dianteiro**, **traseiro**) ou os dois eixos (**central**) girarem juntos, para que uma roda que perdeu aderência não fique só patinando.

<Screenshot name="transfer-case-dashboard" alt="O controle da caixa de transferência em um painel: o seletor, os interruptores dos bloqueios e o mostrador" width={700} />

### Como usar {#transfer-case-use}

- **Seletor**: as posições de cima para baixo são 2H, 4H, N, 4L. Dependendo da aparência, é um **controle deslizante** (um botão estriado em uma fenda: deslize-o ao longo dela; quando você solta, ele se encaixa na posição mais próxima) ou um **seletor giratório** (gire-o; ele estala nas posições). A fenda é reta, então de 4H você só chega a 4L passando por N, como em uma caixa de transferência de alavanca de verdade.
- **Bloqueios**: uma fileira de interruptores para os bloqueios dianteiro, central e traseiro: chaves com lâmpada ou botões com trava cujo anel acende na cor de acento, dependendo da aparência. Toque em um interruptor para engatar o bloqueio e toque de novo para soltá-lo.
- **Mostrador**: as marcações 2H, 4H, N e 4L junto ao seletor não mudam; o mostrador exibe a posição selecionada e os bloqueios engatados (**F**, **C**, **R**) na cor de acento.

### Configurações {#transfer-case-settings}

Na aba **Configurações**:

- **Neutro (N)** (ativado por padrão): desative para um seletor só com 2H, 4H e 4L.
- **Bloqueio do diferencial dianteiro** (ativado), **Bloqueio do diferencial central** (desativado), **Bloqueio do diferencial traseiro** (ativado): quais interruptores de bloqueio o controle mostra. Se forem menos de três, eles vão para o meio da fileira.
- **Bloqueios dianteiro e central só em 4WD** (ativado): os bloqueios dianteiro e central só funcionam em 4H e 4L, como em um carro de verdade. Em 2H, um toque neles é recusado (o interruptor pisca em vermelho), e passar para 2H os solta. Em N, eles ficam como estão. O bloqueio traseiro funciona em qualquer posição.

### Valores {#transfer-case-values}

- A **posição**: 0 = 2H, 1 = 4H, 2 = N, 3 = 4L.
- **Tração nas quatro rodas**: ligada em 4H e 4L. **Reduzida**: ligada em 4L.
- Cada bloqueio: ligado ou desligado.

**Aparências**: há uma aparência para cada tema, com o nome dele: Clássico, 4x4 clássico, Off-road e uma para cada tema pago. Algumas aparências têm um controle deslizante, outras um seletor giratório. **Holograma** desenha o controle inteiro como um contorno de uma só cor, na cor de acento.

**Ligações rápidas**: a entrada [Caixa de transferência](/docs/Application/Links/Blocks/InputBlocks#controller-transfercase) com os canais **Tração nas quatro rodas**, **Reduzida**, **Bloqueio do diferencial dianteiro**, **Bloqueio do diferencial central** e **Bloqueio do diferencial traseiro** (cada um ligado/desligado, como um interruptor). A entrada [Veículo](/docs/Application/Links/Blocks/InputBlocks#src-vehicle) recebe a caixa de transferência inteira na configuração **Caixa de transferência**.

## Controle de trem {#train-controller}

Um controlador mestre de locomotiva com alavanca de aceleração e reversor.

- **Acelerador**: arraste a alavanca para cima ou para baixo. Ela tem 8 pontos de potência (0–8) e fica no ponto onde você a deixa.
- **Reversor**: arraste a manopla dele para cima para **para a frente** ou para baixo para **ré**; o meio é **neutro**. A manopla salta de uma posição para outra e nunca para no meio do caminho. Como em uma cabine de verdade, ela só se move quando o acelerador está em 0.

**Valores**: o ponto de potência (0–8), o reversor (1 = para a frente, 0 = neutro, −1 = ré) e a **tração**: ponto ÷ 8 × 100 com o sinal do sentido, de −100 a 100. A tração pode acionar um motor de trem diretamente.

**Aparências**: Original, Máquinas de construção, Áudio Hi-Fi, Aura, Blocos, Buggy, Núcleo de circuito, Compacto, Clássico, Conceito, Espaço profundo, Off-road, Carga pesada, 4x4 clássico, Caminhão pesado, Miami, Neo Órbita, Supercarro, Burro de carga, Cabine off-road, Corrida, Rali, Rock Crawler, Sedã, Pôr do sol, Tático, Longa distância, Retrô, Fórmula, Alta tecnologia, Holograma.

**Ligações rápidas**: a entrada [Slider](/docs/Application/Links/Blocks/InputBlocks#controller-train); ela dá a tração.

## Blocos {#blocks}

Cada controle especial acrescenta seus próprios blocos à categoria **Controladores na tela** em Blocos lógicos:

| Controle | Eventos | Valores |
|---|---|---|
| Volante | *quando o volante … movido / pressionado / solto* | *volante …*, *volante … pressionado / solto?* |
| Pedais | *quando os pedais … qualquer / freio / aceleração movido / pressionado / solto* | *pedais … aceleração / freio*, *pedal … pressionado / solto?* |
| Câmbios | *quando câmbio … troca de marcha / sobe a marcha / reduz a marcha / coloca em ponto morto / ré / estacionamento* | *marcha …*, *câmbio … em ponto morto / em ré / numa marcha à frente / em estacionamento?*, *marchas de …* |
| Freio de mão | *quando freio de mão … puxado / travado / destravado / solto* | *força do freio de mão …*, *freio de mão … travado / destravado / puxado?* |
| Setas | *quando setas … seta esquerda / seta direita / luz liga / desliga* | *setas … seta esquerda / seta direita / luz está ligado?* |
| Caixa de transferência | *quando caixa de transferência … 2H / 4H / N / 4L / tração nas quatro rodas / reduzida / bloqueio dianteiro / bloqueio central / bloqueio traseiro é engatado / é desengatado* | *caixa de transferência … [o mesmo] está engatado?*, *posição da caixa de transferência …* |
| Controle de trem | *quando controlador do trem … ponto alterado / aumentado / reduzido, acelerador fechado, reversor movido, alavanca solta* | *controlador do trem … tração / ponto de potência / reversor*, *controlador do trem … para frente / em ré / em neutro / no ponto 0?* |

O volante e os pedais também têm o bloco *som … de …*: ele escolhe um dos sons deles para os blocos de **Sons**. Detalhes: [Controladores na tela](/docs/Application/BlockBuilder/Blocks/DashboardControllers).

## Simulador de veículo {#vehicle-simulator}

Os controles especiais dão só a entrada bruta. O **simulador de veículo** transforma os pedais, a alavanca de câmbio e o freio de mão em um modelo que anda como um carro: acelera com inércia, segue no embalo, freia, dá ré, troca de marcha em D e fica parado no freio de mão.

- **Ligações rápidas**: use a entrada [Veículo](/docs/Application/Links/Blocks/InputBlocks#src-vehicle). Escolha os **Pedais**, a **Alavanca de câmbio**, o **Freio de mão** e a **Caixa de transferência** do seu painel, o **Tipo de veículo** (Carro, Veículo off-road, Carro esportivo, Caminhão) e a **Saída**: **Velocidade**, **Rotação do motor (rpm)**, **Freando** ou **No freio de mão**.
- **Blocos lógicos**: quando o painel tem pedais, uma alavanca de câmbio ou um freio de mão, aparece a categoria **Simulador**. Crie um veículo nela (**Criar veículo**) e coloque o bloco *dirigir* sob um evento. Encaixe valores nos espaços dele: *acelerador*, *freio*, *marcha*, *de* (número de marchas; o bloco *marchas de …* encaixa aqui), *freio de mão*, *travado* e *caixa de transferência* (o bloco *posição da caixa de transferência …* encaixa aqui; deixe vazio se o modelo não tiver caixa de transferência). Outros blocos do Simulador definem o tipo de veículo, a inércia do motor e a velocidade de ré, leem a velocidade, a rotação do motor e a marcha, e reagem quando o veículo arranca, para, freia ou troca de marcha.

Como o simulador dirige:

- O **acelerador** faz o modelo ganhar velocidade com inércia; solte-o, e o modelo segue no embalo. O **freio** reduz a velocidade.
- **Sem câmbio**, segurar o freio com o modelo parado faz ele dar ré.
- **Câmbio manual**: R dá ré, N não anda. Opcionalmente, cada marcha limita a velocidade máxima.
- **Câmbio automático**: R dá ré, N não anda, P segura o modelo como um freio de mão travado. Em D, o simulador sobe e reduz as marchas sozinho e mostra a marcha no seletor.
- **Freio de mão**: a força dele se soma à frenagem; um freio de mão travado pode segurar o modelo.
- **Caixa de transferência**: em 2H e 4H, o modelo anda como sem ela. Em **N**, não anda: o modelo segue no embalo, e o freio só reduz a velocidade, sem dar ré. Em **4L**, a velocidade fica limitada a 40 % para a frente e em ré, com a rotação do motor mais alta para compensar; um modelo mais rápido desacelera até o limite depois que você passa para 4L. Os bloqueios do diferencial não mudam a forma como o simulador dirige: são apenas saídas do controle.
- **Tipo de veículo**: um caminhão é mais pesado (mais inércia) e tem freio a ar; um carro esportivo reage rápido e dá ré mais depressa.

Os últimos pedais, alavanca de câmbio ou freio de mão não podem ser excluídos enquanto o programa usa blocos do Simulador.
