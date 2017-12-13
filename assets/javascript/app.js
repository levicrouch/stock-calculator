console.log("We are in the javascript");

///////////////////////////////////////////////////
// Variables and objects
///////////////////////////////////////////////////
var companies = ["AAPL", "MSFT", "AMZN", "FB",
    "GOOG", "GOOGL", "INTC", "CSCO",
    "CMCSA", "AMGN", "NVDA", "AVGO",
    "GILD", "TXN", "QCOM", "KHC",
    "PYPL", "ADBE", "CHTR", "SBUX",
    "CELG", "PCLN", "COST", "NFLX",
    "WBA"];
// Apple Inc 
// Microsoft Corp
// Amazon
// Facebook
// Alphabet Inc C
// Alphabet Inc A
// Intel Corp
// Cisco
// Comcast 
// Amgen Inc
// NVIDIA
// Broadcom
// Gilead Sciences
// Texas Instruments
// Qualcomm
// The Kraft
// Paypal
// Adobe
// Charter Communications
// Starbucks
// Celgene
// Priceline
// Costco
// Netflix
// Walgreens
var html = {
    basicCalculatorClass: ".basic-calculator",
    stockBuyCalcClass: ".stock-buy-calc",
    stockSellCalcClass: ".stock-sell-calc"
};
///////////////////////////////////////////////////
// Functions
///////////////////////////////////////////////////
$(document).ready(function(){
    $('.carousel').carousel();
    $('.carousel').duration(3000); //duration
  });

///////////////////////////////////////////////////
// Left navbar calculators
///////////////////////////////////////////////////

///////////////////////////////////////////////////
// Main Display
///////////////////////////////////////////////////
$(document).ready(function(){
    $('.collapsible').collapsible();
  });
///////////////////////////////////////////////////
// stock ticker code
///////////////////////////////////////////////////

///////////////////////////////////////////////////
// stock buy calculator
///////////////////////////////////////////////////
// Use case: I have X amount of money to invest, how many shares of Y company can I buy?
// Show the stock buy calculator when the button is pushed
function stockBuyCalculator() {
    if ($(html.stockBuyCalcClass).attr("data-visibility", "hidden")) {
        var isVisible = false;
    } else if ($(html.stockBuyCalcClass).attr("data-visibility", "visible")) {
        var isVisible = true;
    }
    if (isVisible = false) {
        $(html.stockBuyCalcClass).show
    }

}

///////////////////////////////////////////////////
// stock sell calculator
///////////////////////////////////////////////////
// Use case: I have X number of shares in company Y, how much will I make\lose if I sell now?

///////////////////////////////////////////////////
// currency converter calculator
///////////////////////////////////////////////////
// Use case: how much is my X currency worth to Y currency?
// Use case: I would like to buy X number of Y currency using Z currency, how many how much Z currency will this cost?
