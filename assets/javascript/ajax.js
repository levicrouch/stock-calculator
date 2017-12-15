var matCard = true;
objCompany = {
    name: [
        "Apple", "Microsoft", "Amazon", "Facebook",
        "Google", "Alphabet", "Intel", "Cisco",
        "Comcast", "Amgen", "Nvidia", "Broadcom",
        "Gilead Sciences", "Texas Instruments", "Qualcomm", "Kraft Heinz",
        "Paypal", "Adobe", "Charter Communications", "Starbucks",
        "Celgene", "Priceline", "Costco", "Netflix",
        "Walgreens", "Tesla", "JPMorgan", "Berkshire Hathaway",
        "Johnson & Johnson"
    ],
    symbol: [
        "AAPL", "MSFT", "AMZN", "FB",
        "GOOG", "GOOGL", "INTC", "CSCO",
        "CMCSA", "AMGN", "NVDA", "AVGO",
        "GILD", "TXN", "QCOM", "KHC",
        "PYPL", "ADBE", "CHTR", "SBUX",
        "CELG", "PCLN", "COST", "NFLX",
        "WBA", "TSLA", "JPM", "BRK-A",
        "JNJ"
    ],
    url: [
        "http://investor.apple.com/", "https://www.microsoft.com/en-us/investor/", "http://phx.corporate-ir.net/phoenix.zhtml?c=97664&p=irol-irhome", "https://investor.fb.com/home/default.aspx",
        "https://abc.xyz/investor/", "https://abc.xyz/investor/", "https://www.intc.com/investor-relations/default.aspx", "https://investor.cisco.com/investor-relations/overview/default.aspx",
        "http://www.cmcsa.com/", "http://investors.amgen.com/", "http://investor.nvidia.com/home/default.aspx", "http://investors.broadcom.com",
        "http://investors.gilead.com", "http://www.ti.com/corp/docs/investor_relations/index.html", "https://www.qualcomm.com/info/investor-relations", "http://ir.kraftheinzcompany.com/",
        "https://investor.paypal-corp.com/", "http://www.adobe.com/investor-relations.html", "http://ir.charter.com", "https://investor.starbucks.com",
        "http://ir.celgene.com/", "http://ir.pricelinegroup.com/", "http://phx.corporate-ir.net/phoenix.zhtml?c=83830&p=irol-irhome", "https://ir.netflix.com/",
        "http://investor.walgreensbootsalliance.com/", "http://ir.tesla.com/", "https://www.jpmorganchase.com/corporate/investor-relations/investor-relations.htm", "http://www.berkshirehathaway.com/reports.html",
        "http://www.investor.jnj.com"
    ]
}
console.log(objCompany);

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
        articleLink.html("<a class='link-to-article' target='_blank' href=" + url + ">Link to article</a>");
        colDiv.append(articleLink);
    }

}

// $("")
function getStock(company) {
    company = company.toLowerCase();

    // console.log(objCompany.symbol[2]);
    for (i = 0; i < objCompany.name.length; i++) {
        objCompany.name[i] = objCompany.name[i].toLowerCase();
        console.log(objCompany.name[i]);
        if (company === objCompany.name[i]) {
            symbol = objCompany.symbol[i];
            // console.log("symbol" + symbol);
        }
    }
    // var symbol = "AMZN";
    var interval = 5;
    var apiKey = "&apikey=Q56IE8OZ9WE75H7P"
    var queryUrl2 = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&" + "symbol=" + symbol + "&" + "interval=" + interval + "min" + apiKey;

    $.ajax({
        url: queryUrl2,
        method: "GET"
    }).done(function (alphaApi) {
        console.log(alphaApi);
        console.log(queryUrl2);

        $(".stock-price").empty();

        // for (i = 0; i < 1; i++) {
        //     var headline = data.articles[i].title;
        //     var source = data.articles[i].source.name;
        //     var urlToImage = data.articles[i].urlToImage;
        //     writeStock(urlToImage, source, headline);
        // }
        var headline = ["Meta Data"]["2. Symbol"];
        console.log(headline);
    });


}

// getStock();
function writeStock(image, source, headline) {
    console.log("in writesStock function");
    // create a new div

    var sizeStockDiv = $("<div>");
    sizeStockDiv.addClass("stock-card col s12 m7");
    $(".stock-price").append(sizeStockDiv);

    var cardStockDiv = $("<div>");
    cardStockDiv.addClass("stock-card-horiz card horizontal");
    $(".stock-card").append(cardStockDiv);

    // var cardStockImageDiv = $("<div>");
    // cardStockImageDiv.addClass("stack-card-image");
    // $(".stock-card-horiz").append(cardStockImageDiv);

    // var cardStockImageSrc = $("<img>");
    // cardStockImageSrc.attr("src", image);
    // $(".stock-card-image").append(cardStockImageSrc);

    var cardStockStackedDiv = $("<div>");
    cardStockStackedDiv.addClass("stock-card-stacked");
    $(".stock-card-horiz").append(cardStockStackedDiv);

    var cardStockContentDiv = $("<div>");
    cardStockContentDiv.addClass("stock-card-content");
    cardStockContentDiv.html("<p>" + headline + "</p>");
    $(".stock-card-stacked").append(cardStockContentDiv);
}
