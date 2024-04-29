/* How To Manage This Website? */




/* Function For Showing Full Screen Images */
function koktel_show_full_screen_image(src) {

    // Disable scrolling
    document.documentElement.style.overflow = 'hidden';

    /* Create A Div To Contain The Big Image or Video */
    let FullScreenImgOverlay = document.createElement('div');
    FullScreenImgOverlay.classList.add("koktel_full_screen_img_overlay");

    /* Create A Button To Exit The Big Image or Video Page */
    let fullScreenOverlayExitButton = document.createElement('a');
    fullScreenOverlayExitButton.classList.add('koktel_full_screen_overlay_exit_button');
    fullScreenOverlayExitButton.innerText = "عودة";
    fullScreenOverlayExitButton.style.zIndex = '1000'; // Ensure the exit button is above the overlay

    // Check if the source is an image or a video
    const isImage = /\.(gif|jpg|jpeg|tiff|png|svg)$/i.test(src);
    const isVideo = /\.(mp4|ogg|webm)$/i.test(src);

    if (isImage) {
        /* Create The Big Image Element Based on The 'src' Value */
        let FullScreenImg = document.createElement('img');
        FullScreenImg.src = src;
        FullScreenImg.alt = "كوكتيل اندونيسيا - كوكتيل";
        FullScreenImg.title = "كوكتيل اندونيسيا - كوكتيل";
        FullScreenImg.classList.add('koktel_big_img');

        /* Append Image Element to FullScreenImgOverlay */
        FullScreenImgOverlay.appendChild(FullScreenImg);
    } else if (isVideo) {
        /* Create The Big Video Element Based on The 'src' Value */
        let FullScreenVideo = document.createElement('video');
        FullScreenVideo.src = src;
        FullScreenVideo.autoplay = true;
        FullScreenVideo.controls = true;
        FullScreenVideo.classList.add('koktel_big_video');

        /* Append Video Element to FullScreenImgOverlay */
        FullScreenImgOverlay.appendChild(FullScreenVideo);
    } else {
        console.error('Unsupported file format');
        return;
    }

    /* Append Exit Button to FullScreenImgOverlay */
    FullScreenImgOverlay.appendChild(fullScreenOverlayExitButton);

    /* Append FullScreenImgOverlay to the body */
    document.body.appendChild(FullScreenImgOverlay);

    /* Function To Exit The Big Image or Video Page */
    fullScreenOverlayExitButton.onclick = function () {

        // Re-enable scrolling
        document.documentElement.style.overflow = 'auto';

        /* Hide The Full Screen Img Overlay */
        FullScreenImgOverlay.style.display = 'none';

        /* Reset All Data Stored Inside The Full Screen Overlay Element */
        FullScreenImgOverlay.innerHTML = '';
    }
}

/* Open Website Guidance */
function koktel_websiteGuidance(buttonClicked) {

    // Disable scrolling
    document.documentElement.style.overflow = 'hidden';

    // Create A Div To Contain The Big Image
    let FullScreenGuidanceOverlay = document.createElement('div');
    FullScreenGuidanceOverlay.id = "koktel_full_screen_guidance_overlay";

    // Create A Button To Exit The Big Image Page
    let fullScreenOverlayExitButton = document.createElement('a');
    fullScreenOverlayExitButton.classList.add('koktel_full_screen_overlay_exit_button');
    fullScreenOverlayExitButton.innerText = "عودة";

    // Create Website Guidance Content
    let webGuidanceDiv = document.createElement('div');

    let webGuidanceText;

    /* Website Guidance */
    if (buttonClicked === 'how to use koktel website') {

        webGuidanceDiv.classList.add('web_guidance_div');

        webGuidanceText = `
            <a href="https://koktel.com">1- في الصفحة الرئيسية انزل الى قسم اختيار الخدمة.</a>
            <a>2- بعد اختيار الخدمة، خذ نظرة على تعليمات الخدمة.</a>
        `;

        /* Website Language */
    } else if (buttonClicked === 'website language') {

        webGuidanceDiv.classList.add('web_guidance_div');

        webGuidanceText = `
            <a href="https://koktel.com">العربية - Arabic</a>
            <a href="https://koktel.com">الإندونيسية - Indonesian</a>
        `;


        /* Restaurant Page Guidance */
    } else if (buttonClicked === 'how to use restaurant type page') {

        webGuidanceDiv.classList.add('web_guidance_div');

        webGuidanceText = `
            <a>1- اختار نوع المطعم.</a>
            <a>2- اتبع تعليمات الطلب في صفحة قائمة المطعم.</a>
        `;

        /* Restaurant Menu Page Guidance */
    } else if (buttonClicked === 'how to use restaurant Menu page') {

        webGuidanceDiv.classList.add('web_guidance_div');

        webGuidanceText = `
            <a>1- اختار نوع الوجبة.</a>
            <a>2- بعد الإنهاء من اختيار الوجبات اذهب لصفحة طلباتك.</a>
            <a>3- قم بتأكيد الطلب عن طريق إرسال الطلب عبر الواتساب.</a>
        `;

        /* Pharmacy Page Guidance */
    } else if (buttonClicked === 'how to use products page') {

        webGuidanceDiv.classList.add('web_guidance_div');

        webGuidanceText = `
            <a>1- اختار المنتج وقم بإضافته.</a>
            <a>2- بعد الإنهاء من اختيار المنتجات اذهب لصفحة طلباتك.</a>
            <a>3- قم بتأكيد الطلب عن طريق إرسال الطلب عبر الواتساب.</a>
        `;

        /* Services Guidance */
    } else if (buttonClicked === 'how to use services page') {

        webGuidanceDiv.classList.add('web_guidance_div');

        webGuidanceText = `
            <a>1- اختار نوع الخدمة المناسبة.</a>
            <a>2- قم بتأكيد الطلب عن طريق ارسال الطلب عبر الواتساب.</a>
        `;

        /* Villa Booking Page Guidance */
    } else if (buttonClicked === 'how to use villa booking page') {

        webGuidanceDiv.classList.add('web_guidance_div');

        webGuidanceText = `
            <a>1- اختار الفيلا المناسبة.</a>
            <a>2- اضغط على احجز الآن وادخل تاريخ حجز الفيلا.</a>
            <a>3- قم بتأكيد الطلب عن طريق ارسال الطلب عبر الواتساب.</a>
        `;

        /* Filter Restaurant Type */
    } else if (buttonClicked === 'show restaurant type page') {

        webGuidanceDiv.classList.add('kokteindo_filter_products_type_div');

        webGuidanceText = `
            <a onclick="koktel_scrollToRestaurantTypeId('kokteindo_main_meal_type')">وجبات سريعة</a>
            <a onclick="koktel_scrollToRestaurantTypeId('kokteindo_meal_type_arabi_food')">اكلات عربية</a>
            <a onclick="koktel_scrollToRestaurantTypeId('kokteindo_meal_type_sea_food')">اكلات بحرية</a>
        `;

        /* Filter Meal Type */
    } else if (buttonClicked === 'show kfc meal type page') {

        webGuidanceDiv.classList.add('kokteindo_filter_products_type_div');

        webGuidanceText = `
            <a onclick="koktel_scrollToMealType('kokteindo_meal_type_fast_food')">وجبات رئيسية</a>
            <a onclick="koktel_scrollToMealType('kokteindo_family_meal_type')">وجبات عائلية</a>
            <a onclick="koktel_scrollToMealType('kokteindo_chicken_meal_type')">صحون دجاج</a>
        `;

        /* Filter Supermarket Product Type */
    } else if (buttonClicked === 'show product type page') {

        webGuidanceDiv.classList.add('kokteindo_filter_products_type_div');

        webGuidanceText = `
            <a onclick="koktel_scrollToProductType('kokteindo_oil_product_section')">زيت</a>
            <a onclick="koktel_scrollToProductType('kokteindo_indomie_product_section')">اندومي</a>
        `;

        /* Filter Bread Products Type */
    } else if (buttonClicked === 'show bread type page') {

        webGuidanceDiv.classList.add('kokteindo_filter_products_type_div');

        webGuidanceText = `
            <a onclick="koktel_scrollToProductType('kokteindo_toast_product_section')">تست</a>
            <a onclick="koktel_scrollToProductType('kokteindo_pies_product_section')">فطائر</a>
        `;

        /* Filter Medicine Product Type */
    } else if (buttonClicked === 'show medicine type page') {

        webGuidanceDiv.classList.add('kokteindo_filter_products_type_div');

        webGuidanceText = `
            <a onclick="koktel_scrollToProductType('kokteindo_headache_product_section')">صداع الرأس</a>
            <a onclick="koktel_scrollToProductType('kokteindo_stomachache_product_section')">ألم البطن</a>
            <a onclick="koktel_scrollToProductType('kokteindo_throat_product_section')">ألم الحلق</a>
        `;

        /* Filter Shisha Product Type */
    } else if (buttonClicked === 'show shisha type page') {

        webGuidanceDiv.classList.add('kokteindo_filter_products_type_div');

        webGuidanceText = `
            <a onclick="koktel_scrollToProductType('kokteindo_alphakhir_product_section')">نكهات الفاخر</a>
            <a onclick="koktel_scrollToProductType('kokteindo_mazaya_product_section')">نكهات مزايا</a>
            <a onclick="koktel_scrollToProductType('kokteindo_majalis_product_section')">نكهات مجالس</a>
            <a onclick="koktel_scrollToProductType('kokteindo_shisha_product_section')">ارقيلات</a>
            <a onclick="koktel_scrollToProductType('kokteindo_asset_product_section')">مستلزمات</a>
        `;
    }


    // Append All The elements inside 'FullScreenGuidanceOverlay'
    webGuidanceDiv.innerHTML = webGuidanceText;
    FullScreenGuidanceOverlay.appendChild(webGuidanceDiv);
    FullScreenGuidanceOverlay.appendChild(fullScreenOverlayExitButton);

    // Hide And Show Different Sections
    document.body.appendChild(FullScreenGuidanceOverlay);

    /* Hide The Nav Bar Element */
    koktel_nav_options.style.opacity = "0";
    koktel_nav_options.style.height = "0";
    koktel_nav_options.style.right = "-50%"; // Move to the right (-50%)
    document.body.classList.remove("nav-open");


    // Function To Exit The Big Image Page
    fullScreenOverlayExitButton.onclick = function () {

        // Re-enable scrolling
        document.documentElement.style.overflow = 'auto';

        // Hide And Reset All Data Stored inside The 'FullScreenGuidanceOverlay' Element
        let FullScreenGuidanceOverlay = document.getElementById('koktel_full_screen_guidance_overlay');
        document.body.removeChild(FullScreenGuidanceOverlay);
        FullScreenGuidanceOverlay.innerHTML = '';
    }
}

/* Open Website Languages */
function koktel_websiteLanguage() {

    // Disable scrolling
    document.documentElement.style.overflow = 'hidden';

    // Create A Div To Contain The Big Image
    let FullScreenGuidanceOverlay = document.createElement('div');
    FullScreenGuidanceOverlay.id = "koktel_full_screen_guidance_overlay";

    // Create A Button To Exit The Big Image Page
    let fullScreenOverlayExitButton = document.createElement('a');
    fullScreenOverlayExitButton.classList.add('koktel_full_screen_overlay_exit_button');
    fullScreenOverlayExitButton.innerText = "عودة";

    // Create Website Guidance Content
    let webGuidanceDiv = document.createElement('div');
    webGuidanceDiv.classList.add('web_guidance_div');

    let webGuidanceText = `
        <a href="https://koktel.com">العربية - Arabic</a>
        <a href="https://koktel.com">الإندونيسية - Indonesian</a>
        `;

    // Append All The elements inside 'FullScreenGuidanceOverlay'
    webGuidanceDiv.innerHTML = webGuidanceText;
    FullScreenGuidanceOverlay.appendChild(webGuidanceDiv);
    FullScreenGuidanceOverlay.appendChild(fullScreenOverlayExitButton);

    // Hide And Show Different Sections
    document.body.appendChild(FullScreenGuidanceOverlay);

    // Function To Exit The Big Image Page
    fullScreenOverlayExitButton.onclick = function () {
        // Re-enable scrolling
        document.documentElement.style.overflow = 'auto';

        // Hide And Reset All Data Stored inside The 'FullScreenGuidanceOverlay' Element
        FullScreenGuidanceOverlay.style.display = 'none';
        FullScreenGuidanceOverlay.innerHTML = '';
    }
}








/* Down Resturant Code Down */
/* Function To Show And Hide The Upper Bar of The Filter Restaurant Button */
if (document.getElementById("koktel_restaurant_section")) {
    window.addEventListener('scroll', function () {
        let restaurantTypeNav = document.getElementById('koktel_filter_restaurant_type_div_id');
        let restaurantUpperBar = document.getElementById('koktel_restaurant_type_nav_upper_bar');

        let menuNavOptionsRect = restaurantTypeNav.getBoundingClientRect();

        if (menuNavOptionsRect.top < 0) { // If menuNavOptions is above the viewport
            restaurantUpperBar.style.top = '0'; // Slide down upperBar
        } else {
            restaurantUpperBar.style.top = '-100%'; // Slide up upperBar
        }
    });


    /* Upper Bar Scroll To filter Retaurant Type Button */
    koktel_scrollToRestaurantType = function (MenuElementIdName) {

        let thisElement = document.getElementById(MenuElementIdName);

        thisElement.scrollIntoView({
            block: 'center',
            inline: 'center',
            behavior: 'smooth',
        });
    }


    /* Scroll To Clicked Restaurant type */
    koktel_scrollToRestaurantTypeId = function (RestaurantElementIdName) {

        // Re-enable scrolling
        document.documentElement.style.overflow = 'auto';

        // Hide And Reset All Data Stored inside The 'FullScreenGuidanceOverlay' Element
        let FullScreenGuidanceOverlay = document.getElementById('koktel_full_screen_guidance_overlay');
        document.body.removeChild(FullScreenGuidanceOverlay);
        FullScreenGuidanceOverlay.innerHTML = '';

        let thisElement = document.getElementById(RestaurantElementIdName);

        thisElement.scrollIntoView({
            block: 'center',
            inline: 'center',
            behavior: 'smooth',
        });
    }
}

/* Function To Show And Hide The Upper Bar of The Filter Menu Button */
if (document.getElementById("koktel_restaurant_menu_section")) {

    /* Show or Hide The 'upperBar' Element Based on The 'koktel_filter_product_type_div_id' element postion */
    window.addEventListener('scroll', function () {
        let menuNav = document.getElementById('koktel_filter_meal_type_div_id');
        let upperBar = document.getElementById('koktel_meal_type_nav_upper_bar');

        let menuNavOptionsRect = menuNav.getBoundingClientRect();

        if (menuNavOptionsRect.top < 0) { // If menuNavOptions is above the viewport
            upperBar.style.top = '0'; // Slide down upperBar
        } else {
            upperBar.style.top = '-100%'; // Slide up upperBar
        }
    });

    /* Upper Bar Scroll To filter Menu Type Button */
    koktel_scrollToFilterFoodType = function (MenuElementIdName) {

        let thisElement = document.getElementById(MenuElementIdName);

        thisElement.scrollIntoView({
            block: 'center',
            inline: 'center',
            behavior: 'smooth',
        });
    }

    koktel_scrollToMealType = function (mealTypeName) {

        // Re-enable scrolling
        document.documentElement.style.overflow = 'auto';

        // Hide And Reset All Data Stored inside The 'FullScreenGuidanceOverlay' Element
        let FullScreenGuidanceOverlay = document.getElementById('koktel_full_screen_guidance_overlay');
        document.body.removeChild(FullScreenGuidanceOverlay);
        FullScreenGuidanceOverlay.innerHTML = '';

        let mealTypeNameArea = document.getElementById(mealTypeName);

        mealTypeNameArea.scrollIntoView({
            block: 'center',
            inline: 'center',
            behavior: 'smooth',
        });
    }
}

/* Function To Show Meal Info Elements And Culculate The Price Numbers */
if (document.getElementById("koktel_meal_info_section")) {

    // Get reference to the element with id "koktel_meal_info_section"
    let koktel_meal_info_options_area_id = document.getElementById("koktel_meal_info_section");

    // Arrays to store added numbers and current meal prices
    let addedNumbers = [];
    let currentMealPrices = [];

    /* Create the content for adding notes to the meal */
    let koktel_mealInfoOptionsDiv = document.createElement('div');
    koktel_mealInfoOptionsDiv.classList.add('koktel_meal_info_options_div');
    let koktel_mealInfoOptionsTitle = document.createElement('div');
    koktel_mealInfoOptionsTitle.classList.add('koktel_meal_info_options_title');
    let koktel_mealInfoOptionsTitleH2 = document.createElement('h2');
    koktel_mealInfoOptionsTitleH2.innerHTML = `<h2>اضافة ملاحظة للتعديل على الطلب <samp style="color: rgb(0, 255, 0);">اختياري</samp></h2>`;
    koktel_mealInfoOptionsTitle.appendChild(koktel_mealInfoOptionsTitleH2);
    koktel_mealInfoOptionsDiv.appendChild(koktel_mealInfoOptionsTitle);
    koktel_meal_info_options_area_id.appendChild(koktel_mealInfoOptionsDiv);

    // Create textarea for user to add notes to the meal
    let koktel_mealInfoNote = document.createElement('div');
    koktel_mealInfoNote.classList.add('koktel_meal_info_note');
    let koktel_mealInfoNoteTextarea = `<textarea placeholder="ملاحظاتك هنا" class="koktel_meal_info_note_textarea" maxlength="100"></textarea>`;
    koktel_mealInfoNote.innerHTML = koktel_mealInfoNoteTextarea;
    koktel_mealInfoOptionsDiv.appendChild(koktel_mealInfoNote);

    // Create title for selecting the number of items
    let koktel_mealInfoOptionsAmountTitle = document.createElement('div');
    koktel_mealInfoOptionsAmountTitle.classList.add('koktel_meal_info_options_amount_title');
    let koktel_mealInfoOptionsAmountTitleH2 = document.createElement('h2');
    koktel_mealInfoOptionsAmountTitleH2.innerHTML = `<h2>العدد <samp style="color: red;">مطلوب</samp></h2>`;
    koktel_mealInfoOptionsAmountTitle.appendChild(koktel_mealInfoOptionsAmountTitleH2);
    koktel_meal_info_options_area_id.appendChild(koktel_mealInfoOptionsAmountTitle);

    // Create buttons to increase/decrease the number of items
    let koktel_meal_Info_Options_Div = document.createElement('div');
    koktel_meal_Info_Options_Div.classList.add('koktel_meal_info_options_div');
    let koktel_mealInfoOptionsAmount = document.createElement('div');
    koktel_mealInfoOptionsAmount.classList.add('koktel_meal_info_options_amount');
    let koktel_amountNumberContent = `
        <ion-icon name="add-outline" id="koktel_plus_icon" style="color: rgb(0, 255, 0);" onclick="koktel_updateMealAmountNumber(this)"></ion-icon>
        <h2 id='koktel_amountNumberElement'>1</h2>
        <ion-icon name="remove-outline" id="koktel_minus_icon" style="color: red; opacity: 0; transition: opacity 0.2s ease-in-out" onclick="koktel_updateMealAmountNumber(this)"></ion-icon>`;
    koktel_mealInfoOptionsAmount.innerHTML = koktel_amountNumberContent;
    koktel_meal_Info_Options_Div.appendChild(koktel_mealInfoOptionsAmount);
    koktel_meal_info_options_area_id.appendChild(koktel_meal_Info_Options_Div);


    // Get original meal price
    let originalMealPriceElement = document.getElementById("koktel_orignal_price");
    let originalMealPrice = parseFloat(originalMealPriceElement.innerText.replace(/[^0-9\.]+/g, ""));
    let currentMealPrice = originalMealPrice;

    // Create element to display total price
    let koktel_totalPriceDiv = document.createElement('div');
    koktel_totalPriceDiv.id = 'koktel_product_bottom_counter_div';
    koktel_totalPriceDiv.innerHTML = `<h6 onclick="koktel_createOrderText()">إضافة الطلب = ${currentMealPrice.toLocaleString()} Rp (بدون سعر التوصيل)</h6>`;
    koktel_meal_info_options_area_id.appendChild(koktel_totalPriceDiv);


    // Function to update the number of items
    function koktel_updateMealAmountNumber(clickedIcon) {
        let change = clickedIcon.getAttribute('name') === "add-outline" ? 1 : -1;
        let mealAmountNumberElement = document.getElementById('koktel_amountNumberElement');
        let mealAmountNumber = parseInt(mealAmountNumberElement.innerText);
        mealAmountNumber += change;
        mealAmountNumber = Math.max(mealAmountNumber, 1); // Ensure the quantity never goes below 1
        mealAmountNumberElement.innerText = mealAmountNumber;

        // Recalculate current meal prices for all added numbers
        currentMealPrices = addedNumbers.map(number => number * mealAmountNumber);

        // Calculate total current meal price considering all added numbers
        let totalCurrentMealPrice = originalMealPrice * mealAmountNumber;
        currentMealPrices.forEach(price => {
            totalCurrentMealPrice += price;
        });

        // Ensure total current meal price never goes below the original meal price
        totalCurrentMealPrice = Math.max(totalCurrentMealPrice, originalMealPrice);

        koktel_totalPriceDiv.innerHTML = `<h6 onclick="koktel_createOrderText()">إضافة الطلب = ${totalCurrentMealPrice.toLocaleString()} Rp (بدون سعر التوصيل)</h6>`;

        /* Get The Minus Icon So You Can Change its Opacity Value */
        let minusIcon = document.getElementById('koktel_minus_icon');
        if (minusIcon) {
            if (mealAmountNumber > 1) {
                minusIcon.style.opacity = '1';
            } else {
                minusIcon.style.opacity = '0';
            }
        }
    };

    // Function to add or remove numbers
    function koktel_addMoreNumberToPrice(clickedBox, addedNumber) {
        let mealAmountNumberElement = document.getElementById('koktel_amountNumberElement');
        let mealAmountNumber = parseInt(mealAmountNumberElement.innerText);

        if (clickedBox.checked) {
            // Store added number and corresponding current meal price in arrays
            addedNumbers.push(addedNumber);
            currentMealPrices.push(addedNumber * mealAmountNumber);
        } else {
            // Remove added number and corresponding current meal price from arrays
            let index = addedNumbers.indexOf(addedNumber);
            if (index !== -1) {
                addedNumbers.splice(index, 1);
                currentMealPrices.splice(index, 1);
            }
        }

        // Calculate total current meal price considering all added numbers
        let totalCurrentMealPrice = originalMealPrice * mealAmountNumber;
        currentMealPrices.forEach(price => {
            totalCurrentMealPrice += price;
        });

        // Ensure total current meal price never goes below the original meal price
        totalCurrentMealPrice = Math.max(totalCurrentMealPrice, originalMealPrice);

        // Update the displayed total price
        koktel_totalPriceDiv.innerHTML = `<h6 onclick="koktel_createOrderText()">إضافة الطلب = ${totalCurrentMealPrice.toLocaleString()} Rp (بدون سعر التوصيل)</h6>`;
    };


    /* Get The Summry Text of The Order And Save it For Later Use */
    koktel_createOrderText = function () {
        // Function to dynamically find elements with IDs matching the pattern 'required_div_' + index
        function findRequiredDivs() {
            let index = 1;
            let requiredDivs = [];

            // Keep searching for elements with IDs matching the pattern until no more are found
            while (true) {
                let requiredDiv = document.getElementById('required_div_' + index);

                // If no element is found with the current ID, stop searching
                if (!requiredDiv) {
                    break;
                }

                // Add the found required_div to the array
                requiredDivs.push(requiredDiv);
                index++;
            }

            return requiredDivs;
        }

        // Function to check if at least one checkbox is checked in each required div
        function areAllRequiredCheckboxesChecked(requiredDivs) {
            let allRequiredCheckboxesChecked = true;

            // Check if at least one checkbox is checked in each required div
            for (let requiredDiv of requiredDivs) {
                let checkboxes = requiredDiv.querySelectorAll('input[type="checkbox"]');
                let atLeastOneChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
                if (!atLeastOneChecked) {
                    // Scroll to the middle of the viewport for the element with unchecked checkbox
                    scrollToMiddle(requiredDiv);
                    allRequiredCheckboxesChecked = false; // Set the flag to false

                    // Show error message and fade out after 2 seconds
                    // Create a box with the text "تمت اضافة الطلب"
                    let successBox = document.createElement('div');
                    successBox.textContent = 'تأكد من ملئ جميع الخيارات';
                    successBox.style.color = 'red';
                    successBox.classList.add('koktel_success_box');
                    document.body.appendChild(successBox);

                    // Trigger the slide and fade-in animation by setting the final transform value and opacity to 1
                    setTimeout(() => {
                        successBox.style.transform = 'translate(-50%, -50%)'; // Slide animation
                        successBox.style.opacity = '1'; // Fade-in animation
                    }, 10);

                    // Remove the success box after 3 seconds
                    setTimeout(() => {
                        // Trigger the fade-out animation by setting opacity to 0
                        successBox.style.opacity = '0';

                        // Remove the element from
                        // Remove the element from the DOM after the fade-out animation completes
                        setTimeout(() => {
                            successBox.remove();
                        }, 9000); // Wait for the fade-out transition to complete (1.5s)

                    }, 800); // Wait for 3 seconds before triggering fade-out
                    break; // Exit the loop
                }
            }

            return allRequiredCheckboxesChecked;
        }

        // Function to scroll to the middle of the viewport for a given element
        function scrollToMiddle(element) {
            let elementRect = element.getBoundingClientRect();
            let absoluteElementTop = elementRect.top + window.pageYOffset;
            let middle = absoluteElementTop - (window.innerHeight / 2 - elementRect.height / 2);
            window.scrollTo({
                top: middle,
                behavior: 'smooth'
            });
        }

        // Get the required divs dynamically
        let requiredDivs = findRequiredDivs();

        // Check if at least one checkbox is checked in each required div
        let allRequiredCheckboxesChecked = areAllRequiredCheckboxesChecked(requiredDivs);

        // If at least one checkbox is checked in each required div, proceed with the rest of the function
        if (!allRequiredCheckboxesChecked) {
            // If any required div doesn't have any checkbox checked, Stop The Process
            return; // Exit the function
        }

        if (document.getElementById('koktel_order_page_icon_div')) {
            document.getElementById('koktel_order_page_icon_div').style.opacity = '1';

        } else {
            // Create Button To Show Orders Page
            let koktel_mealOrderIconDiv = document.createElement('div');
            koktel_mealOrderIconDiv.id = 'koktel_order_page_icon_div';
            let koktel_mealOrderIcon = `<a href='https://bandar-zuhair.github.io/Koktel/طلباتك-من-المطاعم.html' id="koktel_order_page_icon"><ion-icon name="cart-outline"></ion-icon></a>`;
            koktel_mealOrderIconDiv.innerHTML = koktel_mealOrderIcon;
            koktel_mealOrderIconDiv.style.opacity = '0';
            document.body.appendChild(koktel_mealOrderIconDiv);
            setTimeout(() => {
                koktel_mealOrderIconDiv.style.opacity = '1';
            }, 1);

        }

        // Get the inner text of the meal name and details
        let mealName = document.getElementById('koktel_meal_name').innerText;
        let mealDetails = document.getElementById('koktel_meal_details').innerText;

        // Get all checked checkboxes
        let checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');

        // Get the innerText of each checked checkbox
        let checkedTexts = Array.from(checkedCheckboxes).map(checkbox => checkbox.parentElement.innerText);

        // Concatenate all checked texts with line breaks
        let orderText = checkedTexts.join('\n');

        // Get the text inside the textarea
        let noteTextarea = document.querySelector('.koktel_meal_info_note_textarea');
        let noteText = noteTextarea.value.trim();

        // Get the total current meal price
        let totalCurrentMealPriceText = document.getElementById('koktel_product_bottom_counter_div').querySelector('h6').textContent;
        let totalCurrentMealPrice = parseFloat(totalCurrentMealPriceText.replace(/[^\d.]/g, '')).toLocaleString() + ' Rp'; // Format with commas

        // Get the meal amount number
        let mealAmountNumber = parseInt(document.getElementById('koktel_amountNumberElement').innerText).toLocaleString(); // Format with commas

        // Get the web logo source from the element with id "koktel_web_logo_no_moving"
        let mealImgSrc = document.getElementById('koktel_web_logo_no_moving').src;

        // Create an object to represent the order
        let order = {
            mealName: mealName,
            mealDetails: mealDetails,
            orderText: orderText,
            mealAmountNumber: mealAmountNumber,
            noteText: noteText,
            totalCurrentMealPrice: totalCurrentMealPrice,
            mealImgSrc: mealImgSrc // Save the exact image source
        };


        // Get existing restaurant orders from localStorage or initialize as an empty array if not present
        let existingOrders = JSON.parse(localStorage.getItem('restaurant_orders')) || [];

        // Append the new restaurant order object to the existing orders array
        existingOrders.push(order);

        // Save the updated orders back to localStorage
        localStorage.setItem('restaurant_orders', JSON.stringify(existingOrders));


        // Create a box with the text "تمت اضافة الطلب"
        let successBox = document.createElement('div');
        successBox.textContent = 'تمت اضافة الطلب';
        successBox.classList.add('koktel_success_box');
        document.body.appendChild(successBox);

        // Trigger the slide and fade-in animation by setting the final transform value and opacity to 1
        setTimeout(() => {
            successBox.style.transform = 'translate(-50%, -50%)'; // Slide animation
            successBox.style.opacity = '1'; // Fade-in animation
        }, 10);

        // Remove the success box after 3 seconds
        setTimeout(() => {
            // Trigger the fade-out animation by setting opacity to 0
            successBox.style.opacity = '0';

            // Remove the element from
            // Remove the element from the DOM after the fade-out animation completes
            setTimeout(() => {
                successBox.remove();
            }, 9000); // Wait for the fade-out transition to complete (1.5s)

        }, 800); // Wait for 3 seconds before triggering fade-out
    }

    /* Make The Old Box Unchecked And Only The New Box Checked */
    koktel_uncheckOldBox = function (clickedBoxId) {
        // Get the parent div of the clicked checkbox
        let parentDiv = document.getElementById(clickedBoxId).closest('.koktel_meal_info_options_div');

        // Get all checkboxes within the parent div
        let checkboxes = parentDiv.querySelectorAll('input[type="checkbox"]');

        // Uncheck all checkboxes except for the clicked checkbox
        checkboxes.forEach(checkbox => {
            if (checkbox.id !== clickedBoxId) {
                checkbox.checked = false;
            }
        });
    };
}

/* Function To Create Restaurant Order Details Page Content And Final WhatsApp Message */
if (document.getElementById("koktel_restaurant_order_details_body_id")) {

    /* Create Content For The Basic Orders Page */
    let all_order_page_content = `
        <div class="koktel_order_details_div" id="koktel_order_details_div_id" style="display: flex;">
            <h1 class="koktel_order_details_title">طلباتك من المطاعم جاهزة للإرسال</h1>


            <div class='koktel_order_finished_card_area' id='koktel_order_finished_card_area_id'></div>

            <div>
                <h4 id='koktel_delete_all_restaurant_orders_button' onclick='koktel_ensure_delete_orders_box(this)' style="display: none;">حذف جميع الطلبات</h4>
            </div>


            <div id="koktel_order_check_out_div" style="display: none;"></div>


            <a href="https://bandar-zuhair.github.io/Koktel/مطاعم-اندونيسيا.html" class="koktel_go_back_products_page_button"> <ion-icon name="arrow-forward-circle-outline"></ion-icon> .. قسم المطاعم</a>
        </div>`;

    /* Set The Inner HTML Code of The 'all_order_page_content' Inside The 'koktel_restaurant_order_details_body_id' Element */
    document.getElementById('koktel_restaurant_order_details_body_id').innerHTML = all_order_page_content;





    // Parse restaurant_orders from localStorage
    if (localStorage.getItem('restaurant_orders')) {

        let orders = JSON.parse(localStorage.getItem('restaurant_orders'));


        orders.forEach((orderData, index) => {
            let localStorageOrderCardFinished = document.createElement('div');
            localStorageOrderCardFinished.classList.add('koktel_order_finished_card');

            // Remove the comma from totalCurrentMealPrice before adding 20000
            let totalPriceWithoutComma = parseFloat(orderData.totalCurrentMealPrice.replace(',', ''));
            let totalPriceWithDeliveryForOrder = totalPriceWithoutComma + 20000;
            let totalPriceWithDeliveryFormatted = totalPriceWithDeliveryForOrder.toLocaleString();

            let localStorageOrderCardContent = `
            <h2 onclick="koktel_show_order_details_page(${index})">طلب رقم ${index + 1}</h2>
            <img src=${orderData.mealImgSrc} alt="مطاعم اندونيسيا - كوكتيل" title="مطاعم اندونيسيا - كوكتيل" onclick="koktel_show_order_details_page(${index})" loading="lazy">
            <div>
                <h3>الإجمالي مع التوصيل = ${totalPriceWithDeliveryFormatted} Rp</h3>
            </div>
            <div class='koktel_orderFinished_info_and_delete'>
                <h3 id="koktel_order_details_h3" onclick="koktel_show_order_details_page(${index})">تفاصيل الطلب</h3>
                <h3 style="color: red;" onclick="koktel_ensure_delete_orders_box(this, ${index})">حذف الطلب</h3>
            </div>`;

            localStorageOrderCardFinished.innerHTML = localStorageOrderCardContent;
            koktel_order_finished_card_area_id.appendChild(localStorageOrderCardFinished);
        });


        /* Create The Bill Card Content */
        let totalPrices = orders.map(order => parseFloat(order.totalCurrentMealPrice.replace(',', '')) + 20000);
        let totalPriceSum = totalPrices.reduce((acc, price) => acc + price, 0);
        let totalPriceSumFormatted = totalPriceSum.toLocaleString();

        let koktel_order_check_out_whatsApp_content = `
            <div id="koktel_order_check_out_whatsApp_div" onclick="koktel_createFinalWhatsAppMessage()">
                <ion-icon name="logo-whatsapp"></ion-icon>
                <h5>إرسال الطلبات</h5>
            </div>
            <div id="koktel_order_check_out_bill_div">
                <h6 id="koktel_order_check_out_bill_title" style="color: rgb(0, 255, 0)">الفاتورة</h6>
                ${orders.map((order, index) => `<h6>الطلب رقم ${index + 1} : ${(parseFloat(order.totalCurrentMealPrice.replace(',', '')) + 20000).toLocaleString()} Rp</h6>`).join('')}
                <h6 id="koktel_order_check_out_bill_total_price" style="color: rgb(0, 255, 0)">الإجمالي مع التوصيل : ${totalPriceSumFormatted} Rp</h6>
            </div>
        `;

        /* Show The Following Code if There is Any Data in The restaurant_orders Key */
        document.getElementById('koktel_order_check_out_div').innerHTML = koktel_order_check_out_whatsApp_content;
        document.getElementById('koktel_order_check_out_div').style.display = 'flex';
        document.getElementById('koktel_delete_all_restaurant_orders_button').style.display = 'block';

    } else {

        // Create the element for each order
        let localStorageOrderCardFinished = document.createElement('div');
        localStorageOrderCardFinished.classList.add('koktel_order_finished_card');
        let localStorageOrderCardContent = `
            <h1 id='koktel_there_is_no_orders_text'>لاتوجد اي طلبات بعد..<ion-icon name="telescope-outline"></ion-icon></h1>`;
        koktel_order_finished_card_area_id.innerHTML = localStorageOrderCardContent;

        // Hide These Elements if There is No Any Restaurant Orders
        koktel_delete_all_restaurant_orders_button.style.display = 'none';
        document.getElementById('koktel_order_check_out_div').innerHTML = '';

    }






    /* Function To Show The Ensure Delete Box */
    koktel_ensure_delete_orders_box = function (clickedDeleteButton, index) {
        if (clickedDeleteButton.innerText === 'حذف الطلب') {
            // Construct the ID of the corresponding overlay element
            let overlayId = `koktel_ensure_delete_this_orders_overlay_${index}`;

            // Show the overlay element
            document.getElementById(overlayId).style.display = 'block';
        } else {
            document.getElementById('koktel_ensure_delete_all_orders_overlay').style.display = 'block';
        }

        // Disable Scrolling
        document.documentElement.style.overflow = 'hidden';
    }




    /* Function To Delete All Orders Data */
    koktel_delete_all_orders_function = function (clickedDeleteAnswer) {

        /* First Check if The Clicked Button is 'عودة' or 'نعم' */
        if (clickedDeleteAnswer.innerText === 'عودة') {
            /* Hide The Ensure Box Element */
            document.getElementById('koktel_ensure_delete_all_orders_overlay').style.display = 'none';

        } else {

            /* Hide The Ensure Box Element */
            document.getElementById('koktel_ensure_delete_all_orders_overlay').style.display = 'none';

            // Clear All Data in LocalStorage
            localStorage.removeItem('restaurant_orders');

            // Create a box with the text "تم حذف جميع الطلبات"
            let successBox = document.createElement('div');
            successBox.textContent = 'تم حذف جميع طلبات المطاعم';
            successBox.classList.add('koktel_success_box');
            document.body.appendChild(successBox);

            // Trigger the slide and fade-in animation by setting the final transform value and opacity to 1
            setTimeout(() => {
                successBox.style.transform = 'translate(-50%, -50%)'; // Slide animation
                successBox.style.opacity = '1'; // Fade-in animation
            }, 10);

            // Remove the success box after 3 seconds
            setTimeout(() => {
                // Trigger the fade-out animation by setting opacity to 0
                successBox.style.opacity = '0';

                // Remove the element from the DOM after the fade-out animation completes
                setTimeout(() => {
                    successBox.remove();
                }, 9000); // Wait for the fade-out transition to complete (1.5s)
            }, 800); // Wait for 3 seconds before triggering fade-out


            // Call renderOrders function to initially render orders
            renderOrders();
        }

        // Re-enable scrolling
        document.documentElement.style.overflow = 'auto';
    }






    /* Function To Delete Only One Order Data */
    koktel_delete_this_orders_function = function (clickedDeleteAnswer, indexNumber) {

        if (clickedDeleteAnswer.innerText === 'عودة') {
            /* Hide The Ensure Box Element */
            document.getElementById(`koktel_ensure_delete_this_orders_overlay_${indexNumber}`).style.display = 'none';
        } else {
            /* Hide The Ensure Box Element */
            document.getElementById(`koktel_ensure_delete_this_orders_overlay_${indexNumber}`).style.display = 'none';

            /* Store The restaurant_orders Key Data in A Variable */
            let orders = JSON.parse(localStorage.getItem('restaurant_orders'));

            // Check if orders exist and if the index is valid
            if (orders && indexNumber >= 0 && indexNumber < orders.length) {
                // Remove the order with the specified index
                orders.splice(indexNumber, 1);

                // Save the updated orders back to localStorage
                localStorage.setItem('restaurant_orders', JSON.stringify(orders));

                // Refresh the page or update the display to reflect the changes
                renderOrders();

                // Create a box with the text "تم حذف الطلب"
                let successBox = document.createElement('div');
                successBox.textContent = 'تم حذف الطلب';
                successBox.classList.add('koktel_success_box');
                document.body.appendChild(successBox);

                // Trigger the slide and fade-in animation by setting the final transform value and opacity to 1
                setTimeout(() => {
                    successBox.style.transform = 'translate(-50%, -50%)'; // Slide animation
                    successBox.style.opacity = '1'; // Fade-in animation
                }, 10);

                // Remove the success box after 3 seconds
                setTimeout(() => {
                    // Trigger the fade-out animation by setting opacity to 0
                    successBox.style.opacity = '0';

                    // Remove the element from the DOM after the fade-out animation completes
                    setTimeout(() => {
                        successBox.remove();
                    }, 9000); // Wait for the fade-out transition to complete (1.5s)
                }, 800); // Wait for 3 seconds before triggering fade-out
            }
        }

        // Re-enable scrolling
        document.documentElement.style.overflow = 'auto';
    }




    // Function to render the orders
    function renderOrders() {
        // Get the container for displaying orders
        koktel_order_finished_card_area_id.innerHTML = ''; // Clear the existing content

        // Get The orders from localStorage
        let orders = JSON.parse(localStorage.getItem('restaurant_orders'));



        // Check if orders is empty or null
        if (!orders || orders.length === 0) {
            // Remove the orders key from localStorage
            localStorage.removeItem('restaurant_orders');


            // Create the element for each order
            let localStorageOrderCardFinished = document.createElement('div');
            localStorageOrderCardFinished.classList.add('koktel_order_finished_card');
            let localStorageOrderCardContent = `
                <h1 id='koktel_there_is_no_orders_text'>لاتوجد اي طلبات بعد..<ion-icon name="telescope-outline"></ion-icon></h1>`;
            koktel_order_finished_card_area_id.innerHTML = localStorageOrderCardContent;

            // Hide These Elements if There is No Any Restaurant Orders
            koktel_delete_all_restaurant_orders_button.style.display = 'none';
            document.getElementById('koktel_order_check_out_div').innerHTML = '';

        }


        /* in Case if There is Data in The Orders Key */
        if (localStorage.getItem('restaurant_orders')) {

            // Parse orders from localStorage
            let orders = JSON.parse(localStorage.getItem('restaurant_orders'));

            // Loop through each order data
            orders.forEach((orderData, index) => {
                // Create the element for each order
                let localStorageOrderCardFinished = document.createElement('div');
                localStorageOrderCardFinished.classList.add('koktel_order_finished_card');

                // letruct the inner HTML content for the order
                let localStorageOrderCardContent = `
                    <h2 onclick="koktel_show_order_details_page(${index})">طلب رقم ${index + 1}</h2>
                        <img src=${orderData.mealImgSrc} alt="مطاعم اندونيسيا - كوكتيل" title="مطاعم اندونيسيا - كوكتيل" onclick="koktel_show_order_details_page(${index})" loading="lazy">
                    <div>
                        <h3 onclick="koktel_show_order_details_page(${index})">الإجمالي مع التوصيل = ${(parseFloat(orderData.totalCurrentMealPrice.replace(',', '')) + 20000).toLocaleString()} Rp</h3>
                    </div>
                    <div class='koktel_orderFinished_info_and_delete'>
                        <h3 id="koktel_order_details_h3" onclick="koktel_show_order_details_page(${index})">تفاصيل الطلب</h3>
                        <h3 style="color: red;" onclick="koktel_ensure_delete_orders_box(this, ${index})">حذف الطلب</h3>
                    </div>
                    
                    
                    <div id='koktel_ensure_delete_all_orders_overlay' class='koktel_ensure_delete_orders_overlay' style='display:none'>
                        <div id='koktel_ensure_delete_all_orders_div'>
                            <h6>متاكد من حذف جميع الطلبات؟</h6>
                            <div id='koktel_ensure_delete_all_orders_answer_div'>
                                <h6 onclick='koktel_delete_all_orders_function(this)'>عودة</h6>
                                <h6 onclick='koktel_delete_all_orders_function(this)'>نعم</h6>
                            </div>
                        </div>
                    </div>

                    <div id='koktel_ensure_delete_this_orders_overlay_${index}' class='koktel_ensure_delete_orders_overlay' style='display:none'>
                        <div id='koktel_ensure_delete_all_orders_div'>
                            <h6>متاكد من حذف هذا الطلب؟</h6>
                            <div id='koktel_ensure_delete_all_orders_answer_div'>
                                <h6 onclick='koktel_delete_this_orders_function(this, ${index})'>عودة</h6>
                                <h6 onclick='koktel_delete_this_orders_function(this, ${index})'>نعم</h6>
                            </div>
                        </div>
                    </div>
                    `;

                // Assign the HTML content to the created element
                localStorageOrderCardFinished.innerHTML = localStorageOrderCardContent;

                // Append the order element to the parent container
                koktel_order_finished_card_area_id.appendChild(localStorageOrderCardFinished);

                // Increment the index for the next iteration
                index++;

            })

            /* Create The Bill Card Content */
            let totalPrices = orders.map(order => parseFloat(order.totalCurrentMealPrice.replace(',', '')) + 20000);
            let totalPriceSum = totalPrices.reduce((acc, price) => acc + price, 0);
            let totalPriceSumFormatted = totalPriceSum.toLocaleString();

            let koktel_order_check_out_whatsApp_content = `
                <div id="koktel_order_check_out_whatsApp_div" onclick="koktel_createFinalWhatsAppMessage()">
                    <ion-icon name="logo-whatsapp"></ion-icon>
                    <h5>إرسال الطلبات</h5>
                </div>
                <div id="koktel_order_check_out_bill_div">
                    <h6 id="koktel_order_check_out_bill_title" style="color: rgb(0, 255, 0)">الفاتورة</h6>
                    ${orders.map((order, index) => `<h6>الطلب رقم ${index + 1} : ${(parseFloat(order.totalCurrentMealPrice.replace(',', '')) + 20000).toLocaleString()} Rp</h6>`).join('')}
                    <h6 id="koktel_order_check_out_bill_total_price" style="color: rgb(0, 255, 0)">الإجمالي مع التوصيل : ${totalPriceSumFormatted} Rp</h6>
                </div>
            `;

            /* Show The Following Code if There is Any Data in The restaurant_orders Key */
            document.getElementById('koktel_order_check_out_div').innerHTML = koktel_order_check_out_whatsApp_content;

            document.getElementById('koktel_order_check_out_div').style.display = 'flex';
        }

    }


    // Call renderOrders function to initially render orders
    renderOrders();




    // Function to show order details
    function koktel_show_order_details_page(orderIndexNumber) {

        // Retrieve orders from localStorage
        let orders = JSON.parse(localStorage.getItem('restaurant_orders'));
        if (!orders) return; // Exit if there are no orders

        let order = orders[orderIndexNumber];
        if (!order) return; // Exit if the order is not found

        // Create a new div element to hold the order details content
        let orderDetailsContainer = document.createElement('div');
        orderDetailsContainer.id = 'koktel_order_details_text_div';

        // Create order details HTML content
        let orderDetailsContent = `
            <div id="koktel_order_details_text_img">
                <img src=${order.mealImgSrc} alt="مطاعم اندونيسيا - كوكتيل" title="مطاعم اندونيسيا - كوكتيل" id="koktel_weblogo" onclick="koktel_show_full_screen_image(this.src)" loading="lazy">
            </div>
            <div>
                <h1 class="koktel_order_details_title">تفاصيل الطلب رقم ${orderIndexNumber + 1}</h1>
            </div>
            <div id="koktel_order_details_text_background" style="background: linear-gradient(to right, rgb(0, 123, 255), rgb(0, 79, 163));">
                <h4>الاسم: ${order.mealName}</h4>
                <h4>الوصف: ${order.mealDetails}</h4>
                <h4>الطلب:</h4>
                ${order.orderText.split('\n').map(line => `<h4>${line}</h4>`).join('')}
                <h4>${order.noteText}</h4>
                <h4>عدد الطلب: ${order.mealAmountNumber}</h4>
                <h4>سعر التوصيل = 20,000 Rp</h4>
                <h4>سعر الطلب = ${order.totalCurrentMealPrice} (بدون سعر التوصيل)</h4>
            </div>
            <div id="koktel_order_details_text_bottom_button_div" style="background: linear-gradient(to right, rgb(132, 0, 255), rgb(60, 0, 117));">
                <h5 onclick="koktel_hide_order_details_page()">عودة</h5>
                <h5 style="color: red;" onclick="koktel_ensure_delete_text_orders_box()">حذف الطلب</h5>
            </div>

            <div id='koktel_ensure_delete_text_orders_overlay' style='display:none'>
                <div id='koktel_ensure_delete_all_orders_div'>
                    <h6>متاكد من حذف هذا الطلب؟</h6>
                    <div id='koktel_ensure_delete_all_orders_answer_div'>
                        <h6 onclick='koktel_delete_text_orders_function(this)'>عودة</h6>
                        <h6 onclick='koktel_delete_text_orders_function(this, ${orderIndexNumber})'>نعم</h6>
                    </div>
                </div>
            </div>
        `;

        // Hide the order list container
        document.getElementById('koktel_order_details_div_id').style.display = 'none';


        // Append The Following Elements To Each Other
        orderDetailsContainer.innerHTML = orderDetailsContent;
        document.getElementById('koktel_restaurant_order_details_body_id').appendChild(orderDetailsContainer);
    }

    // Function to hide order details
    function koktel_hide_order_details_page() {

        // Remove the order details content from the container
        let orderDetailsContainer = document.getElementById('koktel_order_details_text_div');
        if (orderDetailsContainer) {
            orderDetailsContainer.remove();
        }

        // Show the order list container
        document.getElementById('koktel_order_details_div_id').style.display = 'flex';
    }

    /* Function To Show Ensure Delete Box From The Order Text Page */
    koktel_ensure_delete_text_orders_box = function () {
        document.getElementById('koktel_ensure_delete_text_orders_overlay').style.display = 'block';

        // Disable Scrolling
        document.documentElement.style.overflow = 'hidden';

    }

    /* if The Clicked Button From The Order Text Page */
    koktel_delete_text_orders_function = function (clickedButtonAnswer, indexNumber) {
        if (clickedButtonAnswer.innerText === 'عودة') {
            /* Hide The Ensure Box Element */
            document.getElementById('koktel_ensure_delete_text_orders_overlay').style.display = 'none';

        } else {

            /* Hide The Ensure Box Element */
            document.getElementById('koktel_ensure_delete_text_orders_overlay').style.display = 'none';

            /* Store The Orders Key Data in A Variable */
            let orders = JSON.parse(localStorage.getItem('restaurant_orders'));

            // Remove the order with the specified index
            orders.splice(indexNumber, 1);

            // Save the updated orders back to localStorage
            localStorage.setItem('restaurant_orders', JSON.stringify(orders));

            // Check if orders is empty or null
            if (!orders || orders.length === 0) {
                // Remove the orders key from localStorage
                localStorage.removeItem('restaurant_orders');
            }

            // Refresh the page or update the display to reflect the changes
            renderOrders();

            // Create a box with the text "تم حذف جميع الطلبات"
            let successBox = document.createElement('div');
            successBox.textContent = 'تم حذف الطلب';
            successBox.classList.add('koktel_success_box');
            document.body.appendChild(successBox);

            // Trigger the slide and fade-in animation by setting the final transform value and opacity to 1
            setTimeout(() => {
                successBox.style.transform = 'translate(-50%, -50%)'; // Slide animation
                successBox.style.opacity = '1'; // Fade-in animation
            }, 10);

            // Remove the success box after 3 seconds
            setTimeout(() => {
                // Trigger the fade-out animation by setting opacity to 0
                successBox.style.opacity = '0';

                // Remove the element from the DOM after the fade-out animation completes
                setTimeout(() => {
                    successBox.remove();
                }, 9000); // Wait for the fade-out transition to complete (1.5s)
            }, 800); // Wait for 3 seconds before triggering fade-out


            // Remove the order details content from the container
            let orderDetailsContainer = document.getElementById('koktel_order_details_text_div');
            if (orderDetailsContainer) {
                orderDetailsContainer.remove();
            }

            // Show the order list container
            document.getElementById('koktel_order_details_div_id').style.display = 'flex';

        }

        // Re-enable scrolling
        document.documentElement.style.overflow = 'auto';
    }



    koktel_createFinalWhatsAppMessage = function () {
        // Retrieve orders from localStorage
        let orders = JSON.parse(localStorage.getItem('restaurant_orders'));

        // Initialize an array to store order details
        let orderDetails = [];

        // Initialize a variable to store the grand total
        let grandTotal = 0;

        // Loop through each order and extract relevant information
        orders.forEach((order, index) => {
            let totalWithDelivery = parseFloat(order.totalCurrentMealPrice.replace(',', '')) + 20000;
            grandTotal += totalWithDelivery;

            // Split order.orderText by newline character and prepend each line with its index number
            let orderedText = order.orderText.split('\n').map((line, i) => `${i + 1}- ${line}`).join('\n');

            let orderInfo = `الطلب رقم ${index + 1}- ${order.mealName}\n`;
            orderInfo += `- الوصف: ${order.mealDetails}\n\n`;
            orderInfo += `- تفاصيل الطلب:\n${orderedText}\n`;
            orderInfo += `- عدد الطلب: ${order.mealAmountNumber}\n`;
            orderInfo += `- الملاحظات: ${order.noteText}\n`;
            orderInfo += `- سعر التوصيل: 20,000 Rp\n`;
            orderInfo += `- الإجمالي مع التوصيل: ${totalWithDelivery.toLocaleString()} Rp\n`;
            orderInfo += `___________________________________\n\n`;

            // Push the order information to the array
            orderDetails.push(orderInfo);
        });

        // Get today's date
        let today = new Date();
        let formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;


        // Create the final message And join all order details
        let finalMessage = "طلبات جديدة من المطاعم:\n"; // Initial message
        finalMessage += `تاريخ إرسال الطلب: ${formattedDate}\n\n`; // Add today's date
        finalMessage += orderDetails.join('');


        // Append the grand total to the final message
        finalMessage += `- السعر الإجمالي للطلبات مع التوصيل: ${grandTotal.toLocaleString()} Rp\n\n`;
        finalMessage += `يجب إرسال موقعك لبدأ تنفيذ الطلب..\n\n`;
        finalMessage += `- جميع طرق الدفع متوفرة سواء اونلاين او كاش\n`;
        finalMessage += `يرجى استخدام المعلومات التالية في حال كان الدفع بالتحويل البنكي\n`;
        finalMessage += `Bank Central Asia (BCA)\nName: samir\nNo Rekening: 1971025609\n\n`;
        finalMessage += `Dana: 087720208728`;

        // Encode the message using encodeURIComponent
        let encodedMessage = encodeURIComponent(finalMessage);

        // Create the WhatsApp URL
        let whatsappURL = `https://wa.me/6282246117155?text=${encodedMessage}`;

        // Open WhatsApp in a new window
        window.open(whatsappURL, '_blank');
    }
}
/* Up Resturant Code Up */













/* Down Supermarket Code Down */
/* Function To Add Orders And Create supermarket_orders Key in the localStorage */
if (document.getElementById("koktel_supermarket_section")) {

    /* Show or Hide The 'upperBar' Element Based on The 'koktel_filter_product_type_div_id' element postion */
    window.addEventListener('scroll', function () {
        let supermarketTypeNav = document.getElementById('koktel_filter_product_type_div_id');
        let supermarketUpperBar = document.getElementById('koktel_product_type_nav_upper_bar');

        let menuNavOptionsRect = supermarketTypeNav.getBoundingClientRect();

        if (menuNavOptionsRect.top < 0) { // If menuNavOptions is above the viewport
            supermarketUpperBar.style.top = '0'; // Slide down upperBar
        } else {
            supermarketUpperBar.style.top = '-100%'; // Slide up upperBar
        }
    });

    /* Upper Bar Scroll To filter Retaurant Type Button */
    koktel_scrollToFilterProductType = function (MenuElementIdName) {

        let thisElement = document.getElementById(MenuElementIdName);

        thisElement.scrollIntoView({
            block: 'center',
            inline: 'center',
            behavior: 'smooth',
        });
    }

    /* Scroll To Clicked Product type */
    koktel_scrollToProductType = function (RestaurantElementIdName) {

        // Re-enable scrolling
        document.documentElement.style.overflow = 'auto';

        // Hide And Reset All Data Stored inside The 'FullScreenGuidanceOverlay' Element
        let FullScreenGuidanceOverlay = document.getElementById('koktel_full_screen_guidance_overlay');
        document.body.removeChild(FullScreenGuidanceOverlay);
        FullScreenGuidanceOverlay.innerHTML = '';

        let thisElement = document.getElementById(RestaurantElementIdName);

        thisElement.scrollIntoView({
            block: 'center',
            inline: 'center',
            behavior: 'smooth',
        });
    }

    // Object To Store Click Counts For Each Card
    let clickCounts = {};

    // Object to store data for previously clicked h4 elements
    let clickedProducts = {};

    koktel_addProductButton = function (addedNumber, clickedElement) {
        // Get The Container For The Bottom Counter Total Price Display
        let supermarkerBottomCounterDiv = document.getElementById('koktel_product_bottom_counter_div');

        // Get the parent card element of the clicked h4 element
        let parentCard = clickedElement.closest('.koktel_product_card');

        // Extract product name
        let productName = parentCard.querySelector('.koktel_product_name h1').textContent.trim();

        // Extract img src
        let imgSrc = parentCard.querySelector('.koktel_product_card_img img').src;


        // Check if The Container Div Exists
        if (!supermarkerBottomCounterDiv) {
            // If The Container Doesn't Exist, Then Create New One
            supermarkerBottomCounterDiv = document.createElement('div');
            supermarkerBottomCounterDiv.id = 'koktel_product_bottom_counter_div';

            // Apply flexbox to center the h6 element
            supermarkerBottomCounterDiv.style.display = 'flex';
            supermarkerBottomCounterDiv.style.justifyContent = 'center';
            supermarkerBottomCounterDiv.style.alignItems = 'center';

            // Create The Text To Display The Total Price
            let supermarkerBottomCountertext = document.createElement('h6');
            supermarkerBottomCountertext.id = 'koktel_supermarket_total_price';
            supermarkerBottomCountertext.innerText = `إضافة الطلب = ${addedNumber.toLocaleString()} Rp (بدون سعر التوصيل)`;

            // Append The Text Created To The Container Div
            supermarkerBottomCounterDiv.appendChild(supermarkerBottomCountertext);

            // Append The Container Div To The Body of The Document
            document.body.appendChild(supermarkerBottomCounterDiv);

            // Attach a click event listener to the supermarkerBottomCounterDiv element
            supermarkerBottomCounterDiv.addEventListener('click', function () {

                // Check if 'supermarket_orders' key exists in localStorage
                if (localStorage.getItem('supermarket_orders')) {
                    // Get the existing data from localStorage
                    let existingOrders = JSON.parse(localStorage.getItem('supermarket_orders'));

                    // Add the clicked product data to the existing array
                    Object.values(clickedProducts).forEach(product => {
                        existingOrders.push({
                            productName: product.productName,
                            productAmount: product.currentCount,
                            totalPrice: product.totalValue,
                            productImgSrc: product.imgSrc
                        });
                    });

                    // Update localStorage with the updated array
                    localStorage.setItem('supermarket_orders', JSON.stringify(existingOrders));
                } else {
                    // If 'supermarket_orders' key doesn't exist, create a new one with the clicked product data
                    let newOrders = [];
                    Object.values(clickedProducts).forEach(product => {
                        newOrders.push({
                            productName: product.productName,
                            productAmount: product.currentCount,
                            totalPrice: product.totalValue,
                            productImgSrc: product.imgSrc
                        });
                    });

                    // Store the new array in localStorage
                    localStorage.setItem('supermarket_orders', JSON.stringify(newOrders));
                }


                // Create a box with the text "تم حذف جميع الطلبات"
                let successBox = document.createElement('div');
                successBox.textContent = 'تمت إضافة الطلب';
                successBox.classList.add('koktel_success_box');
                document.body.appendChild(successBox);

                // Trigger the slide and fade-in animation by setting the final transform value and opacity to 1
                setTimeout(() => {
                    successBox.style.transform = 'translate(-50%, -50%)'; // Slide animation
                    successBox.style.opacity = '1'; // Fade-in animation
                }, 10);

                // Remove the success box after 3 seconds
                setTimeout(() => {
                    // Trigger the fade-out animation by setting opacity to 0
                    successBox.style.opacity = '0';

                    // Remove the element from the DOM after the fade-out animation completes
                    setTimeout(() => {
                        successBox.remove();
                    }, 9000); // Wait for the fade-out transition to complete (1.5s)

                    // Refresh The Page After Adding The Selected Orders
                    setTimeout(() => {
                        location.reload();
                    }, 1200);
                }, 800); // Wait for 3 seconds before triggering fade-out


                if (!document.getElementById('koktel_order_page_icon')) {
                    // Create Button To Show Orders Page
                    let koktel_mealOrderIconDiv = document.createElement('div');
                    koktel_mealOrderIconDiv.id = 'koktel_order_page_icon_div';
                    let koktel_mealOrderIcon = `<a href='https://bandar-zuhair.github.io/Koktel/طلباتك-من-السوبرماركت.html' id="koktel_order_page_icon"><ion-icon name="cart-outline"></ion-icon></a>`;
                    koktel_mealOrderIconDiv.innerHTML = koktel_mealOrderIcon;
                    koktel_mealOrderIconDiv.style.opacity = '0';
                    document.body.appendChild(koktel_mealOrderIconDiv);
                    setTimeout(() => {
                        koktel_mealOrderIconDiv.style.opacity = '1';
                    }, 1);
                }
            });
        } else {
            // If The Container Already Exists, Update The Total Price

            // Get The Current Total Price From The Displayed Text
            let totalPriceElement = document.getElementById('koktel_supermarket_total_price');
            let currentTotal = parseFloat(totalPriceElement.innerText.split('=')[1].trim().replace(/[^\d.]/g, ''));

            // Calculate The New Total Price By Adding The Added Number To The Current Total
            let newTotal = currentTotal + parseFloat(addedNumber.replace(/[^\d.]/g, ''));

            // Update The Text Content of The Total Price Display To Display The New Total
            totalPriceElement.innerText = `إضافة الطلب = ${newTotal.toLocaleString()} Rp (بدون سعر التوصيل)`;

            // Ensure supermarkerBottomCounterDiv is visible
            supermarkerBottomCounterDiv.style.display = 'flex';
        }

        // Toggle Display of Hidden Elements Within The Same Parent Div 'koktel_product_card'
        let parentDiv = clickedElement.parentElement;
        let hiddenElements = parentDiv.querySelectorAll('h5, ion-icon');

        // Check if Hidden Elements Are Already Displayed
        let isHidden = false;
        hiddenElements.forEach(element => {
            if (element.style.display === 'none') {
                element.style.display = 'block';
                isHidden = true;
            }
        });

        // Update or Display Counter
        let cardId = parentDiv.parentElement.dataset.cardId; // Get the parent card's ID
        if (!clickCounts[cardId]) {
            clickCounts[cardId] = isHidden ? 1 : 2; // Set initial click count based on visibility
        } else {
            let counterElement = parentDiv.querySelector('h5');
            let currentCount = parseInt(counterElement.innerText.trim()) || 0; // Parse current count or default to 0
            if (isHidden) {
                counterElement.innerText = '1'; // Set the counter to 1 if it was hidden before
            } else {
                counterElement.innerText = (currentCount + 1).toString(); // Increment the count displayed in the h5 element
            }
        }

        // Store data for the clicked h4 element
        let currentCount = parseInt(parentDiv.querySelector('h5').innerText.trim()) || 0;
        let totalValue = parseFloat(addedNumber.replace(/[^\d.]/g, '')) * currentCount;
        clickedProducts[productName] = { productName, currentCount, totalValue, imgSrc };
    }


    // Function To Handle The Click Event On Ion-Icon (Minus) Element
    koktel_minusProductButton = function (subtractedNumber, clickedElement) {
        // Get The Current Total Price From The Displayed Text
        let totalPriceElement = document.getElementById('koktel_supermarket_total_price');
        let currentTotal = parseFloat(totalPriceElement.innerText.split('=')[1].trim().replace(/[^\d.]/g, ''));

        // Calculate The New Total Price By Subtracting The Subtracted Number From The Current Total
        let newTotal = currentTotal - parseFloat(subtractedNumber.replace(/[^\d.]/g, ''));

        // Update The Text Content of The Total Price Display To Display The New Total
        totalPriceElement.innerText = `إضافة الطلب = ${newTotal.toLocaleString()} Rp (بدون سعر التوصيل)`;

        // Get The Parent Div of The Clicked ion-icon
        let parentDiv = clickedElement.parentElement;

        // Get The H5 Element Within The Same Div
        let counterElement = parentDiv.querySelector('h5');

        // Get The Current Count From The H5 Element
        let currentCount = parseInt(counterElement.innerText.trim()) || 0;

        // Check if The Current Count is Greater Than 1
        if (currentCount > 1) {
            // If greater than 1, decrement the count by 1
            counterElement.innerText = (currentCount - 1).toString();
        } else {
            // If Count is 1 or Less, Hide Both Ion-Icon And H5 Elements
            clickedElement.style.display = 'none';
            counterElement.style.display = 'none';

            // Get the supermarkerBottomCounterDiv element
            let supermarkerBottomCounterDiv = document.getElementById('koktel_product_bottom_counter_div');

            // Check if NewTotal is 0 And Hide The 'upermarkerBottomCounterDiv' Element
            if (newTotal === 0) {
                supermarkerBottomCounterDiv.style.display = 'none';
            }
        }
    }
}

/* Function To Create Supermarket Orders Details Page Content And Final WhatsApp Message */
if (document.getElementById("koktel_supermarket_order_details_body_id")) {
    /* Create Content For The Basic Orders Page */
    let all_order_page_content = `
        <div class="koktel_order_details_div" id="koktel_order_details_div_id" style="display: flex;">
            <h1 class="koktel_order_details_title">طلباتك من السوبرماركت جاهزة للإرسال</h1>


            <div class='koktel_order_finished_card_area' id='koktel_order_finished_card_area_id'></div>

            <div>
                <h4 id='koktel_delete_all_restaurant_orders_button' onclick='koktel_ensure_delete_orders_box(this)' style="display: none;">حذف جميع الطلبات</h4>
            </div>

            <div>
                <h4 class="koktel_orders_static_price_h4" id="koktel_orders_static_price_h4_id" style="display: none;">التوصيل = 20,000 Rp</h4>
            </div>

            <div class="koktel_meal_info_note" id="koktel_meal_info_note_id" style="margin-top: 5px; display: none;">
                <textarea placeholder="ملاحظاتك للسوبرماركت هنا" class="koktel_meal_info_note_textarea" maxlength="100"></textarea>
            </div>

            <div class="koktel_koktel_order_details_bottom_button_div" id='koktel_total_order_price_text'></div>

            <div id="koktel_order_check_out_div" style="display: none;"></div>

            <a href="https://bandar-zuhair.github.io/Koktel/سوبرماركت-اندونيسيا.html" class="koktel_go_back_products_page_button"> <ion-icon name="arrow-forward-circle-outline"></ion-icon> .. قسم السوبرماركت</a>
        </div>`;


    /* Set The Inner HTML Code of The 'all_order_page_content' Inside The 'koktel_restaurant_order_details_body_id' Element */
    document.getElementById('koktel_supermarket_order_details_body_id').innerHTML = all_order_page_content;




    /* in Case if There Was Any Data in The supermarket_orders Key in The LocalStorage Then Do The Following Codes */
    if (localStorage.getItem('supermarket_orders')) {

        // Parse restaurant_orders from localStorage
        let orders = JSON.parse(localStorage.getItem('supermarket_orders'));


        // Loop through each order data
        orders.forEach((orderData, index) => {

            // Increment index by 1
            index += 1;

            // Create the element for each order
            let localStorageOrderCardFinished = document.createElement('div');
            localStorageOrderCardFinished.classList.add('koktel_order_finished_card');


            // letruct the inner HTML content for the order
            let localStorageOrderCardContent = `
                    <h2 style="margin-bottom: 5px; cursor: text;">منتج رقم ${index + 1}</h2>
                    <h2 style="color: aqua; cursor: text;">${orderData.productName}</h2>
                    <img src="${orderData.productImgSrc}" alt="سوبرماركت اندونيسيا - كوكتيل" title="سوبرماركت اندونيسيا - كوكتيل" onclick="koktel_show_full_screen_image(this.src)" loading="lazy">
                    
                    <div class='koktel_orderFinished_info_and_delete'>
                        <h3 style="cursor: text;">العدد = ${orderData.productAmount}</h3>
                        <h3 id="koktel_order_total_price_h3">الإجمالي = ${orderData.totalPrice.toLocaleString()} Rp</h3>
                        <h3 style="color: red;" onclick="koktel_ensure_delete_orders_box(this, ${index})">حذف الطلب</h3>
                    </div>

                    
                    <div id='koktel_ensure_delete_all_orders_overlay' class='koktel_ensure_delete_orders_overlay' style='display:none'>
                        <div id='koktel_ensure_delete_all_orders_div'>
                            <h6>متاكد من حذف جميع الطلبات؟</h6>
                            <div id='koktel_ensure_delete_all_orders_answer_div'>
                                <h6 onclick='koktel_delete_all_orders_function(this)'>نعم</h6>
                                <h6 onclick='koktel_delete_all_orders_function(this)'>عودة</h6>
                            </div>
                        </div>
                    </div>

                    <div id='koktel_ensure_delete_this_orders_overlay_${index}' class='koktel_ensure_delete_orders_overlay' style='display:none'>
                        <div id='koktel_ensure_delete_all_orders_div'>
                            <h6>متاكد من حذف هذا الطلب؟</h6>
                            <div id='koktel_ensure_delete_all_orders_answer_div'>
                                <h6 onclick='koktel_delete_this_orders_function(this, ${index})'>عودة</h6>
                                <h6 onclick='koktel_delete_this_orders_function(this, ${index})'>نعم</h6>
                            </div>
                        </div>
                    </div>
                
                `;

            // Assign the HTML content to the created element
            localStorageOrderCardFinished.innerHTML = localStorageOrderCardContent;

            // Append the order element to the parent container
            koktel_order_finished_card_area_id.appendChild(localStorageOrderCardFinished);


        });

        // Calculate total price
        let totalPriceSum = orders.reduce((total, order) => total + order.totalPrice, 0) + 20000;

        let koktel_order_check_out_whatsApp_content = `
            <div id="koktel_order_check_out_whatsApp_div" onclick="koktel_createFinalWhatsAppMessage()">
                <ion-icon name="logo-whatsapp"></ion-icon>
                <h5>إرسال الطلبات</h5>
            </div>
            <div id="koktel_order_check_out_bill_div">
                <h6 id="koktel_order_check_out_bill_title" style="color: rgb(0, 255, 0)">الفاتورة</h6>
                ${orders.map((order, orderIndex) => `<h6>المنتج رقم ${orderIndex + 1}: ${order.totalPrice.toLocaleString()} Rp</h6>`).join('')}
                <h6 id="koktel_order_check_out_bill_total_price" style="color: rgb(0, 255, 0)">الإجمالي مع التوصيل : ${totalPriceSum.toLocaleString()} Rp</h6>
            </div>
        `;


        /* Show The Following Code if There is Any Data in The restaurant_orders Key */
        document.getElementById('koktel_order_check_out_div').innerHTML = koktel_order_check_out_whatsApp_content;
        document.getElementById('koktel_order_check_out_div').style.display = 'flex';
        document.getElementById('koktel_orders_static_price_h4_id').style.display = 'block';
        document.getElementById('koktel_delete_all_restaurant_orders_button').style.display = 'block';
        document.getElementById('koktel_meal_info_note_id').style.display = 'block';
        document.getElementById('koktel_order_check_out_div').style.display = 'flex';

    } else {
        // Create the element for each order
        let localStorageOrderCardFinished = document.createElement('div');
        localStorageOrderCardFinished.classList.add('koktel_order_finished_card');
        let localStorageOrderCardContent = `
            <h1 id='koktel_there_is_no_orders_text'>لاتوجد اي طلبات بعد..<ion-icon name="telescope-outline"></ion-icon></h1>`;
        koktel_order_finished_card_area_id.innerHTML = localStorageOrderCardContent;

        // Hide These Elements if There is No Any Restaurant Orders
        koktel_delete_all_restaurant_orders_button.style.display = 'none';
        document.getElementById('koktel_order_check_out_div').innerHTML = '';
    }



    /* Function To Show The Ensure Delete Box */
    koktel_ensure_delete_orders_box = function (clickedDeleteButton, index) {
        if (clickedDeleteButton.innerText === 'حذف الطلب') {
            // Construct the ID of the corresponding overlay element
            let overlayId = `koktel_ensure_delete_this_orders_overlay_${index}`;

            // Show the overlay element
            document.getElementById(overlayId).style.display = 'block';
        } else {
            document.getElementById('koktel_ensure_delete_all_orders_overlay').style.display = 'block';
        }

        // Disable Scrolling
        document.documentElement.style.overflow = 'hidden';
    }




    /* Function To Delete All Orders Data */
    koktel_delete_all_orders_function = function (clickedDeleteAnswer) {

        /* First Check if The Clicked Button is 'عودة' or 'نعم' */
        if (clickedDeleteAnswer.innerText === 'عودة') {
            /* Hide The Ensure Box Element */
            document.getElementById('koktel_ensure_delete_all_orders_overlay').style.display = 'none';

        } else {

            /* Hide The Ensure Box Element */
            document.getElementById('koktel_ensure_delete_all_orders_overlay').style.display = 'none';

            // Clear All Data in LocalStorage
            localStorage.removeItem('supermarket_orders');

            /* Also Delete The Total price H4 Element */
            document.getElementById('koktel_total_order_price_text').innerHTML = '';

            // Create a box with the text "تم حذف جميع الطلبات"
            let successBox = document.createElement('div');
            successBox.textContent = 'تم حذف جميع طلبات السوبرماركت';
            successBox.classList.add('koktel_success_box');
            document.body.appendChild(successBox);

            // Trigger the slide and fade-in animation by setting the final transform value and opacity to 1
            setTimeout(() => {
                successBox.style.transform = 'translate(-50%, -50%)'; // Slide animation
                successBox.style.opacity = '1'; // Fade-in animation
            }, 10);

            // Remove the success box after 3 seconds
            setTimeout(() => {
                // Trigger the fade-out animation by setting opacity to 0
                successBox.style.opacity = '0';

                // Remove the element from the DOM after the fade-out animation completes
                setTimeout(() => {
                    successBox.remove();
                }, 9000); // Wait for the fade-out transition to complete (1.5s)
            }, 800); // Wait for 3 seconds before triggering fade-out


            // Call renderOrders function to initially render orders
            renderOrders();
        }

        // Re-enable scrolling
        document.documentElement.style.overflow = 'auto';
    }


    /* Function To Delete Only One Order Data */
    koktel_delete_this_orders_function = function (clickedDeleteAnswer, indexNumber) {

        if (clickedDeleteAnswer.innerText === 'عودة') {
            /* Hide The Ensure Box Element */
            document.getElementById(`koktel_ensure_delete_this_orders_overlay_${indexNumber}`).style.display = 'none';

        } else {
            /* Hide The Ensure Box Element */
            document.getElementById(`koktel_ensure_delete_this_orders_overlay_${indexNumber}`).style.display = 'none';

            /* Store The restaurant_orders Key Data in A Variable */
            let orders = JSON.parse(localStorage.getItem('supermarket_orders'));

            // Remove the order Key with the specified index
            orders.splice(indexNumber, 1);

            // Save the updated restaurant_orders back to localStorage
            localStorage.setItem('supermarket_orders', JSON.stringify(orders));

            // Check if Orders Key is Empty Then Delete All The Orders Key Compeletly
            if (!orders || orders.length === 0) {
                // Remove the orders key from localStorage
                localStorage.removeItem('supermarket_orders');


                // Create the element for each order
                let localStorageOrderCardFinished = document.createElement('div');
                localStorageOrderCardFinished.classList.add('koktel_order_finished_card');
                let localStorageOrderCardContent = `
                    <h1 id='koktel_there_is_no_orders_text'>لاتوجد اي طلبات بعد..<ion-icon name="telescope-outline"></ion-icon></h1>`;
                koktel_order_finished_card_area_id.innerHTML = localStorageOrderCardContent;

                // Hide These Elements if There is No Any Restaurant Orders
                koktel_delete_all_restaurant_orders_button.style.display = 'none';
                document.getElementById('koktel_order_check_out_div').innerHTML = '';
            }





            // Refresh the page or update the display to reflect the changes
            renderOrders();

            // Create a box with the text "تم حذف جميع الطلبات"
            let successBox = document.createElement('div');
            successBox.textContent = 'تم حذف الطلب';
            successBox.classList.add('koktel_success_box');
            document.body.appendChild(successBox);

            // Trigger the slide and fade-in animation by setting the final transform value and opacity to 1
            setTimeout(() => {
                successBox.style.transform = 'translate(-50%, -50%)'; // Slide animation
                successBox.style.opacity = '1'; // Fade-in animation
            }, 10);

            // Remove the success box after 3 seconds
            setTimeout(() => {
                // Trigger the fade-out animation by setting opacity to 0
                successBox.style.opacity = '0';

                // Remove the element from the DOM after the fade-out animation completes
                setTimeout(() => {
                    successBox.remove();
                }, 9000); // Wait for the fade-out transition to complete (1.5s)
            }, 800); // Wait for 3 seconds before triggering fade-out


        }

        // Re-enable scrolling
        document.documentElement.style.overflow = 'auto';
    }



    // Function to render the orders
    function renderOrders() {
        // Get the container for displaying orders
        koktel_order_finished_card_area_id.innerHTML = ''; // Clear the existing content

        // Get The orders from localStorage
        let orders = JSON.parse(localStorage.getItem('supermarket_orders'));

        // Check if orders is empty or null
        if (!orders || orders.length === 0) {
            // Remove the orders key from localStorage
            localStorage.removeItem('supermarket_orders');


            // Create the element for each order
            let localStorageOrderCardFinished = document.createElement('div');
            localStorageOrderCardFinished.classList.add('koktel_order_finished_card');
            let localStorageOrderCardContent = `
                <h1 id='koktel_there_is_no_orders_text'>لاتوجد اي طلبات بعد..<ion-icon name="telescope-outline"></ion-icon></h1>`;
            koktel_order_finished_card_area_id.innerHTML = localStorageOrderCardContent;

            // Hide These Elements if There is No Any Restaurant Orders
            koktel_delete_all_restaurant_orders_button.style.display = 'none';
            document.getElementById('koktel_order_check_out_div').innerHTML = '';


        }

        /* in Case if There is Data in The Orders Key */
        if (localStorage.getItem('supermarket_orders')) {
            // Parse orders from localStorage
            let orders = JSON.parse(localStorage.getItem('supermarket_orders'));

            // Loop through each order data
            orders.forEach((orderData, index) => {
                // Create the element for each order
                let localStorageOrderCardFinished = document.createElement('div');
                localStorageOrderCardFinished.classList.add('koktel_order_finished_card');

                // Construct the inner HTML content for the order
                let localStorageOrderCardContent = `
                <h2 style=cursor: text;">منتج رقم ${index + 1}</h2>
                <h2 style="color: aqua; cursor: text;">${orderData.productName}</h2>
                <img src="${orderData.productImgSrc}" alt="سوبرماركت اندونيسيا - كوكتيل" title="سوبرماركت اندونيسيا - كوكتيل" onclick="koktel_show_full_screen_image(this.src)" loading="lazy">

                <div class='koktel_orderFinished_info_and_delete'>
                    <h3 style="cursor: text;">العدد = ${orderData.productAmount}</h3>
                    <h3 id="koktel_order_total_price_h3">الإجمالي = ${orderData.totalPrice.toLocaleString()} Rp</h3>
                    <h3 style="color: red;" onclick="koktel_ensure_delete_orders_box(this, ${index})">حذف الطلب</h3>
                </div>

                <div id='koktel_ensure_delete_all_orders_overlay' class='koktel_ensure_delete_orders_overlay' style='display:none'>
                    <div id='koktel_ensure_delete_all_orders_div'>
                        <h6>متاكد من حذف جميع الطلبات؟</h6>
                        <div id='koktel_ensure_delete_all_orders_answer_div'>
                            <h6 onclick='koktel_delete_all_orders_function(this)'>عودة</h6>
                            <h6 onclick='koktel_delete_all_orders_function(this)'>نعم</h6>
                        </div>
                    </div>
                </div>

                <div id='koktel_ensure_delete_this_orders_overlay_${index}' class='koktel_ensure_delete_orders_overlay' style='display:none'>
                    <div id='koktel_ensure_delete_all_orders_div'>
                        <h6>متاكد من حذف هذا الطلب؟</h6>
                        <div id='koktel_ensure_delete_all_orders_answer_div'>
                            <h6 onclick='koktel_delete_this_orders_function(this, ${index})'>عودة</h6>
                            <h6 onclick='koktel_delete_this_orders_function(this, ${index})'>نعم</h6>
                        </div>
                    </div>
                </div>
            `;

                // Assign the HTML content to the created element
                localStorageOrderCardFinished.innerHTML = localStorageOrderCardContent;

                // Append the order element to the parent container
                koktel_order_finished_card_area_id.appendChild(localStorageOrderCardFinished);
            });


            // Calculate total price Adding 20,000 To The Resuilt of All Products Price
            let totalPriceSum = orders.reduce((total, order) => total + order.totalPrice, 0) + 20000;

            let koktel_order_check_out_whatsApp_content = `
                <div id="koktel_order_check_out_whatsApp_div" onclick="koktel_createFinalWhatsAppMessage()">
                    <ion-icon name="logo-whatsapp"></ion-icon>
                    <h5>إرسال الطلبات</h5>
                </div>
                <div id="koktel_order_check_out_bill_div">
                    <h6 id="koktel_order_check_out_bill_title" style="color: rgb(0, 255, 0)">الفاتورة</h6>
                    ${orders.map((order, orderIndex) => `<h6>المنتج رقم ${orderIndex + 1} : ${order.totalPrice.toLocaleString()} Rp</h6>`).join('')}
                    <h6 id="koktel_order_check_out_bill_total_price" style="color: rgb(0, 255, 0)">الإجمالي مع التوصيل : ${totalPriceSum.toLocaleString()} Rp</h6>
                </div>
            `;

            /* Show The Following Code if There is Any Data in The restaurant_orders Key */
            document.getElementById('koktel_order_check_out_div').innerHTML = koktel_order_check_out_whatsApp_content;

            document.getElementById('koktel_order_check_out_div').style.display = 'flex';
        } else {

            /* Hide The TextArea Element If There is No Any supermarket_orders Data */
            document.getElementById('koktel_meal_info_note_id').style.display = 'none';
            document.getElementById('koktel_orders_static_price_h4_id').style.display = 'none';
        }
    }



    // Call renderOrders function to initially render orders
    renderOrders();



    koktel_createFinalWhatsAppMessage = function () {
        // Retrieve orders from localStorage
        let orders = JSON.parse(localStorage.getItem('supermarket_orders'));

        // Initialize variables for total price and order details
        let totalPrice = 0;
        let orderDetails = [];

        // Get the text inside the textarea
        let noteTextarea = document.querySelector('.koktel_meal_info_note_textarea');
        let noteText = noteTextarea ? noteTextarea.value.trim() : ''; // Check if textarea exists

        // Loop through each order and extract relevant information
        orders.forEach((order, index) => {
            // Add each order's total price to the total
            totalPrice += order.totalPrice;

            // Create the order information
            let orderInfo = `المنتج رقم ${index + 1}- ${order.productName}\n`;
            orderInfo += `- العدد: ${order.productAmount}\n`;
            orderInfo += `- الإجمالي: ${order.totalPrice.toLocaleString()} Rp\n`;
            orderInfo += `___________________________________\n\n`;

            // Push the order information to the array
            orderDetails.push(orderInfo);
        });

        // Get today's date
        let today = new Date();
        let formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

        // Calculate the total price with delivery
        let deliveryFee = 20000;
        let totalPriceWithDelivery = totalPrice + deliveryFee;

        // Create the final message And join all order details
        let finalMessage = "طلبات جديدة من السوبرماركت:\n"; // Initial message
        finalMessage += `تاريخ إرسال الطلب: ${formattedDate}\n\n`; // Add today's date
        finalMessage += orderDetails.join(''); // Join order details
        finalMessage += `الملاحظات: ${noteText}\n`;
        finalMessage += `___________________________________\n\n`;
        finalMessage += `- السعر الإجمالي لجميع الطلبات مع التوصيل: ${totalPriceWithDelivery.toLocaleString()} Rp\n\n`;
        finalMessage += `يجب إرسال موقعك لبدأ تنفيذ الطلب..\n\n`;
        finalMessage += `- جميع طرق الدفع متوفرة سواء اونلاين او كاش\n`;
        finalMessage += `- الدفع يكون مسبق او عند الإستلام\n`;
        finalMessage += `يرجى استخدام المعلومات التالية في حال كان الدفع بالتحويل البنكي\n`;
        finalMessage += `Bank Central Asia (BCA)\nName: samir\nNo Rekening: 1971025609\n\n`;
        finalMessage += `Dana: 087720208728`;

        // Encode the message using encodeURIComponent
        let encodedMessage = encodeURIComponent(finalMessage);

        // Create the WhatsApp URL
        let whatsappURL = `https://wa.me/6282246117155?text=${encodedMessage}`;

        // Open WhatsApp in a new window
        window.open(whatsappURL, '_blank');
    }
}
/* Up Supermarket Code Up */











/* Down Bread Down */
/* Function To Add Orders And Create bread_orders Key in the localStorage */
if (document.getElementById("koktel_bread_section")) {

    window.addEventListener('scroll', function () {
        let supermarketTypeNav = document.getElementById('koktel_filter_product_type_div_id');
        let supermarketUpperBar = document.getElementById('koktel_product_type_nav_upper_bar');

        let menuNavOptionsRect = supermarketTypeNav.getBoundingClientRect();

        if (menuNavOptionsRect.top < 0) { // If menuNavOptions is above the viewport
            supermarketUpperBar.style.top = '0'; // Slide down upperBar
        } else {
            supermarketUpperBar.style.top = '-100%'; // Slide up upperBar
        }
    });

    /* Upper Bar Scroll To filter Retaurant Type Button */
    koktel_scrollToFilterProductType = function (MenuElementIdName) {

        let thisElement = document.getElementById(MenuElementIdName);

        thisElement.scrollIntoView({
            block: 'center',
            inline: 'center',
            behavior: 'smooth',
        });
    }

    /* Scroll To Clicked Product type */
    koktel_scrollToProductType = function (RestaurantElementIdName) {

        // Re-enable scrolling
        document.documentElement.style.overflow = 'auto';

        // Hide And Reset All Data Stored inside The 'FullScreenGuidanceOverlay' Element
        let FullScreenGuidanceOverlay = document.getElementById('koktel_full_screen_guidance_overlay');
        document.body.removeChild(FullScreenGuidanceOverlay);
        FullScreenGuidanceOverlay.innerHTML = '';

        let thisElement = document.getElementById(RestaurantElementIdName);

        thisElement.scrollIntoView({
            block: 'center',
            inline: 'center',
            behavior: 'smooth',
        });
    }


    // Object To Store Click Counts For Each Card
    let clickCounts = {};

    // Object to store data for previously clicked h4 elements
    let clickedProducts = {};

    koktel_addProductButton = function (addedNumber, clickedElement) {
        // Get The Container For The Bottom Counter Total Price Display
        let supermarkerBottomCounterDiv = document.getElementById('koktel_product_bottom_counter_div');

        // Get the parent card element of the clicked h4 element
        let parentCard = clickedElement.closest('.koktel_product_card');

        // Extract product name
        let productName = parentCard.querySelector('.koktel_product_name h1').textContent.trim();

        // Extract img src
        let imgSrc = parentCard.querySelector('.koktel_product_card_img img').src;


        // Check if The Container Div Exists
        if (!supermarkerBottomCounterDiv) {
            // If The Container Doesn't Exist, Then Create New One
            supermarkerBottomCounterDiv = document.createElement('div');
            supermarkerBottomCounterDiv.id = 'koktel_product_bottom_counter_div';

            // Apply flexbox to center the h6 element
            supermarkerBottomCounterDiv.style.display = 'flex';
            supermarkerBottomCounterDiv.style.justifyContent = 'center';
            supermarkerBottomCounterDiv.style.alignItems = 'center';

            // Create The Text To Display The Total Price
            let supermarkerBottomCountertext = document.createElement('h6');
            supermarkerBottomCountertext.id = 'koktel_supermarket_total_price';
            supermarkerBottomCountertext.innerText = `إضافة الطلب = ${addedNumber.toLocaleString()} Rp (بدون سعر التوصيل)`;

            // Append The Text Created To The Container Div
            supermarkerBottomCounterDiv.appendChild(supermarkerBottomCountertext);

            // Append The Container Div To The Body of The Document
            document.body.appendChild(supermarkerBottomCounterDiv);

            // Attach a click event listener to the supermarkerBottomCounterDiv element
            supermarkerBottomCounterDiv.addEventListener('click', function () {

                // Check if 'bread_orders' key exists in localStorage
                if (localStorage.getItem('bread_orders')) {
                    // Get the existing data from localStorage
                    let existingOrders = JSON.parse(localStorage.getItem('bread_orders'));

                    // Add the clicked product data to the existing array
                    Object.values(clickedProducts).forEach(product => {
                        existingOrders.push({
                            productName: product.productName,
                            productAmount: product.currentCount,
                            totalPrice: product.totalValue,
                            productImgSrc: product.imgSrc
                        });
                    });

                    // Update localStorage with the updated array
                    localStorage.setItem('bread_orders', JSON.stringify(existingOrders));
                } else {
                    // If 'bread_orders' key doesn't exist, create a new one with the clicked product data
                    let newOrders = [];
                    Object.values(clickedProducts).forEach(product => {
                        newOrders.push({
                            productName: product.productName,
                            productAmount: product.currentCount,
                            totalPrice: product.totalValue,
                            productImgSrc: product.imgSrc
                        });
                    });

                    // Store the new array in localStorage
                    localStorage.setItem('bread_orders', JSON.stringify(newOrders));
                }


                // Create a box with the text "تم حذف جميع الطلبات"
                let successBox = document.createElement('div');
                successBox.textContent = 'تمت إضافة الطلب';
                successBox.classList.add('koktel_success_box');
                document.body.appendChild(successBox);

                // Trigger the slide and fade-in animation by setting the final transform value and opacity to 1
                setTimeout(() => {
                    successBox.style.transform = 'translate(-50%, -50%)'; // Slide animation
                    successBox.style.opacity = '1'; // Fade-in animation
                }, 10);

                // Remove the success box after 3 seconds
                setTimeout(() => {
                    // Trigger the fade-out animation by setting opacity to 0
                    successBox.style.opacity = '0';

                    // Remove the element from the DOM after the fade-out animation completes
                    setTimeout(() => {
                        successBox.remove();
                    }, 9000); // Wait for the fade-out transition to complete (1.5s)

                    // Refresh The Page After Adding The Selected Orders
                    setTimeout(() => {
                        location.reload();
                    }, 1200);
                }, 800); // Wait for 3 seconds before triggering fade-out


                if (!document.getElementById('koktel_order_page_icon')) {
                    // Create Button To Show Orders Page
                    let koktel_mealOrderIconDiv = document.createElement('div');
                    koktel_mealOrderIconDiv.id = 'koktel_order_page_icon_div';
                    let koktel_mealOrderIcon = `<a href='https://bandar-zuhair.github.io/Koktel/طلباتك-من-المخبوزات.html' id="koktel_order_page_icon"><ion-icon name="cart-outline"></ion-icon></a>`;
                    koktel_mealOrderIconDiv.innerHTML = koktel_mealOrderIcon;
                    koktel_mealOrderIconDiv.style.opacity = '0';
                    document.body.appendChild(koktel_mealOrderIconDiv);
                    setTimeout(() => {
                        koktel_mealOrderIconDiv.style.opacity = '1';
                    }, 1);
                }
            });
        } else {
            // If The Container Already Exists, Update The Total Price

            // Get The Current Total Price From The Displayed Text
            let totalPriceElement = document.getElementById('koktel_supermarket_total_price');
            let currentTotal = parseFloat(totalPriceElement.innerText.split('=')[1].trim().replace(/[^\d.]/g, ''));

            // Calculate The New Total Price By Adding The Added Number To The Current Total
            let newTotal = currentTotal + parseFloat(addedNumber.replace(/[^\d.]/g, ''));

            // Update The Text Content of The Total Price Display To Display The New Total
            totalPriceElement.innerText = `إضافة الطلب = ${newTotal.toLocaleString()} Rp (بدون سعر التوصيل)`;

            // Ensure supermarkerBottomCounterDiv is visible
            supermarkerBottomCounterDiv.style.display = 'flex';
        }

        // Toggle Display of Hidden Elements Within The Same Parent Div 'koktel_product_card'
        let parentDiv = clickedElement.parentElement;
        let hiddenElements = parentDiv.querySelectorAll('h5, ion-icon');

        // Check if Hidden Elements Are Already Displayed
        let isHidden = false;
        hiddenElements.forEach(element => {
            if (element.style.display === 'none') {
                element.style.display = 'block';
                isHidden = true;
            }
        });

        // Update or Display Counter
        let cardId = parentDiv.parentElement.dataset.cardId; // Get the parent card's ID
        if (!clickCounts[cardId]) {
            clickCounts[cardId] = isHidden ? 1 : 2; // Set initial click count based on visibility
        } else {
            let counterElement = parentDiv.querySelector('h5');
            let currentCount = parseInt(counterElement.innerText.trim()) || 0; // Parse current count or default to 0
            if (isHidden) {
                counterElement.innerText = '1'; // Set the counter to 1 if it was hidden before
            } else {
                counterElement.innerText = (currentCount + 1).toString(); // Increment the count displayed in the h5 element
            }
        }

        // Store data for the clicked h4 element
        let currentCount = parseInt(parentDiv.querySelector('h5').innerText.trim()) || 0;
        let totalValue = parseFloat(addedNumber.replace(/[^\d.]/g, '')) * currentCount;
        clickedProducts[productName] = { productName, currentCount, totalValue, imgSrc };
    }


    // Function To Handle The Click Event On Ion-Icon (Minus) Element
    koktel_minusProductButton = function (subtractedNumber, clickedElement) {
        // Get The Current Total Price From The Displayed Text
        let totalPriceElement = document.getElementById('koktel_supermarket_total_price');
        let currentTotal = parseFloat(totalPriceElement.innerText.split('=')[1].trim().replace(/[^\d.]/g, ''));

        // Calculate The New Total Price By Subtracting The Subtracted Number From The Current Total
        let newTotal = currentTotal - parseFloat(subtractedNumber.replace(/[^\d.]/g, ''));

        // Update The Text Content of The Total Price Display To Display The New Total
        totalPriceElement.innerText = `إضافة الطلب = ${newTotal.toLocaleString()} Rp (بدون سعر التوصيل)`;

        // Get The Parent Div of The Clicked ion-icon
        let parentDiv = clickedElement.parentElement;

        // Get The H5 Element Within The Same Div
        let counterElement = parentDiv.querySelector('h5');

        // Get The Current Count From The H5 Element
        let currentCount = parseInt(counterElement.innerText.trim()) || 0;

        // Check if The Current Count is Greater Than 1
        if (currentCount > 1) {
            // If greater than 1, decrement the count by 1
            counterElement.innerText = (currentCount - 1).toString();
        } else {
            // If Count is 1 or Less, Hide Both Ion-Icon And H5 Elements
            clickedElement.style.display = 'none';
            counterElement.style.display = 'none';

            // Get the supermarkerBottomCounterDiv element
            let supermarkerBottomCounterDiv = document.getElementById('koktel_product_bottom_counter_div');

            // Check if NewTotal is 0 And Hide The 'upermarkerBottomCounterDiv' Element
            if (newTotal === 0) {
                supermarkerBottomCounterDiv.style.display = 'none';
            }
        }
    }
}

/* Function To Create Pharmacy Orders Details Page Content And Final WhatsApp Message */
if (document.getElementById("koktel_bread_order_details_body_id")) {
    /* Create Content For The Basic Orders Page */
    let all_order_page_content = `
        <div class="koktel_order_details_div" id="koktel_order_details_div_id" style="display: flex;">
            <h1 class="koktel_order_details_title">طلباتك من المخبوزات جاهزة للإرسال</h1>


            <div class='koktel_order_finished_card_area' id='koktel_order_finished_card_area_id'></div>

            <div>
                <h4 id='koktel_delete_all_restaurant_orders_button' onclick='koktel_ensure_delete_orders_box(this)' style="display: none;">حذف جميع الطلبات</h4>
            </div>

            <div>
                <h4 class="koktel_orders_static_price_h4" id="koktel_orders_static_price_h4_id" style="display: none;">التوصيل = 20,000 Rp</h4>
            </div>


            <div class="koktel_meal_info_note" id="koktel_meal_info_note_id" style="margin-top: 5px; display: none;">
                <textarea placeholder="ملاحظاتك للمخبوزات هنا" class="koktel_meal_info_note_textarea" maxlength="100"></textarea>
            </div>

            <div class="koktel_koktel_order_details_bottom_button_div" id='koktel_total_order_price_text'></div>

            <div id="koktel_order_check_out_div" style="display: none;"></div>

            <a href="https://bandar-zuhair.github.io/Koktel/مخبوزات-اندونيسيا.html" class="koktel_go_back_products_page_button"> <ion-icon name="arrow-forward-circle-outline"></ion-icon> .. قسم المعسلات</a>
        </div>`;


    /* Set The Inner HTML Code of The 'all_order_page_content' Inside The 'koktel_restaurant_order_details_body_id' Element */
    document.getElementById('koktel_bread_order_details_body_id').innerHTML = all_order_page_content;




    /* in Case if There Was Any Data in The 'bread_orders' Key in The LocalStorage Then Do The Following Codes */
    if (localStorage.getItem('bread_orders')) {

        // Parse restaurant_orders from localStorage
        let orders = JSON.parse(localStorage.getItem('bread_orders'));


        // Loop through each order data
        orders.forEach((orderData, index) => {
            // Create the element for each order
            let localStorageOrderCardFinished = document.createElement('div');
            localStorageOrderCardFinished.classList.add('koktel_order_finished_card');


            // letruct the inner HTML content for the order
            let localStorageOrderCardContent = `
                    <h2 style="cursor: text;">منتج رقم ${index + 1}</h2>
                    <h2 style="color: aqua; cursor: text;">${orderData.productName}</h2>
                    <img src="${orderData.productImgSrc}" alt="مخبوزات اندونيسيا - كوكتيل" title="مخبوزات اندونيسيا - كوكتيل" onclick="koktel_show_full_screen_image(this.src)" loading="lazy">
                        
                    <div class='koktel_orderFinished_info_and_delete'>
                        <h3 style="cursor: text;">العدد = ${orderData.productAmount}</h3>
                        <h3 id="koktel_order_total_price_h3">الإجمالي = ${orderData.totalPrice.toLocaleString()} Rp</h3>
                        <h3 style="color: red;" onclick="koktel_ensure_delete_orders_box(this, ${index})">حذف الطلب</h3>
                    </div>
                    
                    <div id='koktel_ensure_delete_all_orders_overlay' class='koktel_ensure_delete_orders_overlay' style='display:none'>
                        <div id='koktel_ensure_delete_all_orders_div'>
                            <h6>متاكد من حذف جميع الطلبات؟</h6>
                            <div id='koktel_ensure_delete_all_orders_answer_div'>
                                <h6 onclick='koktel_delete_all_orders_function(this)'>نعم</h6>
                                <h6 onclick='koktel_delete_all_orders_function(this)'>عودة</h6>
                            </div>
                        </div>
                    </div>

                    <div id='koktel_ensure_delete_this_orders_overlay_${index}' class='koktel_ensure_delete_orders_overlay' style='display:none'>
                        <div id='koktel_ensure_delete_all_orders_div'>
                            <h6>متاكد من حذف هذا الطلب؟</h6>
                            <div id='koktel_ensure_delete_all_orders_answer_div'>
                                <h6 onclick='koktel_delete_this_orders_function(this, ${index})'>عودة</h6>
                                <h6 onclick='koktel_delete_this_orders_function(this, ${index})'>نعم</h6>
                            </div>
                        </div>
                    </div>
                
                `;

            // Assign the HTML content to the created element
            localStorageOrderCardFinished.innerHTML = localStorageOrderCardContent;

            // Append the order element to the parent container
            koktel_order_finished_card_area_id.appendChild(localStorageOrderCardFinished);


        });

        // Calculate total price
        let totalPriceSum = orders.reduce((total, order) => total + order.totalPrice, 0) + 20000;

        let koktel_order_check_out_whatsApp_content = `
            <div id="koktel_order_check_out_whatsApp_div" onclick="koktel_createFinalWhatsAppMessage()">
                <ion-icon name="logo-whatsapp"></ion-icon>
                <h5>إرسال الطلبات</h5>
            </div>
            <div id="koktel_order_check_out_bill_div">
                <h6 id="koktel_order_check_out_bill_title" style="color: rgb(0, 255, 0)">الفاتورة</h6>
                ${orders.map((order, orderIndex) => `<h6>المنتج رقم ${orderIndex + 1} : ${order.totalPrice.toLocaleString()} Rp</h6>`).join('')}
                <h6 id="koktel_order_check_out_bill_total_price" style="color: rgb(0, 255, 0)">الإجمالي مع التوصيل : ${totalPriceSum.toLocaleString()} Rp</h6>
            </div>
        `;

        /* Show The Following Code if There is Any Data in The restaurant_orders Key */
        document.getElementById('koktel_order_check_out_div').innerHTML = koktel_order_check_out_whatsApp_content;
        document.getElementById('koktel_order_check_out_div').style.display = 'flex';
        document.getElementById('koktel_delete_all_restaurant_orders_button').style.display = 'block';
        document.getElementById('koktel_orders_static_price_h4_id').style.display = 'block';
        document.getElementById('koktel_meal_info_note_id').style.display = 'block';
        document.getElementById('koktel_order_check_out_div').style.display = 'flex';

    } else {
        // Create the element for each order
        let localStorageOrderCardFinished = document.createElement('div');
        localStorageOrderCardFinished.classList.add('koktel_order_finished_card');
        let localStorageOrderCardContent = `
            <h1 id='koktel_there_is_no_orders_text'>لاتوجد اي طلبات بعد..<ion-icon name="telescope-outline"></ion-icon></h1>`;
        koktel_order_finished_card_area_id.innerHTML = localStorageOrderCardContent;

        // Hide These Elements if There is No Any Restaurant Orders
        koktel_delete_all_restaurant_orders_button.style.display = 'none';
        document.getElementById('koktel_order_check_out_div').innerHTML = '';
    }



    /* Function To Show The Ensure Delete Box */
    koktel_ensure_delete_orders_box = function (clickedDeleteButton, index) {
        if (clickedDeleteButton.innerText === 'حذف الطلب') {
            // Construct the ID of the corresponding overlay element
            let overlayId = `koktel_ensure_delete_this_orders_overlay_${index}`;

            // Show the overlay element
            document.getElementById(overlayId).style.display = 'block';
        } else {
            document.getElementById('koktel_ensure_delete_all_orders_overlay').style.display = 'block';
        }

        // Disable Scrolling
        document.documentElement.style.overflow = 'hidden';
    }




    /* Function To Delete All Orders Data */
    koktel_delete_all_orders_function = function (clickedDeleteAnswer) {

        /* First Check if The Clicked Button is 'عودة' or 'نعم' */
        if (clickedDeleteAnswer.innerText === 'عودة') {
            /* Hide The Ensure Box Element */
            document.getElementById('koktel_ensure_delete_all_orders_overlay').style.display = 'none';

        } else {

            /* Hide The Ensure Box Element */
            document.getElementById('koktel_ensure_delete_all_orders_overlay').style.display = 'none';

            // Clear All Data in LocalStorage
            localStorage.removeItem('bread_orders');

            /* Also Delete The Total price H4 Element */
            document.getElementById('koktel_total_order_price_text').innerHTML = '';

            // Create a box with the text "تم حذف جميع الطلبات"
            let successBox = document.createElement('div');
            successBox.textContent = 'تم حذف جميع طلبات السوبرماركت';
            successBox.classList.add('koktel_success_box');
            document.body.appendChild(successBox);

            // Trigger the slide and fade-in animation by setting the final transform value and opacity to 1
            setTimeout(() => {
                successBox.style.transform = 'translate(-50%, -50%)'; // Slide animation
                successBox.style.opacity = '1'; // Fade-in animation
            }, 10);

            // Remove the success box after 3 seconds
            setTimeout(() => {
                // Trigger the fade-out animation by setting opacity to 0
                successBox.style.opacity = '0';

                // Remove the element from the DOM after the fade-out animation completes
                setTimeout(() => {
                    successBox.remove();
                }, 9000); // Wait for the fade-out transition to complete (1.5s)
            }, 800); // Wait for 3 seconds before triggering fade-out


            // Call renderOrders function to initially render orders
            renderOrders();
        }

        // Re-enable scrolling
        document.documentElement.style.overflow = 'auto';
    }


    /* Function To Delete Only One Order Data */
    koktel_delete_this_orders_function = function (clickedDeleteAnswer, indexNumber) {

        if (clickedDeleteAnswer.innerText === 'عودة') {
            /* Hide The Ensure Box Element */
            document.getElementById(`koktel_ensure_delete_this_orders_overlay_${indexNumber}`).style.display = 'none';

        } else {
            /* Hide The Ensure Box Element */
            document.getElementById(`koktel_ensure_delete_this_orders_overlay_${indexNumber}`).style.display = 'none';

            /* Store The restaurant_orders Key Data in A Variable */
            let orders = JSON.parse(localStorage.getItem('bread_orders'));

            // Remove the order Key with the specified index
            orders.splice(indexNumber, 1);

            // Save the updated restaurant_orders back to localStorage
            localStorage.setItem('bread_orders', JSON.stringify(orders));

            // Check if Orders Key is Empty Then Delete All The Orders Key Compeletly
            if (!orders || orders.length === 0) {
                // Remove the orders key from localStorage
                localStorage.removeItem('bread_orders');


                // Create the element for each order
                let localStorageOrderCardFinished = document.createElement('div');
                localStorageOrderCardFinished.classList.add('koktel_order_finished_card');
                let localStorageOrderCardContent = `
                    <h1 id='koktel_there_is_no_orders_text'>لاتوجد اي طلبات بعد..<ion-icon name="telescope-outline"></ion-icon></h1>`;
                koktel_order_finished_card_area_id.innerHTML = localStorageOrderCardContent;

                // Hide These Elements if There is No Any Restaurant Orders
                koktel_delete_all_restaurant_orders_button.style.display = 'none';
                document.getElementById('koktel_order_check_out_div').innerHTML = '';
            }





            // Refresh the page or update the display to reflect the changes
            renderOrders();

            // Create a box with the text "تم حذف جميع الطلبات"
            let successBox = document.createElement('div');
            successBox.textContent = 'تم حذف الطلب';
            successBox.classList.add('koktel_success_box');
            document.body.appendChild(successBox);

            // Trigger the slide and fade-in animation by setting the final transform value and opacity to 1
            setTimeout(() => {
                successBox.style.transform = 'translate(-50%, -50%)'; // Slide animation
                successBox.style.opacity = '1'; // Fade-in animation
            }, 10);

            // Remove the success box after 3 seconds
            setTimeout(() => {
                // Trigger the fade-out animation by setting opacity to 0
                successBox.style.opacity = '0';

                // Remove the element from the DOM after the fade-out animation completes
                setTimeout(() => {
                    successBox.remove();
                }, 9000); // Wait for the fade-out transition to complete (1.5s)
            }, 800); // Wait for 3 seconds before triggering fade-out

        }

        // Re-enable scrolling
        document.documentElement.style.overflow = 'auto';
    }



    // Function to render the orders
    function renderOrders() {
        // Get the container for displaying orders
        koktel_order_finished_card_area_id.innerHTML = ''; // Clear the existing content

        // Get The orders from localStorage
        let orders = JSON.parse(localStorage.getItem('bread_orders'));

        // Check if orders is empty or null
        if (!orders || orders.length === 0) {
            // Remove the orders key from localStorage
            localStorage.removeItem('bread_orders');


            // Create the element for each order
            let localStorageOrderCardFinished = document.createElement('div');
            localStorageOrderCardFinished.classList.add('koktel_order_finished_card');
            let localStorageOrderCardContent = `
                <h1 id='koktel_there_is_no_orders_text'>لاتوجد اي طلبات بعد..<ion-icon name="telescope-outline"></ion-icon></h1>`;
            koktel_order_finished_card_area_id.innerHTML = localStorageOrderCardContent;

            // Hide These Elements if There is No Any Restaurant Orders
            koktel_delete_all_restaurant_orders_button.style.display = 'none';
            document.getElementById('koktel_order_check_out_div').innerHTML = '';


        }

        /* in Case if There is Data in The Orders Key */
        if (localStorage.getItem('bread_orders')) {
            // Parse orders from localStorage
            let orders = JSON.parse(localStorage.getItem('bread_orders'));

            // Loop through each order data
            orders.forEach((orderData, index) => {
                // Create the element for each order
                let localStorageOrderCardFinished = document.createElement('div');
                localStorageOrderCardFinished.classList.add('koktel_order_finished_card');

                // Construct the inner HTML content for the order
                let localStorageOrderCardContent = `
                <h2 style="cursor: text;">منتج رقم ${index + 1}</h2>
                <h2 style="color: aqua; cursor: text;">${orderData.productName}</h2>
                <img src="${orderData.productImgSrc}" alt="مخبوزات اندونيسيا - كوكتيل" title="مخبوزات اندونيسيا - كوكتيل" onclick="koktel_show_full_screen_image(this.src)" loading="lazy">
                    
                <div class='koktel_orderFinished_info_and_delete'>
                    <h3 style="cursor: text;">العدد = ${orderData.productAmount}</h3>
                    <h3 id="koktel_order_total_price_h3">الإجمالي = ${orderData.totalPrice.toLocaleString()} Rp</h3>
                    <h3 style="color: red;" onclick="koktel_ensure_delete_orders_box(this, ${index})">حذف الطلب</h3>
                </div>
                
                <div id='koktel_ensure_delete_all_orders_overlay' class='koktel_ensure_delete_orders_overlay' style='display:none'>
                    <div id='koktel_ensure_delete_all_orders_div'>
                        <h6>متاكد من حذف جميع الطلبات؟</h6>
                        <div id='koktel_ensure_delete_all_orders_answer_div'>
                            <h6 onclick='koktel_delete_all_orders_function(this)'>عودة</h6>
                            <h6 onclick='koktel_delete_all_orders_function(this)'>نعم</h6>
                        </div>
                    </div>
                </div>

                <div id='koktel_ensure_delete_this_orders_overlay_${index}' class='koktel_ensure_delete_orders_overlay' style='display:none'>
                    <div id='koktel_ensure_delete_all_orders_div'>
                        <h6>متاكد من حذف هذا الطلب؟</h6>
                        <div id='koktel_ensure_delete_all_orders_answer_div'>
                            <h6 onclick='koktel_delete_this_orders_function(this, ${index})'>عودة</h6>
                            <h6 onclick='koktel_delete_this_orders_function(this, ${index})'>نعم</h6>
                        </div>
                    </div>
                </div>
            `;

                // Assign the HTML content to the created element
                localStorageOrderCardFinished.innerHTML = localStorageOrderCardContent;

                // Append the order element to the parent container
                koktel_order_finished_card_area_id.appendChild(localStorageOrderCardFinished);
            });


            // Calculate total price Adding 20,000 To The Resuilt of All Products Price
            let totalPriceSum = orders.reduce((total, order) => total + order.totalPrice, 0) + 20000;

            let koktel_order_check_out_whatsApp_content = `
                <div id="koktel_order_check_out_whatsApp_div" onclick="koktel_createFinalWhatsAppMessage()">
                    <ion-icon name="logo-whatsapp"></ion-icon>
                    <h5>إرسال الطلبات</h5>
                </div>
                <div id="koktel_order_check_out_bill_div">
                    <h6 id="koktel_order_check_out_bill_title" style="color: rgb(0, 255, 0)">الفاتورة</h6>
                    ${orders.map((order, orderIndex) => `<h6>المنتج رقم ${orderIndex + 1} : ${order.totalPrice.toLocaleString()} Rp</h6>`).join('')}
                    <h6 id="koktel_order_check_out_bill_total_price" style="color: rgb(0, 255, 0)">الإجمالي مع التوصيل : ${totalPriceSum.toLocaleString()} Rp</h6>
                </div>
            `;

            /* Show The Following Code if There is Any Data in The restaurant_orders Key */
            document.getElementById('koktel_order_check_out_div').innerHTML = koktel_order_check_out_whatsApp_content;
            document.getElementById('koktel_order_check_out_div').style.display = 'flex';
        } else {

            /* Hide The TextArea Element If There is No Any 'bread_orders' Data */
            document.getElementById('koktel_meal_info_note_id').style.display = 'none';
            document.getElementById('koktel_orders_static_price_h4_id').style.display = 'none';
        }
    }



    // Call renderOrders function to initially render orders
    renderOrders();



    koktel_createFinalWhatsAppMessage = function () {
        // Retrieve orders from localStorage
        let orders = JSON.parse(localStorage.getItem('bread_orders'));

        // Initialize variables for total price and order details
        let totalPrice = 0;
        let orderDetails = [];

        // Get the text inside the textarea
        let noteTextarea = document.querySelector('.koktel_meal_info_note_textarea');
        let noteText = noteTextarea ? noteTextarea.value.trim() : ''; // Check if textarea exists

        // Loop through each order and extract relevant information
        orders.forEach((order, index) => {
            // Add each order's total price to the total
            totalPrice += order.totalPrice;

            // Create the order information
            let orderInfo = `المنتج رقم ${index + 1}- ${order.productName}\n`;
            orderInfo += `- العدد: ${order.productAmount}\n`;
            orderInfo += `- الإجمالي: ${order.totalPrice.toLocaleString()} Rp\n`;
            orderInfo += `___________________________________\n\n`;

            // Push the order information to the array
            orderDetails.push(orderInfo);
        });

        // Get today's date
        let today = new Date();
        let formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

        // Calculate the total price with delivery
        let deliveryFee = 20000;
        let totalPriceWithDelivery = totalPrice + deliveryFee;

        // Create the final message And join all order details
        let finalMessage = "طلبات جديدة من المخبوزات:\n"; // Initial message
        finalMessage += `تاريخ إرسال الطلب: ${formattedDate}\n\n`; // Add today's date
        finalMessage += orderDetails.join(''); // Join order details
        finalMessage += `الملاحظات: ${noteText}\n`;
        finalMessage += `___________________________________\n\n`;
        finalMessage += `- السعر الإجمالي لجميع الطلبات مع التوصيل: ${totalPriceWithDelivery.toLocaleString()} Rp\n\n`;
        finalMessage += `يجب إرسال موقعك لبدأ تنفيذ الطلب..\n\n`;
        finalMessage += `- جميع طرق الدفع متوفرة سواء اونلاين او كاش\n`;
        finalMessage += `- الدفع يكون مسبق او عند الإستلام\n`;
        finalMessage += `يرجى استخدام المعلومات التالية في حال كان الدفع بالتحويل البنكي\n`;
        finalMessage += `Bank Central Asia (BCA)\nName: samir\nNo Rekening: 1971025609\n\n`;
        finalMessage += `Dana: 087720208728`;

        // Encode the message using encodeURIComponent
        let encodedMessage = encodeURIComponent(finalMessage);

        // Create the WhatsApp URL
        let whatsappURL = `https://wa.me/6282246117155?text=${encodedMessage}`;

        // Open WhatsApp in a new window
        window.open(whatsappURL, '_blank');
    }``
}
/* Up Bread Up */



















/* Down Worker And Driver Booking Down */
if (document.getElementById("koktel_choose_worker_type_section")) {

    /* Craete Home Worker WhatsApp Message */
    koktel_whatsApp_worker_message.onclick = function () {

        // Get today's date
        let today = new Date();
        let formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;


        // Create the final message And join all order details
        let finalMessage = "طلب جديد حجز شغالة:\n"; // Initial message
        finalMessage += `تاريخ إرسال الطلب: ${formattedDate}\n\n`; // Add today's date


        // Append the grand total to the final message
        finalMessage += `يجب إرسال موقعك لبدأ تنفيذ الطلب..\n\n`;
        finalMessage += `جميع طرق الدفع متوفرة سواء اونلاين او كاش\n`;
        finalMessage += `يرجى استخدام المعلومات التالية في حال كان الدفع بالتحويل البنكي\n`;
        finalMessage += `Bank Central Asia (BCA)\nName: samir\nNo Rekening: 1971025609\n\n`;
        finalMessage += `Dana: 087720208728`;

        // Encode the message using encodeURIComponent
        let encodedMessage = encodeURIComponent(finalMessage);

        // Craete the WhatsApp URL
        let whatsappURL = `https://wa.me/6282246117155?text=${encodedMessage}`;

        // Open WhatsApp in a new window
        window.open(whatsappURL, '_blank');
    }

    /* Choose Driver Type Car Or Motor */
    koktel_whatsApp_driver_message.onclick = function () {

        // Disable Scrolling
        document.documentElement.style.overflow = 'hidden';

        let paymeantMethodeBox = document.createElement("div");
        paymeantMethodeBox.id = 'koktel_driver_type_box_overlay';

        paymeantMethodeBox.innerHTML = `
            <div id="koktel_driver_type_box">
                <div id="koktel_driver_type_box_title">
                    <h3>اختار نوع السائق</h3>    
                </div>

                <div id="koktel_driver_type_box_options">
                    <h4 onclick="koktel_driverTypeWhatsAppMessage('car')">سيارة</h4>
                    <h4 onclick="koktel_driverTypeWhatsAppMessage('motor')">دباب</h4>
                    <h4 onclick="koktel_driverTypeWhatsAppMessage('cancel')" style="background-color: gray;">إلغاء</h4>
                </div>
            </div
        `;

        document.getElementById('koktel_choose_worker_type_section').appendChild(paymeantMethodeBox)
    }

    /* Craete Home Driver WhatsApp Message */
    koktel_driverTypeWhatsAppMessage = function (driverType) {

        let clickedDriverType;

        if (driverType === 'car') {
            clickedDriverType = 'طلب جديد حجز سائق سيارة'
        } else if (driverType === 'motor') {
            clickedDriverType = 'طلب جديد حجز سائق دباب'
        } else {
            // Re-enable scrolling
            document.documentElement.style.overflow = 'auto';

            document.getElementById('koktel_choose_worker_type_section').removeChild(document.getElementById('koktel_driver_type_box_overlay'))
            return;

        }


        // Get today's date
        let today = new Date();
        let formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;


        // Create the final message And join all order details
        let finalMessage = `${clickedDriverType}\n`; // Initial message
        finalMessage += `${formattedDate}\n\n`; // Add today's date


        // Append the grand total to the final message
        finalMessage += `يجب إرسال موقعك لبدأ تنفيذ الطلب..\n\n`;
        finalMessage += `جميع طرق الدفع متوفرة سواء اونلاين او كاش\n\n`;
        finalMessage += `يرجى استخدام المعلومات التالية في حال كان الدفع بالتحويل البنكي\n`;
        finalMessage += `Bank Central Asia (BCA)\nName: samir\nNo Rekening: 1971025609\n\n`;
        finalMessage += `Dana: 087720208728`;

        // Encode the message using encodeURIComponent
        let encodedMessage = encodeURIComponent(finalMessage);

        // Craete the WhatsApp URL
        let whatsappURL = `https://wa.me/6282246117155?text=${encodedMessage}`;

        // Open WhatsApp in a new window
        window.open(whatsappURL, '_blank');
    }
}
/* Up Worker And Driver Booking Up */

















/* Down Massage Worker Down */
if (document.getElementById("koktel_choose_massage_person_section")) {

    /* Craete Massage Person Type WhatsApp Message */
    function koktel_massageWorkerTypeMessage(workerType) {
        // Define the worker type specific message header
        let messageType = (workerType === 'female') ? 'انثى' : 'ذكر';


        // Get today's date
        let today = new Date();
        let formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;


        // Create the final message And join all order details
        let finalMessage = `طلب جديد حجز مساج ${messageType}\n`; // Initial message
        finalMessage += `تاريخ إرسال الطلب: ${formattedDate}\n\n`; // Add today's date


        // Append the grand total to the final message
        finalMessage += `يجب إرسال موقعك لبدأ تنفيذ الطلب..\n\n`;
        finalMessage += `جميع طرق الدفع متوفرة سواء اونلاين او كاش\n`;
        finalMessage += `يرجى استخدام المعلومات التالية في حال كان الدفع بالتحويل البنكي\n`;
        finalMessage += `Bank Central Asia (BCA)\nName: samir\nNo Rekening: 1971025609\n\n`;
        finalMessage += `Dana: 087720208728`;

        // Encode the message using encodeURIComponent
        let encodedMessage = encodeURIComponent(finalMessage);

        // Create the WhatsApp URL
        let whatsappURL = `https://wa.me/6282246117155?text=${encodedMessage}`;

        // Open WhatsApp in a new window
        window.open(whatsappURL, '_blank');
    }
}
/* Up Massage Worker Up */






















/* Down Pharmacy Down */
/* Function To Add Orders And Create pharmacy_orders Key in the localStorage */
if (document.getElementById("koktel_pharmacy_section")) {

    window.addEventListener('scroll', function () {
        let supermarketTypeNav = document.getElementById('koktel_filter_product_type_div_id');
        let supermarketUpperBar = document.getElementById('koktel_product_type_nav_upper_bar');

        let menuNavOptionsRect = supermarketTypeNav.getBoundingClientRect();

        if (menuNavOptionsRect.top < 0) { // If menuNavOptions is above the viewport
            supermarketUpperBar.style.top = '0'; // Slide down upperBar
        } else {
            supermarketUpperBar.style.top = '-100%'; // Slide up upperBar
        }
    });

    /* Upper Bar Scroll To filter Retaurant Type Button */
    koktel_scrollToFilterProductType = function (MenuElementIdName) {

        let thisElement = document.getElementById(MenuElementIdName);

        thisElement.scrollIntoView({
            block: 'center',
            inline: 'center',
            behavior: 'smooth',
        });
    }

    /* Scroll To Clicked Product type */
    koktel_scrollToProductType = function (RestaurantElementIdName) {

        // Re-enable scrolling
        document.documentElement.style.overflow = 'auto';

        // Hide And Reset All Data Stored inside The 'FullScreenGuidanceOverlay' Element
        let FullScreenGuidanceOverlay = document.getElementById('koktel_full_screen_guidance_overlay');
        document.body.removeChild(FullScreenGuidanceOverlay);
        FullScreenGuidanceOverlay.innerHTML = '';

        let thisElement = document.getElementById(RestaurantElementIdName);

        thisElement.scrollIntoView({
            block: 'center',
            inline: 'center',
            behavior: 'smooth',
        });
    }


    // Object To Store Click Counts For Each Card
    let clickCounts = {};

    // Object to store data for previously clicked h4 elements
    let clickedProducts = {};

    koktel_addProductButton = function (addedNumber, clickedElement) {
        // Get The Container For The Bottom Counter Total Price Display
        let supermarkerBottomCounterDiv = document.getElementById('koktel_product_bottom_counter_div');

        // Get the parent card element of the clicked h4 element
        let parentCard = clickedElement.closest('.koktel_product_card');

        // Extract product name
        let productName = parentCard.querySelector('.koktel_product_name h1').textContent.trim();

        // Extract img src
        let imgSrc = parentCard.querySelector('.koktel_product_card_img img').src;


        // Check if The Container Div Exists
        if (!supermarkerBottomCounterDiv) {
            // If The Container Doesn't Exist, Then Create New One
            supermarkerBottomCounterDiv = document.createElement('div');
            supermarkerBottomCounterDiv.id = 'koktel_product_bottom_counter_div';

            // Apply flexbox to center the h6 element
            supermarkerBottomCounterDiv.style.display = 'flex';
            supermarkerBottomCounterDiv.style.justifyContent = 'center';
            supermarkerBottomCounterDiv.style.alignItems = 'center';

            // Create The Text To Display The Total Price
            let supermarkerBottomCountertext = document.createElement('h6');
            supermarkerBottomCountertext.id = 'koktel_supermarket_total_price';
            supermarkerBottomCountertext.innerText = `إضافة الطلب = ${addedNumber.toLocaleString()} Rp (بدون سعر التوصيل)`;

            // Append The Text Created To The Container Div
            supermarkerBottomCounterDiv.appendChild(supermarkerBottomCountertext);

            // Append The Container Div To The Body of The Document
            document.body.appendChild(supermarkerBottomCounterDiv);

            // Attach a click event listener to the supermarkerBottomCounterDiv element
            supermarkerBottomCounterDiv.addEventListener('click', function () {

                // Check if 'pharmacy_orders' key exists in localStorage
                if (localStorage.getItem('pharmacy_orders')) {
                    // Get the existing data from localStorage
                    let existingOrders = JSON.parse(localStorage.getItem('pharmacy_orders'));

                    // Add the clicked product data to the existing array
                    Object.values(clickedProducts).forEach(product => {
                        existingOrders.push({
                            productName: product.productName,
                            productAmount: product.currentCount,
                            totalPrice: product.totalValue,
                            productImgSrc: product.imgSrc
                        });
                    });

                    // Update localStorage with the updated array
                    localStorage.setItem('pharmacy_orders', JSON.stringify(existingOrders));
                } else {
                    // If 'pharmacy_orders' key doesn't exist, create a new one with the clicked product data
                    let newOrders = [];
                    Object.values(clickedProducts).forEach(product => {
                        newOrders.push({
                            productName: product.productName,
                            productAmount: product.currentCount,
                            totalPrice: product.totalValue,
                            productImgSrc: product.imgSrc
                        });
                    });

                    // Store the new array in localStorage
                    localStorage.setItem('pharmacy_orders', JSON.stringify(newOrders));
                }


                // Create a box with the text "تم حذف جميع الطلبات"
                let successBox = document.createElement('div');
                successBox.textContent = 'تمت إضافة الطلب';
                successBox.classList.add('koktel_success_box');
                document.body.appendChild(successBox);

                // Trigger the slide and fade-in animation by setting the final transform value and opacity to 1
                setTimeout(() => {
                    successBox.style.transform = 'translate(-50%, -50%)'; // Slide animation
                    successBox.style.opacity = '1'; // Fade-in animation
                }, 10);

                // Remove the success box after 3 seconds
                setTimeout(() => {
                    // Trigger the fade-out animation by setting opacity to 0
                    successBox.style.opacity = '0';

                    // Remove the element from the DOM after the fade-out animation completes
                    setTimeout(() => {
                        successBox.remove();
                    }, 9000); // Wait for the fade-out transition to complete (1.5s)

                    // Refresh The Page After Adding The Selected Orders
                    setTimeout(() => {
                        location.reload();
                    }, 1200);
                }, 800); // Wait for 3 seconds before triggering fade-out


                if (!document.getElementById('koktel_order_page_icon')) {
                    // Create Button To Show Orders Page
                    let koktel_mealOrderIconDiv = document.createElement('div');
                    koktel_mealOrderIconDiv.id = 'koktel_order_page_icon_div';
                    let koktel_mealOrderIcon = `<a href='https://bandar-zuhair.github.io/Koktel/طلباتك-من-الصيدلية.html' id="koktel_order_page_icon"><ion-icon name="cart-outline"></ion-icon></a>`;
                    koktel_mealOrderIconDiv.innerHTML = koktel_mealOrderIcon;
                    koktel_mealOrderIconDiv.style.opacity = '0';
                    document.body.appendChild(koktel_mealOrderIconDiv);
                    setTimeout(() => {
                        koktel_mealOrderIconDiv.style.opacity = '1';
                    }, 1);
                }
            });
        } else {
            // If The Container Already Exists, Update The Total Price

            // Get The Current Total Price From The Displayed Text
            let totalPriceElement = document.getElementById('koktel_supermarket_total_price');
            let currentTotal = parseFloat(totalPriceElement.innerText.split('=')[1].trim().replace(/[^\d.]/g, ''));

            // Calculate The New Total Price By Adding The Added Number To The Current Total
            let newTotal = currentTotal + parseFloat(addedNumber.replace(/[^\d.]/g, ''));

            // Update The Text Content of The Total Price Display To Display The New Total
            totalPriceElement.innerText = `إضافة الطلب = ${newTotal.toLocaleString()} Rp (بدون سعر التوصيل)`;

            // Ensure supermarkerBottomCounterDiv is visible
            supermarkerBottomCounterDiv.style.display = 'flex';
        }

        // Toggle Display of Hidden Elements Within The Same Parent Div 'koktel_product_card'
        let parentDiv = clickedElement.parentElement;
        let hiddenElements = parentDiv.querySelectorAll('h5, ion-icon');

        // Check if Hidden Elements Are Already Displayed
        let isHidden = false;
        hiddenElements.forEach(element => {
            if (element.style.display === 'none') {
                element.style.display = 'block';
                isHidden = true;
            }
        });

        // Update or Display Counter
        let cardId = parentDiv.parentElement.dataset.cardId; // Get the parent card's ID
        if (!clickCounts[cardId]) {
            clickCounts[cardId] = isHidden ? 1 : 2; // Set initial click count based on visibility
        } else {
            let counterElement = parentDiv.querySelector('h5');
            let currentCount = parseInt(counterElement.innerText.trim()) || 0; // Parse current count or default to 0
            if (isHidden) {
                counterElement.innerText = '1'; // Set the counter to 1 if it was hidden before
            } else {
                counterElement.innerText = (currentCount + 1).toString(); // Increment the count displayed in the h5 element
            }
        }

        // Store data for the clicked h4 element
        let currentCount = parseInt(parentDiv.querySelector('h5').innerText.trim()) || 0;
        let totalValue = parseFloat(addedNumber.replace(/[^\d.]/g, '')) * currentCount;
        clickedProducts[productName] = { productName, currentCount, totalValue, imgSrc };
    }


    // Function To Handle The Click Event On Ion-Icon (Minus) Element
    koktel_minusProductButton = function (subtractedNumber, clickedElement) {
        // Get The Current Total Price From The Displayed Text
        let totalPriceElement = document.getElementById('koktel_supermarket_total_price');
        let currentTotal = parseFloat(totalPriceElement.innerText.split('=')[1].trim().replace(/[^\d.]/g, ''));

        // Calculate The New Total Price By Subtracting The Subtracted Number From The Current Total
        let newTotal = currentTotal - parseFloat(subtractedNumber.replace(/[^\d.]/g, ''));

        // Update The Text Content of The Total Price Display To Display The New Total
        totalPriceElement.innerText = `إضافة الطلب = ${newTotal.toLocaleString()} Rp (بدون سعر التوصيل)`;

        // Get The Parent Div of The Clicked ion-icon
        let parentDiv = clickedElement.parentElement;

        // Get The H5 Element Within The Same Div
        let counterElement = parentDiv.querySelector('h5');

        // Get The Current Count From The H5 Element
        let currentCount = parseInt(counterElement.innerText.trim()) || 0;

        // Check if The Current Count is Greater Than 1
        if (currentCount > 1) {
            // If greater than 1, decrement the count by 1
            counterElement.innerText = (currentCount - 1).toString();
        } else {
            // If Count is 1 or Less, Hide Both Ion-Icon And H5 Elements
            clickedElement.style.display = 'none';
            counterElement.style.display = 'none';

            // Get the supermarkerBottomCounterDiv element
            let supermarkerBottomCounterDiv = document.getElementById('koktel_product_bottom_counter_div');

            // Check if NewTotal is 0 And Hide The 'upermarkerBottomCounterDiv' Element
            if (newTotal === 0) {
                supermarkerBottomCounterDiv.style.display = 'none';
            }
        }
    }
}

/* Function To Create Pharmacy Orders Details Page Content And Final WhatsApp Message */
if (document.getElementById("koktel_pharmacy_order_details_body_id")) {
    /* Create Content For The Basic Orders Page */
    let all_order_page_content = `
        <div class="koktel_order_details_div" id="koktel_order_details_div_id" style="display: flex;">
            <h1 class="koktel_order_details_title">طلباتك من الصيدلية جاهزة للإرسال</h1>


            <div class='koktel_order_finished_card_area' id='koktel_order_finished_card_area_id'></div>

            <div>
                <h4 id='koktel_delete_all_restaurant_orders_button' onclick='koktel_ensure_delete_orders_box(this)' style="display: none;">حذف جميع الطلبات</h4>
            </div>

            <div>
                <h4 class="koktel_orders_static_price_h4" id="koktel_orders_static_price_h4_id" style="display: none;">التوصيل = 20,000 Rp</h4>
            </div>


            <div class="koktel_meal_info_note" id="koktel_meal_info_note_id" style="margin-top: 5px; display: none;">
                <textarea placeholder="ملاحظاتك للسوبرماركت هنا" class="koktel_meal_info_note_textarea" maxlength="100"></textarea>
            </div>

            <div class="koktel_koktel_order_details_bottom_button_div" id='koktel_total_order_price_text'></div>

            <div id="koktel_order_check_out_div" style="display: none;"></div>

            <a href="https://bandar-zuhair.github.io/Koktel/صيدلية-اندونيسيا.html" class="koktel_go_back_products_page_button"> <ion-icon name="arrow-forward-circle-outline"></ion-icon> .. قسم الصيدلية</a>
        </div>`;


    /* Set The Inner HTML Code of The 'all_order_page_content' Inside The 'koktel_restaurant_order_details_body_id' Element */
    document.getElementById('koktel_pharmacy_order_details_body_id').innerHTML = all_order_page_content;




    /* in Case if There Was Any Data in The 'pharmacy_orders' Key in The LocalStorage Then Do The Following Codes */
    if (localStorage.getItem('pharmacy_orders')) {

        // Parse restaurant_orders from localStorage
        let orders = JSON.parse(localStorage.getItem('pharmacy_orders'));


        // Loop through each order data
        orders.forEach((orderData, index) => {
            // Create the element for each order
            let localStorageOrderCardFinished = document.createElement('div');
            localStorageOrderCardFinished.classList.add('koktel_order_finished_card');


            // letruct the inner HTML content for the order
            let localStorageOrderCardContent = `
                    <h2 style="cursor: text;">منتج رقم ${index + 1}</h2>
                    <h2 style="color: aqua; cursor: text;">${orderData.productName}</h2>
                    <img src="${orderData.productImgSrc}" alt="صيدلية اندونيسيا - كوكتيل" title="صيدلية اندونيسيا - كوكتيل" onclick="koktel_show_full_screen_image(this.src)" loading="lazy">
                    
                    <div class='koktel_orderFinished_info_and_delete'>
                        <h3 style="cursor: text;">العدد = ${orderData.productAmount}</h3>
                        <h3 id="koktel_order_total_price_h3">الإجمالي = ${orderData.totalPrice.toLocaleString()} Rp</h3>
                        <h3 style="color: red;" onclick="koktel_ensure_delete_orders_box(this, ${index})">حذف الطلب</h3>
                    </div>
                    
                    <div id='koktel_ensure_delete_all_orders_overlay' class='koktel_ensure_delete_orders_overlay' style='display:none'>
                        <div id='koktel_ensure_delete_all_orders_div'>
                            <h6>متاكد من حذف جميع الطلبات؟</h6>
                            <div id='koktel_ensure_delete_all_orders_answer_div'>
                                <h6 onclick='koktel_delete_all_orders_function(this)'>نعم</h6>
                                <h6 onclick='koktel_delete_all_orders_function(this)'>عودة</h6>
                            </div>
                        </div>
                    </div>

                    <div id='koktel_ensure_delete_this_orders_overlay_${index}' class='koktel_ensure_delete_orders_overlay' style='display:none'>
                        <div id='koktel_ensure_delete_all_orders_div'>
                            <h6>متاكد من حذف هذا الطلب؟</h6>
                            <div id='koktel_ensure_delete_all_orders_answer_div'>
                                <h6 onclick='koktel_delete_this_orders_function(this, ${index})'>عودة</h6>
                                <h6 onclick='koktel_delete_this_orders_function(this, ${index})'>نعم</h6>
                            </div>
                        </div>
                    </div>
                
                `;

            // Assign the HTML content to the created element
            localStorageOrderCardFinished.innerHTML = localStorageOrderCardContent;

            // Append the order element to the parent container
            koktel_order_finished_card_area_id.appendChild(localStorageOrderCardFinished);


        });

        // Calculate total price
        let totalPriceSum = orders.reduce((total, order) => total + order.totalPrice, 0) + 20000;

        let koktel_order_check_out_whatsApp_content = `
            <div id="koktel_order_check_out_whatsApp_div" onclick="koktel_createFinalWhatsAppMessage()">
                <ion-icon name="logo-whatsapp"></ion-icon>
                <h5>إرسال الطلبات</h5>
            </div>
            <div id="koktel_order_check_out_bill_div">
                <h6 id="koktel_order_check_out_bill_title" style="color: rgb(0, 255, 0)">الفاتورة</h6>
                ${orders.map((order, orderIndex) => `<h6>المنتج رقم ${orderIndex + 1} : ${order.totalPrice.toLocaleString()} Rp</h6>`).join('')}
                <h6 id="koktel_order_check_out_bill_total_price" style="color: rgb(0, 255, 0)">الإجمالي مع التوصيل : ${totalPriceSum.toLocaleString()} Rp</h6>
            </div>
        `;

        /* Show The Following Code if There is Any Data in The restaurant_orders Key */
        document.getElementById('koktel_order_check_out_div').innerHTML = koktel_order_check_out_whatsApp_content;
        document.getElementById('koktel_order_check_out_div').style.display = 'flex';
        document.getElementById('koktel_delete_all_restaurant_orders_button').style.display = 'block';
        document.getElementById('koktel_orders_static_price_h4_id').style.display = 'block';
        document.getElementById('koktel_meal_info_note_id').style.display = 'block';
        document.getElementById('koktel_order_check_out_div').style.display = 'flex';

    } else {
        // Create the element for each order
        let localStorageOrderCardFinished = document.createElement('div');
        localStorageOrderCardFinished.classList.add('koktel_order_finished_card');
        let localStorageOrderCardContent = `
            <h1 id='koktel_there_is_no_orders_text'>لاتوجد اي طلبات بعد..<ion-icon name="telescope-outline"></ion-icon></h1>`;
        koktel_order_finished_card_area_id.innerHTML = localStorageOrderCardContent;

        // Hide These Elements if There is No Any Restaurant Orders
        koktel_delete_all_restaurant_orders_button.style.display = 'none';
        document.getElementById('koktel_order_check_out_div').innerHTML = '';
    }



    /* Function To Show The Ensure Delete Box */
    koktel_ensure_delete_orders_box = function (clickedDeleteButton, index) {
        if (clickedDeleteButton.innerText === 'حذف الطلب') {
            // Construct the ID of the corresponding overlay element
            let overlayId = `koktel_ensure_delete_this_orders_overlay_${index}`;

            // Show the overlay element
            document.getElementById(overlayId).style.display = 'block';
        } else {
            document.getElementById('koktel_ensure_delete_all_orders_overlay').style.display = 'block';
        }

        // Disable Scrolling
        document.documentElement.style.overflow = 'hidden';
    }




    /* Function To Delete All Orders Data */
    koktel_delete_all_orders_function = function (clickedDeleteAnswer) {

        /* First Check if The Clicked Button is 'عودة' or 'نعم' */
        if (clickedDeleteAnswer.innerText === 'عودة') {
            /* Hide The Ensure Box Element */
            document.getElementById('koktel_ensure_delete_all_orders_overlay').style.display = 'none';

        } else {

            /* Hide The Ensure Box Element */
            document.getElementById('koktel_ensure_delete_all_orders_overlay').style.display = 'none';

            // Clear All Data in LocalStorage
            localStorage.removeItem('pharmacy_orders');

            /* Also Delete The Total price H4 Element */
            document.getElementById('koktel_total_order_price_text').innerHTML = '';

            // Create a box with the text "تم حذف جميع الطلبات"
            let successBox = document.createElement('div');
            successBox.textContent = 'تم حذف جميع طلبات السوبرماركت';
            successBox.classList.add('koktel_success_box');
            document.body.appendChild(successBox);

            // Trigger the slide and fade-in animation by setting the final transform value and opacity to 1
            setTimeout(() => {
                successBox.style.transform = 'translate(-50%, -50%)'; // Slide animation
                successBox.style.opacity = '1'; // Fade-in animation
            }, 10);

            // Remove the success box after 3 seconds
            setTimeout(() => {
                // Trigger the fade-out animation by setting opacity to 0
                successBox.style.opacity = '0';

                // Remove the element from the DOM after the fade-out animation completes
                setTimeout(() => {
                    successBox.remove();
                }, 9000); // Wait for the fade-out transition to complete (1.5s)
            }, 800); // Wait for 3 seconds before triggering fade-out


            // Call renderOrders function to initially render orders
            renderOrders();
        }

        // Re-enable scrolling
        document.documentElement.style.overflow = 'auto';
    }


    /* Function To Delete Only One Order Data */
    koktel_delete_this_orders_function = function (clickedDeleteAnswer, indexNumber) {

        if (clickedDeleteAnswer.innerText === 'عودة') {
            /* Hide The Ensure Box Element */
            document.getElementById(`koktel_ensure_delete_this_orders_overlay_${indexNumber}`).style.display = 'none';

        } else {
            /* Hide The Ensure Box Element */
            document.getElementById(`koktel_ensure_delete_this_orders_overlay_${indexNumber}`).style.display = 'none';

            /* Store The restaurant_orders Key Data in A Variable */
            let orders = JSON.parse(localStorage.getItem('pharmacy_orders'));

            // Remove the order Key with the specified index
            orders.splice(indexNumber, 1);

            // Save the updated restaurant_orders back to localStorage
            localStorage.setItem('pharmacy_orders', JSON.stringify(orders));

            // Check if Orders Key is Empty Then Delete All The Orders Key Compeletly
            if (!orders || orders.length === 0) {
                // Remove the orders key from localStorage
                localStorage.removeItem('pharmacy_orders');


                // Create the element for each order
                let localStorageOrderCardFinished = document.createElement('div');
                localStorageOrderCardFinished.classList.add('koktel_order_finished_card');
                let localStorageOrderCardContent = `
                    <h1 id='koktel_there_is_no_orders_text'>لاتوجد اي طلبات بعد..<ion-icon name="telescope-outline"></ion-icon></h1>`;
                koktel_order_finished_card_area_id.innerHTML = localStorageOrderCardContent;

                // Hide These Elements if There is No Any Restaurant Orders
                koktel_delete_all_restaurant_orders_button.style.display = 'none';
                document.getElementById('koktel_order_check_out_div').innerHTML = '';
            }





            // Refresh the page or update the display to reflect the changes
            renderOrders();

            // Create a box with the text "تم حذف جميع الطلبات"
            let successBox = document.createElement('div');
            successBox.textContent = 'تم حذف الطلب';
            successBox.classList.add('koktel_success_box');
            document.body.appendChild(successBox);

            // Trigger the slide and fade-in animation by setting the final transform value and opacity to 1
            setTimeout(() => {
                successBox.style.transform = 'translate(-50%, -50%)'; // Slide animation
                successBox.style.opacity = '1'; // Fade-in animation
            }, 10);

            // Remove the success box after 3 seconds
            setTimeout(() => {
                // Trigger the fade-out animation by setting opacity to 0
                successBox.style.opacity = '0';

                // Remove the element from the DOM after the fade-out animation completes
                setTimeout(() => {
                    successBox.remove();
                }, 9000); // Wait for the fade-out transition to complete (1.5s)
            }, 800); // Wait for 3 seconds before triggering fade-out

        }

        // Re-enable scrolling
        document.documentElement.style.overflow = 'auto';
    }



    // Function to render the orders
    function renderOrders() {
        // Get the container for displaying orders
        koktel_order_finished_card_area_id.innerHTML = ''; // Clear the existing content

        // Get The orders from localStorage
        let orders = JSON.parse(localStorage.getItem('pharmacy_orders'));

        // Check if orders is empty or null
        if (!orders || orders.length === 0) {
            // Remove the orders key from localStorage
            localStorage.removeItem('pharmacy_orders');


            // Create the element for each order
            let localStorageOrderCardFinished = document.createElement('div');
            localStorageOrderCardFinished.classList.add('koktel_order_finished_card');
            let localStorageOrderCardContent = `
                <h1 id='koktel_there_is_no_orders_text'>لاتوجد اي طلبات بعد..<ion-icon name="telescope-outline"></ion-icon></h1>`;
            koktel_order_finished_card_area_id.innerHTML = localStorageOrderCardContent;

            // Hide These Elements if There is No Any Restaurant Orders
            koktel_delete_all_restaurant_orders_button.style.display = 'none';
            document.getElementById('koktel_order_check_out_div').innerHTML = '';


        }

        /* in Case if There is Data in The Orders Key */
        if (localStorage.getItem('pharmacy_orders')) {
            // Parse orders from localStorage
            let orders = JSON.parse(localStorage.getItem('pharmacy_orders'));

            // Loop through each order data
            orders.forEach((orderData, index) => {
                // Create the element for each order
                let localStorageOrderCardFinished = document.createElement('div');
                localStorageOrderCardFinished.classList.add('koktel_order_finished_card');

                // Construct the inner HTML content for the order
                let localStorageOrderCardContent = `
                <h2 style="cursor: text;">منتج رقم ${index + 1}</h2>
                <h2 style="color: aqua; cursor: text;">${orderData.productName}</h2>
                <img src="${orderData.productImgSrc}" alt="صيدلية اندونيسيا - كوكتيل" title="صيدلية اندونيسيا - كوكتيل" onclick="koktel_show_full_screen_image(this.src)" loading="lazy">
                
                <div class='koktel_orderFinished_info_and_delete'>
                    <h3 style="cursor: text;">العدد = ${orderData.productAmount}</h3>
                    <h3 id="koktel_order_total_price_h3">الإجمالي = ${orderData.totalPrice.toLocaleString()} Rp</h3>
                    <h3 style="color: red;" onclick="koktel_ensure_delete_orders_box(this, ${index})">حذف الطلب</h3>
                </div>
                
                <div id='koktel_ensure_delete_all_orders_overlay' class='koktel_ensure_delete_orders_overlay' style='display:none'>
                    <div id='koktel_ensure_delete_all_orders_div'>
                        <h6>متاكد من حذف جميع الطلبات؟</h6>
                        <div id='koktel_ensure_delete_all_orders_answer_div'>
                            <h6 onclick='koktel_delete_all_orders_function(this)'>عودة</h6>
                            <h6 onclick='koktel_delete_all_orders_function(this)'>نعم</h6>
                        </div>
                    </div>
                </div>

                <div id='koktel_ensure_delete_this_orders_overlay_${index}' class='koktel_ensure_delete_orders_overlay' style='display:none'>
                    <div id='koktel_ensure_delete_all_orders_div'>
                        <h6>متاكد من حذف هذا الطلب؟</h6>
                        <div id='koktel_ensure_delete_all_orders_answer_div'>
                            <h6 onclick='koktel_delete_this_orders_function(this, ${index})'>عودة</h6>
                            <h6 onclick='koktel_delete_this_orders_function(this, ${index})'>نعم</h6>
                        </div>
                    </div>
                </div>
            `;

                // Assign the HTML content to the created element
                localStorageOrderCardFinished.innerHTML = localStorageOrderCardContent;

                // Append the order element to the parent container
                koktel_order_finished_card_area_id.appendChild(localStorageOrderCardFinished);
            });


            // Calculate total price Adding 20,000 To The Resuilt of All Products Price
            let totalPriceSum = orders.reduce((total, order) => total + order.totalPrice, 0) + 20000;

            let koktel_order_check_out_whatsApp_content = `
                <div id="koktel_order_check_out_whatsApp_div" onclick="koktel_createFinalWhatsAppMessage()">
                    <ion-icon name="logo-whatsapp"></ion-icon>
                    <h5>إرسال الطلبات</h5>
                </div>
                <div id="koktel_order_check_out_bill_div">
                    <h6 id="koktel_order_check_out_bill_title" style="color: rgb(0, 255, 0)">الفاتورة</h6>
                    ${orders.map((order, orderIndex) => `<h6>المنتج رقم ${orderIndex + 1} : ${order.totalPrice.toLocaleString()} Rp</h6>`).join('')}
                    <h6 id="koktel_order_check_out_bill_total_price" style="color: rgb(0, 255, 0)">الإجمالي مع التوصيل : ${totalPriceSum.toLocaleString()} Rp</h6>
                </div>
            `;

            /* Show The Following Code if There is Any Data in The restaurant_orders Key */
            document.getElementById('koktel_order_check_out_div').innerHTML = koktel_order_check_out_whatsApp_content;
            document.getElementById('koktel_order_check_out_div').style.display = 'flex';
        } else {

            /* Hide The TextArea Element If There is No Any 'pharmacy_orders' Data */
            document.getElementById('koktel_meal_info_note_id').style.display = 'none';
            document.getElementById('koktel_orders_static_price_h4_id').style.display = 'none';
        }
    }



    // Call renderOrders function to initially render orders
    renderOrders();



    koktel_createFinalWhatsAppMessage = function () {
        // Retrieve orders from localStorage
        let orders = JSON.parse(localStorage.getItem('pharmacy_orders'));

        // Initialize variables for total price and order details
        let totalPrice = 0;
        let orderDetails = [];

        // Get the text inside the textarea
        let noteTextarea = document.querySelector('.koktel_meal_info_note_textarea');
        let noteText = noteTextarea ? noteTextarea.value.trim() : ''; // Check if textarea exists

        // Loop through each order and extract relevant information
        orders.forEach((order, index) => {
            // Add each order's total price to the total
            totalPrice += order.totalPrice;

            // Create the order information
            let orderInfo = `المنتج رقم ${index + 1}- ${order.productName}\n`;
            orderInfo += `- العدد: ${order.productAmount}\n`;
            orderInfo += `- الإجمالي: ${order.totalPrice.toLocaleString()} Rp\n`;
            orderInfo += `___________________________________\n\n`;

            // Push the order information to the array
            orderDetails.push(orderInfo);
        });

        // Get today's date
        let today = new Date();
        let formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

        // Calculate the total price with delivery
        let deliveryFee = 20000;
        let totalPriceWithDelivery = totalPrice + deliveryFee;

        // Create the final message And join all order details
        let finalMessage = "طلبات جديدة من الصيدلية:\n"; // Initial message
        finalMessage += `تاريخ إرسال الطلب: ${formattedDate}\n\n`; // Add today's date
        finalMessage += orderDetails.join(''); // Join order details
        finalMessage += `الملاحظات: ${noteText}\n`;
        finalMessage += `___________________________________\n\n`;
        finalMessage += `- السعر الإجمالي لجميع الطلبات مع التوصيل: ${totalPriceWithDelivery.toLocaleString()} Rp\n\n`;
        finalMessage += `يجب إرسال موقعك لبدأ تنفيذ الطلب..\n\n`;
        finalMessage += `- جميع طرق الدفع متوفرة سواء اونلاين او كاش\n`;
        finalMessage += `- الدفع يكون مسبق او عند الإستلام\n`;
        finalMessage += `يرجى استخدام المعلومات التالية في حال كان الدفع بالتحويل البنكي\n`;
        finalMessage += `Bank Central Asia (BCA)\nName: samir\nNo Rekening: 1971025609\n\n`;
        finalMessage += `Dana: 087720208728`;

        // Encode the message using encodeURIComponent
        let encodedMessage = encodeURIComponent(finalMessage);

        // Create the WhatsApp URL
        let whatsappURL = `https://wa.me/6282246117155?text=${encodedMessage}`;

        // Open WhatsApp in a new window
        window.open(whatsappURL, '_blank');
    }
}
/* Up Pharmacy Up */



















/* Down Shisha Down */
/* Function To Add Orders And Create shisha_orders Key in the localStorage */
if (document.getElementById("koktel_shisha_section")) {

    window.addEventListener('scroll', function () {
        let supermarketTypeNav = document.getElementById('koktel_filter_product_type_div_id');
        let supermarketUpperBar = document.getElementById('koktel_product_type_nav_upper_bar');

        let menuNavOptionsRect = supermarketTypeNav.getBoundingClientRect();

        if (menuNavOptionsRect.top < 0) { // If menuNavOptions is above the viewport
            supermarketUpperBar.style.top = '0'; // Slide down upperBar
        } else {
            supermarketUpperBar.style.top = '-100%'; // Slide up upperBar
        }
    });

    /* Upper Bar Scroll To filter Retaurant Type Button */
    koktel_scrollToFilterProductType = function (MenuElementIdName) {

        let thisElement = document.getElementById(MenuElementIdName);

        thisElement.scrollIntoView({
            block: 'center',
            inline: 'center',
            behavior: 'smooth',
        });
    }

    /* Scroll To Clicked Product type */
    koktel_scrollToProductType = function (RestaurantElementIdName) {

        // Re-enable scrolling
        document.documentElement.style.overflow = 'auto';

        // Hide And Reset All Data Stored inside The 'FullScreenGuidanceOverlay' Element
        let FullScreenGuidanceOverlay = document.getElementById('koktel_full_screen_guidance_overlay');
        document.body.removeChild(FullScreenGuidanceOverlay);
        FullScreenGuidanceOverlay.innerHTML = '';

        let thisElement = document.getElementById(RestaurantElementIdName);

        thisElement.scrollIntoView({
            block: 'center',
            inline: 'center',
            behavior: 'smooth',
        });
    }


    // Object To Store Click Counts For Each Card
    let clickCounts = {};

    // Object to store data for previously clicked h4 elements
    let clickedProducts = {};

    koktel_addProductButton = function (addedNumber, clickedElement) {
        // Get The Container For The Bottom Counter Total Price Display
        let supermarkerBottomCounterDiv = document.getElementById('koktel_product_bottom_counter_div');

        // Get the parent card element of the clicked h4 element
        let parentCard = clickedElement.closest('.koktel_product_card');

        // Extract product name
        let productName = parentCard.querySelector('.koktel_product_name h1').textContent.trim();

        // Extract img src
        let imgSrc = parentCard.querySelector('.koktel_product_card_img img').src;


        // Check if The Container Div Exists
        if (!supermarkerBottomCounterDiv) {
            // If The Container Doesn't Exist, Then Create New One
            supermarkerBottomCounterDiv = document.createElement('div');
            supermarkerBottomCounterDiv.id = 'koktel_product_bottom_counter_div';

            // Apply flexbox to center the h6 element
            supermarkerBottomCounterDiv.style.display = 'flex';
            supermarkerBottomCounterDiv.style.justifyContent = 'center';
            supermarkerBottomCounterDiv.style.alignItems = 'center';

            // Create The Text To Display The Total Price
            let supermarkerBottomCountertext = document.createElement('h6');
            supermarkerBottomCountertext.id = 'koktel_supermarket_total_price';
            supermarkerBottomCountertext.innerText = `إضافة الطلب = ${addedNumber.toLocaleString()} Rp (بدون سعر التوصيل)`;

            // Append The Text Created To The Container Div
            supermarkerBottomCounterDiv.appendChild(supermarkerBottomCountertext);

            // Append The Container Div To The Body of The Document
            document.body.appendChild(supermarkerBottomCounterDiv);

            // Attach a click event listener to the supermarkerBottomCounterDiv element
            supermarkerBottomCounterDiv.addEventListener('click', function () {

                // Check if 'shisha_orders' key exists in localStorage
                if (localStorage.getItem('shisha_orders')) {
                    // Get the existing data from localStorage
                    let existingOrders = JSON.parse(localStorage.getItem('shisha_orders'));

                    // Add the clicked product data to the existing array
                    Object.values(clickedProducts).forEach(product => {
                        existingOrders.push({
                            productName: product.productName,
                            productAmount: product.currentCount,
                            totalPrice: product.totalValue,
                            productImgSrc: product.imgSrc
                        });
                    });

                    // Update localStorage with the updated array
                    localStorage.setItem('shisha_orders', JSON.stringify(existingOrders));
                } else {
                    // If 'shisha_orders' key doesn't exist, create a new one with the clicked product data
                    let newOrders = [];
                    Object.values(clickedProducts).forEach(product => {
                        newOrders.push({
                            productName: product.productName,
                            productAmount: product.currentCount,
                            totalPrice: product.totalValue,
                            productImgSrc: product.imgSrc
                        });
                    });

                    // Store the new array in localStorage
                    localStorage.setItem('shisha_orders', JSON.stringify(newOrders));
                }


                // Create a box with the text "تم حذف جميع الطلبات"
                let successBox = document.createElement('div');
                successBox.textContent = 'تمت إضافة الطلب';
                successBox.classList.add('koktel_success_box');
                document.body.appendChild(successBox);

                // Trigger the slide and fade-in animation by setting the final transform value and opacity to 1
                setTimeout(() => {
                    successBox.style.transform = 'translate(-50%, -50%)'; // Slide animation
                    successBox.style.opacity = '1'; // Fade-in animation
                }, 10);

                // Remove the success box after 3 seconds
                setTimeout(() => {
                    // Trigger the fade-out animation by setting opacity to 0
                    successBox.style.opacity = '0';

                    // Remove the element from the DOM after the fade-out animation completes
                    setTimeout(() => {
                        successBox.remove();
                    }, 9000); // Wait for the fade-out transition to complete (1.5s)

                    // Refresh The Page After Adding The Selected Orders
                    setTimeout(() => {
                        location.reload();
                    }, 1200);
                }, 800); // Wait for 3 seconds before triggering fade-out


                if (!document.getElementById('koktel_order_page_icon')) {
                    // Create Button To Show Orders Page
                    let koktel_mealOrderIconDiv = document.createElement('div');
                    koktel_mealOrderIconDiv.id = 'koktel_order_page_icon_div';
                    let koktel_mealOrderIcon = `<a href='https://bandar-zuhair.github.io/Koktel/طلباتك-من-المعسلات.html' id="koktel_order_page_icon"><ion-icon name="cart-outline"></ion-icon></a>`;
                    koktel_mealOrderIconDiv.innerHTML = koktel_mealOrderIcon;
                    koktel_mealOrderIconDiv.style.opacity = '0';
                    document.body.appendChild(koktel_mealOrderIconDiv);
                    setTimeout(() => {
                        koktel_mealOrderIconDiv.style.opacity = '1';
                    }, 1);
                }
            });
        } else {
            // If The Container Already Exists, Update The Total Price

            // Get The Current Total Price From The Displayed Text
            let totalPriceElement = document.getElementById('koktel_supermarket_total_price');
            let currentTotal = parseFloat(totalPriceElement.innerText.split('=')[1].trim().replace(/[^\d.]/g, ''));

            // Calculate The New Total Price By Adding The Added Number To The Current Total
            let newTotal = currentTotal + parseFloat(addedNumber.replace(/[^\d.]/g, ''));

            // Update The Text Content of The Total Price Display To Display The New Total
            totalPriceElement.innerText = `إضافة الطلب = ${newTotal.toLocaleString()} Rp (بدون سعر التوصيل)`;

            // Ensure supermarkerBottomCounterDiv is visible
            supermarkerBottomCounterDiv.style.display = 'flex';
        }

        // Toggle Display of Hidden Elements Within The Same Parent Div 'koktel_product_card'
        let parentDiv = clickedElement.parentElement;
        let hiddenElements = parentDiv.querySelectorAll('h5, ion-icon');

        // Check if Hidden Elements Are Already Displayed
        let isHidden = false;
        hiddenElements.forEach(element => {
            if (element.style.display === 'none') {
                element.style.display = 'block';
                isHidden = true;
            }
        });

        // Update or Display Counter
        let cardId = parentDiv.parentElement.dataset.cardId; // Get the parent card's ID
        if (!clickCounts[cardId]) {
            clickCounts[cardId] = isHidden ? 1 : 2; // Set initial click count based on visibility
        } else {
            let counterElement = parentDiv.querySelector('h5');
            let currentCount = parseInt(counterElement.innerText.trim()) || 0; // Parse current count or default to 0
            if (isHidden) {
                counterElement.innerText = '1'; // Set the counter to 1 if it was hidden before
            } else {
                counterElement.innerText = (currentCount + 1).toString(); // Increment the count displayed in the h5 element
            }
        }

        // Store data for the clicked h4 element
        let currentCount = parseInt(parentDiv.querySelector('h5').innerText.trim()) || 0;
        let totalValue = parseFloat(addedNumber.replace(/[^\d.]/g, '')) * currentCount;
        clickedProducts[productName] = { productName, currentCount, totalValue, imgSrc };
    }


    // Function To Handle The Click Event On Ion-Icon (Minus) Element
    koktel_minusProductButton = function (subtractedNumber, clickedElement) {
        // Get The Current Total Price From The Displayed Text
        let totalPriceElement = document.getElementById('koktel_supermarket_total_price');
        let currentTotal = parseFloat(totalPriceElement.innerText.split('=')[1].trim().replace(/[^\d.]/g, ''));

        // Calculate The New Total Price By Subtracting The Subtracted Number From The Current Total
        let newTotal = currentTotal - parseFloat(subtractedNumber.replace(/[^\d.]/g, ''));

        // Update The Text Content of The Total Price Display To Display The New Total
        totalPriceElement.innerText = `إضافة الطلب = ${newTotal.toLocaleString()} Rp (بدون سعر التوصيل)`;

        // Get The Parent Div of The Clicked ion-icon
        let parentDiv = clickedElement.parentElement;

        // Get The H5 Element Within The Same Div
        let counterElement = parentDiv.querySelector('h5');

        // Get The Current Count From The H5 Element
        let currentCount = parseInt(counterElement.innerText.trim()) || 0;

        // Check if The Current Count is Greater Than 1
        if (currentCount > 1) {
            // If greater than 1, decrement the count by 1
            counterElement.innerText = (currentCount - 1).toString();
        } else {
            // If Count is 1 or Less, Hide Both Ion-Icon And H5 Elements
            clickedElement.style.display = 'none';
            counterElement.style.display = 'none';

            // Get the supermarkerBottomCounterDiv element
            let supermarkerBottomCounterDiv = document.getElementById('koktel_product_bottom_counter_div');

            // Check if NewTotal is 0 And Hide The 'upermarkerBottomCounterDiv' Element
            if (newTotal === 0) {
                supermarkerBottomCounterDiv.style.display = 'none';
            }
        }
    }
}

/* Function To Create shisha_orders Orders Details Page Content And Final WhatsApp Message */
if (document.getElementById("koktel_shisha_order_details_body_id")) {
    /* Create Content For The Basic Orders Page */
    let all_order_page_content = `
        <div class="koktel_order_details_div" id="koktel_order_details_div_id" style="display: flex;">
            <h1 class="koktel_order_details_title">طلباتك من المعسلات جاهزة للإرسال</h1>


            <div class='koktel_order_finished_card_area' id='koktel_order_finished_card_area_id'></div>

            <div>
                <h4 id='koktel_delete_all_restaurant_orders_button' onclick='koktel_ensure_delete_orders_box(this)' style="display: none;">حذف جميع الطلبات</h4>
            </div>

            <div>
                <h4 class="koktel_orders_static_price_h4" id="koktel_orders_static_price_h4_id" style="display: none;">التوصيل = 20,000 Rp</h4>
            </div>


            <div class="koktel_meal_info_note" id="koktel_meal_info_note_id" style="margin-top: 5px; display: none;">
                <textarea placeholder="ملاحظاتك للمعسلات هنا" class="koktel_meal_info_note_textarea" maxlength="100"></textarea>
            </div>

            <div class="koktel_koktel_order_details_bottom_button_div" id='koktel_total_order_price_text'></div>

            <div id="koktel_order_check_out_div" style="display: none;"></div>

            <a href="https://bandar-zuhair.github.io/Koktel/معسلات-اندونيسيا.html" class="koktel_go_back_products_page_button"> <ion-icon name="arrow-forward-circle-outline"></ion-icon> .. قسم المعسلات</a>
        </div>`;


    /* Set The Inner HTML Code of The 'all_order_page_content' Inside The 'koktel_restaurant_order_details_body_id' Element */
    document.getElementById('koktel_shisha_order_details_body_id').innerHTML = all_order_page_content;




    /* in Case if There Was Any Data in The 'shisha_orders' Key in The LocalStorage Then Do The Following Codes */
    if (localStorage.getItem('shisha_orders')) {

        // Parse restaurant_orders from localStorage
        let orders = JSON.parse(localStorage.getItem('shisha_orders'));


        // Loop through each order data
        orders.forEach((orderData, index) => {
            // Create the element for each order
            let localStorageOrderCardFinished = document.createElement('div');
            localStorageOrderCardFinished.classList.add('koktel_order_finished_card');


            // letruct the inner HTML content for the order
            let localStorageOrderCardContent = `
                    <h2 style="cursor: text;">منتج رقم ${index + 1}</h2>
                    <h2 style="color: aqua; cursor: text;">${orderData.productName}</h2>
                    <img src="${orderData.productImgSrc}" alt="معسلات اندونيسيا - كوكتيل" title="معسلات اندونيسيا - كوكتيل" onclick="koktel_show_full_screen_image(this.src)" loading="lazy">
                    
                    <div class='koktel_orderFinished_info_and_delete'>
                        <h3 style="cursor: text;">العدد = ${orderData.productAmount}</h3>
                        <h3 id="koktel_order_total_price_h3">الإجمالي = ${orderData.totalPrice.toLocaleString()} Rp</h3>
                        <h3 style="color: red;" onclick="koktel_ensure_delete_orders_box(this, ${index})">حذف الطلب</h3>
                    </div>
                    
                    <div id='koktel_ensure_delete_all_orders_overlay' class='koktel_ensure_delete_orders_overlay' style='display:none'>
                        <div id='koktel_ensure_delete_all_orders_div'>
                            <h6>متاكد من حذف جميع الطلبات؟</h6>
                            <div id='koktel_ensure_delete_all_orders_answer_div'>
                                <h6 onclick='koktel_delete_all_orders_function(this)'>نعم</h6>
                                <h6 onclick='koktel_delete_all_orders_function(this)'>عودة</h6>
                            </div>
                        </div>
                    </div>

                    <div id='koktel_ensure_delete_this_orders_overlay_${index}' class='koktel_ensure_delete_orders_overlay' style='display:none'>
                        <div id='koktel_ensure_delete_all_orders_div'>
                            <h6>متاكد من حذف هذا الطلب؟</h6>
                            <div id='koktel_ensure_delete_all_orders_answer_div'>
                                <h6 onclick='koktel_delete_this_orders_function(this, ${index})'>عودة</h6>
                                <h6 onclick='koktel_delete_this_orders_function(this, ${index})'>نعم</h6>
                            </div>
                        </div>
                    </div>
                
                `;

            // Assign the HTML content to the created element
            localStorageOrderCardFinished.innerHTML = localStorageOrderCardContent;

            // Append the order element to the parent container
            koktel_order_finished_card_area_id.appendChild(localStorageOrderCardFinished);


        });

        // Calculate total price
        let totalPriceSum = orders.reduce((total, order) => total + order.totalPrice, 0) + 20000;

        let koktel_order_check_out_whatsApp_content = `
            <div id="koktel_order_check_out_whatsApp_div" onclick="koktel_createFinalWhatsAppMessage()">
                <ion-icon name="logo-whatsapp"></ion-icon>
                <h5>إرسال الطلبات</h5>
            </div>
            <div id="koktel_order_check_out_bill_div">
                <h6 id="koktel_order_check_out_bill_title" style="color: rgb(0, 255, 0)">الفاتورة</h6>
                ${orders.map((order, orderIndex) => `<h6>المنتج رقم ${orderIndex + 1} : ${order.totalPrice.toLocaleString()} Rp</h6>`).join('')}
                <h6 id="koktel_order_check_out_bill_total_price" style="color: rgb(0, 255, 0)">الإجمالي مع التوصيل : ${totalPriceSum.toLocaleString()} Rp</h6>
            </div>
        `;

        /* Show The Following Code if There is Any Data in The restaurant_orders Key */
        document.getElementById('koktel_order_check_out_div').innerHTML = koktel_order_check_out_whatsApp_content;
        document.getElementById('koktel_order_check_out_div').style.display = 'flex';
        document.getElementById('koktel_delete_all_restaurant_orders_button').style.display = 'block';
        document.getElementById('koktel_orders_static_price_h4_id').style.display = 'block';
        document.getElementById('koktel_meal_info_note_id').style.display = 'block';
        document.getElementById('koktel_order_check_out_div').style.display = 'flex';

    } else {
        // Create the element for each order
        let localStorageOrderCardFinished = document.createElement('div');
        localStorageOrderCardFinished.classList.add('koktel_order_finished_card');
        let localStorageOrderCardContent = `
            <h1 id='koktel_there_is_no_orders_text'>لاتوجد اي طلبات بعد..<ion-icon name="telescope-outline"></ion-icon></h1>`;
        koktel_order_finished_card_area_id.innerHTML = localStorageOrderCardContent;

        // Hide These Elements if There is No Any Restaurant Orders
        koktel_delete_all_restaurant_orders_button.style.display = 'none';
        document.getElementById('koktel_order_check_out_div').innerHTML = '';
    }



    /* Function To Show The Ensure Delete Box */
    koktel_ensure_delete_orders_box = function (clickedDeleteButton, index) {
        if (clickedDeleteButton.innerText === 'حذف الطلب') {
            // Construct the ID of the corresponding overlay element
            let overlayId = `koktel_ensure_delete_this_orders_overlay_${index}`;

            // Show the overlay element
            document.getElementById(overlayId).style.display = 'block';
        } else {
            document.getElementById('koktel_ensure_delete_all_orders_overlay').style.display = 'block';
        }

        // Disable Scrolling
        document.documentElement.style.overflow = 'hidden';
    }




    /* Function To Delete All Orders Data */
    koktel_delete_all_orders_function = function (clickedDeleteAnswer) {

        /* First Check if The Clicked Button is 'عودة' or 'نعم' */
        if (clickedDeleteAnswer.innerText === 'عودة') {
            /* Hide The Ensure Box Element */
            document.getElementById('koktel_ensure_delete_all_orders_overlay').style.display = 'none';

        } else {

            /* Hide The Ensure Box Element */
            document.getElementById('koktel_ensure_delete_all_orders_overlay').style.display = 'none';

            // Clear All Data in LocalStorage
            localStorage.removeItem('shisha_orders');

            /* Also Delete The Total price H4 Element */
            document.getElementById('koktel_total_order_price_text').innerHTML = '';

            // Create a box with the text "تم حذف جميع الطلبات"
            let successBox = document.createElement('div');
            successBox.textContent = 'تم حذف جميع طلبات السوبرماركت';
            successBox.classList.add('koktel_success_box');
            document.body.appendChild(successBox);

            // Trigger the slide and fade-in animation by setting the final transform value and opacity to 1
            setTimeout(() => {
                successBox.style.transform = 'translate(-50%, -50%)'; // Slide animation
                successBox.style.opacity = '1'; // Fade-in animation
            }, 10);

            // Remove the success box after 3 seconds
            setTimeout(() => {
                // Trigger the fade-out animation by setting opacity to 0
                successBox.style.opacity = '0';

                // Remove the element from the DOM after the fade-out animation completes
                setTimeout(() => {
                    successBox.remove();
                }, 9000); // Wait for the fade-out transition to complete (1.5s)
            }, 800); // Wait for 3 seconds before triggering fade-out


            // Call renderOrders function to initially render orders
            renderOrders();
        }

        // Re-enable scrolling
        document.documentElement.style.overflow = 'auto';
    }


    /* Function To Delete Only One Order Data */
    koktel_delete_this_orders_function = function (clickedDeleteAnswer, indexNumber) {

        if (clickedDeleteAnswer.innerText === 'عودة') {
            /* Hide The Ensure Box Element */
            document.getElementById(`koktel_ensure_delete_this_orders_overlay_${indexNumber}`).style.display = 'none';

        } else {
            /* Hide The Ensure Box Element */
            document.getElementById(`koktel_ensure_delete_this_orders_overlay_${indexNumber}`).style.display = 'none';

            /* Store The restaurant_orders Key Data in A Variable */
            let orders = JSON.parse(localStorage.getItem('shisha_orders'));

            // Remove the order Key with the specified index
            orders.splice(indexNumber, 1);

            // Save the updated restaurant_orders back to localStorage
            localStorage.setItem('shisha_orders', JSON.stringify(orders));

            // Check if Orders Key is Empty Then Delete All The Orders Key Compeletly
            if (!orders || orders.length === 0) {
                // Remove the orders key from localStorage
                localStorage.removeItem('shisha_orders');


                // Create the element for each order
                let localStorageOrderCardFinished = document.createElement('div');
                localStorageOrderCardFinished.classList.add('koktel_order_finished_card');
                let localStorageOrderCardContent = `
                    <h1 id='koktel_there_is_no_orders_text'>لاتوجد اي طلبات بعد..<ion-icon name="telescope-outline"></ion-icon></h1>`;
                koktel_order_finished_card_area_id.innerHTML = localStorageOrderCardContent;

                // Hide These Elements if There is No Any Restaurant Orders
                koktel_delete_all_restaurant_orders_button.style.display = 'none';
                document.getElementById('koktel_order_check_out_div').innerHTML = '';
            }





            // Refresh the page or update the display to reflect the changes
            renderOrders();

            // Create a box with the text "تم حذف جميع الطلبات"
            let successBox = document.createElement('div');
            successBox.textContent = 'تم حذف الطلب';
            successBox.classList.add('koktel_success_box');
            document.body.appendChild(successBox);

            // Trigger the slide and fade-in animation by setting the final transform value and opacity to 1
            setTimeout(() => {
                successBox.style.transform = 'translate(-50%, -50%)'; // Slide animation
                successBox.style.opacity = '1'; // Fade-in animation
            }, 10);

            // Remove the success box after 3 seconds
            setTimeout(() => {
                // Trigger the fade-out animation by setting opacity to 0
                successBox.style.opacity = '0';

                // Remove the element from the DOM after the fade-out animation completes
                setTimeout(() => {
                    successBox.remove();
                }, 9000); // Wait for the fade-out transition to complete (1.5s)
            }, 800); // Wait for 3 seconds before triggering fade-out

        }

        // Re-enable scrolling
        document.documentElement.style.overflow = 'auto';
    }



    // Function to render the orders
    function renderOrders() {
        // Get the container for displaying orders
        koktel_order_finished_card_area_id.innerHTML = ''; // Clear the existing content

        // Get The orders from localStorage
        let orders = JSON.parse(localStorage.getItem('shisha_orders'));

        // Check if orders is empty or null
        if (!orders || orders.length === 0) {
            // Remove the orders key from localStorage
            localStorage.removeItem('shisha_orders');


            // Create the element for each order
            let localStorageOrderCardFinished = document.createElement('div');
            localStorageOrderCardFinished.classList.add('koktel_order_finished_card');
            let localStorageOrderCardContent = `
                <h1 id='koktel_there_is_no_orders_text'>لاتوجد اي طلبات بعد..<ion-icon name="telescope-outline"></ion-icon></h1>`;
            koktel_order_finished_card_area_id.innerHTML = localStorageOrderCardContent;

            // Hide These Elements if There is No Any Restaurant Orders
            koktel_delete_all_restaurant_orders_button.style.display = 'none';
            document.getElementById('koktel_order_check_out_div').innerHTML = '';


        }

        /* in Case if There is Data in The Orders Key */
        if (localStorage.getItem('shisha_orders')) {
            // Parse orders from localStorage
            let orders = JSON.parse(localStorage.getItem('shisha_orders'));

            // Loop through each order data
            orders.forEach((orderData, index) => {
                // Create the element for each order
                let localStorageOrderCardFinished = document.createElement('div');
                localStorageOrderCardFinished.classList.add('koktel_order_finished_card');

                // Construct the inner HTML content for the order
                let localStorageOrderCardContent = `
                <h2 style="cursor: text;">منتج رقم ${index + 1}</h2>
                <h2 style="color: aqua; cursor: text;">${orderData.productName}</h2>
                <img src="${orderData.productImgSrc}" alt="معسلات اندونيسيا - كوكتيل" title="معسلات اندونيسيا - كوكتيل" onclick="koktel_show_full_screen_image(this.src)" loading="lazy">
                    
                <div class='koktel_orderFinished_info_and_delete'>
                    <h3 style="cursor: text;">العدد = ${orderData.productAmount}</h3>
                    <h3 id="koktel_order_total_price_h3">الإجمالي = ${orderData.totalPrice.toLocaleString()} Rp</h3>
                    <h3 style="color: red;" onclick="koktel_ensure_delete_orders_box(this, ${index})">حذف الطلب</h3>
                </div>
                
                <div id='koktel_ensure_delete_all_orders_overlay' class='koktel_ensure_delete_orders_overlay' style='display:none'>
                    <div id='koktel_ensure_delete_all_orders_div'>
                        <h6>متاكد من حذف جميع الطلبات؟</h6>
                        <div id='koktel_ensure_delete_all_orders_answer_div'>
                            <h6 onclick='koktel_delete_all_orders_function(this)'>عودة</h6>
                            <h6 onclick='koktel_delete_all_orders_function(this)'>نعم</h6>
                        </div>
                    </div>
                </div>

                <div id='koktel_ensure_delete_this_orders_overlay_${index}' class='koktel_ensure_delete_orders_overlay' style='display:none'>
                    <div id='koktel_ensure_delete_all_orders_div'>
                        <h6>متاكد من حذف هذا الطلب؟</h6>
                        <div id='koktel_ensure_delete_all_orders_answer_div'>
                            <h6 onclick='koktel_delete_this_orders_function(this, ${index})'>عودة</h6>
                            <h6 onclick='koktel_delete_this_orders_function(this, ${index})'>نعم</h6>
                        </div>
                    </div>
                </div>
            `;

                // Assign the HTML content to the created element
                localStorageOrderCardFinished.innerHTML = localStorageOrderCardContent;

                // Append the order element to the parent container
                koktel_order_finished_card_area_id.appendChild(localStorageOrderCardFinished);
            });


            // Calculate total price Adding 20,000 To The Resuilt of All Products Price
            let totalPriceSum = orders.reduce((total, order) => total + order.totalPrice, 0) + 20000;

            let koktel_order_check_out_whatsApp_content = `
                <div id="koktel_order_check_out_whatsApp_div" onclick="koktel_createFinalWhatsAppMessage()">
                    <ion-icon name="logo-whatsapp"></ion-icon>
                    <h5>إرسال الطلبات</h5>
                </div>
                <div id="koktel_order_check_out_bill_div">
                    <h6 id="koktel_order_check_out_bill_title" style="color: rgb(0, 255, 0)">الفاتورة</h6>
                    ${orders.map((order, orderIndex) => `<h6>المنتج رقم ${orderIndex + 1} : ${order.totalPrice.toLocaleString()} Rp</h6>`).join('')}
                    <h6 id="koktel_order_check_out_bill_total_price" style="color: rgb(0, 255, 0)">الإجمالي مع التوصيل : ${totalPriceSum.toLocaleString()} Rp</h6>
                </div>
            `;

            /* Show The Following Code if There is Any Data in The restaurant_orders Key */
            document.getElementById('koktel_order_check_out_div').innerHTML = koktel_order_check_out_whatsApp_content;
            document.getElementById('koktel_order_check_out_div').style.display = 'flex';
        } else {

            /* Hide The TextArea Element If There is No Any 'shisha_orders' Data */
            document.getElementById('koktel_meal_info_note_id').style.display = 'none';
            document.getElementById('koktel_orders_static_price_h4_id').style.display = 'none';
        }
    }



    // Call renderOrders function to initially render orders
    renderOrders();



    koktel_createFinalWhatsAppMessage = function () {
        // Retrieve orders from localStorage
        let orders = JSON.parse(localStorage.getItem('shisha_orders'));

        // Initialize variables for total price and order details
        let totalPrice = 0;
        let orderDetails = [];

        // Get the text inside the textarea
        let noteTextarea = document.querySelector('.koktel_meal_info_note_textarea');
        let noteText = noteTextarea ? noteTextarea.value.trim() : ''; // Check if textarea exists

        // Loop through each order and extract relevant information
        orders.forEach((order, index) => {
            // Add each order's total price to the total
            totalPrice += order.totalPrice;

            // Create the order information
            let orderInfo = `المنتج رقم ${index + 1}- ${order.productName}\n`;
            orderInfo += `- العدد: ${order.productAmount}\n`;
            orderInfo += `- الإجمالي: ${order.totalPrice.toLocaleString()} Rp\n`;
            orderInfo += `___________________________________\n\n`;

            // Push the order information to the array
            orderDetails.push(orderInfo);
        });

        // Get today's date
        let today = new Date();
        let formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

        // Calculate the total price with delivery
        let deliveryFee = 20000;
        let totalPriceWithDelivery = totalPrice + deliveryFee;

        // Create the final message And join all order details
        let finalMessage = "طلبات جديدة من المعسلات:\n"; // Initial message
        finalMessage += `تاريخ إرسال الطلب: ${formattedDate}\n\n`; // Add today's date
        finalMessage += orderDetails.join(''); // Join order details
        finalMessage += `الملاحظات: ${noteText}\n`;
        finalMessage += `___________________________________\n\n`;
        finalMessage += `- السعر الإجمالي لجميع الطلبات مع التوصيل: ${totalPriceWithDelivery.toLocaleString()} Rp\n\n`;
        finalMessage += `يجب إرسال موقعك لبدأ تنفيذ الطلب..\n\n`;
        finalMessage += `- جميع طرق الدفع متوفرة سواء اونلاين او كاش\n`;
        finalMessage += `- الدفع يكون مسبق او عند الإستلام\n`;
        finalMessage += `يرجى استخدام المعلومات التالية في حال كان الدفع بالتحويل البنكي\n`;
        finalMessage += `Bank Central Asia (BCA)\nName: samir\nNo Rekening: 1971025609\n\n`;
        finalMessage += `Dana: 087720208728`;

        // Encode the message using encodeURIComponent
        let encodedMessage = encodeURIComponent(finalMessage);

        // Create the WhatsApp URL
        let whatsappURL = `https://wa.me/6282246117155?text=${encodedMessage}`;

        // Open WhatsApp in a new window
        window.open(whatsappURL, '_blank');
    }
}
/* Up Shisha Up */






















/* Down Ads Videos And Images Down */
/* Array For Ads Videos/Images Use Only (imgSrc - videoSrc - videoThumbnailSrc) Words */
let koktel_adsVideosArray = [

    {
        videoSrc: "koktel_ads/video1.mp4",
        videoThumbnailSrc: "koktel_ads/خدمات-اندونيسيا.png",
    },

    {
        imgSrc: "koktel_ads/خدمات-اندونيسيا.png",
    },

]

if (document.getElementById('koktel_accounts_section')) {
    koktel_adsVideosArray.forEach((item) => {
        /* Get The Array Properties */
        let { imgSrc, videoSrc, videoThumbnailSrc } = item;

        /* Create The Card Container Div */
        let AdsVideoDiv = document.createElement("div");
        AdsVideoDiv.classList.add("koktel_ads_only_videos_div");

        let AdsImgDiv = document.createElement("div");
        AdsImgDiv.classList.add("koktel_ads_only_img_div");

        /* Create A Variable To Store The Inner HTML Code */
        let AdsVideoInfo;
        let AdsImgInfo;

        /* Check If The Object Has 'imgSrc' Or 'videoSrc' And Based On it, It Will Show Different Code */
        if (imgSrc) {
            /* Create The HTML Content For The Images */
            AdsImgInfo = `
            <img src=${imgSrc} alt="كوكتيل اندونيسيا - كوكتيل" title="كوكتيل اندونيسيا - كوكتيل" loading="lazy">
        `;

            /* Set The InnerHTML Code For the 'AdsVideoDiv' */
            AdsImgDiv.innerHTML = AdsImgInfo;


            /* Append The 'AdsVideoDiv' To the 'koktel_proof_area' */
            koktel_ads_videos_and_img_div.appendChild(AdsImgDiv);

            AdsImgDiv.onclick = function () {
                koktel_show_full_screen_image(imgSrc);
            };
        } else if (videoSrc) {
            /* Create The HTML Content For The Videos */
            AdsVideoInfo = `
            <img src=${videoThumbnailSrc} alt="كوكتيل اندونيسيا - كوكتيل" title="كوكتيل اندونيسيا - كوكتيل" class="koktel_ads_thumbnail_img" loading="lazy">
            <video src=${videoSrc} controls title="كوكتيل اندونيسيا - كوكتيل" class="koktel_ads_orignal_video"></video>
        `;

            /* Set The InnerHTML Code For the 'AdsVideoDiv' */
            AdsVideoDiv.innerHTML = AdsVideoInfo;

            /* Append The 'AdsVideoDiv' To the 'koktel_proof_area' */
            koktel_ads_videos_and_img_div.appendChild(AdsVideoDiv);

            /* Get The Elements So You Can Use it Later */
            let orignalVideos = document.getElementsByClassName('koktel_ads_orignal_video');
            let thumbnailImages = document.getElementsByClassName('koktel_ads_thumbnail_img');

            for (let i = 0; i < orignalVideos.length; i++) {
                orignalVideos[i].addEventListener('play', function () {
                    // Pause other videos
                    for (let j = 0; j < orignalVideos.length; j++) {
                        if (j !== i) {
                            orignalVideos[j].pause();
                            thumbnailImages[j].style.opacity = 1; // Make thumbnail visible
                        }
                    }
                    thumbnailImages[i].style.opacity = 0; // Hide thumbnail of the playing video
                });
            }
        }

    });
}
/* Up Ads Videos And Images Up */










/* Make The TextArea in The koktel_meal_info_section Resposnive With The Text Inside */
if (document.getElementById("koktel_meal_info_section") || document.getElementById("koktel_supermarket_order_details_body_id") || document.getElementById("koktel_pharmacy_order_details_body_id") || document.getElementById("koktel_choose_villa_area_section")) {
    // Select all elements with the class 'koktel_meal_info_note_textarea'
    let koktel_meal_info_note_textarea = document.querySelectorAll('.koktel_meal_info_note_textarea');

    // Iterate through each selected textarea element
    koktel_meal_info_note_textarea.forEach(textarea => {
        // Add an event listener for keyup events on each textarea
        textarea.addEventListener('keyup', e => {
            // Set the initial height of the textarea to 50px
            textarea.style.height = '50px';

            // Get the scroll height of the textarea
            let scHeight = e.target.scrollHeight;

            // Set the height of the textarea to match its scroll height
            textarea.style.height = `${scHeight}px`;
        });
    });
}


/* Open And Close Website Nav Bar */
if (document.getElementById("koktel_nav")) {
    /* Hide And Show nav Bar */
    let koktel_showNavOptions = () => {
        koktel_nav_options.style.opacity = "1";
        koktel_nav_options.style.height = "100%";
        koktel_nav_options.style.right = "0"; // Move from right (-50%) to the original position (0%)
        document.body.classList.add("nav-open");

        // Disable Scrolling
        document.documentElement.style.overflow = 'hidden';
    };

    let koktel_hideNavOptions = () => {
        koktel_nav_options.style.opacity = "0";
        koktel_nav_options.style.height = "0";
        koktel_nav_options.style.right = "-50%"; // Move to the right (-50%)
        document.body.classList.remove("nav-open");

        // Re-enable scrolling
        document.documentElement.style.overflow = 'auto';
    };

    koktel_nav.onclick = (event) => {
        event.stopPropagation();
        koktel_showNavOptions();
    };

    koktel_close_nav.onclick = (event) => {
        event.stopPropagation();
        koktel_hideNavOptions();
    };

    document.addEventListener('click', (event) => {
        if (!koktel_nav_options.contains(event.target) && event.target !== koktel_close_nav) {
            koktel_hideNavOptions();
        }
    });
}





/* Open WhatsApp Chat */
function koktel_whatsApp() {
    // Create the WhatsApp URL with the phone number.
    let whatsappURL = 'https://wa.me/+966509465975';

    // Open the WhatsApp chat window in a new tab.
    window.open(whatsappURL, '_blank');
}

/* Scroll Up To Top Website */
function koktel_scrollUpIcon() {
    document.getElementById('koktel_header').scrollIntoView({ top: 0, behavior: 'smooth' });
}

/* Open Gmail Contact */
function koktel_gmail() {
    let mailtoLink = "mailto:koktel.office@gmail.com";

    window.location.href = mailtoLink;
}

/* Open Loation Address */
function koktel_location() {
    // Address to search on Google Maps
    let address = "Jl. Mandalawangi No.7, RT.04/RW.04, Babakan, Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat 16128";

    // Encode the address to be used in the URL
    let encodedAddress = encodeURIComponent(address);

    // letruct the Google Maps URL
    let mapsUrl = "https://www.google.com/maps?q=" + encodedAddress;

    // Open the Google Maps link in a new tab/window
    window.open(mapsUrl, "_blank");
}

/* Page Load Header Fade Animation */
if (document.getElementById("koktel_header")) {
    setTimeout(function () {
        koktel_header.style.opacity = "1";
    }, 100);
}
