/* jshint node:true, esversion: 6 */
'use strict';

const _get          = require('lodash').get;

module.exports = function (platform, projectPath, iconData) {
  let props = { src: iconData.path };

  if (platform === 'ios') {
    props.height = iconData.size.toString();
    props.width = iconData.size.toString();
  } else if (platform === 'android') {
    props.density = iconData.name;
  } else if (platform === 'windows') {
    const target = _get(iconData, 'attrs.target', iconData.name);
    props.target = target;
  }

  return props;
};

