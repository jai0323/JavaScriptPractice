console.log("start");

// Callback hell example

// function getData(data, getCallBack){
//     setTimeout(()=>{
//         console.log("User - ",data);
//         if(getCallBack)
//         {
//             getCallBack();
//         }
//     },2000);
// }

// getData(1,()=>{
//     getData(2, ()=>{
//         getData(3,()=>{
//             getData(4,()=>{
//                 getData(5);
//             })
//         })
//     })
// })


// Promise chaining

function getdata(data){
   
        return new Promise((resovle, reject)=>{
            setTimeout(()=>{
            console.log("success");
            resovle("User - "+data);
            },2000);
         
        })
    };
    
console.log("fetching data 1...")
getdata(1)
    .then((res)=>{
        console.log(res,"\nfetching data 2...")
    getdata(2).then((res)=>{
        console.log(res,"\nfetching data 3...")
    getdata(3).then((res)=>{
        console.log(res,"\nfetching data 4...")
    getdata(4).then((res)=>{
        console.log(res,"\nfetching data 5...")
    getdata(5).then((res)=>{
        console.log(res)
                    })
                })
            })
        })
       
    })
    

 console.log("end")