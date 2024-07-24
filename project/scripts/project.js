document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('seeMoreButton').addEventListener('click', () => {
      window.location.href = 'listings.html';
    });
  });
  

const rentals = [
    {
      rentalName: "Apex Rentals",
      location: "Lagos, Nigeria",
      price: "$12,000 Per Annum",
      type: "Terrace",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1VL4hBt5VCiKaWHVrwGiEydvNm_tJfbZ2C6xCKYtVgUX7f71NfPry6V1FQw&s",
    },
    {
      rentalName: "Optimum Rentals",
      location: "Lagos, Nigeria",
      price: "$17,000 Per Annum",
      type: "Duplex",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeQoR5xh4Nw6EBzIdWqxjHUndxnYWKLGwbrtZTEfV1uLQ-_9KhlQsL4Ae0lA&s",
    },
    {
      rentalName: "Precision Rentals",
      location: "Abuja, Nigeria",
      price: "$10,000 Per Annum",
      type: "Apartments",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUArz38yU_ZYAqQp09vumquh2E1lEDAHQN-nUYUlW3oRNGoo8BJPHral9_VA&s",
    },
    {
      rentalName: "Golden Rentals",
      location: "Abuja, Nigeria",
      price: "$11,000 Per Annum",
      type: "Terrace",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyQpfw-zHIr9Z5S19YBFbFJfSCnhapUq_cOsAqoVkdUFa71BnaDNw5W1uKPg&s",
    },
    {
      rentalName: "Serene Rentals",
      location: "calabar, Nigeria",
      price: "$10,500 Per Annum",
      type: "Family Homes",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxohHZul4xNSZny_3zuSrPBzABnll3h1xgOKtN0mUKrq8TBCz6OEJQaCN1zg&s",
    },
    {
      rentalName: "Comfort Rentals",
      location: "Ibadan, Nigeria",
      price: "$12,000 Per Annum",
      type: "Duplex",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4estZ4LeqxnxdlPm1GolbyXrnsgreBgziVGClPeP4J04H4mtrk6vwYaB17w&s",
    },
    
]

    function createRentalCards(rentals) {
        const container = document.getElementById("rental-cards-container"); // Ensure you have a container element in your HTML
      
        rentals.forEach((rental) => {
          // Create card element
          const card = document.createElement("div");
          card.className = "rental-card";
      
          // Create and append temple name
          const name = document.createElement("h2");
          name.textContent = rental.rentalName;
          card.appendChild(name);
      
          // Create and append temple location
          const location = document.createElement("p");
          location.textContent = `Location: ${rental.location}`;
          card.appendChild(location);
      
          // Create and append temple dedication date
          const price = document.createElement("p");
          price.textContent = `Price: ${rental.price}`;
          card.appendChild(price);
      
          // Create and append temple area
          const type = document.createElement("p");
          type.textContent = `Property Type: ${rental.type}`;
          card.appendChild(type);
      
          // Create and append temple image with lazy loading
          const image = document.createElement("img");
          image.src = rental.imageUrl;
          image.alt = rental.name;
          image.loading = "lazy";
          card.appendChild(image);
      
          // Append the card to the container
          container.appendChild(card);
        });
      }
      
      // Call the function with the temples array
      createRentalCards(rentals);