
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

