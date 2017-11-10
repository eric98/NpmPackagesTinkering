// Si comença per / o ./ o ../ -> Mòdul local
// Tota la resta és mòdul NPM

var hello = require('../ergare-hello/hello')

hello('eric')

// require('hello')()