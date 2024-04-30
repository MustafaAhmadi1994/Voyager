import Golf6 from "../src/assets/cars-big/golf6.jpg";
import AudiA1 from "../src/assets/cars-big/audia1.jpg";
import Toyota from "../src/assets/cars-big/toyotacamry.jpg";
import Bmw320 from "../src/assets/cars-big/bmw320.jpg";
import Benz from "../src/assets/cars-big/benz.jpg";
import Passat from "../src/assets/cars-big/passatcc.jpg";

export const CAR_DATA = [
  {
    id: crypto.randomUUID(),
    name: "VW Golf 6",
    price: "37",
    img: Golf6,
    model: "Golf 6",
    mark: "Volkswagen",
    year: "2008",
    doors: "4/5",
    air: "Yes",
    transmission: "Manual",
    fuel: "Diesel",
  },

  {
    id: crypto.randomUUID(),
    name: "Audi A1 S-Line",
    price: "45",
    img: AudiA1,
    model: "A1 S-Line",
    mark: "Audi",
    year: "2012",
    doors: "4/5",
    air: "Yes",
    transmission: "Manual",
    fuel: "Gasoline",
  },

  {
    id: crypto.randomUUID(),
    name: "Toyota Camry",
    price: "30",
    img: Toyota,
    model: "Camry",
    mark: "Toyota",
    year: "2006",
    doors: "4/5",
    air: "Yes",
    transmission: "Automatic",
    fuel: "Hybrid",
  },

  {
    id: crypto.randomUUID(),
    name: "BMW 320 ModernLine",
    price: "35",
    img: Bmw320,
    model: "320",
    mark: "BMW",
    year: "2012",
    doors: "4/5",
    air: "Yes",
    transmission: "Manual",
    fuel: "Diesel",
  },

  {
    id: crypto.randomUUID(),
    name: "Mercedes-Benz GLK",
    price: "50",
    img: Benz,
    model: "Benz GLK",
    mark: "Mercedes",
    year: "2006",
    doors: "4/5",
    air: "Yes",
    transmission: "Manual",
    fuel: "Diesel",
  },

  {
    id: crypto.randomUUID(),
    name: "VW Passat CC",
    price: "25",
    img: Passat,
    model: "Passat CC",
    mark: "Volkswagen",
    year: "2008",
    doors: "4/5",
    air: "Yes",
    transmission: "Automatic",
    fuel: "Gasoline",
  },
];
