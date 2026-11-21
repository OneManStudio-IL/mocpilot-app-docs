---
id: QuickStart
title: 快速入门
description: "安装 MOCPilot、登录、创建第一个配置文件，几分钟内就能驾驶模型。"
---

import Screenshot from '@site/src/components/Screenshot';

# 快速入门 {#quick-start}

本指南将带你从安装应用一直到驾驶你的第一个模型。你需要一个受支持的集线器和一个电机；参见[支持的设备](/docs/Introducing/SupportedDevices)。

## 1. 安装应用 {#1-install-the-app}

MOCPilot 可在 App Store（iPhone、iPad、Mac）、Google Play（Android）和 Microsoft Store（Windows）下载。下载链接可在 [mocpilot.com](https://mocpilot.com) 上找到。

## 2. 登录，或不使用账户继续 {#2-sign-in-or-continue-without-an-account}

首次启动时，应用会请你登录。你可以使用邮箱或登录名加密码、Google 或 Apple ID 登录，也可以创建新账户。

<Screenshot name="sign-in" alt="MOCPilot 登录界面" width={900} />

我们建议使用账户：

- 你的配置文件和设置会保存在服务器上，并在你的设备之间同步；
- 更换或丢失设备后，可以找回你的数据；
- 购买项目和 MocPilot Pro 在你的所有设备上都可使用。

也可以选择**无需账户继续**，但这样所有内容都只保存在这台设备上，删除应用后就会丢失。你可以稍后在**设置 → 账户**中登录。参见[账户](/docs/Application/Account/UserAccount)。

## 3. 熟悉界面 {#3-find-your-way-around}

- 在**手机**上，底部栏有**个人资料**、**设置**和**帮助**（登录后还有**通知**）。
- 在**平板**上，这些分区、**配置文件目录**和你的账户都在侧边栏中。
- 在**电脑**上，使用顶部栏：左侧是菜单；右侧是账户、通知和设置。

参见[手机、平板和桌面](/docs/Introducing/Layouts)。

## 4. 创建配置文件 {#4-create-a-profile}

1. 在**我的配置文件**页面，轻点 **+** → **新建配置文件**（手机），或选择**新建配置文件**（平板和电脑，也可以用**文件 → 新建配置文件**）。
2. 选择**程序类型**：
   - **快速连接**：无需代码即可驾驶模型。最适合初次尝试。
   - **逻辑积木**：需要事件、循环、条件和传感器时选择。
3. 输入**名称**，如果愿意，还可以添加一张图片。
4. 轻点**创建**。

<Screenshot name="create-profile-tiles" alt="新建配置文件页面，带有逻辑积木和快速连接两个磁贴" width={900} />

配置文件会在编辑器中打开。更多内容请参见[创建配置文件](/docs/Application/Profiles/CreateProfile)。

:::tip 想要现成的模型？
打开**配置文件目录**（在配置文件页面中选择**在线搜索**），为你的套装安装官方配置文件。参见[目录与发布](/docs/Application/Profiles/Catalog)。
:::

## 5. 添加集线器 {#5-add-your-hub}

1. 在编辑器中打开**我的集线器**。
2. 在空闲槽位中轻点**添加新集线器**，选择集线器型号，然后轻点**添加**。
3. 打开集线器电源，按下它的按钮，等待 MOCPilot 找到它。

<Screenshot name="my-hubs" alt="带有集线器槽位的“我的集线器”页面" width={900} />

如果应用提示更新固件，请按照[固件更新](/docs/Application/Hubs/FirmwareUpdating)操作。更多内容请参见[添加并连接集线器](/docs/Application/Hubs/ConnectingHubs)。

## 6. 在仪表板上摆放控件 {#6-place-controls-on-the-dashboard}

1. 打开**仪表板**。
2. 轻点 **+**（**添加控制器**），选择**操纵杆**，然后轻点**添加到仪表板**。
3. 把它拖到你想要的位置。轻点它可以更改大小、颜色或行为。

<Screenshot name="controller-palette" alt="添加控制器面板，已选中操纵杆" width={900} />

参见[添加和排列控件](/docs/Application/Dashboard/ArrangingControls)。

## 7. 把控件连接到电机 {#7-connect-the-control-to-a-motor}

**快速连接：**从**输入**中把操纵杆输入（例如 *JOY1 Y 轴*）拖到空行，再从**输出**中添加**电机**操作和**集线器**输出，然后轻点电机所插的端口。行上没有红框时，就表示设置完成。参见[快速连接](/docs/Application/Links/LinksIntroducing)。

**逻辑积木：**添加一个*当程序启动时*积木、一个*永远重复*循环，以及一个读取操纵杆数值的*设置电机速度*积木。参见[逻辑积木](/docs/Application/BlockBuilder/Blocks/BlocksIntroducing)和[示例](/docs/Application/BlockBuilder/Examples)。

## 8. 按下运行 {#8-press-run}

按下**运行**（▶）。移动操纵杆，电机就会转动。按下**停止**即可回到编辑状态。

就是这么简单。接下来：

- 了解所有[控件类型](/docs/Application/Dashboard/ControlTypes)。
- 用[主题](/docs/Application/Themes/ThemesOverview)给仪表板换个新外观。
- 连接[游戏手柄](/docs/Application/Dashboard/Gamepad)。
- 如果遇到问题，请参见[故障排除](/docs/Help/Troubleshooting)。
