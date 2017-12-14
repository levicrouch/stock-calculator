
<<<<<<< HEAD
///////////////////////////////////////////////////
// Variables and objects
///////////////////////////////////////////////////
var companies = ["Apple: AAPL", "MSFT", "AMZN", "FB",
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
=======
// var url = ’https://newsapi.org/v2/top-headlines?' +
// ‘sources=bbc-news&’ +
// ‘apiKey=e1ffb31d120540ed8e3b56860997fb59’;
var title = "&title=stock+news"
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
            // var newsFeed = $("#company-news")
            // .children()
            // .eq(1)
            // .children()
            // .eq(0)
            // .children();
            // console.log(newsFeed);
            // newsFeed.eq(0).text(newsApi.title);
            $(newsApi).append("#company-news");
        // }
    });
// }
// runQuery();
>>>>>>> 7f852cabca37941152c4ca2388332818061e598e

// alpha vantage api

// $("")
var symbol = "GOOG";
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

