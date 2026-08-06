function multiplyDecl(a, b) {
  return a * b;
}

console.log("Declaration:", multiplyDecl(3, 4)); 


const multiplyExpr = function(a, b) {
  return a * b;
};

console.log("Expression:", multiplyExpr(2, 4)); 



const multiplyArrow = (a, b) => a * b;

console.log("Arrow:", multiplyArrow(3, 2)); 

