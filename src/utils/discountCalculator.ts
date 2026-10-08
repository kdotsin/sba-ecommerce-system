export function calculateDiscount(price: number, discount: number): number {
  discount = discount * 0.01;
  return price * discount;
}
