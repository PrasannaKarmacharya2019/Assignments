 let word = prompt('Enter a string');
 const length = word.length;
for(i=0;i<length/2;i++)
 {
   if( word[i]==word[length-1-i])
  {
  document.write("palindrome");
  break;
  }
else
{
document.write('not palindrome');
break;
 }
}



