![](https://raw.githubusercontent.com/vajahath/lme/master/media/logo.png)

> `console.log`ing done right. Kids like colors, me too.

You don't have to write the 13 char length `console.log()` anymore.

```javascript
lme.d("hello world");
```

## Why `lme` [logme]
- Simpler to use than `console.log()` or `console.log(chalk.red("hi"));`
- Clean and Focused.
- Consistent design for errors, warnings, successes etc.

![](https://raw.githubusercontent.com/vajahath/lme/master/media/str-img.png)
![](https://raw.githubusercontent.com/vajahath/lme/master/media/obj-img.png)

## Install

```shell
npm install --save lme
```

## Usage

### Syntax

`lme.`<status>`(`message`);`

### Example
```javascript
const lme = require('lme');

lme.d("my kitty is pinky!"); // default style, used for anonymous outputs.
lme.e("Snap! something went wrong."); // used for logging errors.
lme.s("Oh yeah!"); // used for logging success.
lme.w("Hey! mind this"); // used for logging warnings.
```

### APIs

**Syntax :** `lme.`<status>`(`message`);`

- **where `<status>` can have the following values:**

| status        | name       | when to use                | example               |
| ------------- | ---------- | -------------------------- | --------------------- |
| `d`           | default    | default outputs            | `lme.d("hi");`        |
| `s`           | successes  | on success outputs         | `lme.s("hi");`        |
| `e`           | error      | on error-ed outputs        | `lme.e("hi");`        |
| `w`           | warning    | for warnings like output   | `lme.w("hi");`        |
| `h`           | highlight  | for highlighting an output | `lme.h("hi");`        |

- **where `message` can be either `strings` or `objects`.** *(note that javascript treats `arrays` as `objects`.)*

> More configurations are on its way.
> Enjoy.

## Related
- [chalk-cli](https://github.com/chalk/chalk-cli)

## License
MIT &copy; [Vajahath Ahmed](https://mycolorpad.blogspot.in)