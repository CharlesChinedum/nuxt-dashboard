import data from "./tasks.json";

export default defineEventHandler(async () => {
  return {
    statusCode: 200,
    data,
  };
});
