# hexo-filter-jsdelivr-auto-fallback

[![NPM Version](https://img.shields.io/npm/v/hexo-filter-jsdelivr-auto-fallback)](https://www.npmjs.com/package/hexo-filter-jsdelivr-auto-fallback)
[![hexo-filter-jsdelivr-auto-fallback](https://img.shields.io/github/stars/PipecraftNet/hexo-filter-jsdelivr-auto-fallback)](https://github.com/PipecraftNet/hexo-filter-jsdelivr-auto-fallback)
[![npm license](https://img.shields.io/npm/l/hexo-filter-jsdelivr-auto-fallback)](./LICENSE)

Add [jsdelivr-auto-fallback](https://github.com/PipecraftNet/jsdelivr-auto-fallback) to hexo site automatically. [Read more about 'jsdelivr-auto-fallback'](https://github.com/PipecraftNet/jsdelivr-auto-fallback).

## Installations

```bash
npm i hexo-filter-jsdelivr-auto-fallback
```

## Options

```yaml
jsdelivr_auto_fallback:
  enable: true
  add_defer: true
  dest_list:
    - cdn.jsdelivr.net
    - fastly.jsdelivr.net
    - gcore.jsdelivr.net
```

- **enable** - Enable the plugin. Default value is `false`.
- **add_defer** - Add a `defer` attribute to each `script` tag. Default value is `false`.
  - Set to `true` if the `src` of the `script` tag contains `cdn.jsdelivr.net`.
- **dest_list** - Destination domain list. `cdn.jsdelivr.net` must be placed first.

## License

Copyright (c) 2022 [Pipecraft](https://www.pipecraft.net). Licensed under the [MIT license](LICENSE).

## >\_

[![Pipecraft](https://img.shields.io/badge/site-pipecraft-brightgreen)](https://www.pipecraft.net)
[![DTO](https://img.shields.io/badge/site-DTO-brightgreen)](https://dto.pipecraft.net)
[![BestXTools](https://img.shields.io/badge/site-bestxtools-brightgreen)](https://www.bestxtools.com)
[![PZWD](https://img.shields.io/badge/site-pzwd-brightgreen)](https://pzwd.net)
