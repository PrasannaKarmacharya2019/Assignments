let num = prompt('Enter a number');
const no=Number(num);

function OddOrEven()
{
let rem=no%2;

if (rem===0)
{
  document.write(' and it is an even number');
}
else
{
  document.write(' and it is an odd number');
}

}


function prime()
{
  for(i = 2; i <= no; i++)
  {
    if(no % i === 0)
           break;
     }
     if(no === i){
      document.write("The Given Number ", no, " is Prime");
  }
  else{
    document.write("The Given Number ", no, " is not Prime");
  }      
}      

function Sum()
{
  document.write(" AND Sum of series is ", (no * (no + 1)) / 2);
}

if (no===1)
  {
    document.write("1 is not prime number and is odd number");
  }
else if(no>1)
{
 prime();
 OddOrEven();
 Sum();
}
else
{
  document.write("you have entered zero or invalid input");
}
