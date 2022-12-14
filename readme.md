# ansi-center-align [![NPM version](https://img.shields.io/npm/v/ansi-center-align.svg?style=flat)](https://www.npmjs.com/package/ansi-center-align) [![NPM monthly downloads](https://img.shields.io/npm/dm/ansi-center-align.svg?style=flat)](https://npmjs.org/package/ansi-center-align) [![NPM total downloads](https://img.shields.io/npm/dt/ansi-center-align.svg?style=flat)](https://npmjs.org/package/ansi-center-align)

Center-align the text in a string. Handles ANSI styles.

> This package was based on the wonderful [center-align](https://github.com/jonschlinkert/center-align) package created by [Jon Schlinkert](https://github.com/jonschlinkert)

## Install

Install with your favorite package manager:

```sh
npm install --save ansi-center-align
```

## Usage

```js
import centerAlign from 'ansi-center-align';
centerAlign(val, width);
```

## Params

* `val` **{string | string[]}**: the string or array of strings to center align
* `width` **{number}** (optional): the total width of each line in the expected result, after it's centered.

## Examples

```js
console.log(centerAlign('foo')); //=> 'foo' (does nothing)
console.log(centerAlign('foo', 12)); //=> '    foo    '
console.log(centerAlign('foo', 10)); //=> '   foo   '
console.log(centerAlign('foo', 8));  //=> '  foo  '
```

### Multiple lines

If expected `width` is not provided, the _length of the longest line_ will be used.

## Example

If used on the following:

```js
// value can be a string, or an array of strings
centerAlign([
  'Lorem ipsum dolor sit amet,',
  'consectetur adipiscing',
  'elit, sed do eiusmod tempor incididunt',
  'ut labore et dolore',
  'magna aliqua. Ut enim ad minim',
  'veniam, quis'
]);
```

The result would be:

```text
     Lorem ipsum dolor sit amet,
        consectetur adipiscing
elit, sed do eiusmod tempor incididunt
         ut labore et dolore
    magna aliqua. Ut enim ad minim
             veniam, quis
```

## About

### Related projects

* [center-align](https://www.npmjs.com/package/center-align): Center-align the text in a string. (but doesn't handle ANSI styles). | [homepage](https://github.com/jonschlinkert/center-align "Center-align the text in a string.")
* [align-text](https://www.npmjs.com/package/align-text): Align the text in a string. | [homepage](https://github.com/jonschlinkert/align-text "Align the text in a string.")
* [justified](https://www.npmjs.com/package/justified): Wrap words to a specified length and justified the text. | [homepage](https://github.com/jonschlinkert/justified "Wrap words to a specified length and justified the text.")
* [right-align](https://www.npmjs.com/package/right-align): Right-align the text in a string. | [homepage](https://github.com/jonschlinkert/right-align "Right-align the text in a string.")
* [word-wrap](https://www.npmjs.com/package/word-wrap): Wrap words to a specified length. | [homepage](https://github.com/jonschlinkert/word-wrap "Wrap words to a specified length.")
