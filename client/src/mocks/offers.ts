import {FullOffer} from '../types/offer';


const offers: FullOffer[] = [
{
    'id': 'bbb06a0e-3f92-446d-9a68-cb64b5d38e2b',
    'title': 'Wood and stone place',
    'description': 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families ',
    'type': 'apartment',
    'price': 370,
    'images': [
        '/img/map.jpg',
        '/img/room-small.jpg',
        '/img/room.jpg',
        '/img/room-small.jpg',
        '/img/apartment-03.jpg',
        '/img/studio-photos.jpg'
        ],
'city': {
'name': 'Paris',
'location': {
'latitude': 48.85661,
'longitude': 2.351499,
'zoom': 13
}
},
'location': {
'latitude': 48.868610000000004,
'longitude' : 2.342499,
'zoom': 16
},
'goods': [ 'Heating', 'Wi-Fi',
'Fridge',
'Laptop friendly workspace',
'Baby seat',
'Air conditioning',
'Washer',
'Towels',
'Dishwasher',
'Kitchen',
'Washing machine',
'Breakfast',
'Coffee machine'],
'host':{
    'isPro': true,
'name': 'Angelina',
'avatarUrl': '/img/map.jpg'
},

'isPremium': false,
'isFavorite': true,
'rating': 4.9,
'bedrooms': 2,
'maxAdults': 3
},
{
  "id": "aaa07b1f-4c83-447e-8c85-dc85c7d49e3c",
  "title": "Montmartre Artist Attic",
  "description": "Charming attic apartment in artistic Montmartre. Skylight windows, wooden beams, and view over Parisian rooftops. Steps from Sacré-Cœur and local cafes.",
  "type": "apartment",
  "price": 420,
  "images": [
    "/img/map.jpg",
    "paris-attic-2.jpg",
    "paris-attic-3.jpg",
    "paris-attic-4.jpg"
  ],
  "city": {
    "name": "Paris",
    "location": {
      "latitude": 48.85661,
      "longitude": 2.351499,
      "zoom": 13
    }
  },
  "location": {
    "latitude": 48.88670,
    "longitude": 2.343499,
    "zoom": 16
  },
  "goods": [
    "Wi-Fi",
    "Heating",
    "Kitchen",
    "Coffee machine",
    "Laptop friendly workspace",
    "Hair dryer",
    "Essentials",
    "Baby seat",
    "TV"
  ],
  "host": {
    "isPro": true,
    "name": "Sophie",
    "avatarUrl": "img/avatar-angelina.jpg"
  },
  "isPremium": true,
  "isFavorite": true,
  "rating": 4.7,
  "bedrooms": 1,
  "maxAdults": 2
},
{
  "id": "bbb18c2g-5d94-558f-9d96-ed96d8e50f4d",
  "title": "HafenCity Modern Apartment",
  "description": "Brand new apartment in Hamburg's trendy HafenCity district. Floor-to-ceiling windows with harbor views, minimalist design, and close to Elbphilharmonie.",
  "type": "apartment",
  "price": 380,
  "images": [
    "/img/map.jpg",
    "hamburg-modern-2.jpg",
    "hamburg-modern-3.jpg",
    "hamburg-modern-4.jpg",
    "hamburg-modern-5.jpg"
  ],
  "city": {
    "name": "Hamburg",
    "location": {
      "latitude": 53.551086,
      "longitude": 9.993682,
      "zoom": 12
    }
  },
  "location": {
    "latitude": 53.541086,
    "longitude": 10.003682,
    "zoom": 16
  },
  "goods": [
    "Air conditioning",
    "Wi-Fi",
    "Heating",
    "Kitchen",
    "Dishwasher",
    "Washing machine",
    "Coffee machine",
    "Laptop friendly workspace",
    "TV",
    "Elevator",
    "Parking"
  ],
  "host": {
    "isPro": false,
    "name": "Thomas",
    "avatarUrl": "img/avatar-angelina.jpg"
  },
  "isPremium": false,
  "isFavorite": false,
  "rating": 4.5,
  "bedrooms": 2,
  "maxAdults": 4
},
{
  "id": "ccc29d3h-6ea5-669g-0ea7-fe97e9f61g5e",
  "title": "MedienHafen Designer Loft",
  "description": "Industrial-chic loft in Düsseldorf's famous MedienHafen. Exposed concrete, designer furniture, and balcony overlooking the Rhine. Walking distance to bars and restaurants.",
  "type": "apartment",
  "price": 350,
  "images": [
    "/img/map.jpg",
    "dusseldorf-loft-2.jpg",
    "dusseldorf-loft-3.jpg",
    "dusseldorf-loft-4.jpg",
    "dusseldorf-loft-5.jpg",
    "dusseldorf-loft-6.jpg"
  ],
  "city": {
    "name": "Dusseldorf",
    "location": {
      "latitude": 51.227741,
      "longitude": 6.773456,
      "zoom": 12
    }
  },
  "location": {
    "latitude": 51.217741,
    "longitude": 6.783456,
    "zoom": 16
  },
  "goods": [
    "Wi-Fi",
    "Heating",
    "Balcony",
    "Kitchen",
    "Coffee machine",
    "Laptop friendly workspace",
    "TV",
    "Washing machine",
    "Dishwasher",
    "Hair dryer",
    "Iron",
    "Essentials"
  ],
  "host": {
    "isPro": true,
    "name": "Klaus",
    "avatarUrl": "img/avatar-angelina.jpg"
  },
  "isPremium": true,
  "isFavorite": true,
  "rating": 4.9,
  "bedrooms": 1,
  "maxAdults": 3
}
]

export {offers};