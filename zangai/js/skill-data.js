/**
 * Created by Administrator on 2018/3/19.
 */
var TARGET_TYPE = {
  randomOne:0.5,
  one: 1,
  oneOrTwo: 1.5,
  two: 2
};
var ACTIVE_SKILL_DB = {
  none: {
    id: "none",
    name: "空",
    description: "没有技能",
  },
  debuffLMagicATK10: {
    id: "debuffLMagicATK10",
    name: "衰弱ノ呪詛(Ⅳ)",
    description: "单体、魔攻",
    sp: 18,
    target: TARGET_TYPE.one,
    property: "magic",
    type: "debuff",
    effectMin: {physicATK: 0, magicATK: 0.05, physicDEF: 0, magicDEF: 0},
    effectExpectation: {physicATK: 0, magicATK: 0.05, physicDEF: 0, magicDEF: 0},
    effectMax: {physicATK: 0, magicATK: 0.05, physicDEF: 0, magicDEF: 0}
  },
  debuffLMagicATK15: {
    id: "debuffLMagicATK15",
    name: "衰弱ノ呪術(Ⅲ)",
    description: "1~2体、魔攻",
    sp: 21,
    target: TARGET_TYPE.oneOrTwo,
    property: "magic",
    type: "debuff",
    effectMin: {physicATK: 0, magicATK: 0.044, physicDEF: 0, magicDEF: 0},
    effectExpectation: {physicATK: 0, magicATK: 0.066, physicDEF: 0, magicDEF: 0},
    effectMax: {physicATK: 0, magicATK: 0.086, physicDEF: 0, magicDEF: 0}
  },
  debuffLMagicATK20: {
    id: "debuffLMagicATK20",
    name: "衰弱ノ呪術(Ⅱ)",
    description: "2体、魔攻",
    sp: 25,
    target: TARGET_TYPE.two,
    property: "magic",
    type: "debuff",
    effectMin: {physicATK: 0, magicATK: 0.064, physicDEF: 0, magicDEF: 0},
    effectExpectation: {physicATK: 0, magicATK: 0.064, physicDEF: 0, magicDEF: 0},
    effectMax: {physicATK: 0, magicATK: 0.064, physicDEF: 0, magicDEF: 0}
  },
  debuffLMagicATKDEF15: {
    id: "debuffLMagicATKDEF15",
    name: "破魔ノ呪術(Ⅲ)",
    description: "1~2体、魔防魔攻",
    sp: 22,
    target: TARGET_TYPE.oneOrTwo,
    property: "magic",
    type: "debuff",
    effectMin: {physicATK: 0, magicATK: 0.04, physicDEF: 0, magicDEF: 0.065},
    effectExpectation: {physicATK: 0, magicATK: 0.06, physicDEF: 0, magicDEF: 0.0975},
    effectMax: {physicATK: 0, magicATK: 0.08, physicDEF: 0, magicDEF: 0.13}
  },
  debuffLPhysicATK10: {
    id: "debuffLPhysicATK10",
    name: "刀錆ノ呪詛(Ⅳ)",
    description: "单体、物攻",
    sp: 18,
    target: TARGET_TYPE.one,
    property: "physic",
    type: "debuff",
    effectMin: {physicATK: 0.05, magicATK: 0, physicDEF: 0, magicDEF: 0},
    effectExpectation: {physicATK: 0.05, magicATK: 0, physicDEF: 0, magicDEF: 0},
    effectMax: {physicATK: 0.05, magicATK: 0, physicDEF: 0, magicDEF: 0}
  },
  debuffLPhysicATKDEF10: {
    id: "debuffLPhysicATKDEF10",
    name: "枷鎖ノ呪詛(Ⅲ)",
    description: "单体、物攻物防",
    sp: 19,
    target: TARGET_TYPE.one,
    property: "physic",
    type: "debuff",
    effectMin: {physicATK: 0.045, magicATK: 0, physicDEF: 0.08, magicDEF: 0},
    effectExpectation: {physicATK: 0.045, magicATK: 0, physicDEF: 0.08, magicDEF: 0},
    effectMax: {physicATK: 0.045, magicATK: 0, physicDEF: 0.08, magicDEF: 0}
  },
  debuffLPhysicATKDEF15: {
    id: "debuffLPhysicATKDEF15",
    name: "枷鎖ノ呪術(Ⅲ)",
    description: "1~2体、物防物攻",
    sp: 22,
    target: TARGET_TYPE.oneOrTwo,
    property: "physic",
    type: "debuff",
    effectMin: {physicATK: 0.04, magicATK: 0, physicDEF: 0.065, magicDEF: 0},
    effectExpectation: {physicATK: 0.06, magicATK: 0, physicDEF: 0.0975, magicDEF: 0},
    effectMax: {physicATK: 0.08, magicATK: 0, physicDEF: 0.13, magicDEF: 0}
  },
  debuffLAllATK20: {
    id: "debuffLAllATK20",
    name: "腐蝕ノ呪術(Ⅱ)",
    description: "2体、物攻魔攻",
    sp: 26,
    target: TARGET_TYPE.two,
    property: "both",
    type: "debuff",
    effectMin: {physicATK: 0.052, magicATK: 0.052, physicDEF: 0, magicDEF: 0},
    effectExpectation: {physicATK: 0.052, magicATK: 0.052, physicDEF: 0, magicDEF: 0},
    effectMax: {physicATK: 0.052, magicATK: 0.052, physicDEF: 0, magicDEF: 0}
  },
  debuffLAllATK15: {
    id: "debuffLAllATK15",
    name: "腐蝕ノ呪術(Ⅲ)",
    description: "1~2体、物攻魔攻",
    sp: 22,
    target: TARGET_TYPE.oneOrTwo,
    property: "both",
    type: "debuff",
    effectMin: {physicATK: 0.04, magicATK: 0.04, physicDEF: 0, magicDEF: 0},
    effectExpectation: {physicATK: 0.06, magicATK: 0.06, physicDEF: 0, magicDEF: 0},
    effectMax: {physicATK: 0.08, magicATK: 0.08, physicDEF: 0, magicDEF: 0}
  },
  debuffLAllATK10: {
    id: "debuffLAllATK10",
    name: "腐蝕ノ呪術(Ⅲ)",
    description: "1体、物攻魔攻",
    sp: 19,
    target: TARGET_TYPE.one,
    property: "both",
    type: "debuff",
    effectMin: {physicATK: 0.045, magicATK: 0.045, physicDEF: 0, magicDEF: 0},
    effectExpectation: {physicATK: 0.045, magicATK: 0.045, physicDEF: 0, magicDEF: 0},
    effectMax: {physicATK: 0.045, magicATK: 0.045, physicDEF: 0, magicDEF: 0}
  },
  debuffLAllDEF10: {
    id: "debuffLAllDEF10",
    name: "落城ノ呪詛(Ⅲ)",
    description: "单体、物防魔防",
    sp: 19,
    target: TARGET_TYPE.one,
    property: "both",
    type: "debuff",
    effectMin: {physicATK: 0, magicATK: 0, physicDEF: 0.08, magicDEF: 0.08},
    effectExpectation: {physicATK: 0, magicATK: 0, physicDEF: 0.08, magicDEF: 0.08},
    effectMax: {physicATK: 0, magicATK: 0, physicDEF: 0.08, magicDEF: 0.08}
  },
  debuffLAllDEF15: {
    id: "debuffLAllDEF15",
    name: "落城ノ呪術(Ⅲ)",
    description: "1~2体、物防魔防",
    sp: 22,
    target: TARGET_TYPE.oneOrTwo,
    property: "both",
    type: "debuff",
    effectMin: {physicATK: 0, magicATK: 0, physicDEF: 0.065, magicDEF: 0.065},
    effectExpectation: {physicATK: 0, magicATK: 0, physicDEF: 0.0975, magicDEF: 0.0975},
    effectMax: {physicATK: 0, magicATK: 0, physicDEF: 0.13, magicDEF: 0.13}
  },
  debuffLPhysicDEF20: {
    id: "debuffLPhysicDEF20",
    name: "壊壁ノ呪術(Ⅱ)",
    description: "2体、物防",
    sp: 25,
    target: TARGET_TYPE.two,
    property: "physic",
    type: "debuff",
    effectMin: {physicATK: 0, magicATK: 0, physicDEF: 0.114, magicDEF: 0},
    effectExpectation: {physicATK: 0, magicATK: 0, physicDEF: 0.114, magicDEF: 0},
    effectMax: {physicATK: 0, magicATK: 0, physicDEF: 0.114, magicDEF: 0}
  },
  debuffLPhysicDEF15: {
    id: "debuffLPhysicDEF15",
    name: "壊壁ノ呪術(Ⅲ)",
    description: "1~2体、物防",
    sp: 21,
    target: TARGET_TYPE.oneOrTwo,
    property: "physic",
    type: "debuff",
    effectMin: {physicATK: 0, magicATK: 0, physicDEF: 0.072, magicDEF: 0},
    effectExpectation: {physicATK: 0, magicATK: 0, physicDEF: 0.108, magicDEF: 0},
    effectMax: {physicATK: 0, magicATK: 0, physicDEF: 0.144, magicDEF: 0}
  },
  debuffLPhysicDEF10: {
    id: "debuffLPhysicDEF10",
    name: "壊壁ノ呪詛(Ⅳ)",
    description: "单体、物防",
    sp: 18,
    target: TARGET_TYPE.one,
    property: "physic",
    type: "debuff",
    effectMin: {physicATK: 0, magicATK: 0, physicDEF: 0.086, magicDEF: 0},
    effectExpectation: {physicATK: 0, magicATK: 0, physicDEF: 0.086, magicDEF: 0},
    effectMax: {physicATK: 0, magicATK: 0, physicDEF: 0.086, magicDEF: 0}
  },
  debuffLMagicDEF20: {
    id: "debuffLMagicDEF20",
    name: "解魔ノ呪術(Ⅱ)",
    description: "2体、魔防",
    sp: 25,
    target: TARGET_TYPE.two,
    property: "magic",
    type: "debuff",
    effectMin: {physicATK: 0, magicATK: 0, physicDEF: 0, magicDEF: 0.114},
    effectExpectation: {physicATK: 0, magicATK: 0, physicDEF: 0, magicDEF: 0.114},
    effectMax: {physicATK: 0, magicATK: 0, physicDEF: 0, magicDEF: 0.114}
  },
  debuffLMagicDEF15: {
    id: "debuffLMagicDEF15",
    name: "解魔ノ呪術(Ⅲ)",
    description: "1~2体、魔防",
    sp: 21,
    target: TARGET_TYPE.oneOrTwo,
    property: "magic",
    type: "debuff",
    effectMin: {physicATK: 0, magicATK: 0, physicDEF: 0, magicDEF: 0.072},
    effectExpectation: {physicATK: 0, magicATK: 0, physicDEF: 0, magicDEF: 0.108},
    effectMax: {physicATK: 0, magicATK: 0, physicDEF: 0, magicDEF: 0.144}
  },
  debuffLMagicDEF10: {
    id: "debuffLMagicDEF10",
    name: "解魔ノ呪詛(Ⅳ)",
    description: "单体、魔防",
    sp: 18,
    target: TARGET_TYPE.one,
    property: "magic",
    type: "debuff",
    effectMin: {physicATK: 0, magicATK: 0, physicDEF: 0, magicDEF: 0.086},
    effectExpectation: {physicATK: 0, magicATK: 0, physicDEF: 0, magicDEF: 0.086},
    effectMax: {physicATK: 0, magicATK: 0, physicDEF: 0, magicDEF: 0.086}
  },
  buffLPhysicATK10: {
    id: "buffLPhysicATK10",
    name: "戦士の円舞曲(Ⅳ)",
    description: "单体、物攻",
    sp: 18,
    target: TARGET_TYPE.one,
    property: "physic",
    type: "buff",
    effectMin: {physicATK: 0.05, magicATK: 0, physicDEF: 0, magicDEF: 0},
    effectExpectation: {physicATK: 0.05, magicATK: 0, physicDEF: 0, magicDEF: 0},
    effectMax: {physicATK: 0.05, magicATK: 0, physicDEF: 0, magicDEF: 0}
  },
  buffLPhysicATK175: {
    id: "buffLPhysicATK175",
    name: "戦士の哀歌(Ⅳ)",
    description: "单体、物攻狼烟",
    sp: 22,
    target: TARGET_TYPE.one,
    property: "physic",
    type: "buff",
    effectMin: {physicATK: 0.05, magicATK: 0, physicDEF: 0, magicDEF: 0},
    effectExpectation: {physicATK: 0.0875, magicATK: 0, physicDEF: 0, magicDEF: 0},
    effectMax: {physicATK: 0.125, magicATK: 0, physicDEF: 0, magicDEF: 0}
  },
  buffLPhysicATK15: {
    id: "buffLPhysicATK15",
    name: "戦士の輪舞曲(Ⅲ)",
    description: "1~2体、物攻",
    sp: 21,
    target: TARGET_TYPE.oneOrTwo,
    property: "physic",
    type: "buff",
    effectMin: {physicATK: 0.044, magicATK: 0, physicDEF: 0, magicDEF: 0},
    effectExpectation: {physicATK: 0.066, magicATK: 0, physicDEF: 0, magicDEF: 0},
    effectMax: {physicATK: 0.088, magicATK: 0, physicDEF: 0, magicDEF: 0}
  },
  buffLPhysicATK20: {
    id: "buffLPhysicATK20",
    name: "戦士の輪舞曲(Ⅱ)",
    description: "2体、物攻",
    sp: 25,
    target: TARGET_TYPE.two,
    property: "physic",
    type: "buff",
    effectMin: {physicATK: 0.064, magicATK: 0, physicDEF: 0, magicDEF: 0},
    effectExpectation: {physicATK: 0.064, magicATK: 0, physicDEF: 0, magicDEF: 0},
    effectMax: {physicATK: 0.064, magicATK: 0, physicDEF: 0, magicDEF: 0}
  },
  debuffLPhysicATKDEF15: {
    id: "buffLPhysicATKDEF15",
    name: "英傑の夢想曲(Ⅲ)",
    description: "1~2体、物防物攻",
    sp: 22,
    target: TARGET_TYPE.oneOrTwo,
    property: "physic",
    type: "buff",
    effectMin: {physicATK: 0.04, magicATK: 0, physicDEF: 0.065, magicDEF: 0},
    effectExpectation: {physicATK: 0.06, magicATK: 0, physicDEF: 0.0975, magicDEF: 0},
    effectMax: {physicATK: 0.08, magicATK: 0, physicDEF: 0.13, magicDEF: 0}
  },
  buffLMagicATK10: {
    id: "buffLMagicATK10",
    name: "魔術師の円舞曲(Ⅳ)",
    description: "单体、魔攻",
    sp: 18,
    target: TARGET_TYPE.one,
    property: "magic",
    type: "buff",
    effectMin: {physicATK: 0, magicATK: 0.05, physicDEF: 0, magicDEF: 0},
    effectExpectation: {physicATK: 0, magicATK: 0.05, physicDEF: 0, magicDEF: 0},
    effectMax: {physicATK: 0, magicATK: 0.05, physicDEF: 0, magicDEF: 0}
  },
  buffLMagicATK175: {
    id: "buffLMagicATK175",
    name: "魔術師の哀歌(Ⅳ)",
    description: "单体、魔攻狼烟",
    sp: 22,
    target: TARGET_TYPE.one,
    property: "magic",
    type: "buff",
    effectMin: {physicATK: 0, magicATK: 0.05, physicDEF: 0, magicDEF: 0},
    effectExpectation: {physicATK: 0, magicATK: 0.0875, physicDEF: 0, magicDEF: 0},
    effectMax: {physicATK: 0, magicATK: 0.125, physicDEF: 0, magicDEF: 0}
  },
  buffLMagicATK15: {
    id: "buffLMagicATK15",
    name: "魔術師の輪舞曲(Ⅲ)",
    description: "1~2体、魔攻",
    sp: 21,
    target: TARGET_TYPE.oneOrTwo,
    property: "magic",
    type: "buff",
    effectMin: {physicATK: 0, magicATK: 0.044, physicDEF: 0, magicDEF: 0},
    effectExpectation: {physicATK: 0, magicATK: 0.066, physicDEF: 0, magicDEF: 0},
    effectMax: {physicATK: 0, magicATK: 0.088, physicDEF: 0, magicDEF: 0}
  },
  buffLMagicATK20: {
    id: "buffLMagicATK20",
    name: "魔術師の輪舞曲(Ⅱ)",
    description: "2体、魔攻",
    sp: 25,
    target: TARGET_TYPE.two,
    property: "magic",
    type: "buff",
    effectMin: {physicATK: 0, magicATK: 0.064, physicDEF: 0, magicDEF: 0},
    effectExpectation: {physicATK: 0, magicATK: 0.064, physicDEF: 0, magicDEF: 0},
    effectMax: {physicATK: 0, magicATK: 0.064, physicDEF: 0, magicDEF: 0}
  },
  buffLALLATK10: {
    id: "buffLALLATK10",
    name: "勇者の狂詩曲(Ⅲ)",
    description: "单体、双攻",
    sp: 18,
    target: TARGET_TYPE.one,
    property: "both",
    type: "buff",
    effectMin: {physicATK: 0.045, magicATK: 0.045, physicDEF: 0, magicDEF: 0},
    effectExpectation: {physicATK: 0.045, magicATK: 0.045, physicDEF: 0, magicDEF: 0},
    effectMax: {physicATK: 0.045, magicATK: 0.045, physicDEF: 0, magicDEF: 0}
  },
  buffLALLATK15: {
    id: "buffLALLATK15",
    name: "陽光の笛",
    description: "1~2体、双攻",
    sp: 21,
    target: TARGET_TYPE.oneOrTwo,
    property: "both",
    type: "buff",
    effectMin: {physicATK: 0.04, magicATK: 0.04, physicDEF: 0, magicDEF: 0},
    effectExpectation: {physicATK: 0.06, magicATK: 0.06, physicDEF: 0, magicDEF: 0},
    effectMax: {physicATK: 0.08, magicATK: 0.08, physicDEF: 0, magicDEF: 0}
  },
  buffLALLATK175: {
    id: "buffLALLATK175",
    name: "鳥冠の竪琴",
    description: "1~2体、双攻",
    sp: 23,
    target: TARGET_TYPE.oneOrTwo,
    property: "both",
    type: "buff",
    effectMin: {physicATK: 0.045, magicATK: 0.045, physicDEF: 0, magicDEF: 0},
    effectExpectation: {physicATK: 0.0675, magicATK: 0.0675, physicDEF: 0, magicDEF: 0},
    effectMax: {physicATK: 0.09, magicATK: 0.09, physicDEF: 0, magicDEF: 0}
  },
  buffLALLATK20: {
    id: "buffLALLATK20",
    name: "勇者の夢想曲(Ⅱ)",
    description: "2体、双攻",
    sp: 26,
    target: TARGET_TYPE.two,
    property: "both",
    type: "buff",
    effectMin: {physicATK: 0.054, magicATK: 0.054, physicDEF: 0, magicDEF: 0},
    effectExpectation: {physicATK: 0.054, magicATK: 0.054, physicDEF: 0, magicDEF: 0},
    effectMax: {physicATK: 0.054, magicATK: 0.054, physicDEF: 0, magicDEF: 0}
  },
  buffLPhysicDEF15: {
    id: "buffLPhysicDEF15",
    name: "騎士の夜想曲(Ⅲ)",
    description: "1~2体、物防",
    sp: 21,
    target: TARGET_TYPE.oneOrTwo,
    type: "buff",
    effectMin: {physicATK: 0, magicATK: 0, physicDEF: 0.072, magicDEF: 0},
    effectExpectation: {physicATK: 0, magicATK: 0, physicDEF: 0.108, magicDEF: 0},
    effectMax: {physicATK: 0, magicATK: 0, physicDEF: 0.144, magicDEF: 0}
  },
  buffLMagicDEF10: {
    id: "buffLMagicDEF10",
    name: "結界師の小夜曲(Ⅳ)",
    description: "1体、魔防",
    sp: 18,
    target: TARGET_TYPE.one,
    type: "buff",
    effectMin: {physicATK: 0, magicATK: 0, physicDEF: 0, magicDEF: 0.086},
    effectExpectation: {physicATK: 0, magicATK: 0, physicDEF: 0, magicDEF: 0.086},
    effectMax: {physicATK: 0, magicATK: 0, physicDEF: 0, magicDEF: 0.086}
  },
  buffLMagicDEF15: {
    id: "buffLMagicDEF15",
    name: "結界師の夜想曲(Ⅲ)",
    description: "1~2体、魔防",
    sp: 21,
    target: TARGET_TYPE.oneOrTwo,
    type: "buff",
    effectMin: {physicATK: 0, magicATK: 0, physicDEF: 0, magicDEF: 0.072},
    effectExpectation: {physicATK: 0, magicATK: 0, physicDEF: 0, magicDEF: 0.108},
    effectMax: {physicATK: 0, magicATK: 0, physicDEF: 0, magicDEF: 0.144}
  },
  buffLMagicDEF20: {
    id: "buffLMagicDEF20",
    name: "結界師の夜想曲(Ⅱ)",
    description: "2体、魔防",
    sp: 25,
    target: TARGET_TYPE.two,
    type: "buff",
    effectMin: {physicATK: 0, magicATK: 0, physicDEF: 0, magicDEF: 0.114},
    effectExpectation: {physicATK: 0, magicATK: 0, physicDEF: 0, magicDEF: 0.114},
    effectMax: {physicATK: 0, magicATK: 0, physicDEF: 0, magicDEF: 0.114}
  },
  buffLAllDEF10: {
    id: "buffLAllDEF10",
    name: "聖騎士の賛美歌(Ⅲ)",
    description: "1体、双防",
    sp: 18,
    target: TARGET_TYPE.one,
    type: "buff",
    effectMin: {physicATK: 0, magicATK: 0, physicDEF: 0.08, magicDEF: 0.08},
    effectExpectation: {physicATK: 0, magicATK: 0, physicDEF: 0.08, magicDEF: 0.08},
    effectMax: {physicATK: 0, magicATK: 0, physicDEF: 0.08, magicDEF: 0.08}
  },
  buffLAllDEF15: {
    id: "buffLAllDEF15",
    name: "聖騎士の福音歌(Ⅲ)",
    description: "1~2体、双防",
    sp: 22,
    target: TARGET_TYPE.oneOrTwo,
    type: "buff",
    effectMin: {physicATK: 0, magicATK: 0, physicDEF: 0.0525, magicDEF: 0.0525},
    effectExpectation: {physicATK: 0, magicATK: 0, physicDEF: 0.0975, magicDEF: 0.0975},
    effectMax: {physicATK: 0, magicATK: 0, physicDEF: 0.13, magicDEF: 0.13}
  },
  buffLAllDEF201: {
    id: "buffLAllDEF201",
    name: "鱗片の提琴&古代王朝の提琴",
    description: "2体、双防",
    sp: 25,
    target: TARGET_TYPE.two,
    type: "buff",
    effectMin: {physicATK: 0, magicATK: 0, physicDEF: 0.104, magicDEF: 0.104},
    effectExpectation: {physicATK: 0, magicATK: 0, physicDEF: 0.104, magicDEF: 0.104},
    effectMax: {physicATK: 0, magicATK: 0, physicDEF: 0.104, magicDEF: 0.104}
  },
  buffLAllDEF202: {
    id: "buffLAllDEF202",
    name: "虚妄の提琴",
    description: "2体、双防",
    sp: 25,
    target: TARGET_TYPE.two,
    type: "buff",
    effectMin: {physicATK: 0, magicATK: 0, physicDEF: 0.11, magicDEF: 0.11},
    effectExpectation: {physicATK: 0, magicATK: 0, physicDEF: 0.11, magicDEF: 0.11},
    effectMax: {physicATK: 0, magicATK: 0, physicDEF: 0.11, magicDEF: 0.11}
  },
  buffLAllDEF203: {
    id: "buffLAllDEF203",
    name: "悪兎の道しるべ",
    description: "2体、双防",
    sp: 26,
    target: TARGET_TYPE.two,
    type: "buff",
    effectMin: {physicATK: 0, magicATK: 0, physicDEF: 0.12, magicDEF: 0.12},
    effectExpectation: {physicATK: 0, magicATK: 0, physicDEF: 0.12, magicDEF: 0.12},
    effectMax: {physicATK: 0, magicATK: 0, physicDEF: 0.12, magicDEF: 0.12}
  }
};
var PASSIVE_SKILL_TYPE = {
  BUFF_UP: "buffUp",
  STATUS_UP: "status_up",
  GAY: "gay"
};
var PASSIVE_SKILL_DB = {
  none: {
    id: "none",
    name:"无"
  },
  buffUp10: {
    id: "buffUp10",
    name: "補助支援(壱)",
    type: PASSIVE_SKILL_TYPE.BUFF_UP,
    basicEffect: {max: 0.1, expectation: 0.1, min: 0.1}
  },
  buffUp20: {
    id: "buffUp20",
    name: "補助支援(弐)",
    type: PASSIVE_SKILL_TYPE.BUFF_UP,
    basicEffect: {max: 0.15, expectation: 0.15, min: 0.15}
  },
  buffUp25: {
    id: "buffUp25",
    name: "起死回生(弐)",
    type: PASSIVE_SKILL_TYPE.BUFF_UP,
    basicEffect: {max: 0.3, expectation: 0.225, min: 0.15}
  },
  buffUp30: {
    id: "buffUp30",
    name: "補助支援(参)",
    type: PASSIVE_SKILL_TYPE.BUFF_UP,
    basicEffect: {max: 0.2, expectation: 0.2, min: 0.2}
  },
  physicATK20: {
    id: "physicATK20",
    name: "刀刃展開(Ⅱ)",
    target: TARGET_TYPE.randomOne,
    property:"physic",
    type: PASSIVE_SKILL_TYPE.STATUS_UP,
    effectMin: {physicATK: 0.0034, magicATK: 0, physicDEF: 0, magicDEF: 0},
    effectExpectation: {physicATK: 0.0102, magicATK: 0, physicDEF: 0, magicDEF: 0},
    effectMax: {physicATK: 0.017, magicATK: 0, physicDEF: 0, magicDEF: 0}
  },
  magicATK10: {
    id: "magicATK10",
    name: "方陣展開(Ⅰ)",
    target: TARGET_TYPE.randomOne,
    property:"magic",
    type: PASSIVE_SKILL_TYPE.STATUS_UP,
    effectMin: {physicATK: 0, magicATK: 0.0027, physicDEF: 0, magicDEF: 0},
    effectExpectation: {physicATK: 0, magicATK: 0.0081, physicDEF: 0, magicDEF: 0},
    effectMax: {physicATK: 0, magicATK: 0.0135, physicDEF: 0, magicDEF: 0}
  },
  allATK10: {
    id: "allATK10",
    name: "武器補修(Ⅰ)",
    property:"both",
    type: PASSIVE_SKILL_TYPE.STATUS_UP,
    effectMin: {physicATK: 0.0024, magicATK: 0.0024, physicDEF: 0, magicDEF: 0},
    effectExpectation: {physicATK: 0.0072, magicATK: 0.0072, physicDEF: 0, magicDEF: 0},
    effectMax: {physicATK: 0.012, magicATK: 0.012, physicDEF: 0, magicDEF: 0}
  },
  debuffAllATK10: {
    id: "debuffAllATK10",
    name: "武器破壊(Ⅰ)",
    property:"both",
    type: PASSIVE_SKILL_TYPE.STATUS_DOWN,
    effectMin: {physicATK: 0.0024, magicATK: 0.0024, physicDEF: 0, magicDEF: 0},
    effectExpectation: {physicATK: 0.0072, magicATK: 0.0072, physicDEF: 0, magicDEF: 0},
    effectMax: {physicATK: 0.012, magicATK: 0.012, physicDEF: 0, magicDEF: 0}
  },
  allATK20: {
    id: "allATK20",
    name: "武器補修(Ⅱ)",
    property:"both",
    type: PASSIVE_SKILL_TYPE.STATUS_UP,
    effectMin: {physicATK: 0.0033, magicATK: 0.0033, physicDEF: 0, magicDEF: 0},
    effectExpectation: {physicATK: 0.0099, magicATK: 0.0099, physicDEF: 0, magicDEF: 0},
    effectMax: {physicATK: 0.0165, magicATK: 0.0165, physicDEF: 0, magicDEF: 0}
  },
  physicDEF10: {
    id: "physicDEF10",
    name: "鉄盾展開(Ⅰ)",
    type: PASSIVE_SKILL_TYPE.STATUS_UP,
    effectMin: {physicATK: 0, magicATK: 0, physicDEF: 0.004, magicDEF: 0},
    effectExpectation: {physicATK: 0, magicATK: 0, physicDEF: 0.012, magicDEF: 0},
    effectMax: {physicATK: 0, magicATK: 0, physicDEF: 0.02, magicDEF: 0}
  },
  physicDEF20: {
    id: "physicDEF20",
    name: "鉄盾展開(Ⅱ)",
    type: PASSIVE_SKILL_TYPE.STATUS_UP,
    effectMin: {physicATK: 0, magicATK: 0, physicDEF: 0.006, magicDEF: 0},
    effectExpectation: {physicATK: 0, magicATK: 0, physicDEF: 0.018, magicDEF: 0},
    effectMax: {physicATK: 0, magicATK: 0, physicDEF: 0.03, magicDEF: 0}
  },
  allDEF10: {
    id: "allDEF10",
    name: "防具補修(Ⅰ)",
    type: PASSIVE_SKILL_TYPE.STATUS_UP,
    effectMin: {physicATK: 0, magicATK: 0, physicDEF: 0.004, magicDEF: 0.004},
    effectExpectation: {physicATK: 0, magicATK: 0, physicDEF: 0.012, magicDEF: 0.012},
    effectMax: {physicATK: 0, magicATK: 0, physicDEF: 0.02, magicDEF: 0.02}
  },
  allDEF20: {
    id: "allDEF20",
    name: "防具補修(Ⅱ)",
    type: PASSIVE_SKILL_TYPE.STATUS_UP,
    effectMin: {physicATK: 0, magicATK: 0, physicDEF: 0.006, magicDEF: 0.006},
    effectExpectation: {physicATK: 0, magicATK: 0, physicDEF: 0.018, magicDEF: 0.018},
    effectMax: {physicATK: 0, magicATK: 0, physicDEF: 0.03, magicDEF: 0.03}
  },
  mahouGay10: {
    id: "mahouGay10",
    name: "魔力供給(壱)",
    type: PASSIVE_SKILL_TYPE.GAY,
    effect: 0.8
  },
  mahouGay20: {
    id: "mahouGay20",
    name: "魔力供給(弐)",
    type: PASSIVE_SKILL_TYPE.GAY,
    effect: 0.7
  }
};