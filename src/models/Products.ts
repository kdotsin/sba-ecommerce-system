import { calculateDiscount } from "../utils/discountCalculator.js";

export interface ProductApiResponse {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
}

export class Product {
  public id: number;
  public title: string;
  public description: string;
  public category: string;
  public price: number;
  public discountPercentage: number;

  constructor(data: ProductApiResponse) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.category = data.category;
    this.price = Math.round(data.price * 100);
    this.discountPercentage = data.discountPercentage
  }

  displayDetails() {
    console.log(`--- Product Details ---`);
    console.log(`ID:    ${this.id}`);
    console.log(`Title:  ${this.title}`);
    console.log(`Description: ${this.description}`);
    console.log(`Category: ${this.category}`)
    console.log(`Price: $${Math.round(this.price) / 100}`);
    console.log(`Discount Percentage: ${this.discountPercentage}%`)
    console.log(`-----------------------`);
  }

  getPriceWithDiscount() {
    let discount = calculateDiscount(this.price, this.discountPercentage)
    return this.price - discount;
  }
}

