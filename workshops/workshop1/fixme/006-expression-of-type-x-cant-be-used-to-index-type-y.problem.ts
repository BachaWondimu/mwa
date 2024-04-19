const productPrices: Record<string, number> = {
  Apple: 1.2,
  Banana: 0.5,
  Orange: 0.8,
};

// solution 1 was typing productPrices as Record<string, number>
//2. {[key:string]:number}
//3. type paramType = keyof typeof productPrices;
// and put parameter type as paramType instead of string

const getPrice = (productName:string) => {
  return productPrices[productName];
};
