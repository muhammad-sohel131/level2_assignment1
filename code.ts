function formatString(input: string, toUpper?: boolean): string {
  if (toUpper || toUpper === undefined) return input.toUpperCase();

  return input.toLowerCase();
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const filteredArray: { title: string; rating: number }[] = [];
  for (let obj of items) {
    if (obj.rating >= 4) {
      filteredArray.push(obj);
    }
  }

  return filteredArray;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  let result: T[] = [];
  for (let array of arrays) {
    result = [...result, ...array];
  }
  return result;
}

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo() {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel() {
    return `Model: ${this.model}`;
  }
}

function processValue(value: string | number): number {
  if (typeof value === "string") return value.length;

  return value * 2;
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  let expensiveProduct: Product = products[0];

  for (let product of products) {
    if (product.price > expensiveProduct.price) expensiveProduct = product;
  }

  return expensiveProduct;
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === 5 || day === 6) return "Weekend";
  return "Weekday";
}

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n >= 0) resolve(n * n);
      else reject("Error: Negative number not allowed");
    }, 1000);
  });
}
