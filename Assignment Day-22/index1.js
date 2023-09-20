function Fibo(count) {

  let a = 0;
   let b = 1;
   let sum=0;
  for(i = 0; i < count; i++) 
  {
    let sum= a + b;
    a = b;
    b = sum;
   console.log(sum);
 
  }
  

}

const count = prompt("Enter a number");
const Fiboona=Fibo(count);
