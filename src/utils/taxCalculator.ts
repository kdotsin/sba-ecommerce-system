export function calculateTax(price: number, category: string, tax=4.75) {
  if (category === 'groceries') {
    tax = 3;
  }
  tax*=0.01;
  return price * tax;
}
