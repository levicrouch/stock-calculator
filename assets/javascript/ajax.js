///////////////////////////////////////////////
// Ajax JavaScript 
//////////////////////////////////////////////

///////////////////////////////////////////////////
// Objects and variables
///////////////////////////////////////////////////

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

///////////////////////////////////////////////////
// Functions
///////////////////////////////////////////////////

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
    // create a new div
    var sizeDiv = $("<div>");

    sizeDiv.addClass("news-card col s6 m12");
    $(".company-news").append(sizeDiv);

    var cardDiv = $("<div>");
    cardDiv.addClass("card-horiz card horizontal col s6 m12");
    sizeDiv.append(cardDiv)

    var rowDiv = $("<div>");
    rowDiv.addClass("row");
    cardDiv.append(rowDiv);

    var cardImageDiv = $("<div>");
    cardImageDiv.addClass("card-image");
    rowDiv.append(cardImageDiv);

    var cardImageSrc = $("<img>");
    cardImageSrc.addClass("news-image");
    cardImageSrc.attr("src", image);
    rowDiv.append(cardImageSrc);

    var cardStackedDiv = $("<div>");
    cardStackedDiv.addClass("card-stacked");
    rowDiv.append(cardStackedDiv);

    var cardContentDiv = $("<div>");
    cardContentDiv.addClass("card-content");
    cardContentDiv.html("<h5>" + headline + "</h5>");
    cardStackedDiv.append(cardContentDiv);

    var cardActionDiv = $("<div>");
    cardActionDiv.addClass("card-action");
    cardActionDiv.html("<a target='_blank' href=" + url + ">Link to article</a>");
    cardStackedDiv.append(cardActionDiv);
}

function getStock(company) {
    console.log("in the getStock function")
    company = company.toLowerCase();
    for (i = 0; i < objCompany.name.length; i++) {
        objCompany.name[i] = objCompany.name[i].toLowerCase();
        console.log(objCompany.name[i]);
        if (company === objCompany.name[i]) {
            symbol = objCompany.symbol[i];
        }
    }
    var interval = 5;
    var apiKey = "&apikey=Q56IE8OZ9WE75H7P";
    var apiFunctionMonthly = "function=TIME_SERIES_MONTHLY_ADJUSTED&";
    var apiFunctionIntraday = "function=TIME_SERIES_INTRADAY&";
    var apiFunctionDaily = "function=TIME_SERIES_DAILY&";
    // var queryUrl = "https://www.alphavantage.co/query?" + apiFunctionDaily +
    // "symbol=" + symbol + "&" + "interval=" + interval + "min" + apiKey + "&datatype=json";
    
    // grab the current day opening price
    var queryUrl = "https://www.alphavantage.co/query?" + apiFunctionDaily +
            "symbol=" + symbol + apiKey + "&datatype=json";
        $.ajax({
            url: queryUrl,
            method: "GET"
        }).done(function (dailyData) {
            console.log("dailyData",dailyData);
            var dailyData = dailyData['Time Series (Daily)'];
            var todaysData = dailyData[Object.keys(dailyData)[0]];
            var yesterdaysData = dailyData[Object.keys(dailyData)[1]];
            var todayOpenPrice = todaysData['1. open'];
            var yesterdaysClosingPrice = yesterdaysData['4. close'];
            console.log("todayOpenPrice", todayOpenPrice);
            console.log("yesterdaysClosingPrice", yesterdaysClosingPrice);

            $(".stock-price").empty();

        });
    }


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

    console.log(['Meta Data'].lastIndexOf(['Monthly Adjusted Time Series']));
