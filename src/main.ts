import { Product } from "./models/Products.js";
import { fetchProducts } from "./services/apiService.js";
import { calculateTax } from "./utils/taxCalculator.js";

const data = await fetchProducts();

const allProdData = data.products

const product = new Product(allProdData[0])

product.displayDetails();
console.log(Math.round(product.getPriceWithDiscount()) / 100);
console.log(Math.round(calculateTax(product.price, product.category)) / 100);
