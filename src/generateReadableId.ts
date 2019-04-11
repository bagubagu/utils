/* inspired by https://github.com/davewasmer/readable-id
 *
 * TODO:
 * - put the adjectives and nouns into a separate .txt files
 * - add verbs (verb-adjective-noun-number | katakerja-katabenda-katasifat-angka)
 * - classify into (positive/encouraging nouns) and (negative/discouraging nouns)
 */

export const adjectives = {
  // exported so that accessible by testing
  en: [
    "autumn",
    "hidden",
    "bitter",
    "misty",
    "silent",
    "empty",
    "dry",
    "dark",
    "summer",
    "icy",
    "delicate",
    "quiet",
    "white",
    "cool",
    "spring",
    "winter",
    "patient",
    "twilight",
    "dawn",
    "crimson",
    "wispy",
    "weathered",
    "blue",
    "billowing",
    "broken",
    "cold",
    "damp",
    "falling",
    "frosty",
    "green",
    "long",
    "late",
    "lingering",
    "bold",
    "little",
    "morning",
    "muddy",
    "old",
    "red",
    "rough",
    "still",
    "small",
    "sparkling",
    "throbbing",
    "shy",
    "wandering",
    "withered",
    "wild",
    "black",
    "young",
    "holy",
    "solitary",
    "fragrant",
    "aged",
    "snowy",
    "proud",
    "floral",
    "restless",
    "divine",
    "polished",
    "ancient",
    "purple",
    "lively",
    "nameless"
  ],
  id: [
    "pintar",
    "bodoh",
    "jelek",
    "cantik",
    "buruk",
    "pandai",
    "baik",
    "jahat",
    "dermawan",
    "muda",
    "bersinar",
    "pahit",
    "rusak",
    "malu",
    "merah",
    "hitam",
    "biru",
    "hijau",
    "putih",
    "dingin",
    "panas",
    "sabar",
    "kosong"
  ]
};

export const nouns = {
  en: [
    "waterfall",
    "river",
    "breeze",
    "moon",
    "rain",
    "wind",
    "sea",
    "morning",
    "snow",
    "lake",
    "sunset",
    "pine",
    "shadow",
    "leaf",
    "dawn",
    "glitter",
    "forest",
    "hill",
    "cloud",
    "meadow",
    "sun",
    "glade",
    "bird",
    "brook",
    "butterfly",
    "bush",
    "dew",
    "dust",
    "field",
    "fire",
    "flower",
    "firefly",
    "feather",
    "grass",
    "haze",
    "mountain",
    "night",
    "pond",
    "darkness",
    "snowflake",
    "silence",
    "sound",
    "sky",
    "shape",
    "surf",
    "thunder",
    "violet",
    "water",
    "wildflower",
    "wave",
    "water",
    "resonance",
    "sun",
    "wood",
    "dream",
    "cherry",
    "tree",
    "fog",
    "frost",
    "voice",
    "paper",
    "frog",
    "smoke",
    "star"
  ],
  id: [
    "gelas",
    "cangkir",
    "kopi",
    "tas",
    "celana",
    "kursi",
    "piano",
    "bunga",
    "lukisan",
    "botol",
    "papan",
    "meja",
    "pensil",
    "pintu",
    "buku",
    "ipad",
    "sofa",
    "lantai",
    "kotak",
    "monyet",
    "kuda",
    "kambing",
    "ayam",
    "naga",
    "macan",
    "burung",
    "rumah",
    "pohon"
  ]
};

export const generateReadableId = (options = { language: "en" }): string => {
  const high = 100;
  const low = 1;

  const randomNumber = Math.floor(Math.random() * (high - low + low) + low);
  const adjectiveIndex = Math.round(Math.random() * adjectives[options.language].length);
  const nounIndex = Math.round(Math.random() * nouns[options.language].length);

  if (options.language === "id") {
    return (
      nouns[options.language][nounIndex] +
      "-" +
      adjectives[options.language][adjectiveIndex] +
      "-" +
      randomNumber
    );
  }

  return (
    adjectives[options.language][adjectiveIndex] +
    "-" +
    nouns[options.language][nounIndex] +
    "-" +
    randomNumber
  );
};
