export interface BrandConfig {
  name: string;
  tagline: string;
  heroHeadline: string;
  heroSupportingText: string;
  heroPersonalCopy: string;
  officialContacts: {
    whatsapp: {
      number: string;
      displayNumber: string;
      prefilledMessage: string;
      url: string;
    };
    dana: {
      number: string;
      displayNumber: string;
      qrImagePath: string;
      directPaymentUrl: string;
    };
    bank: {
      bankName: string;
      accountNumber: string;
      displayAccountNumber: string;
    };
  };
  socials: Array<{
    name: string;
    handle: string;
    url: string;
    icon: 'tiktok' | 'youtube' | 'instagram' | 'whatsapp';
  }>;
  ecosystemLogos: Array<{
    name: string;
    badge: string;
    description: string;
    imagePath: string;
  }>;
  ecosystemMention: string[];
}

export const BRAND_CONFIG: BrandConfig = {
  name: "ADHY THE BONTOT",
  tagline: "The Bontot Radio • Creator & Broadcaster",
  heroHeadline: "TRAKTIR KOPI BUAT BANG ADHY ☕",
  heroSupportingText: "Kalau lu menikmati live, musik, konten, atau karya dari The Bontot Radio, lu bisa ikut support Bang Adhy lewat secangkir kopi virtual.",
  heroPersonalCopy: "Terima kasih sudah jadi bagian dari perjalanan ini, Bontoters. Dukungan lu, sekecil apa pun, berarti banget buat gw.",
  
  officialContacts: {
    whatsapp: {
      number: "+6281990918273",
      displayNumber: "+62 819-9091-8273",
      prefilledMessage: "Halo Bang Adhy, gw mau support The Bontot Radio.",
      url: "https://wa.me/6281990918273?text=Halo%20Bang%20Adhy%2C%20gw%20mau%20support%20The%20Bontot%20Radio."
    },
    dana: {
      number: "089629721717",
      displayNumber: "0896-2972-1717",
      qrImagePath: "/assets/dana-qr.jpg",
      directPaymentUrl: "https://link.dana.id/minta?full_url=https://qr.dana.id/v1/281012012019061707061844"
    },
    bank: {
      bankName: "BANK JAGO",
      accountNumber: "103415027159",
      displayAccountNumber: "1034 1502 7159"
    }
  },

  socials: [
    {
      name: "TikTok",
      handle: "@thebontot.radio",
      url: "https://www.tiktok.com/@thebontot.radio",
      icon: "tiktok"
    },
    {
      name: "YouTube",
      handle: "@TheBontotRadio",
      url: "https://www.youtube.com/@TheBontotRadio",
      icon: "youtube"
    },
    {
      name: "Instagram",
      handle: "adhy_thebontot",
      url: "https://www.instagram.com/adhy_thebontot/",
      icon: "instagram"
    },
    {
      name: "WhatsApp",
      handle: "+6281990918273",
      url: "https://wa.me/6281990918273?text=Halo%20Bang%20Adhy%2C%20gw%20mau%20support%20The%20Bontot%20Radio.",
      icon: "whatsapp"
    }
  ],

  ecosystemLogos: [
    {
      name: "THE BONTOT RADIO",
      badge: "Flagship Channel",
      description: "Siaran live streaming, musik kurasi, dan interaksi komunitas.",
      imagePath: "/assets/the-bontot-radio-logo.jpg"
    },
    {
      name: "THE BONTOT COMMUNITY",
      badge: "Community Hub",
      description: "Ruang kumpul Bontoters untuk berbagi insight dan solidaritas.",
      imagePath: "/assets/the-bontot-community-logo.png"
    },
    {
      name: "BONTOT STUDIO",
      badge: "Creative Lab",
      description: "Inkubator karya audio-visual, teknologi, dan eksplorasi digital.",
      imagePath: "/assets/bontot-studio-logo.png"
    }
  ],

  ecosystemMention: [
    "Warung Bontot",
    "Bontot Cleaner",
    "Creative Tech & AI Experiments",
    "Digital Sound Works"
  ]
};
