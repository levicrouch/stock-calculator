var matCard = false;
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
        for (i = 0; i < 10; i++) {
            // var newsDiv = $("div class='news-div'>");

            var headline = data.articles[i].title;
            var source = data.articles[i].source.name;
            var urlToImage = data.articles[i].urlToImage;
            var storyUrl = data.articles[i].url
            writeNews(urlToImage, source, headline, storyUrl);
        }

    })
        .fail(function (err) {
            throw err;
        });
}

function writeNews(image, source, headline, url) {
    console.log("in writeNews function");
    if (matCard) {
        // create a new div
        var sizeDiv = $("<div>");
        sizeDiv.addClass("news-card col s6 m5");
        $(".company-news").append(sizeDiv);

        var cardDiv = $("<div>");
        cardDiv.addClass("card-horiz card horizontal col s6 m9");
        sizeDiv.append(cardDiv)


        var cardImageDiv = $("<div>");
        cardImageDiv.addClass("card-image");
        cardDiv.append(cardImageDiv);

        var cardImageSrc = $("<img>");
        cardImageSrc.addClass("news-image");
        cardImageSrc.attr("src", image);
        cardImageDiv.append(cardImageSrc);

        var cardStackedDiv = $("<div>");
        cardStackedDiv.addClass("card-stacked");
        cardImageDiv.append(cardStackedDiv);

        var cardContentDiv = $("<div>");
        cardContentDiv.addClass("card-content");
        cardContentDiv.html("<h5>" + headline + "</h5>");
        cardStackedDiv.append(cardContentDiv);

        //     <div class="card-action">
        //     <a href="#">This is a link</a>
        //   </div>
        var cardActionDiv = $("<div>");
        cardActionDiv.addClass("card-action");
        cardActionDiv.html("<a target='_blank' href=" + url + "'>Link to article</a>");
        cardStackedDiv.append(cardActionDiv);
    }else{
        // create a new div
        var colDiv = $("<div>");
        colDiv.addClass("news-feed col-s5");
        $(".company-news").append(colDiv);

        var materializeIcon = $("<i>");
        materializeIcon.addClass("news-feed-icon small material-icons col-s1");
        materializeIcon.text("business");
        colDiv.append(materializeIcon);
        
        var headlineContent = $("<h6>");
        headlineContent.addClass("headline-title col-s6");
        headlineContent.text(headline);
        colDiv.append(headlineContent);

        var articleLink = $("<div>");
        articleLink.addClass("link-article");
        articleLink.html("<a class='link-to-article' target='_blank' href=" + url + "'>Link to article</a>");
        colDiv.append(articleLink);
    }

}

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

