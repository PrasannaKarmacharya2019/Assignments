const fruits = ['apple', 'banana', 'cherry', 'orange'];
const fruit= prompt("Enter a fruit")
for(i=0;i<fruit.length;i++)
{
  if(fruits[i]==fruit)
  {
   found();
   break;
      }
      else 
      {
       notfound();
       break;
      }
}
function found()
{
  document.write(fruit+" found in arrray");
}
function notfound()
{
  document.write(fruit+" not found in arrray");
}