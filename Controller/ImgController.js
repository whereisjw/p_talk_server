import * as ImgRepository from "../Repository/ImgRepository.js";

export async function ChangeImg(req, res) {
  let { id, img } = req.body;
  console.log(id, img);
  const result = await ImgRepository.ChangeImg(img, id);
  if (result === "ok") {
    console.log("변경성공");
    res.json(result);
  }
}
