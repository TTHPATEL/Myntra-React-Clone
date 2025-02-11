const itemsData = {
  items: [
    {
      id: "001",
      image: "images/1.jpg",
      company: "Carlton London",
      item_name: "Rhodium-Plated CZ Floral Studs",
      original_price: 1045,
      current_price: 606,
      discount_percentage: 42,
      return_period: 14,
      delivery_date: "10 Oct 2023",
      rating: { stars: 4.5, count: 1400 },
      category: "Jewellery",
    },
    {
      id: "002",
      image: "images/2.jpg",
      company: "CUKOO",
      item_name: "Women Padded Halter Neck Swimming Dress",
      original_price: 2599,
      current_price: 1507,
      discount_percentage: 42,
      return_period: 14,
      delivery_date: "10 Oct 2023",
      rating: { stars: 4.3, count: 24 },
      category: "Women",
    },
    {
      id: "003",
      image: "images/3.jpg",
      company: "NUEVOSDAMAS",
      item_name: "Women Red & White Printed A-Line Knee-Length Skirts",
      original_price: 1599,
      current_price: 495,
      discount_percentage: 69,
      return_period: 14,
      delivery_date: "10 Oct 2023",
      rating: { stars: 4.1, count: 249 },
      category: "Women",
    },
    {
      id: "004",
      image: "images/4.jpg",
      company: "ADIDAS",
      item_name: "Indian Cricket ODI Jersey",
      original_price: 999,
      current_price: 999,
      discount_percentage: 0,
      return_period: 14,
      delivery_date: "10 Oct 2023",
      rating: { stars: 5, count: 10 },
      category: "Men",
    },
    {
      id: "005",
      image: "images/5.jpg",
      company: "Roadster",
      item_name: "Pure Cotton T-shirt",
      original_price: 1399,
      current_price: 489,
      discount_percentage: 65,
      return_period: 14,
      delivery_date: "10 Oct 2023",
      rating: { stars: 4.2, count: 3500 },
      category: "Men",
    },
    {
      id: "006",
      image: "images/6.jpg",
      company: "Nike",
      item_name: "Men ReactX Running Shoes",
      original_price: 14995,
      current_price: 14995,
      discount_percentage: 0,
      return_period: 14,
      delivery_date: "10 Oct 2023",
      rating: { stars: 0, count: 0 },
      category: "Shoes",
    },
    {
      id: "007",
      image: "images/7.jpg",
      company: "The Indian Garage Co",
      item_name: "Men Slim Fit Regular Shorts",
      original_price: 1599,
      current_price: 639,
      discount_percentage: 60,
      rating: { stars: 4.2, count: 388 },
      category: "Men",
    },
    {
      id: "008",
      image: "images/8.jpg",
      company: "Nivea",
      item_name: "Men Fresh Deodrant 150ml",
      original_price: 285,
      current_price: 142,
      discount_percentage: 50,
      return_period: 14,
      delivery_date: "10 Oct 2023",
      rating: { stars: 4.2, count: 5200 },
      category: "Living",
    },
    {
      id: "009",
      image: "images/9.jpg",
      company: "BAESD",
      item_name: "Girls Embroidered Ethnic Dresses",
      original_price: 3449,
      current_price: 1103,
      discount_percentage: 0,
      return_period: 14,
      delivery_date: "10 Oct 2023",
      rating: { stars: 0, count: 0 },
      category: "Kids",
    },
  ],
};

async function getStoredItems() {
  try {
    // Directly use the itemsData object as the data source
    const storedItems = itemsData.items ?? [];
    return storedItems;
  } catch (error) {
    console.error("Error retrieving stored items:", error);
    throw new Error("Could not retrieve stored items");
  }
}

function storeItems(items) {
  // For now, we're not storing anything to a file, just returning the updated items
  itemsData.items = items;
  return itemsData;
}

exports.getStoredItems = getStoredItems;
exports.storeItems = storeItems;

// const fs = require('node:fs/promises');

// async function getStoredItems() {
//   const rawFileContent = await fs.readFile('items.json', { encoding: 'utf-8' });
//   const data = JSON.parse(rawFileContent);
//   const storedItems = data.items ?? [];
//   return storedItems;
// }

// function storeItems(items) {
//   return fs.writeFile('items.json', JSON.stringify({ items: items || [] }));
// }

// exports.getStoredItems = getStoredItems;
// exports.storeItems = storeItems;
