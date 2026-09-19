// =========================
// 側邊欄主選單切換
// =========================
document.querySelectorAll('.nav-item').forEach(btn => {
  btn.addEventListener('click', () => {
    // 移除所有 active
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));

    // 加上目前選中的
    btn.classList.add('active');
    const panelId = 'panel-' + btn.dataset.panel;
    document.getElementById(panelId).classList.add('active');
  });
});

// =========================
// 主線劇情的子選單切換
// =========================
document.querySelectorAll('.sub-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    // 移除所有 active
    document.querySelectorAll('.sub-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.sub-panel').forEach(p => p.classList.remove('active'));

    // 加上目前選中的
    tab.classList.add('active');
    const subId = 'sub-' + tab.dataset.sub;
    document.getElementById(subId).classList.add('active');
  });
});

// =========================
// 擲骰功能
// =========================
const monsterResults = {
  1: "哥布林小隊（1d4+2 隻）",
  2: "戰鍛造逃兵或傭兵",
  3: "食人魔（1 隻）",
  4: "哀悼之地變異生物",
  5: "龍紋家族相關人員（敵對或中立）",
  6: "異怪（眼魔幼體、奪心魔蹤跡等）",
  7: "元素或綁定元素生物",
  8: "特殊事件（由 DM 決定）"
};

const harvestType = {
  1: "結構素材（骨頭、鱗片、皮革、甲殼）",
  2: "煉金材料（血液、膽汁、毒液、腺體）",
  3: "奧術元件（眼睛、心臟、大腦、晶體、龍晶碎片）",
  4: "實用材料（脂肪、肌腱、毛皮、羽毛）",
  5: "戰利品／珍奇（牙齒、爪子、頭骨、保存器官）"
};

const harvestQuality = {
  1: "劣質", 2: "劣質", 3: "劣質",
  4: "普通", 5: "普通", 6: "普通",
  7: "優良", 8: "優良",
  9: "稀有",
  10: "卓越"
};

function roll(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

function rollTable(type) {
  if (type === "monster") {
    const result = roll(8);
    const box = document.getElementById("monster-result");
    box.textContent = `🎲 擲出 ${result} → ${monsterResults[result]}`;
    box.classList.add("show");
  }
}

function rollHarvest() {
  const typeRoll = roll(5);
  const qualityRoll = roll(10);
  const box = document.getElementById("harvest-result");
  box.innerHTML = `
    🎲 素材類型 d5 = <strong>${typeRoll}</strong> → ${harvestType[typeRoll]}<br>
    🎲 品質 d10 = <strong>${qualityRoll}</strong> → <strong>${harvestQuality[qualityRoll]}</strong>
  `;
  box.classList.add("show");
}