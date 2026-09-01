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
    "ما كاااين والو 🙂.",
    "غير بغيت نقوليك واخا ندور العالم كامل …",
    "ما نلقاش بحالك .",
    "كنبغيك ❤️",
    "— Abdo ❤️",
  ],
} as const;

export const journeySteps = [
  { id: "letter", n: 1 },
  { id: "voice", n: 2 },
  { id: "story", n: 3 },
  { id: "kiss", n: 4 },
  { id: "memories", n: 5 },
  { id: "portrait", n: 6 },
  { id: "video", n: 7 },
  { id: "reasons", n: 8 },
  { id: "open-when", n: 9 },
  { id: "one-thing", n: 10 },
  { id: "secrets", n: 11 },
  { id: "wish", n: 12 },
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
    line: "الكبيدة ديالي ، الرين ديالي ، الفنيكيشة ديالي عندي ليك واحد الحاجة بسيطة ❤️ ... ",
    enter: "دخلي ❤️",
    breathTitle: "ولكن قبل ما تبداي...",
    breath: "  تنفسي مزيااااااان هههه ... وحاولي  تعيشي معايا هاد اللحظات وحدة بوحدة.",
    ready: "مستعدة  الزين ديالي؟",
    begin: "نبداو؟",
  },
  letter: {
    heading: "Kbeedty",
    body: `المهم الزين ما عرفت باش نبدااا ليك هاد العجب ههه ….
حيت ملي قرب هاد النهار الزوين ، بقيت كنفكر شنو نقدر نعطيك  ف عيد ميلادك و أنا بعيد عليك  ، و ما بغيتش نعطيك غير cadeau  و تسالي القصة .
بغيت نخلي ليك شي حاجة تبقى عندك و فوقاش ما تفكرتيها ترجعي ليها  ، واخا يسالي هاد النهار . 
المهم بلا ما نطول عليك  كاينين شي حويجات التحت خاصك تشوفيهم .
 غير باش تفهمي واحد الحاجة …. هادشي ما درتوش باش غير باش نديرو  ، باش تعرفي شحال نتي مهمة عندي و شحال كنبغيييييييك  الأميرة ديالي ❤️👑

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
      "واش كنتي خايفة على طرمتك لي أصلا ما عندكش 😂",
    ],
  },
  memories: {
    heading: "تصاور ديالك كايساليو معايا (مشاو ليا القدام 💔)",
    close: "سدي",
  },
  portrait: {
    heading: "L ghzaaaala dyali …",
    line1: "كاينين بزاف ديال الصور زوينين...",
    line2: "ولكن هادي عندي مختلفة.",
    line3: "حيت ملي كنشوفها، كنشوف البنت اللي كنعيط ليها...",
    line4: "fnikichty ❤️",
  },
  video: {
    heading: "هاد الڤيديو  فيه أحسن شخص شطح على الرگادة 😍👑",
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
    voiceUnlock: "حلّي الرسالة الصوتية",
    capsuleLock: "كبسولة الوقت",
  },
} as const;
