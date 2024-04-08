//product images slider
document.addEventListener('DOMContentLoaded', function () {
    const imgItems = document.querySelectorAll('.img-select .img-item');
    const showcase = document.querySelector('.img-showcase');

    imgItems.forEach((imgItem, index) => {
        imgItem.addEventListener('click', () => {
            showcase.style.transform = `translateX(-${index * 100}%)`;
        });
    });
});

function getFromLocalStorage(){
    // Retrieve the data from local storage using the key
    const jsonData = localStorage.getItem('cardata');

    // Check if data exists
    if (jsonData) {
        // Parse the JSON string back into a JavaScript object
        const data = JSON.parse(jsonData);
        console.log(data)
        
        renderDetails(data);
    } else {
        console.log('No data found in local storage.');
    }
}
getFromLocalStorage();

function renderDetails(data) {
    document.addEventListener('DOMContentLoaded', function () {
        const outputDiv = document.getElementById('data-container');
        outputDiv.innerHTML = `
        
        <h2 class = "product-title">${data.Name}</h2>
          
                <div class = "product-price">
                  <p class = "new-price">Price: <span>$${data.Price}</span></p>
                </div>
    
    
                <div class="car-listing-item-field-container">
                <div class="car-listing-item-field car-field-drivetrain ">
                    <span class="car-listing-item-field-label">Drivetrain</span>
                    <span class="car-listing-item-field-value">${data.Drivetrain}</span>
                </div>
                <div class="car-listing-item-field car-field-transmission ">
                    <span class="car-listing-item-field-label">Transmission</span>
                    <span class="car-listing-item-field-value">${data.Transmission}</span>
                </div>
                <div class="car-listing-item-field car-field-engine ">
                    <span class="car-listing-item-field-label">Engine</span>
                    <span class="car-listing-item-field-value">${data.Engine}</span>
                </div>
                    <div class="car-listing-item-field car-field-mileage ">
                    <span class="car-listing-item-field-label">Mileage</span>
                    <span class="car-listing-item-field-value">${data.Mileage}</span>
                </div>
                <div class="car-listing-item-field car-field-door ">
                    <span class="car-listing-item-field-label">Doors</span>
                    <span class="car-listing-item-field-value">${data.Doors}</span>
                </div>
                <div class="car-listing-item-field car-field-vin ">
                    <span class="car-listing-item-field-label">VIN</span>
                    <span class="car-listing-item-field-value">${data.VIN}</span>
                </div>
                <div class="car-listing-item-field car-field-stock-number ">
                    <span class="car-listing-item-field-label">Stock Number</span>
                    <span class="car-listing-item-field-value">${data.Stock_Number}</span>
                </div>
                <div class="car-listing-item-field car-field-transmission-details ">
                    <span class="car-listing-item-field-label">Transmission Detail</span>
                    <span class="car-listing-item-field-value">${data.Transmission_Detail}</span>
                </div>
                <div class="car-listing-item-field car-field-mpg ">
                    <span class="car-listing-item-field-label">MPG (city/hwy)</span>
                    <span class="car-listing-item-field-value">${data.MPG}</span>
                </div>
                <div class="car-listing-item-field car-field-bodytype ">
                    <span class="car-listing-item-field-label">Body Type</span>
                    <span class="car-listing-item-field-value">${data.Body_Type}</span>
                </div>
                <div class="car-listing-item-field car-field-trim ">
                    <span class="car-listing-item-field-label">Trim</span>
                    <span class="car-listing-item-field-value">${data.Trim}</span>
                </div>
                <div class="car-listing-item-field car-field-fueltype ">
                    <span class="car-listing-item-field-label">Fuel Type</span>
                    <span class="car-listing-item-field-value">${data.Fuel_Type}</span>
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
}


