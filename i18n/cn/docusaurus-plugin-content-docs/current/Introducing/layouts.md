---
id: Layouts
title: 手机、平板和桌面
description: "MOCPilot 手机、平板和桌面布局中各项功能的位置，以及桌面版菜单和键盘快捷键。"
---

import Screenshot from '@site/src/components/Screenshot';

# 手机、平板和桌面 {#phone-tablet-and-desktop}

MOCPilot 有三种布局，应用会自动选择其中一种：

- **手机**：iPhone 和 Android 手机。
- **平板**：iPad 和 Android 平板（7 英寸及以上）。
- **桌面**：Mac 和 Windows 电脑。浏览器中的[网页编辑器](/docs/Introducing/WebEditor)也使用桌面版编辑器。

配置文件、编辑器和仪表板在各处都一样，只有导航方式不同。

## 手机 {#phone}

<Screenshot name="profiles-phone" alt="手机上带底部栏的“我的配置文件”页面" width={360} />

- **底部栏**中有**个人资料**、**设置**和**帮助**，登录后还会显示**通知**。
- **账户**位于**设置**的顶部。
- **我的配置文件**页眉中有**排序和筛选**、**连接遥控器**（遥控器图标）、**+**（新建配置文件、导入配置文件…、在线搜索）以及搜索框。
- 主要页面为竖屏显示。打开配置文件时，应用会切换为**横屏全屏**，让编辑器和仪表板占满整个屏幕。关闭配置文件后恢复竖屏。
- 在编辑器中，顶部的一排圆形按钮可快速打开：主页、撤销、重做、AI 构建器、编辑器设置、问题（快速连接）、游戏手柄、我的集线器、远程控制、仪表板、监视器（逻辑积木）以及运行 / 停止。

<Screenshot name="editor-phone" alt="手机上的配置文件编辑器，顶部有一排圆形按钮" width={900} />

## 平板 {#tablet}

<Screenshot name="profiles-tablet" alt="平板上带侧边栏的“我的配置文件”页面" width={900} />

- 左侧的**侧边栏**中有**个人资料**、**配置文件目录**、**通知**、**设置**和**帮助**。下方是 **MocPilot Pro** 卡片和你的账户（访客模式下显示**登录**）。侧边栏可以收起为图标。
- **我的配置文件**页眉中有**新建配置文件**（其菜单中还有导入配置文件…、连接遥控器和在线搜索）、**排序和筛选**、**按标签筛选**、**连接遥控器**以及搜索框。
- 轻点配置文件卡片即可选中它：底部栏会显示**分享**、**编辑**、**添加到收藏**和**启动**。连按两下卡片即可启动。长按卡片会打开它的菜单，其中还有**删除配置文件**。
- 在宽屏上，设置和帮助会在列表旁边打开。
- 配置文件以横屏打开，编辑器中的圆形按钮与手机上相同。

## 桌面（Mac 和 Windows） {#desktop-mac-and-windows}

<Screenshot name="profiles-desktop" alt="电脑上的“我的配置文件”" width={900} />

- 顶部栏右侧依次是：**账户**（访客模式下显示**登录**）、**通知**（登录后显示）、**连接遥控器**（遥控器图标）和**设置**（齿轮图标）。
- 设置、帮助、账户、新建配置文件、编辑配置文件、配置文件目录等页面会以**窗口**形式在配置文件列表上方打开。
- 单击配置文件卡片可查看可执行的操作（**分享…**、**编辑…**、**添加到收藏**、**启动**）；双击即可启动。右键单击卡片会打开它的菜单，其中还有**删除配置文件**。
- 在编辑器中，**仪表板**会在**独立窗口**中打开，这样你可以同时看到程序和仪表板。

### 菜单 {#menus}

在 Windows 上，菜单位于应用顶部栏的左侧。在 Mac 上，菜单位于屏幕顶部的系统菜单栏中。

| 菜单 | Windows | Mac |
|---|---|---|
| **MOCPilot**（应用菜单） | — | 关于 MOCPilot、设置…、退出 |
| **文件** | 新建配置文件、导入配置文件…、在线搜索、退出 | 新建配置文件、导入配置文件…、在线搜索、连接遥控器… |
| **视图** | 进入全屏 | 进入 / 退出全屏 |
| **窗口** | 最小化、最大化 / 还原 | 最小化 |
| **帮助** | MOCPilot 帮助、提出问题、报告错误、关于 MOCPilot | MOCPilot 帮助、提出问题、报告错误 |

打开配置文件后，编辑器有自己的**文件**、**编辑**、**视图**和**程序**菜单（参见[桌面菜单](/docs/Application/BlockBuilder/Editor#desktop-menus)），仪表板窗口则有**文件**、**编辑**和**视图**菜单（参见[仪表板](/docs/Application/Dashboard/DashboardOverview)）。

### 键盘快捷键 {#keyboard-shortcuts}

在 Mac 上，⌘（Command）相当于 Windows 上的 Ctrl；⇧ 是 Shift，⌃ 是 Control。

**任何位置**

| 操作 | Windows | Mac |
|---|---|---|
| 设置 | Ctrl+2 | ⌘, |
| 进入 / 退出全屏 | F11 或 Alt+Enter | ⌃⌘F |
| 最小化窗口 | — | ⌘M |
| 退出 | Alt+F4 | ⌘Q |

**我的配置文件**（未打开配置文件时）

| 操作 | Windows | Mac |
|---|---|---|
| 新建配置文件 | Ctrl+N | ⌘N |
| 导入配置文件 | Ctrl+O | ⌘O |
| 搜索配置文件 | Ctrl+F | — |
| 个人资料 / 设置 / 帮助 / 账户 | Ctrl+1 / Ctrl+2 / Ctrl+3 / Ctrl+4 | — |

**配置文件编辑器**

| 操作 | Windows | Mac |
|---|---|---|
| 关闭配置文件 | Ctrl+W | ⌘W |
| 运行 / 停止 | Ctrl+R / Ctrl+. | ⌘R / ⌘. |
| 撤销 / 重做 | Ctrl+Z / Ctrl+Shift+Z 或 Ctrl+Y | ⌘Z / ⇧⌘Z |
| 显示仪表板 | Ctrl+2 | ⌘2 |
| 我的集线器 | Ctrl+Shift+H | ⇧⌘H |
| AI 构建器 | Ctrl+Shift+I | ⇧⌘I |
| 显示 / 隐藏积木面板（逻辑积木） | Ctrl+P | ⌘P |
| 搜索积木面板（逻辑积木） | Ctrl+F | ⌘F |
| 监视器（逻辑积木） | Ctrl+Shift+M | ⇧⌘M |
| 放大 / 缩小 / 实际大小（逻辑积木） | Ctrl++ / Ctrl+− / Ctrl+0 | ⌘+ / ⌘− / ⌘0 |

**仪表板**

| 操作 | Windows | Mac |
|---|---|---|
| 撤销 / 重做 | Ctrl+Z / Ctrl+Shift+Z 或 Ctrl+Y | ⌘Z / ⇧⌘Z |
| 返回程序（仪表板位于主窗口时） | Ctrl+1 | ⌘1 |
| 关闭仪表板窗口 | — | ⌘W |
| 退出**选择**模式，或关闭属性面板 | Esc | Esc |
| 删除控件（属性面板已打开时） | Delete 或 Backspace | Delete 或 Backspace |
| 复制控件（属性面板已打开时） | Ctrl+D | ⌘D |

在接有键盘的平板上，Ctrl+B（iPad 上为 ⌘B）可显示或隐藏侧边栏。

## 各种布局中的配置文件编辑器 {#the-profile-editor-on-every-layout}

编辑器没有标签页。**程序**（快速连接的行或逻辑积木）占满整个屏幕，其他所有内容都通过按钮打开：

| 按钮 | 打开的内容 |
|---|---|
| **我的集线器** | 配置文件的[集线器槽位](/docs/Application/Hubs/ConnectingHubs) |
| **仪表板** | [仪表板](/docs/Application/Dashboard/DashboardOverview) |
| **游戏手柄** | [游戏手柄设置](/docs/Application/Dashboard/Gamepad) |
| **监视器** | 变量和列表的值（仅逻辑积木） |
| **编辑器设置** | [编辑器选项](/docs/Application/BlockBuilder/Editor#editor-settings) |
| **AI 构建器** | [AI 构建器](/docs/Application/Profiles/AiBuilder)（MocPilot Pro） |
| **问题** | 无法运行的行（仅快速连接） |
| **远程控制** | 在另一台设备上运行配置文件，并在这里控制它（MocPilot Pro）；参见[远程控制](/docs/Application/Profiles/RemoteControl) |
| **运行 / 停止** | 启动和停止程序 |
