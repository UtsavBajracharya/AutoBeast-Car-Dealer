$(document).ready(function(){
    // With JQuery
    $("#year_range").slider({
        formatter: function(value) {
            if(value.length > 1){
                value = value[0].toString() + ' - ' + value[1].toString();
            }
            return value;
        },
    });

    $("#mileage_range").slider({
        formatter: function(value) {
            if(value.length > 1){
                value = value[0].toLocaleString() + ' - ' + value[1].toLocaleString();
            }
            return value;
        },
    });

    $("#price_range").slider({
        formatter: function(value) {
            if(value.length > 1){
                value = '$' + value[0].toLocaleString() +' - $' + value[1].toLocaleString();
            }
            return value;
        },
    });

    $("#year_range_m").slider({
        formatter: function(value) {
            if(value.length > 1){
                value = value[0].toString() + ' - ' + value[1].toString();
            }
            return value;
        },
    });

    $("#mileage_range_m").slider({
        formatter: function(value) {
            if(value.length > 1){
                value = value[0].toLocaleString() + ' - ' + value[1].toLocaleString();
            }
            return value;
        },
    });

    $("#price_range_m").slider({
        formatter: function(value) {
            if(value.length > 1){
                value = '$' + value[0].toLocaleString() +' - $' + value[1].toLocaleString();
            }
            return value;
        },
    });

    // $(".car-listing-filter-btn").on("click", function() {
    //     $(".carFilterModal").toggleClass("in");
    //     $("#carFilterModal").show();
    // })



    // Define number of items per page
    var itemsPerPage = 3;
    var items = $(".list-group-item.car-listing-item");
    var numItems = items.length;
    var numPages = Math.ceil(numItems / itemsPerPage);

    // Initial page to display
    showPage(1);

    // Function to display items for a particular page
    function showPage(page) {
        items.hide();
        var startIndex = (page - 1) * itemsPerPage;
        var endIndex = Math.min(startIndex + itemsPerPage, numItems);
        items.slice(startIndex, endIndex).show();
    }

    // Create a pagination links
    var paginationHTML = "";
    paginationHTML += "<a href='#' class='page-link prev'>« Prev</a>";
    paginationHTML += "<a href='#' class='page-link'>1</a>"; // First number
    for (var i = 2; i <= numPages; i++) {
        paginationHTML += "<a href='#' class='page-link'>" + i + "</a>";
    }
    paginationHTML += "<a href='#' class='page-link next'>Next »</a>";
    $("#pagination").html(paginationHTML);

    // Handle pagination link click
    $("#pagination").on("click", ".page-link", function(e) {
        e.preventDefault();
        var currentPage = parseInt($(".page-link.active").text());
        if ($(this).hasClass("prev") || $(this).text() === "1") { // Clicked on "Previous" or "1"
            if (currentPage > 1) {
                showPage(currentPage - 1);
                $(".page-link").removeClass("active");
                if (currentPage === 2) {
                    $(".page-link:contains(1)").addClass("active");
                } else {
                    $(".page-link:contains(" + (currentPage - 1) + ")").addClass("active");
                }
            }
        } else if ($(this).hasClass("next")) {
            if (currentPage < numPages) {
                showPage(currentPage + 1);
                $(".page-link").removeClass("active");
                $(".page-link:contains(" + (currentPage + 1) + ")").addClass("active");
            }
        } else {
            showPage(parseInt($(this).text()));
            $(".page-link").removeClass("active");
            $(this).addClass("active");
        }
    });

    // Initially highlight the first page
    $(".page-link:contains(1)").addClass("active");

});



