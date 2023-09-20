const wordCount =
"This is a simple example. This is just an example of word frequency.";

const charCount = wordCount.split(/\W+/);
console.log(charCount);
let charFreq = {};
let max=1;
let maxchar="";
for (let char of charCount) {
if (char != "")
  if (charFreq[char])
   {
    charFreq[char]++;
  }
    if(charFreq[char]>max){
      max = charFreq[char];
      maxchar=char;
      } 
  else 
  {
    charFreq[char] = 1;
  }
}

console.log(charFreq);
console.log("the maximum repeated word is '"+maxchar+ "' repeated time:"+ max,);