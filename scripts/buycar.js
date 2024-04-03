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
});
