export default function() {
  this.namespace = '/api';

  let rentals = [{
    type: 'rentals',
      id: 'grand-old-mansion',
      attributes: {
        title: 'Grand Old Mansion',
        owner: 'Veruca Salt',
        city: 'San Francisco',
        "property-type": 'Estate',
        bedrooms: 15,
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
      }
    }, {
      type: 'rentals',
      id: 'urban-living',
      attributes: {
        title: 'Urban Living',
        owner: 'Mike Teavee',
        city: 'Seattle',
        "property-type": 'Condo',
        bedrooms: 1,
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
      }
    }, {
      type: 'rentals',
      id: 'downtown-charm',
      attributes: {
        title: 'Downtown Charm',
        owner: 'Violet Beauregarde',
        city: 'Portland',
        "property-type": 'Apartment',
        bedrooms: 3,
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
      }

  }]

  let users = [{
    type: 'users',
      id: 'test1',
      attributes: {
        username: 'testuser1',
        password: 'password123',
        name: 'Testone'
      }
    }, {
      type: 'users',
      id: 'test2',
      attributes: {
        username: 'testuser2',
        password: 'password123',
        name: 'Testtwo'
      }
    }]


  this.get('/rentals', function(db, request) {
    if (request.queryParams.city !== undefined) {
      let filteredRentals = rentals.filter(function(i) {
        return i.attributes.city.toLowerCase().indexOf(request.queryParams.city.toLowerCase()) !== -1;
      });
      return { data: filteredRentals };
    } else {
      return { data: rentals };
    }
  });

  // Find and return the provided rental from our rental list above
  this.get('/rentals/:id', function(db, request) {
    return { data: rentals.find((rental) => request.params.id === rental.id) };
  });

  // Find and return the provided rental from our rental list above
  this.get('/login', function(db, request) {
    console.log(request.queryParams);
     if (request.queryParams.username !== undefined || request.queryParams.password !== undefined) {
      let filteredRentals = users.filter(function(i) {
        return i.attributes.username.toLowerCase().indexOf(request.queryParams.username.toLowerCase()) !== -1 && 
          i.attributes.password.toLowerCase().indexOf(request.queryParams.password.toLowerCase()) !== -1;
      });
      return { data: filteredRentals };
    } else {
      return { data: {msg: "Enter username or password"} };
    }
  });
}
