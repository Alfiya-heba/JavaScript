//for loop//
// for (let i = 0; i < array.length; i++) {
//     const element = array[index];
    
// }

// for (let i = 0; i <= 5; i++) {
//     const element = i;
//     console.log(element);
// }

// for (let i = 0; i <=10; i++) {
//     const element =  i;
//     if(element==5){
//         console.log("Hey 5");
//     }
//     console.log(element);
    
// }

for (let i = 0; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
    
    for (let j = 0; j <= 10; j++) {
        //console.log(`Inner loop value: ${j} and outer loop value ${i}`);
        //console.log(i+ '*' + j +'='+ i*j);   
    }
}

let myArray=["Alfiya","Heba","Chintu"]
//console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
}


//break and continue//
// for (let index = 1; index <=20; index++) {
//     if(index==5){
//         console.log("Detected 5");
//         break;
        
//     }
//     console.log(`value of i is ${index}`);
    
    
// }

for (let index = 1; index <=20; index++) {
    if(index==5){
        console.log("Detected 5");
        continue;
        
    }
    console.log(`value of i is ${index}`);
    
    
}