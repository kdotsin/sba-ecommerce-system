import { ApiError, NetworkError } from "../utils/errorHandler.js";

export async function fetchProducts(url: string) {
  try {
    const response = await
    fetch(url)

    if (!response.ok) {
      throw new NetworkError('Network has not properly responded')
    }

    const data = await response.json();

    if (!data.products) {
      throw new ApiError('Api was not correctly fetched')
    }
    
    return data;
  } catch (error) {
    if (error instanceof NetworkError) {
      console.error('Network Error:', error.message)
    } else if (error instanceof ApiError) {
      console.error('Api Error:', error.message)
    } else if (error instanceof Error) {
      console.error('Unknown:', error.message)
    }
  }
}
