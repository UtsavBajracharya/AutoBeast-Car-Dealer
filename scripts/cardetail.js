
function getFromLocalStorage(){
    // Retrieve the data from local storage using the key
    const jsonData = localStorage.getItem('cardata');

    // Check if data exists
    if (jsonData) {
        // Parse the JSON string back into a JavaScript object
        const data = JSON.parse(jsonData);
        console.log(data)
        
        renderDetails(data);
        renderImages(data);
    } else {
        console.log('No data found in local storage.');
    }
}

getFromLocalStorage();


function renderImages(data) {
    document.addEventListener('DOMContentLoaded', function () {
        const outputDiv = document.getElementById('image-container');
        outputDiv.innerHTML = `

            <div class = "product-imgs">
                <div class = "img-display">
                    <div class = "img-showcase">
                        <img src="${data.image_1}" alt="Car Image">
                        <img src="${data.image_2}" alt="Car Image">
                        <img src="${data.image_3}" alt="Car Image">
                        <img src="${data.image_4}" alt="Car Image">
                    </div>
                </div>  
                <div class = "img-select">
              <div class = "img-item">
                <a href = "#" data-id = "1">
                  <img src = "${data.image_1}" alt = "car image">
                </a>
              </div>
              <div class = "img-item">
                <a href = "#" data-id = "2">
                  <img src = "${data.image_2}" alt = "car image">
                </a>
              </div>
              <div class = "img-item">
                <a href = "#" data-id = "3">
                  <img src = "${data.image_3}" alt = "car image">
                </a>
              </div>
              <div class = "img-item">
                <a href = "#" data-id = "4">
                  <img src = "${data.image_4}" alt = "car image">
                </a>
              </div>
            </div>
            
        `;
        $(document).ready(function() {
            // Add event listener to handle image selection
            $('#image-container').on('click', '.img-item', function(event) {
                event.preventDefault();
                const imgId = $(this).find('a').data('id');
                const imgWidth = $('.img-showcase img').width(); // Get width of each image
        
                // Calculate the distance to move the showcase container
                const moveDistance = (imgId - 1) * imgWidth;
        
                // Move the showcase container to reveal the selected image
                $('.img-showcase').css('transform', `translateX(-${moveDistance}px)`);
            });
        });
    });
}





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


