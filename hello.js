const path=require('path');
const f=require('fs');
// console.log('folder name',__dirname);
// console.log('file name',__filename);
// f.mkdir(path.join(__dirname,'/test'),(error)=>{
//     if(error)
//     {
//         console.log('error');
//     }
//     else{
//         console.log('folder created');
//     }
    
// });
// f.writeFile(path.join(__dirname,'test','test.txt'),'Hello node',(err)=>{
//     if(err){
//         throw err;
//     }
//     else{
//         console.log('file created');
//     }
// })
// console.log('file name',p.dirname(__filename)); 

// const p=require('cli-color');
// console.log(p.yellow('hello'));

const os=require('os');
console.log('os type:',os.type());
console.log('os platform',os.platform());
console.log('cpu architecture:',os.arch());