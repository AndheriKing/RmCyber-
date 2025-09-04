// Sample product data
const products = [
    {
        id: 1,
        name: "Seiko 5 Sports SSK001",
        price: 475,
        originalPrice: 550,
        category: "men",
        brand: "seiko",
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "GMT function with in-house caliber 4R34 movement. Water resistant to 100m.",
        features: ["Automatic Movement", "100m Water Resistance", "GMT Function", "Stainless Steel Case"]
    },
    {
        id: 2,
        name: "TAG Heuer Formula 1 Calibre 5",
        price: 2000,
        originalPrice: 2500,
        category: "sports",
        brand: "tagheuer",
        image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Mechanical watch with reasonable price tag. Stainless steel with three-piece link bracelet.",
        features: ["Swiss Made", "Calibre 5 Movement", "200m Water Resistance", "Sapphire Crystal"]
    },
    {
        id: 3,
        name: "Breitling Avenger Automatic 42",
        price: 4750,
        originalPrice: 5200,
        category: "premium",
        brand: "breitling",
        image: "Images/omega 3.jpg",
        description: "One of the most affordable models in the current Breitling range with excellent quality.",
        features: ["Swiss Made", "42mm Case", "300m Water Resistance", "Super-LumiNova Hands"]
    },
    {
        id: 4,
        name: "Omega De Ville Prestige Co-Axial",
        price: 5700,
        originalPrice: 6200,
        category: "premium",
        brand: "omega",
        image: "c:\Users\Andheri King\Desktop\HTML\demo\Images\omega 2.webp",
        description: "Beautiful, classic men's watch with co-axial master chronometer 8800 caliber.",
        features: ["Master Chronometer", "Co-Axial Escapement", "55-Hour Power Reserve", "Sapphire Crystal"]
    },
    {
        id: 5,
        name: "Rolex Oyster Perpetual",
        price: 6700,
        originalPrice: 7200,
        category: "premium",
        brand: "rolex",
        image: "C:\Users\Andheri King\Desktop\HTML\demo\Images\omega 1.png",
        description: "Classic Rolex look with diameters of 36 or 41 mm. The entry point into the Rolex world.",
        features: ["Superlative Chronometer", "Oystersteel Case", "100m Water Resistance", "Perpetual Movement"]
    },
    {
        id: 6,
        name: "Smart Watch for Men & Women",
        price: 199,
        originalPrice: 249,
        category: "smart",
        brand: "other",
        image: "C:\Users\Andheri King\Desktop\HTML\demo\Images\b6_Police_D.jpg",
        description: "Bluetooth call and smart notifications. Comprehensive health tracking with multi-sport mode.",
        features: ["Bluetooth Calling", "Health Monitoring", "Multiple Sports Modes", "7-Day Battery Life"]
    },
    {
        id: 7,
        name: "Vostok Amphibia",
        price: 98,
        originalPrice: 120,
        category: "men",
        brand: "other",
        image: "c:\Users\Andheri King\Desktop\HTML\demo\Images\b4_Sonata.jpg",
        description: "Classic Russian dive watch known for its durability and unique design.",
        features: ["Automatic Movement", "200m Water Resistance", "Luminous Hands", "Stainless Steel Case"]
    },
    {
        id: 8,
        name: "Samsung Galaxy Watch",
        price: 250,
        originalPrice: 299,
        category: "smart",
        brand: "other",
        image: "c:\Users\Andheri King\Desktop\HTML\demo\Images\b5_Titan_D.jpg",
        description: "Start your wellness journey with comprehensive health monitoring and fitness tracking.",
        features: ["Health Monitoring", "GPS Tracking", "Bluetooth", "Long Battery Life"]
    },
    {
        id: 9,
        name: "Cartier Tank Solo",
        price: 3200,
        originalPrice: 3500,
        category: "premium",
        brand: "cartier",
        image: "c:\Users\Andheri King\Desktop\HTML\demo\Images\b3_fastract.jpg",
        description: "Iconic rectangular watch with quartz movement and elegant design.",
        features: ["Quartz Movement", "Sapphire Crystal", "Steel Case", "Leather Strap"]
    },
    {
        id: 10,
        name: "Audemars Piguet Royal Oak",
        price: 18500,
        originalPrice: 19500,
        category: "premium",
        brand: "audemars",
        image: "c:\Users\Andheri King\Desktop\HTML\demo\Images\b2_Xylys_D.jpg",
        description: "Luxury sports watch with iconic octagonal bezel and integrated bracelet.",
        features: ["Automatic Movement", "50m Water Resistance", "Stainless Steel", "Sapphire Crystal"]
    },
    {
        id: 11,
        name: "Women's Diamond Watch",
        price: 1200,
        originalPrice: 1500,
        category: "women",
        brand: "other",
        image: "c:\Users\Andheri King\Desktop\HTML\demo\Images\b1_Edge.jpg",
        description: "Elegant women's watch with diamond accents on the bezel.",
        features: ["Quartz Movement", "Diamond Bezel", "Stainless Steel", "Mineral Glass"]
    }
];

let cart = [];
let currentUser = null;

// DOM elements
const productContainer = document.getElementById('productContainer');
const featuredProductContainer = document.getElementById('featuredProductContainer');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchResultsContainer = document.getElementById('searchResultsContainer');
const cartCountElement = document.getElementById('cartCount');
const cartItemsContainer = document.getElementById('cartItems');
const emptyCartMessage = document.getElementById('emptyCartMessage');
const cartTotalElement = document.getElementById('cartTotal');
const cartTaxElement = document.getElementById('cartTax');
const cartGrandTotalElement = document.getElementById('cartGrandTotal');
const categoryProductContainer = document.getElementById('categoryProductContainer');
const categoryTitleElement = document.getElementById('categoryTitle');
const brandProductContainer = document.getElementById('brandProductContainer');
const brandTitleElement = document.getElementById('brandTitle');
const productDetailContainer = document.getElementById('productDetailContainer');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const showRegisterLink = document.getElementById('showRegister');
const showLoginLink = document.getElementById('showLogin');
const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
const registerModal = new bootstrap.Modal(document.getElementById('registerModal'));

// Function to show a specific section and hide others
function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

// Function to render products
function renderProducts(productsToRender, container) {
    container.innerHTML = '';
    if (productsToRender.length === 0) {
        container.innerHTML = '<p class="text-center">products Not found.</p>';
        return;
    }
    productsToRender.forEach(product => {
        const discountPercentage = ((product.originalPrice - product.price) / product.originalPrice) * 100;
        const col = document.createElement('div');
        col.className = 'col-md-4';
        col.innerHTML = `
            <div class="card product-card" data-product-id="${product.id}">
                <div class="position-relative">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    ${discountPercentage > 0 ? `<span class="discount-badge">${Math.round(discountPercentage)}% Off</span>` : ''}
                </div>
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text text-muted">${product.brand.toUpperCase()}</p>
                    <p class="card-text fw-bold">₹${product.price.toFixed(2)} <span class="text-decoration-line-through text-muted ms-2">₹${product.originalPrice.toFixed(2)}</span></p>
                    <a href="#" class="btn btn-primary add-to-cart-btn" data-product-id="${product.id}">Add To Cart</a>
                </div>
            </div>
        `;
        container.appendChild(col);
    });
}

// Function to display featured products on homepage
function renderFeaturedProducts() {
    const featured = products.filter(p => p.category === 'premium' || p.category === 'sports').slice(0, 3);
    renderProducts(featured, featuredProductContainer);
}

// Function to render the shopping cart
function renderCart() {
    cartItemsContainer.innerHTML = '';
    if (cart.length === 0) {
        emptyCartMessage.style.display = 'block';
        cartTotalElement.textContent = '₹0.00';
        cartTaxElement.textContent = '₹0.00';
        cartGrandTotalElement.textContent = '₹0.00';
        return;
    }
    emptyCartMessage.style.display = 'none';

    let subtotal = 0;
    cart.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'd-flex justify-content-between align-items-center cart-item';
        cartItemDiv.innerHTML = `
            <div class="d-flex align-items-center">
                <img src="${item.image}" alt="${item.name}" class="img-fluid me-3" style="width: 80px;">
                <div>
                    <h6 class="mb-0">${item.name}</h6>
                    <p class="text-muted mb-0">₹${item.price.toFixed(2)} x ${item.quantity}</p>
                </div>
            </div>
            <div>
                <span class="fw-bold">₹${(item.price * item.quantity).toFixed(2)}</span>
                <button class="btn btn-sm btn-danger ms-2 remove-from-cart-btn" data-product-id="${item.id}"><i class="fas fa-trash"></i></button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItemDiv);
        subtotal += item.price * item.quantity;
    });

    const tax = subtotal * 0.18; // 18% GST
    const grandTotal = subtotal + tax;
    cartCountElement.textContent = cart.length;
    cartTotalElement.textContent = `₹${subtotal.toFixed(2)}`;
    cartTaxElement.textContent = `₹${tax.toFixed(2)}`;
    cartGrandTotalElement.textContent = `₹${grandTotal.toFixed(2)}`;
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    renderFeaturedProducts();
    // Initially hide all sections except home
    showSection('home');
});

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const searchResults = products.filter(p => p.name.toLowerCase().includes(searchTerm) || p.brand.toLowerCase().includes(searchTerm));
    showSection('searchResults');
    renderProducts(searchResults, searchResultsContainer);
});

productContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart-btn')) {
        const productId = e.target.getAttribute('data-product-id');
        addToCart(parseInt(productId));
    }
    if (e.target.classList.contains('view-details-btn')) {
        const productId = e.target.getAttribute('data-product-id');
        showProductDetail(parseInt(productId));
    }
});

cartItemsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-from-cart-btn')) {
        const productId = e.target.getAttribute('data-product-id');
        removeFromCart(parseInt(productId));
    }
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Handle login logic here
    alert('Login functionality not implemented. Please register first.');
    loginModal.hide();
});

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Handle registration logic here
    alert('Registration successful! You can now log in.');
    registerModal.hide();
});

showRegisterLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.hide();
    registerModal.show();
});

showLoginLink.addEventListener('click', (e) => {
    e.preventDefault();
    registerModal.hide();
    loginModal.show();
});

// Shopping cart functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ ...product,
                quantity: 1
            });
        }
        renderCart();
        alert(`${product.name} added to cart!`);
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    renderCart();
}

function showCategory(category) {
    showSection('category');
    categoryTitleElement.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    const filteredProducts = products.filter(p => p.category === category);
    renderProducts(filteredProducts, categoryProductContainer);
}

function showBrand(brand) {
    showSection('brand');
    brandTitleElement.textContent = brand.charAt(0).toUpperCase() + brand.slice(1);
    const filteredProducts = products.filter(p => p.brand === brand);
    renderProducts(filteredProducts, brandProductContainer);
}

function showProductDetail(productId) {
    showSection('product-detail');
    const product = products.find(p => p.id === productId);
    if (!product) {
        productDetailContainer.innerHTML = '<p class="text-center">Product not found.</p>';
        return;
    }
    productDetailContainer.innerHTML = `
        <div class="col-md-6">
            <img src="${product.image}" class="img-fluid product-detail-image" alt="${product.name}">
        </div>
        <div class="col-md-6">
            <h2>${product.name}</h2>
            <p class="lead text-muted">${product.brand.toUpperCase()}</p>
            <h3>₹${product.price.toFixed(2)}</h3>
            <p class="text-decoration-line-through text-muted">₹${product.originalPrice.toFixed(2)}</p>
            <p>${product.description}</p>
            <h5>Importance Things:</h5>
            <ul>
                ${product.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <button class="btn btn-primary add-to-cart-btn" data-product-id="${product.id}">Add to cart</button>
        </div>
    `;
    const addToCartBtn = productDetailContainer.querySelector('.add-to-cart-btn');
    addToCartBtn.addEventListener('click', () => addToCart(product.id));
}