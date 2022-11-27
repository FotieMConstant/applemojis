const applemojis = require('./Util/applemojis.js');

// get all applemojis
const getAll = () => {
    return applemojis;
}
// search by code
const getOneByCode = (code) => {
    console.log('getting emoji with code=>', code);
}
// search by Short Name
const getOneByShortName = (shortName) => {
    console.log('getting emoji with Short Name=>', shortName);
}





module.exports = {getAll, getOneByCode};