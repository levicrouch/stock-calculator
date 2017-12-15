//////////////////////////////////////////////
// Main JavaScript 
//////////////////////////////////////////////

///////////////////////////////////////////////////
// Variables and objects
///////////////////////////////////////////////////

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
        getStock(companyName);
        getNews(companyName);
        mainDisplayToggle();
    }
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
});