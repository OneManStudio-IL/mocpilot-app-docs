---
id: Operators
title: Operators
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Operators

Operators are reporter and Boolean blocks for math, comparisons, logic and text.

## Math

### `… + …` (Beginner) {#block_operator_plus}

<img src={useBaseUrl('/img/blocks/block_operator_plus.svg')} alt="block_operator_plus.svg" />

Returns the sum of two numbers.

### `… − …` (Beginner) {#block_operator_minus}

<img src={useBaseUrl('/img/blocks/block_operator_minus.svg')} alt="block_operator_minus.svg" />

Subtracts the second number from the first.

### `… × …` (Beginner) {#block_operator_multiply}

<img src={useBaseUrl('/img/blocks/block_operator_multiply.svg')} alt="block_operator_multiply.svg" />

Returns the product of two numbers.

### `… ÷ …` (Beginner) {#block_operator_divide}

<img src={useBaseUrl('/img/blocks/block_operator_divide.svg')} alt="block_operator_divide.svg" />

Divides the first number by the second.

### `… mod …` (Guru) {#block_operator_modulus}

<img src={useBaseUrl('/img/blocks/block_operator_modulus.svg')} alt="block_operator_modulus.svg" />

Returns the remainder after dividing the first number by the second.

### `round …` (Guru) {#block_operator_round}

<img src={useBaseUrl('/img/blocks/block_operator_round.svg')} alt="block_operator_round.svg" />

Rounds a number to the nearest whole number (for example, `2.6` becomes `3`).

### `… of …` (Guru) {#block_operator_math_single}

<img src={useBaseUrl('/img/blocks/block_operator_math_single.svg')} alt="block_operator_math_single.svg" />

Applies a function to one number. Angles are in degrees.

- `abs`: absolute value
- `floor`: round down to a whole number
- `ceiling`: round up to a whole number
- `sqrt`: square root
- `sin`, `cos`, `tan`: sine, cosine and tangent of an angle
- `asin`, `acos`, `atan`: the inverse functions; they return an angle
- `ln`: natural logarithm (base `e`)
- `log`: base-10 logarithm
- `e^`: `e` raised to the power of the number
- `10^`: `10` raised to the power of the number

### `… of … and …` (Guru) {#block_operator_math_pair}

<img src={useBaseUrl('/img/blocks/block_operator_math_pair.svg')} alt="block_operator_math_pair.svg" />

Applies a function to two numbers.

- `min`: the smaller of the two
- `max`: the larger of the two
- `pow`: the first number raised to the power of the second
- `atan2`: the angle of the point given by the two numbers
- `hypot`: the length of the hypotenuse with these two sides
- `copysign`: the first number with the sign of the second

### `pick random … to …` (Guru) {#block_operator_pick_random}

<img src={useBaseUrl('/img/blocks/block_operator_pick_random.svg')} alt="block_operator_pick_random.svg" />

Returns a random number between the two values.

## Comparison

### `… = …` (Beginner) {#block_operator_equal}

<img src={useBaseUrl('/img/blocks/block_operator_equal.svg')} alt="block_operator_equal.svg" />

Returns `true` when the two values are equal.

### `… ≠ …` (Advanced) {#block_operator_not_equal}

<img src={useBaseUrl('/img/blocks/block_operator_not_equal.svg')} alt="block_operator_not_equal.svg" />

Returns `true` when the two values are different.

### `… > …` (Beginner) {#block_operator_greater_than}

<img src={useBaseUrl('/img/blocks/block_operator_greater_than.svg')} alt="block_operator_greater_than.svg" />

Returns `true` when the left value is greater than the right one.

### `… < …` (Beginner) {#block_operator_less_than}

<img src={useBaseUrl('/img/blocks/block_operator_less_than.svg')} alt="block_operator_less_than.svg" />

Returns `true` when the left value is less than the right one.

### `is … in between … and …` (Advanced) {#block_operator_is_in_between}

<img src={useBaseUrl('/img/blocks/block_operator_is_in_between.svg')} alt="block_operator_is_in_between.svg" />

Returns `true` when the number lies between the two limits.

## Logic

### `… and …` (Advanced) {#block_operator_and}

<img src={useBaseUrl('/img/blocks/block_operator_and.svg')} alt="block_operator_and.svg" />

Returns `true` only when both conditions are true.

### `… or …` (Advanced) {#block_operator_or}

<img src={useBaseUrl('/img/blocks/block_operator_or.svg')} alt="block_operator_or.svg" />

Returns `true` when at least one of the conditions is true.

### `not …` (Advanced) {#block_operator_not}

<img src={useBaseUrl('/img/blocks/block_operator_not.svg')} alt="block_operator_not.svg" />

Turns `true` into `false` and `false` into `true`.

## Text

### `join … …` (Advanced) {#block_operator_join}

<img src={useBaseUrl('/img/blocks/block_operator_join.svg')} alt="block_operator_join.svg" />

Joins two pieces of text into one.

### `letter … of …` (Guru) {#block_operator_letter_at}

<img src={useBaseUrl('/img/blocks/block_operator_letter_at.svg')} alt="block_operator_letter_at.svg" />

Returns the letter at the given position in the text. The first letter is number 1.

### `length of …` (Advanced) {#block_operator_size_of_string}

<img src={useBaseUrl('/img/blocks/block_operator_size_of_string.svg')} alt="block_operator_size_of_string.svg" />

Returns the number of characters in the text.

### `… contains …` (Guru) {#block_operator_string_contains}

<img src={useBaseUrl('/img/blocks/block_operator_string_contains.svg')} alt="block_operator_string_contains.svg" />

Returns `true` when the first text contains the second one.
