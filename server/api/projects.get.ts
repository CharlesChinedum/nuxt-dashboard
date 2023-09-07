import data from "./projects.json";

export default defineEventHandler(async () => {
  return {
    statusCode: 200,
    data,
  };
});
