// Array
const array = [
  {
    id: 1,
    productName: "Phone",
    description: "loremloremlorem",
    price: 1000,
    currency: "USD",
    address: {
      city: "Washington",
      postalCode: 2000,
    },
    discountPercent: 20,
    rating: 3,
  },
  {
    id: 2,
    productName: "Phone2",
    description: "loremloremlorem",
    price: 10000,
    currency: "MXN",
    address: {
      city: "Mexico",
      postalCode: 3000,
    },
    discountPercent: 30,
    rating: 4,
  },
  {
    id: 3,
    productName: "Phone3",
    description: "loremloremlorem",
    price: 15000,
    currency: "NPR",
    address: {
      city:"Kathmandu",
      postalCode: 44600,
    },
    discountPercent: 70,
    rating: 1,
  },
  {
    id: 4,
    productName: "Phone4",
    description: "loremloremlorem",
    price: 1000,
    currency: "MXN",
    address: {
      city: "Mexico",
      postalCode: 1000,
    },
    discountPercent: 20,
    rating: 2,
  },
  {
    id: 5,
    productName: "Phone5",
    description: "loremloremlorem",
    price: 50000,
    currency: "NPR",
    address: {
      city: "Pokhara",
      postalCode: 10000,
    },
    discountPercent: 245,
    rating: 4,
  },
  {
    id: 6,
    productName: "Phone6",
    description: "loremloremlorem",
    price: 1000,
    currency: "USD",
    address: {
      city: "Washington",
      postalCode: 1000,
    },
    discountPercent: 65,
    rating: 4.6,
  },
];
// Finding products whose price is greater than 10000
console.log("Finding products whose price is greater than 10000");
const abc=array.filter((item)=>{
if(item.price>10000)
{ 
  console.log(item.productName);
  return item;
 }
});
console.log(abc);



// Finding name with city is Kathmandu
console.log("Finding productName whose city is Kathmandu");
const bcd=array.filter((item)=>{
if(item.address.city=="Kathmandu")
{ 
  console.log(item.productName);
  return item;
 }
});
console.log(bcd);



// Finding products whose rating is less than 3.
console.log("Finding products whose rating is less than 3");
const def=array.filter((item)=>{
if(item.rating<3)
{ 
  console.log(item.productName);
  return item;
 }
});
console.log(def);


//Find products whose discount percent is greater than 50 (filter method)
console.log("Find products whose discount percent is greater than 50 (filter method)");
const dis=array.filter((item)=>{
  if(item.discountPercent>=50)
  { 
    console.log(item.productName);
    return item;
   }
  });
  console.log(dis);


  
// Return object of name and address using map method 
console.log("Return object of name and address using map method");
const mapmethod=array.map((item)=>{
   
    
      return {
        Name: item.productName,
        address: item.address.city,
      }; 
  });
  console.log(mapmethod);
  
  //delete
  const deleteProduct=(abcd)=>{
    const filteredProducts=array.filter(function(item){
      return item.id!==abcd;
    })
    console.log('filteredProducts',filteredProducts)
      }
      deleteProduct(1);