---
id: MyBlocks
title: 私のブロック
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# 私のブロック {#my-blocks}

「私のブロック」を使うと、再利用できる独自のブロックを作れます。
通常のプログラミングにおける関数と同じで、動作を一度記述すれば、好きなだけ多くの場所で使えます。

## ブロック {#the-blocks}

### `定義する …` (達人) {#block_my_block_define}

<img src={useBaseUrl('/img/blocks/block_my_block_define.svg')} alt="block_my_block_define.svg" />

カテゴリーの上部にある**ブロックを作成**を押すと、新しいブロックを作成できます。プログラムエリアに、作ったブロックの名前が付いた `定義する` ハットブロックが追加されます。その下につなげたブロックが、作ったブロックの動作になります。

- 主な用途：繰り返し使う処理を、わかりやすい名前の 1 つのブロックにまとめます。

### 作ったブロック (達人) {#block_my_block}

<img src={useBaseUrl('/img/blocks/block_my_block.svg')} alt="block_my_block.svg" />

作ったブロックはすべて、その名前でパレットに表示されます。使うと、対応する `定義する` ブロックにつながったブロックが実行されます。

- 種類：スタックブロック
- 主な用途：スタックをコピーせずに、同じ処理を複数の場所で使います。

## さまざまな入力を持つ例 {#examples-with-different-inputs}

入力の組み合わせが異なるカスタムブロック：

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758091855.svg')} alt="block_myblock_1775758091855.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758113259.svg')} alt="block_myblock_1775758113259.svg" />
</div>

<div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px'}}>
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758130609.svg')} alt="block_myblock_1775758130609.svg" />
  <img src={useBaseUrl('/img/blocks/block_myblock_1775758145135.svg')} alt="block_myblock_1775758145135.svg" />
</div>

## プログラムでカスタムブロックを使う {#using-a-custom-block-in-a-program}

<img src={useBaseUrl('/img/my-blocks/my-blocks-usage-example.png')} alt="my-blocks-usage-example.png" />

この例では、カスタムブロックを `プログラムが開始されたとき` の下で使い、`定義する` スタックに実行するモーターの処理を入れています。

- よくある使い方：イベントのスクリプトで自分のブロックを使います。
- 利点：定義は 1 つで、使う場所はいくつでも。

## ブロックエディター {#the-block-editor}

<img src={useBaseUrl('/img/my-blocks/my-blocks-editor-cropped.png')} alt="my-blocks-editor-cropped.png" />

**ブロックを作成**エディターでは、ブロックの見た目をデザインします。ラベル（**ラベルを追加**）と入力（**入力を追加**：*数字またはテキスト*または*ブール値*）を追加できます。`定義する` スタックの中では、入力はブロックに渡された値を保持する変数のように使えます。

## 「私のブロック」を使う理由 {#why-use-my-blocks}

- 再利用：一度書けば何度でも使えます。
- 読みやすさ：長いスタックを繰り返す代わりに、意味のある名前が 1 つで済みます。
- 変更が簡単：すべてのコピーではなく、1 か所を直すだけで済みます。
- 構造化：大きなプログラムを小さな論理的なパーツに分けられます。

## 補足 {#notes}

- カスタムブロックはプロフィールに属し、そのプログラム内のどこでも使えます。
- ブロックには、どう動くかではなく、何をするかがわかる名前を付けましょう。
- 自分自身を呼び出すブロックは無限ループになることがあります。その場合はエディターが警告します。
