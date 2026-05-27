const marketData = [
  { model: "IXY 650", count: 354, overall: 39000, junk: { price: 20000, count: 28 }, good: { price: 40000, count: 232 }, fair: { price: 35800, count: 73 }, poor: { price: 34000, count: 24 }, veryPoor: { price: 19800, count: 25 } },
  { model: "IXY 200", count: 253, overall: 18000, junk: { price: 10500, count: 29 }, good: { price: 19800, count: 137 }, fair: { price: 17000, count: 83 }, poor: { price: 15250, count: 22 }, veryPoor: { price: 9000, count: 11 } },
  { model: "IXY DIGITAL 10", count: 216, overall: 22222, junk: { price: 10650, count: 18 }, good: { price: 25000, count: 100 }, fair: { price: 21800, count: 76 }, poor: { price: 16950, count: 32 }, veryPoor: { price: 9950, count: 8 } },
  { model: "IXY DIGITAL 900 IS", count: 190, overall: 18250, junk: { price: 11000, count: 31 }, good: { price: 21850, count: 80 }, fair: { price: 18600, count: 68 }, poor: { price: 13650, count: 26 }, veryPoor: { price: 7650, count: 16 } },
  { model: "IXY 600F", count: 189, overall: 22000, junk: { price: 16200, count: 27 }, good: { price: 23908, count: 110 }, fair: { price: 20000, count: 55 }, poor: { price: 15400, count: 18 }, veryPoor: { price: 14950, count: 6 } },
  { model: "IXY DIGITAL 930 IS", count: 184, overall: 30000, junk: { price: 21800, count: 13 }, good: { price: 32800, count: 101 }, fair: { price: 29800, count: 64 }, poor: { price: 26000, count: 13 }, veryPoor: { price: 21500, count: 6 } },
  { model: "IXY DIGITAL 910 IS", count: 181, overall: 18000, junk: { price: 11406, count: 42 }, good: { price: 20000, count: 63 }, fair: { price: 19500, count: 72 }, poor: { price: 14900, count: 30 }, veryPoor: { price: 11850, count: 16 } },
  { model: "IXY DIGITAL 920 IS", count: 170, overall: 22000, junk: { price: 11800, count: 13 }, good: { price: 23990, count: 80 }, fair: { price: 21150, count: 64 }, poor: { price: 16750, count: 24 }, veryPoor: { price: 14499, count: 2 } },
  { model: "IXY DIGITAL 70", count: 168, overall: 18590, junk: { price: 9950, count: 14 }, good: { price: 19800, count: 85 }, fair: { price: 18100, count: 62 }, poor: { price: 11111, count: 17 }, veryPoor: { price: 7400, count: 4 } },
  { model: "IXY DIGITAL 510 IS", count: 165, overall: 28800, junk: { price: 20000, count: 10 }, good: { price: 29990, count: 84 }, fair: { price: 26800, count: 55 }, poor: { price: 24000, count: 19 }, veryPoor: { price: 15800, count: 7 } },
  { model: "IXY 10S", count: 161, overall: 39980, junk: { price: 30000, count: 19 }, good: { price: 42500, count: 95 }, fair: { price: 39800, count: 45 }, poor: { price: 35000, count: 11 }, veryPoor: { price: 23500, count: 10 } },
  { model: "IXY DIGITAL 800 IS", count: 153, overall: 11800, junk: { price: 8550, count: 39 }, good: { price: 16800, count: 41 }, fair: { price: 12800, count: 65 }, poor: { price: 9000, count: 25 }, veryPoor: { price: 7640, count: 22 } },
  { model: "IXY DIGITAL 25 IS", count: 140, overall: 15950, junk: { price: 10000, count: 21 }, good: { price: 18000, count: 58 }, fair: { price: 15900, count: 53 }, poor: { price: 12500, count: 17 }, veryPoor: { price: 9350, count: 12 } },
  { model: "IXY DIGITAL 60", count: 138, overall: 12500, junk: { price: 6700, count: 16 }, good: { price: 13800, count: 48 }, fair: { price: 12390, count: 64 }, poor: { price: 6550, count: 16 }, veryPoor: { price: 6700, count: 10 } },
  { model: "IXY 200F", count: 137, overall: 20000, junk: { price: 12600, count: 19 }, good: { price: 22645, count: 62 }, fair: { price: 19800, count: 51 }, poor: { price: 18000, count: 17 }, veryPoor: { price: 9800, count: 7 } },
  { model: "IXY DIGITAL 110 IS", count: 134, overall: 17000, junk: { price: 11850, count: 32 }, good: { price: 19446, count: 54 }, fair: { price: 18000, count: 42 }, poor: { price: 11900, count: 21 }, veryPoor: { price: 12500, count: 17 } },
  { model: "IXY DIGITAL 20 IS", count: 131, overall: 20000, junk: { price: 10000, count: 9 }, good: { price: 21740, count: 54 }, fair: { price: 21000, count: 51 }, poor: { price: 16000, count: 20 }, veryPoor: { price: 9500, count: 6 } },
  { model: "IXY 180", count: 130, overall: 17700, junk: { price: 12300, count: 16 }, good: { price: 19480, count: 65 }, fair: { price: 16000, count: 48 }, poor: { price: 13400, count: 8 }, veryPoor: { price: 12000, count: 9 } },
  { model: "IXY 210F", count: 116, overall: 22000, junk: { price: 17049, count: 13 }, good: { price: 23500, count: 72 }, fair: { price: 21000, count: 35 }, poor: { price: 19250, count: 6 }, veryPoor: { price: 16800, count: 3 } },
  { model: "IXY 630", count: 105, overall: 28800, junk: { price: 14000, count: 6 }, good: { price: 29800, count: 62 }, fair: { price: 27390, count: 34 }, poor: { price: 19500, count: 5 }, veryPoor: { price: 15428, count: 4 } },
  { model: "IXY 30S", count: 111, overall: 40000, junk: { price: 18750, count: 6 }, good: { price: 43000, count: 57 }, fair: { price: 38773, count: 35 }, poor: { price: 34000, count: 13 }, veryPoor: { price: 19750, count: 6 } },
  { model: "IXY 210", count: 73, overall: 19999, junk: { price: 10300, count: 6 }, good: { price: 22000, count: 47 }, fair: { price: 16250, count: 16 }, poor: { price: 19500, count: 5 }, veryPoor: { price: 11000, count: 5 } },
  { model: "IXY 110F", count: 35, overall: 20000, junk: { price: 15000, count: 3 }, good: { price: 21000, count: 25 }, fair: { price: 18650, count: 8 }, poor: { price: 17500, count: 0 }, veryPoor: { price: 17500, count: 2 } },
  { model: "IXY DIGITAL 50", count: 109, overall: 11999, junk: { price: 5750, count: 14 }, good: { price: 13440, count: 56 }, fair: { price: 10800, count: 32 }, poor: { price: 7650, count: 16 }, veryPoor: { price: 5990, count: 5 } },
];

const modelCollator = new Intl.Collator("ja-JP", { numeric: true, sensitivity: "base" });
const sortedMarketData = [...marketData].sort((a, b) => modelCollator.compare(a.model, b.model));

const colorRules = {
  silver: { label: "シルバー", factor: 1, note: "基準色として補正なし" },
  black: { label: "ブラック", factor: 1.03, note: "黒系はやや強めに補正" },
  pink: { label: "ピンク", factor: 1.06, note: "人気色として強めに補正" },
  other: { label: "その他", factor: 0.97, note: "流通が読みにくいため少し控えめ" },
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
  veryPoor: "全体悪い",
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
    decisionNote.textContent = `利益は残ります。色、付属品、動作確認、相場のブレを見て判断。`;
  } else {
    decisionMark.textContent = "×";
    decisionLabel.textContent = "見送り寄り";
    decisionNote.textContent = `基準未満です。値下げ交渉か、販売見込みの見直しが必要です。`;
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
  thresholdText.textContent = `${rules.label}モード: ○は利益${yen.format(rules.circle.minProfit)}以上かつ対仕入れ${rules.circle.roi}%以上、△は利益${yen.format(rules.triangle.minProfit)}以上かつ対仕入れ${rules.triangle.roi}%以上。手数料 ${feeRate}% / 送料 ${yen.format(ship)} / 色補正 ${Math.round(color.factor * 100)}% で計算。`;

  renderBars(model);
  renderTable();
}

function init() {
  modelSelect.innerHTML = sortedMarketData
    .map((item) => `<option value="${item.model}">${item.model}</option>`)
    .join("");

  modelSelect.value = "IXY 650";
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
  modelSelect.value = "IXY 650";
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
