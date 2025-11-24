import {FullOffer} from '../types/offer';


const offers: FullOffer[] = [
{
  'id': 'bbb06a0e-3f92-446d-9a68-cb64b5d38e2b1',
  'title': 'Wood and stone place',
  'description': 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families ',
  'type': 'apartment',
  'price': 370,
  'images': [
    '/img/paris/paris-1.jpg',
    '/img/paris/paris-2.webp',
    '/img/paris/paris-3.jpg',
    '/img/paris/paris-4.jpg',
    '/img/paris/paris-5.jpg',
    '/img/paris/paris-6.jpg'
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
    'Laptop friendly',
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
    'avatarUrl': '/img/avatar/avatar-1.webp'
},
  'isPremium': false,
  'isFavorite': true,
  'rating': 4.9,
  'bedrooms': 2,
  'maxAdults': 3
},

{
  "id": "bbb06a0e-3f92-446d-9a68-cb64b5d38e2b",
  "title": "Montmartre Artist Attic",
  "description": "Charming attic apartment in artistic Montmartre. Skylight windows, wooden beams, and view over Parisian rooftops. Steps from Sacré-Cœur and local cafes.",
  "type": "apartment",
  "price": 420,
  "images": [
    "/img/amsterdam/amsterdam-1.webp",
    "/img/amsterdam/amsterdam-2.webp",
    "/img/amsterdam/amsterdam-3.jpg",
    "/img/amsterdam/amsterdam-4.webp"
  ],
  "city": {
    "name": "Amsterdam",
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
    "Laptop friendly",
    "Hair dryer",
    "Essentials",
    "Baby seat",
    "TV"
  ],
  "host": {
    "isPro": true,
    "name": "Sophie",
    "avatarUrl": "/img/avatar/avatar-2.jpg"
  },
  "isPremium": true,
  "isFavorite": true,
  "rating": 1.7,
  "bedrooms": 1,
  "maxAdults": 2
},

{
  "id": "bbb06a0e-3f92-446d-9a68-cb64b5d38e2b2",
  "title": "HafenCity Modern Apartment",
  "description": "Brand new apartment in Hamburg's trendy HafenCity district. Floor-to-ceiling windows with harbor views, minimalist design, and close to Elbphilharmonie.",
  "type": "apartment",
  "price": 380,
  "images": [
    "/img/House_Room_Dataset/bath_2.jpg",
    "/img/House_Room_Dataset/bed_2.jpg",
    "/img/House_Room_Dataset/din_3.jpg",
    "/img/House_Room_Dataset/kitchen_2.jpg",
    "/img/House_Room_Dataset/living_2.jpg"
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
    "Laptop friendly",
    "TV",
    "Elevator",
    "Parking"
  ],
  "host": {
    "isPro": false,
    "name": "Thomas",
    "avatarUrl": "/img/avatar/avatar-2.jpg"
  },
  "isPremium": false,
  "isFavorite": true,
  "rating": 4.5,
  "bedrooms": 2,
  "maxAdults": 4
},
{
  "id": "bbb06a0e-3f92-446d-9a68-cb64b5d38e2b3",
  "title": "MedienHafen Designer Loft",
  "description": "Industrial-chic loft in Düsseldorf's famous MedienHafen. Exposed concrete, designer furniture, and balcony overlooking the Rhine. Walking distance to bars and restaurants.",
  "type": "apartment",
  "price": 350,
  "images": [
    "/img/House_Room_Dataset/bath_3.jpg",
    "/img/House_Room_Dataset/bed_3.jpg",
    "/img/House_Room_Dataset/din_3.jpg",
    "/img/House_Room_Dataset/kitchen_2.jpg",
    "/img/House_Room_Dataset/living_3.jpg"
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
    "Laptop friendly",
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
    "avatarUrl": "/img/avatar/avatar-1.webp"
  },
  "isPremium": true,
  "isFavorite": true,
  "rating": 4.9,
  "bedrooms": 1,
  "maxAdults": 3
}
]

export {offers};