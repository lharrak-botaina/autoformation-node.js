const fs = require('fs');
try{
    const data = fs.readFileSync('fsync-write.txt','utf-8');
    console.log(data);
    
}catch(err){
    console.error(">file not found");
}