![](https://raw.githubusercontent.com/vajahath/lme/master/media/logo.png)

**`console.log`ing done right. Kids like colors, me too.**


You don't have to write the 13 char length `console.log()` anymore.

```javascript
lme.d("hello world");
```

## Why `lme` *( logme )*
- Simpler to use than `console.log()` or `console.log(chalk.red("hi"));`
- Clean and semantically focused.
- Consistent design for errors, warnings, successes etc.

![](https://raw.githubusercontent.com/vajahath/lme/master/media/obj-img.png)
![](https://raw.githubusercontent.com/vajahath/lme/master/media/str-img.png)

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
lme.w("Attention! Thank you for your attention."); // used for logging warnings.
```

### APIs

**Syntax :** `lme.`<status>`(`message`);`

- **where `<status>` can have the following values:**

| status        | name       | when to use                | example               |
| ------------- | ---------- | -------------------------- | --------------------- |
| `d`           | default    | default output             | `lme.d("hi");`        |
| `s`           | successes  | on success output          | `lme.s("hi");`        |
| `e`           | error      | on error-ed output         | `lme.e("hi");`        |
| `w`           | warning    | for warnings like output   | `lme.w("hi");`        |
| `h`           | highlight  | for highlighting an output | `lme.h("hi");`        |

- **where `message` can be either `strings` or `objects`.** *(note that javascript treats `arrays` as `objects`.)*

> More configurations are on its way.
> Enjoy.

## Support


## Related
- [chalk](https://www.npmjs.com/package/chalk)

## License
MIT &copy; [Vajahath Ahmed](https://mycolorpad.blogspot.in)