let a = [1,2,3,4,5];
document.write("["+a+"]: ");
function maxarr(a)
{
  let max=a[0];
for(i=0;i<a.length;i++)
{
  if(a[i]>max)
  max=a[i];
}
return max;
}
document.write(+maxarr(a)+" is the largest element in the array ");

