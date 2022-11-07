import axios from 'axios';
import fs from 'fs-extra';
import { getImageDimensions } from './getImageSize.js';

const MIN_ID_KCD = 2500;
const MAX_ID_KCD = 2588;

/* NOTE: Recorre en bucle los datos numericos de las variables y genera una llamada por cada numero */
for (let id = MIN_ID_KCD; id < MAX_ID_KCD; id++) {
  const URL = `https://xkcd.com/${id}/info.0.json`;

  const { data } = await axios.get(URL);
  const { num, news, transcript, img, ...restOfComic } = data;
  const { height, width } = await getImageDimensions({ url: img });
  const comicToStore = { id, img, height, width, ...restOfComic };

  fs.writeJSON(`./comics/${id}.json`, comicToStore, { spaces: 2 });
}
