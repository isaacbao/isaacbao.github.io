/**
 * Created by Administrator on 2018/3/19.
 */
function calculateEffectiveness(coefficient, status, buffUps, passiveSkillCoefficient, jobAddition) {
  var buffUpEffective = 1;
  buffUps.forEach(function (buffUp) {
    buffUpEffective += buffUp.effect * buffUp.toggleRate;
  });
  var otherAddition = buffUpEffective * jobAddition;

  var passiveStatusChangeEffect = {
    physicATK: 0,
    physicDEF: 0,
    magicATK: 0,
    magicDEF: 0,
    effectivePhysicATK: 0,
    effectiveMagicATK: 0,
  };
  if (passiveSkillCoefficient) {
    passiveStatusChangeEffect.physicATK += Math.floor(passiveSkillCoefficient.exceptedPhysicATK * status.physicATK);
    passiveStatusChangeEffect.physicDEF += Math.floor(passiveSkillCoefficient.exceptedPhysicDEF * status.physicDEF);
    passiveStatusChangeEffect.magicATK += Math.floor(passiveSkillCoefficient.exceptedMagicATK * status.magicATK);
    passiveStatusChangeEffect.magicDEF += Math.floor(passiveSkillCoefficient.exceptedMagicDEF * status.magicDEF);
    passiveStatusChangeEffect.effectivePhysicATK += Math.floor(passiveSkillCoefficient.exceptedEffectivePhysicATK * status.physicATK);
    passiveStatusChangeEffect.effectiveMagicATK += Math.floor(passiveSkillCoefficient.exceptedEffectiveMagicATK * status.magicATK);
  }

  var result = {
    physicATK: Math.floor(coefficient.exceptedPhysicATK * status.physicATK * otherAddition) + passiveStatusChangeEffect.physicATK,
    physicDEF: Math.floor(coefficient.exceptedPhysicDEF * status.physicDEF * otherAddition) + passiveStatusChangeEffect.physicDEF,
    magicATK: Math.floor(coefficient.exceptedMagicATK * status.magicATK * otherAddition) + passiveStatusChangeEffect.magicATK,
    magicDEF: Math.floor(coefficient.exceptedMagicDEF * status.magicDEF * otherAddition) + passiveStatusChangeEffect.magicDEF,
    effectivePhysicATK: Math.floor(coefficient.exceptedEffectivePhysicATK * status.physicATK * otherAddition) + passiveStatusChangeEffect.effectivePhysicATK,
    effectiveMagicATK: Math.floor(coefficient.exceptedEffectiveMagicATK * status.magicATK * otherAddition) + passiveStatusChangeEffect.effectiveMagicATK,
  };
  return result;
}

function calculateEffectiveDEF(effectiveness, physicDPS, magicDPS) {
  var physicProb = physicDPS / 5;
  var magicProb = magicDPS / 5;
  effectiveness.effectivePhysicDEF = effectiveness.physicDEF * physicProb;
  effectiveness.effectiveMagicDEF = effectiveness.magicDEF * magicProb;
  return effectiveness;
}

function showDebuff(result) {
  document.getElementById("debuff-physic-ATK-effect").innerText = result.physicATK;
  document.getElementById("debuff-physic-DEF-effect").innerText = result.physicDEF;
  document.getElementById("debuff-magic-ATK-effect").innerText = result.magicATK;
  document.getElementById("debuff-magic-DEF-effect").innerText = result.magicDEF;
  document.getElementById("debuff-effective-physic-ATK-effect").innerText = result.effectivePhysicATK;
  document.getElementById("debuff-effective-magic-ATK-effect").innerText = result.effectiveMagicATK;
  document.getElementById("debuff-effective-physic-DEF-effect").innerText = Math.floor(result.effectivePhysicDEF) + "";
  document.getElementById("debuff-effective-magic-DEF-effect").innerText = Math.floor(result.effectiveMagicDEF) + "";
  var sumDebuffATK = result.physicATK + result.magicATK;
  var sumDebuffDEF = result.physicDEF + result.magicDEF;
  document.getElementById("debuff-ATK-effect").innerText = sumDebuffATK;
  document.getElementById("debuff-DEF-effect").innerText = result.physicDEF + result.magicDEF;
  document.getElementById("sum-debuff-effect").innerText = sumDebuffATK * 1.4 + sumDebuffDEF;

  var sumEffectiveDebuffATK = Math.floor(result.effectivePhysicATK + result.effectiveMagicATK);
  var sumEffectiveDebuffDEF = Math.floor(result.effectivePhysicDEF + result.effectiveMagicDEF);
  document.getElementById("effective-debuff-ATK-effect").innerText = sumEffectiveDebuffATK + "";
  document.getElementById("effective-debuff-DEF-effect").innerText = sumEffectiveDebuffDEF + "";

  document.getElementById("sum-effective-debuff-effect").innerText = Math.floor(sumEffectiveDebuffATK * 1.4 + sumEffectiveDebuffDEF) + "";
}

function showBuff(result) {
  document.getElementById("buff-physic-ATK-effect").innerText = result.physicATK;
  document.getElementById("buff-physic-DEF-effect").innerText = result.physicDEF;
  document.getElementById("buff-magic-ATK-effect").innerText = result.magicATK;
  document.getElementById("buff-magic-DEF-effect").innerText = result.magicDEF;
  document.getElementById("buff-effective-physic-ATK-effect").innerText = result.effectivePhysicATK;
  document.getElementById("buff-effective-magic-ATK-effect").innerText = result.effectiveMagicATK;
  document.getElementById("buff-effective-physic-DEF-effect").innerText = Math.floor(result.effectivePhysicDEF) + "";
  document.getElementById("buff-effective-magic-DEF-effect").innerText = Math.floor(result.effectiveMagicDEF) + "";
  var sumBuffATK = Math.floor(result.physicATK + result.magicATK);
  var sumBuffDEF = Math.floor(result.physicDEF + result.magicDEF);
  document.getElementById("buff-ATK-effect").innerText = sumBuffATK + "";
  document.getElementById("buff-DEF-effect").innerText = result.physicDEF + result.magicDEF;
  document.getElementById("sum-buff-effect").innerText = sumBuffATK * 1.4 + sumBuffDEF + "";

  var sumEffectiveBuffATK = Math.floor(result.effectivePhysicATK + result.effectiveMagicATK);
  var sumEffectiveBuffDEF = Math.floor(result.effectivePhysicDEF + result.effectiveMagicDEF);
  document.getElementById("effective-buff-ATK-effect").innerText = sumEffectiveBuffATK + "";
  document.getElementById("effective-buff-DEF-effect").innerText = sumEffectiveBuffDEF + "";

  document.getElementById("sum-effective-buff-effect").innerText = Math.floor(sumEffectiveBuffATK * 1.4 + sumEffectiveBuffDEF) + "";
}

function showSpConsume(spConsume) {
  document.getElementById("sp-consume").innerText = spConsume.withoutGay + "";
  document.getElementById("sp-consume-with-gay").innerText = spConsume.withGay + "";
}

/**
 * 计算总技能系数
 * @param sumCoefficient 总技能系数
 * @param selectedSkill 技能
 * @param slvAddition 技能等级加成
 * @param physicDPS 物理输出人数
 * @param magicDPS 魔法输出人数
 * @param passiveToggleFrequency 被動技能的觸發頻率（主動技能的這個參數默認為1）
 */
function calculateSumCoefficient(sumCoefficient, selectedSkill, slvAddition, physicDPS, magicDPS, passiveToggleFrequency) {
  var phyATKCo = selectedSkill.effectExpectation.physicATK * slvAddition * passiveToggleFrequency;
  var phyDEFCo = selectedSkill.effectExpectation.physicDEF * slvAddition * passiveToggleFrequency;
  var magATKCo = selectedSkill.effectExpectation.magicATK * slvAddition * passiveToggleFrequency;
  var magDEFCo = selectedSkill.effectExpectation.magicDEF * slvAddition * passiveToggleFrequency;
  sumCoefficient.exceptedPhysicATK += phyATKCo;
  sumCoefficient.exceptedPhysicDEF += phyDEFCo;
  sumCoefficient.exceptedMagicATK += magATKCo;
  sumCoefficient.exceptedMagicDEF += magDEFCo;

  physicDPS = Number(physicDPS);
  magicDPS = Number(magicDPS);
  //二体技能飘到物理输出头上的概率
  var hitPhysicProb = (physicDPS - 1) / 4;
  //二体技能飘到魔法输出头上的概率
  var hitMagicProb = (magicDPS - 1) / 4;

  if (selectedSkill.property === "both") {
    sumCoefficient.exceptedEffectivePhysicATK += phyATKCo * physicDPS / 5;
    sumCoefficient.exceptedEffectiveMagicATK += magATKCo * magicDPS / 5;
  }
  if (selectedSkill.property === "physic") {
    //都没物理输出有个鬼的有效物攻buff量
    if (physicDPS === 0) {
      return;
    }

    if (selectedSkill.target === TARGET_TYPE.one) {
      sumCoefficient.exceptedEffectivePhysicATK += phyATKCo;
    }
    if (selectedSkill.target === TARGET_TYPE.oneOrTwo) {
      sumCoefficient.exceptedEffectivePhysicATK += (selectedSkill.effectMin.physicATK + (selectedSkill.effectExpectation.physicATK - selectedSkill.effectMin.physicATK) * hitPhysicProb) * slvAddition * passiveToggleFrequency;
    }
    if (selectedSkill.target === TARGET_TYPE.two) {
      sumCoefficient.exceptedEffectivePhysicATK += (selectedSkill.effectExpectation.physicATK / 2 + selectedSkill.effectExpectation.physicATK / 2 * hitPhysicProb) * slvAddition * passiveToggleFrequency;
    }
  }
  if (selectedSkill.property === "magic") {
    //都没魔法输出有个鬼的有效魔法buff量
    if (magicDPS === 0) {
      return;
    }

    if (selectedSkill.target === TARGET_TYPE.one) {
      sumCoefficient.exceptedEffectiveMagicATK += magATKCo;
    }
    if (selectedSkill.target === TARGET_TYPE.oneOrTwo) {
      sumCoefficient.exceptedEffectiveMagicATK += (selectedSkill.effectMin.magicATK + (selectedSkill.effectExpectation.magicATK - selectedSkill.effectMin.magicATK) * hitMagicProb) * slvAddition * passiveToggleFrequency;
    }
    if (selectedSkill.target === TARGET_TYPE.two) {
      sumCoefficient.exceptedEffectiveMagicATK += (selectedSkill.effectExpectation.magicATK / 2 + selectedSkill.effectExpectation.magicATK / 2 * hitMagicProb) * slvAddition * passiveToggleFrequency;
    }
  }
}

function calculateSpConsume(spConsume, activeSkill, gay) {
  spConsume.withoutGay += activeSkill.sp;
  var combinationAmount = Math.pow(2, gay.length);
  for (var combination = 0; combination < combinationAmount; combination++) {
    var binaryString = combination.toString(2);
    while (binaryString.length < gay.length) {
      binaryString = "0" + binaryString;
    }
    var spDiscount = 1;
    var probability = 1;
    for (var gayIndex = 0; gayIndex < gay.length; gayIndex++) {
      var currentGay = gay[gayIndex];
      if (binaryString.charAt(gayIndex) === "1") {
        spDiscount *= currentGay.effect;
        probability *= currentGay.toggleRate;
      } else {
        probability *= currentGay.dudRate;
      }
    }
    spConsume.withGay += activeSkill.sp * spDiscount * probability;
  }
  spConsume.withGay = Math.floor(spConsume.withGay);
}

function saveSelectedActiveSkills() {
  var activeSkillGroupsElements = document.getElementsByClassName("active-skill-group");
  var selectedActiveSkills = [];
  var skillLvSum = 0;
  Array.from(activeSkillGroupsElements).forEach(function (activeSkillGroup) {
    var activeSkillSelect = activeSkillGroup.querySelector(".active-skill");
    var selectedOption = activeSkillSelect.options[activeSkillSelect.selectedIndex];
    if (selectedOption) {
      var skillLv = Number(activeSkillGroup.querySelector("input.skill-lv").value);
      skillLvSum += skillLv;
      var activeSkill = {
        activeSkillId: selectedOption.value,
        skillLv: skillLv
      };
      selectedActiveSkills.push(activeSkill);
    }
  });
  var skillLvAvg = skillLvSum / selectedActiveSkills.length;
  skillLvAvg = skillLvAvg.toFixed(2);
  document.getElementById("avg-active-skill-lv").innerText = skillLvAvg + "";
  localStorage.selectedActiveSkills = JSON.stringify(selectedActiveSkills);
}

function initSelectedActiveSkill() {
  if (!localStorage.selectedActiveSkills) {
    return;
  }
  var selectedActiveSkills = JSON.parse(localStorage.selectedActiveSkills);
  var activeSkillGroups = Array.from(document.getElementsByClassName("active-skill-group"));
  var counter = 0;
  selectedActiveSkills.forEach(function (selectedActiveSkill) {
    var activeSkillGroup = activeSkillGroups[counter];
    var activeSkillSelect = activeSkillGroup.querySelector(".active-skill");
    var options = activeSkillSelect.options;
    for (var opt, j = 0; opt = options[j]; j++) {
      if (opt.value === selectedActiveSkill.activeSkillId) {
        activeSkillSelect.selectedIndex = j;
        break;
      }
    }
    activeSkillGroup.querySelector("input.skill-lv").value = selectedActiveSkill.skillLv;
    counter++;
  });
}

function saveSelectedPassiveSkills() {
  var passiveSkillGroupsElements = document.getElementsByClassName("passive-skill-group");
  var selectedPassiveSkills = [];
  var skillLvSum = 0;
  Array.from(passiveSkillGroupsElements).forEach(function (passiveSkillGroup) {
    var passiveSkillSelect = passiveSkillGroup.querySelector(".passive-skill");
    var selectedOption = passiveSkillSelect.options[passiveSkillSelect.selectedIndex];
    if (selectedOption) {
      var skillLv = Number(passiveSkillGroup.querySelector("input.skill-lv").value);
      skillLvSum += skillLv;
      var passiveSkill = {
        passiveSkillId: selectedOption.value,
        skillLv: skillLv
      };
      selectedPassiveSkills.push(passiveSkill);
    }
  });
  var skillLvAvg = skillLvSum / selectedPassiveSkills.length;
  skillLvAvg = skillLvAvg.toFixed(2);
  document.getElementById("avg-passive-skill-lv").innerText = skillLvAvg + "";
  localStorage.selectedPassiveSkills = JSON.stringify(selectedPassiveSkills);
}

function initSelectedPassiveSkill() {
  if (!localStorage.selectedPassiveSkills) {
    return;
  }
  var selectedPassiveSkills = JSON.parse(localStorage.selectedPassiveSkills);
  var passiveSkillGroups = Array.from(document.getElementsByClassName("passive-skill-group"));
  var counter = 0;
  selectedPassiveSkills.forEach(function (selectedPassiveSkill) {
    var passiveSkillGroup = passiveSkillGroups[counter];
    var passiveSkillSelect = passiveSkillGroup.querySelector(".passive-skill");
    var options = passiveSkillSelect.options;
    for (var opt, j = 0; opt = options[j]; j++) {
      if (opt.value === selectedPassiveSkill.passiveSkillId) {
        passiveSkillSelect.selectedIndex = j;
        break;
      }
    }
    passiveSkillGroup.querySelector("input.skill-lv").value = selectedPassiveSkill.skillLv;
    counter++;
  });
}

function saveStatus() {
  var job;
  var jobSelect = document.getElementById("job");
  var selectedOption = jobSelect.options[jobSelect.selectedIndex];
  if (selectedOption) {
    job = selectedOption.value;
  }
  var status = {
    enemyPhysicDPS: document.getElementById("enemyPhysicDPS").value,
    enemyMagicDPS: document.getElementById("enemyMagicDPS").value,
    ourPhysicDPS: document.getElementById("ourPhysicDPS").value,
    ourMagicDPS: document.getElementById("ourMagicDPS").value,
    physicATK: document.getElementById("statusPhysicATK").value,
    physicDEF: document.getElementById("statusPhysicDEF").value,
    magicATK: document.getElementById("statusMagicATK").value,
    magicDEF: document.getElementById("statusMagicDEF").value,
    job: job
  };
  localStorage.status = JSON.stringify(status);
}

function initStatus() {
  if (!localStorage.status) {
    return;
  }
  var status = JSON.parse(localStorage.status);
  document.getElementById("enemyPhysicDPS").value = status.enemyPhysicDPS;
  document.getElementById("enemyMagicDPS").value = status.enemyMagicDPS;
  document.getElementById("ourPhysicDPS").value = status.ourPhysicDPS;
  document.getElementById("ourMagicDPS").value = status.ourMagicDPS;
  document.getElementById("statusPhysicATK").value = status.physicATK;
  document.getElementById("statusPhysicDEF").value = status.physicDEF;
  document.getElementById("statusMagicATK").value = status.magicATK;
  document.getElementById("statusMagicDEF").value = status.magicDEF;
  var jobSelect = document.getElementById("job");
  var options = jobSelect.options;
  for (var opt, j = 0; opt = options[j]; j++) {
    if (opt.value === status.job) {
      jobSelect.selectedIndex = j;
      break;
    }
  }
}

function init() {
  initSelectedActiveSkill();
  initSelectedPassiveSkill();
  initStatus();
}

function calculate() {
  saveSelectedActiveSkills();
  saveSelectedPassiveSkills();
  saveStatus();

  var status = JSON.parse(localStorage.status);

  var buffUps = [];
  var gays = [];
  var passiveBuffCoefficient = {
    exceptedPhysicATK: 0,
    exceptedPhysicDEF: 0,
    exceptedMagicATK: 0,
    exceptedMagicDEF: 0,
    exceptedEffectivePhysicATK: 0,
    exceptedEffectiveMagicATK: 0,
  };
  var selectedPassiveSkills = JSON.parse(localStorage.selectedPassiveSkills);
  selectedPassiveSkills.forEach(function (selectedPassiveSkill) {
    var passiveSkill = PASSIVE_SKILL_DB[selectedPassiveSkill.passiveSkillId];
    var slvAddition = getSkillLVAddition(selectedPassiveSkill.skillLv);
    var toggleRate = getToggleRate(selectedPassiveSkill.skillLv);
    if (passiveSkill.type === PASSIVE_SKILL_TYPE.BUFF_UP) {
      buffUps.push({
        effect: passiveSkill.basicEffect.expectation * slvAddition,
        toggleRate: toggleRate
      });
    }
    if (passiveSkill.type === PASSIVE_SKILL_TYPE.STATUS_UP) {
      var supportSkillAmount = 20;
      var toggleFrequency = supportSkillAmount * toggleRate;
      calculateSumCoefficient(passiveBuffCoefficient, passiveSkill, slvAddition, status.enemyPhysicDPS, status.enemyMagicDPS, toggleFrequency);
    }
    if (passiveSkill.type === PASSIVE_SKILL_TYPE.GAY) {
      gays.push({
        effect: passiveSkill.effect,
        toggleRate: toggleRate,
        dudRate: 1 - toggleRate
      });
    }
  });

  var debuffCoefficient = {
    exceptedPhysicATK: 0,
    exceptedPhysicDEF: 0,
    exceptedMagicATK: 0,
    exceptedMagicDEF: 0,
    exceptedEffectivePhysicATK: 0,
    exceptedEffectiveMagicATK: 0,
  };
  var buffCoefficient = {
    exceptedPhysicATK: 0,
    exceptedPhysicDEF: 0,
    exceptedMagicATK: 0,
    exceptedMagicDEF: 0,
    exceptedEffectivePhysicATK: 0,
    exceptedEffectiveMagicATK: 0,
  };
  var spConsume = {
    withoutGay: 0,
    withGay: 0
  };

  var selectedActiveSkills = JSON.parse(localStorage.selectedActiveSkills);
  selectedActiveSkills.forEach(function (selectedActiveSkill) {
    var activeSkill = ACTIVE_SKILL_DB[selectedActiveSkill.activeSkillId];
    var slvAddition = getSkillLVAddition(selectedActiveSkill.skillLv);
    calculateSpConsume(spConsume, activeSkill, gays);
    if (activeSkill.type === "debuff") {
      calculateSumCoefficient(debuffCoefficient, activeSkill, slvAddition, status.enemyPhysicDPS, status.enemyMagicDPS, 1);
    } else {
      calculateSumCoefficient(buffCoefficient, activeSkill, slvAddition, status.ourPhysicDPS, status.ourMagicDPS, 1);
    }
  });
  var jobAdditionBook = 1;
  if (status.job === "book") {
    jobAdditionBook = 1.1;
  }
  var debuffResult = calculateEffectiveness(debuffCoefficient, status, buffUps, null, jobAdditionBook);
  calculateEffectiveDEF(debuffResult, status.ourPhysicDPS, status.ourMagicDPS);
  showDebuff(debuffResult);

  var jobAdditionInstument = 1;
  if (status.job === "instrument") {
    jobAdditionInstument = 1.1;
  }
  var buffResult = calculateEffectiveness(buffCoefficient, status, buffUps, passiveBuffCoefficient, jobAdditionInstument);
  calculateEffectiveDEF(buffResult, status.enemyPhysicDPS, status.enemyMagicDPS);
  showBuff(buffResult);

  showSpConsume(spConsume);
}

/**
 * 計算技能等級加成
 * @param slv 技能等级
 * @returns {number}
 */
function getSkillLVAddition(slv) {
  slv = Number(slv);
  if (slv < 1 || 20 < slv) {
    return 0;
  }
  var bonus = 0;
  if (slv > 14) {
    bonus += 0.03
  }
  if (slv === 20) {
    bonus += 0.05
  }
  return 1 + (slv - 1) * 0.03 + bonus;
}

/**
 * 計算被動技能發動率
 * @param slv 技能等級
 * @returns {number}
 */
function getToggleRate(slv) {
  slv = Number(slv);
  var bonus = 0;
  if (slv > 14) {
    bonus += 0.005
  }
  if (slv === 20) {
    bonus += 0.01
  }
  return 0.04 + (slv - 1) * 0.005 + bonus;
}