import * as applemojis from './lib/Util.js';

let all = applemojis.getAllAppleMojis();
console.log(all);

const img = document.getElementById("emoji")
img.src = all[0].emoji;