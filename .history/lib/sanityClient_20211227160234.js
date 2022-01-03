const sanityClient = require("@sanity/client");

const tkn =
  "skMXye8pdO7eb6iVJin58jAaQWBBtQJaSIKw8mXUnJztatn9qSXbFMU5oMcw0EPfPQsi9m4al6rtf9VH66jEBRNcjbgLgrZhyq81L1gdaRd1VC2RvVyetVANwWjJTKkoQmkUaPoILzOkRhozpdwGbiNOanaKKtaaUFeuYF8NprFzYTIXWjvZ";

writeClient = sanityClient({
  projectId: "0rqwu0ui",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: tkn,
  useCdn: false,
});
