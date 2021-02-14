import WordModel from "models/word.model";
import api from "services";

export default async (name: string): Promise<WordModel> => {
  const response = await api.post("/words", { name });

  return response.data;
};
