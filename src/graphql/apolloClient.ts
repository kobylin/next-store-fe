import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { isServer } from "@/utils/utils";

const marker = Math.random();
console.log("initialize apollo client", marker);

const responseLogger = new ApolloLink((operation, forward) => {
  console.log("responseLogger:start", operation, forward);
  return forward(operation).map((result) => {
    // console.log(
    //   "responseLogger:end",
    //   operation.getContext().response.headers,
    //   result
    // );
    return result;
  });
});

const client = new ApolloClient({
  // uri: "http://localhost:4000",
  cache: new InMemoryCache(),
  ssrMode: isServer(),
  link: ApolloLink.from([
    // responseLogger,
    new HttpLink({ uri: "http://localhost:4000" }),
  ]),
  defaultOptions: {
    watchQuery: {},
    query: {},
  },
});

export default client;
