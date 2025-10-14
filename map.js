function double(num){
    return num*2;
}
let arr=[2,3,4,5]
let doubledArr=arr.map(double);
console.log(arr)                            //map function
console.log(doubledArr);
const tripledArr=arr.map((n)=>n*3);
console.log(tripledArr);

function odd(a){
    if (a%2==0){
        return false;}
    else{
        return true;}
}

let c=arr.map(odd)
console.log(c)


let cd=arr.filter(odd)              //filter function
console.log(cd)
const five=arr.filter((n)=>n%5==0);
console.log(five);


let arr1=[1,2,3,4];          //reduce function
let b=arr1.reduce((product,current)=>{
    return product*current},1)
console.log(b)

let ans=arr1.map((n)=>n*3).filter((n)=>n%2==0).reduce((sum,cur)=>{
    return sum+cur;},0)     //both filter and reduce
console.log(ans)

let arr2=[1,2,3,4]               //tree structure
const[one,,two]=arr2;
console.log(two);
const[tree,...bee]=arr2;
console.log(bee)
console.log(23)