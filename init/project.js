const sampleListings = [
  {
    title: "Oceanfront Luxury Villa",
    description: "A breathtaking 5-bedroom villa with panoramic ocean views.",
    image: {
      filename: "hollywood_villa_01.jpg",
      url: "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 3500000,
    location: "Los Angeles, California",
    country: "USA",
  },
  {
    title: "Contemporary Villa in the Hills",
    description:
      "A sleek and modern 4-bedroom villa located in the Hollywood Hills.",
    image: {
      filename: "hollywood_villa_01.jpg",
      url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=forhttps://images.unsplash.com/photo-1627134028157-5e9d9d97b9e9?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dmat&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 3500000,
    location: "Los Angeles, California",
    country: "USA",
  },
  {
    title: "Charming Countryside House",
    description:
      "A quaint 3-bedroom house located in a peaceful countryside village.",
    image: {
      filename: "countryside_house_01.jpg",
      url: "https://images.unsplash.com/photo-1627134028157-5e9d9d97b9e9?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 450000,
    location: "Napa Valley, California",
    country: "USA",
  },
  {
    title: "Mountain Retreat Villa",
    description:
      "A luxurious 6-bedroom villa in the scenic mountains, perfect for winter vacations.",
    image: {
      filename: "mountain_retreat_villa_01.jpg",
      url: "https://images.unsplash.com/photo-1555579747-4722da8b2de6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 2800000,
    location: "Aspen, Colorado",
    country: "USA",
  },
  {
    title: "Spacious Family Home",
    description:
      "A large 5-bedroom home with a backyard perfect for family gatherings.",
    image: {
      filename: "family_home_01.jpg",
      url: "https://images.unsplash.com/photo-1651196321844-9ea164b7dd53?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 650000,
    location: "San Diego, California",
    country: "USA",
  },
  {
    title: "Beachfront Paradise",
    description:
      "A luxurious 4-bedroom beachfront property with a private pool.",
    image: {
      filename: "beachfront_paradise_01.jpg",
      url: "https://images.unsplash.com/photo-1569017437456-a82e38aea5ed?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 2200000,
    location: "Kauai, Hawaii",
    country: "USA",
  },
  {
    title: "Elegant Urban Loft",
    description:
      "A chic 2-bedroom loft in the heart of the city, ideal for professionals.",
    image: {
      filename: "urban_loft_01.jpg",
      url: "https://images.unsplash.com/photo-1707336669830-ece4474e77a8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 800000,
    location: "New York City, New York",
    country: "USA",
  },
  {
    title: "Cozy Cabin in the Woods",
    description:
      "A 2-bedroom log cabin surrounded by nature, perfect for weekend getaways.",
    image: {
      filename: "cozy_cabin_01.jpg",
      url: "https://images.unsplash.com/photo-1529506711032-973f0b98912b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 350000,
    location: "Lake Tahoe, California",
    country: "USA",
  },
  {
    title: "Luxurious Penthouse Apartment",
    description:
      "A 3-bedroom penthouse with incredible city views and modern amenities.",
    image: {
      filename: "penthouse_01.jpg",
      url: "https://images.unsplash.com/photo-1575110867130-cc95e46a26fe?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 5000000,
    location: "Chicago, Illinois",
    country: "USA",
  },
  {
    title: "Gated Villa with Large Pool",
    description: "A 5-bedroom gated villa with a luxurious pool and garden.",
    image: {
      filename: "gated_villa_01.jpg",
      url: "https://images.unsplash.com/photo-1647517649469-ba454dc72896?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 3000000,
    location: "Beverly Hills, California",
    country: "USA",
  },
  {
    title: "Modern Beach House",
    description:
      "A minimalist 4-bedroom beach house with expansive ocean views.",
    image: {
      filename: "beautifull house",
      url: "https://images.unsplash.com/photo-1647517649469-ba454dc72896?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 2000000,
    location: "Malibu, California",
    country: "USA",
  },
  {
    title: "Historic Mansion",
    description:
      "A 6-bedroom historic mansion with original architecture and large grounds.",
    image: {
      filename: "historic_mansion_01.jpg",
      url: "https://images.unsplash.com/photo-1720247522884-75029b97e0b5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 6000000,
    location: "New Orleans, Louisiana",
    country: "USA",
  },
  {
    title: "Charming Beach Cottage",
    description: "A 3-bedroom cozy cottage just steps away from the beach.",
    image: {
      filename: "beach_cottage_01.jpg",
      url: "https://plus.unsplash.com/premium_photo-1686090450479-370d5ddf4de1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 850000,
    location: "Cape Cod, Massachusetts",
    country: "USA",
  },
  {
    title: "Luxury Villa with Ocean Views",
    description: "An elegant villa with stunning views of the Pacific Ocean.",
    image: {
      filename: "luxury_villa_ocean_01.jpg",
      url: "https://images.unsplash.com/photo-1661586762551-b595e65388ba?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 4200000,
    location: "Santa Barbara, California",
    country: "USA",
  },
  {
    title: "Chic Downtown Apartment",
    description:
      "A 2-bedroom apartment in the heart of the city, with modern finishes.",
    image: {
      filename: "downtown_apartment_01.jpg",
      url: "https://images.unsplash.com/photo-1561895736-c4da66627f48?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 900000,
    location: "San Francisco, California",
    country: "USA",
  },
  {
    title: "Elegant Family Mansion",
    description:
      "A luxurious 7-bedroom family mansion with a large garden and swimming pool.",
    image: {
      filename: "family_mansion_01.jpg",
      url: "https://images.unsplash.com/photo-1555579747-4722da8b2de6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 7500000,
    location: "Greenwich, Connecticut",
    country: "USA",
  },
  {
    title: "Private Villa with Large Garden",
    description: "A private villa surrounded by lush gardens with 4 bedrooms.",
    image: {
      filename: "private_villa_01.jpg",
      url: "https://plus.unsplash.com/premium_photo-1721914104996-4f19fb5828dc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1300000,
    location: "San Francisco Bay Area, California",
    country: "USA",
  },
  {
    title: "Secluded Desert Oasis",
    description:
      "A 3-bedroom desert oasis with private access to nature trails and views.",
    image: {
      filename: "desert_oasis_01.jpg",

      url: "https://images.unsplash.com/photo-1685514823717-7e1ff6ee0563?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 700000,
    location: "Palm Springs, California",
    country: "USA",
  },
  {
    title: "Exclusive Vineyard Estate",
    description:
      "A luxurious vineyard estate with a private wine cellar and 5 bedrooms.",
    image: {
      filename: "vineyard_estate_01.jpg",

      url: "https://images.unsplash.com/photo-1679398538970-c566a259cac3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 6000000,
    location: "Napa Valley, California",
    country: "USA",
  },
  {
    title: "Modern Family House with Pool",
    description:
      "A modern 4-bedroom family house with a spacious pool and backyard.",
    image: {
      filename: "modern_family_house_01.jpg",

      url: "https://images.unsplash.com/photo-1440759634953-120ae893d935?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 950000,
    location: "Austin, Texas",
    country: "USA",
  },
  {
    title: "Ocean Breeze Villa",
    description:
      "A luxurious 3-bedroom villa with stunning views and easy beach access.",
    image: {
      filename: "ocean_breeze_villa_01.jpg",

      url: "https://images.unsplash.com/photo-1660673399641-0e1bc98a7cb4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1800000,
    location: "Malibu, California",
    country: "USA",
  },
  {
    title: "Penthouse with Panoramic Views",
    description:
      "A chic 2-bedroom penthouse with sweeping views of the skyline.",
    image: {
      filename: "penthouse_view_01.jpg",
      url: "https://images.unsplash.com/photo-1562516881-f065aa64d4e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 3800000,
    location: "Los Angeles, California",
    country: "USA",
  },
];

module.exports = { data: sampleListings };
