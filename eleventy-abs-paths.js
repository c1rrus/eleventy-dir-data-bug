const path = require('path');

module.exports = function(eleventyConfig) {

  return {
    dir: {
      input: path.resolve(__dirname, 'src'),
      output: path.resolve(__dirname, 'dist'),
    },
  };
};
