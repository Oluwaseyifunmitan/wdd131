const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener("click", () => {
  mainnav.classList.toggle("show");
  hambutton.classList.toggle("show");
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Provo City Center Utah",
    location: "Provo, Utah, United States",
    dedicated: "2016, March, 20",
    area: 85000,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-utah/1280x800/provo-temple-767802-wallpaper.jpg",
  },
  {
    templeName: "Salt Lake City Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/1280x800/salt-lake-temple-37762.jpg",
  },
  {
    templeName: "San Diego California",
    location: "San Diego, California, United States",
    dedicated: "1993, April, 25",
    area: 72000,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/1280x800/san-diego-temple-765109-wallpaper.jpg",
  },
];

function createTempleCards(temples) {
  const container = document.getElementById("temple-cards-container"); // Ensure you have a container element in your HTML

  temples.forEach((temple) => {
    // Create card element
    const card = document.createElement("div");
    card.className = "temple-card";

    // Create and append temple name
    const name = document.createElement("h2");
    name.textContent = temple.templeName;
    card.appendChild(name);

    // Create and append temple location
    const location = document.createElement("p");
    location.textContent = `Location: ${temple.location}`;
    card.appendChild(location);

    // Create and append temple dedication date
    const dedicated = document.createElement("p");
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;
    card.appendChild(dedicated);

    // Create and append temple area
    const area = document.createElement("p");
    area.textContent = `Total Area: ${temple.area}`;
    card.appendChild(area);

    // Create and append temple image with lazy loading
    const image = document.createElement("img");
    image.src = temple.imageUrl;
    image.alt = temple.name;
    image.loading = "lazy";
    card.appendChild(image);

    // Append the card to the container
    container.appendChild(card);
  });
}

// Call the function with the temples array
createTempleCards(temples);

// function filterTemples(filter) {
//   let filteredTemples = [];

//   switch (filter) {
//     case "old":
//       filteredTemples = temples.filter(
//         (temple) => new Date(temples.dedicated) < new Date("1900-01-01")
//       );
//       break;
//     case "new":
//       filteredTemples = temples.filter(
//         (temple) => new Date(temples.dedicated) > new Date("2000-01-01")
//       );
//       break;
//     case "large":
//       filteredTemples = temples.filter((temple) => temples.area > 10000);
//       break;
//     case "small":
//       filteredTemples = temples.filter((temple) => temples.area < 10000);
//       break;
//     case "home":
//     default:
//       filteredTemples = temples;
//       break;
//   }

 
// }

// // Initially display all temples
// filterTemples("home");
function filterTemples(filter) {
	let filteredTemples = [];
  
	switch (filter) {
	  case "old":
		filteredTemples = temples.filter(
		  (temple) => new Date(temple.dedicated) < new Date("1900-01-01")
		);
		break;
	  case "new":
		filteredTemples = temples.filter(
		  (temple) => new Date(temple.dedicated) > new Date("2000-01-01")
		);
		break;
	  case "large":
		filteredTemples = temples.filter((temple) => temple.area > 90000);
		break;
	  case "small":
		filteredTemples = temples.filter((temple) => temple.area < 10000);
		break;
	  case "home":
	  default:
		filteredTemples = temples;
		break;
	}
  
	// Display the filtered temples
	displayTemples(filteredTemples);
  }
  
  // Function to display the temples (you need to implement this function)
  function displayTemples(temples) {
	// Code to display the temples goes here
	console.log(temples); // For now, let's just log them to the console
  }
  
  // Initially display all temples
  filterTemples("home");
  