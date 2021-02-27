import camelCase from 'lodash/camelCase';

/**
 * Create an Array from all
 * files ending with ".js"
 * in the current directory
 * using require.context
 * */
const requireModules = require.context('.', false, /\.js$/);
const modules = {};

requireModules.keys().forEach((filename) => {
  // Skip self when iterating through directory
  if (filename === './index.js') return;

  const moduleName = camelCase(filename.replace(/(\.\/|\.js)/g, ''));
  modules[moduleName] = {
    namespaced: true, // force namespacing of each module as its added
    ...requireModules(filename).default,
  };
});

export default modules;
