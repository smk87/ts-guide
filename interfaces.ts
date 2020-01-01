interface Reportable {
  //   model: string;
  //   year: Date;
  //   broken: boolean;
  summary(): string;
}

// A vehicle object
const oldCivic = {
  model: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `
    Model: ${this.model}
    Year: ${this.year}
    Broken?: ${this.broken}
    `;
  }
};

// A drink object
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar.`;
  }
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
