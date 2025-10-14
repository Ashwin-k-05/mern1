const mul = (a,b)=>{
    return a*b;
}
const square=(n)=>{
    return mul(n,n);
}
const print=(n)=>{
    let c=square(n);
    console.log(c);
}
//print(4);
console.log("First");
Promise.resolve().then(console.log('From Promise'))
settimport(()=>{
    console.log('Inside Timeout');
    1,2000}
)
console.log(33);
