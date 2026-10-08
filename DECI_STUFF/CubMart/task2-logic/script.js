const products = [
    { name: "JBL Tune 510BT", price: 1299, stock: 42, category: "Audios" },
    { name: "Anker Soundcore Life Q20", price: 2199, stock: 15, category: "Audios" },
    { name: "Samsung Galaxy Buds FE", price: 2699, stock: 25, category: "Audios" },
    { name: "Logitech G435 Gaming Headset", price: 1999, stock: 30, category: "Audios" },
    { name: "JBL Flip 6", price: 3599, stock: 12, category: "Audios" },
    { name: "Redmi Buds 4 Lite", price: 699, stock: 60, category: "Audios" },
    { name: "HP Pavilion Desktop TP01", price: 18999, stock: 8, category: "Pcs" },
    { name: "Dell Inspiron Desktop 3020", price: 23500, stock: 6, category: "Pcs" },
    { name: "Lenovo IdeaCentre 3", price: 16999, stock: 10, category: "Pcs" },
    { name: "Apple Mac Mini M2", price: 39999, stock: 4, category: "Pcs" },
    { name: "ASUS ROG Strix G35", price: 65999, stock: 3, category: "Pcs" },
    { name: "Acer Aspire TC", price: 14500, stock: 12, category: "Pcs" },
    { name: "Lenovo IdeaPad Slim 3", price: 17999, stock: 15, category: "Laptops" },
    { name: "HP Pavilion 15", price: 22999, stock: 10, category: "Laptops" },
    { name: "Dell Inspiron 15 3000", price: 20999, stock: 12, category: "Laptops" },
    { name: "ASUS Vivobook 15", price: 20999, stock: 9, category: "Laptops" },
    { name: "Apple MacBook Air M2", price: 54999, stock: 5, category: "Laptops" },
    { name: "Acer Aspire 5", price: 19499, stock: 11, category: "Laptops" },
    { name: "Samsung 970 EVO Plus 1TB NVMe SSD", price: 2799, stock: 25, category: "Storage" },
    { name: "Western Digital Blue 1TB HDD", price: 1599, stock: 35, category: "Storage" },
    { name: "Kingston A400 480GB SSD", price: 1199, stock: 50, category: "Storage" },
    { name: "SanDisk Extreme Portable SSD 1TB", price: 3299, stock: 14, category: "Storage" },
    { name: "Seagate Backup Plus 2TB External HDD", price: 2399, stock: 20, category: "Storage" },
    { name: "Crucial MX500 500GB SSD", price: 1799, stock: 28, category: "Storage" },
    { name: "Logitech MK270 Wireless Combo", price: 999, stock: 45, category: "Accessories" },
    { name: "Anker PowerCore 20000mAh Power Bank", price: 1599, stock: 30, category: "Accessories" },
    { name: "Razer DeathAdder Essential Mouse", price: 949, stock: 38, category: "Accessories" },
    { name: "Logitech C270 HD Webcam", price: 1099, stock: 22, category: "Accessories" },
    { name: "Anker USB-C Hub 7-in-1", price: 1899, stock: 19, category: "Accessories" },
    { name: "HyperX Alloy Core RGB Keyboard", price: 1699, stock: 24, category: "Accessories" },
    { name: "Sony WH-1000XM5 Wireless Headphones", price: 18500, stock: 8, category: "Spotlight" },
    { name: "Lenovo Legion Pro 7i Gen 9", price: 92000, stock: 5, category: "Spotlight" },
    { name: "Apple MacBook Pro 14\" M3 Pro", price: 94500, stock: 5, category: "Spotlight" },
    { name: "Samsung Odyssey G7 32\" 240Hz Gaming Monitor", price: 28900, stock: 6, category: "Spotlight" },
    { name: "Samsung 990 PRO 2TB NVMe SSD", price: 8900, stock: 15, category: "Spotlight" },
    { name: "Logitech MX Master 3S Wireless Mouse", price: 4800, stock: 18, category: "Spotlight" }
];

const promoCodes = [
    { code: "SAVE50", discount: 50 },
    { code: "SAVE100", discount: 100 },
    { code: "SAVE200", discount: 200 }
];

const categories = [...new Set(products.map(product => product.category))];

function calculateSubtotal(cart) {
    return cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
}

function getDiscountRate(subtotal) {
    if (subtotal > 1000) return 0.15;
    if (subtotal > 600) return 0.10;
    if (subtotal > 300) return 0.05;
    return 0;
}

function applyPromoCode(amount, code, promoCodes) {
    const promo = promoCodes.find(
        promo => promo.code.toLowerCase() === code.toLowerCase()
    );

    return promo ? amount - promo.discount : amount;
}

function calculateTax(amount) {
    return amount * 0.14;
}

function generateReceipt(cart, promoCode, promoCodes) {
    const subtotal = calculateSubtotal(cart);

    const discountRate = getDiscountRate(subtotal);
    const discountAmount = subtotal * discountRate;

    const afterDiscount = subtotal - discountAmount;

    const afterPromo = applyPromoCode(afterDiscount, promoCode, promoCodes);

    const promoDiscount = afterDiscount - afterPromo;

    const tax = calculateTax(afterPromo);

    const grandTotal = afterPromo + tax;

    return {
        subtotal,
        discountAmount,
        promoDiscount,
        tax,
        grandTotal
    };
}

do {
    const cart = [];

    while (true) {
        let categoryMenu = "===== Categories =====\n\n";

        categories.forEach((category, index) => {
            categoryMenu += `${index + 1}. ${category}\n`;
        });

        categoryMenu += `${categories.length + 1}. Done`;

        const categoryChoice = Number(prompt(categoryMenu));

        if (categoryChoice === categories.length + 1) {
            break;
        }

        if (categoryChoice < 1 || categoryChoice > categories.length || isNaN(categoryChoice)) {
            alert("Invalid category.");
            continue;
        }

        const selectedCategory = categories[categoryChoice - 1];

        const filteredProducts = products.filter(
            product => product.category === selectedCategory
        );

        let productMenu = `===== ${selectedCategory} =====\n\n`;

        filteredProducts.forEach((product, index) => {
            productMenu += `${index + 1}. ${product.name} - ${product.price} EGP (Stock: ${product.stock})\n`;
        });

        const productChoice = Number(prompt(productMenu));

        if (
            productChoice < 1 ||
            productChoice > filteredProducts.length ||
            isNaN(productChoice)
        ) {
            alert("Invalid product.");
            continue;
        }

        const selectedProduct = filteredProducts[productChoice - 1];

        const product = products.find(
            item => item.name === selectedProduct.name
        );

        const quantity = Number(prompt("Enter quantity:"));

        if (
            isNaN(quantity) ||
            quantity <= 0 ||
            quantity > product.stock
        ) {
            alert("Invalid quantity or insufficient stock.");
            continue;
        }

        cart.push({
            name: product.name,
            price: product.price,
            quantity
        });

        product.stock -= quantity;

        alert("Product added to cart.");
    }

    const promoCode = prompt("Enter promo code (or leave blank):") || "";

    const receipt = generateReceipt(cart, promoCode, promoCodes);

    let summary = "===== RECEIPT =====\n\n";

    cart.forEach(item => {
        summary += `${item.name} x${item.quantity} = ${(item.price * item.quantity).toFixed(2)} EGP\n`;
    });

    summary += `
-------------------------
Subtotal: ${receipt.subtotal.toFixed(2)} EGP
Discount: ${receipt.discountAmount.toFixed(2)} EGP
Promo Discount: ${receipt.promoDiscount.toFixed(2)} EGP
Tax (14%): ${receipt.tax.toFixed(2)} EGP
Grand Total: ${receipt.grandTotal.toFixed(2)} EGP
`;

    alert(summary);

} while (
    confirm("Would you like to place another order?")
);