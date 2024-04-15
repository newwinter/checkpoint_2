import { Resolver, Query, Arg, Mutation } from "type-graphql";
import { Country } from "../entities/country";
import { CreateCountryInput } from "../types/CreateCountryInput";

@Resolver(Country)
export class CountryResolver {
  @Query(() => [Country])
  getAllCountries(): Promise<Country[]> {
    return Country.findAll();
  }
}
