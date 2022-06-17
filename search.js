const products = [
  {name: 'iphone 14', price: 70000},
  {name: 'Samsung galaxy', price: 60000},
  {name: 'dell laptop', price: 50000},
  {name: 'lenovo laptop', price: 55000},
  {name: 'Asus laptop', price: 45000},
  {name: 'smart watch samsung', price: 7000},
  {name: 'Apple watch', price: 22000},
  {name: 'plus one phone 4', price: 27000}
];

function searchProducts(products, searchText) {
  const result = [];
  for (const product of products) {
    if (product.name.includes(searchText)) {
      // console.log(product.name);
      result.push(product);
    }
  }
  return result;
}

const matched = searchProducts(products, 'watch');
console.log(matched);