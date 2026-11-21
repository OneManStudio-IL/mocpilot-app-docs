---
id: TechnicMoveHubConfigurations
title: Technic Move Hub 配置
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Technic Move Hub 配置 {#technic-move-hub-configurations}

## 概述 {#overview}

与其他 LEGO® Powered Up 集线器不同，Technic Move Hub 的行为取决于加载到其中的配置。

MOCPilot 可以更改这一配置，使集线器与你要控制的 LEGO 官方套装相匹配。

## 支持的配置 {#supported-configurations}

MOCPilot 支持以下配置：

- **Porsche GT4 e-Performance**
- **Lamborghini Revuelto**
- **Batmobile™ Tumbler**

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_4.png')} alt="“设置集线器配置”积木中的 Technic Move Hub 配置选项" />

## 在“我的蓝牙集线器”中更改配置 {#change-configuration-from-my-bluetooth-hubs}

要在**我的蓝牙集线器**页面上更改配置：

1. 打开**我的蓝牙集线器**。
2. 找到 Technic Move Hub。
3. 打开集线器菜单。
4. 选择**选择配置**。
5. 选择所需的配置。
6. 在对话框中确认。

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_0.png')} alt="Technic Move Hub 上下文菜单中的“选择配置”操作" />

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_1.png')} alt="Technic Move Hub 配置子菜单" />

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_3.png')} alt="Technic Move Hub 重新配置确认对话框" />

:::warning 重要
更改配置会把程序写入集线器，这与固件更新非常相似。

在整个过程中请保持集线器开机，并让你的手机、平板电脑或电脑保持开启并靠近集线器，以保持蓝牙连接稳定。配置更改期间，请不要关闭 MOCPilot、关闭蓝牙或关闭集线器。

更改中断可能会损坏集线器固件。之后可能需要先进行[固件恢复](/docs/Application/Hubs/RecoveryHubFirmware/)，才能再次使用集线器。
:::

配置更改期间，集线器会忽略普通命令，其 LED 会依次变换颜色。新配置生效后，集线器会重启。

## 配置积木 {#configuration-blocks}

逻辑积木可以在程序运行时读取和更改配置。

### 设置集线器配置 {#set-hub-configuration}

<img src={useBaseUrl('/img/blocks/block_hubs_set_hub_config.svg')} alt="“设置集线器配置”积木" />

**设置集线器配置**积木会把一种支持的配置加载到所选集线器中。

- 集线器选择器：选择要重新配置的集线器。
- 配置选择器：选择目标配置。
- Technic Move Hub 可用的配置：**Porsche GT4 e-Performance**、**Lamborghini Revuelto** 和 **Batmobile™ Tumbler**。

请参阅[“设置集线器配置”积木的文档](/docs/Application/BlockBuilder/Blocks/Control/#block_hubs_set_hub_config)。

### 集线器配置 {#hub-configuration}

<img src={useBaseUrl('/img/blocks/block_hubs_all_control_hub_config.svg')} alt="“集线器配置”报告积木" />

**集线器配置**积木报告所选集线器的当前配置。

- 集线器选择器：选择要读取的集线器。
- 输出格式：**文本**返回配置名称。
- 输出格式：**索引**返回配置序号，便于在条件中进行比较。

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_5.png')} alt="“集线器配置”积木的输出格式选项" />

请参阅[“集线器配置”积木的文档](/docs/Application/BlockBuilder/Blocks/Control/#block_hubs_all_control_hub_config)。

### 动力脉冲 {#power-pulse}

<img src={useBaseUrl('/img/blocks/block_hubs_technicmove_motors_power_pulse.svg')} alt="Technic Move Hub 动力脉冲积木" />

**动力脉冲**积木向所选 Technic Move Hub 发送一次动力脉冲。它只适用于 **Batmobile™ Tumbler** 配置。

随后集线器会让电机以最大功率和速度短时间运转，约 1–2 秒。在快速连接中，相同的功能是[动力脉冲](/docs/Application/Links/Blocks/OutputBlocks#op-pulse)操作。

请参阅[“动力脉冲”积木的文档](/docs/Application/BlockBuilder/Blocks/Motors/#block_hubs_technicmove_motors_power_pulse)。

## 在程序运行时更改配置 {#change-configuration-during-program-runtime}

程序也可以在运行时更改配置。典型做法如下：

1. 读取集线器的当前配置。
2. 将其与配置文件所需的配置进行比较。
3. 如果配置不同，就设置所需的配置。
4. 重新配置后再次读取配置。
5. 只有当集线器报告的配置符合预期时才继续。
6. 如果所需的配置没有生效，就断开连接或停止程序。

此集线器的现成配置文件演示了具体做法。

<img src={useBaseUrl('/img/hubs/technic-move-hub-configurations/cfg_6.png')} alt="在运行时更改 Technic Move Hub 配置的积木示例" />
