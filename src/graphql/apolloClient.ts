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

const clientApiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";
const serverApiUrl = process.env.INTERNAL_API_URL ?? "http://localhost:4000";

console.log("NEXT_PUBLIC_API_URL", process.env.NEXT_PUBLIC_API_URL);
console.log("INTERNAL_API_URL", process.env.INTERNAL_API_URL);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  ssrMode: isServer(),
  link: ApolloLink.from([
    // responseLogger,
    new HttpLink({ uri: isServer() ? serverApiUrl : clientApiUrl }),
  ]),
  defaultOptions: {
    watchQuery: {},
    query: {},
  },
});

export default client;
