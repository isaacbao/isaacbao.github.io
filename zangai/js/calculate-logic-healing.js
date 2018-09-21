/**
 * Created by Administrator on 2018/8/14.
 */
$().ready(function () {
  $('#heal-data').dataTable({
      'bFilter': false,
      'bInfo': false,
      'bPaginate': false,
      'iDisplayLength': 50,
      'aoColumns':[{sWidth: 250},null,null]
    }
  );
  $('#attack-data').dataTable({
      'bFilter': false,
      'bInfo': false,
      'bPaginate': false,
      'iDisplayLength': 50,
      'aoColumns':[{sWidth: 250},null,null]
    }
  );
  $('input').on('change', function(){
    var params = [];
    $('input').each(function(index, e) {
      params.push($(e).val());
    });
    localStorage.setItem('params', JSON.stringify(params));
    exec();
  });
  var p = localStorage.getItem('params');
  if (p) {
    var par = JSON.parse(p);
    $('input').each(function(index, e) {
      console.log('p='+par[index]);
      if (par[index] != '' && !(typeof par[index] == 'undefined')) {
        $(e).val(par[index]);
      }
    });
  }
  var lastTab = localStorage.getItem('last_tab');
  if (lastTab) {
    $('.tabcontent').not(':eq(' + lastTab + ')').hide();
    $('.tablinks').eq(lastTab).addClass('active');
  } else {
    $('.tabcontent').not(':eq(0)').hide();
    $('.tablinks').eq(0).addClass('active');
  }
  exec();
});

const HEAL_SKILLS = {
  'SS/恵みの福音(III)(1~2-3)': 2.55,
  'SS/攻上の息吹(III)(1~2)': 2.34,
  'SS/恵みの福音(III)(1~2-2)': 2.33,
  'SS/恵みの福音(III)(1~2-1)': 2.25,
  'SS/恵みの福音(III)(2体固定)': 2.25,
  'SS/攻上の息吹(Ⅱ) ': 2.04,
  'SS/攻上の祈祷(Ⅱ)': 2.04,
};

const ATTACK_SKILLS = {
  '純粋攻撃(I)': 1,
  '吸命の～(I)<br>攻上の～(I)': 1.1,
  '純粋攻撃(II)': 1.2,
  '吸命の～(II)': 1.25,
  '純粋攻撃(III)': 1.5,
  '攻上の～(III)(1～2体)': 1.6,
  '吸命の～(III)<br>攻上の～(III)(1体)': 1.8535,
  '純粋攻撃(IV)': 2
};

function exec() {
  fillHeal();
  fillAttack();
}

function fillHeal() {
  var $data = $('#heal-data');
  $data.dataTable().fnClearTable();
  var data = [];
  for (var skill in HEAL_SKILLS) {
    var row = [];

    var def = parseInt($('.param').eq(1).val()) + parseInt($('.param').eq(3).val());
    var slv = 1 + (parseInt($('.slv').val()) - 1) * 0.03;
    var armorSLvBonus = 0;
    $('.aslv').each(function(i, e){
      var sl = parseInt($(e).val());
      if (sl > 0) {
        armorSLvBonus += 0.1 + 0.01 * (sl - 1);
      }
    });
    var job = 1 + 0.01 * parseInt($('.job').val());
    var heal = Math.floor(def * HEAL_SKILLS[skill] * slv * (armorSLvBonus + job) * 0.05);
    var healWithOld = heal * 1.45;
    var healWithNew = heal * 1.6;

    row.push(skill);
    row.push(HEAL_SKILLS[skill]);
    row.push(heal);
    row.push(healWithOld);
    row.push(healWithNew);

    data.push(row);
  }
  $data.dataTable().fnAddData(data);
  $data.dataTable().fnSort([[1,'asc']]);
}

function fillAttack() {
  var $data = $('#attack-data');
  $data.dataTable().fnClearTable();
  var data = [];
  for (var skill in ATTACK_SKILLS) {
    var row = [];

    var type = $('input[name=attack-type]:checked').val();
    var atk;
    switch (type) {
      case 'physic':
        atk = parseInt($('.param').eq(0).val());
        break;
      case 'magic':
        atk = parseInt($('.param').eq(2).val());
        break;
    }
    var slv = 1 + (parseInt($('.slv').val()) - 1) * 0.03;
    var armorSLvBonus = 0;
    $('.aslv').each(function(i, e){
      var sl = parseInt($(e).val());
      if (sl > 0) {
        armorSLvBonus += 0.1 + 0.01 * (sl - 1);
      }
    });
    var job = 1 + 0.01 * parseInt($('.job').val());
    var buff = parseInt($('#atk-buff').val()) / 100.0;
    var attr = parseInt($('#atk-attr').val()) / 100.0;
    var def = parseInt($('#target-def').val());
    var def_buff = parseInt($('#def-buff').val()) / 100.0;
    var others = parseInt($('#atk-others').val()) / 100.0;
    var damage = Math.floor((atk * buff * attr * others - def * def_buff)
      * ATTACK_SKILLS[skill] * slv * (armorSLvBonus + job) * 0.065);
    if (damage < 1) {
      damage = 1;
    }

    row.push(skill);
    row.push(ATTACK_SKILLS[skill]);
    row.push(damage);
    data.push(row);
  }
  $data.dataTable().fnAddData(data);
  $data.dataTable().fnSort([[1,'asc']]);
}

function openTab(index) {
  var $contents = $('.tabcontent');
  var $links = $('.tablinks');
  $contents.hide();
  $contents.eq(index).show();
  $links.removeClass('active');
  $links.eq(index).addClass('active');
  localStorage.setItem('last_tab', index);
}
