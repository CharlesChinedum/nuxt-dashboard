import data from "./revenue.json";

export default defineEventHandler(async () => {
  return {
    statusCode: 200,
    data,
  };
});
