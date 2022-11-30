const puppeteer = require("puppeteer");
// include node fs module
var fs = require('fs');

(async function (){
    const browser = await puppeteer.launch( { headless: false } );
    const page = await browser.newPage();
    // Configure the navigation timeout
    await page.setDefaultNavigationTimeout(0);
    await page.goto('https://unicode.org/emoji/charts/full-emoji-list.html');

   const data = await page.evaluate(function(){
    // all code written here will act in browser
    
    let allEmojis = [];

    // let emojiObject =     {
    //     id: null,
    //     code: null,
    //     CLDRShortName: null,
    //     emotionTag: null,
    //     emoji: null
    // }

    let classCodeNode = document.getElementsByClassName("code");
    let classCLDRShortName = document.getElementsByClassName("name");
    let classNextToChars = document.getElementsByClassName("chars"); // apple next to this element



    for (let i = 0; i < classCodeNode.length; i++) {
        // get the code of emojis
        
        // console.log(classCodeNode[i].firstElementChild.innerText);
        // emojiObject.id = i; // setting the id at once
        // emojiObject.code = classCodeNode[i].firstElementChild.innerText // adding code to object
       
        // get CLDRShortName of emojis
        console.log(classCLDRShortName[i].innerText);
        // emojiObject.CLDRShortName = classCLDRShortName[i].innerText // adding CLDRShortName to object
       
        //  get the emoji base64 image
        // if the image doesn't contain anything
        if(classNextToChars[i].nextElementSibling.firstElementChild){
            console.log("is an IMG")
            emojiBase64 = classNextToChars[i].nextElementSibling.firstElementChild.src
        }else{
            console.log("no IMG")
            emojiBase64 = "null";
        }
        
        console.log(emojiBase64);

        let emojiObject = {
            id: i,
            code: classCodeNode[i].firstElementChild.innerText, // adding code to object,
            CLDRShortName: classCLDRShortName[i].innerText,
            emotionTag: null, // 
            emoji: emojiBase64
        }
       
        // push all objects to emojis array
        allEmojis.push(emojiObject);

     }


    
    
    return allEmojis
    })

    console.log(data);

    // writeFile function with filename, content and callback function
    fs.writeFile('applemojis.json', JSON.stringify(data), function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
    });


})();