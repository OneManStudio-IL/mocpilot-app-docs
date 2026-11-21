---
id: Lists
title: 列表
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 列表 {#lists}

列表按顺序存储多个值。使用类别顶部的**创建列表**、**重命名列表**和**删除列表**来创建、重命名和删除列表。程序中至少有一个列表后，才会出现下面这些积木。列表项从 1 开始编号。

## 修改列表 {#changing-a-list}

### `添加 … 到 …`（进阶） {#block_lists_add}

<img src={useBaseUrl('/img/blocks/block_lists_add.svg')} alt="block_lists_add.svg" />

把一个值添加到列表末尾。

### `插入 … 在 … 的 …`（大师） {#block_lists_insert_at}

<img src={useBaseUrl('/img/blocks/block_lists_insert_at.svg')} alt="block_lists_insert_at.svg" />

在指定位置插入一个值；其后的各项依次后移一位。

### `替换项目 … 的 … 与 …`（大师） {#block_lists_replace_at}

<img src={useBaseUrl('/img/blocks/block_lists_replace_at.svg')} alt="block_lists_replace_at.svg" />

用新值替换指定位置的项。

### `删除 … 从 …`（进阶） {#block_lists_delete}

<img src={useBaseUrl('/img/blocks/block_lists_delete.svg')} alt="block_lists_delete.svg" />

删除指定位置的项。

### `清除 …`（进阶） {#block_lists_clear_all}

<img src={useBaseUrl('/img/blocks/block_lists_clear_all.svg')} alt="block_lists_clear_all.svg" />

删除列表中的所有项。

## 读取列表 {#reading-a-list}

### `项目 … 的 …`（进阶） {#block_lists_item_at}

<img src={useBaseUrl('/img/blocks/block_lists_item_at.svg')} alt="block_lists_item_at.svg" />

返回指定位置的项。

### `索引 … 在 …`（大师） {#block_lists_index_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_index_of_value.svg')} alt="block_lists_index_of_value.svg" />

返回第一个等于该值的项的位置；如果没有，则返回 `0`。

### `… 包含 …`（大师） {#block_lists_contains_value}

<img src={useBaseUrl('/img/blocks/block_lists_contains_value.svg')} alt="block_lists_contains_value.svg" />

列表包含该值时返回 `true`。

### `大小 …`（进阶） {#block_lists_size_of_value}

<img src={useBaseUrl('/img/blocks/block_lists_size_of_value.svg')} alt="block_lists_size_of_value.svg" />

返回列表中的项数。

### 列表（进阶） {#block_lists_value}

<img src={useBaseUrl('/img/blocks/list.svg')} alt="list.svg" />

每个列表都有一个以其名称命名的报告积木。它以文本形式返回整个列表。

- 输出示例：`[item1,item2,item3]`；空列表返回空文本。
- 典型用法：在监视器上显示列表，或把它传给接受列表的积木（例如距离传感器灯光的**点亮**积木）。
