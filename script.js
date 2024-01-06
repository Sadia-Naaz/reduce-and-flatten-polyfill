let arr = [1,2,3,4,5];
// let sum = arr.reduce((acc,currEle,index)=>{
//     return acc+currEle;
// },0);

delete Array.prototype.reduce;
Array.prototype.reduce = function(callBackFn,initialVal){
    let accumualtor = initialVal;
    for(let i = 0;i<this.length;i++){
        if(initialVal===undefined){
            accumualtor = this[i];
        }else{
            accumualtor = callBackFn(accumualtor,this[i],i);
        }
    }
    return accumualtor;
}
let sum = arr.reduce((acc,currEle)=>{return acc+currEle},0);
console.log(sum);

// flattern polyfill 
let arr2  = [1,2,[3,4],[5,6,[7,8]]];
function flatternArr(array){
    // empty array to store the final result
    let result = [];
    // itirate on each element of array
    array.forEach((element) => {
            //we will be checking every element if element is a single entity it will be directly pushed into result array,if it is itself an array than 
            //it will be converted into single entities than pushed to the result array.
        if(Array.isArray(element)){
            // it is temporary storage for the mini array inside the array
            const midresult = flatternArr(element);
            //spread operator will remove the array brackets and push the elements inside the result array
            result.push(...midresult);
        }
        else{
            //if element is a single entity not an array directlty push 
            result.push(element);
        }
        
    });
    // come out of loop and return the result
    return result;
}
//calling the function and storing result in ans variable
let ans = flatternArr(arr2);
console.log(ans);
//async await
function intro(name){

    return  new Promise((res,rej)=>{
         const condition =true;
         setTimeout(()=>{
            if(condition){
                res(`hey my name is ${name}`);
            }else{
                rej(`no name found`);
            }
         },100); 
    })
}

async function resPromise(){//makes function aware that it may contain some asynchronous code
   try{
    const fn =  await intro("sadia");//makes the code wait before execution for the promise to be resolved 
    console.log(fn);
   }
   catch(error){
    console.log(error);
   }
}
// resPromise();

function introduction(name){
    return new Promise((res,rej)=>{
        const condition =false;
     setTimeout (()=>{
        if(condition){
        res(`my name is ${name}?`);
    }
    else{
        rej(`no name found`);
    }
},200); 
})
}
async function resolvePromise(){
 try{
    let data = await introduction('sadia');
    console.log(data);
 }
 catch(error){
    console.log(error);
 }
}
resolvePromise();
