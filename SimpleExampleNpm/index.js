// Si comença per / o ./ o ../ -> Mòdul local
// Tota la resta és mòdul NPM

var hello = require('../hello/ergare-hello/hello')

hello('eric')

// require('hello')()