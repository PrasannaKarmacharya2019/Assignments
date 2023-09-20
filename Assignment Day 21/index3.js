const data = [ { product: 'Widget', 
sales: 100,
 region: 'North' }, 
{ product: 'Gadget', 
sales: 200, 
region: 'South' },
 { product: 'Widget', 
 sales: 150, 
 region: 'North' }, 
 { product: 'Gadget', 
 sales: 120, 
 region: 'South' },
]
let sum=0;
data.filter(function(item) {
return item.region==="North";   
})
.forEach(function(value){
  sum=sum+value.sales;
}
);
console.log(sum, " in North region")
