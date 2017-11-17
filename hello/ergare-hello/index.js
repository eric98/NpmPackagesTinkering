//underscore
var _= require('underscore')

exports.hello = function (person) {
    console.log('Hola'+_.capitalize(person)+'!')
}