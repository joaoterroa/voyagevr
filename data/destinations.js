const destinations = [
  {
    id: 1,
    name: "Lisbon",
    description: "Make your way through the cobblestone streets of Lisbon.",
    latitude: 38.7222524,
    longitude: -9.1393366,
    image: "images/lisbon.jpg",
    introductoryVideo: "N8bHCHl8X_0",
    timeStamps: [80, 200, 720],
    intervals: { 1: [80, 90] },
    images: [
      "images/lisbon/torre_belem.jpg",
      "images/lisbon/maat.jpg",
      "images/lisbon/sintra.jpg",
    ],
    landmarks: ["Torre de Belém", "Maat", "Sintra"],
    annotations: [(500, 500), (500, 500), (500, 500)],
    culture: {
      "Portuguese Cuisine":
        "Portuguese cuisine is a rich and diverse culinary tradition that has been influenced by the country's long history of seafaring and exploration. With an emphasis on fresh seafood, flavorful spices, and simple but hearty ingredients, Portuguese dishes often combine the best of land and sea. At the heart of this culinary culture are traditional recipes passed down through generations, which showcase the country's Mediterranean and Atlantic influences. One of the most famous dishes is Bacalhau, which is salt cod that has been dried and preserved. It can be prepared in many ways, such as grilled, boiled, or baked, and is often served with potatoes and vegetables. Another beloved Portuguese dish is the Francesinha, a sandwich filled with cured meats and cheese, topped with a rich tomato and beer sauce. And of course, no discussion of Portuguese cuisine would be complete without mentioning the sweet and creamy Pastel de Nata, a custard tart that is famous all over the world.",
      Fado: 'Fado is a traditional Portuguese music genre characterized by its melancholic and soulful melodies. Often described as the "soul of Portugal", Fado has its roots in the early 19th century, emerging from the urban working-class neighborhoods of Lisbon. Fado songs are typically performed by a solo singer, or fadista, accompanied by the Portuguese guitarra, a 12-stringed instrument unique to the genre. Central to the Fado experience is the concept of "saudade", a deep longing or nostalgia that pervades the music and resonates with listeners. Fado songs typically tell stories of love, loss, and the struggles of everyday life. Despite its sad tone, Fado is beloved by many and has become an important part of Portuguese culture.',
      "Portuguese Wine":
        "Portugal has a long history of winemaking, dating back to the ancient Romans, and boasts a wide variety of wine styles and regions. The country is perhaps best known for its Port wine, a sweet, fortified wine produced in the Douro Valley. However, Portugal's diverse climate and geography allow for the cultivation of numerous grape varieties, resulting in an array of wines that cater to different tastes. Some other notable wine styles include Vinho Verde, a crisp and refreshing young wine from the Minho region, and Madeira, a fortified wine from the Madeira Islands with a unique oxidative aging process.",
    },
    cuisine: {
      Bacalhau:
        'Bacalhau, or salted cod, is a staple ingredient in Portuguese cuisine and has earned the nickname "the faithful friend" due to its prevalence in the country\'s culinary traditions. With a history that dates back to the Age of Discovery, bacalhau was an essential food source for Portuguese sailors who needed preserved provisions during long sea voyages. Today, it is said that there are 365 ways to prepare bacalhau – one for each day of the year – with dishes ranging from simple grilled preparations to elaborate layered casseroles.',
      Francesinha:
        'Francesinha, meaning "little French girl," is a popular Portuguese sandwich originating from the city of Porto. This indulgent dish consists of a variety of meats, such as ham, sausage, and roast beef, layered between slices of bread and topped with melted cheese. The sandwich is then drenched in a rich, spicy tomato and beer-based sauce and often served with a side of French fries. Although the origins of the Francesinha are debated, it is believed to have been inspired by the French croque-monsieur, adapted to suit Portuguese tastes.',
      "Pastel de Nata":
        "The Pastel de Nata, or Portuguese custard tart, is a beloved pastry that has become synonymous with Portugal's culinary identity. These small, flaky tarts feature a rich, creamy egg custard filling, often flavored with cinnamon and encased in a crispy, multi-layered puff pastry shell. The origins of the Pastel de Nata can be traced back to the 18th century, when they were first made by Catholic monks in Lisbon's Jerónimos Monastery. Today, these tarts can be found in bakeries and cafés across Portugal and have gained international acclaim as a symbol of Portuguese gastronomy.",
    },
    history: {
      "Portuguese Empire":
        "The Portuguese Empire was one of the longest-lasting and far-reaching colonial empires in history, spanning over six centuries from the 15th to the 20th century. Established during the Age of Discovery, Portugal's colonial expansion was driven by its desire to find new trade routes and secure valuable resources, leading to the establishment of colonies and trading posts across Africa, Asia, and South America. The empire's most notable achievements include the discovery of the sea route to India by Vasco da Gama, the establishment of Brazil as a Portuguese colony, and the creation of a global trade network that linked Europe, Africa, and Asia. Despite its decline in the 19th and 20th centuries, the legacy of the Portuguese Empire can still be seen today in the shared history, language, and cultural influences among the countries that were once part of this vast empire.",
      "Age of Discovery":
        "The Age of Discovery, also known as the Age of Exploration, was a period of unprecedented global exploration and cultural exchange that lasted from the 15th to the 17th century. This era was characterized by European voyages to the New World, Africa, and Asia in search of new trade routes, wealth, and knowledge. Portugal played a pioneering role in this period, with explorers like Prince Henry the Navigator, Vasco da Gama, and Ferdinand Magellan leading the way in maritime exploration and expanding the boundaries of the known world. The Age of Discovery had profound and lasting effects on global history, including the establishment of the first European colonies, the Columbian Exchange, and the beginning of the global economy.",
      "Catholic Monarchy":
        "Portugal has a long history as a Catholic monarchy, dating back to its establishment as an independent kingdom in the 12th century. The Catholic Church played a central role in the development of the Portuguese state, with its influence permeating various aspects of society, including politics, culture, and education. The monarchy's close ties to the Church were further solidified during the Age of Discovery, as Portuguese explorers sought to spread Catholicism to the newly discovered territories. This relationship between the Church and the monarchy continued until the establishment of the Portuguese First Republic in 1910, which marked the end of the monarchy and the beginning of a secular state. However, the Catholic Church's impact on Portuguese history and culture remains an enduring part of the country's identity.",
    },
  },
  {
    id: 2,
    name: "Barcelona",
    description: "Explore the beautiful city of Barcelona.",
    image: "images/barcelona.jpg",
    introductoryVideo: "s1XoYkn3osE",
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
