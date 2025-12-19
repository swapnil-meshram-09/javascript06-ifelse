const a = 20;

if(a>=18){
    console.log("Adult: age is 18.");  
}


if(a===20){
    console.log("Adult: age is 20");
    
}else{
    console.log("Not Adult.");
}



if(a==18){
    console.log(a);
    
}else if(a==19){
    console.log(a);
    
}else{
    console.log(a);
    
}





// ternary case

const age = 18;

const result = (age==20) ? "equal" : "not equal" ;

console.log(result);





// switch cases


const key = "sunday";

switch(key){
    case "sunday": 
        console.log("It is Sunday");
        break;

    case "monday": 
        console.log("It is Monday");
        break;
    
    default: 
        console.log("Not Available");
        break;
}




const num = 1;

switch(num){
    case 0:
    case 1:
        console.log("It is 1");
        // break;
       // console.log("djwkfn");          // not work

        // continue;                      // error cant write continue

        
    
    case 2:
        console.log("It is 2");
        break;
    
    default:
        console.log("Not Avaiable");
        break;

}







