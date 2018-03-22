/**
 * Created by Administrator on 2018/3/22.
 */

function initSelectedActiveSkill() {
  var activeSkillSelects = Array.from(document.getElementsByClassName("active-skill"));
  Array.from(activeSkillSelects).forEach(function (activeSkillSelect) {
    activeSkillSelect.selectedIndex = 0;
  });
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


function initSelectedPassiveSkill() {
  var passiveSkillSelects = Array.from(document.getElementsByClassName("passive-skill"));
  Array.from(passiveSkillSelects).forEach(function (passiveSkillSelect) {
    passiveSkillSelect.selectedIndex = 0;
  });
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

function initSets() {
  var setElements = document.getElementsByClassName("set-selector");
  Array.from(setElements).forEach(function (ele) {
    if (ele.id === localStorage.currentSet) {
      ele.setAttribute("class", "set-selector active");
    }
    var input = ele.getElementsByTagName("input")[0];
    var setName = localStorage[input.parentElement.id + "_name"];
    if (setName) {
      input.value = setName;
    }
  });
}

function renameSet(input) {
  localStorage[input.parentElement.id + "_name"] = input.value;
}

function init() {
  initSets();
  initSelectedActiveSkill();
  initSelectedPassiveSkill();
  initStatus();
}

function selectSet(setElement) {
  console.log(setElement);
  var setElements = document.getElementsByClassName("set-selector");
  Array.from(setElements).forEach(function (ele) {
    ele.setAttribute("class", "set-selector");
  });
  setElement.setAttribute("class", "set-selector active");
  localStorage.currentSet = setElement.id;
  changeSet();
  init();
}

function changeSet() {
  var currentStatus = localStorage[localStorage.currentSet + "_status"];
  if (currentStatus) {
    localStorage.status = currentStatus;
  } else {
    localStorage.status = "";
  }
  var currentPassiveSkills = localStorage[localStorage.currentSet + "_selectedPassiveSkills"];
  if (currentStatus) {
    localStorage.selectedPassiveSkills = currentPassiveSkills;
  } else {
    localStorage.selectedPassiveSkills = "";
  }
  var currentActiveSkills = localStorage[localStorage.currentSet + "_selectedActiveSkills"];
  if (currentActiveSkills) {
    localStorage.selectedActiveSkills = currentActiveSkills;
  } else {
    localStorage.selectedActiveSkills = "";
  }
}