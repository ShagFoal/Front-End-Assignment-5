// An object keeps a currency property and a price-formatting method together.
const travelAgency = {
  currency: "KZT",
  formatPrice: function (price) {
    return price.toLocaleString("en-US") + " " + this.currency;
  }
};

const tours = [
  {
    "name": "City Start",
    "hours": 2,
    "price": 5000,
    "image": "images/baiterek.jpeg",
    "description": "A relaxed introduction to Baiterek and the surrounding modern boulevard.",
    "details": "places.html#baiterek",
    "stops": "Baiterek, Boulevard"
  },
  {
    "name": "Culture Day",
    "hours": 4,
    "price": 9000,
    "image": "images/national_museum.jpeg",
    "description": "A route through the museum, a mosque and the scenic Ishim riverside.",
    "details": "places.html#museum",
    "stops": "Museum, Mosque, Riverside"
  },
  {
    "name": "Full Astana",
    "hours": 6,
    "price": 14000,
    "image": "images/khan_shatyr.jpeg",
    "description": "Spend the full day exploring the city centre, national museum and Khan Shatyr.",
    "details": "places.html#khan-shatyr",
    "stops": "Centre, Museum, Khan Shatyr"
  }
];

const tourList = document.getElementById("tour-list");
const tourTable = document.getElementById("tour-table-body");

// One array supplies both the original cards and the comparison table.
for (let i = 0; i < tours.length; i++) {
  const tour = tours[i];
  const column = document.createElement("div");
  column.className = "col-md-6 col-lg-4";
  // All values are fixed project data, not user input.
  column.innerHTML = `
    <article class="travel-card">
      <img class="card-image" src="${tour.image}" alt="${tour.name}" />
      <div class="card-content p-4">
        <h3>${tour.name}</h3>
        <p class="tour-meta">${tour.hours} hours &middot; ${travelAgency.formatPrice(tour.price)}</p>
        <p>${tour.description}</p>
        <div class="card-actions">
          <a class="btn btn-teal" href="contact.html">Book Route</a>
          <a class="btn btn-outline-teal" href="${tour.details}">Details</a>
        </div>
      </div>
    </article>
  `;
  tourList.appendChild(column);

  const row = document.createElement("tr");
  row.innerHTML = `
    <th scope="row">${tour.name}</th>
    <td>${tour.hours} hours</td>
    <td>${travelAgency.formatPrice(tour.price)}</td>
    <td>${tour.stops}</td>
  `;
  tourTable.appendChild(row);
}
