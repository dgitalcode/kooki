export type Secret = {
  id: string;
  number: string;
  title: string;
  text: string;
};

export const secrets: Secret[] = [
  {
    id: "secret-01",
    number: "01",
    title: "شي حاجة من الماضي",
    text: "واحد الذكرى عمري ما بغيت ننساها.",
  },
  {
    id: "secret-02",
    number: "02",
    title: "شي حاجة فيك",
    text: "واحد الحاجة فيك يمكن ما عارفاش بلي كنحبها بزاف.",
  },
  {
    id: "secret-03",
    number: "03",
    title: "شي حاجة مني",
    text: "واحد الوعد مني ليك.",
  },
  {
    id: "secret-04",
    number: "04",
    title: "آخر سر...",
    text: "هاد السر ماشي كلمة.\n\nهاد السر هو أنني باغي نشوف شحال من ذكرى أخرى غادي نصنعو بجوج. ❤️",
  },
];
