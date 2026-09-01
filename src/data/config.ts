export const birthdayConfig = {
  name: "Kawtar",
  nickname: "Kooki",
  author: "Abdo",
  birthday: "2026-09-02",
  timeCapsuleUnlock: "2027-09-02",
  title: "حكايتنا ❤️",
  shortTitle: "حكايتنا",
  endearments: {
    fnikichty: "fnikichty",
    benty: "benty",
    hbibty: "hbibty",
  },
  audio: {
    voice: "/audio/voice-message.mp3",
    background: "/audio/background.mp3",
  },
} as const;

export type BirthdayConfig = typeof birthdayConfig;

/**
 * PERSONALIZE LATER (Abdo):
 * بدّل `lines` ملي تكون جاهز.
 * ما تخترعش ذكرى جديدة هنا إلا كانت حقيقية.
 */
export const oneThingIneverToldYou = {
  title: "كاينة حاجة عمري قلتها ليك...",
  tease: "بغيتي تعرفي؟",
  button: "قولي ❤️",
  lines: [
    "كاينين بزاف ديال اللحظات معاك اللي يمكن تبان صغيرة، ولكن عندي أنا كتسوى بزاف.",
    "ويمكن ما كنقولهاش ليك كفاية...",
    "ولكن وجودك فحياتي كيهمني أكثر مما كنبين.",
    "— Abdo ❤️",
  ],
} as const;

export const journeySteps = [
  { id: "letter", n: 1 },
  { id: "voice", n: 2 },
  { id: "story", n: 3 },
  { id: "map", n: 4 },
  { id: "kiss", n: 5 },
  { id: "memories", n: 6 },
  { id: "portrait", n: 7 },
  { id: "video", n: 8 },
  { id: "reasons", n: 9 },
  { id: "open-when", n: 10 },
  { id: "one-thing", n: 11 },
  { id: "secrets", n: 12 },
  { id: "wish", n: 13 },
] as const;

export function splitIsoDate(iso: string): { year: string; month: string; day: string } {
  const [year, month, day] = iso.split("-");
  return { year, month, day };
}

export function formatDisplayDate(iso: string, separator = " / "): string {
  const { year, month, day } = splitIsoDate(iso);
  return `${day}${separator}${month}${separator}${year}`;
}

export function formatIntroDate(iso: string): string {
  return formatDisplayDate(iso, " • ");
}

export const copy = {
  intro: {
    line: "عندي ليك واحد الحاجة صغيرة يا Kooki... ❤️",
    enter: "دخلي ❤️",
    breathTitle: "ولكن قبل ما تبداي...",
    breath: "خدي نفس صغير، وحاولي غير تعيشي هاد اللحظات وحدة بوحدة.",
    ready: "مستعدة يا benty؟",
    begin: "نبدأو؟",
  },
  letter: {
    heading: "يا Kooki",
    body: `ما عرفت منين نبدا معاك يا Kooki...

حيت ملي قرب هاد النهار، بقيت كنفكر شنو نقدر نعطيك. وما بغيتش نعطيك غير cadeau وتسالي الحكاية.

بغيت نخلي ليك شي حاجة ترجعي ليها. شي حاجة تبقى عندك، حتى ملي يسالي هاد النهار.

ما غاديش نعمرها عليك دابا. راه باقي كاين ما تشوفي.

غير عرفتي... هادشي ما درتوش باش نقول كلمة ونمشي.

درتوه حيت بغيت تبقاي تحسين بلي هاد اللحظات مهمة عندي.

يا fnikichty... كاين مرات ما كنقدرش نشرح كلشي بالكلمات. لهذا خليت ليك هاد الحكاية.

دخلي بشوية.

هادشي كامل غير ليك نتي. ❤️`,
  },
  voice: {
    heading: "كاينة حاجة ما قدرتش نكتبها...",
    subtext: "خاصك تسمعيها بصوتي.",
    unlock: "حلّيها ❤️",
    afterUnlock: "دابا سمعيني...",
    listen: "▶️ سمعيني",
    pause: "وقفي",
    lockedLabel: "مسدودة",
    empty: "هاد الرسالة الصوتية غادي تكون هنا، بصوتي. دابا مازال.",
  },
  timeline: {
    heading: "ومن هنا بدات الحكاية...",
  },
  map: {
    heading: "ماشي غير ذكريات...",
    lede: "هادي حكايتنا. ❤️",
    hint: "اضغطي باش تتحل",
  },
  openWhen: {
    heading: "كاينين رسائل ليك...",
    lede: "ماشي دابا كاملين. افتحي كل وحدة ملي تحسي بيها.",
    closedHint: "مسكرة. اضغطي باش تحليها.",
    close: "سديها",
  },
  kiss: {
    heading: "كاينة واحد الذكرى كنضحك كل مرة نتفكرها 😂",
    hint: "اضغطي باش نكملو الحكاية",
    continue: "كمل...",
    beats: [
      "كنت باغي غير نعانقك...",
      "وما عرفت حتى كيفاش وصلنا لهاديك اللحظة 😂",
      "ولكن أكثر حاجة بقات عالقة فبالي...",
      "داك الغوات ديالك بحال الحمقة 😂❤️",
      "يمكن بالنسبة لشي واحد آخر تكون غير لحظة عادية...",
      "ولكن بالنسبة ليا؟",
      "هاد اللحظة ديالنا. ❤️",
    ],
  },
  memories: {
    heading: "ذكرياتنا",
    close: "سدي",
  },
  portrait: {
    heading: "Kooki...",
    line1: "كاينين بزاف ديال الصور زوينين...",
    line2: "ولكن هادي عندي مختلفة.",
    line3: "حيت ملي كنشوفها، كنشوف البنت اللي كنعيط ليها...",
    line4: "fnikichty ❤️",
  },
  video: {
    heading: "هاد الفيديو بوحدو عندو قصة 😂❤️",
    text: "ما عارفش علاش، ولكن نقدر نبقى نشوفك فيه ونبتاسم.",
    play: "شوفي الفيديو",
    mutedHint: "الصوت مطفي، تقدري تحليه من الزر.",
  },
  together: {
    heading: "من بين جميع الصور...",
    line1: "هادي هي الوحيدة اللي فيها أنا وانتي.",
    line2: "يمكن بالنسبة لشي واحد آخر غير صورة...",
    line3: "ولكن بالنسبة ليا...",
    line4: "هاد الصورة فيها جوج ديال الناس اللي دارو واحد الحكاية ما غاديش ننساها.",
    sign: "Abdo × Kawtar ❤️",
  },
  reasons: {
    heading: "7 حوايج فيك...",
  },
  secrets: {
    heading: "عندي ليك 4 أسرار...",
    hint: "اضغطي باش يتحل",
  },
  wish: {
    heading: "دابا جا الدور ديالك.",
    text: `غمضي عينيك...

وتمني شي حاجة.`,
    button: "✨ تمني",
    after: `نتمنى من قلبي تتحقق ليك.

وإلى ما تحققاتش دابا...
نعاودو نتمنوها بجوج. ❤️`,
  },
  finale: {
    before: "وقبل ما تسالي...",
    want: "بغيت نقول ليك واحد الحاجة.",
    name: "Kawtar...",
    greeting: "عيد ميلاد سعيد يا Kooki. ❤️",
    yearly: `كل عام وانتي بخير.
كل عام وانتي ضاحكة.
وكل عام وانتي قريبة لقلبي أكثر.`,
    english: "Happy Birthday, hbibty. ❤️",
  },
  capsule: {
    heading: "ولكن... مازال كاين واحد الباب.",
    teaser: "هاد الرسالة ما خاصهاش تتقرا اليوم.",
    wait: "رجعي هنا فـ {date}.",
    remaining: "باقي شوية...",
    open: "افتحيها",
    continue: "كمل...",
    lockedHint: "هاد الباب باقي مسدود. الوقت ما كملش.",
    unlockedLines: [
      "إلى وصلتي لهنا من بعد عام...",
      "راه دازت سنة كاملة من نهار عطيتك هاد الهدية.",
      "وكنتمنا تكون هاد السنة عطاوك ألف سبب باش تبتاسمي.",
      "واش مازال كتغوتي بحال الحمقة؟ 😂❤️",
      "من Abdo لـ Kooki ❤️",
    ],
  },
  easter: {
    heart: "🤫 آش كتقلبي؟ 😂❤️",
    logo: "هادي ما كانش خاصك تلقايها 😏",
    wait: "Wait...",
    bottom: "واش بصح سالينا؟ 👀",
    more: "كاين المزيد",
  },
  music: {
    invite: "بغيتي تسمعي الأغنية اللي غنيتها ليك؟ 🎵",
    play: "شغليها ❤️",
    pause: "وقفيها",
    mute: "سكتي الصوت",
    unmute: "رجعي الصوت",
    missing: "الأغنية باقي ما تحطاتش هنا.",
    volume: "صوت الأغنية",
    playing: "هاد الأغنية كتمشي معاك دابا.",
  },
  progress: {
    label: "حكايتنا",
  },
  a11y: {
    skip: "فوتي للحكاية",
    progress: "تقدم الحكاية",
    closeDialog: "سدي الصورة",
    heart: "قلب",
    envelope: "رسالة",
    mapNode: "محطة من الحكاية",
    voiceUnlock: "حلّي الرسالة الصوتية",
    capsuleLock: "كبسولة الوقت",
  },
} as const;
