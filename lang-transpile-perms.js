

let perms = [];

array.forEach((ele0)=>{

  array.forEach((ele1)=>{
  
      if (ele0 !== ele1) perms.push({ from: ele0, to: ele1 });
    
  });
  
});




let url = `https://github.com/search?q=`;

perms.forEach((obj)=>{
  
  const {from, to} = obj; 
  
  console.log(`${url}transpile+${from}+to+${to}`);
  
})
