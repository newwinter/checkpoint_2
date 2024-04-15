import { DataSource } from "typeorm";
import { Country } from "./src/entities/country";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "checkpoint",
  entities: [Country],
  synchronize: true,
});
