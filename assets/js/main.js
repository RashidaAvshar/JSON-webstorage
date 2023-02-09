// setTimeout(() => {
//     console.log("pending data..")
//     const backendData = {
//         id: 1,
//         title: "Laptop",
//         price: 100,
//         description: "Stash your laptop up to 15 inc",
//         rating: { rate: 3.9, count: 120},
//     }
//     setTimeout(() => {
//         backendData.modified = true;
//         console.log("data Response", backendData)
//     }, 2000)
// }, 2000);

// console.log("request data");

// !=================>>>>>>>>> PROMISE <<<<<<<<<<<=====================

const product = new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log("pending data...");
        setTimeout(()=>{
            const backendData = {
                        id: 1,
                        title: "Laptop",
                        price: 100,
                        description: "Stash your laptop up to 15 inc",
                        rating: { rate: 3.9, count: 120},
                    }
                    resolve(backendData)
                    // const errors = "Syntax error a undifined";
                    // reject(errors);
        },2000)        
    }, 2000)
})

product.then((data)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            data.modified = true;
            resolve(data);
        },2000)
    });
}).then((data)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            data.modified = true;
            resolve(data);
        }, 2000)
    }).then((clientData)=>{
        console.log("Data response---->", clientData)
    });    
});