dataSetVersion = "2019-02-23"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "Books and CDs", key: "book" },
      { name: "The Highly Responsive to Prayers", tooltip: "01 - Reiiden", key: "HRtP" },
      { name: "The Story of Eastern Wonderland", tooltip: "02 - Fuumaroku", key: "SoEW" },
      { name: "Phantasmagoria of Dim.Dream", tooltip: "03 - Yumejikuu", key: "PoDD" },
      { name: "Lotus Land Story", tooltip: "04 - Gensoukyou", key: "LLS" },
      { name: "Mystic Square", tooltip: "05 - Kaikidan", key: "MS" },
      { name: "Embodiment of Scarlet Devil", tooltip: "06 - Koumakan", key: "EoSD" },
      { name: "Perfect Cherry Blossom", tooltip: "07 - Youyoumu", key: "PCB" },
      { name: "Immaterial and Missing Power", tooltip: "07.5 - Suimusou", key: "IaMP" },
      { name: "Imperishable Night", tooltip: "08 - Eiyashou", key: "IN" },
      { name: "Phantasmagoria of Flower View", tooltip: "09 - Kaeidzuka", key: "PoFV" },
      { name: "Shoot the Bullet", tooltip: "09.5 - Bunkachou", key: "StB" },
      { name: "Mountain of Faith", tooltip: "10 - Fuujinroku", key: "MoF" },
      { name: "Scarlet Weather Rhapsody", tooltip: "10.5 - Hisouten", key: "SWR" },
      { name: "Subterranean Animism", tooltip: "11 - Chireiden", key: "SA" },
      { name: "Undefined Fantastic Object", tooltip: "12 - Seirensen", key: "UFO" },
      { name: "Touhou Hisoutensoku", tooltip: "12.3 - Hisoutensoku", key: "soku" },
      { name: "Double Spoiler", tooltip: "12.5 - Bunkachou", key: "DS" },
      { name: "Great Fairy Wars", tooltip: "12.8 - Daisensou", key: "GFW" },
      { name: "Ten Desires", tooltip: "13 - Shinreibyou", key: "TD" },
      { name: "Hopeless Masquerade", tooltip: "13.5 - Shinkirou", key: "HM" },
      { name: "Double Dealing Character", tooltip: "14 - Kishinjou", key: "DDC" },
      { name: "Impossible Spell Card", tooltip: "14.3 - Amanojaku", key: "ISC" },
      { name: "Urban Legend in Limbo", tooltip: "14.5 - Shinpiroku", key: "ULiL" },
      { name: "Legacy of Lunatic Kingdom", tooltip: "15 - Kanjuden", key: "LoLK" },
      { name: "Antinomy of Common Flowers", tooltip: "15.5 - Hyouibana", key: "AoCF" },
      { name: "Hidden Star in Four Seasons", tooltip: "16 - Tenkuushou", key: "HSiFS" }
    ]
  },
  {
    name: "Filter by Stage Enemy Appearances",
    key: "stage",
    tooltip: "Check this to restrict to characters that appear in certain stages as enemies.",
    checked: false,
    sub: [ { name: "Stage 1", key: "st1" }, { name: "Stage 2", key: "st2" }, { name: "Stage 3", key: "st3" }, { name: "Stage 4", key: "st4" }, { name: "Stage 5/Penultimate", tooltip: "Stage 4 in 5-stage games, and Stage 8 in 9-stage games.", key: "st5" }, { name: "Stage 6/Final", key: "st6" }, { name: "Stage EX/Phantasm", key: "ex" }
    ]
  },
  {
    name: "Remove PC-98 Duplicates",
    key: "pc98",
    tooltip: "Check this to remove PC-98 characters with a Windows counterpart."
  },
  {
    name: "Remove Non-Girls",
    key: "notgirl",
    tooltip: "Check this to remove all non-female characters."
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "D.O.",
    img: "ddLVXQa.jpg",
    opts: {
      series: [ "EXO" ],
      stage: []
    }
  },
  {
    name: "Hueningkai",
    img: "Kduo3SB.jpg",
    opts: {
      series: [ "TXT" ],
      stage: []
    }
  },
  {
    name: "Lisa",
    img: "50Vk58g.jpg",
    opts: {
      series: ["Blackpink"],
      stage: []
    }
  },
  {
    name: "Amber",
    img: "XXqBgk8.jpg",
    opts: {
      series: ["Fx"],
      stage: []
    }
  },
  {
    name: "Shinwon",
    img: "ZtynYjj.jpg",
    opts: {
      series: [ "Pentagon" ],
      stage: []
    }
  },
  {
    name: "Jinjin",
    img: "bHO8WlE.jpg",
    opts: {
      series: ["Astro"],
      stage: []
    }
  },
  {
    name: "Jooe",
    img: "F6AR6Ws.jpg",
    opts: {
      series: ["Momoland"],
      stage: []
    }
  },
  {
    name: "Johnny",
    img: "5He866U.png",
    opts: {
      series: ["NCT"],
      stage: []
    }
  },
  {
    name: "Daesung",
    img: "FcN2WPf.jpg",
    opts: {
      series: [ "Bigbang" ],
      stage: []
    }
  },
  {
    name: "Yeosang",
    img: "iEjtkAt.jpg",
    opts: {
      series: ["Ateez"],
      stage: []
    }
  },
  {
    name: "Jihyo",
    img: "LZYjjFq.jpg",
    opts: {
      series: ["Twice"],
      stage: []
    }
  },
  {
    name: "Jimin",
    img: "LDOaPZW.jpg",
    opts: {
      series: ["AOA"],
      stage: []
    }
  },
  {
    name: "Hui",
    img: "mzuDONJ.jpg",
    opts: {
      series: ["Pentagon"],
      stage: []
    }
  },
  {
    name: "EDawn",
    img: "mnpar47.jpg",
    opts: {
      series: ["Pentagon"],
      stage: []
    }
  },
  {
    name: "Hwasa",
    img: "Gud8Eae.jpg",
    opts: {
      series: ["Mamamoo"],
      stage: []
    }
  },
  {
    name: "Hyolyn",
    img: "TDZMQlK.jpg",
    opts: {
      series: ["Sistar"],
      stage: []
    }
  },
  {
    name: "Jhope",
    img: "lbBghXu.png",
    opts: {
      series: ["BTS"],
      stage: []
    }
  },
  {
    name: "Kai",
    img: "o3ymd56.jpg",
    opts: {
      series: ["EXO"],
      stage: []
    }
  },
  {
    name: "Taemin",
    img: "Y1TpC6y.jpg",
    opts: {
      series: [ "Shinee" ],
      stage: []
    }
  },
  {
    name: "Mark Lee",
    img: "FqObKS4.jpg",
    opts: {
      series: [ "NCT" ],
      stage: []
    }
  },
  {
    name: "Mark Tuan",
    img: "AkSuqcw.jpg",
    opts: {
      series: ["Got7"],
      stage: []
    }
  },
  {
    name: "Peniel",
    img: "xIctkvy.jpg",
    opts: {
      series: [ "BtoB" ],
      stage: []
    }
  },
  {
    name: "Mingi",
    img: "xQxxRcl.jpg",
    opts: {
      series: ["Ateez"],
      stage: []
    }
  },
  {
    name: "Yeo One",
    img: "gqtJCEq.jpg",
    opts: {
      series: ["Pentagon"],
      stage: []
    }
  },
  {
    name: "Taeyang",
    img: "Vxgz192.jpg",
    opts: {
      series: ["Bigbang"],
      stage: []
    }
  },
  {
    name: "Yugyeom",
    img: "Mr0SY40.jpg",
    opts: {
      series: ["Got7"],
      stage: []
    }
  },
  {
    name: "Lucas",
    img: "IAhVa9b.jpg",
    opts: {
      series: ["NCT"],
      stage: []
    }
  },
  {
    name: "Lia",
    img: "cX7teIR.jpg",
    opts: {
      series: ["Itzy"],
      stage: []
    }
  },
  {
    name: "Chen",
    img: "A6YBU6K.jpg",
    opts: {
      series: ["EXO"],
      stage: []
    }
  },
  {
    name: "Soyeon",
    img: "szBCQZh.jpg",
    opts: {
      series: ["GIdle"],
      stage: []
    }
  },
  {
    name: "Sanha",
    img: "1UkLRRA.png",
    opts: {
      series: ["Astro"],
      stage: []
    }
  },
  {
    name: "Wendy",
    img: "TjsNQ2Z.jpg",
    opts: {
      series: [ "Red Velvet" ],
      stage: []
    }
  },
  {
    name: "Xiumin",
    img: "OMyJ6u8.jpg",
    opts: {
      series: ["EXO"],
      stage: []
    }
  },
  {
    name: "Seonghwa",
    img: "zmhjW6m.jpg",
    opts: {
      series: ["Ateez"],
      stage: []
    }
  },
  {
    name: "Chaeryeong",
    img: "2a90oxh.jpg",
    opts: {
      series: ["Itzy"],
      stage: [], 
    }
  }
];
