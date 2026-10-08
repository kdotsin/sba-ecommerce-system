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
    this.price = data.price;
    this.discountPercentage = data.discountPercentage
  }

  displayDetails() {

  }

  getPriceWithDiscount() {
    
  }
}

