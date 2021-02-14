import api from "services";

export default async (id: number): Promise<void> => {
  await api.delete("/words/" + id);
};
