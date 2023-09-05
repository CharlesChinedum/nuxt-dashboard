import data from "./allcoins.json";

export default defineEventHandler(async () => {
  return {
    statusCode: 200,
    data,
  };
});
