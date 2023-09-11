export const origin =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "https://admin-blog1.herokuapp.com";

console.log(origin);
console.log(process.env.NODE_ENV);
