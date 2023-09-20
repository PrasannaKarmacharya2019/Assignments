const  clouds=[0,0,1,0,0,1,0];
function jumpingOnclouds(c)
{
  let count=0;
  for (let i=0;i<c.length-1;)
  {
  if(i+2<c.length && c[i+2]==0)
  {
    i=i+2;
          }
          else{
            i=i+1;
          }
    count++;
}
return count;
}
console.log(jumpingOnclouds(clouds));