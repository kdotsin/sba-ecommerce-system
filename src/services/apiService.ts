async function fetchProducts() {
  try {
    const response = await
    fetch('https://dummyjson.com/products')

    if (!response.ok) {
      //needs custom error class
      throw new Error('Network error')
    }

    const data = await response.json();
    
    return data;
  } catch (error) {
    console.error('Error:', error)
  }
}
