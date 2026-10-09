import { Product } from "./models/Products.js";
import { fetchProducts } from "./services/apiService.js";
import { calculateTax } from "./utils/taxCalculator.js";

//regular setup
const data = await fetchProducts('https://dummyjson.com/products');

const allProdData = data.products

const product = new Product(allProdData[0])

product.displayDetails();
console.log(Math.round(product.getPriceWithDiscount()) / 100);
console.log(Math.round(calculateTax(product.price, product.category)) / 100);

//error handling

const errorData = await fetchProducts('https://dummyjson.com/produdf/')

globalThis.fetch = async () =>
  new Response(JSON.stringify({ id: 1 }), { status: 200 });

const apiError = await fetchProducts('anytthing');