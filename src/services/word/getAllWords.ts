import WordModel from "models/word.model";
import api from "services";

export default async (): Promise<WordModel[]> => {
  const response = await api.get("/words");

  return response.data;
};
