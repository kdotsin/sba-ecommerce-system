import { NetworkError } from "../utils/errorHandler.js";

export async function fetchProducts() {
  try {
    const response = await
    fetch('https://dummyjson.com/products')

    if (!response.ok) {
      throw new NetworkError('Network has not properly responded')
    }

    const data = await response.json();
    
    return data;
  } catch (error) {
    if (error instanceof NetworkError) {
      console.error('Network Error:', error.message)
    } else if (error instanceof Error) {
      console.error('Unknown:', error.message)
    }
  }
}
