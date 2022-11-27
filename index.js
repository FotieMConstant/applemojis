const applemojis = require('./applemojis.js');

const getAll = () => {
    return applemojis;
}

const getOne = (code) => {
    console.log('getting emoji with code=>', code);
}






module.exports = {getAll, getOne};