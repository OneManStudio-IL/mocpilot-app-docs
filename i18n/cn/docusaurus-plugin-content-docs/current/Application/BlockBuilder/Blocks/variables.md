---
id: Variables
title: 变量
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 变量 {#variables}

变量用来存储程序中每个脚本都能读取和修改的值。使用类别顶部的**创建变量**、**重命名变量**和**删除变量**来创建、重命名和删除变量。程序中至少有一个变量后，才会出现下面这些积木。

## 修改变量 {#changing-a-variable}

### `设置 … 为 …`（初学者） {#block_variables_set_to}

<img src={useBaseUrl('/img/blocks/block_variables_set_to.svg')} alt="block_variables_set_to.svg" />

把所选变量设置为某个值。

- 典型用法：设置初始值，替换之前的值。

### `更改 … 通过 …`（进阶） {#block_variables_change_by}

<img src={useBaseUrl('/img/blocks/block_variables_change_by.svg')} alt="block_variables_change_by.svg" />

给所选变量加上一个数。要做减法，请使用负数。

- 典型用法：计数器、分数、累加距离或时间。

## 读取变量 {#reading-a-variable}

### 变量（初学者） {#block_variables_value}

<img src={useBaseUrl('/img/blocks/variable.svg')} alt="variable.svg" />

每个变量都有一个以其名称命名的报告积木。它返回变量的当前值。

- 典型用法：把这个值放进运算符、条件以及其他积木的输入中。
- 程序运行时，[监视器](/docs/Application/BlockBuilder/Editor#monitor)会显示所有变量的值。
