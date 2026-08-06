const product = {
    id: "P-9912",
    name: "Wireless Mouse",
    price: 15,
    inStock: true,

    specs: {
        color: "Black",
        connectivity: "Bluetooth 5.0",
        weight: "85g"
    },
  
    getDiscountPrice(discountPercentage) {
        let discountAmount = (this.price * discountPercentage) / 100;
        return this.price - discountAmount;
    }
};

console.log("Product Name:", product.name);                          
console.log("Color:", product.specs.color);                          
console.log("Discount Price (20% off):", product.getDiscountPrice(20)); 

