const mongoose = require('mongoose');
const productModel = require('./models/productModel');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('Connected to MongoDB');
    addSampleProducts();
})
.catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
});

const sampleProducts = [
    // Airpods
    {
        productName: "boAt Airdopes 131",
        brandName: "boAt",
        category: "airpodes",
        productImage: [
            "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "Wireless earbuds with superior sound quality and long battery life.",
        price: 3999,
        sellingPrice: 1999
    },
    {
        productName: "boAt Airdopes 121v2",
        brandName: "boAt",
        category: "airpodes",
        productImage: [
            "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "True wireless earbuds with smart touch controls and premium sound.",
        price: 2999,
        sellingPrice: 1499
    },
    
    // Watches
    {
        productName: "Apple Watch Series 9",
        brandName: "Apple",
        category: "watches",
        productImage: [
            "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "Advanced smartwatch with health monitoring and GPS.",
        price: 45000,
        sellingPrice: 39900
    },
    {
        productName: "Samsung Galaxy Watch 6",
        brandName: "Samsung",
        category: "watches",
        productImage: [
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "Smart fitness tracker with sleep monitoring and heart rate sensor.",
        price: 32000,
        sellingPrice: 27999
    },
    
    // Mobiles
    {
        productName: "iPhone 15 Pro",
        brandName: "Apple",
        category: "mobiles",
        productImage: [
            "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "Latest iPhone with titanium design and advanced camera system.",
        price: 134900,
        sellingPrice: 129900
    },
    {
        productName: "Samsung Galaxy S24 Ultra",
        brandName: "Samsung",
        category: "mobiles",
        productImage: [
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "Premium Android smartphone with S Pen and incredible camera.",
        price: 124999,
        sellingPrice: 119999
    },
    
    // Mouse
    {
        productName: "Logitech MX Master 3",
        brandName: "Logitech",
        category: "Mouse",
        productImage: [
            "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "Advanced wireless mouse for productivity and precision.",
        price: 8995,
        sellingPrice: 7499
    },
    {
        productName: "Razer DeathAdder V3",
        brandName: "Razer",
        category: "Mouse",
        productImage: [
            "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "Gaming mouse with high precision sensor and RGB lighting.",
        price: 6999,
        sellingPrice: 5999
    },
    
    // Televisions
    {
        productName: "Samsung 55 inch 4K Smart TV",
        brandName: "Samsung",
        category: "televisions",
        productImage: [
            "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "Ultra HD Smart TV with HDR and built-in streaming apps.",
        price: 65000,
        sellingPrice: 54999
    },
    {
        productName: "LG OLED 65 inch TV",
        brandName: "LG",
        category: "televisions",
        productImage: [
            "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "Premium OLED display with perfect blacks and vibrant colors.",
        price: 149999,
        sellingPrice: 139999
    },
    
    // Camera
    {
        productName: "Canon EOS R5",
        brandName: "Canon",
        category: "camera",
        productImage: [
            "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "Professional mirrorless camera with 8K video recording.",
        price: 349999,
        sellingPrice: 329999
    },
    {
        productName: "Sony Alpha A7 IV",
        brandName: "Sony",
        category: "camera",
        productImage: [
            "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "Full-frame mirrorless camera with advanced autofocus.",
        price: 249999,
        sellingPrice: 229999
    },
    
    // Earphones
    {
        productName: "Sony WH-1000XM5",
        brandName: "Sony",
        category: "earphones",
        productImage: [
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "Premium noise-canceling headphones with exceptional sound quality.",
        price: 34990,
        sellingPrice: 29990
    },
    {
        productName: "Audio-Technica ATH-M50x",
        brandName: "Audio-Technica",
        category: "earphones",
        productImage: [
            "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "Professional studio monitor headphones for critical listening.",
        price: 15999,
        sellingPrice: 13499
    },
    
    // Speakers
    {
        productName: "JBL Charge 5",
        brandName: "JBL",
        category: "speakers",
        productImage: [
            "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "Portable Bluetooth speaker with powerful bass and long battery life.",
        price: 17999,
        sellingPrice: 14999
    },
    {
        productName: "Bose SoundLink Revolve+",
        brandName: "Bose",
        category: "speakers",
        productImage: [
            "https://images.unsplash.com/photo-1589003077984-894e133dabab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        description: "360-degree Bluetooth speaker with deep, immersive sound.",
        price: 29900,
        sellingPrice: 24999
    }
];

async function addSampleProducts() {
    try {
        // Clear existing products (optional)
        await productModel.deleteMany({});
        console.log('Cleared existing products');

        // Insert sample products
        const insertedProducts = await productModel.insertMany(sampleProducts);
        console.log(`Successfully added ${insertedProducts.length} sample products to the database`);
        
        console.log('Sample products added:');
        insertedProducts.forEach(product => {
            console.log(`- ${product.productName} (${product.category})`);
        });
        
        mongoose.connection.close();
        console.log('Database connection closed');
    } catch (error) {
        console.error('Error adding sample products:', error);
        mongoose.connection.close();
        process.exit(1);
    }
}
