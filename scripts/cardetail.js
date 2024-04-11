// Function to get data from local storage
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

// Function to render images from the buycar page car items
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
                    <button class="prev-button">‹</button>
                    <button class="next-button">›</button>
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

        // Scripts for car image slider
        $(document).ready(function() {
            const imgCount = $('.img-showcase img').length;
            let currentIndex = 0;

            // Function to show the current image
            function showImage(index) {
                const imgWidth = $('.img-showcase img').width();
                const moveDistance = index * imgWidth;
                $('.img-showcase').css('transform', `translateX(-${moveDistance}px)`);
            }


            // Function to start auto sliding
            function startAutoSlide() {
                autoSlideInterval = setInterval(function() {
                    currentIndex = (currentIndex + 1) % imgCount;
                    showImage(currentIndex);
                }, 3000); // Change 3000 to adjust the auto slide interval (in milliseconds)
            }

            // Function to stop auto sliding
            function stopAutoSlide() {
                clearInterval(autoSlideInterval);
            }

            // Show the first image
            showImage(currentIndex);

            // Next button for next image
            $('.next-button').on('click', function() {
                stopAutoSlide();
                currentIndex = (currentIndex + 1) % imgCount;
                showImage(currentIndex);
            });

            // Previous button for previous image
            $('.prev-button').on('click', function() {
                stopAutoSlide(); 
                currentIndex = (currentIndex - 1 + imgCount) % imgCount;
                showImage(currentIndex);
            });

            // Event for Image selection 
            $('#image-container').on('click', '.img-item', function(event) {
                event.preventDefault();
                stopAutoSlide(); 
                const imgId = $(this).find('a').data('id');
                currentIndex = imgId - 1;
                showImage(currentIndex);
            });

            // Start auto sliding initially
            startAutoSlide();
        });
    });
}

// Function to render detail of car item 
function renderDetails(data) {
    document.addEventListener('DOMContentLoaded', function () {
        const outputDiv = document.getElementById('data-container');
        outputDiv.innerHTML = `

        <h2 class = "product-title">${data.Name}</h2>
        <input type="hidden" name="price" value="${data.Price}">
        
          
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
                    <button type="button" class="btn btn-apply-online" onclick="redirectToApplyOnline()">APPLY ONLINE</button>
                    <button type="button" class="btn btn-check-availability" data-bs-toggle="modal" data-bs-target="#checkAvailabilityModal">CHECK AVAILABILITY</button>
                    <button type="button" class="btn btn-test-drive" data-bs-toggle="modal" data-bs-target="#testDriveModal" >TEST DRIVE</button>
                </div>
            </div>
                
        `;
    });
}

// Function to redirect to the apply online page
function redirectToApplyOnline() {
    window.location.href = "./applyonline.html";
}

// Script for the loan calculator section
$(document).ready(function() {
    const initialPrice = $('input[name="price"]').val();
    $('#dws-loan-calculator-vehicle-price-7').val(initialPrice);

    $('.dws-loan-calculator-calc-button').click(function(e) {
        e.preventDefault();

        // Clear previous results or messages and remove the error class from all form controls
        $('.dws-loan-calculator-result-text').empty();
        $('.error-message').remove();
        $('.form-control').removeClass('error');

        let isValid = true;

        // Fetching values and trimming whitespace
        const vehiclePriceVal = $('#dws-loan-calculator-vehicle-price-7').val().trim();
        const downPaymentVal = $('#dws-loan-calculator-down-payment-7').val().trim();
        const loanTermVal = $('#dws-loan-calculator-term-7').val().trim();
        const aprVal = $('#dws-loan-calculator-apr-7').val().trim();

        // Empty field checks
        if (!vehiclePriceVal) {
            showError('#dws-loan-calculator-vehicle-price-7', 'Vehicle price is required.');
            isValid = false;
        }
        if (!downPaymentVal) {
            showError('#dws-loan-calculator-down-payment-7', 'Down payment is required.');
            isValid = false;
        }
        if (!loanTermVal) {
            showError('#dws-loan-calculator-term-7', 'Loan term is required.');
            isValid = false;
        }
        if (!aprVal) {
            showError('#dws-loan-calculator-apr-7', 'APR is required.');
            isValid = false;
        } else {
            const apr = parseFloat(aprVal);
            if (isNaN(apr) || apr < 0 || apr > 100) {
                showError('#dws-loan-calculator-apr-7', 'APR must be between 0% and 100%.');
                isValid = false;
            }
        }

        // Proceed with calculation if inputs are valid
        if (isValid) {
            const vehiclePrice = parseFloat(vehiclePriceVal);
            const downPayment = parseFloat(downPaymentVal);
            const loanTerm = parseInt(loanTermVal);
            const apr = parseFloat(aprVal);

            const loanAmount = vehiclePrice - downPayment;
            const monthlyInterestRate = apr / 1200;
            const monthlyPayment = loanAmount * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -loanTerm));

            $('.dws-loan-calculator-result-text').text('$' + monthlyPayment.toFixed(2));


            $('.dws-loan-calculator-result').removeClass('hidden').show();
        } else {
            $('.dws-loan-calculator-result').addClass('hidden').hide();
        }
    });
    function showError(selector, message) {
        $(selector).addClass('error').after('<div class="error-message">' + message + '</div>');
    }
}); 


