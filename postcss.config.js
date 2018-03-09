/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

module.exports = {
  // The list of plugins for PostCSS
  // https://github.com/postcss/postcss
  plugins: [
    require('postcss-grid-kiss')(),
    // Allows you to nest one style rule inside another
    // https://github.com/jonathantneal/postcss-nesting
    require('postcss-nesting')(),
    // Unwraps nested rules like how Sass does it
    // https://github.com/postcss/postcss-nested
    require('postcss-nested')(),
    // W3C color() function, e.g. div { background: color(red alpha(90%)); }
    // https://github.com/postcss/postcss-color-function
    require('postcss-color-function')(),
    // Convert CSS shorthand filters to SVG equivalent, e.g. .blur { filter: blur(4px); }
    // https://github.com/iamvdo/pleeease-filters
    require('pleeease-filters')(),
    // Generate pixel fallback for "rem" units, e.g. div { margin: 2.5rem 2px 3em 100%; }
    // https://github.com/robwierzbowski/node-pixrem
    require('pixrem')(),
    // Add vendor prefixes to CSS rules using values from caniuse.com
    // https://github.com/postcss/autoprefixer
    require('autoprefixer')(/* package.json/browserslist */),
  ],
};
