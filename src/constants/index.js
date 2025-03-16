import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
} from "../utils";

export const navLists = ["Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", "TV ve Ev", "Eğlence", "Aksesuarlar", "Destek"];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "A17 Pro.",
      "Ezber bozan bir çip.",
      "Çığır açan bir performans.",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Titanyum.", "Çok güçlü. Çok hafif. Çok Pro."],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "Bir iPhone’da şimdiye kadarki",
      "en yüksek optik zoom ile",
      "iPhone 15 Pro Max.",
      "Uzaklara yakınlaşın.",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["Yepyeni Eylem düğmesi.", "Sizin seçiminiz hangisi?"],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

export const models = [
  {
    id: 1,
    title: "iPhone 15 Pro Doğal Titanyum Renk Seçeneğiyle",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "iPhone 15 Pro Mavi Titanyum Renk Seçeneğiyle",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "iPhone 15 Pro Beyaz Titanyum Renk Seçeneğiyle",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "iPhone 15 Pro Siyah Titanyum Renk Seçeneğiyle",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

export const footerLinks = [
  "Gizlilik Politikası",
  "Kullanım Şartları",
  "Satış Politikası",
  "Hukuki",
  "Site Haritası",
];
