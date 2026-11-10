<div align="center">

# Sello Mpho

### Data Analyst | Excel Dashboards | Data Cleaning & Validation

I turn messy, real-world datasets into verified, decision-ready dashboards.

[![Portfolio](https://img.shields.io/badge/PORTFOLIO-MPHO--SELLO.VERCEL.APP-1F4E79?style=for-the-badge)](https://mpho-sello.vercel.app/)
[![LinkedIn](https://img.shields.io/badge/LINKEDIN-MPHO%20SELLO-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mpho-sello-692193241)
[![Email](https://img.shields.io/badge/EMAIL-SELLOMPHO1601%40GMAIL.COM-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:sellompho1601@gmail.com)

📍 Bloemfontein, South Africa

</div>

---

## About Me

I work through data the way an analyst should: **clean it, verify it, then visualise it, and document every decision along the way.** My projects don't stop at charts. Each one includes a verification layer that cross-checks the numbers, and a write-up explaining what was recovered, what was flagged, and why.

---

## Featured Analytics Projects

### 🛍️ Store Sales Dashboard
**Transaction analysis, assumption testing and payment behaviour** · `Excel` `PivotTables` `PivotCharts` `Slicers`

Analysis of 5,000 retail transactions covering customer demographics, categories, seasons and payment methods. The central challenge was a correctness question: did the discount still need to be applied to the sales amount, or was it already included?

- Built a test column to reverse the discount and compare implied original prices per item
- The test **disproved my own assumption**: the same item (e.g. Handbag) implied prices from R21.86 to R261.13, so no fixed "original price" existed
- Resolved the ambiguity against the dataset's source documentation (`Amount` = total transaction value) rather than guessing, preventing double-discounted, understated revenue
- Verified every breakdown (category, season, gender, payment method) reconciles to 5,000 orders
- **Finding:** Card payments make up ~80% of orders (4,009 vs 991 Cash on Delivery) and this holds across every season

**Repository:** [Store-Sales-Dasboard](https://github.com/Sellomphoo/Store-Sales-Dasboard)

---

### 📈 Retail Sales Dashboard
**Cleaning disguised nulls and recovering missing data responsibly** · `Excel` `PivotTables` `Slicers` `Array Formulas`

A 1,825-row daily sales dataset covering one full year, with missing values hidden as text (`"NaN?"`, `"Null"`, `"Nan"`) alongside genuine blanks.

- Recovered 7 missing categories **by elimination**, since every date contains exactly one row per category
- Imputed missing Sales and Quantity with **category medians**, with flag columns so imputed rows stay traceable
- Labelled the 6 unrecoverable Region values as **"Unknown"** instead of guessing, so regional totals stay honest
- Spotted that all 5 missing Quantity values belonged to the Sports category and documented it as a data-quality observation
- **Findings:** total sales R1,374,503.17 and profit R453,870.44; March was the strongest sales month (R121,248.87) and February the weakest (R105,601.14)

**Repository:** [Retail-Sales-Dashboard](https://github.com/Sellomphoo/Retail-Sales-Dashboard)

---

### 🏪 Retail Store Sales
**Formula-based gap filling and a verification layer that caught real errors** · `Excel` `PivotTables` `Formulas` `Data Validation`

A 12,575-row synthetic retail dataset with deliberately dirty data across price, quantity, total spent and item fields.

- Recovered missing values using the exact relationship `Total Spent = Price Per Unit × Quantity`, and left rows with two or more gaps blank rather than fabricating figures
- Extracted item abbreviations from messy text with `TEXTAFTER` and validated a Category → Item mapping across the full dataset before using it
- Built a separate **Calculations sheet** that exposed formulas pointing at the wrong cells (duplicated counts, totals that didn't reconcile). Fixed so every total matches the 12,575 transactions
- **Findings:** total revenue R1,552,071 spread within ~15% across eight categories, with discount use, payment method and channel all close to evenly split

**Repository:** [Retail-Store-Sales](https://github.com/Sellomphoo/Retail-Store-Sales)

---

## Analytics Toolkit

| Area | Technologies |
|---|---|
| Spreadsheets & Dashboards | Microsoft Excel, PivotTables, PivotCharts, Slicers, KPI cards |
| Data Cleaning | Missing-value recovery, null standardisation, text parsing (`TEXTAFTER`), median imputation, `IFERROR` / `ISNUMBER` guards |
| Formulas & Lookups | `COUNTIFS`, `SUMIF`, `VLOOKUP`, array formulas, helper columns |
| Data Validation | Reconciliation sheets, cross-checks against totals, hypothesis testing |
| Documentation | GitHub, README write-ups, documented cleaning decisions |

---

## How I Work

- **Verify before visualising.** A chart is only as trustworthy as the number behind it, so every dashboard figure is cross-checked first.
- **Recover only what can be proven.** If a missing value can be deduced with certainty, I fill it. If it can't, I flag it instead of guessing.
- **Test assumptions against the data.** When a hypothesis fails, I change the approach rather than force the result.
- **Check the source.** When the data can't settle a question, I go to the dataset's documentation.
- **Document the decisions.** Every project explains what was cleaned, what was imputed and what was left alone.

---

## Let's Connect

🌐 [mpho-sello.vercel.app](https://mpho-sello.vercel.app/)
💼 [LinkedIn](https://www.linkedin.com/in/mpho-sello-692193241)
📧 [sellompho1601@gmail.com](mailto:sellompho1601@gmail.com)
📍 Bloemfontein, South Africa

**Open to Data Analyst opportunities.**
