import data from "./cryto.json";

export default defineEventHandler(async () => {
  return {
    statusCode: 200,
    data,
  };
});
