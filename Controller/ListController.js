import * as ListRepository from "../Repository/ListRepository.js";
export async function getList(req, res) {
  const row = await ListRepository.getList();
  res.json(row);
}
