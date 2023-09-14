// Call API using fetch method
fetch("https://dummyjson.com/products").then((val)=>{
return val.json();
})
// Filter product by smart-phone
.then((val)=>{
  const FilteredObject= val.products.filter(function(item){
    if(item.category ==="smartphones"){
    return item;}
  });
  console.log(FilteredObject);
});



