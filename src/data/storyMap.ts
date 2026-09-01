import { birthdayConfig, formatDisplayDate } from "@/data/config";

export type StoryMapNode = {
  id: string;
  title: string;
  /** Leave empty until Abdo fills a real DD/MM/YYYY. Do not invent dates. */
  date: string;
  memory: string;
};

export const storyMapNodes: StoryMapNode[] = [
  {
    id: "start",
    title: "البداية",
    date: "",
    memory: "كل حكاية كتسالي فشي بلاصة. ديالنا بدات بهدوء... ومن بعد ولات أهم.",
  },
  {
    id: "first-memory",
    title: "أول ذكرى",
    date: "",
    memory: "كاينة واحد الذكرى صغيرة... ما محتاجةش تاريخ باش تبقى فبالي.",
  },
  {
    id: "first-kiss",
    title: "أول kiss ❤️",
    date: "",
    memory: `كنت باغي غير نعانقك.

وما عرفت حتى كيفاش تحولات لهديك اللحظة.

وأنتِ كتغوتي بحال الحمقة 😂❤️

هادشي هو أول kiss ديالنا.`,
  },
  {
    id: "unforgettable",
    title: "شي لحظات ما كتتنسا",
    date: "",
    memory: "كاينين لحظات ما خاصهمش يتكتبو كاملين. غير يبقاو عندك.",
  },
  {
    id: "together",
    title: "الصورة ديالنا بجوج 📸",
    date: "",
    memory: "عندنا غير صورة وحدة فيها بجوج.\nيمكن تبان بسيطة... ولكن عندي أنا ماشي بسيطة.",
  },
  {
    id: "birthday",
    title: `${formatDisplayDate(birthdayConfig.birthday, " / ")} 🎂`,
    date: formatDisplayDate(birthdayConfig.birthday, " / "),
    memory: "نهارك نتي. ماشي غير تاريخ. هاد النهار درت ليك هاد الحكاية. ❤️",
  },
];
