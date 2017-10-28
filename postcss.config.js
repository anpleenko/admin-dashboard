const browsers = [
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 35',
  'Firefox >= 31',
  'Explorer >= 9',
  'iOS >= 7',
  'Opera >= 12',
  'Safari >= 7.1',
];

const variables = {
  project: '#369a1e',
  base: '#000',
  clean: '#fff',
  alert: '#e54d4d',
  form: '#ff9908',
  active: '#ffc020',

  // borders
  border: '#b3b3b3',
  borderActive: '#74b65f',
  borderError: '#cf1e1e',
  borderErrorActive: '#ff0000',

  // text
  value: '#4c4c4c',
  valueDisabled: '#cecece',

  // backgrounds
  background: '#fff',
  backgroundHover: '#efefef',
  backgroundDisabled: '#efefef',
};

const mediaBreakpoints = {
  '--mobile': '(max-width:767px)',
  '--mobile-tablet': '(max-width:1024px)',
  '--tablet': '(min-width:768px) and (max-width:1024px)',
  '--desktop': '(min-width:1025px)',
};

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('autoprefixer')({ browsers }),
    require('postcss-discard-comments')({ removeAll: true }),
    require('postcss-media-minmax'),
    require('postcss-advanced-variables')({ variables }),
    require('postcss-custom-media')({ extensions: mediaBreakpoints }),
    require('postcss-color-function'),
    require('postcss-initial'),
    require('css-mqpacker')(),
    require('postcss-csso'),
  ],
};
