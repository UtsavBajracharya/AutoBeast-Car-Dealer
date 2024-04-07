carData = [
    {
        "Name": "Audi A4",
        "Model": "A4",
        "Year": 2005,
        "Mileage": "20000",
        "Price": "10000",
        "Drivetrain": "FWD",
        "Transmission": "Automatic",
        "Transmission_Detail": "6-Speed Automatic with Tiptronic",
        "Engine": "2.0L I4",
        "Doors": "4",
        "VIN": "1234567890",
        "Stock_Number": "A12345",
        "MPG": "21/29",
        "Body_Type": "Sedan",
        "Trim": "Base",
        "Fuel_Type": "Gasoline",
        "image_1": "https://s.aolcdn.com/commerce/autodata/images/USB50AUC013B0101.jpg",
        "image_2": "https://s.aolcdn.com/commerce/autodata/images/USB50AUC013B0102.jpg",
        "image_3": "https://s.aolcdn.com/commerce/autodata/images/USB50AUC013B0104.jpg",
        "image_4": "https://s.aolcdn.com/commerce/autodata/images/USB50AUC013B0109.jpg",
        "image_5": "https://s.aolcdn.com/commerce/autodata/images/USB50AUC013B0112.jpg"
    },
    {
        "Name": "BMW 3 Series",
        "Model": "3 Series",
        "Year": 2005,
        "Mileage": "30000",
        "Price": "12000",
        "Drivetrain": "RWD",
        "Transmission": "Manual",
        "Transmission_Detail": "6-Speed Manual",
        "Engine": "2.5L I6",
        "Doors": "2",
        "VIN": "0987654321",
        "Stock_Number": "B54321",
        "MPG": "18/27",
        "Body_Type": "Coupe",
        "Trim": "325Ci",
        "Fuel_Type": "Gasoline",
        "image_1": "https://www.motortrend.com/uploads/sites/10/2015/11/2005-bmw-3-series-325i-sedan-angular-front.png?fit=around%7C875:492",
        "image_2": "https://www.motortrend.com/uploads/sites/10/2015/11/2005-bmw-3-series-325i-sedan-angular-rear.png?fit=around%7C875:492",
        "image_3": "https://www.motortrend.com/uploads/sites/10/2015/11/2005-bmw-3-series-325i-sedan-wheel-cap.png?fit=around%7C875:492",
        "image_4": "https://www.motortrend.com/uploads/sites/10/2015/11/2005-bmw-3-series-325i-sedan-front-view.png?fit=around%7C875:492",
        "image_5": "https://www.motortrend.com/uploads/sites/10/2015/11/2005-bmw-3-series-325i-sedan-rear-view.png?fit=around%7C875:492"
    },
    {
        "Name": "Honda Civic",
        "Model": "Civic",
        "Year": 2005,
        "Mileage": "25000",
        "Price": "8000",
        "Drivetrain": "FWD",
        "Transmission": "Automatic",
        "Transmission_Detail": "4-Speed Automatic with Overdrive",
        "Engine": "1.7L I4",
        "Doors": "4",
        "VIN": "9876543210",
        "Stock_Number": "C67890",
        "MPG": "29/38",
        "Body_Type": "Sedan",
        "Trim": "LX",
        "Fuel_Type": "Gasoline",
        "image_1": "https://www.motortrend.com/uploads/sites/5/2005/02/112_05_chicago_civicsi08_z.jpg?w=768&width=768&q=75&format=webp",
        "image_2": "https://www.motortrend.com/uploads/sites/5/2005/02/112_05_chicago_civicsi10_z.jpg?w=768&width=768&q=75&format=webp",
        "image_3": "https://www.motortrend.com/uploads/sites/5/2005/02/112_05_chicago_civicsi04_z.jpg?w=768&width=768&q=75&format=webp",
        "image_4": "https://www.motortrend.com/uploads/sites/5/2005/02/112_05_chicago_civicsi02_z.jpg?w=768&width=768&q=75&format=webp",
        "image_5": "https://www.motortrend.com/uploads/sites/5/2005/02/112_05_chicago_civicsi06_z.jpg?w=768&width=768&q=75&format=webp"
    }

];

$(document).ready(function(){
// With JQuery


fetchData(carData);

// Fetch all data from json file
function fetchData(data) {
    const dataContainer = document.getElementById('data-container');
    dataContainer.innerHTML = '';
    var dataHtml = "";
    data.forEach(item => {
        dataHtml += `<!-- list-group-item -->
        <div class="list-group-item car-listing-item container-fluid no-h-padding">
            <div class="car-row">
                <div class="display-car-style">

                    <!-- car image wapper -->
                    <div class="car-listing-item-img car-listing-item-img-left column-4">
                        <div class="image-wrapper">
                            <a class="car-view-detail-link" aria-hidden="true" href="">
                                <div class="car-image-container" 
                                    title="${item.Year} ${item.Name} ${item.Trim}"
                                    style="padding-top: 67%; background-image: url(${item.image_1})"
                                    data-loaded="true"
                                >
                                </div>
                            </a>
                        </div>
                    </div>
                    <!-- car image wapper ends -->
                    
                    <!-- car-listing-item-info -->
                    <div class="car-listing-item-info left column-12">
                        <div class="car-row">
                            <div class="column-small-7">
                                <div class="car-listing-item-title">
                                    <a href="">${item.Year} ${item.Name} ${item.Trim}</a>
                                </div>
                                <div class="car-listing-item-field-container">
                                    <div class="car-listing-item-field car-field-drivetrain ">
                                        <span class="car-listing-item-field-label">Drivetrain</span>
                                        <span class="car-listing-item-field-value">${item.Drivetrain}</span>
                                    </div>
                                    <div class="car-listing-item-field car-field-transmission ">
                                        <span class="car-listing-item-field-label">Transmission</span>
                                        <span class="car-listing-item-field-value">${item.Transmission}</span>
                                    </div>
                                    <div class="car-listing-item-field car-field-engine ">
                                        <span class="car-listing-item-field-label">Engine</span>
                                        <span class="car-listing-item-field-value">${item.Engine}</span>
                                    </div>
                                        <div class="car-listing-item-field car-field-mileage ">
                                        <span class="car-listing-item-field-label">Mileage</span>
                                        <span class="car-listing-item-field-value">${item.Mileage}</span>
                                    </div>
                                    <div class="car-listing-item-field car-field-door ">
                                        <span class="car-listing-item-field-label">Doors</span>
                                        <span class="car-listing-item-field-value">${item.Doors}</span>
                                    </div>
                                    <div class="car-listing-item-field car-field-vin ">
                                        <span class="car-listing-item-field-label">VIN</span>
                                        <span class="car-listing-item-field-value">${item.VIN}</span>
                                    </div>
                                    <div class="car-listing-item-field car-field-stock-number ">
                                        <span class="car-listing-item-field-label">Stock Number</span>
                                        <span class="car-listing-item-field-value">${item.Stock_Number}</span>
                                    </div>
                                    <div class="car-listing-item-field car-field-transmission-details ">
                                        <span class="car-listing-item-field-label">Transmission Detail</span>
                                        <span class="car-listing-item-field-value">${item.Transmission_Detail}</span>
                                    </div>
                                    <div class="car-listing-item-field car-field-mpg ">
                                        <span class="car-listing-item-field-label">MPG (city/hwy)</span>
                                        <span class="car-listing-item-field-value">${item.MPG}</span>
                                    </div>
                                    <div class="car-listing-item-field car-field-bodytype ">
                                        <span class="car-listing-item-field-label">Body Type</span>
                                        <span class="car-listing-item-field-value">${item.Body_Type}</span>
                                    </div>
                                    <div class="car-listing-item-field car-field-trim ">
                                        <span class="car-listing-item-field-label">Trim</span>
                                        <span class="car-listing-item-field-value">${item.Trim}</span>
                                    </div>
                                    <div class="car-listing-item-field car-field-fueltype ">
                                        <span class="car-listing-item-field-label">Fuel Type</span>
                                        <span class="car-listing-item-field-value">${item.Fuel_Type}</span>
                                    </div>
                                </div>
                            </div>
                            <!-- car-price -->
                            <div class="car-price-wrapper">
                                <div class="pull-right car-price">
                                    <span class="car-price-value">${(parseFloat(item.Price)).toLocaleString('en-US', {
                                        style: 'currency',
                                        currency: 'USD',
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    })}</span>
                                </div>
                            </div>
                            <!-- car-price -->
                        </div>
                    </div>
                    <!-- car-listing-item-info ends -->
                </div>
            </div>

            <!-- button row -->
            <div class="car-row">
                <div class="car-listing-item-buttons column-12">
                    <button type="button" class="btn btn-apply-online">APPLY ONLINE</button>
                    <button type="button" class="btn btn-check-availability">CHECK AVAILABILITY</button>
                    <button type="button" class="btn btn-test-drive">TEST DRIVE</button>
                </div>
            </div>
        </div>
        <!-- list-group-item ends-->
        `;
    });
    dataContainer.innerHTML = dataHtml;

    items = $(".list-group-item.car-listing-item");
    numItems = items.length;
    numPages = Math.ceil(numItems / itemsPerPage);
    
    items.hide();
    startIndex = 1;
    endIndex = Math.min(startIndex + itemsPerPage, numItems);
    items.slice(startIndex, endIndex).show();
}


});





