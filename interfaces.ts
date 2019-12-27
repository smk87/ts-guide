interface Reportable {
  //   model: string;
  //   year: Date;
  //   broken: boolean;
  summary(): string;
}

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

const printVehicle = (item: Reportable): void => {
  console.log(item.summary());
};

printVehicle(oldCivic);
