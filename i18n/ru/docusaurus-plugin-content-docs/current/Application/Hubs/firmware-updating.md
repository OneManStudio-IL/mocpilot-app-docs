---
id: FirmwareUpdating
title: Обновление прошивки
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Обновление прошивки

MOCPilot умеет обновлять прошивку поддерживаемых хабов LEGO® Powered Up, когда выходит новая совместимая версия.

Некоторым хабам обновление нужно, чтобы они правильно работали с MOCPilot: в новой прошивке исправлены ошибки хаба и есть функции, на которые опирается приложение.

## Поддерживаемые хабы

MOCPilot умеет обновлять эти хабы:

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px', margin: '16px 0 24px'}}>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/devices/technic_hub_p.webp')} alt="Technic Hub" style={{maxWidth: '140px'}} />
    <div><strong>Technic Hub</strong></div>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/devices/city_hub_p.webp')} alt="City Hub" style={{maxWidth: '140px'}} />
    <div><strong>City Hub</strong></div>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/devices/boost_hub_p.webp')} alt="Boost Hub" style={{maxWidth: '140px'}} />
    <div><strong>Boost Hub</strong></div>
  </div>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/devices/technic_move_hub_p.webp')} alt="Technic Move Hub" style={{maxWidth: '140px'}} />
    <div><strong>Technic Move Hub</strong></div>
  </div>
</div>

## Перед началом

Убедитесь, что хаб и ваш телефон, планшет или компьютер достаточно заряжены.

Не выключайте хаб, пока идет обновление, и держите устройство рядом с ним, чтобы связь по Bluetooth не прерывалась. Пока прошивка загружается, не закрывайте MOCPilot, не выключайте Bluetooth и сам хаб.

:::warning Важно
Если прервать обновление, прошивка хаба может остаться недописанной. Тогда, прежде чем снова пользоваться хабом, придется восстановить прошивку.
:::

## Запуск обновления

При подключении хаба MOCPilot проверяет версию его прошивки. Если нужна более новая, приложение показывает окно обновления прошивки.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_1.png')} alt="Обновление прошивки" />

Нажмите **Обновить**, чтобы сразу начать обновление.

Чтобы обновить позже, нажмите **Отмена**. Обновление можно запустить из меню хаба в любой момент.

## Обновление позже из меню хаба

Чтобы запустить обновление самостоятельно:

1. Откройте **Мои Bluetooth хабы**.
2. Найдите хаб, который нужно обновить.
3. Откройте меню хаба.
4. Выберите **Обновить прошивку**.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_2.png')} alt="Обновить прошивку" />

## Во время обновления прошивки

MOCPilot загружает прошивку в хаб и показывает ход обновления.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_3.png')} alt="Обновление прошивки" />

Дождитесь окончания загрузки. Пока новая прошивка устанавливается, хаб может перезапуститься или ненадолго отключиться.

Затем MOCPilot снова ищет хаб. Держите хаб рядом и дождитесь, пока приложение к нему подключится.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_4.png')} alt="Обновление прошивки" />

## Завершение обновления

Когда обновление закончится, MOCPilot сообщит об этом.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_5.png')} alt="Обновление прошивки" />

Нажмите **OK**. Хаб переподключится, а в его карточке появится новая версия прошивки.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_6.png')} alt="Обновление прошивки" />

Теперь можно продолжать использовать хаб с MOCPilot.

## Если обновление не удалось

Если обновление не удалось, MOCPilot покажет сообщение об ошибке.

<img src={useBaseUrl('/img/hubs/firmware-updating/fu_7.png')} alt="Обновление прошивки" />

Сначала выключите и снова включите хаб и повторите обновление:

1. Выключите хаб.
2. Снова включите хаб.
3. Держите хаб рядом с устройством.
4. Подключитесь к хабу в MOCPilot.
5. Снова запустите обновление прошивки.

Если хаб по-прежнему ведет себя странно, возможно, нужно восстановить прошивку: см. [Восстановление прошивки хаба](/docs/Application/Hubs/RecoveryHubFirmware/).
