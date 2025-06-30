const mongoose = require('mongoose');
const productModel = require('./models/productModel');
require('dotenv').config();

// Sample products data
const sampleProducts = [
    {
        productName: "boAt Airdopes 131",
        brandName: "boAt",
        category: "airpodes",
        productImage: [
            "assets/products/airpodes/boAt Airdopes 131 1.webp",
            "assets/products/airpodes/boAt Airdopes 131 2.webp"
        ],
        description: "boAt Airdopes 131 Wireless Earbuds with Premium Sound Quality",
        price: 2999,
        sellingPrice: 1999
    },
    {
        productName: "Samsung Galaxy Watch",
        brandName: "Samsung",
        category: "watches",
        productImage: [
            "assets/products/watches/samsung-watch-1.webp"
        ],
        description: "Samsung Galaxy Watch with Health Monitoring Features",
        price: 25999,
        sellingPrice: 22999
    },
    {
        productName: "iPhone 15 Pro",
        brandName: "Apple",
        category: "mobiles",
        productImage: [
            "assets/products/mobile/iphone-15-pro.webp"
        ],
        description: "Latest iPhone 15 Pro with A17 Pro Chip",
        price: 134900,
        sellingPrice: 129900
    },
    {
        productName: "Logitech MX Master 3",
        brandName: "Logitech",
        category: "Mouse",
        productImage: [
            "assets/products/mouse/logitech-mx-master-3.webp"
        ],
        description: "Logitech MX Master 3 Advanced Wireless Mouse",
        price: 8995,
        sellingPrice: 7995
    },
    {
        productName: "Sony 55 inch 4K TV",
        brandName: "Sony",
        category: "televisions",
        productImage: [
            "assets/products/TV/sony-55-4k.webp"
        ],
        description: "Sony 55 inch 4K Ultra HD Smart LED TV",
        price: 89999,
        sellingPrice: 79999
    }
];

// Connect to MongoDB and add sample products
async function addSampleProducts() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');
        
        // Clear existing products (optional)
        // await productModel.deleteMany({});
        
        // Add sample products
        const products = await productModel.insertMany(sampleProducts);
        console.log(`Added ${products.length} sample products:`);
        products.forEach(product => {
            console.log(`- ${product.productName} (${product.category})`);
        });
        
        console.log('Sample products added successfully!');
        process.exit(0);
    } catch (error) {
        console.error('Error adding sample products:', error);
        process.exit(1);
    }
}

addSampleProducts();
