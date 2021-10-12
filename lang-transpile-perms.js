const writeFileSync = require("fs").writeFileSync;

const array = require("./languages.js");

let perms = [];

array.forEach((ele0)=>{

  array.forEach((ele1)=>{
  
      if (ele0 !== ele1) perms.push({ from: ele0, to: ele1 });
    
  });
  
});

let url = `https://github.com/search?q=`;

let urls = ``;

perms.forEach((obj)=>{
  
  const {from, to} = obj; 
  
  urls += `${url}transpile+${from}+to+${to}`
  urls += `\n`;
  
});

writeFileSync(`github-searches-transpilers.txt`, urls);







