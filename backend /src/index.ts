import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "@apollo/server";
import * as dotenv from "dotenv";
import { dataSource } from "../db";
import { startStandaloneServer } from "@apollo/server/standalone";

const port: number = 5001;

const start = async () => {
  dotenv.config();
  await dataSource.initialize();

  const schema = await buildSchema({
    resolvers: [CountryResolver],
  });

  const server = new ApolloServer({
    schema,
  });

  try {
    const { url } = await startStandaloneServer(server, {
      listen: { port: 4000 },
    });
    console.log(`Server running at ${url}`);
  } catch (err) {
    console.error("Error starting the server");
  }
};

void start();
