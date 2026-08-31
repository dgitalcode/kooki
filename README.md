# حكايتنا ❤️

Abdo ❤️ Kawtar

A mobile-first romantic birthday experience in Moroccan Darija.

Birthday: **02/09/2026**

---

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) on a phone or Chrome device mode (390×844).

```bash
npm run lint
npm run typecheck
npm run build
```

---

## PERSONALIZATION CHECKLIST

Kawtar, Kooki, and the known memories are already in the site.

Abdo still needs to add:

### Timeline dates

In `src/data/memories.ts`, `timelineMemories` uses empty `date` fields until the real dates are known.

Put the real dates on:

- بداية الحكاية
- أول لحظة مميزة
- أول kiss
- الصورة الوحيدة اللي فيها بجوج

Use a `DD/MM/YYYY` value when you have it. Do not invent dates.

Gallery captions in the same file can be rewritten if you want them more specific.

### Voice message

Record the spoken message and save it as:

- `/public/audio/voice-message.mp3`

The dedicated song is already converted to `/public/audio/background.mp3`.

### Time capsule preview

Unlock date: `2027-09-02` in `src/data/config.ts`.

To preview the unlocked letter, temporarily set `timeCapsuleUnlock` to a past date, then put it back.

---

## Assets already wired

- `/public/memories/01.jpg` … `07.jpg` — gallery
- `/public/memories/portrait.jpg` — best photo of Kawtar
- `/public/memories/together.jpg` — only photo of Abdo and Kawtar
- `/public/memories/hidden.mp4` — best video of Kawtar (dedicated section, tap to play)
- `/public/audio/background.mp3` — song dedicated to Kawtar (off until she presses play)

---

## PWA

- App name: حكايتنا ❤️
- Short name: حكايتنا

---

## Notes

- Mobile is the primary design target (390×844).
- `prefers-reduced-motion` is respected.
- No analytics, login, or database.
- Audio never autoplays.
