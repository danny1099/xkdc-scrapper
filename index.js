import axios from 'axios';
import fs from 'fs-extra';

const MIN_ID_KCD = 2500;
const MAX_ID_KCD = 2588;

/* NOTE: Recorre en bucle los datos numericos de las variables y genera una llamada por cada numero */
for (let i = MIN_ID_KCD; i < MAX_ID_KCD; i++) {
  const URL = `https://xkcd.com/${i}/info.0.json`;

  const { data } = await axios.get(URL);

  fs.writeJSON(`./comics/${i}.json`, data, { spaces: 2 });
}
