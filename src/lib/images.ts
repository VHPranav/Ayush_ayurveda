// Placeholder photography (Unsplash licence). Replace each `src` with the
// client's own Montenegro photography once available — keys stay the same.
const unsplash = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop`;

export type Photo = { src: string; alt: string };

// Hero footage: Our Lady of the Rocks, Bay of Kotor — self-hosted in /public/media.
// Source: Pexels video 25460349 (Pexels licence), re-encoded H.264 High,
// 1080p @ 6 Mbps / 720p @ 3 Mbps, fast-start, no audio.
export const heroVideo = {
  desktop: "/media/hero-kotor-1080.mp4",
  mobile: "/media/hero-kotor-720.mp4",
  poster: {
    src: "/media/hero-kotor-poster.jpg",
    alt: "Aerial view of the island church of Our Lady of the Rocks in the Bay of Kotor, beneath the mountains",
  },
};

export const photos = {
  heroBay: {
    src: unsplash("photo-1728363265942-92c2202b6596"),
    alt: "The Bay of Kotor near Perast, with its island churches beneath steep mountains",
  },
  budvaCoast: {
    src: unsplash("photo-1664958451522-90ce9fd47b2c"),
    alt: "Budva Old Town on the Adriatic coast, framed by pine trees and mountains",
  },
  ladyOfTheRocks: {
    src: unsplash("photo-1719587612807-5a58ca8afcf1"),
    alt: "Island church of Our Lady of the Rocks in the clear Adriatic water",
  },
  kotorRooftops: {
    src: unsplash("photo-1634934283931-10f4b5635861"),
    alt: "Stone houses and terracotta roofs above the Bay of Kotor",
  },
  durmitorLake: {
    src: unsplash("photo-1503147943191-8935764b7a68"),
    alt: "Black Lake beneath the peaks of Durmitor National Park",
  },
  taraRiver: {
    src: unsplash("photo-1715528599141-03d04e5daba9"),
    alt: "The turquoise Tara River flowing through forested canyon walls",
  },
  mountainLake: {
    src: unsplash("photo-1651535075592-d0df68fa6f5f"),
    alt: "A mountain lake in northern Montenegro framed by pine forest",
  },
  svetiStefan: {
    src: unsplash("photo-1629716491411-c60c0f99c35a"),
    alt: "Sveti Stefan seen through pine branches on the Adriatic coast",
  },
  svetiStefanDusk: {
    src: unsplash("photo-1736786712817-ab1d1ff38eae"),
    alt: "Sveti Stefan and the Adriatic coast at dusk",
  },
  stoneTerrace: {
    src: unsplash("photo-1783538702963-1ebb1fcc7b14"),
    alt: "A white stone terrace overlooking the sea",
  },
  yogaByTheSea: {
    src: unsplash("photo-1573590330099-d6c7355ec595"),
    alt: "A woman practising yoga beside calm water at golden hour",
  },
  harvestTable: {
    src: unsplash("photo-1768573507890-535afb364aef"),
    alt: "Pomegranates, figs and seasonal produce on an old stone table",
  },
  treatmentRoom: {
    src: unsplash("photo-1630835425197-50feeba99ecd"),
    alt: "A calm, light-filled treatment room with natural materials",
  },
  stoneBath: {
    src: unsplash("photo-1781795035627-fa93f2863bba"),
    alt: "A treatment space of stone walls, timber and a copper bath",
  },
  treatmentDetail: {
    src: unsplash("photo-1731597076108-f3bbe268162f"),
    alt: "A minimal treatment room with timber shelving and natural oils",
  },
  hotelSpa: {
    src: unsplash("photo-1776763018829-ad685e621871"),
    alt: "Loungers of stone and timber beside a calm hotel spa pool",
  },
  herbalTea: {
    src: unsplash("photo-1571934811356-5cc061b6821f"),
    alt: "A cup of herbal infusion surrounded by dried herbs",
  },
  oliveBranch: {
    src: unsplash("photo-1541259418332-97b56947904f"),
    alt: "Olive branch with ripening green olives",
  },
  ancientOlive: {
    src: unsplash("photo-1544475925-9199e8ed85ab"),
    alt: "An ancient olive tree growing among limestone rocks",
  },
  quietShore: {
    src: unsplash("photo-1586806986411-94dce4e608a2"),
    alt: "A figure resting on still water at sunset",
  },
} satisfies Record<string, Photo>;
