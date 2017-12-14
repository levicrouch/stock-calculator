// grab newsarticles on the specified company
function getNews(company) {
    // hardcode the sources for now. Maybe add an option for the user to select which news sources to use
    var source = "bloomberg";
    var source = source + "&";
    var company = company + "&";

    console.log("in getNews function");
    var queryUrl = "https://newsapi.org/v2/everything?" +
        "q=" + company +
        "sources=" + source +
        "apiKey=e1ffb31d120540ed8e3b56860997fb59";
    console.log("queryUrl", queryUrl);
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).done(function (data) {
        console.log(data);
        // clear out old articles
        $(".company-news").empty();
        // Grab top 10 articles data points
        for (i = 0; i < 1; i++) {
            var headline = data.articles[i].title;
            var source = data.articles[i].source.name;
            var urlToImage = data.articles[i].urlToImage;
            writeNews(urlToImage, source, headline);
        }
    })
        .fail(function (err) {
            throw err;
        });


}

function writeNews(image, source, headline) {
    console.log("in writeNews function");
    // create a new div

    var sizeDiv = $("<div>");
    sizeDiv.addClass("news-card col s12 m7");
    $(".company-news").append(sizeDiv);

    var cardDiv = $("<div>");
    cardDiv.addClass("card-horiz card horizontal");
    $(".news-card").append(cardDiv);

    var cardImageDiv = $("<div>");
    cardImageDiv.addClass("card-image");
    $(".card-horiz").append(cardImageDiv);

    var cardImageSrc = $("<img>");
    cardImageSrc.attr("src", image);
    $(".card-image").append(cardImageSrc);

    var cardStackedDiv = $("<div>");
    cardStackedDiv.addClass("card-stacked");
    $(".card-horiz").append(cardStackedDiv);

    var cardContentDiv = $("<div>");
    cardContentDiv.addClass("card-content");
    cardContentDiv.html("<p>" + headline + "</p>");
    $(".card-stacked").append(cardContentDiv);

}
// runQuery();

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