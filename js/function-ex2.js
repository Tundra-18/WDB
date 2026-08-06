function calculateTax(subtotal, taxRate = 0.05) {
  return subtotal * taxRate;
}

const applyDiscount = function(subtotal, promoCode) {
  if (promoCode === "SAVE10") {
    return subtotal * 0.10; // 10% off
  }
  return 0; // No discount
};

// Arrow Function (Formats numbers to currency string)
const formatCurrency = amount => `$${amount.toFixed(2)}`;

// Main Function combining parameters and returns
function processOrder(itemPrice, quantity, promoCode) {
  let subtotal = itemPrice * quantity;
  let discount = applyDiscount(subtotal, promoCode);
  let discountedSubtotal = subtotal - discount;
  let tax = calculateTax(discountedSubtotal);
  let total = discountedSubtotal + tax;

  return {
    subtotal: formatCurrency(subtotal),
    discount: formatCurrency(discount),
    tax: formatCurrency(tax),
    finalTotal: formatCurrency(total)
  };
}

// --- Executing the Order ---
const receipt = processOrder(70, 4, "SAVE");

console.log("--- Order Receipt ---");
console.log("Subtotal:", receipt.subtotal);   // $100.00
console.log("Discount:", receipt.discount);   // $10.00
console.log("Tax (5%):", receipt.tax);         // $4.50
console.log("Total Due:", receipt.finalTotal); // $94.50