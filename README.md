> lme 1.4 pre-release: Request for comments and review. <br>
> Production npm release on 26th Jan 2017.

[![Build Status](https://travis-ci.org/vajahath/lme.svg?branch=line-colors)](https://travis-ci.org/vajahath/lme)

![](https://raw.githubusercontent.com/vajahath/lme/master/media/logo.png)

**`console.log` ging done right, beautifully.**


You don't have to write the 13 char long `console.log()` anymore. Try:

```javascript
lme.d("hello world");
```

> **v1.4** is out. **What's new?**<br>
>  **-** Now [define your own color schemes](#custom-color-schemes)! <br>
>  **-** Multiple argumnets support: _`lme.s("hi", "hello")`_ <br>
>  **-** Stability and performance improvements.


## Why `lme` *( logme )*
- Simpler to use than `console.log()` or even `console.log(chalk.red("hi"));`
- **Draw lines** with just a single function, [`lme.line()`](#drawing-lines-with-lmeline).
- Automatically expands `objects` and `arrays`. So that, you don't have to use `JSON.stringify()` anymore.
- **[Define your own color schemes](#custom-color-schemes)** with `lmeconfig.json` file.
- Clean and semantically focused.
- Actively maintained.
- Consistent design for errors, warnings, successes etc.

![](https://raw.githubusercontent.com/vajahath/lme/master/media/obj-img.png)
![](https://raw.githubusercontent.com/vajahath/lme/master/media/str-img.png)
![](https://raw.githubusercontent.com/vajahath/lme/master/media/lines.png)


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


## Custom Color Schemes
You can add your own color scheme to your project and make it unique! It's simple. Here is how:

 1. Go to your application root directory
 2. Create an `lmeconfig.json` file there with the following content.
 3. Restart your application.

### Content of `lmeconfig.json`
Basically, this file describes your configurations that the `lme` should follow. If no such valid files are found at the application root, it will follow the default configurations.

Below is an example `lmeconfig.json`:
```json
{
    "colors": {
        "default": ["blue"],
        "success": ["bold", "cyan"]
    }
}
```
This configuration will overwrite the default configurations.
So, 

 - when you use `lme.d("hi")` next time, it will be in blue.
 - when you use `lme.s("hi")` next time, text will be bold and color will be cyan.
 - Nothing else will be changed.

### Possible values in `lmeconfig.json`

#### Styling
| Available colors   | Background colors    | Modifiers                               |
| :----------------- | :------------------- | :-------------------------------------- |
| `black`            | `bgBlack`            | `reset`                                 |
| `red`              | `bgRed`              | `bold`                                  |
| `green`            | `bgGreen`            | `dim`                                   |
| `yellow`           | `bgYellow`           | `italic` (not widely supported)         |
| `blue`             | `bgMagenta`          | `underline`                             |
| `magenta`          | `bgCyan`             | `inverse`                               |
| `cyan`             | `bgWhite`            | `hidden`                                |
| `white`            | `bgBlue`             |`strikethrough` (not widely supported)   |
| `gray`             | 

You can specify multiple styles for a text by mentioning it as an `Array`.
Example:

```json
{
    "colors":{
        "error": ["red", "bgBlack", "bold"]
    }
}
```

#### Properties
| Properties          | what it does?    |
| :------------------ | :--------------- |
| `colors.default`    | styles `lme.d()` |
| `colors.success`    | styles `lme.s()` |
| `colors.error`      | styles `lme.e()` |
| `colors.warning`    | styles `lme.w()` |
| `colors.highlight`  | styles `lme.h()` |
| `colors.info`       | styles `lme.i()` |
| `colors.trace`      | styles `lme.t()` |

### Default configurations
You can find default configurations in 
```bash
./node_modules/lme/lmeDefaultConfig.json
```
> **Note:** It is not recommended to alter this file. If you need to change it, adding an `lmeconfig.json` file at the application root directory is equivalent and safe.

here is an example:
```json
{
    "colors": {
        "default": ["white"],
        "success": ["bold", "green"],
        "warning": ["bgYellow", "black"],
        "error": ["bgRed", "white"],
        "highlight": ["bgCyan", "black"],
        "info": ["bold", "cyan"],
        "trace": ["green"]
    }
}

```
<br>
<br>

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

#### Loves lme? _tell your friends.._

## Change log

- **v1.4.0**
    - Added support for custom color configuration.
    - Added support for multiple arguments. (*thanks [@demacdonald](https://github.com/demacdonald)*)
    - Stability and performance improvements.
- v1.3.1, v1.3.2
    + Docs update.
- **v1.3.0**
    + Internal code structure redesigned for better flexibility. (*thanks [@demacdonald](https://github.com/demacdonald) for [#4](https://github.com/vajahath/lme/pull/4)*)
    + This package is now capable of having more features in a well structured manner. Developers can now add new features with ease. *We invite you to do so*.
- **v1.2.0**
    + Adds support for `trace`.
    + Adds support for `info`. (*thanks [@amandeepmittal](https://github.com/amandeepmittal)*)
    + Bug fixes
        * `line()` functions now support older versions of node.
        * Changed some colors for better accessibility on Windows and Linux machines.
        * Fixed some minor quirks.
- **v1.1.3**
    + bug fixes
    + docs update
- **v1.1.2**
    + bug fixes
    + docs update
- **v1.1.1**
    + bug fixes
    + docs update
- **v1.1.0**
    + adds support for drawing lines
    + docs update
- **versions < 1.1.0**
    + adds support for semantic outputs.
    + bug fixes
    + doc updates

## License
MIT &copy; [Vajahath Ahmed](https://mycolorpad.blogspot.in)
