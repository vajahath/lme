> **lme 1.5 Release Candidate** <br> 
>  Actual release scheduled for 6th March 2017 :balloon:

[![Build Status](https://travis-ci.org/vajahath/lme.svg?branch=master)](https://travis-ci.org/vajahath/lme)
[![Known Vulnerabilities](https://snyk.io/test/npm/lme/badge.svg)](https://snyk.io/test/npm/lme)

![](https://raw.githubusercontent.com/vajahath/lme/stable/media/logo.png)

**`console.log` ging done right, beautifully.**


You don't have to write the 13 char long `console.log()` anymore. Try:

```javascript
lme.d("hello world");
```
:dizzy: _This package is built from ground up with simplicity in mind. Best configuration ships with this package. i.e, You don't have to configure anything extra to start using this package. But if you need something unique, or if color of your terminal background contradicts with this package's colors (causing accessibility issues), or if you are a kind of unicorn, you have wonderful options to adjust them here. And this package is bound to strictly follow semantic versioning._

> **v1.5** is out. **What's new?**<br>
>  **-** Set environment variable to [adjust level of logging](https://github.com/vajahath/lme/wiki/Adjust-Logging-Level).<br>
>  **-** Define your own [color schemes for lines](https://github.com/vajahath/lme/wiki/Custom-Color-Schemes) <br>
>  **-** Define your own [color schemes for texts](https://github.com/vajahath/lme/wiki/Custom-Color-Schemes) <br>
>  **-** Multiple argumnets support: _`lme.s("hi", "hello")`_ <br>
>  **-** Stability and performance improvements.

## Why `lme` *( logme )*
- Clean and semantically focused.
- Consistent design for errors, warnings, successes etc.
- Simpler to use than `console.log()` or even `console.log(chalk.red("hi"));`
- **[Draw lines](#drawing-lines-with-lmeline)** with just a single function, `lme.line()`.
- Automatically expands `objects` and `arrays`. So that, you don't have to use `JSON.stringify()` anymore.
- **[Define your own color schemes](https://github.com/vajahath/lme/wiki/Custom-Color-Schemes)** with `lmeconfig.json` file.
- [Set environment variables to adjust logging level](https://github.com/vajahath/lme/wiki/Adjust-Logging-Level).
- Actively maintained.

![](https://raw.githubusercontent.com/vajahath/lme/stable/media/windows-object.png)
![](https://raw.githubusercontent.com/vajahath/lme/stable/media/windows-string.png)
![](https://raw.githubusercontent.com/vajahath/lme/stable/media/windows-line.png)


## Install / Update

```bash
npm install --save lme
```

## Usage

### Syntax

`lme.<status>(message);`

### Example
```javascript
const lme = require('lme');

lme.d("my kitty is pinky!"); // default style, used for anonymous outputs.
lme.e("Snap! something went wrong."); // used for logging errors.
lme.s("Oh yeah!"); // used for logging success.
lme.w("Attention! Thank you for your attention."); // used for logging warnings.

// lines
lme.line() // used to draw lines
lme.eline() // used to draw lines in error theme.
lme.sline() // used to draw lines in success theme.
```
> **Tip:** Use `lme` in every file without requiring it in each file by defining it globally. 
> [Show me how!](https://github.com/vajahath/lme/wiki/Defining-lme-globally)

# APIs

**Syntax :** `lme.<status>(message);`

- **where `<status>` can have the following values:**

| status        | name       | when to use                | example               |
| :------------ | :--------- | :------------------------- | :-------------------- |
| `d`           | default    | default output             | `lme.d("hi");`        |
| `s`           | success    | on success output          | `lme.s("hi");`        |
| `e`           | error      | on error-ed output         | `lme.e("hi");`        |
| `w`           | warning    | for warnings like output   | `lme.w("hi");`        |
| `h`           | highlight  | for highlighting an output | `lme.h("hi");`        |
| `i`           | info       | for info like output       | `lme.i("hi");`        |
| `t`           | trace      | for tracing stack          | `lme.t("hi");`        |

<br>

**where `message` can be `string` / `float` / `int` / `objects`.** *(note that javascript treats `arrays` as `objects`.)*

You can also use multiple arguments with `lme` like:
```js
lme.d(message[, message]);
```

## Drawing lines with `lme.line()`

**Syntax :** `lme.line(character, length)`. (both arguments are optional)

You can prefix `d`, `s`, `e`, `w`, `h` to the `line()` function to obtain the corresponding color scheme for your line. You can also simply use `lme.line()` which has some default values as described below.

### Argument List

| argument        | type       | purpose                                                     | default value    |
| :-------------- | :--------- | :---------------------------------------------------------- | :--------------- |
| `character`     | `string`   | determines which character should be used for drawing lines | `-`              |
| `length`        | `integer`  | length of the line                                          | 30               |

<br>

### Examples

```javascript
lme.line();
lme.eline("^");
lme.sline("@", 12);
lme.wline("#", 50);
```

### APIs for drawing lines

| status            | name            | when to use                | example                   |
| :---------------- | :-------------- | :------------------------- | :------------------------ |
| `line`            | default         | default output             | `lme.line();`             |
| `dline`           | same as line    | default output             | `lme.dline("*", 5);`      |
| `sline`           | success         | on success output          | `lme.sline("*");`         |
| `eline`           | error           | on error-ed output         | `lme.eline("/", 50);`     |
| `wline`           | warning         | for warnings like output   | `lme.wline("*");`         |
| `hline`           | highlight       | for highlighting an output | `lme.hline("*");`         |


# Advanced fearures

- **[Custom Color Schemes](https://github.com/vajahath/lme/wiki/Custom-Color-Schemes):** Define your own color schems.
- **[Adjust logging level](https://github.com/vajahath/lme/wiki/Adjust-Logging-Level):** Set environment variable to adjust logging levels.

[Wiki](https://github.com/vajahath/lme/wiki)
More configurations are on its way.<br>

If you wish to file any feature/bugs, mention it on [issues](https://github.com/vajahath/lme/issues).
<br>

Enjoy.

## Thanks
Thanks to everyone who contributed to this project by means of providing feedback, rising issues, opening pull requests and reviewing codes.
Thanks for using `lme`.

#### Contributors
- [@demacdonald](https://github.com/demacdonald)
- [@amandeepmittal](https://github.com/amandeepmittal)

#### Loves lme? :heart:
tell your friends.. :two_men_holding_hands: <br>
star this project :star:

## Change log

- **v1.5.0** (6th March 2017)
    - Support for [custom separate color schemes for line and text](https://github.com/vajahath/lme/wiki/Custom-Color-Schemes).
    - [Adjust log level](https://github.com/vajahath/lme/wiki/Adjust-Logging-Level) with environment variable.
    - Better directory organization
    - Better documentation (including [Wiki](https://github.com/vajahath/lme/wiki))
    - Adds vulnerability test.
    - Stability improvements
- **v1.4.1, v1.4.2**
    - Patch: Excluding an unnecessary folder -> reduces package size.
    - Updating docs and media.
- **v1.4.0** (26th Jan 2017)
    - Added support for custom color configuration.
    - Added support for multiple arguments. (*thanks [@demacdonald](https://github.com/demacdonald)*)
    - Stability and performance improvements.

[See detailed change log](https://github.com/vajahath/lme/wiki/Change-Log)

## License
MIT &copy; [Vajahath Ahmed](https://mycolorpad.blogspot.in)
