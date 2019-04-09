dataSetVersion = "2019-04-09"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "IDOLS", tooltip: "01 - KPOP", key: "IDOL" }
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
    name: "Hyuck",
    img: "PKpkBMl.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Hongjoong",
    img: "qWR8BEg.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Eunbin",
    img: "8IRElik.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Chuu",
    img: "yqKGYjM.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Xiumin",
    img: "5bPhrHV.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Suho",
    img: "lupDBRc.png",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Seulgi",
    img: "5Z1SZcG.png",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Taemin",
    img: "X2IDo7g.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Soyeon",
    img: "k8S08AA.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Yunho",
    img: "8OV26VV.png",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "The8",
    img: "QDHK5sl.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Miya",
    img: "eMQ4oB6.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "N",
    img: "0IdOQsZ.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Ryujin",
    img: "P4ouYy6.png",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Seolhyun",
    img: "Xqzy17w.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Rocky",
    img: "VwXZac3.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Naeyoung",
    img: "bjlqc0l.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Luda",
    img: "X1i5rQY.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Lisa",
    img: "3fWVeWG.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Hyunjae",
    img: "CmF2maP.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Hyuna",
    img: "zsl5SxT.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Jinho",
    img: "QwZ5MEt.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Joshua",
    img: "1MuO2Ym.png",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Felix",
    img: "7Wewamm.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Dawon",
    img: "HtVQPN7.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "EDawn",
    img: "IWiRIpc.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Jeonghwa",
    img: "d2MUiuw.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "BM",
    img: "Ukd0Hmz.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Jeongyeon",
    img: "Jw6dKU4.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Luna",
    img: "OBDS3c2.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Jaehyun",
    img: "0u3vhb8.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Donghan",
    img: "DIiqRNt.png",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Fei",
    img: "uJZRPnw.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Chungha",
    img: "4Jh1EG0.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Gikwang",
    img: "cJSpoUl.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
   {
    name: "Hyungwon",
    img: "7VB8rCE.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
   {
    name: "Bambam",
    img: "BW1P6Lu.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Kai",
    img: "VSlgIxg.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  }
];
