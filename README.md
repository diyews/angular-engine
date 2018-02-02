# angular-engine
This repository provide a basic config for building a angular project. Use this 'engine' to fly your :rocket:

Thanks to [angular](https://github.com/angular/angular), [angular-starter](https://github.com/gdi2290/angular-starter).

If you prefer AOT in dev, there is an AOT-in-dev branch.

what's different between AOT & JIT compilation:

|      |   AOT  | JIT |
| :---: | ---------- | ------------- |
| ts-loader |  `@angular-devkit, @ngtools/webpack` | `awesome-typescript-loader, angular2-template-loader`  |
| polyfills: core-js/es7/reflect | `@ngtools/webpack` and `@angular/compile-cli` will use `reflect-metadata` in AOT | In need to reflect the decorator metadata. |
| extract-text-plugin | With | Throw an error the first time compiled, but works on forward. It's something wrong with the `css-loader` or this plugin when the `style.scss` entry is in `inline`(or remove all the `commonChunkPlugin` works too). In JIT, use `style-loader` instead. |
