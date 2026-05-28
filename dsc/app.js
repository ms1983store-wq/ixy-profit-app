const marketData = [
  { model: "DSC-WX350", count: 440, overall: 24300, junk: { price: 11400, count: 46 }, good: { price: 26000, count: 259 }, fair: { price: 21600, count: 123 }, poor: { price: 18800, count: 39 }, veryPoor: { price: 12499, count: 19 } },
  { model: "DSC-WX500", count: 271, overall: 38800, junk: { price: 19500, count: 28 }, good: { price: 40700, count: 147 }, fair: { price: 37150, count: 78 }, poor: { price: 29900, count: 34 }, veryPoor: { price: 18150, count: 12 } },
  { model: "DSC-WX300", count: 217, overall: 21500, junk: { price: 9900, count: 23 }, good: { price: 23000, count: 122 }, fair: { price: 19800, count: 61 }, poor: { price: 12000, count: 19 }, veryPoor: { price: 9800, count: 15 } },
  { model: "DSC-RX100", count: 180, overall: 38250, junk: { price: 20000, count: 16 }, good: { price: 40000, count: 96 }, fair: { price: 35000, count: 50 }, poor: { price: 30000, count: 19 }, veryPoor: { price: 29000, count: 15 } },
  { model: "DSC-W810", count: 158, overall: 13000, junk: { price: 4800, count: 10 }, good: { price: 14500, count: 83 }, fair: { price: 11500, count: 55 }, poor: { price: 8700, count: 15 }, veryPoor: { price: 5600, count: 5 } },
  { model: "DSC-RX100M3", count: 156, overall: 62650, junk: { price: 30500, count: 10 }, good: { price: 65350, count: 84 }, fair: { price: 59800, count: 47 }, poor: { price: 58000, count: 17 }, veryPoor: { price: 33930, count: 8 } },
  { model: "DSC-WX7", count: 151, overall: 12205, junk: { price: 8123, count: 9 }, good: { price: 12900, count: 80 }, fair: { price: 11850, count: 56 }, poor: { price: 10750, count: 10 }, veryPoor: { price: 4200, count: 5 } },
  { model: "DSC-W350", count: 135, overall: 12500, junk: { price: 9450, count: 9 }, good: { price: 13500, count: 79 }, fair: { price: 10400, count: 44 }, poor: { price: 11700, count: 9 }, veryPoor: { price: 9500, count: 3 } },
  { model: "DSC-W830", count: 130, overall: 16000, junk: { price: 8250, count: 18 }, good: { price: 18000, count: 73 }, fair: { price: 15500, count: 35 }, poor: { price: 11000, count: 16 }, veryPoor: { price: 8000, count: 6 } },
  { model: "DSC-WX200", count: 113, overall: 15000, junk: { price: 5900, count: 8 }, good: { price: 15690, count: 56 }, fair: { price: 15100, count: 48 }, poor: { price: 11000, count: 8 }, veryPoor: { price: 6000, count: 1 } },
  { model: "DSC-HX30V", count: 109, overall: 14000, junk: { price: 9888, count: 20 }, good: { price: 17000, count: 53 }, fair: { price: 13300, count: 31 }, poor: { price: 10500, count: 23 }, veryPoor: { price: 9800, count: 2 } },
  { model: "DSC-W610", count: 105, overall: 11000, junk: { price: 5850, count: 12 }, good: { price: 12200, count: 53 }, fair: { price: 11000, count: 35 }, poor: { price: 6000, count: 11 }, veryPoor: { price: 4900, count: 6 } },
  { model: "DSC-WX5", count: 103, overall: 9900, junk: { price: 5000, count: 12 }, good: { price: 11700, count: 46 }, fair: { price: 9400, count: 41 }, poor: { price: 7000, count: 12 }, veryPoor: { price: 3890, count: 4 } },
  { model: "DSC-T9", count: 99, overall: 6000, junk: { price: 2500, count: 13 }, good: { price: 7980, count: 39 }, fair: { price: 6050, count: 42 }, poor: { price: 4500, count: 9 }, veryPoor: { price: 2500, count: 9 } },
  { model: "DSC-WX100", count: 98, overall: 13150, junk: { price: 8600, count: 2 }, good: { price: 14000, count: 52 }, fair: { price: 12980, count: 37 }, poor: { price: 12800, count: 7 }, veryPoor: { price: 7390, count: 2 } },
  { model: "DSC-RX100M7", count: 92, overall: 143705, junk: { price: 52500, count: 1 }, good: { price: 145988, count: 73 }, fair: { price: 136500, count: 16 }, poor: { price: 135300, count: 2 }, veryPoor: { price: 52500, count: 1 } },
  { model: "DSC-W570", count: 92, overall: 15000, junk: { price: 6980, count: 3 }, good: { price: 15999, count: 49 }, fair: { price: 13650, count: 36 }, poor: { price: 6980, count: 7 }, veryPoor: { price: 8700, count: 0 } },
  { model: "DSC-WX30", count: 88, overall: 10500, junk: { price: 5300, count: 8 }, good: { price: 11890, count: 50 }, fair: { price: 9550, count: 30 }, poor: { price: 9822, count: 4 }, veryPoor: { price: 4150, count: 4 } },
  { model: "DSC-W170", count: 87, overall: 8200, junk: { price: 4300, count: 6 }, good: { price: 8500, count: 50 }, fair: { price: 8051, count: 29 }, poor: { price: 6180, count: 5 }, veryPoor: { price: 3599, count: 3 } },
  { model: "DSC-WX1", count: 87, overall: 8500, junk: { price: 3750, count: 8 }, good: { price: 9450, count: 46 }, fair: { price: 7879, count: 32 }, poor: { price: 5500, count: 3 }, veryPoor: { price: 3600, count: 6 } },
  { model: "DSC-HX5V", count: 85, overall: 11000, junk: { price: 5900, count: 4 }, good: { price: 12000, count: 49 }, fair: { price: 9500, count: 28 }, poor: { price: 8100, count: 6 }, veryPoor: { price: 5600, count: 2 } },
  { model: "DSC-W530", count: 82, overall: 11050, junk: { price: 6900, count: 5 }, good: { price: 13000, count: 48 }, fair: { price: 10900, count: 24 }, poor: { price: 8990, count: 8 }, veryPoor: { price: 5450, count: 2 } },
  { model: "DSC-WX50", count: 78, overall: 10990, junk: { price: 6000, count: 11 }, good: { price: 12800, count: 41 }, fair: { price: 10840, count: 22 }, poor: { price: 9250, count: 10 }, veryPoor: { price: 5280, count: 5 } },
  { model: "DSC-HX60V", count: 73, overall: 23400, junk: { price: 13500, count: 7 }, good: { price: 25000, count: 39 }, fair: { price: 24050, count: 20 }, poor: { price: 16950, count: 8 }, veryPoor: { price: 14900, count: 6 } },
  { model: "DSC-W320", count: 52, overall: 11700, junk: { price: 8023, count: 4 }, good: { price: 12150, count: 30 }, fair: { price: 10630, count: 18 }, poor: { price: 10140, count: 4 }, veryPoor: { price: 6800, count: 0 } },
];

const modelCollator = new Intl.Collator("ja-JP", { numeric: true, sensitivity: "base" });
const sortedMarketData = [...marketData].sort((a, b) => modelCollator.compare(a.model, b.model));

const colorRules = {
  silver: { label: "シルバー", factor: 1, note: "基準色として補正なし" },
  black: { label: "ブラック", factor: 1.03, note: "黒系はやや強めに補正" },
  pink: { label: "ピンク", factor: 1.06, note: "人気色として強めに補正" },
  other: { label: "その他", factor: 0.97, note: "流通が読みづらいため少し控えめ" },
};

const modeRules = {
  standard: {
    label: "標準",
    circle: { minProfit: 3000, roi: 25 },
    triangle: { minProfit: 1000, roi: 10 },
  },
  conservative: {
    label: "堅め",
    circle: { minProfit: 5000, roi: 35 },
    triangle: { minProfit: 2500, roi: 20 },
  },
  aggressive: {
    label: "攻め",
    circle: { minProfit: 2000, roi: 20 },
    triangle: { minProfit: 800, roi: 8 },
  },
};

const basisLabels = {
  overall: "全体中央値",
  junk: "ジャンク",
  good: "目立った傷なし",
  fair: "やや傷あり",
  poor: "傷あり",
  veryPoor: "全体的に悪い",
};

const yen = new Intl.NumberFormat("ja-JP", {
  style: "currency",
  currency: "JPY",
  maximumFractionDigits: 0,
});

const modelSelect = document.querySelector("#modelSelect");
const colorSelect = document.querySelector("#colorSelect");
const basisSelect = document.querySelector("#basisSelect");
const salePriceInput = document.querySelector("#salePrice");
const buyPriceInput = document.querySelector("#buyPrice");
const feeRateInput = document.querySelector("#feeRate");
const shippingPreset = document.querySelector("#shippingPreset");
const shippingCostInput = document.querySelector("#shippingCost");
const customShippingWrap = document.querySelector("#customShippingWrap");
const tableSearch = document.querySelector("#tableSearch");

const decisionBox = document.querySelector("#decisionBox");
const decisionMark = document.querySelector("#decisionMark");
const decisionLabel = document.querySelector("#decisionLabel");
const decisionNote = document.querySelector("#decisionNote");
const profitAmount = document.querySelector("#profitAmount");
const roiRate = document.querySelector("#roiRate");
const salesMargin = document.querySelector("#salesMargin");
const breakEven = document.querySelector("#breakEven");
const circleLimit = document.querySelector("#circleLimit");
const triangleLimit = document.querySelector("#triangleLimit");
const thresholdText = document.querySelector("#thresholdText");
const priceBars = document.querySelector("#priceBars");
const modelCount = document.querySelector("#modelCount");
const marketTable = document.querySelector("#marketTable");

function roundToHundred(value) {
  return Math.round(value / 100) * 100;
}

function getModel() {
  return marketData.find((item) => item.model === modelSelect.value) || sortedMarketData[0];
}

function getBasePrice(model, basis) {
  if (!model) return 0;
  if (basis === "overall") return model.overall;
  return model[basis]?.price ?? 0;
}

function getCount(model, basis) {
  if (!model) return 0;
  if (basis === "overall") return model.count;
  return model[basis]?.count ?? 0;
}

function getColorAdjustedPrice(model, basis, colorKey) {
  const base = getBasePrice(model, basis);
  const factor = colorRules[colorKey]?.factor ?? 1;
  return roundToHundred(base * factor);
}

function normalize(value) {
  return String(value || "").toUpperCase().replace(/\s+/g, " ").trim();
}

function activeMode() {
  return document.querySelector('input[name="judgeMode"]:checked')?.value || "standard";
}

function shippingCost() {
  if (shippingPreset.value === "custom") {
    return Number(shippingCostInput.value) || 0;
  }
  return Number(shippingPreset.value) || 0;
}

function maxBuyFor(netRevenue, rule) {
  if (netRevenue <= 0) return 0;
  const byProfit = netRevenue - rule.minProfit;
  const byRoi = netRevenue / (1 + rule.roi / 100);
  return Math.max(0, Math.floor(Math.min(byProfit, byRoi)));
}

function judge(profit, roi, rules) {
  if (profit >= rules.circle.minProfit && roi >= rules.circle.roi) return "circle";
  if (profit >= rules.triangle.minProfit && roi >= rules.triangle.roi) return "triangle";
  return "cross";
}

function updateSalePriceFromSelection() {
  const model = getModel();
  salePriceInput.value = getColorAdjustedPrice(model, basisSelect.value, colorSelect.value);
}

function renderBars(model) {
  const keys = ["overall", "junk", "good", "fair", "poor", "veryPoor"];
  const color = colorRules[colorSelect.value] || colorRules.silver;
  const maxPrice = Math.max(...keys.map((key) => getBasePrice(model, key)), getColorAdjustedPrice(model, basisSelect.value, colorSelect.value));
  const colors = {
    overall: "#2563eb",
    junk: "#b42318",
    good: "#0f766e",
    fair: "#b7791f",
    poor: "#9a3412",
    veryPoor: "#6b7280",
    adjusted: "#7c3aed",
  };

  const rows = keys.map((key) => {
    const price = getBasePrice(model, key);
    const count = getCount(model, key);
    return { key, label: `${basisLabels[key]}${key === "overall" ? "" : ` (${count})`}`, price, color: colors[key] };
  });

  rows.splice(1, 0, {
    key: "adjusted",
    label: `${color.label}補正後`,
    price: getColorAdjustedPrice(model, basisSelect.value, colorSelect.value),
    color: colors.adjusted,
  });

  modelCount.textContent = `${model.count}件 / ${color.note}`;
  priceBars.innerHTML = rows
    .map((row) => {
      const width = maxPrice ? Math.max(5, Math.round((row.price / maxPrice) * 100)) : 0;
      return `
        <div class="bar-row ${row.key === "adjusted" ? "adjusted-row" : ""}">
          <span>${row.label}</span>
          <div class="bar-track" aria-hidden="true">
            <div class="bar-fill" style="--bar:${width}%; --bar-color:${row.color}"></div>
          </div>
          <strong>${yen.format(row.price)}</strong>
        </div>
      `;
    })
    .join("");
}

function renderTable() {
  const query = normalize(tableSearch.value);
  marketTable.innerHTML = sortedMarketData
    .filter((item) => normalize(item.model).includes(query))
    .map((item) => {
      const selected = item.model === modelSelect.value ? "selected" : "";
      return `
        <tr class="${selected}" data-model="${item.model}">
          <td>${item.model}</td>
          <td>${yen.format(item.overall)}</td>
          <td>${yen.format(item.junk.price)}</td>
          <td>${yen.format(item.good.price)}</td>
          <td>${yen.format(item.fair.price)}</td>
          <td>${yen.format(item.poor.price)}</td>
          <td>${yen.format(item.veryPoor.price)}</td>
        </tr>
      `;
    })
    .join("");
}

function renderCalculator() {
  const model = getModel();
  const color = colorRules[colorSelect.value] || colorRules.silver;
  const salePrice = Number(salePriceInput.value) || 0;
  const buyPrice = Number(buyPriceInput.value) || 0;
  const feeRate = Number(feeRateInput.value) || 0;
  const fee = Math.round(salePrice * (feeRate / 100));
  const ship = shippingCost();
  const netRevenue = Math.max(0, salePrice - fee - ship);
  const profit = netRevenue - buyPrice;
  const roi = buyPrice > 0 ? (profit / buyPrice) * 100 : 0;
  const margin = salePrice > 0 ? (profit / salePrice) * 100 : 0;
  const rules = modeRules[activeMode()];
  const result = buyPrice > 0 ? judge(profit, roi, rules) : "triangle";
  const circleMax = maxBuyFor(netRevenue, rules.circle);
  const triangleMax = maxBuyFor(netRevenue, rules.triangle);

  decisionBox.className = `decision ${result}`;
  if (!buyPrice) {
    decisionMark.textContent = "△";
    decisionLabel.textContent = "仕入れ金額を入力";
    decisionNote.textContent = `${model.model} / ${color.label} / ${basisLabels[basisSelect.value]} ${yen.format(salePrice)} を基準に計算します。`;
  } else if (result === "circle") {
    decisionMark.textContent = "○";
    decisionLabel.textContent = "仕入れ候補";
    decisionNote.textContent = `利益 ${yen.format(profit)}、対仕入れ ${roi.toFixed(1)}%。${color.label}補正込みで基準を超えています。`;
  } else if (result === "triangle") {
    decisionMark.textContent = "△";
    decisionLabel.textContent = "条件次第";
    decisionNote.textContent = "利益は残ります。色、付属品、動作確認、市場のブレを見て判断してください。";
  } else {
    decisionMark.textContent = "×";
    decisionLabel.textContent = "見送り寄り";
    decisionNote.textContent = "基準未満です。値下げ交渉か、販売見込みの見直しが必要です。";
  }

  profitAmount.textContent = buyPrice ? yen.format(profit) : "-";
  profitAmount.className = profit >= 0 ? "positive" : "negative";
  roiRate.textContent = buyPrice ? `${roi.toFixed(1)}%` : "-";
  roiRate.className = roi >= 0 ? "positive" : "negative";
  salesMargin.textContent = buyPrice ? `${margin.toFixed(1)}%` : "-";
  salesMargin.className = margin >= 0 ? "positive" : "negative";
  breakEven.textContent = yen.format(netRevenue);
  circleLimit.textContent = yen.format(circleMax);
  triangleLimit.textContent = yen.format(triangleMax);
  thresholdText.textContent = `${rules.label}モード: ○は利益 ${yen.format(rules.circle.minProfit)} 以上かつ対仕入れ ${rules.circle.roi}% 以上、△は利益 ${yen.format(rules.triangle.minProfit)} 以上かつ対仕入れ ${rules.triangle.roi}% 以上。手数料 ${feeRate}% / 送料 ${yen.format(ship)} / 色補正 ${Math.round(color.factor * 100)}% で計算。`;

  renderBars(model);
  renderTable();
}

function init() {
  modelSelect.innerHTML = sortedMarketData
    .map((item) => `<option value="${item.model}">${item.model}</option>`)
    .join("");

  modelSelect.value = "DSC-WX350";
  colorSelect.value = "silver";
  basisSelect.value = "overall";
  salePriceInput.value = getColorAdjustedPrice(getModel(), basisSelect.value, colorSelect.value);
  buyPriceInput.value = "";
  renderTable();
  renderCalculator();
}

modelSelect.addEventListener("change", () => {
  updateSalePriceFromSelection();
  renderCalculator();
});

colorSelect.addEventListener("change", () => {
  updateSalePriceFromSelection();
  renderCalculator();
});

basisSelect.addEventListener("change", () => {
  updateSalePriceFromSelection();
  renderCalculator();
});

salePriceInput.addEventListener("input", renderCalculator);
buyPriceInput.addEventListener("input", renderCalculator);
feeRateInput.addEventListener("input", renderCalculator);
shippingPreset.addEventListener("change", () => {
  const custom = shippingPreset.value === "custom";
  customShippingWrap.hidden = !custom;
  if (!custom) shippingCostInput.value = shippingPreset.value;
  renderCalculator();
});
shippingCostInput.addEventListener("input", renderCalculator);
document.querySelectorAll('input[name="judgeMode"]').forEach((input) => {
  input.addEventListener("change", renderCalculator);
});
tableSearch.addEventListener("input", renderTable);
marketTable.addEventListener("click", (event) => {
  const row = event.target.closest("tr[data-model]");
  if (!row) return;
  modelSelect.value = row.dataset.model;
  updateSalePriceFromSelection();
  renderCalculator();
});
document.querySelector("#resetButton").addEventListener("click", () => {
  modelSelect.value = "DSC-WX350";
  colorSelect.value = "silver";
  basisSelect.value = "overall";
  salePriceInput.value = getColorAdjustedPrice(getModel(), basisSelect.value, colorSelect.value);
  buyPriceInput.value = "";
  feeRateInput.value = "10";
  shippingPreset.value = "750";
  shippingCostInput.value = "750";
  customShippingWrap.hidden = true;
  document.querySelector('input[name="judgeMode"][value="standard"]').checked = true;
  renderCalculator();
});

init();
