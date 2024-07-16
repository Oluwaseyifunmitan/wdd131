// Define the product array
const products = [
    {
      id: 'fc-1888',
      name: "flux capacitor",
      avgRating: 4.5
    },
    {
      id: 'fc-2050',
      name: "power laces",
      avgRating: 4.7
    },
    {
      id: 'fs-1987',
      name: "time circuits",
      avgRating: 3.5
    },
    {
      id: 'ac-2000',
      name: "low voltage reactor",
      avgRating: 3.9
    },
    {
      id: 'jj-1969',
      name: "warp equalizer",
      avgRating: 5.0
    }
  ];
  
  // Function to populate product options
  function populateProductOptions() {
    const productSelect = document.getElementById('product');
    products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.id;
      option.textContent = product.name;
      productSelect.appendChild(option);
    });
  }
  
  // Function to update review counter
  function updateReviewCounter() {
    if (localStorage.getItem('reviewCounter') === null) {
      localStorage.setItem('reviewCounter', 0);
    }
    const counter = parseInt(localStorage.getItem('reviewCounter'), 10) + 1;
    localStorage.setItem('reviewCounter', counter);
    document.getElementById('reviewCounter').textContent = `Total Reviews Submitted: ${counter}`;
  }
  
  // Call the function to populate product options when the page loads
  document.addEventListener('DOMContentLoaded', () => {
    populateProductOptions();
    updateReviewCounter();
  });
  