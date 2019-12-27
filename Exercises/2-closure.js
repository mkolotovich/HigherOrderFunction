'use strict';

// const store = x => v => v = x;
const store = x => () => x;

module.exports = { store };
