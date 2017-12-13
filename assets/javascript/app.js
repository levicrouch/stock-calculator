console.log("We are in the javascript");

///////////////////////////////////////////////////
// Variables and objects
///////////////////////////////////////////////////
var company = {
    name: [
        "Apple", "Microsoft", "Amazon", "Facebook",
        "Google", "Alphabet", "Intel", "Cisco",
        "Comcast", "Amgen", "Nvidia", "Broadcom",
        "Gilead Sciences", "Texas Instruments", "Qualcomm", "Kraft Heinz",
        "Paypal", "Adobe", "Charter Communications", "Starbucks",
        "Celgene", "Priceline", "Costco", "Netflix",
        "Walgreens", "Tesla"
    ],
    symbol: [
        "AAPL", "MSFT", "AMZN", "FB",
        "GOOG", "GOOGL", "INTC", "CSCO",
        "CMCSA", "AMGN", "NVDA", "AVGO",
        "GILD", "TXN", "QCOM", "KHC",
        "PYPL", "ADBE", "CHTR", "SBUX",
        "CELG", "PCLN", "COST", "NFLX",
        "WBA", "TSLA"
    ],
    url: [
        "http://investor.apple.com/", "https://www.microsoft.com/en-us/investor/", "http://phx.corporate-ir.net/phoenix.zhtml?c=97664&p=irol-irhome", "https://investor.fb.com/home/default.aspx",
        "https://abc.xyz/investor/", "https://abc.xyz/investor/", "https://www.intc.com/investor-relations/default.aspx", "https://investor.cisco.com/investor-relations/overview/default.aspx",
        "http://www.cmcsa.com/", "http://investors.amgen.com/", "http://investor.nvidia.com/home/default.aspx", "http://investors.broadcom.com",
        "http://investors.gilead.com", "http://www.ti.com/corp/docs/investor_relations/index.html", "https://www.qualcomm.com/info/investor-relations", "http://ir.kraftheinzcompany.com/",
        "https://investor.paypal-corp.com/", "http://www.adobe.com/investor-relations.html", "http://ir.charter.com", "https://investor.starbucks.com",
        "http://ir.celgene.com/", "http://ir.pricelinegroup.com/", "http://phx.corporate-ir.net/phoenix.zhtml?c=83830&p=irol-irhome", "https://ir.netflix.com/",
        "http://investor.walgreensbootsalliance.com/", "http://ir.tesla.com/"
    ]
}

for (i = 0; i < company.name.length; i++) {
    console.log("Company name: " + company.name[i] + " Stock Symbol: " + company.symbol[i] + " Investor Relations: " + company.url[i]);
}
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

///////////////////////////////////////////////////
// Left navbar calculators
///////////////////////////////////////////////////

///////////////////////////////////////////////////
// Main Display
///////////////////////////////////////////////////

///////////////////////////////////////////////////
// stock ticker code
///////////////////////////////////////////////////

///////////////////////////////////////////////////
// stock buy calculator
///////////////////////////////////////////////////
// Use case: I have X amount of money to invest, how many shares of Y company can I buy?
// Show the stock buy calculator when the button is pushed

// function stockBuyCalculator() {
//     console.log("In the stockBuyCalculator function");
//     // Create a new span
//     var newSpan = $("<span>");
//     // set the class of the new div
//     newSpan.attr("id", "stock-tools");
//     newSpan.attr("data-visibility", "visible");
//     // newSpan.html("<p>Enter amount to invest:</p>");
//     // Add the new div to the "stock-tools" span
//     $(html.stockBuyCalcClass).append(newSpan);

//     // Create the symbol as a read-only div for reference
//     var symbolDiv = $("<div>");
//     symbolDiv.addClass("input-field col s4");
//     symbolDiv.attr("id", "symbol-read-only");
//     // Add the new input box into the newDiv
//     $(html.stockToolsSpan).append(symbolDiv);

//     // Create a new input field for capturing the amount to invest
//     var symbolDisabledInput = $("<input disabled>");
//     symbolDisabledInput.addClass("col s4 validate");
//     symbolDisabledInput.attr("value", "MSFT");
//     symbolDisabledInput.attr("id", "disabled");
//     symbolDisabledInput.attr("type", "text");
//     // Add the new input box into the newDiv
//     $(html.symbolDiv).append(symbolDisabledInput);

//     // Add a disabled input box for displaying the stock's current price
//     // Create the symbol as a read-only div for reference
//     var currentPriceDiv = $("<div>");
//     currentPriceDiv.addClass("input-field col s4");
//     currentPriceDiv.attr("id", "price-read-only");
//     // Add the new input box into the newDiv
//     $(html.stockToolsSpan).append(currentPriceDiv);

//     // Create a new input field for capturing the amount to invest
//     var priceDisabledInput = $("<input disabled>");
//     priceDisabledInput.addClass("col s4 validate");
//     priceDisabledInput.attr("value", "$85.58");
//     priceDisabledInput.attr("id", "stock-price");
//     priceDisabledInput.attr("type", "text");
//     // Add the new input box into the newDiv
//     $(html.priceDiv).append(priceDisabledInput);


//     // Add a div for storing the amount to invest input 
//     // Create the symbol as a read-only div for reference
//     var amountToInvestDiv = $("<div>");
//     amountToInvestDiv.addClass("input-field col s4");
//     amountToInvestDiv.attr("id", "amount-to-invest");
//     // Add the new input box into the newDiv
//     $(html.stockToolsSpan).append(amountToInvestDiv);

//     // Create a new input field for capturing the current stock price
//     var amountToInvestInput = $("<input>");
//     amountToInvestInput.addClass("validate");
//     amountToInvestInput.attr("id", "amount-to-invest");
//     // Add the new input box into the newDiv
//     $(html.investmentAmountInput).append(amountToInvestInput);

//     // Create new label for amount to invest
//     var amountToInvestLabel = $("<label>");
//     // Set attributes for the label element
//     amountToInvestLabel.attr("for", "amount-to-invest");
//     amountToInvestLabel.attr("data-error", "wrong");
//     amountToInvestLabel.attr("data-success", "right");
//     amountToInvestLabel.append("Amount to Invest");
//     // Add the new label into the new input "amountToInvestInput"
//     $(html.investmentAmountInput).append(amountToInvestLabel);


//     // Add a div for storing the amount to invest input 
//     // Create the commision as a read-only div for reference
//     var commissionDiv = $("<div>");
//     commissionDiv.addClass("input-field col s4");
//     commissionDiv.attr("id", "commission-amount");
//     // Add the new input box into the newDiv
//     $(html.stockToolsSpan).append(commissionDiv);

//     // Create a new input field for capturing the commission price
//     var amountToInvestInput = $("<input>");
//     amountToInvestInput.addClass("validate");
//     amountToInvestInput.attr("id", "commision-amount");
//     // Add the new input box into the newDiv
//     $(html.commissionID).append(amountToInvestInput);

//     // Create new label for commission
//     var commissionLabel = $("<label>");
//     // Set attributes for the label element
//     commissionLabel.attr("for", "commision-amount");
//     commissionLabel.attr("data-error", "wrong");
//     commissionLabel.attr("data-success", "right");
//     commissionLabel.append("Commision");
//     // Add the new label into the new input "amountToInvestInput"
//     $(html.commissionID).append(commissionLabel);

//     // Create the symbol as a read-only div for reference
//     var sharesDiv = $("<div>");
//     sharesDiv.addClass("input-field col s4");
//     sharesDiv.attr("id", "shares-read-only");
//     // Add the new input box into the newDiv
//     $(html.stockToolsSpan).append(sharesDiv);

//     // Create a new input field for capturing the amount to invest
//     var sharesDisabledInput = $("<input disabled>");
//     sharesDisabledInput.addClass("col s4 validate");
//     sharesDisabledInput.attr("value", "maximum shares");
//     sharesDisabledInput.attr("id", "disabled");
//     sharesDisabledInput.attr("type", "text");
//     // Add the new input box into the newDiv
//     $(html.sharesID).append(sharesDisabledInput);

//     // adding the calculate button
//     //     <button class="btn waves-effect waves-light" type="submit" name="action">Submit
//     //     <i class="material-icons right">send</i>
//     //   </button>
//     // Add a calculate button
//     var calculateButton = $("<button>");
//     calculateButton.addClass("stock-buy-button btn waves-effect waves-light");
//     calculateButton.attr("type", "submit");
//     calculateButton.attr("name", "action");
//     // calculateButton.attr("onclick" , "calculateShares()");
//     calculateButton.append("Calculate");
//     $(html.sharesID).append(calculateButton);


// }

// function calculateShares(amountToInvest, price, commission) {
//     // take the amount to invest and minus the commission
//     var netCash = amountToInvest - commission;
//     var totalShares = netCash / price;
//     console.log("Maximum shares:", totalShares);
// }





///////////////////////////////////////////////////
// stock sell calculator
///////////////////////////////////////////////////
// Use case: I have X number of shares in company Y, how much will I make\lose if I sell now?

///////////////////////////////////////////////////
// currency converter calculator
///////////////////////////////////////////////////
// Use case: how much is my X currency worth to Y currency?
// Use case: I would like to buy X number of Y currency using Z currency, how many how much Z currency will this cost?
