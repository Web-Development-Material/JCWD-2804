// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }
// }

// class Transaction {
//   constructor() {
//     this.total = 0;
//     this.products = [];
//     this.quantities = [];
//   }

//   addToCart(product, qty) {
//     this.products.push(product);
//     this.quantities.push(qty);
//     this.total += product.price * qty;
//   }

//   showTotal() {
//     console.log(`Total: $${this.total}`);
//   }

//   checkout() {
//     const transactionData = {
//       total: this.total,
//       products: this.products,
//       quantities: this.quantities,
//     };
//     return transactionData;
//   }
// }

// // Contoh penggunaan
// const transaction = new Transaction();
// const product1 = new Product("Product 1", 10.99);
// const product2 = new Product("Product 2", 5.99);

// transaction.addToCart(product1, 2);
// transaction.addToCart(product2, 1);

// transaction.showTotal();

// const completedTransaction = transaction.checkout();
// console.log(completedTransaction);

// ------------------------------------------------------------------------------

// class Transaction {
//   constructor() {
//     this.items = [];
//   }

//   addToCart(product, qty) {
//     this.items.push({ product, qty });
//   }

//   get total() {
//     return this.items.reduce(
//       (total, { product, qty }) => total + product.price * qty,
//       0
//     );
//   }

//   showTotal() {
//     console.log(`Total: $${this.total}`);
//   }

//   checkout() {
//     return {
//       total: this.total.toFixed(2),
//       products: this.items.map(({ product, qty }) => ({
//         name: product.name,
//         price: product.price,
//         qty,
//       })),
//     };
//   }
// }

// // Contoh penggunaan
// const transaction = new Transaction();
// const product1 = { name: "Product 1", price: 10.99 };
// const product2 = { name: "Product 2", price: 5.99 };

// transaction.addToCart(product1, 2);
// transaction.addToCart(product2, 1);

// transaction.showTotal();

// const completedTransaction = transaction.checkout();
// console.log(completedTransaction);
