---
id: Settings
title: 设置
description: "MOCPilot 应用设置：声音、振动、保持屏幕常亮、19 种应用语言、深色模式以及屏幕阅读器支持。"
---

import Screenshot from '@site/src/components/Screenshot';

# 设置 {#settings}

如何打开设置：

- **手机**：底部栏中的**设置**。
- **平板**：侧边栏中的**设置**。
- **电脑**：顶部栏中的齿轮按钮。在 Mac 上也可以选择 **MOCPilot → 设置…**（⌘,）；在 Windows 上，按 Ctrl+2。设置会在独立窗口中打开。

<Screenshot name="settings" alt="访客模式下的设置页面" width={900} />

## 账户 {#account}

在手机上，设置顶部会显示你的账户，访客模式下则显示**创建账户或登录**。在平板上，账户位于侧边栏底部；在电脑上，则是顶部栏中的**账户**按钮。参见[账户](/docs/Application/Account/UserAccount)。

## 设置 {#settings-1}

| 设置 | 作用 |
|---|---|
| **声音** | 应用和控件的声音（例如方向盘和踏板的音效） |
| **振动** | 触摸控件时短暂振动；仅适用于支持振动的手机 |
| **保持屏幕常亮** | 打开配置文件时防止屏幕熄灭；驾驶时请打开。适用于 iPhone、iPad、Android 和 Windows（Mac 不支持） |
| **语言** | 应用语言；参见下文的[语言](#language) |
| **深色模式** | 深色或浅色外观。首次启动时与设备外观保持一致 |

远程控制不在设置中：要让另一台设备控制这台设备，请使用**我的配置文件**页面上的**连接遥控器**。参见[远程控制](/docs/Application/Profiles/RemoteControl)。

## 语言 {#language}

首次启动时，如果应用支持设备的语言，MOCPilot 会使用该语言，否则使用英语。要更改语言：

- **手机和平板**：轻点**语言**，然后轻点一种语言。应用会立即切换。列表中不显示你当前正在使用的语言。
- **电脑**：点击**语言**，点击一种语言（它会显示 ✓；正在使用的语言标有**当前**），然后点击**应用**或按 Enter。**取消**或 Esc 会保留当前语言。

应用提供 19 种语言。它们在选择器中以各自的本地名称列出：

| 语言 | 在选择器中显示为 |
|---|---|
| 英语 | English |
| 德语 | Deutsch |
| 法语 | Français |
| 西班牙语 | Español |
| 意大利语 | Italiano |
| 荷兰语 | Nederlands |
| 乌克兰语 | Українська |
| 俄语 | Русский |
| 中文 | 中文 |
| 捷克语 | Čeština |
| 芬兰语 | Suomi |
| 日语 | 日本語 |
| 挪威语 | Norsk |
| 罗马尼亚语 | Română |
| 瑞典语 | Svenska |
| 斯洛伐克语 | Slovenčina |
| 葡萄牙语 | Português |
| 波兰语 | Polski |
| 丹麦语 | Dansk |

## 辅助功能 {#accessibility}

应用中的按钮都有名称，屏幕阅读器（Apple 设备上的 VoiceOver、Android 上的 TalkBack）会朗读这些名称。这也包括只显示图标的按钮，例如**返回**、**关闭**、**设置**或**撤销**。

## 关于 {#about}

在手机或平板上，设置底部的**版本**会打开**关于 MOCPilot**，其中有隐私政策、条款以及发行说明 / 新闻。在电脑上，请使用顶部栏中的**帮助 → 关于 MOCPilot**（在 Mac 上为 **MOCPilot → 关于 MOCPilot**）。

## 配置文件设置 {#profile-settings}

属于单个配置文件的设置位于编辑器中：

- **编辑器设置**：积木级别、点击启动积木、程序停止时停止集线器端口；参见[在编辑器中工作](/docs/Application/BlockBuilder/Editor#editor-settings)；
- **仪表板设置**：背景和网格；参见[仪表板](/docs/Application/Dashboard/DashboardOverview#dashboard-settings)；
- **游戏手柄**：参见[游戏手柄](/docs/Application/Dashboard/Gamepad)。

登录后，应用设置在你的所有设备上都相同。参见[设备间同步](/docs/Application/Account/Sync)。
