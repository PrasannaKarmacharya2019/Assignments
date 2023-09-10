let num = prompt('Enter a number');
const no=Number(num);
let count=0;

function prime(no,oddeven)
{
for(i=2;i<=no;i++)

if(no%i==0)
{
    count=count+1;
}
if(count==1)
{
  document.write("the Number ", no," is Prime and "+oddeven," number");
  }

else 
{
  document.write("the Number ", no," is not Prime and "+ oddeven+" number");
 
}
}

function oddeven(no)
{
  if(no%2==0)
  {
    prime(no,"even");
  }
  else
  {
    prime(no,"odd");
  }
}




if (no>=2)
{
    if(no%5==0)
    {
     oddeven(no);
    }
    else
    {
      document.write("Not divisible by 5 and ");
      oddeven(no);
    }
}
else if (no==1)
{
document.write("The Number ", no, " is consonent");
}
else
{
  document.write("You have entered invalid");
}
