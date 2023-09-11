function fsearch(fruit, fruits)
{
  for (let i = 0; i < fruit.length; i++) 
  {
    if (fruit[i] === fruits) 
    {
      return 1;
      }
  }
  return 0;

}
const fruit = ["apple", "banana", "cherry", "orange"];
const fruits= prompt("Enter a fruit");
result= fsearch(fruit, fruits);
if(result==1)
{
  document.write(fruits+" found in arrray");
}
else
{
  document.write(fruits+" not found in arrray");
}
