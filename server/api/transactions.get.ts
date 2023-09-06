import data from "./transactions.json";

export default defineEventHandler(async () => {
  return {
    statusCode: 200,
    data,
  };
});
