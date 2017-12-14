//////////////////////////////////////////////
// Main JavaScript 
//////////////////////////////////////////////

///////////////////////////////////////////////////
// Variables and objects
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
        "Johnson & Johnson", "Disney"
    ],
    symbol: [
        "AAPL", "MSFT", "AMZN", "FB",
        "GOOG", "GOOGL", "INTC", "CSCO",
        "CMCSA", "AMGN", "NVDA", "AVGO",
        "GILD", "TXN", "QCOM", "KHC",
        "PYPL", "ADBE", "CHTR", "SBUX",
        "CELG", "PCLN", "COST", "NFLX",
        "WBA", "TSLA", "JPM", "BRK-A",
        "JNJ", "DIS"
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

// for (i = 0; i < company.name.length; i++) {
//     console.log("Company name: " + company.name[i] + " Stock Symbol: " + company.symbol[i] + " Investor Relations: " + company.url[i]);
// }
var html = {
    basicCalculatorClass: ".basic-calculator",
    stockBuyCalcClass: ".stock-tools",
    stockSellCalcClass: ".stock-sell-calc",
    inputField: ".form-control",
    searchButton: ".btn btn-primary",
    stockBuyCalcDiv: ".stock-buy-calc",
    investmentAmountInput: "#amount-to-invest",
    stockToolsSpan: "#stock-tools",
    symbolDiv: "#symbol-read-only",
    priceDiv: "#price-read-only",
    commissionID: "#commission-amount",
    sharesID: "#shares-read-only",
    stockBuyButton: ".stock-buy-button",
    stockPrice: "#stock-price"
};
///////////////////////////////////////////////////
// Functions
///////////////////////////////////////////////////


$(document).ready(function () {
    // Hide the main-display on page load
    $(".main-display").hide();
    $(".carousel").carousel();
    // When the user clicks an image in the carousel,
    // capture the company name and open a display below that shows the stock price and company news
    $(".carousel-item").on("click", populateCompanyData);


    function mainDisplayToggle() {
        console.log("we are in the mainDisplayToggle");
        // Check if the main display is shown or not
        var currentVisibility = $(".main-display").attr("data-visibility");
        if (currentVisibility === "hidden") {
            // if hidden, show the main window
            $(".main-display").attr("data-visibility", "visible");
            $(".main-display").show();
        } else if (currentVisibility === "visible") {
            // if visible hide the main display
            $(".main-display").attr("data-visibility", "hidden");
            $(".main-display").hide();
        }
    }

    function populateCompanyData() {
        // if hidden show the display
        companyName = $(this).attr("id");
        console.log("Company Name:", companyName);
        getNews(companyName);
        mainDisplayToggle();
    }
<<<<<<< HEAD
    
=======

    // Make window go to bottom of collapsible content being opened
    $('.collapsible').collapsible({
        accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
    $('.collapsible .collapsible-header').on('click', function (event) {
        var target = $(this);
        setTimeout(function () {
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500);
            }
        }, 300);
    });
>>>>>>> e9ac9bfcd6543aa41e3b514f333dce64290c632f
});