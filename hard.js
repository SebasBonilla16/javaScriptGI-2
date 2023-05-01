// First we need to convert inches to meters and grams to kilograms
 const tomHeight = (9 * 0.0254);
 const tomMass = (8 / 1000);

const jerryHeight = (10 * 0.0254);
const jerryMass = (45 / 1000);

// Create BMI formulas for each

let tomBMI = (tomMass / (tomHeight**2));

let jerryBMI = ( jerryMass / (jerryHeight**2));

//Compare BMIs

let isTomBMIgreater = (tomBMI > jerryBMI);

console.log(`Is Tom's BMI higher than Jerry's? ${isTomBMIgreater}`);