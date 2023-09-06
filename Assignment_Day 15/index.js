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
  let i = 2; 
   if (no % i == 0 && i<no)
     { i++;
      document.write(no,' is not prime');
    }
    else
    {
      document.write(no,' is a prime');
    }
}


if (no===1)
  {
    document.write("1 is not prime number and is odd number");
  }
else if(no>1)
{
 prime();
 OddOrEven();
}
else
{
  document.write("you have entered zero or invalid input");
}
