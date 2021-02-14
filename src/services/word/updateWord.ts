import WordModel from "models/word.model";
import api from "services";

export default async ({ id, name }: WordModel): Promise<WordModel> => {
  const response = await api.put("/words/" + id, { name: name });

  return response.data;
};
