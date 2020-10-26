import express from "express";
import graphqlHTTP from "express-graphql";
import resolvers from "./resolvers";
import schema from "./schema";

const app = express();

app.get("/", (req, res) => {
  res.send("GraphQL is amazing!");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.listen(8080, () =>
  console.log("Running server on port localhost:8080/graphql")
);
