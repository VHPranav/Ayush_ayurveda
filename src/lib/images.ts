// Site photography — generated with Google Flow (Nano Banana 2.1) in one shared grade:
// ivory/sand neutrals, olive and sage greens, forest shadows, muted grey-teal water.
// Files live in /public/images/flow (WebP q85 at native 2K size — 2752×1536 / 1792×2400;
// Next.js resizes and re-encodes per screen). Keys stay stable; swap `src`
// for the client's own photography when it arrives.
const flow = (file: string) => `/images/flow/${file}.webp`;
const landscape = (file: string) => ({ src: flow(file), w: 2752, h: 1536 });
const portrait = (file: string) => ({ src: flow(file), w: 1792, h: 2400 });

export type Photo = { src: string; alt: string; w?: number; h?: number };

/**
 * `sizes` for an object-cover photo whose frame has a different shape. A wide photo in a
 * tall frame is scaled up to fill the height and cropped at the sides, so the browser needs
 * a much wider file than the frame itself — otherwise it stretches a small one and blurs.
 * `widths` are the frame widths in vw per breakpoint; `overscan` is any extra parallax height.
 */
export function coverSizes(photo: Photo, frameRatio: number, widths: [string | null, number][], overscan = 1.2) {
  const ratio = photo.w && photo.h ? photo.w / photo.h : 1.5;
  const factor = Math.max(1, (ratio * overscan) / frameRatio);
  return widths.map(([mq, vw]) => `${mq ? `${mq} ` : ""}${Math.min(400, Math.round(vw * factor))}vw`).join(", ");
}

export const photos = {
  // Montenegro
  budvaCoast: { ...landscape("budva-old-town"), alt: "Budva old town on the Adriatic coast, framed by umbrella pines" },
  durmitorLake: { ...landscape("durmitor-black-lake"), alt: "Morning mist over the Black Lake beneath the peaks of Durmitor" },
  mountainLake: { ...landscape("mountain-lake-jetty"), alt: "A quiet mountain lake with a wooden jetty, framed by pine forest" },
  taraRiver: { ...landscape("tara-canyon"), alt: "The Tara River winding through its forested canyon" },
  stoneTerrace: { ...landscape("stone-terrace-daybed"), alt: "A limestone terrace with a linen daybed and an olive tree above the calm Adriatic" },
  yogaByTheSea: { ...portrait("yoga-terrace-sea"), alt: "A woman meditating on a stone terrace above the sea at golden hour" },
  nourishingBowl: { ...portrait("nourishing-bowl"), alt: "A nourishing bowl of chickpeas, roasted vegetables, greens and figs on a wooden table" },
  stoneBath: { ...portrait("stone-copper-bath"), alt: "A stone treatment room with a copper bath, folded linen and herbs" },

  // Ayurveda
  abhyanga: { ...portrait("ayurveda-abhyanga"), alt: "A therapist applying warm oil during an Abhyanga massage on a wooden treatment table" },
  shirodhara: { ...portrait("ayurveda-shirodhara"), alt: "Warm oil flowing from a brass vessel during a Shirodhara treatment" },
  panchakarmaRoom: { ...landscape("ayurveda-panchakarma-room"), alt: "A Panchakarma treatment room of stone and timber, with a window onto the sea and mountains" },
  nadiPariksha: { ...portrait("ayurveda-nadi-pariksha"), alt: "An Ayurvedic physician reading a client's pulse during consultation" },
  herbalOil: { ...portrait("ayurveda-herbal-oil"), alt: "Herbal oil being prepared in a copper pot beside a stone mortar and pestle" },
  herbsFlatlay: { ...landscape("ayurveda-herbs-flatlay"), alt: "Turmeric, ashwagandha, tulsi, neem and ghee in brass and stone bowls on linen" },
  pindaSweda: { ...portrait("ayurveda-pinda-sweda"), alt: "Herbal poultices warming in a copper pan for Pinda Sweda" },
  yogaTherapy: { ...landscape("ayurveda-yoga-therapy"), alt: "A yoga therapist guiding a client's posture in a stone pavilion above the sea" },
  ayurvedicLunch: { ...portrait("ayurveda-lunch"), alt: "An Ayurvedic lunch of kitchari and vegetables in brass bowls on a terrace" },

  // Podgorica & nearby — Unsplash License (free, commercial use). Files in /public/images/unsplash.
  // Credits: Denis Ismailaj (bridge), Anton Luk (city), Boudewijn Boer (Skadar bend),
  // Elena Mozhvilo (Skadar boat), Maria Ivanova (river).
  podgoricaBridge: { src: "/images/unsplash/podgorica-bridge.jpg", w: 2400, h: 1350, alt: "The Millennium Bridge over the Morača river in Podgorica, Montenegro" },
  podgoricaCity: { src: "/images/unsplash/podgorica-city.jpg", w: 2400, h: 1600, alt: "Podgorica's residential edge beneath the mountains, beyond a field of golden grass" },
  skadarHorseshoe: { src: "/images/unsplash/skadar-horseshoe.jpg", w: 2400, h: 1600, alt: "The horseshoe bend of the Crnojević river at Lake Skadar National Park, near Podgorica" },
  skadarBoat: { src: "/images/unsplash/skadar-boat.jpg", w: 2400, h: 1551, alt: "A boatman on the still water of Lake Skadar beneath the mountains" },
  montenegroRiver: { src: "/images/unsplash/montenegro-river.jpg", w: 2400, h: 3600, alt: "A clear mountain river in a green Montenegrin valley, with wildflowers in the foreground" },

  // Treatment with a male therapist — Unsplash License. Credit: Charanjeet Dhiman,
  // shot at AyurVAID Kalmatia, Almora, India. Landscape: use in wide frames only.
  potliTreatment: { src: "/images/unsplash/ayurveda-potli.jpg", w: 2400, h: 1600, alt: "A male Ayurvedic therapist applying warm herbal poultices (Pinda Sweda) to a patient's shoulders" },

  // Pexels License (free, commercial use). Credit: Rishikesh Yoga Valley School,
  // shot in Jonk, Uttarakhand, India. Crops well to portrait frames.
  katiBasti: { src: "/images/pexels/ayurveda-kati-basti.jpg", w: 2400, h: 1800, alt: "A male Ayurvedic therapist preparing Kati Basti, a ring of dough that holds warm medicated oil on the lower back" },
  // Pexels License. Pre-cropped to a square around the therapist's hands for the small intro frame.
  maleTherapistMassage: { src: "/images/pexels/massage-male-therapist.jpg", w: 1600, h: 1600, alt: "A male therapist in a white uniform giving a back massage to a resting client" },

  // Team (client-supplied photography)
  prabodh: { src: "/images/flow/prabodh.jpeg", w: 1244, h: 1600, alt: "Portrait of Dr Prabodh Raghavan, Consultant Ayurvedic Physician" },
} satisfies Record<string, Photo>;
