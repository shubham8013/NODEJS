const http=require('http');
const f=require('fs');
const path=require('path');
http.createServer((req,res)=>{
    // res.writeHead(200,{
    //     'Content-Type':'text/html'
    // })
    // let url=req.url;
    // if(url==='/')
    // {
    //     f.readFile(path.join(__dirname,'public','index.html'),(err,data)=>{
    //     if(err)
    //     {
    //         throw err;
    //     }
    //     res.end(data);
    //     });
    // }
    // else if(url==='/about')
    // {
    //     f.readFile(path.join(__dirname,'public','about.html'),(err,data)=>{
    //     if(err)
    //     {
    //         throw err;
    //     }
    //     res.end(data);
    //     });
    // }

    let filepath=path.join(__dirname,'public',req.url==='/'?'index.html': req.url );

    let contentType='text/html';
    let ext=path.extname(filepath);

    if(!ext)
    {
        filepath += '.html';
    }

    switch(ext)
    {
        case '.css':
            contentType='text/css'
            break

        case '.js':
            contentType='text/javascript'
            break

        default:
            contentType='text/html'
    }
    f.readFile(filepath,(err,data)=>{
        if(err)
        {
            
            f.readFile(path.join(__dirname,'public','error.html'),(err,data)=>{
                if(err)
                {
                    res.writeHead(500);
                    res.end('Error!!')
                }
                else{
                    res.writeHead(404,{
                        'Content-Type':contentType
                    })
                    res.end(data);
                }
                
            })
        }
        else{
            res.writeHead(200,{
                'Content-Type':contentType
            })
            res.end(data);
        }
    })
    
    // console.log(req.url);
    // res.end('<h1>welcome</h1>');

}).listen(3000);