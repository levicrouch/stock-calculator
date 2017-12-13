console.log("We are in the javascript");

// var url = ’https://newsapi.org/v2/top-headlines?' +
// ‘sources=bbc-news&’ +
// ‘apiKey=e1ffb31d120540ed8e3b56860997fb59’;
var title = "stock+news"
// url for financial news API 
var queryUrl = "https://newsapi.org/v2/top-headlines?" + "sources=bbc-news&" + "apiKey=e1ffb31d120540ed8e3b56860997fb59";
// variable to count articles that come in
// var articleCounter = 0;
// function to show number of articles and the final URL to download data from
// function runQuery(articleCounter, queryURL) {
    // ajax intialization
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).done(function (newsApi) {
        console.log(newsApi);
        // Loop through and provide the correct number of articles
        // for (var i = 0; i < articleCounter; i++) {
        //     // Add to the Article Counter (to make sure we show the right number)
        //     articleCounter++;
            var newsFeed = $("news-feed")
            .children()
            .eq(1)
            .children()
            .eq(0)
            .children();
            console.log(newsFeed);
            newsFeed.eq(0).text(newsApi.title);
        // }
    });
// }
// runQuery();

// alpha vantage api
var symbol = "AAPL";
var interval = 5;
var apiKey = "&apikey=Q56IE8OZ9WE75H7P"
var queryUrl2 = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&" + "symbol=" + symbol + "&" + "interval=" + interval + "min" + apiKey;

$.ajax({
    url: queryUrl2,
    method: "GET"
}).done(function (AlphaApi) {
    console.log(AlphaApi);
    console.log(queryUrl2);
});
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

///////////////////////////////////////////////////
// Left navbar calculators
///////////////////////////////////////////////////

///////////////////////////////////////////////////
// Main Display
///////////////////////////////////////////////////
$(document).ready(function () {
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
