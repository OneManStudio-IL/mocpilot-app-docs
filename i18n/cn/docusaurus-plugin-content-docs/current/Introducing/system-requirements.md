---
id: SystemRequirements
title: 系统要求
description: "MOCPilot 支持的操作系统、蓝牙、内存和浏览器。"
---

# 系统要求 {#system-requirements}

MOCPilot 可在手机、平板和电脑上运行。要驾驶模型，设备还需要具备蓝牙，并配有[受支持的集线器](/docs/Introducing/SupportedDevices)。

## 操作系统 {#operating-systems}

| 平台 | 最低版本 | 获取途径 |
|---|---|---|
| iPhone 和 iPad | iOS / iPadOS 17 | App Store |
| Android 手机和平板 | Android 10 | Google Play |
| Mac | macOS 13 Ventura | App Store |
| Windows PC（64 位，x64） | Windows 10 版本 1809 或 Windows 11 | Microsoft Store |

应用商店链接可在 [mocpilot.com](https://mocpilot.com) 上找到。应用会自动选择手机、平板或桌面布局；参见[手机、平板和桌面](/docs/Introducing/Layouts)。

## 蓝牙 {#bluetooth}

- 集线器通过**低功耗蓝牙**（Bluetooth 4.0 或更新版本）连接。几乎所有手机和平板都支持；在电脑上，可使用内置适配器或 USB 蓝牙适配器。
- **Robot Inventor** 集线器使用经典蓝牙。它可在 Android、Mac 和 Windows 上使用，但不支持 iPhone 和 iPad。
- **Mould King** 集线器以蓝牙广播（advertising）的方式接收命令。在 Windows 上，Mould King 6.0 需要支持广播的适配器和驱动程序，而 Mould King 4.0 完全无法使用；请改用手机或平板。
- 应用会请求蓝牙权限（在 Android 上还会请求“附近的设备”或“位置信息”权限）。参见[蓝牙和权限](/docs/Help/BluetoothPermissions)。

## 内存 {#memory}

在内存小于 4 GB 的设备上，MOCPilot 会以更简单的方式绘制逻辑积木，使大型程序也能保持流畅。这一切都会自动进行，积木的功能不受影响。

## 网页编辑器 {#web-editor}

mocpilot.com 上的[网页编辑器](/docs/Introducing/WebEditor)在浏览器中运行：

- 请使用最新版本的桌面浏览器；编辑器需要 WebAssembly；
- 首次打开时需要下载约 20 MB 的编辑器和约 15 MB 的主题，因此网速快一些会更好；
- 浏览器无法连接蓝牙集线器：要在浏览器中驾驶模型，请使用[远程控制](/docs/Application/Profiles/RemoteControl)，这需要浏览器支持 WebRTC；
- 如果看到“编辑器无法在此浏览器中启动。”，请更新浏览器或换用其他浏览器。

## 网络 {#internet}

集线器、你的配置文件和已下载的主题可离线使用。登录、同步、目录、AI 构建器、远程控制和购买需要网络连接。参见[离线使用](/docs/Application/Account/Sync#working-offline)。
