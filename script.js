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