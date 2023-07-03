const destinations = [
    {
        id: 1,
        name: "Lisbon",
        description: "Make your way through the cobblestone streets of Lisbon.",
        latitude: 38.7222524,
        longitude: -9.1393366,
        image: "images/lisbon.jpg",
        video: "videos/lisbon.webm",
        introductoryVideo: "ojBoV6GoXks",
        timeStamps: [46, 97, 158, 187],
        timeStampsCuisine: [246, 288, 326, 363],
        intervals: { 0: [46, 96], 1: [97, 157], 2: [158, 186], 3: [187, 215] },
        intervalsCuisine: {
            0: [246, 287],
            1: [288, 325],
            2: [326, 362],
            3: [363, 398],
        },
        images: [
            "images/lisbon/torre_belem.jpg",
            "images/lisbon/mosteiro2.jpg",
            "images/lisbon/sintra.jpg",
            "images/lisbon/padrao.jpg",
        ],
        imagesCuisine: [
            "images/lisbon/nata.jpg",
            "images/lisbon/bras.jpg",
            "images/lisbon/sardinha.jpg",
            "images/lisbon/patanisca.jpg",
        ],
        imagesHistory: [
            "images/lisbon/port.jpg",
            "images/lisbon/descobrimentos.jpg",
            "images/lisbon/1755.jpg",
            "images/lisbon/war.jpg",
            "images/lisbon/republica.jpg",
            "images/lisbon/cravos.jpg",
            "images/lisbon/ec.jpg",
            "images/lisbon/sec21.jpg",
        ],
        landmarks: [
            "Torre de Belém",
            "Mosteiro dos Jerónimos",
            "Palácio da Pena",
            "Padrão dos Descobrimentos",
        ],
        landmarksCuisine: [
            "Pastéis de Belém",
            "Bacalhau à Brás",
            "Sardinhas Assadas",
            "Pataniscas",
        ],
        annotations: [(500, 500), (500, 500), (500, 500)],
        landmarksHistory: [
            "Lisbon, the Capital of Portugal",
            "Portuguese discoveries",
            "Lisbon earthquake",
            "Peninsular War",
            "Portuguese Republic",
            "Carnation Revolution",
            "Joining European Community",
            "21st Century",
        ],
        history: {
            "1. Lisbon, the Capital of Portugal":
                "In 711, Muslims, who were mostly Berbers and Arabs from the Maghreb, invaded the Christian Iberian Peninsula, conquering Lisbon in 714. What is now Portugal first became part of the Emirate of Córdoba and then of its successor state, the Caliphate of Córdoba. Despite attempts to seize it by the Normans in 844 and by Alfonso VI in 1093, Lisbon remained a Muslim possession. In 1147, after a four-month siege, Christian crusaders under the command of Afonso I captured the city and Christian rule returned. In 1256, Afonso III moved his capital from Coimbra to Lisbon, taking advantage of the city's excellent port and its strategic central position.",
            "2. Portuguese discoveries":
                "Lisbon flourished in the 15th and 16th centuries as the centre of a vast empire during the period of the Portuguese discoveries, This was a time of intensive maritime exploration, when the Kingdom of Portugal accumulated great wealth and power through its colonisation of Asia, South America, Africa and the Atlantic islands. Evidence of the city's wealth can still be seen today in the magnificent structures built then, including the Jerónimos Monastery and the nearby Tower of Belém, each classified a UNESCO World Heritage Site in 1983.",
            "3. Lisbon earthquake":
                "The 1755 Lisbon earthquake, in combination with subsequent fires and a tsunami, almost totally destroyed Lisbon and adjoining areas. Sebastião José de Carvalho e Melo, 1st Marquis of Pombal, took the lead in ordering the rebuilding of the city, and was responsible for the creation of the elegant financial and commercial district of the Baixa Pombalina (Pombaline Lower Town).",
            "4. Peninsular War":
                "During the Peninsular War, (1807–1814) Napoleon's forces began a four-year occupation of the city in December 1807, and Lisbon descended with the rest of the country into anarchy. After the war ended in 1814, a new constitution was proclaimed and Brazil was granted independence.",
            "5. Portuguese Republic":
                "The 20th century brought political upheaval to Lisbon and the nation as a whole. In 1908, at the height of the turbulent period of the Republican movement, King Carlos and his heir Luís Filipe was assassinated in the Terreiro do Paço. On 5 October 1910, the Republicans organised a coup d'état that overthrew the constitutional monarchy and established the Portuguese Republic. There were 45 changes of government from 1910 through 1926.",
            "6. Carnation Revolution":
                "The right-wing Estado Novo regime, which ruled the country from 1926 to 1974, suppressed civil liberties and political freedom in the longest-lived dictatorship in Western Europe. It was finally deposed by the Carnation Revolution (Revolução dos Cravos), launched in Lisbon with a military coup on 25 April 1974. The movement was joined by a popular campaign of civil resistance, leading to the fall of the Estado Novo, the restoration of democracy, and the withdrawal of Portugal from its African colonies and East Timor. Following the revolution, there was a huge influx into Lisbon of refugees from the former African colonies in 1974 and 1975.",
            "7. Joining European Community":
                "Portugal joined the European Community (EC) in 1986, and subsequently received massive funding to spur redevelopment. Lisbon's local infrastructure was improved with new investment and its container port became the largest on the Atlantic coast. The city was in the limelight as the 1994 European City of Culture, as well as host of Expo '98 and the 2004 European Football Championships. The year 2006 saw continuing urban renewal projects throughout the city, ranging from the restoration of the Praça de Touros (Lisbon's bullring) and its re-opening as a multi-event venue, to improvements of the metro system and building rehabilitation in the Alfama.",
            "8. 21st Century":
                "Reforms made by local government in the first years of the 21st century established the administrative region of the Lisbon metropolitan area. Lisbon's metro system was expanded with the addition of several new stations, among them the transportation hub of Gare do Oriente, designed by the Spanish neofuturistic architect, Santiago Calatrava, and finished in time for the Expo '98 world's fair on land east of the city centre in Parque das Nações (Park of Nations). The station has since reached a ridership of 75 million passengers per year. Lisbon's international airport is located in the city centre, but with no room to expand, may soon have problems meeting demand.",
        },
        culture: {
            "Portuguese Cuisine":
                "Portuguese cuisine is a rich and diverse culinary tradition that has been influenced by the country's long history of seafaring and exploration. With an emphasis on fresh seafood, flavorful spices, and simple but hearty ingredients, Portuguese dishes often combine the best of land and sea. At the heart of this culinary culture are traditional recipes passed down through generations, which showcase the country's Mediterranean and Atlantic influences. One of the most famous dishes is Bacalhau, which is salt cod that has been dried and preserved. It can be prepared in many ways, such as grilled, boiled, or baked, and is often served with potatoes and vegetables. Another beloved Portuguese dish is the Francesinha, a sandwich filled with cured meats and cheese, topped with a rich tomato and beer sauce. And of course, no discussion of Portuguese cuisine would be complete without mentioning the sweet and creamy Pastel de Nata, a custard tart that is famous all over the world.",
            Fado: 'Fado is a traditional Portuguese music genre characterized by its melancholic and soulful melodies. Often described as the "soul of Portugal", Fado has its roots in the early 19th century, emerging from the urban working-class neighborhoods of Lisbon. Fado songs are typically performed by a solo singer, or fadista, accompanied by the Portuguese guitarra, a 12-stringed instrument unique to the genre. Central to the Fado experience is the concept of "saudade", a deep longing or nostalgia that pervades the music and resonates with listeners. Fado songs typically tell stories of love, loss, and the struggles of everyday life. Despite its sad tone, Fado is beloved by many and has become an important part of Portuguese culture.',
            "Portuguese Wine":
                "Portugal has a long history of winemaking, dating back to the ancient Romans, and boasts a wide variety of wine styles and regions. The country is perhaps best known for its Port wine, a sweet, fortified wine produced in the Douro Valley. However, Portugal's diverse climate and geography allow for the cultivation of numerous grape varieties, resulting in an array of wines that cater to different tastes. Some other notable wine styles include Vinho Verde, a crisp and refreshing young wine from the Minho region, and Madeira, a fortified wine from the Madeira Islands with a unique oxidative aging process.",
        },
        cuisine: {
            "Pastéis de Belém":
                "Indeed the archetypal Portuguese pastry is the Pastel de Nata - a custard tart with hints of cinnamon and vanilla, which you can find in, we'll risk saying: every Pastelaria in the country! But Lisbonites believe that this sacred Portuguese pastry is found in its most heavenly form at the Antiga Confeitaria de Belem, more commonly known as the Pastéis de Belém. The first recipe for pastel de Belém dates back to 1837 when it was produced by the monks of the Jerónimos monastery. Only the custard tarts produced at the Fábrica Pastéis de Belém can be called pastel de Belém, while all the others, produced by other patisseries in Lisbon are called pastel de nata. Regardless of the name, these tarts can be served hot or cold and in 2009, The Guardian listed pastel de Belém as one of the 50 'best things to eat' in the world.",
            "Bacalhau à Brás":
                'Bacalhau, or salted cod, is a staple ingredient in Portuguese cuisine and has earned the nickname "the faithful friend" due to its prevalence in the country\'s culinary traditions. With a history that dates back to the Age of Discovery, bacalhau was an essential food source for Portuguese sailors who needed preserved provisions during long sea voyages. Today, it is said that there are 365 ways to prepare bacalhau – one for each day of the year – with dishes ranging from simple grilled preparations to elaborate layered casseroles. A classic Portuguese recipe, Bacalhau À brás mixes salt cod, potatoes, and eggs into a creamy dish topped with olives and parsley. It’s a favorite of old Portugal.',
            "Sardinhas Assadas":
                "A staple restaurant dish and a common sight at various summer festivals, grilled sardines are a simple, traditional Portuguese dish. They are usually grilled whole, merely seasoned with salt and olive oil. Although they are commonly accompanied by bread, they are also sided with boiled potatoes, sautéed vegetables, or salads, and are often garnished with fresh cilantro and a drizzle of olive oil.",
            Pataniscas:
                "Pataniscas (Salt Cod Fish Fritters) is a delicious typical Portuguese petisco made from a mixture of cod with a dough that contains flour, egg, chopped parsley, onions, and salt. It can be served as a starter or as a main course (usually with a side dish of brown bean rice or tomato rice). It is absolutely mouthwatering either way, we have to admit. Even though super traditional, it is very simple and easy to prepare the dish, so it is part of the menu all year round. We will easily take them to picnics and family trips as a snack as well. But even more important: Pataniscas is one of the items that can’t be missed on a proper Portuguese Christmas table.",
        },
        // history: {
        //     "Portuguese Empire":
        //         "The Portuguese Empire was one of the longest-lasting and far-reaching colonial empires in history, spanning over six centuries from the 15th to the 20th century. Established during the Age of Discovery, Portugal's colonial expansion was driven by its desire to find new trade routes and secure valuable resources, leading to the establishment of colonies and trading posts across Africa, Asia, and South America. The empire's most notable achievements include the discovery of the sea route to India by Vasco da Gama, the establishment of Brazil as a Portuguese colony, and the creation of a global trade network that linked Europe, Africa, and Asia. Despite its decline in the 19th and 20th centuries, the legacy of the Portuguese Empire can still be seen today in the shared history, language, and cultural influences among the countries that were once part of this vast empire.",
        //     "Age of Discovery":
        //         "The Age of Discovery, also known as the Age of Exploration, was a period of unprecedented global exploration and cultural exchange that lasted from the 15th to the 17th century. This era was characterized by European voyages to the New World, Africa, and Asia in search of new trade routes, wealth, and knowledge. Portugal played a pioneering role in this period, with explorers like Prince Henry the Navigator, Vasco da Gama, and Ferdinand Magellan leading the way in maritime exploration and expanding the boundaries of the known world. The Age of Discovery had profound and lasting effects on global history, including the establishment of the first European colonies, the Columbian Exchange, and the beginning of the global economy.",
        //     "Catholic Monarchy":
        //         "Portugal has a long history as a Catholic monarchy, dating back to its establishment as an independent kingdom in the 12th century. The Catholic Church played a central role in the development of the Portuguese state, with its influence permeating various aspects of society, including politics, culture, and education. The monarchy's close ties to the Church were further solidified during the Age of Discovery, as Portuguese explorers sought to spread Catholicism to the newly discovered territories. This relationship between the Church and the monarchy continued until the establishment of the Portuguese First Republic in 1910, which marked the end of the monarchy and the beginning of a secular state. However, the Catholic Church's impact on Portuguese history and culture remains an enduring part of the country's identity.",
        // },
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
        history: [
            "French Revolution",
            "The Enlightenment",
            "Gothic Architecture",
        ],
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
