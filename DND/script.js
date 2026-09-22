/* ===== 側邊導覽切換 ===== */
const navButtons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.section');

function showSection(id) {
  sections.forEach(sec => sec.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) target.classList.add('active');

  navButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.section === id);
  });
}

navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    showSection(btn.dataset.section);
  });
});

/* ===== 武器資料 ===== */
const weaponsData = [
  {
    id: "great_sword",
    name: "大劍 (Great Sword)",
    type: "軍用近戰武器",
    prof: "巨劍",
    base: "50 gp, 2d6 揮砍, 6 lb., 重型, 雙手",
    rarities: {
      common: "基礎 2d6 揮砍。",
      uncommon: "蓄力斬 (Charged Slash)：攻擊動作或藉機攻擊中可放棄 1 次攻擊為大劍充能 1 點 (上限 3)。攻擊時消耗全部充能該次攻擊具有優勢（可放棄該回合所有優勢再額外充 1 點）。\n命中時每點充能造成 1d6 + 力量修正傷害，若消耗 2 點額外 +3 傷害，消耗 3 點額外 +6 傷害。",
      rare: "+1 命中與傷害。\n• 防禦 (Guard)：反應使單次近戰攻擊 AC+2，下回合結束前攻擊檢定處於劣勢。",
      veryRare: "+2 命中與傷害。\n• 蓄力斬升級：每點充能傷害提升為 1d8 + 力量修正 (+3/+6 額外傷害保留)。\n• 防禦升級：反應 AC+3，且不再承受攻擊劣勢。",
      legendary: "+3 命中與傷害。\n• 蓄力斬升級：每點充能傷害提升為 1d10 + 力量修正。\n• 防禦升級：反應 AC+4。"
    }
  },
  {
    id: "longsword",
    name: "太刀 (Longsword)",
    type: "軍用近戰武器",
    prof: "巨劍, 長劍",
    base: "25 gp, 1d10 揮砍, 3 lb., 雙手",
    rarities: {
      common: "基礎 1d10 揮砍。",
      uncommon: "+1 命中與傷害。\n• 練氣槽 (Spirit Gauge)：命中獲得 1 氣 (上限 6)。若處於 昏迷［狀態］ 或 1 分鐘未命中失去全部。\n• 氣刃斬 (Spirit Blade)：命中時消耗任意氣，每點氣 +1 傷害。",
      rare: "+2 命中與傷害。\n• 見切斬 (Foresight Slash)：怪物未命中你時，可消耗 5 氣發動一次不耗費反應的藉機攻擊。",
      veryRare: "+2 命中與傷害。\n• 命中時獲得 2 氣。\n• 氣刃突刺 (Spirit Thrust)：命中時附贈動作花 2 氣轉穿刺傷並穿越目標 15 呎 (不引發藉機)。\n• 氣刃大迴旋 (Spirit Roundslash)：攻擊動作後消耗 5 氣攻擊原目標 5 呎內另一生物。",
      legendary: "+3 命中與傷害。\n• 每次命中獲得 3 氣。"
    }
  },
  {
    id: "sword_and_shield",
    name: "片手劍&盾 (Sword & Shield)",
    type: "軍用或簡易近戰武器",
    prof: "盾牌；短劍, 長劍, 彎刀, 輕型手槌, 釘頭槌",
    base: "劍: 10 gp, 1d6 揮砍, 2 lb., 靈巧, 輕型\n盾: 10 gp, 6 lb., +2 AC",
    rarities: {
      common: "攻守平衡，靈活輕便。",
      uncommon: "+1 命中與傷害。\n• 空手使用 (Free Hands)：執行迴避 (Dodge) 動作時，可以附贈動作「使用物品 (Use an Object)」。",
      rare: "+1 命中與傷害；盾牌 +1 AC。\n• 撕裂 (Rend)：命中使目標進行狀態豁免時，目標豁免處於劣勢。",
      veryRare: "+2 命中與傷害；盾牌 +2 AC。\n• 隨時可以附贈動作「使用物品」。",
      legendary: "+3 命中與傷害；盾牌 +3 AC。"
    }
  },
  {
    id: "dual_blades",
    name: "雙劍 (Dual Blades)",
    type: "軍用近戰武器",
    prof: "長劍, 彎刀, 短劍",
    base: "15 gp, 1d6 揮砍, 2 lb., 靈巧, 輕型 (每把)",
    rarities: {
      common: "基礎 1d6 揮砍，無法持盾。",
      uncommon: "鬼人化 (Demon Mode 2/長休)：附贈動作開啟 30 秒 (或陷入 伏地［狀態］ 為止)。移速 +5 呎，每回合首次命中額外造成 1d4 武器傷害。結束後 30 秒內無法再次使用。",
      rare: "+1 命中與傷害。\n• 鬼人化升級：增至 3 次/長休，移速 +10 呎，所有命中皆額外造成 1d4 傷害。\n• 異常施加 (Inflict)：以此武器命中使目標進行狀態豁免時，DC +1。",
      veryRare: "+2 命中與傷害。\n• 鬼人強化 (Archdemon Mode)：4 次/長休，移速 +15 呎。\n• 異常施加升級：狀態豁免 DC +2。",
      legendary: "+3 命中與傷害。\n• 鬼人強化升級：5 次/長休，移速 +20 呎，所有攻擊額外造成 1d6 傷害。\n• 異常施加升級：狀態豁免 DC +3。"
    }
  },
  {
    id: "hammer",
    name: "大錘 (Hammer)",
    type: "軍用近戰武器",
    prof: "戰槌, 巨槌",
    base: "35 gp, 2d6 鈍擊, 10 lb., 重型, 雙手",
    rarities: {
      common: "基礎 2d6 鈍擊。",
      uncommon: "強擊打 (Mighty Weapon 1/短休)：命中大型以下生物使體質豁免 (DC 8+PB+Str)，失敗陷入 震懾［狀態］ 至下回合結束。\n蓄力衝刺：直線移動 20 呎未受傷，首擊 +1d4 鈍擊傷害。",
      rare: "+1 命中與傷害。\n• 強擊打增至 2 次/短休，可對任何體型生效 (Huge 以上豁免具優勢)。蓄力傷害 +2d4。",
      veryRare: "+2 命中與傷害。\n• 強擊打增至 3 次/短休；蓄力傷害 +3d4。",
      legendary: "+3 命中與傷害。\n• 強擊打 4 次/短休，且 Huge 以上生物不再具有優勢；蓄力傷害 +4d4。"
    }
  },
  {
    id: "hunting_horn",
    name: "狩獵笛 (Hunting Horn)",
    type: "軍用近戰武器)",
    prof: "樂器, 巨槌, 戰槌",
    base: "50 gp, 1d12 鈍擊, 8 lb., 重型, 雙手",
    rarities: {
      common: "旋律長度 2。單音/旋律演奏為 20 呎內隊友提供 buff (持續 1 分鐘)。可用音符：小攻擊力提升 (+1 物傷)、小移速提升 (+5 呎)、小技能提升 (+1 自選技能)。",
      uncommon: "旋律長度 3。新增音符：小屬性攻擊 (冰/火/電/毒 +2 傷害)、小防禦 (+1 AC)。",
      rare: "旋律長度 4。新增音符：中攻擊力 (+2 物傷)、防音耳塞 (範圍內生物陷入 耳聾［狀態］)、酸/力場/雷鳴/心靈 +2 傷害、法術 DC +1、適溫 (耐寒熱)。",
      veryRare: "+1 命中與傷害。旋律長度 5。新增音符：大防禦 (+2 AC)、大移速 (+10 呎)、死靈/光耀 +2 傷害、全豁免 +2、大技能 (+2 技能)、震顫感知 (30 呎)、水上行走。",
      legendary: "+2 命中與傷害。旋律長度 6。新增音符：會心提升 (+1 暴擊範圍)、大攻擊力 (+3 物傷)、全屬性傷害 +3、死亡豁免 +1、抵抗 魅惑［狀態］ / 恐慌［狀態］ / 麻痺［狀態］ / 中毒［狀態］ / 震懾［狀態］ 具優勢。"
    }
  },
  {
    id: "lance",
    name: "長槍 (Lance)",
    type: "軍用近戰武器",
    prof: "長槍, 戟",
    base: "長槍: 20 gp, 1d8 穿刺, 6 lb., 觸及, 雙手(1d10)\n盾牌: 20 gp, +2 AC, 6 lb.",
    rarities: {
      common: "觸及與持盾防禦。",
      uncommon: "+1 命中與傷害。\n• 力量防衛 (Powerguard)：反應使單次攻擊 AC+2。",
      rare: "+1 命中與傷害；盾牌 +1 AC。\n• 突進衝刺 (Charge)：直線移動 20 呎未受傷，首擊 +1d4 穿刺傷害。",
      veryRare: "+2 命中與傷害；盾牌 +2 AC。\n• 突進提升為 +2d4；防衛反應 AC+3。\n• 防反刺擊 (Counter Thrust)：近戰未命中你時反應發動藉機攻擊 (體質修正次/長休)。",
      legendary: "+2 命中與傷害；盾牌 +3 AC。\n• 突進 +3d4；防衛反應 AC+4。"
    }
  },
  {
    id: "gunlance",
    name: "銃槍 (Gunlance)",
    type: "軍用近戰武器",
    prof: "長槍 , 戟",
    base: "銃槍: 30 gp, 1d8 穿刺, 6 lb., 觸及\n盾牌: 20 gp, +2 AC, 6 lb.\n拔槍持盾 (Quick Draw): 拔刀或撿起武器時可同時裝備盾牌",
    rarities: {
      common: "具備觸及與快速持盾特性。",
      uncommon: "+1 命中與傷害。\n• 砲擊 (Shells)：容納 3 發彈藥。攻擊動作中可消耗彈藥發動近戰(觸及10呎)或遠程(80/320)攻擊，造成 1d8 火焰傷害。附贈動作裝填 1 發。",
      rare: "+1 命中與傷害；盾牌 +1 AC。\n• 防禦裝填 (Guard Reload)：生物近戰攻擊未命中你時裝填 1 發。\n• 彈容量增至 4 發。\n• 龍擊砲 (Wyvernfire)：附贈動作上彈，動作釋放 30 呎長 5 呎寬火焰，敏捷豁免 (DC 8+PB+Str) 承受 3d6 火焰傷害 (減半)。1/長休。",
      veryRare: "+2 命中與傷害；盾牌 +1 AC。\n• 爆發衝刺 (Blast Dash)：附贈動作執行衝刺 (PB 次/長休)。\n• 蓄力砲擊 (Charged Shelling)：消耗額外 2 發彈藥，目標力量豁免失敗受額外 2d10 火傷並陷入 伏地［狀態］ (成功 1d10 且不倒地)。\n• 彈容增至 5 發，砲擊傷害提升為 1d10 火傷；龍擊砲增至 45 呎 4d6 火傷。",
      legendary: "+3 命中與傷害；盾牌 +2 AC。\n• 砲擊傷害增至 1d12 火傷；蓄力砲擊增至 2d12 (成功 1d12)；龍擊砲增至 60 呎 5d6 火傷。"
    }
  },
  {
    id: "switch_axe",
    name: "斬擊斧 (Switch Axe)",
    type: "軍用近戰武器",
    prof: "巨斧, 巨劍",
    base: "劍模式: 1d10 揮砍, 7 lb., 重型, 雙手\n斧模式: 1d10 揮砍, 7 lb., 重型, 雙手, 觸及\n附贈動作變形切換",
    rarities: {
      common: "具備劍斧形態切換能力。",
      uncommon: "+1 命中與傷害。\n• 劍槽 (Sword Gauge)：容量 20 充能。\n• 瓶 (Phials)：短/長休置入瓶。劍模式消耗充能發動效果；斧模式命中回 1 充能 (暴擊回 PB 充能)。\n• 強擊瓶 (耗 2 點)：劍模式傷害骰增至 1d12。",
      rare: "+2 命中與傷害；劍槽上限增至 30。\n• 強擊瓶強化：多花 3 點命中 +1d4。\n• 強屬性瓶 (耗 3 點)：+1d4 屬性傷害。\n• 減氣/毒瓶 (耗 2 點)：體質豁免失敗陷入 中毒［狀態］。",
      veryRare: "+2 命中與傷害；劍槽上限 40；可同時置入 2 個瓶 (每次攻擊限用 1 個)。\n• 麻痺瓶 (耗 7 點)：體質豁免失敗陷入 麻痺［狀態］ 1 分鐘。\n• 屬性瓶/毒瓶強化升級。",
      legendary: "+3 命中與傷害；劍槽上限 50。\n• 滅龍瓶 (耗 4 點)：+1d8 死靈傷害。\n• 妖術瓶 (Hex Phial 耗 10 點)：體質豁免失敗自選屬性檢定劣勢 1 分鐘。"
    }
  },
  {
    id: "charge_blade",
    name: "充能斧 (Charge Blade)",
    type: "軍用近戰武器",
    prof: "盾牌, 巨斧, 短劍, 長劍, 彎刀",
    base: "斧模式: 1d12 揮砍, 7 lb., 重型, 雙手\n劍盾模式: 1d6 揮砍 +2 AC, 8 lb., 靈巧, 輕型\n切換模式: 附贈動作切換斧/劍盾模式",
    rarities: {
      common: "具備劍盾與斧形態切換能力。",
      uncommon: "+1 命中與傷害。\n• 瓶充能 (Phial Charge)：劍盾模式命中獲得 1 瓶 (上限 5)，持續至短休/長休。\n• 屬性防禦 (Elemental Guard)：受到攻擊命中時反應消耗 1 瓶，對攻擊者造成 1d4 酸/冷/火/電傷害。",
      rare: "+1 命中與傷害；裝備盾牌時額外 +1 AC。\n• 屬性解放 (Elemental Discharge)：斧模式命中附贈動作消耗 1 瓶，額外造成 1d6 屬性傷害。\n• 高出力屬性解放 (AED)：動作消耗任意瓶數，前方 15 呎錐狀敏捷豁免 (DC 8+PB+Str)，受 #d4 屬性傷害，成功減半。每日次數等於 PB。",
      veryRare: "+2 命中與傷害；盾牌 +2 AC。\n• 屬性防禦提升為 1d6；屬性解放提升為 1d8；AED 提升為 #d6 屬性傷害。",
      legendary: "+3 命中與傷害；盾牌 +2 AC。\n• 屬性解放提升為 1d10；AED 提升為 #d8 屬性傷害。若 AED 錐狀完全覆蓋大型(Huge)以上生物，傷害翻倍。"
    }
  },
  {
    id: "insect_glaive",
    name: "操蟲棍 (Insect Glaive)",
    type: "軍用或簡易近戰武器",
    prof: "戟, 長柄刀, 三叉戟, 標槍, 矛",
    base: "35 gp, 1d10 揮砍, 5 lb., 雙手\n撐桿跳 (Standing Leap): 動作跳躍 (力量值+PB 呎) 並在同個動作中發動一次攻擊",
    rarities: {
      common: "具備撐桿跳攻擊能力。",
      uncommon: "獵蟲 (Kinsect)：攻擊動作中發動遠程攻擊 (60/120 呎)，造成 1d6 鈍擊傷害。",
      rare: "+1 命中與傷害。\n• 獵蟲傷害 1d8，並依序採集精華（紅: +2 傷害；白: +5 移速；橙: +1 AC 且紅白色效果翻倍；綠: 恢復造成傷害一半的 HP）。持續 1 分鐘。",
      veryRare: "+2 命中與傷害。\n• 獵蟲傷害 1d10；精華效果提升（白 +10 呎，橙 +2 AC，綠全額回血）。",
      legendary: "+3 命中與傷害。\n• 獵蟲傷害 1d12；精華效果提升（紅 +3 傷害，橙 +3 AC）。"
    }
  },
  {
    id: "bow",
    name: "弓 (Bow)",
    type: "軍用或簡易遠程武器",
    prof: "短弓 , 長弓",
    base: "24 gp, 1d8 穿刺, 2 lb. 彈藥 (150/600), 雙手",
    rarities: {
      common: "瓶裝塗層 (Coatings)：附贈動作塗抹至多 10 發箭矢 (持續 10 分鐘)。塗層 DC = 8 + PB + Dex。",
      uncommon: "+1 命中與傷害。\n• 接擊瓶 (Close Range)：15 呎內攻擊無視所有劣勢，大於 15 呎具有劣勢。\n• 強擊瓶 (Power)：傷害檢定 +1。",
      rare: "+1 命中與傷害。\n• 龍之箭 (Dragonpiercer)：替換一次攻擊釋放 30 呎直線貫通，敏捷豁免受 3d6 穿刺傷害 (Huge 以上翻倍)。1/長休。\n• 新增塗層：爆破瓶、麻痺瓶 (感知豁免失敗陷入 麻痺［狀態］)、毒瓶 (體質豁免失敗陷入 中毒［狀態］)、強擊瓶+2、睡眠瓶 (體質豁免失敗陷入 失能［狀態］ / 昏迷［狀態］)。",
      veryRare: "+2 命中與傷害。\n• 蓄力側移 (Charging Sidestep)：遭近戰命中反應跳離 15 呎並發動一次遠程射擊 (PB 次/長休)。\n• 龍之箭提升至 4d6 穿刺；新增強擊瓶+3 (+3 傷害)。",
      legendary: "+3 命中與傷害。\n• 剛射 (Power Shot)：命中時充能箭矢，下一次命中額外骰一個武器傷害骰。\n• 龍之箭提升至 5d6 穿刺。"
    }
  },
  {
    id: "heavy_bowgun",
    name: "重弩 (Heavy Bowgun)",
    type: "軍用遠程武器",
    prof: "重弩",
    base: "50 gp, 1d10 穿刺, 18 lb., 彈藥 (100/400), 重型, 裝填, 雙手",
    rarities: {
      common: "附贈動作更換彈藥類型。可用通常彈、捕獲彈。",
      uncommon: "新增彈種：擴散彈 (2d6 火傷+5呎範圍)、貫通彈 lvl 1 (+1 傷)、毒彈 (陷入 中毒［狀態］)、回復彈 lvl 1 (回 1d4 HP)、散彈。",
      rare: "+1 命中與傷害；彈藥容量翻倍。\n新增彈種：麻痺彈 (體質豁免失敗陷入 失能［狀態］/麻痺［狀態］)、貫通彈 lvl 2 (+2 傷)、斬裂彈 (4d6 揮砍 Dex 豁免)、黏著彈 (陷入 束縛［狀態］)、龍擊彈 (15 呎錐狀 2d12 火傷)。",
      veryRare: "+1 命中與傷害；彈藥容量三倍。\n新增彈種：貫通彈 lvl 3 (+3 傷)、回復彈 lvl 2 (回 1d6 HP)。擴散彈/斬裂彈/龍擊彈傷害各增加 1 顆骰。",
      legendary: "+2 命中與傷害；彈藥容量四倍。擴散/斬裂/龍擊彈傷害再增加 1 顆骰。"
    }
  },
  {
    id: "light_bowgun",
    name: "輕弩 (Light Bowgun)",
    type: "簡易遠程武器",
    prof: "輕弩",
    base: "24 gp, 1d4 穿刺, 5 lb., 彈藥 (80/320), 裝填, 雙手, 特殊",
    rarities: {
      common: "速射 (Rapid Fire)：每次攻擊動作射出 2 發。\n過熱 (Overheat)：命中後下一發攻擊傷害上限為 1d4 且不吃任何傷害加成，射擊後重置。\n換彈：附贈動作更換彈種。",
      uncommon: "可用彈種：通常彈、捕獲彈、火炎彈、貫通彈 (+1 傷)、毒彈 (陷入 中毒［狀態］)、回復彈 lvl1 (回 1d4 HP)、散彈、電擊彈、水冷彈。",
      rare: "+1 命中與傷害；彈藥容量翻倍。\n新增彈種：硬化彈 (+2 AC)、鬼人彈 (+2 傷害)、滅龍彈 (死靈傷)、麻痺彈 (陷入 失能［狀態］/麻痺［狀態］)、睡眠彈 (目標<50 HP 直接陷入 昏迷［狀態］)、黏著彈 (陷入 束縛［狀態］)。",
      veryRare: "+2 命中與傷害；彈藥容量三倍。\n新增彈種：回復彈 lvl 2 (回 1d6 HP)。",
      legendary: "+3 命中與傷害；彈藥容量四倍。"
    }
  },
  {
    id: "accel_axe",
    name: "加速斧 (Accel Axe)",
    type: "軍用近戰武器",
    prof: "戰斧, 巨斧 ",
    base: "50 gp, 1d12 揮砍, 8 lb., 重型, 雙手",
    rarities: {
      common: "基礎 1d12 揮砍，無魔法特性。",
      uncommon: "+1 命中與傷害。\n• 充能計表 (Accelerator Gauge)：命中獲得 1 充能 (上限 5)。若處於 昏迷［狀態］ 或 1 分鐘未命中失去全部。\n• 爆速打擊 (Detonation Velocity)：命中時可消耗充能，每點 +1 傷害。\n• 加速跳躍 (Accel Jump)：消耗充能增加跳躍高度/距離（每點 +5 呎，Very Rare+ 為 +10 呎）。\n• 爆碎斬 (Burst Slash)：動作消耗至多 5 充能，5 呎內目標敏捷豁免 (DC 8+PB+Str)，失敗受 #d4 揮砍傷害 (#=充能數)，成功減半。",
      rare: "+2 命中與傷害。\n• 爆發衝刺 (Dash Burst)：附贈動作消耗 1 充能衝刺半速，額外消耗充能每點 +10 呎。\n• 迴避斬 (Evade Slash)：命中敵對生物可消耗 3 充能直線移動 15 呎且不引發藉機攻擊。\n• 爆碎斬強化：傷害提升為 #d6。",
      veryRare: "+2 命中與傷害。\n• 熱量計表 (Heat Gauge)：使用消耗充能的特性時獲得 1 點熱量 (上限 3)。\n• 全加速模式 (Full Accel Mode)：附贈動作消耗 3 熱量，至下回合結束觸及增至 10 呎、額外造成 1d6 揮砍傷害且移速 +10 呎。\n• 爆發迴避 (Blast Evade)：遭遇範圍效果時，反應消耗充能每點直線移動 5 呎 (不引發藉機)，脫離範圍則不再視為目標。\n• 爆碎斬強化：傷害提升為 #d8。",
      legendary: "+3 命中與傷害。\n• 超級爆碎斬 (Hyper Burst Slash)：全加速模式下，爆碎斬傷害翻倍。\n• 空中衝刺斬 (Mid-Air Dash Slash 2/回合)：空中命中生物可消耗 1 充能直線移動 10 呎 (不引發藉機)。\n• 爆碎斬強化：傷害提升為 #d10。"
    }
  },
  {
    id: "magnet_spike",
    name: "磁力斬 (Magnet Spike)",
    type: "軍用近戰武器",
    prof: "巨劍, 巨槌",
    base: "35 gp, 2d4 傷害 (附贈動作切換鈍擊/揮砍), 7 lb., 重型, 雙手\n磁場槍: 攻擊動作中發射磁球 (30/120 呎 2d4 穿刺) 附著 1 分鐘\n磁力增幅: 每次命中磁化目標傷害骰提升 1 級 (最高 1d8)",
    rarities: {
      common: "形態切換與磁球附著。",
      uncommon: "+1 命中與傷害。\n• 磁力突進 (Magnetic Field Assault)：30 呎內附贈動作將自己拉向磁球附著目標 5 呎內。",
      rare: "+1 命中與傷害。\n• 磁力閃避 (Magnetic Force Evade)：遭附著目標攻擊時反應向後拉開 10 呎 (力量/敏捷修正次/短休)。",
      veryRare: "+2 命中與傷害。\n• 可直接突進至穿金屬甲敵人身邊；閃避留於射程內時敵攻擊劣勢。\n• 磁力拘束 (Magnetic Bind)：5 呎內動作使目標體質豁免失敗陷入 失能［狀態］ 且移速為 0 (持續 1 分鐘)。1/長休。",
      legendary: "+3 命中與傷害。\n• 突進增至 40 呎；磁力閃避可用於範圍傷害豁免；磁力拘束次數增加。"
    }
  },
  {
    id: "magus_staff",
    name: "魔導杖 (Magus Staff)",
    type: "簡易近戰武器",
    prof: "長棍",
    base: "20 gp, 1d6 鈍擊, 4 lb., 雙手通用 (1d8)\n奧術干擾: 同調此法杖者無法持盾\n法器: 可作為法術發動法器",
    rarities: {
      common: "法器與法術導引。",
      uncommon: "法術儲存 (Spell Storing)：可儲存 1 環法術於杖中隨時釋放。",
      rare: "持杖防禦 +1 AC；法術儲存上限提升至 2 環。",
      veryRare: "持杖防禦 +2 AC；法術儲存上限提升至 4 環。",
      legendary: "持杖防禦 +3 AC；法術儲存上限提升至 5 環。"
    }
  },
  {
    id: "splint_rapier",
    name: "雙手細劍 (Splint Rapier)",
    type: "軍用近戰武器",
    prof: "長劍, 細劍, 短劍",
    base: "單劍模式: 1d8 穿刺, 靈巧, 輕型\n雙劍模式: 1d6 穿刺, 靈巧, 輕型 (雙刀)\n附贈動作切換形態",
    rarities: {
      common: "單劍支援，雙劍減益。",
      uncommon: "+1 命中與傷害。\n• 單劍-激勵 (Embolden)：10 呎內隊友下次攻擊傷害 +PB。\n• 單劍-築牆 (Fortify)：生成 3 呎高半掩體岩牆。\n• 雙劍-混亂 (Addle)：命中扣目標下次攻擊/傷害 1d4。\n• 雙劍架勢：延遲架勢 (延長狀態 6 秒)、破壞架勢 (狀態豁免扣 d4)、屬性架勢 (冰火電毒)。",
      rare: "+2 命中與傷害。\n• 單劍-偏斜 (Deflect，反應為隊友 +PB/2 AC)、招架反擊 (Riposte)。\n• 雙劍新增碎甲架勢 (破 1 AC)、屬性架勢追加 (酸/雷鳴)。",
      veryRare: "+2 命中與傷害。\n• 掩體升級為 5 呎高 3/4 掩體；架勢效果暴擊/連擊強化。",
      legendary: "+3 命中與傷害。\n• 偏斜加值增為 PB；反擊命中附帶傷害；免疫擊破 (Immunobreak，暴擊壓制抗性/免疫 1 分鐘)。"
    }
  },
  {
    id: "tonfas",
    name: "穿龍棍 (Tonfas)",
    type: "軍用或簡易近戰武器",
    prof: "短棍, 連枷, 手斧, 輕型手槌, 釘頭槌, 鐵頭木棒, 戰槌",
    base: "25 gp, 1d6 鈍擊, 4 lb., 輕型 (每把)",
    rarities: {
      common: "基礎雙持鈍擊。",
      uncommon: "+1 命中與傷害。\n• 龍氣 (Dragon Spirit)：攻擊獲得 1 氣 (上限 5)。\n• 地之型 (Earth Style)：附贈動作花 2 氣傷害骰增至 1d8。\n• 推進騰空 (Propel)：附贈動作花 1 氣升空 10 呎獲得 10 呎飛行 (懸浮)。",
      rare: "+1 命中與傷害；雙持 +1 AC；氣上限 6。\n• 空中衝刺 (Air Dash)：空中時怪物接近反應花 1 氣飛離 10 呎。\n• 龍氣穿刺砲：動作花 6 氣發動 15 呎線狀衝擊，2d6 雷鳴傷害 (Huge 生物翻倍)。1/短休。",
      veryRare: "+2 命中與傷害；雙持 +1 AC；氣上限 7。\n• 空中衝刺增至 15 呎；穿刺砲增至 3d6；新增格擋 (Guard，反應花 3 氣 AC+3)。",
      legendary: "+2 命中與傷害；雙持 +2 AC；氣上限 8。\n• 騰空增至 20 呎；穿刺砲增至 4d6；格擋 AC 增加 PB 數值。"
    }
  },
  {
    id: "wire_knuckles",
    name: "鐵線拳套 (Wire Knuckles)",
    type: "簡易近戰武器",
    prof: "任意武器熟練",
    base: "30 gp, 1d4 鈍擊, 2 lb., 輕型 (每手)",
    rarities: {
      common: "基礎空手強化拳套。",
      uncommon: "強化打擊：徒手傷害若≥1d4，此武器傷害為該數值+2。\n• 翔蟲衝刺 (Wiredash)：受傷或成功抵抗狀態反應移動 10 呎 (無視困難地形且不引發藉機，PB 次/長休)。\n• 翔蟲受身 (Wirefall)：下墜反應暫停下墜 (PB 次/長休)。",
      rare: "+1 命中與傷害。\n• 鐵絲束縛 (Silkbind)：命中後附贈動作將目標束縛在 15 呎半徑內 (力量豁免掙脫)，可無視體型使目標陷入 被擒［狀態］。\n• 衝刺增至 15 呎；受身可消耗 2 次施展羽落術。",
      veryRare: "+2 命中與傷害。\n• 御龍 (Wyvern Ride 1/短休)：擒抱大一號生物時動作對抗檢定操縱其移動、強制發動攻擊或使其撞牆 (每動 10 呎受 1d8 傷害)。結束後雙方陷入 伏地［狀態］。",
      legendary: "+3 命中與傷害。\n• 御龍檢定具優勢，且勝過 5 點以上時 被擒［狀態］ 不結束且不陷入 伏地［狀態］，操縱攻擊增為 2 次，撞牆增為 1d10。"
    }
  },
  {
    id: "wyvern_boomerang",
    name: "飛龍迴力鏢 (Wyvern Boomerang)",
    type: "軍用或簡易近戰武器",
    prof: "巨劍, 任何具備投擲特性的武器",
    base: "1d10 揮砍, 雙手, 投擲 (60/180)\n附帶動力手套 (徒手傷害為 1d4)；命中立即回手，未命中回合結束回手",
    rarities: {
      common: "基礎投擲巨型迴力鏢。",
      uncommon: "彈跳跳躍：高跳距離等於遠跳距離。\n• 彈射 (Ricochet)：回手時附贈動作擊打彈向 30 呎內另一生物 (敏捷豁免受 1d6+力量/敏捷 傷害)。\n• 助跑投擲：每移動 10 呎射程 +5 呎 (至多 120/240)。",
      rare: "+1 命中與傷害。\n• 鐵絲繫刃 (Silkbind Strike)：觸及增至 15 呎並可附贈動作拉回。\n• 徒手攻擊後可以附贈動作額外打一下；彈射成功回手；彈射傷害升級。",
      veryRare: "+2 命中與傷害。\n• 鐵絲重導向 (Silkbind Redirect)：未命中時可將攻擊轉移至 15 呎內新目標；徒手傷害增至 1d6；彈射 1d8+Str。",
      legendary: "+3 命中與傷害。\n• 彈射 1d10+Str；助跑射程上限提升至 720 呎；鐵絲攻擊未命中可重骰 d20。"
    }
  },
  {
    id: "dual_repeaters",
    name: "雙重連射弩 (Dual Repeaters)",
    type: "軍用遠程武器",
    prof: "槍械 , 手弩 ",
    base: "25 gp, 2d4 穿刺, 5 lb., 彈藥 (30/120), 靈巧, 裝填(6), 輕型, 特殊 (每把)\n副手射擊: 攻擊動作射主手後可附贈動作射副手；不加屬性修正至傷害",
    rarities: {
      common: "彈容量各 6 發。可用通常彈、捕獲彈。",
      uncommon: "+1 命中與傷害。\n• 激勵充能 (Empowered)：在敵對生物 10 呎內裝填時進入充能態 1 分鐘，常規射程內命中與傷害 +1。\n• 新增彈種：烈焰彈 (火傷)、低溫彈 (冰傷)、風暴彈 (電傷)、黏渣彈 (酸傷)。",
      rare: "+2 命中與傷害。\n• 充能彈藥強化（烈焰點燃地面 1d6 火傷、低溫附帶水痕枯萎、風暴附帶雷電枯萎、黏渣減 1 AC）。\n• 新增極光彈 (光耀，照出 隱形［狀態］)、全貫通彈 (貫通線型均分傷害)、神射手彈 (無劣勢射程)、暮光彈 (死靈，體質豁免失敗陷入 目盲［狀態］)。",
      veryRare: "+2 命中與傷害。\n• 槍枝改裝模組 (短休可切換：破壞瞄準鏡、長程瞄準鏡、輕量化槍身、戰術彈匣)。",
      legendary: "+3 命中與傷害。\n• 擴展充能；新增改裝模組 (電容彈匣、幸運彈匣、消音器：在處於 躲藏［狀態］ 射擊未命中時位置不暴露)。"
    }
  }
];

/* ===== 武器渲染與互動 ===== */
function renderWeapons(list) {
  const grid = document.getElementById('weaponGrid');
  if (!grid) return;
  grid.innerHTML = '';
  list.forEach(w => {
    const card = document.createElement('div');
    card.className = 'weapon-card';
    card.onclick = () => openModal(w);
    card.innerHTML = `
      <div class="weapon-card-header">
        <span class="weapon-card-title">${w.name}</span>
        <span class="badge">${w.type.split(' ')[0]}</span>
      </div>
      <div class="weapon-meta"><strong>相容熟練：</strong>${w.prof}</div>
      <div style="font-size:0.85rem; color:#cbd5e1; white-space:pre-line;">${w.base.split('\\n')[0]}</div>
    `;
    grid.appendChild(card);
  });
}

function openModal(w) {
  const body = document.getElementById('modalBody');
  body.innerHTML = `
    <h2 style="color:var(--accent); margin-bottom:0.3rem;">${w.name}</h2>
    <div style="color:var(--text-muted); font-size:0.9rem; margin-bottom:1rem;">${w.type} | 熟練項需求: ${w.prof}</div>
    
    <div class="rule-box" style="padding:1rem; margin-bottom:1rem;">
      <strong>基礎屬性 (Nonmagical)：</strong><br>
      <span style="white-space:pre-line; font-size:0.9rem; color:#cbd5e1;">${w.base}</span>
    </div>

    <div class="rarity-block">
      <div class="rarity-title" style="color:var(--rarity-common)">常見 (Common)</div>
      <div style="white-space:pre-line; font-size:0.9rem;">${w.rarities.common}</div>
    </div>

    <div class="rarity-block uncommon">
      <div class="rarity-title" style="color:var(--rarity-uncommon)">非常見 (Uncommon)</div>
      <div style="white-space:pre-line; font-size:0.9rem;">${w.rarities.uncommon}</div>
    </div>

    <div class="rarity-block rare">
      <div class="rarity-title" style="color:var(--rarity-rare)">稀有 (Rare)</div>
      <div style="white-space:pre-line; font-size:0.9rem;">${w.rarities.rare}</div>
    </div>

    <div class="rarity-block very-rare">
      <div class="rarity-title" style="color:var(--rarity-very-rare)">非常稀有 (Very Rare)</div>
      <div style="white-space:pre-line; font-size:0.9rem;">${w.rarities.veryRare}</div>
    </div>

    <div class="rarity-block legendary">
      <div class="rarity-title" style="color:var(--rarity-legendary)">傳說 (Legendary)</div>
      <div style="white-space:pre-line; font-size:0.9rem;">${w.rarities.legendary}</div>
    </div>
  `;
  document.getElementById('weaponModal').classList.add('active');
}

function closeModal() {
  document.getElementById('weaponModal').classList.remove('active');
}

function filterWeapons() {
  const q = document.getElementById('searchInput').value.toLowerCase();
  const filtered = weaponsData.filter(w =>
    w.name.toLowerCase().includes(q) ||
    w.prof.toLowerCase().includes(q) ||
    w.type.toLowerCase().includes(q) ||
    JSON.stringify(w.rarities).toLowerCase().includes(q)
  );
  renderWeapons(filtered);
}

/* 點擊背景關閉彈窗 */
window.onclick = function(e) {
  if (e.target === document.getElementById('weaponModal')) {
    closeModal();
  }
};
/* ===== 異常狀態百科（僅卡片模式） ===== */
const conditions = [
  // 魔物獵人客製
  {
    id: 'bloodblight',
    name: '劫血異常 (Bloodblight)',
    category: 'mh',
    categoryLabel: '魔物獵人客製',
    type: '狀態',
    mechanics: [
      '若自回合開始後未對敵對生物進行攻擊或造成傷害，回合結束時損失 **1d10** 生命值。',
      '受到治療恢復生命值時，恢復量減半。'
    ]
  },
  {
    id: 'dragonblight',
    name: '龍屬性異常 (Dragonblight)',
    category: 'mh',
    categoryLabel: '魔物獵人客製',
    type: '狀態',
    mechanics: [
      '無法透過法術或攻擊造成 **冷凍、火焰、閃電、壞死或雷霆** 傷害。',
      '無法對其他生物施加以下狀態：**失明、魅惑、麻痺、中毒或石化**。'
    ]
  },
  {
    id: 'iceblight',
    name: '冰屬性異常 (Iceblight)',
    category: 'mh',
    categoryLabel: '魔物獵人客製',
    type: '疾病',
    mechanics: [
      '無法使用 **反應 (Reactions)**。',
      '移動速度減半。',
      '每回合最多只能進行 **一次攻擊**。'
    ]
  },
  {
    id: 'slick',
    name: '滑溜 (Slick)',
    category: 'mh',
    categoryLabel: '魔物獵人客製',
    type: '狀態',
    mechanics: [
      '**敏捷豁免** 檢定具有 **劣勢**。',
      '移動速度上限限制為 **半速**。',
      '進行 **擒抱** 檢定時具有 **劣勢**。',
      '使用 **體操 (Acrobatics)** 技巧脫離擒抱時具有 **優勢**。'
    ]
  },
  {
    id: 'tarred',
    name: '焦油附著 (Tarred)',
    category: 'mh',
    categoryLabel: '魔物獵人客製',
    type: '狀態 / 區域',
    mechanics: [
      '【生物】陷入 **束縛 (Restrained)** 狀態，免疫被繳械，無法使用非手中持有的武器或物品。',
      '【物品】焦油物品無法被移動或使用。',
      '【區域】焦油覆蓋區域視為 **難行地形**。',
      '【引燃效果】受到火焰傷害時狀態結束並引燃。點燃目標每回合開始受 **1d10 (6) 火傷**；區域引燃持續燃燒 **1 分鐘**。'
    ]
  },
  {
    id: 'thunderblight',
    name: '雷屬性異常 (Thunderblight)',
    category: 'mh',
    categoryLabel: '魔物獵人客製',
    type: '狀態',
    mechanics: [
      '避免陷入 **眩暈 (Stunned)** 狀態的豁免檢定具 **劣勢**。',
      '若受 **閃電或雷霆** 傷害，需進行 **DC 10 體質豁免**，失敗則陷入眩暈直至其下個回合結束。'
    ]
  },
  {
    id: 'waterblight',
    name: '水屬性異常 (Waterblight)',
    category: 'mh',
    categoryLabel: '魔物獵人客製',
    type: '毒素',
    mechanics: [
      '耐力被抽乾。',
      '在其回合中，只能選擇使用 **動作 (Action)** 或 **附贈動作 (Bonus Action)** 其中之一，不可兩者皆用。'
    ]
  },

  // D&D 2024 官方
  {
    id: 'exhaustion-2024',
    name: '力竭 (Exhaustion)',
    category: 'dnd2024',
    categoryLabel: 'D&D 2024 官方',
    type: '狀態 (可疊加)',
    mechanics: [
      '【力竭等級】可疊加，每次獲得增加 1 層。累計至 **6 級將立即死亡**。',
      '【D20 檢定懲罰】進行任何 D20 檢定時，減去（**力竭等級 × 2**）數值。',
      '【速度降低】移動速度減少（**力竭等級 × 5**）尺。'
    ]
  },
  {
    id: 'invisible-2024',
    name: '隱形 (Invisible)',
    category: 'dnd2024',
    categoryLabel: 'D&D 2024 官方',
    type: '狀態',
    mechanics: [
      '【出其不意】若投擲先攻時具有隱形狀態，**先攻檢定具有優勢**。',
      '【隱蔽】需要能看見目標的效應不會影響你（除非源頭能特別看見你）。裝備一併隱藏。',
      '【攻擊影響】以你為目標的攻擊檢定 **具劣勢**，你進行的攻擊檢定 **具優勢**。'
    ]
  },
  {
    id: 'incapacitated-2024',
    name: '失能 (Incapacitated)',
    category: 'dnd2024',
    categoryLabel: 'D&D 2024 官方',
    type: '狀態',
    mechanics: [
      '【無法行動】無法執行任何 **動作、附贈動作以及反應**。',
      '【無法專注】專注會立即被打斷。',
      '【無法說話】無法發聲或說話。',
      '【措手不及】若在失能期間投擲先攻，**先攻檢定具有劣勢**。'
    ]
  },
  {
    id: 'grappled-2024',
    name: '被擒 (Grappled)',
    category: 'dnd2024',
    categoryLabel: 'D&D 2024 官方',
    type: '狀態',
    mechanics: [
      '【速度歸零】速度變成 0，且無法被增加。',
      '【攻擊影響】除擒抱者外，對其他任何目標進行的攻擊檢定 **均具有劣勢**。',
      '【帶動】擒抱者移動時可拖曳或承載你（每移動 1 尺需額外消耗 1 尺移動力；若體型為微型或小於擒抱者 2 級以上則免額外消耗）。',
      '【限制】擒抱者至多只能抓體型大一級的生物（如中型抓大型），且必須空出一隻手。'
    ]
  },
  {
    id: 'stunned-2024',
    name: '震懾 (Stunned)',
    category: 'dnd2024',
    categoryLabel: 'D&D 2024 官方',
    type: '狀態',
    mechanics: [
      '【失能】陷入 **失能** 狀態，無法執行動作、附贈動作與反應。',
      '【豁免失敗】**力量豁免** 與 **敏捷豁免** 檢定 **自動失敗**。',
      '【受擊劣勢】以你為目標的攻擊檢定 **具有優勢**。'
    ]
  },
  {
    id: 'poisoned-2024',
    name: '中毒 (Poisoned)',
    category: 'dnd2024',
    categoryLabel: 'D&D 2024 官方',
    type: '狀態',
    mechanics: [
      '【屬性檢定與攻擊影響】所進行的所有 **攻擊檢定** 與 **屬性檢定** 均具有 **劣勢**。'
    ]
  },
  {
    id: 'frightened-2024',
    name: '恐慌 (Frightened)',
    category: 'dnd2024',
    categoryLabel: 'D&D 2024 官方',
    type: '狀態',
    mechanics: [
      '【屬性檢定與攻擊影響】只要恐懼源在視線內，進行的 **屬性檢定** 與 **攻擊檢定** 具 **劣勢**。',
      '【無法靠近】無法自願地向著靠近恐懼源的方向移動。'
    ]
  },
  {
    id: 'unconscious-2024',
    name: '昏迷 (Unconscious)',
    category: 'dnd2024',
    categoryLabel: 'D&D 2024 官方',
    type: '狀態',
    mechanics: [
      '【無力】陷入 **失能** 與 **伏地** 狀態，扔下手持物品。結束時維持伏地。',
      '【速度 0】速度為 0 且無法改變。**力量與敏捷豁免自動失敗**。',
      '【攻擊與重擊】對你發動的攻擊具 **優勢**。若攻擊者位於 **5 尺內**，命中直接變為 **重擊**。',
      '【無意識】無法感知周圍的事物。'
    ]
  },
  {
    id: 'deafened-2024',
    name: '耳聾 (Deafened)',
    category: 'dnd2024',
    categoryLabel: 'D&D 2024 官方',
    type: '狀態',
    mechanics: [
      '【聽不見】無法聽見任何聲音，任何依賴聽覺進行的屬性檢定（如察覺檢定）**自動失敗**。'
    ]
  },
  {
    id: 'prone-2024',
    name: '伏地 (Prone)',
    category: 'dnd2024',
    categoryLabel: 'D&D 2024 官方',
    type: '狀態',
    mechanics: [
      '【阻礙移動】唯二移動選項為匍匐移動，或消耗 **當前最大速度一半（向下取整）** 起立。速度為 0 時無法起立。',
      '【攻擊影響】你進行的攻擊具有 **劣勢**。',
      '【受擊修正】若攻擊者位於 **5 尺內對你攻擊具優勢**；若超過 5 尺 **對你攻擊具劣勢**。'
    ]
  },
  {
    id: 'restrained-2024',
    name: '束縛 (Restrained)',
    category: 'dnd2024',
    categoryLabel: 'D&D 2024 官方',
    type: '狀態',
    mechanics: [
      '【速度歸零】速度變成 0，且無法被增加。',
      '【攻擊影響】以你為目標的攻擊檢定 **具有優勢**，你進行的攻擊檢定 **具有劣勢**。',
      '【豁免影響】進行 **敏捷豁免** 檢定時具有 **劣勢**。'
    ]
  },
  {
    id: 'blinded-2024',
    name: '目盲 (Blinded)',
    category: 'dnd2024',
    categoryLabel: 'D&D 2024 官方',
    type: '狀態',
    mechanics: [
      '【看不見】無法視物，**自動失敗** 於任何需要視覺進行的屬性檢定。',
      '【攻擊影響】以你為目標的攻擊檢定 **具有優勢**，你進行的攻擊檢定 **具有劣勢**。'
    ]
  },
  {
    id: 'paralyzed-2024',
    name: '麻痺 (Paralyzed)',
    category: 'dnd2024',
    categoryLabel: 'D&D 2024 官方',
    type: '狀態',
    mechanics: [
      '【失能與速度 0】陷入 **失能** 狀態，速度變成 0 且無法增加。',
      '【豁免失敗】**力量與敏捷豁免檢定自動失敗**。',
      '【自動重擊】以你為目標的攻擊具 **優勢**。若攻擊者位於 **5 尺內**，命中直接變為 **重擊**。'
    ]
  },
  {
    id: 'charmed-2024',
    name: '魅惑 (Charmed)',
    category: 'dnd2024',
    categoryLabel: 'D&D 2024 官方',
    type: '狀態',
    mechanics: [
      '【無法傷害魅惑源】無法攻擊魅惑源，也無法將其作為傷害性能力或魔法效應的對象。',
      '【社交優勢】魅惑源對你進行的任何 **社交屬性檢定均具有優勢**。'
    ]
  },
  {
    id: 'petrified-2024',
    name: '石化 (Petrified)',
    category: 'dnd2024',
    categoryLabel: 'D&D 2024 官方',
    type: '狀態',
    mechanics: [
      '【化為石質】軀體與非魔法物品變為石質，重量變為 **10 倍**，停止老化。',
      '【失能與速度 0】陷入 **失能**，速度變 0。**力量與敏捷豁免自動失敗**。',
      '【攻擊與抗性】攻擊者具 **優勢**。獲得 **所有傷害抗性**，且 **免疫中毒** 狀態。'
    ]
  },
  {
    id: 'shapeshifting-2024',
    name: '變形 (Shape-shifting)',
    category: 'dnd2024',
    categoryLabel: 'D&D 2024 官方',
    type: '狀態 / 效應',
    mechanics: [
      '【效果延續】身上發生的狀態、法術、詛咒會持續帶至新形態。若死亡則變回真實形態。',
      '【能力與裝備】變形後職業與種族能力、專長等暫時消失（職業持續效果如天生術法立即結束）。不會自動變出裝備。'
    ]
  },
  {
    id: 'bloodied-2024',
    name: '血腥 / 浴血 (Bloodied)',
    category: 'dnd2024',
    categoryLabel: 'D&D 2024 官方',
    type: '狀態',
    mechanics: [
      '【生命門檻】當生物當前生命值降至 **最大生命值的 50% 或更少** 時，自動陷入此狀態。',
      '【能力連動】許多職業能力（如生命領域牧師引導神力）或怪物特質會在目標血腥時觸發額外效果。'
    ]
  },
  {
    id: 'dead-2024',
    name: '死亡 (Dead)',
    category: 'dnd2024',
    categoryLabel: 'D&D 2024 官方',
    type: '狀態',
    mechanics: [
      '【無法自然恢復】沒有生命值，除非先獲得復活魔法，否則無法恢復生命值。',
      '【靈魂自由】靈魂前往外層位面，知道施法者身份並可選擇拒絕復活。',
      '【復活保留效應】帶著未過期狀態復活；力竭等級減少 1 級；自動解除所有魔法物品同調 (Attunement)。'
    ]
  },
  {
    id: 'hide-2024',
    name: '隱蔽 / 躲藏 (Hide)',
    category: 'dnd2024',
    categoryLabel: 'D&D 2024 官方',
    type: '狀態',
    mechanics: [
      '【位置隱蔽】其他生物無法得知精確位置。你的 **攻擊與先攻檢定具有優勢**。',
      '【解除條件】發起攻擊、發出超過耳語聲音（含具語音成分施法）、被敵方直視（掩體外）、被搜索/被動感知/盲視/震顫感知發現時解除。',
      '【移動與戰鬥】可在掩體間移動，結束回合時若位於掩體外則自動失效。戰鬥中敵人知道你最後消失的位置。'
    ]
  }
];

let pinnedStatusIds = new Set();

function toggleStatusPin(id, event) {
  if (event) event.stopPropagation();
  if (pinnedStatusIds.has(id)) {
    pinnedStatusIds.delete(id);
  } else {
    pinnedStatusIds.add(id);
  }
  renderStatusView();
}

function formatStatusText(text) {
  if (!text) return '';
  return text.replace(/\*\*(.*?)\*\*/g, (match, p1) => {
    const t = p1.trim();
    if (t.includes('優勢')) return `<span class="kw-advantage">${p1}</span>`;
    if (t.includes('劣勢') || t.includes('失敗')) return `<span class="kw-disadvantage">${p1}</span>`;
    if (t.includes('失能') || t.includes('重擊')) return `<span class="kw-highlight">${p1}</span>`;
    return `<strong style="color:var(--accent)">${p1}</strong>`;
  });
}

function renderStatusView() {
  const container = document.getElementById('status-display');
  if (!container) return;

  const searchTerm = (document.getElementById('statusSearch')?.value || '').toLowerCase().trim();

  let filtered = conditions.filter(item => {
    return item.name.toLowerCase().includes(searchTerm) ||
           item.type.toLowerCase().includes(searchTerm) ||
           item.mechanics.some(m => m.toLowerCase().includes(searchTerm));
  });

  // 釘選的排在前面
  filtered.sort((a, b) => {
    const aP = pinnedStatusIds.has(a.id) ? 1 : 0;
    const bP = pinnedStatusIds.has(b.id) ? 1 : 0;
    return bP - aP;
  });

  // 更新計數
  document.getElementById('match-count').textContent = filtered.length;
  const pinInd = document.getElementById('pin-indicator');
  if (pinnedStatusIds.size > 0) {
    pinInd.classList.remove('hidden');
    document.getElementById('pin-count').textContent = pinnedStatusIds.size;
  } else {
    pinInd.classList.add('hidden');
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="rule-box" style="text-align:center; padding:40px;">
        <div style="font-size:32px; margin-bottom:8px;">📜</div>
        <h3 style="color:var(--accent);">未找到符合的狀態</h3>
        <p style="color:var(--text-muted);">請嘗試修改關鍵字。</p>
      </div>`;
    return;
  }

  container.innerHTML = `<div class="status-cards-grid">${filtered.map(item => {
    const isPinned = pinnedStatusIds.has(item.id);
    const badgeClass = item.category === 'dnd2024' ? 'badge-dnd' : 'badge-mh';
    const mechanicsHtml = item.mechanics.map(m =>
      `<li><span>${formatStatusText(m)}</span></li>`
    ).join('');

    return `
      <div class="status-card ${isPinned ? 'pinned' : ''}">
        <div class="status-card-header">
          <div>
            <div class="status-card-title">${item.name}</div>
            <div class="status-card-badges">
              <span class="${badgeClass}">${item.categoryLabel}</span>
              <span class="badge-type">${item.type}</span>
            </div>
          </div>
          <button class="pin-btn ${isPinned ? 'pinned' : ''}" onclick="toggleStatusPin('${item.id}', event)" title="${isPinned ? '取消釘選' : '釘選'}">
            ${isPinned ? '★' : '☆'}
          </button>
        </div>
        <ul class="status-mechanics">${mechanicsHtml}</ul>
      </div>`;
  }).join('')}</div>`;
}

// 切換到異常狀態分頁時自動渲染
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.dataset.section === 'status') {
      setTimeout(renderStatusView, 50);
    }
  });
});
/* 初始化 */
renderWeapons(weaponsData);
