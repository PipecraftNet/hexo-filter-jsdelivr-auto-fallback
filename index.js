/* global hexo */

'use strict';

(() => {
  const fs = require('fs');

  const { enable, add_defer: addDefer } = Object.assign(
    { enable: false, add_defer: false },
    hexo.config.jsdelivr_auto_fallback
  );

  if (!enable) return;

  let script;
  try {
    const path = require.resolve('jsdelivr-auto-fallback/index.min.js');
    script = fs.readFileSync(path).toString();
  } catch (error) {
    console.log(error);
    throw error;
  }

  if (!script) return;

  hexo.extend.filter.register('after_render:html', data =>
    data
      .replace(/(<head[^<>]*>)/i, `$1\n<script>${script}</script>`)
      .replace(/<script[^>]+>/g, matched => {
        return !addDefer || matched.includes(' defer')
          ? matched
          : matched.replace('<script', '<script defer');
      })
  );
})();
