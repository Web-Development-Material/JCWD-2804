export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
}

// Dummy data or a database connection can be simulated here
let products: Product[] = [];

export default products;
