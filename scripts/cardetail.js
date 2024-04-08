//product images slider
document.addEventListener('DOMContentLoaded', function() {
    const imgItems = document.querySelectorAll('.img-select .img-item');
    const showcase = document.querySelector('.img-showcase');
    
    imgItems.forEach((imgItem, index) => {
        imgItem.addEventListener('click', () => {
            showcase.style.transform = `translateX(-${index * 100}%)`;
        });
    });
});


const carData = 
    
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
    
     
};


document.addEventListener('DOMContentLoaded', function() {
    const outputDiv = document.getElementById('data-container');
    outputDiv.innerHTML = `
    
    <h2 class = "product-title">${carData.Name}</h2>
      
            <div class = "product-price">
              <p class = "new-price">Price: <span>$${carData.Price}</span></p>
            </div>


            <div class="car-listing-item-field-container">
            <div class="car-listing-item-field car-field-drivetrain ">
                <span class="car-listing-item-field-label">Drivetrain</span>
                <span class="car-listing-item-field-value">${carData.Drivetrain}</span>
            </div>
            <div class="car-listing-item-field car-field-transmission ">
                <span class="car-listing-item-field-label">Transmission</span>
                <span class="car-listing-item-field-value">${carData.Transmission}</span>
            </div>
            <div class="car-listing-item-field car-field-engine ">
                <span class="car-listing-item-field-label">Engine</span>
                <span class="car-listing-item-field-value">${carData.Engine}</span>
            </div>
                <div class="car-listing-item-field car-field-mileage ">
                <span class="car-listing-item-field-label">Mileage</span>
                <span class="car-listing-item-field-value">${carData.Mileage}</span>
            </div>
            <div class="car-listing-item-field car-field-door ">
                <span class="car-listing-item-field-label">Doors</span>
                <span class="car-listing-item-field-value">${carData.Doors}</span>
            </div>
            <div class="car-listing-item-field car-field-vin ">
                <span class="car-listing-item-field-label">VIN</span>
                <span class="car-listing-item-field-value">${carData.VIN}</span>
            </div>
            <div class="car-listing-item-field car-field-stock-number ">
                <span class="car-listing-item-field-label">Stock Number</span>
                <span class="car-listing-item-field-value">${carData.Stock_Number}</span>
            </div>
            <div class="car-listing-item-field car-field-transmission-details ">
                <span class="car-listing-item-field-label">Transmission Detail</span>
                <span class="car-listing-item-field-value">${carData.Transmission_Detail}</span>
            </div>
            <div class="car-listing-item-field car-field-mpg ">
                <span class="car-listing-item-field-label">MPG (city/hwy)</span>
                <span class="car-listing-item-field-value">${carData.MPG}</span>
            </div>
            <div class="car-listing-item-field car-field-bodytype ">
                <span class="car-listing-item-field-label">Body Type</span>
                <span class="car-listing-item-field-value">${carData.Body_Type}</span>
            </div>
            <div class="car-listing-item-field car-field-trim ">
                <span class="car-listing-item-field-label">Trim</span>
                <span class="car-listing-item-field-value">${carData.Trim}</span>
            </div>
            <div class="car-listing-item-field car-field-fueltype ">
                <span class="car-listing-item-field-label">Fuel Type</span>
                <span class="car-listing-item-field-value">${carData.Fuel_Type}</span>
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
    `;
});


