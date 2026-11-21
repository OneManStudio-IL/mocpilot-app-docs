---
id: AboutApp
title: 关于 MOCPilot
description: "MOCPilot 能把手机、平板或电脑变成 LEGO® 及兼容蓝牙模型的遥控器。"
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Screenshot from '@site/src/components/Screenshot';

# MOCPilot：拼搭、驾驶、掌控一切 {#mocpilot-build-it-drive-it-control-everything}

**MOCPilot** 能把你的手机、平板或电脑变成 LEGO® 及兼容蓝牙模型的遥控器：小车、卡车、火车、起重机、机器人，以及你自己设计的 MOC。

控制界面由你亲手设计：在**仪表板**上摆放操纵杆、滑块、按钮、方向盘和指示器。再由**程序**把仪表板与**集线器**上的电机和灯光连接起来。MOCPilot 提供两种程序编辑器：

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', margin: '24px 0'}}>
  <div>
    <img src={useBaseUrl('/img/illustrations/editor_links.svg')} alt="快速连接编辑器：从输入到集线器的一行行连接" style={{width: '100%'}} />
    <h3>快速连接</h3>
    <p>无需编写代码。每一行把一个控件连接到一个电机或灯光：<em>输入 → 处理 → 操作 → 集线器</em>。几分钟就能让一辆车跑起来。<a href="/docs/Application/Links/LinksIntroducing">了解更多</a>。</p>
  </div>
  <div>
    <img src={useBaseUrl('/img/illustrations/editor_blocks.svg')} alt="逻辑积木编辑器：积木程序" style={{width: '100%'}} />
    <h3>逻辑积木</h3>
    <p>可视化积木，支持事件、循环、条件、变量和传感器数据。适合机器人、自动化以及一切需要逻辑的场景。<a href="/docs/Application/BlockBuilder/Blocks/BlocksIntroducing">了解更多</a>。</p>
  </div>
</div>

## 你可以做什么 {#what-you-can-do}

- **驾驶任何模型**：使用你自己设计的仪表板，包括操纵杆、滑块、按钮、开关、步进开关、监视器，以及方向盘、踏板、变速箱、手刹、转向灯和火车控制器等特殊控件。
- **使用真实的集线器**：LEGO® Powered Up、Technic™、Technic Move、BOOST、City、WeDo 2.0、Robot Inventor、BuWizz、SBrick 和 Mould King。参见[支持的设备](/docs/Introducing/SupportedDevices)。
- **使用游戏手柄**（Xbox 或 PlayStation 风格）代替触摸屏。
- **读取传感器**：集线器的电量和倾斜，电机的速度和位置，颜色和距离传感器，以及手机的倾斜。
- **打造专属仪表板**：使用[主题](/docs/Application/Themes/ThemesOverview)。
- **配置文件随处可用**：登录账户后，配置文件会在你的设备之间同步，还可以在 [mocpilot.com](/docs/Introducing/WebEditor) 的浏览器中编辑。
- **用另一台设备驾驶**：有了 MocPilot Pro，一台设备负责连接集线器，另一台设备或网页编辑器充当遥控器。
- **分享**：从[配置文件目录](/docs/Application/Profiles/Catalog)安装配置文件，也可以发布你自己的作品。

<Screenshot name="dashboard-run" alt="驾驶模型时的 MOCPilot 仪表板" width={900} />

## MOCPilot 可以在哪里运行 {#where-mocpilot-runs}

| 设备 | 布局 |
|---|---|
| iPhone 和 Android 手机 | 手机布局：底部栏；打开的配置文件以横屏全屏显示 |
| iPad 和 Android 平板 | 平板布局：侧边栏，编辑器空间更大 |
| Mac 和 Windows 电脑 | 桌面布局：菜单、键盘快捷键，仪表板在独立窗口中 |
| mocpilot.com 上的浏览器 | [网页编辑器](/docs/Introducing/WebEditor)：编辑配置文件；集线器由另一台设备上的应用连接 |

详见[手机、平板和桌面](/docs/Introducing/Layouts)。

集线器、你的配置文件和已下载的主题在没有网络时也能使用。参见[离线使用](/docs/Application/Account/Sync#working-offline)。

## 从哪里开始 {#where-to-start}

1. 阅读 [MOCPilot 的工作原理](/docs/Introducing/HowItWorks)：花五分钟，之后的一切都会更容易。
2. 按照[快速入门](/docs/Introducing/QuickStart)驾驶你的第一个模型。
3. 不确定选哪种编辑器？在[创建配置文件](/docs/Application/Profiles/CreateProfile#choose-the-program-type)中比较一下。

:::note
LEGO®、LEGO 标志、Powered Up 和 Technic 是乐高集团的商标，乐高集团不赞助、授权或认可 MOCPilot。
:::
