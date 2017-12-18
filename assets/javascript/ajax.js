///////////////////////////////////////////////
// Ajax JavaScript 
//////////////////////////////////////////////

///////////////////////////////////////////////////
// Objects and variables
///////////////////////////////////////////////////
// Create empty object

objMatchedData = {
    property: "value"
};
objApi = {
    alphaVantage: {
        key: "&apikey=Q56IE8OZ9WE75H7P",
        url: "https://www.alphavantage.co/query?",
        interval: 5,
        function: {
            monthly: "function=TIME_SERIES_MONTHLY_ADJUSTED&",
            intraday: "function=TIME_SERIES_INTRADAY&",
            daily: "function=TIME_SERIES_DAILY&"
        }
    },
    news: {
        url: "https://newsapi.org/v2/everything?",
        source: "bloomberg"
    }
};
objCompany = {
    companies: [
        {
            name: "Apple",
            symbol: "AAPL",
            url: "http://investor.apple.com",
            img: "apple.png"
        },
        {
            name: "Alphabet",
            symbol: "GOOGL",
            url: "https://abc.xyz/investor",
            img: "alphabet.png"
        },
        {
            name: "Disney",
            symbol: "DIS",
            url: "https://thewaltdisneycompany.com/investor-relations",
            img: "disney.png"
        },
        {
            name: "Amazon",
            symbol: "AMZN",
            url: "http://phx.corporate-ir.net/phoenix.zhtml?c=97664&p=irol-irhome",
            img: "amazon.png"
        },
        {
            name: "Microsoft",
            symbol: "MSFT",
            url: "https://www.microsoft.com/en-us/investor",
            img: "microsoft.png"
        },
        {
            name: "Facebook",
            symbol: "fb",
            url: "https://investor.fb.com/home/default.aspx",
            img: "fb.png"
        },
        {
            name: "Google",
            symbol: "GOOG",
            url: "https://abc.xyz/investor",
            img: "google.png"
        },
        {
            name: "Intel",
            symbol: "INTC",
            url: "https://www.intc.com/investor-relations/default.aspx",
            img: "intel.png"
        },
        {
            name: "Cisco",
            symbol: "CSCO",
            url: "https://investor.cisco.com/investor-relations/overview/default.aspx",
            img: "cisco.png"
        },
        {
            name: "Amgen",
            symbol: "AMGN",
            url: "http://investors.amgen.com",
            img: "amgen.png"
        },
        {
            name: "Comcast",
            symbol: "CMCSA",
            url: "http://www.cmcsa.com",
            img: "comcast.png"
        },
        {
            name: "Nvidia",
            symbol: "NVDA",
            url: "http://investor.nvidia.com/home/default.aspx",
            img: "nvidia.png"
        },
        {
            name: "Broadcom",
            symbol: "AVGO",
            url: "http://investors.broadcom.com",
            img: "broadcom.png"
        },
        {
            name: "Gilead Sciences",
            symbol: "GILD",
            url: "http://investors.gilead.com",
            img: "gilead.png"
        },
        {
            name: "Texas Instruments",
            symbol: "TXN",
            url: "http://www.ti.com/corp/docs/investor_relations/index.html",
            img: "ti.png"
        },
        {
            name: "Qualcomm",
            symbol: "QCOM",
            url: "https://www.qualcomm.com/info/investor-relations",
            img: "qualcomm.png"
        },
        {
            name: "Kraft Heinz",
            symbol: "KHC",
            url: "http://ir.kraftheinzcompany.com",
            img: "kraftheainz.jpg"
        },
        {
            name: "Paypal",
            symbol: "PYPL",
            url: "https://investor.paypal-corp.com",
            img: "paypal.png"
        },
        {
            name: "Adobe",
            symbol: "ADBE",
            url: "http://www.adobe.com/investor-relations.html",
            img: "adobe.png"
        },
        {
            name: "Charter Communications",
            symbol: "CHTR",
            url: "http://ir.charter.com",
            img: "charter.png"
        },
        {
            name: "Starbucks",
            symbol: "SBUX",
            url: "https://investor.starbucks.com",
            img: "starbucks.png"
        },
        {
            name: "Celgene",
            symbol: "CELG",
            url: "http://ir.celgene.com",
            img: "celgene.png"
        },
        {
            name: "Priceline",
            symbol: "PCLN",
            url: "http://ir.pricelinegroup.com",
            img: "priceline.png"
        },
        {
            name: "Costco",
            symbol: "COST",
            url: "http://phx.corporate-ir.net/phoenix.zhtml?c=83830&p=irol-irhome",
            img: "costco.png"
        },
        {
            name: "Netflix",
            symbol: "NFLX",
            url: "https://ir.netflix.com",
            img: "netflix.png"
        },
        {
            name: "Walgreens",
            symbol: "WBA",
            url: "http://investor.walgreensbootsalliance.com",
            img: "walgreens.png"
        },
        {
            name: "Tesla",
            symbol: "TSLA",
            url: "http://ir.tesla.com",
            img: "tesla.png"
        },
        {
            name: "JPMorgan",
            symbol: "JPM",
            url: "https://www.jpmorganchase.com/corporate/investor-relations/investor-relations.htm",
            img: "jpmorgan.png"
        },
        {
            name: "Berkshire Hathaway",
            symbol: "BRK-A",
            url: "http://www.berkshirehathaway.com/reports.html",
            img: "berkshire.png"
        },
        {
            name: "Johnson",
            symbol: "JNJ",
            url: "http://www.investor.jnj.com",
            img: "johnson.png"
        }
    ]
};

// console.log(objCompany);
///////////////////////////////////////////////////
// Functions
///////////////////////////////////////////////////

// grab newsarticles on the specified company
function getNews() {
    // hardcode the sources for now. Maybe add an option for the user to select which news sources to use
    // var source = "bloomberg";
    var source = objApi.news.source + "&";
    var company = comp + "&";

    console.log("in getNews function");
    var url = objApi.news.url +
        "q=" + company +
        "sources=" + source +
        "apiKey=e1ffb31d120540ed8e3b56860997fb59";
    console.log("queryUrl", queryUrl);
    $.ajax({
        url: url,
        method: "GET"
    }).done(function (data) {
        console.log(data);
        // clear out old articles
        $(".company-news").empty();
        // Grab top 10 articles data points
        for (i = 0; i < 10; i++) {
            var objNews = {
                headline: data.articles[i].title,
                source: data.articles[i].source.name,
                img: data.articles[i].urlToImage,
                url: data.articles[i].url
            }
            writeNews(objNews);
        }

    })
        .fail(function (err) {
            throw err;
        });
}

function writeNews() {
    console.log("in writeNews function");
    // create a new div
    var sizeDiv = $("<div>");

    sizeDiv.addClass("news-card col s6 m12");
    $(".stock-price").append(sizeDiv);

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
    cardImageSrc.attr("src", obj.img);
    rowDiv.append(cardImageSrc);

    var cardStackedDiv = $("<div>");
    cardStackedDiv.addClass("card-stacked");
    rowDiv.append(cardStackedDiv);

    var cardContentDiv = $("<div>");
    cardContentDiv.addClass("card-content");
    cardContentDiv.html("<h5>" + obj.headline + "</h5>");
    cardStackedDiv.append(cardContentDiv);

    var cardActionDiv = $("<div>");
    cardActionDiv.addClass("card-action");
    cardActionDiv.html("<a target='_blank' href=" + obj.url + ">Link to article</a>");
    cardStackedDiv.append(cardActionDiv);
}

function parseCompanyData() {
    // function for matching and parsing the company data
    clickedCompanyName = clickedCompanyName.toLowerCase();
    for (i = 0; i < objCompany.companies.length; i++) {
        var companyFromObject = objCompany.companies[i].name.toLowerCase();
        if (clickedCompanyName === companyFromObject) {
            objMatchedData.name = objCompany.companies[i].name.toLowerCase();
                objMatchedData.symbol = objCompany.companies[i].symbol.toUpperCase();
                objMatchedData.url = objCompany.companies[i].url;
                objMatchedData.img = objCompany.companies[i].img;
                objMatchedData.price = 0;
                objMatchedData.volume = 0;
            console.log("objMatchedData:", objMatchedData);
            return objMatchedData;
        }
    }
}

function getDailyStockData() {
    // grab the current day JSON
    var url = objApi.alphaVantage.url + objApi.alphaVantage.function.daily +
        "symbol=" + objMatchedData.symbol + objApi.alphaVantage.key + "&datatype=json";

    return $.ajax({
        url: url,
        method: "GET",
        dataType: "json"
    });
}

function getIntraDayStockData() {
    // grab the intraday data
    console.log("In the getIntraDayStockData function");
    var url = objApi.alphaVantage.url + objApi.alphaVantage.function.intraday +
        "symbol=" + objMatchedData.symbol +
        "&" + "interval=" + objApi.alphaVantage.interval + "min" + objApi.alphaVantage.key + "&datatype=json";

    return $.ajax({
        url: url,
        timeout: 10000,
        method: "GET"
    });
    // }).done(function (response) {
    //     var response = response['Time Series (5min)'];
    //     // console.log("intraDayData", intraDayData);
    //     var mostRecentIntraDayData = response[Object.keys(response)[0]];
    //     objMatchedData.price = mostRecentIntraDayData['1. open'];
    //     objMatchedData.volume = mostRecentIntraDayData['5. volume'];

    //     console.log("objIntradayData.price", objMatchedData.price);
    //     console.log("objIntradayData.volume", objMatchedData.volume);
    //     return objMatchedData;

    // }).fail(function (err) {
    //     throw err;
    // });
}

function getStock() {
    console.log("in the getStock function")
    // populateCompanyData();
    // var objComp = parseCompanyData(comp);
    // return the daily and intraday day based on the company selected
    // getDailyStockData().done(function(data) {
    //     console.log("data 305:", data);
    //     var data = data['Time Series (Daily)'];
    //     console.log("data 307:", data);
    //     var todaysData = data[Object.keys(data)[0]];
    //     var yesterdaysData = data[Object.keys(data)[1]];
    //     // add today's opening price string and yesterday's closing price string
    //     objMatchedData.openPrice = todaysData['1. open'];
    //     objMatchedData.closingPrice = yesterdaysData['4. close'];
    //     console.log("objDailyData.openPrice", objMatchedData.openPrice);
    //     console.log("objDailyData.closingPrice", objMatchedData.closingPrice);
    //     // return objDailyData;
    // }).fail(function (err) {
    //     throw err;
    // });
    getIntraDayStockData().done(function (response) {
        var response = response['Time Series (5min)'];
        // console.log("intraDayData", intraDayData);
        var mostRecentIntraDayData = response[Object.keys(response)[0]];
        objMatchedData.price = mostRecentIntraDayData['1. open'];
        objMatchedData.volume = mostRecentIntraDayData['5. volume'];

        console.log("objMatchedData.price", objMatchedData.price);
        console.log("objMatchedData.volume", objMatchedData.volume);
        // return objMatchedData;

    }).fail(function (err) {
        throw err;
    });

    // combine the objects into a singular object that gets written to the HTML
    console.log("after capturing intraday data: objMatchedData:", objMatchedData);
    // write the data to the html
    if (objMatchedData.price !== 0){
        writeStock();
    }
}


function writeStock() {

    console.log("in writesStock function");
    // clear out old data
    $(".stock-price").empty();

    var currentPrice = parseInt(objMatchedData.price);
    currentPrice = currentPrice.toFixed(2);

    var sizeDiv = $("<div>");

    sizeDiv.addClass("news-card col s6 m12");
    $(".stock-price").append(sizeDiv);

    var cardDiv = $("<div>");
    cardDiv.addClass("card-horiz card horizontal col s6 m12");
    sizeDiv.append(cardDiv)

    var rowDiv = $("<div>");
    rowDiv.addClass("row");
    cardDiv.append(rowDiv);

    var cardImageDiv = $("<div>");
    cardImageDiv.addClass("card-image");
    rowDiv.append(cardImageDiv);

    var image = "assets/images/" + objMatchedData.img;
    console.log("image", image);
    var cardImageSrc = $("<img>");
    cardImageSrc.addClass("news-image");
    cardImageSrc.attr("src", image);
    rowDiv.append(cardImageSrc);

    var cardStackedDiv = $("<div>");
    cardStackedDiv.addClass("card-stacked");
    rowDiv.append(cardStackedDiv);

    var cardContentDiv = $("<div>");
    cardContentDiv.addClass("card-content");
    // create a table to insert into the card
    var priceTable = $("<table>");
    priceTable.addClass("responsive-table striped price-data-table");

    // add the table headers
    var tableHead = $("<thead>");
    priceTable.append(tableHead);
    var tableRow = $("<tr>");
    tableHead.append(tableRow);
    var tableDataHeader1 = $("<th>");
    tableDataHeader1.append("Current Price");
    var tableDataHeader2 = $("<th>");
    tableDataHeader2.append("Daily Volume");
    tableRow.append(tableDataHeader1, tableDataHeader2);

    // add content to the table
    var priceTableBody = $("<tbody>");
    priceTable.append(priceTableBody);
    var tableRow = $("<tr>");
    priceTableBody.append(tableRow);
    var tdPrice = $("<td>");
    tdPrice.append(currentPrice);
    tableRow.append(tdPrice);
    var tdVolume = $("<td>");
    tdVolume.append(objMatchedData.volume);
    tableRow.append(tdPrice, tdVolume);

    cardContentDiv.html("<h5>" + objMatchedData.name + "</h5>");
    cardContentDiv.append(priceTable);

    cardStackedDiv.append(cardContentDiv);

    var cardActionDiv = $("<div>");
    cardActionDiv.addClass("card-action");
    cardActionDiv.html("<a target='_blank' href=" + objMatchedData.url + ">Investor Relations</a>");
    cardStackedDiv.append(cardActionDiv);
}
