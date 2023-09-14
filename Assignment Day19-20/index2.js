// Call API using fetch method
fetch("https://dummyjson.com/users").then((val)=>{
return val.json();
})
// Filter user by hair-color
.then((val)=>{
  const FilteredObject= val.users.filter(function(item){
    if(item.hair.color ==="Black"){
    return item;}
  });
  console.log(FilteredObject);
}); 