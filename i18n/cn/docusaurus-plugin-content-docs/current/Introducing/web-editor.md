---
id: WebEditor
title: 网页编辑器
description: "在 mocpilot.com 的浏览器中编辑 MOCPilot 配置文件，并通过另一台设备上的应用驾驶模型。"
---

import Screenshot from '@site/src/components/Screenshot';

# mocpilot.com 上的网页编辑器 {#web-editor-on-mocpilotcom}

网页编辑器就是在浏览器中运行的 MOCPilot。它与应用完全相同，拥有同样的编辑器、仪表板和主题，因此本文档中的所有内容同样适用于它。

浏览器无法与蓝牙集线器通信，所以网页编辑器用于**编辑**。要测试配置文件，可以在浏览器中不连接集线器直接运行；要驾驶模型，则需要让手机、平板或电脑上的 MOCPilot 应用连接集线器（参见[远程控制](/docs/Application/Profiles/RemoteControl)）。

## 无需账户即可试用 {#try-it-without-an-account}

在 [mocpilot.com](https://mocpilot.com) 首页，每种编辑器（逻辑积木和快速连接）都有一个**试用演示**按钮，可打开一个演示配置文件。演示无需账户，也无需集线器。你可以在演示中试用所有主题和特殊控件；所做的更改不会保存。

## 编辑你自己的配置文件 {#edit-your-own-profiles}

1. 使用你的 MOCPilot 账户在 [mocpilot.com](https://mocpilot.com) 上登录。
2. 打开你的配置文件，在其中一个上点击**编辑**。
3. 像在应用中一样修改集线器、仪表板或程序。
4. 关闭配置文件（主页按钮）。编辑器会保存并上传配置文件，更改会通过[同步](/docs/Application/Account/Sync)到达你设备上的应用。

说明：

- 你只能编辑当前登录账户中的配置文件。否则会看到“此配置文件不在您的账户中”以及**返回网站**按钮。
- 你的购买项目和 MocPilot Pro 在浏览器中与在应用中一样可用。
- 在桌面浏览器中，仪表板是一个浮动面板，可以拖动并调整大小。
- 每次访问都会重新下载主题（约 15 MB），因此首次打开可能需要一点时间。
- 浏览器中无法导入和导出 `.dat` 文件；请使用应用。

## 运行配置文件 {#run-a-profile}

网页编辑器中的**运行**会在浏览器中运行配置文件：除蓝牙外，所有积木和行都能正常工作，非常适合测试逻辑、监视器和仪表板。当已配对集线器设备时（MocPilot Pro，见下文），**运行**会改为在集线器设备上启动配置文件。

## 远程控制 {#remote-control}

有了 [MocPilot Pro](/docs/Application/Account/Pro)，网页编辑器可以充当**遥控器**：模型旁边的手机、平板或电脑上的 MOCPilot 应用（即**集线器设备**）负责连接集线器并运行配置文件，浏览器页面则负责控制它。在配置文件的顶部栏中按下**远程控制**，然后按**显示代码**；在集线器设备上，于**我的配置文件**页面轻点**连接遥控器**并扫描代码。参见[远程控制](/docs/Application/Profiles/RemoteControl)。
