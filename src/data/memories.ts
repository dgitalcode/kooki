export type Memory = {
  id: string;
  date: string;
  title: string;
  alt: string;
  text: string;
  image?: string;
  caption?: string;
  hidden?: boolean;
  video?: string;
};

/**
 * Personal photos live in /public/memories.
 * Timeline `date` stays "" until Abdo fills a real DD/MM/YYYY.
 * Search DATE_PLACEHOLDER if you need the token name.
 */

export const timelineMemories: Memory[] = [
  {
    id: "story-start",
    date: "",
    title: "بداية الحكاية",
    image: "/memories/01.jpg",
    alt: "صورة من بداية الحكاية مع Kawtar",
    text: "كل قصة عندها نهاية إلا القصة ديالنا  ما كنظنش تسالي (ايلا درتي عقلك فبلاصتو 🐥)",
  },
  {
    id: "story-first",
    date: "",
    title: "أول لحظة مميزة",
    image: "/memories/02.jpg",
    alt: "صورة ديال لحظة مميزة مع Kawtar",
    text: "أول لحظة مميزة راه بااينة و معروفة هي فاش شفت بنتي أول مرة 🥲",
  },
  {
    id: "story-kiss",
    date: "",
    title: "أول kiss",
    image: "/memories/05.jpg",
    alt: "صورة ديال Kawtar",
    text: "أول بوسة ف حنيكاتك حسيت بها حلوة كثر من العسل 🥵",
  },
  {
    id: "story-together",
    date: "",
    title: "الصورة الوحيدة اللي فيها بجوج",
    alt: "",
    text: "كاينة واحد التصويرة ديال العبار  بلاتي و تشوفيها 😐",
  },
  {
    id: "story-today",
    date: "02/09/2026",
    title: "اليوم",
    alt: "",
    text: "هاد نهار ديالك  الزين ديالي و حالف ما نعصب بنتي و لا نقلقها 🙂",
  },
];

export const galleryMemories: Memory[] = [
  {
    id: "gallery-01",
    date: "",
    title: "حبيبتي 💖",
    image: "/memories/01.jpg",
    alt: "صورة ديال Kawtar",
    text: "واحد من الصور اللي بغيت تبقى عندك.",
  },
  {
    id: "gallery-02",
    date: "",
    title: "كبيدتي  💖",
    image: "/memories/02.jpg",
    alt: "صورة ديال Kawtar",
    text: "هاد الصورة كتخلي نيّت نبتسم.",
  },
  {
    id: "gallery-03",
    date: "",
    title: "بنتي 💖",
    image: "/memories/03.jpg",
    alt: "صورة ديال Kawtar",
    text: "شي صور ما محتاجين حتى تعليق طويل.",
  },
  {
    id: "gallery-04",
    date: "",
    title: "فنيكيشتي💖",
    image: "/memories/04.jpg",
    alt: "صورة ديال Kawtar",
    text: "بقيت كنرجع لهادي أكثر مما كنت كنظن.",
  },
  {
    id: "gallery-05",
    date: "",
    title: "الفليليسة ديالي 💖",
    image: "/memories/05.jpg",
    alt: "صورة ديال Kawtar",
    text: "حتى التفاصيل الصغيرة عندي كتسوى.",
  },
  {
    id: "gallery-06",
    date: "",
    title: "الزين ديالي 💖",
    image: "/memories/06.jpg",
    alt: "صورة ديال Kawtar",
    text: "هادشي ما خاصوش يتخسر فالتلفون ويتنسى.",
  },
  {
    id: "gallery-07",
    date: "",
    title: "الاميرة ديالي 💖",
    image: "/memories/07.jpg",
    alt: "صورة ديال Kawtar",
    text: "واحدة من الحوايج اللي بغيت تبقى عندك.",
  },
];

export const portraitMemory: Memory = {
  id: "portrait",
  date: "",
  title: "Kooki",
  image: "/memories/portrait.jpg",
  alt: "أحسن صورة ديال Kawtar",
  text: "fnikichty ❤️",
};

export const togetherMemory: Memory = {
  id: "together",
  date: "",
  title: "أنا وانتي",
  image: "/memories/together.jpg",
  alt: "الصورة الوحيدة اللي فيها Abdo و Kawtar",
  text: "Abdo × Kawtar ❤️",
};

export const videoMemory: Memory = {
  id: "video",
  date: "",
  title: "الفيديو",
  image: "/memories/portrait.jpg",
  video: "/memories/hidden.mp4",
  alt: "فيديو ديال Kawtar",
  text: "ما عارفش علاش، ولكن نقدر نبقى نشوفك فيه ونبتاسم.",
};

export const hiddenMemory: Memory = {
  id: "memory-hidden",
  date: "",
  title: "زيادة صغيرة",
  image: "/memories/gift.jpg",
  alt: "صورة مخفية لـ Kawtar",
  text: "ما كانش خاصك توصلي حتى لهنا... ولكن حيت وصلتي،بغيت غير نفكرك بلي باقي محتافض بالكادو لي ما بغتيش تاخديه من عندي 💔😭",
  hidden: true,
};

export const memories: Memory[] = galleryMemories;
export const visibleMemories = galleryMemories;

export function getMemoryCaption(memory: Memory): string {
  return memory.caption ?? memory.text;
}
