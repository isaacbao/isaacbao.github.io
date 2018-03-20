/**
 * Created by Administrator on 2018/3/19.
 */
var TARGET_TYPE = {
    one: 1,
    oneOrTwo: 1.5,
    two: 2
};
var ACTIVE_SKILL_DB = {
    debuffLMagicATK10: {
        id: "debuffLMagicATK10",
        name: "衰弱ノ呪詛(Ⅳ)",
        description: "单体、魔攻",
        sp: 18,
        target: TARGET_TYPE.one,
        property: "magic",
        type: "debuff",
        effectMin: {physicATK: 0, magicATK: 0.054, physicDEF: 0, magicDEF: 0},
        effectExpectation: {physicATK: 0, magicATK: 0.054, physicDEF: 0, magicDEF: 0},
        effectMax: {physicATK: 0, magicATK: 0.054, physicDEF: 0, magicDEF: 0}
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
        effectMax: {physicATK: 0, magicATK: 0.088, physicDEF: 0, magicDEF: 0}
    },
    debuffLMagicATK20: {
        id: "debuffLMagicATK20",
        name: "衰弱ノ呪術(Ⅱ)",
        description: "2体、魔攻",
        sp: 25,
        target: TARGET_TYPE.two,
        property: "magic",
        type: "debuff",
        effectMin: {physicATK: 0, magicATK: 0.072, physicDEF: 0, magicDEF: 0},
        effectExpectation: {physicATK: 0, magicATK: 0.072, physicDEF: 0, magicDEF: 0},
        effectMax: {physicATK: 0, magicATK: 0.072, physicDEF: 0, magicDEF: 0}
    },
    debuffLMagicATKDEF15: {
        id: "debuffLMagicATKDEF15",
        name: "破魔ノ呪術(Ⅲ)",
        description: "1~2体、魔防魔攻",
        sp: 22,
        target: TARGET_TYPE.oneOrTwo,
        property: "magic",
        type: "debuff",
        effectMin: {physicATK: 0, magicATK: 0.044, physicDEF: 0, magicDEF: 0.072},
        effectExpectation: {physicATK: 0, magicATK: 0.066, physicDEF: 0, magicDEF: 0.108},
        effectMax: {physicATK: 0, magicATK: 0.088, physicDEF: 0, magicDEF: 0.144}
    },
    debuffLPhysicATK10: {
        id: "debuffLPhysicATK10",
        name: "刀錆ノ呪詛(Ⅳ)",
        description: "单体、物攻",
        sp: 18,
        target: TARGET_TYPE.one,
        property: "physic",
        type: "debuff",
        effectMin: {physicATK: 0.054, magicATK: 0, physicDEF: 0, magicDEF: 0},
        effectExpectation: {physicATK: 0.054, magicATK: 0, physicDEF: 0, magicDEF: 0},
        effectMax: {physicATK: 0.054, magicATK: 0, physicDEF: 0, magicDEF: 0}
    },
    debuffLPhysicATKDEF10: {
        id: "debuffLPhysicATKDEF10",
        name: "枷鎖ノ呪詛(Ⅲ)",
        description: "单体、物攻物防",
        sp: 19,
        target: TARGET_TYPE.one,
        property: "physic",
        type: "debuff",
        effectMin: {physicATK: 0.049, magicATK: 0, physicDEF: 0.088, magicDEF: 0},
        effectExpectation: {physicATK: 0.049, magicATK: 0, physicDEF: 0.088, magicDEF: 0},
        effectMax: {physicATK: 0.049, magicATK: 0, physicDEF: 0.088, magicDEF: 0}
    },
    debuffLPhysicATKDEF15: {
        id: "debuffLPhysicATKDEF15",
        name: "枷鎖ノ呪術(Ⅲ)",
        description: "1~2体、物防物攻",
        sp: 22,
        target: TARGET_TYPE.oneOrTwo,
        property: "physic",
        type: "debuff",
        effectMin: {physicATK: 0.044, magicATK: 0, physicDEF: 0.072, magicDEF: 0},
        effectExpectation: {physicATK: 0.066, magicATK: 0, physicDEF: 0.108, magicDEF: 0},
        effectMax: {physicATK: 0.088, magicATK: 0, physicDEF: 0.144, magicDEF: 0}
    },
    debuffLAllATK15: {
        id: "debuffLAllATK15",
        name: "腐蝕ノ呪術(Ⅲ)",
        description: "1~2体、物攻魔攻",
        sp: 22,
        target: TARGET_TYPE.oneOrTwo,
        property: "both",
        type: "debuff",
        effectMin: {physicATK: 0.044, magicATK: 0.044, physicDEF: 0, magicDEF: 0},
        effectExpectation: {physicATK: 0.066, magicATK: 0.066, physicDEF: 0, magicDEF: 0},
        effectMax: {physicATK: 0.088, magicATK: 0.088, physicDEF: 0, magicDEF: 0}
    },
    debuffLAllATK10: {
        id: "debuffLAllATK10",
        name: "腐蝕ノ呪詛(Ⅲ)",
        description: "1体、物攻魔攻",
        sp: 18,
        target: TARGET_TYPE.one,
        property: "both",
        type: "debuff",
        effectMin: {physicATK: 0.051, magicATK: 0.051, physicDEF: 0, magicDEF: 0},
        effectExpectation: {physicATK: 0.051, magicATK: 0.051, physicDEF: 0, magicDEF: 0},
        effectMax: {physicATK: 0.051, magicATK: 0.051, physicDEF: 0, magicDEF: 0}
    },
    debuffLAllDEF10: {
        id: "debuffLAllDEF10",
        name: "落城ノ呪詛(Ⅲ)",
        description: "单体、物防魔防",
        sp: 19,
        target: TARGET_TYPE.one,
        property: "both",
        type: "debuff",
        effectMin: {physicATK: 0, magicATK: 0, physicDEF: 0.088, magicDEF: 0.088},
        effectExpectation: {physicATK: 0, magicATK: 0, physicDEF: 0.088, magicDEF: 0.088},
        effectMax: {physicATK: 0, magicATK: 0, physicDEF: 0.088, magicDEF: 0.088}
    },
    debuffLAllDEF15: {
        id: "debuffLAllDEF15",
        name: "落城ノ呪術(Ⅲ)",
        description: "1~2体、物防魔防",
        sp: 22,
        target: TARGET_TYPE.oneOrTwo,
        property: "both",
        type: "debuff",
        effectMin: {physicATK: 0, magicATK: 0, physicDEF: 0.072, magicDEF: 0.072},
        effectExpectation: {physicATK: 0, magicATK: 0, physicDEF: 0.108, magicDEF: 0.108},
        effectMax: {physicATK: 0, magicATK: 0, physicDEF: 0.144, magicDEF: 0.144}
    },
    debuffLPhysicDEF20: {
        id: "debuffLPhysicDEF20",
        name: "壊壁ノ呪術(Ⅱ)",
        description: "2体、物防",
        sp: 25,
        target: TARGET_TYPE.two,
        property: "physic",
        type: "debuff",
        effectMin: {physicATK: 0, magicATK: 0, physicDEF: 0.124, magicDEF: 0},
        effectExpectation: {physicATK: 0, magicATK: 0, physicDEF: 0.124, magicDEF: 0},
        effectMax: {physicATK: 0, magicATK: 0, physicDEF: 0.124, magicDEF: 0}
    },
    debuffLPhysicDEF15: {
        id: "debuffLPhysicDEF15",
        name: "壊壁ノ呪術(Ⅲ)",
        description: "1~2体、物防",
        sp: 21,
        target: TARGET_TYPE.oneOrTwo,
        property: "physic",
        type: "debuff",
        effectMin: {physicATK: 0, magicATK: 0, physicDEF: 0.079, magicDEF: 0},
        effectExpectation: {physicATK: 0, magicATK: 0, physicDEF: 0.1135, magicDEF: 0},
        effectMax: {physicATK: 0, magicATK: 0, physicDEF: 0.158, magicDEF: 0}
    },
    debuffLPhysicDEF10: {
        id: "debuffLPhysicDEF10",
        name: "壊壁ノ呪詛(Ⅳ)",
        description: "单体、物防",
        sp: 18,
        target: TARGET_TYPE.one,
        property: "physic",
        type: "debuff",
        effectMin: {physicATK: 0, magicATK: 0, physicDEF: 0.095, magicDEF: 0},
        effectExpectation: {physicATK: 0, magicATK: 0, physicDEF: 0.095, magicDEF: 0},
        effectMax: {physicATK: 0, magicATK: 0, physicDEF: 0.095, magicDEF: 0}
    },
    debuffLMagicDEF20: {
        id: "debuffLMagicDEF20",
        name: "解魔ノ呪術(Ⅱ)",
        description: "2体、魔防",
        sp: 25,
        target: TARGET_TYPE.two,
        property: "magic",
        type: "debuff",
        effectMin: {physicATK: 0, magicATK: 0, physicDEF: 0, magicDEF: 0.124},
        effectExpectation: {physicATK: 0, magicATK: 0, physicDEF: 0, magicDEF: 0.124},
        effectMax: {physicATK: 0, magicATK: 0, physicDEF: 0, magicDEF: 0.124}
    },
    debuffLMagicDEF15: {
        id: "debuffLMagicDEF15",
        name: "解魔ノ呪術(Ⅲ)",
        description: "1~2体、魔防",
        sp: 21,
        target: TARGET_TYPE.oneOrTwo,
        property: "magic",
        type: "debuff",
        effectMin: {physicATK: 0, magicATK: 0, physicDEF: 0, magicDEF: 0.079},
        effectExpectation: {physicATK: 0, magicATK: 0, physicDEF: 0, magicDEF: 0.1135},
        effectMax: {physicATK: 0, magicATK: 0, physicDEF: 0, magicDEF: 0.158}
    },
    debuffLMagicDEF10: {
        id: "debuffLMagicDEF10",
        name: "解魔ノ呪詛(Ⅳ)",
        description: "单体、魔防",
        sp: 18,
        target: TARGET_TYPE.one,
        property: "magic",
        type: "debuff",
        effectMin: {physicATK: 0, magicATK: 0, physicDEF: 0, magicDEF: 0.095},
        effectExpectation: {physicATK: 0, magicATK: 0, physicDEF: 0, magicDEF: 0.095},
        effectMax: {physicATK: 0, magicATK: 0, physicDEF: 0, magicDEF: 0.095}
    },
    buffLPhysicATK10: {
        id: "buffLPhysicATK10",
        name: "戦士の円舞曲(Ⅳ)",
        description: "单体、物攻",
        sp: 18,
        target: TARGET_TYPE.one,
        property: "physic",
        type: "buff",
        effectMin: {physicATK: 0.054, magicATK: 0, physicDEF: 0, magicDEF: 0},
        effectExpectation: {physicATK: 0.054, magicATK: 0, physicDEF: 0, magicDEF: 0},
        effectMax: {physicATK: 0.054, magicATK: 0, physicDEF: 0, magicDEF: 0}
    },
    buffLPhysicATK175: {
        id: "buffLPhysicATK175",
        name: "戦士の哀歌(Ⅳ)",
        description: "单体、物攻狼烟",
        sp: 22,
        target: TARGET_TYPE.one,
        property: "physic",
        type: "buff",
        effectMin: {physicATK: 0.054, magicATK: 0, physicDEF: 0, magicDEF: 0},
        effectExpectation: {physicATK: 0.0945, magicATK: 0, physicDEF: 0, magicDEF: 0},
        effectMax: {physicATK: 0.135, magicATK: 0, physicDEF: 0, magicDEF: 0}
    },
    buffLPhysicATK15: {
        id: "buffLPhysicATK15",
        name: "戦士の輪舞曲(Ⅲ)",
        description: "1~2体、物攻",
        sp: 21,
        target: TARGET_TYPE.oneOrTwo,
        property: "physic",
        type: "buff",
        effectMin: {physicATK: 0.048, magicATK: 0, physicDEF: 0, magicDEF: 0},
        effectExpectation: {physicATK: 0.072, magicATK: 0, physicDEF: 0, magicDEF: 0},
        effectMax: {physicATK: 0.096, magicATK: 0, physicDEF: 0, magicDEF: 0}
    },
    buffLPhysicATK20: {
        id: "buffLPhysicATK20",
        name: "戦士の輪舞曲(Ⅱ)",
        description: "2体、物攻",
        sp: 25,
        target: TARGET_TYPE.two,
        property: "physic",
        type: "buff",
        effectMin: {physicATK: 0.072, magicATK: 0, physicDEF: 0, magicDEF: 0},
        effectExpectation: {physicATK: 0.072, magicATK: 0, physicDEF: 0, magicDEF: 0},
        effectMax: {physicATK: 0.072, magicATK: 0, physicDEF: 0, magicDEF: 0}
    },
    buffLMagicATK10: {
        id: "buffLMagicATK10",
        name: "魔術師の円舞曲(Ⅳ)",
        description: "单体、魔攻",
        sp: 18,
        target: TARGET_TYPE.one,
        property: "magic",
        type: "buff",
        effectMin: {physicATK: 0, magicATK: 0.054, physicDEF: 0, magicDEF: 0},
        effectExpectation: {physicATK: 0, magicATK: 0.054, physicDEF: 0, magicDEF: 0},
        effectMax: {physicATK: 0, magicATK: 0.054, physicDEF: 0, magicDEF: 0}
    },
    buffLMagicATK175: {
        id: "buffLMagicATK175",
        name: "魔術師の哀歌(Ⅳ)",
        description: "单体、魔攻狼烟",
        sp: 22,
        target: TARGET_TYPE.one,
        property: "magic",
        type: "buff",
        effectMin: {physicATK: 0, magicATK: 0.054, physicDEF: 0, magicDEF: 0},
        effectExpectation: {physicATK: 0, magicATK: 0.0945, physicDEF: 0, magicDEF: 0},
        effectMax: {physicATK: 0, magicATK: 0.135, physicDEF: 0, magicDEF: 0}
    },
    buffLMagicATK15: {
        id: "buffLMagicATK15",
        name: "魔術師の輪舞曲(Ⅲ)",
        description: "1~2体、魔攻",
        sp: 21,
        target: TARGET_TYPE.oneOrTwo,
        property: "magic",
        type: "buff",
        effectMin: {physicATK: 0, magicATK: 0.048, physicDEF: 0, magicDEF: 0},
        effectExpectation: {physicATK: 0, magicATK: 0.072, physicDEF: 0, magicDEF: 0},
        effectMax: {physicATK: 0, magicATK: 0.096, physicDEF: 0, magicDEF: 0}
    },
    buffLMagicATK20: {
        id: "buffLMagicATK20",
        name: "魔術師の輪舞曲(Ⅱ)",
        description: "2体、魔攻",
        sp: 25,
        target: TARGET_TYPE.two,
        property: "magic",
        type: "buff",
        effectMin: {physicATK: 0, magicATK: 0.072, physicDEF: 0, magicDEF: 0},
        effectExpectation: {physicATK: 0, magicATK: 0.072, physicDEF: 0, magicDEF: 0},
        effectMax: {physicATK: 0, magicATK: 0.072, physicDEF: 0, magicDEF: 0}
    },
    buffLALLATK10: {
        id: "buffLALLATK10",
        name: "勇者の狂詩曲(Ⅲ)",
        description: "单体、双攻",
        sp: 18,
        target: TARGET_TYPE.one,
        property: "both",
        type: "buff",
        effectMin: {physicATK: 0.05, magicATK: 0.05, physicDEF: 0, magicDEF: 0},
        effectExpectation: {physicATK: 0.05, magicATK: 0.05, physicDEF: 0, magicDEF: 0},
        effectMax: {physicATK: 0.05, magicATK: 0.05, physicDEF: 0, magicDEF: 0}
    },
    buffLALLATK15: {
        id: "buffLALLATK15",
        name: "勇者の夢想曲(Ⅲ)",
        description: "1~2体、双攻",
        sp: 21,
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
        effectMin: {physicATK: 0.064, magicATK: 0.064, physicDEF: 0, magicDEF: 0},
        effectExpectation: {physicATK: 0.064, magicATK: 0.064, physicDEF: 0, magicDEF: 0},
        effectMax: {physicATK: 0.064, magicATK: 0.064, physicDEF: 0, magicDEF: 0}
    },
    buffLPhysicDEF15: {
        id: "buffLPhysicDEF15",
        name: "騎士の夜想曲(Ⅲ)",
        description: "1~2体、物防",
        sp: 21,
        target: TARGET_TYPE.oneOrTwo,
        type: "buff",
        effectMin: {physicATK: 0, magicATK: 0, physicDEF: 0.08, magicDEF: 0},
        effectExpectation: {physicATK: 0, magicATK: 0, physicDEF: 0.12, magicDEF: 0},
        effectMax: {physicATK: 0, magicATK: 0, physicDEF: 0.16, magicDEF: 0}
    },
    buffLMagicDEF10: {
        id: "buffLMagicDEF10",
        name: "結界師の小夜曲(Ⅳ)",
        description: "1体、魔防",
        sp: 18,
        target: TARGET_TYPE.one,
        type: "buff",
        effectMin: {physicATK: 0, magicATK: 0, physicDEF: 0, magicDEF: 0.095},
        effectExpectation: {physicATK: 0, magicATK: 0, physicDEF: 0, magicDEF: 0.095},
        effectMax: {physicATK: 0, magicATK: 0, physicDEF: 0, magicDEF: 0.095}
    },
    buffLMagicDEF15: {
        id: "buffLMagicDEF15",
        name: "結界師の夜想曲(Ⅲ)",
        description: "1~2体、魔防",
        sp: 21,
        target: TARGET_TYPE.oneOrTwo,
        type: "buff",
        effectMin: {physicATK: 0, magicATK: 0, physicDEF: 0, magicDEF: 0.08},
        effectExpectation: {physicATK: 0, magicATK: 0, physicDEF: 0, magicDEF: 0.12},
        effectMax: {physicATK: 0, magicATK: 0, physicDEF: 0, magicDEF: 0.16}
    },
    buffLMagicDEF20: {
        id: "buffLMagicDEF20",
        name: "結界師の夜想曲(Ⅱ)",
        description: "2体、魔防",
        sp: 25,
        target: TARGET_TYPE.two,
        type: "buff",
        effectMin: {physicATK: 0, magicATK: 0, physicDEF: 0, magicDEF: 0.124},
        effectExpectation: {physicATK: 0, magicATK: 0, physicDEF: 0, magicDEF: 0.124},
        effectMax: {physicATK: 0, magicATK: 0, physicDEF: 0, magicDEF: 0.124}
    },
    buffLAllDEF10: {
        id: "buffLAllDEF10",
        name: "聖騎士の賛美歌(Ⅲ)",
        description: "1体、双防",
        sp: 18,
        target: TARGET_TYPE.one,
        type: "buff",
        effectMin: {physicATK: 0, magicATK: 0, physicDEF: 0.088, magicDEF: 0.088},
        effectExpectation: {physicATK: 0, magicATK: 0, physicDEF: 0.088, magicDEF: 0.088},
        effectMax: {physicATK: 0, magicATK: 0, physicDEF: 0.088, magicDEF: 0.088}
    },
    buffLAllDEF15: {
        id: "buffLAllDEF15",
        name: "聖騎士の福音歌(Ⅲ)",
        description: "1~2体、双防",
        sp: 22,
        target: TARGET_TYPE.oneOrTwo,
        type: "buff",
        effectMin: {physicATK: 0, magicATK: 0, physicDEF: 0.072, magicDEF: 0.072},
        effectExpectation: {physicATK: 0, magicATK: 0, physicDEF: 0.108, magicDEF: 0.108},
        effectMax: {physicATK: 0, magicATK: 0, physicDEF: 0.144, magicDEF: 0.144}
    },
    buffLAllDEF20: {
        id: "buffLAllDEF20",
        name: "聖騎士の福音歌(Ⅱ)",
        description: "2体、双防",
        sp: 25,
        target: TARGET_TYPE.two,
        type: "buff",
        effectMin: {physicATK: 0, magicATK: 0, physicDEF: 0.12, magicDEF: 0.12},
        effectExpectation: {physicATK: 0, magicATK: 0, physicDEF: 0.12, magicDEF: 0.12},
        effectMax: {physicATK: 0, magicATK: 0, physicDEF: 0.12, magicDEF: 0.12}
    },
    none: {
        id: "none",
        name: "空",
        description: "没有技能",
        sp: 0,
        target: TARGET_TYPE.one,
        property: "magic",
        type: "debuff",
        effectMin: {physicATK: 0, magicATK: 0, physicDEF: 0, magicDEF: 0},
        effectExpectation: {physicATK: 0, magicATK: 0, physicDEF: 0, magicDEF: 0},
        effectMax: {physicATK: 0, magicATK: 0, physicDEF: 0, magicDEF: 0}
    }

};
var PASSIVE_SKILL_TYPE = {
    BUFF_UP: "buffUp",
    STATUS_UP: "status_up",
    GAY: "gay"
};
var PASSIVE_SKILL_DB = {
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
        basicEffect: {max: 0.2, expectation: 0.2, min: 0.2}
    },
    buffUp25: {
        id: "buffUp25",
        name: "起死回生(弐)",
        type: PASSIVE_SKILL_TYPE.BUFF_UP,
        basicEffect: {max: 0.3, expectation: 0.25, min: 0.20}
    },
    buffUp30: {
        id: "buffUp30",
        name: "補助支援(参)",
        type: PASSIVE_SKILL_TYPE.BUFF_UP,
        basicEffect: {max: 0.3, expectation: 0.3, min: 0.3}
    },
    physicATK20: {
        id: "physicATK20",
        name: "刀刃展開(Ⅱ)",
        type: PASSIVE_SKILL_TYPE.STATUS_UP,
        effectMin: {physicATK: 0.0037, magicATK: 0, physicDEF: 0, magicDEF: 0},
        effectExpectation: {physicATK: 0.0111, magicATK: 0, physicDEF: 0, magicDEF: 0},
        effectMax: {physicATK: 0.0185, magicATK: 0, physicDEF: 0, magicDEF: 0}
    },
    magicATK10: {
        id: "magicATK10",
        name: "方陣展開(Ⅰ)",
        type: PASSIVE_SKILL_TYPE.STATUS_UP,
        effectMin: {physicATK: 0, magicATK: 0.0027, physicDEF: 0, magicDEF: 0},
        effectExpectation: {physicATK: 0, magicATK: 0.0081, physicDEF: 0, magicDEF: 0},
        effectMax: {physicATK: 0, magicATK: 0.0135, physicDEF: 0, magicDEF: 0}
    },
    allATK20: {
        id: "allATK20",
        name: "武器補修(Ⅱ)",
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