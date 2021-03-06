// import ayu colors
const {mirage} = require('ayu');

// standard ANSI Colours
const black = '#000000';
const red = mirage.vcs.removed.hex();
const green = mirage.vcs.added.hex();
const yellow = mirage.common.accent.hex();
const blue = mirage.vcs.modified.hex();
const magenta = mirage.syntax.constant.hex();
const cyan = mirage.syntax.regexp.hex();
const white = mirage.syntax.keyword.hex();
const lightBlack = '#808080';
const lightRed = '#ff0000';
const lightGreen = '#33ff00';
const lightYellow = '#ffff00';
const lightBlue = '#1478DB';
const lightMagenta = '#cc00ff';
const lightCyan = '#00ffff';
const lightWhite = '#ffffff';

// custom colors

// exports
exports.decorateConfig = config =>
    Object.assign({}, config, {
        cursorColor: mirage.common.accent.hex(),
        foregroundColor: mirage.common.fg.hex(),
        backgroundColor: mirage.common.bg.hex(),
        borderColor: 'rgba(255,255,255,0.1)',
        selectionColor: 'rgba(255,198,0, 0.5)',
        css: `
    ${config.css || ''}
    .tab_active {
      background: rgba(255,255,255,0.05);
      border-bottom: 1px solid ${mirage.common.accent.hex()} !important;
      border-color: ${mirage.common.accent.hex()};
    }
    .hyper_main {
      ${(config.wickedBorder || config.wickedBorder === undefined) &&
          `border: 2px solid ${config.wickedBorderColor || mirage.common.accent.hex()} !important;`}
    }

    .tabs_nav {
      border-bottom: 1px solid rgba(255,255,255,0.1)  !important;
    }
  `,
        colors: {
            black,
            red,
            green,
            yellow,
            blue,
            magenta,
            cyan,
            white,
            lightBlack,
            lightRed,
            lightGreen,
            lightYellow,
            lightBlue,
            lightMagenta,
            lightCyan,
            lightWhite
        }
    });
