const destinations = [
  {
    id: 1,
    name: "Lisbon",
    description: "Make your way through the cobblestone streets of Lisbon.",
    image: "images/lisbon.jpg",
    introductoryVideo: "8Sucd2UZHiM",
    images: [
      "images/lisbon/lisbon1.jpg",
      "images/lisbon/lisbon2.jpg",
      "images/lisbon/lisbon3.jpg",
    ],
    landmarks: ["Portuguese Riviera", "Sintra", "Lisbon"],
    culture: ["Portuguese Cuisine", "Fado", "Portuguese Wine"],
    cuisine: ["Bacalhau", "Francesinha", "Pastel de Nata"],
    history: ["Portuguese Empire", "Age of Discovery", "Catholic Monarchy"],
    nearbyAttractions: [
      {
        id: 2,
        name: "Sintra",
        image: "images/lisbon/sintra.jpg",
      },
      {
        id: 3,
        name: "Portuguese Riviera",
        image: "images/lisbon/riviera.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "Barcelona",
    description: "Explore the beautiful city of Barcelona.",
    image: "images/barcelona.jpg",
    introductoryVideo: "8Sucd2UZHiM",
    images: [
      "images/barcelona/barcelona1.jpg",
      "images/barcelona/barcelona2.jpg",
      "images/barcelona/barcelona3.jpg",
    ],
    landmarks: ["Sagrada Familia", "Park Güell", "La Rambla"],
    culture: ["Spanish Cuisine", "Soccer", "Architecture"],
    cuisine: ["Paella", "Tapas", "Churros"],
    history: ["Spanish Civil War", "Catalan Nationalism", "Spanish Empire"],
    nearbyAttractions: [
      {
        id: 1,
        name: "Sagrada Familia",
        image: "images/barcelona/sagrada.jpg",
      },
      {
        id: 3,
        name: "Park Güell",
        image: "images/barcelona/park.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "Paris",
    description: "Discover the City of Lights and its enchanting history.",
    image: "images/paris/paris.jpg",
    introductoryVideo: "8Sucd2UZHiM",
    images: [
      "images/paris/paris1.jpg",
      "images/paris/paris2.jpg",
      "images/paris/paris3.jpg",
    ],
    landmarks: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral"],
    culture: ["French Cuisine", "Fashion", "Art"],
    cuisine: ["Croissant", "Baguette", "Crème Brûlée"],
    history: ["French Revolution", "The Enlightenment", "Gothic Architecture"],
    nearbyAttractions: [
      {
        id: 4,
        name: "Versailles",
        image: "images/paris/versailles.jpg",
      },
      {
        id: 5,
        name: "Giverny",
        image: "images/paris/giverny.jpg",
      },
    ],
  },
  {
    id: 4,
    name: "New York",
    description:
      "Experience the city that never sleeps and its iconic landmarks.",
    image: "images/newyork.jpg",
  },
  {
    id: 5,
    name: "Tokyo",
    description: "Explore the city of the future and its unique culture.",
    image: "images/tokyo.jpg",
  },
  {
    id: 6,
    name: "Sydney",
    description: "Find yourself in the land down under.",
    image: "images/sydney.jpg",
  },
  {
    id: 7,
    name: "Berlin",
    description: "The city of art, music, and history.",
    image: "images/berlin.jpg",
  },
  {
    id: 8,
    name: "Rio de Janeiro",
    description: "Where the sun shines and the beaches are beautiful.",
    image: "images/rio-de-janeiro.jpg",
  },
  {
    id: 9,
    name: "London",
    description: "What can we say about London? It's London.",
    image: "images/london.jpg",
  },
];

export default destinations;
