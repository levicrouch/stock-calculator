///////////////////////////////////////////////
// Main JavaScript 
//////////////////////////////////////////////

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
    // toggle the carousel display
    $(".nav-wrapper").on("click", carouselDisplayToggle);
    // grab stock data when the stock-price-data is clicked
    $("#stock-price-data").on("click", getStock);
    // grab company news when the stock news data is clicked
    $("#stock-news-data").on("click", getNews);
    // });


    function mainDisplayToggle() {
        console.log("we are in the mainDisplayToggle");
        // Check if the main display is shown or not
        var currentMainDisplayVisibility = $(".main-display").attr("data-visibility");
        var currentCarouselVisibility = $(".carousel").attr("data-visibility");
        if (currentMainDisplayVisibility === "hidden") {
            // if hidden, show the main window
            $(".main-display").attr("data-visibility", "visible");
            $(".main-display").fadeIn(500);
            $(".carousel").attr("data-visibility", "hidden");
            $('.carousel').fadeOut(500);
        } else if (currentMainDisplayVisibility === "visible") {
            // if main display is currently visible, hide it
            $(".main-display").attr("data-visibility", "hidden");
            $(".main-display").fadeOut(500);
            // if the main display is hidden then the carousel should be set to visible and shown
            $(".carousel").attr("data-visibility", "visible");
            $('.carousel').fadeIn(500);
        }
    }

    function carouselDisplayToggle() {
        console.log("we are in the carouselDisplayToggle");
        // Check if the main display is shown or not
        var currentMainDisplayVisibility = $(".main-display").attr("data-visibility");
        var currentCarouselVisibility = $(".carousel").attr("data-visibility");
        if (currentCarouselVisibility === "hidden") {
            $(".main-display").attr("data-visibility", "hidden");
            $('.main-display').fadeOut(500);
            // if hidden, show the carousel
            $(".carousel").attr("data-visibility", "visible");
            $(".carousel").fadeIn(500);
        }
    }

    function getNewsData() {
        console.log("in the getNewsData function");
        console.log("Company Name:", clickedCompanyName);
        // call the getNews function to grab the news and populate the html
        populateCompanyData();
        getNews();
    }

    function populateCompanyData() {
        console.log("We are in the populateCompanyData function");
        // get the company name from the image id and set it globally
        clickedCompanyName = $(this).attr("id");
        console.log("Company Name:", clickedCompanyName);
        objMatchedData = parseCompanyData();
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