/* How To Manage This Website? */



/* in every times the page get refresh make sure to show the correct website language */
window.onload = function () {
    /* Call a function to show the correct website language */
    setWebsiteLanguage();
}




/* Function to adjust the website language based on the value in the CurrentWebsiteLanguage localstorage key */
setWebsiteLanguage = function () {
    // Check if the key "CurrentWebsiteLanguage" exists in localStorage
    if (!localStorage.getItem("CurrentWebsiteLanguage")) {
        // If it doesn't exist, create the key with the value "ar"
        localStorage.setItem("CurrentWebsiteLanguage", "ar");
    }



    // Get the value of "CurrentWebsiteLanguage" from localStorage
    let CurrentWebsiteLanguage = localStorage.getItem("CurrentWebsiteLanguage");


    /* In case if the current website language is set to Arabic */
    if (CurrentWebsiteLanguage === "ar") {
        // Get all elements with the class name "arLangText" and set them to display block
        let arLangElements = document.getElementsByClassName('arLangText');
        for (let i = 0; i < arLangElements.length; i++) {
            arLangElements[i].style.display = 'block';
        }

        // Get all elements with the class name "indoLangText" and set them to display none
        let indoLangElements = document.getElementsByClassName('indoLangText');
        for (let i = 0; i < indoLangElements.length; i++) {
            indoLangElements[i].style.display = 'none';
        }


        /* Styling For Restaurant Cards Inner Info */
        document.querySelectorAll('.koktel_restaurant_card_rate').forEach(element => {
            element.style.flexDirection = 'row';
        });



        /* Styling For Restaurant Meal Details */
        document.querySelectorAll('.koktel_orignal_price_div').forEach(element => {
            element.style.justifyContent = 'flex-start';
        });





        /* In case if the current website language is set to Indonesian */
    } else if (CurrentWebsiteLanguage === "id") {
        // Get all elements with the class name "arLangText" and set them to display block
        let arLangElements = document.getElementsByClassName('arLangText');
        for (let i = 0; i < arLangElements.length; i++) {
            arLangElements[i].style.display = 'none';
        }

        // Get all elements with the class name "indoLangText" and set them to display none
        let indoLangElements = document.getElementsByClassName('indoLangText');
        for (let i = 0; i < indoLangElements.length; i++) {
            indoLangElements[i].style.display = 'block';
        }




        /* Styling For Restaurant Cards Inner Info */
        document.querySelectorAll('.koktel_restaurant_card_rate').forEach(element => {
            element.style.flexDirection = 'row-reverse';
        });



        /* Styling For Restaurant Meal Details */
        document.querySelectorAll('.koktel_orignal_price_div').forEach(element => {
            element.style.justifyContent = 'flex-end';
        });

    }
}





/* Function to change the website language by adjusting the value of the CurrentWebsiteLanguage localstorage key */
function changeWebsiteLanguageFunction(clikcedLanguage) {

    if (clikcedLanguage === "ar") {
        // Set the value of "CurrentWebsiteLanguage" to "ar"
        localStorage.setItem("CurrentWebsiteLanguage", "ar");


    } else if (clikcedLanguage === "id") {
        // Set the value of "CurrentWebsiteLanguage" to "id"
        localStorage.setItem("CurrentWebsiteLanguage", "id");

    }

    // Call a function to make sure website using the correct language
    setWebsiteLanguage();



    // Re-enable scrolling
    document.documentElement.style.overflow = 'auto';

    // Hide And Reset All Data Stored inside The 'FullScreenGuidanceOverlay' Element
    let FullScreenGuidanceOverlay = document.getElementById('koktel_full_screen_guidance_overlay');
    document.body.removeChild(FullScreenGuidanceOverlay);
    FullScreenGuidanceOverlay.innerHTML = '';
}




/* Function For Showing Full Screen Images */
function koktel_show_full_screen_image(src) {

    // Disable scrolling
    document.documentElement.style.overflow = 'hidden';

    /* Create A Div To Contain The Big Image or Video */
    let FullScreenImgOverlay = document.createElement('div');
    FullScreenImgOverlay.classList.add("koktel_full_screen_img_overlay");


    /* Create A Button To Exit The Big Image or Video Page */
    let fullScreenOverlayExitButton = document.createElement('ion-icon');
    fullScreenOverlayExitButton.name = 'arrow-undo-circle-outline';
    fullScreenOverlayExitButton.className = 'koktel_full_screen_overlay_exit_button';
    fullScreenOverlayExitButton.style.zIndex = '1000'; // Ensure the exit button is above the overlay


    // Check if the source is an image or a video
    let isImage = /\.(gif|jpg|jpeg|tiff|png|svg)$/i.test(src);
    let isVideo = /\.(mp4|ogg|webm)$/i.test(src);

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

    /* Create A Button To Exit The Big Image or Video Page */
    let fullScreenOverlayExitButton = document.createElement('ion-icon');
    fullScreenOverlayExitButton.name = 'arrow-undo-circle-outline';
    fullScreenOverlayExitButton.className = 'koktel_full_screen_overlay_exit_button';
    fullScreenOverlayExitButton.style.zIndex = '1000'; // Ensure the exit button is above the overlay

    // Create Website Guidance Content
    let webGuidanceDiv = document.createElement('div');

    let webGuidanceText;

    /* Website Guidance */
    if (buttonClicked === 'how to use koktel website') {

        webGuidanceDiv.classList.add('web_guidance_div');

        webGuidanceText = `
            <a href="https://koktel.com" class="arLangText">1- في الصفحة الرئيسية انزل الى قسم اختيار الخدمة.</a>
            <a href="https://koktel.com" class="indoLangText">1- Di halaman beranda, buka bagian pemilihan layanan</a>


            <a class="arLangText">2- بعد اختيار الخدمة، خذ نظرة على تعليمات الخدمة.</a>
            <a class="indoLangText">2- Setelah memilih layanan, lihat petunjuk layanan</a>
        `;

        /* Website Language */
    } else if (buttonClicked === 'website language') {

        webGuidanceDiv.classList.add('web_guidance_div');

        webGuidanceText = `
            <a onclick="new Audio('success.mp3').play(); changeWebsiteLanguageFunction('ar')">العربية - Arabic</a>
            <a onclick="new Audio('success.mp3').play(); changeWebsiteLanguageFunction('id')">الإندونيسية - Indonesian</a>
        `;


        /* Restaurant Page Guidance */
    } else if (buttonClicked === 'how to use restaurant type page') {

        webGuidanceDiv.classList.add('web_guidance_div');

        webGuidanceText = `
            <a class="arLangText">1- اختار نوع المطعم.</a>
            <a class="indoLangText">1- Pilih jenis restoran</a>


            <a class="arLangText">2- اتبع تعليمات الطلب في صفحة قائمة المطعم.</a>
            <a class="indoLangText">2- Ikuti petunjuk pemesanan pada halaman menu restoran</a>
        `;

        /* Restaurant Menu Page Guidance */
    } else if (buttonClicked === 'how to use restaurant Menu page') {

        webGuidanceDiv.classList.add('web_guidance_div');

        webGuidanceText = `
            <a class="arLangText">1- اختار نوع الوجبة.</a>
            <a class="indoLangText">1- Pilih jenis makanannya</a>


            <a class="arLangText">2- بعد الإنهاء من اختيار الوجبات اذهب لصفحة طلباتك.</a>
            <a class="indoLangText">2- Setelah selesai memilih makanan, buka halaman pesanan Anda</a>


            <a class="arLangText">3- قم بتأكيد الطلب عن طريق إرسال الطلب عبر الواتساب.</a>
            <a class="indoLangText">3- Konfirmasikan pesanan dengan mengirimkan pesanan melalui WhatsApp</a>
        `;

        /* Pharmacy Page Guidance */
    } else if (buttonClicked === 'how to use products page') {

        webGuidanceDiv.classList.add('web_guidance_div');

        webGuidanceText = `
            <a class="arLangText">1- اختار المنتج وقم بإضافته.</a>
            <a class="indoLangText">1- Pilih produk dan tambah</a>


            <a class="arLangText">2- بعد الإنهاء من اختيار المنتجات اذهب لصفحة طلباتك.</a>
            <a class="indoLangText">2- Setelah menyelesaikan pemilihan produk, buka halaman pesanan Anda</a>


            <a class="arLangText">3- قم بتأكيد الطلب عن طريق إرسال الطلب عبر الواتساب.</a>
            <a class="indoLangText">3- Konfirmasikan pesanan dengan mengirimkan pesanan melalui WhatsApp</a>
        `;

        /* Services Guidance */
    } else if (buttonClicked === 'how to use services page') {

        webGuidanceDiv.classList.add('web_guidance_div');

        webGuidanceText = `
            <a class="arLangText">1- اختار نوع الخدمة المناسبة.</a>
            <a class="indoLangText">1- Pilih jenis layanan yang sesuai</a>


            <a class="arLangText">2- قم بتأكيد الطلب عن طريق ارسال الطلب عبر الواتساب.</a>
            <a class="indoLangText">2- Konfirmasikan pesanan dengan mengirimkan pesanan melalui WhatsApp</a>
        `;


        /* Filter Restaurant Type */
    } else if (buttonClicked === 'show restaurant type page') {

        webGuidanceDiv.classList.add('kokteindo_filter_products_type_div');

        webGuidanceText = `
            <a class="arLangText" onclick="koktel_scrollToRestaurantTypeId('kokteindo_special_restaurant_type')">مطاعم مميزة</a>
            <a class="indoLangText" onclick="koktel_scrollToRestaurantTypeId('kokteindo_special_restaurant_type')">Restoran Spesial</a>


            <a class="arLangText" onclick="koktel_scrollToRestaurantTypeId('kokteindo_fast_food_restaurant_type')">وجبات سريعة</a>
            <a class="indoLangText" onclick="koktel_scrollToRestaurantTypeId('kokteindo_fast_food_restaurant_type')">Makanan Cepat Saji</a>


            <a class="arLangText" onclick="koktel_scrollToRestaurantTypeId('kokteindo_arabic_restaurant_type')">اكلات عربية</a>
            <a class="indoLangText" onclick="koktel_scrollToRestaurantTypeId('kokteindo_arabic_restaurant_type')">Makanan Arab</a>


            <a class="arLangText" onclick="koktel_scrollToRestaurantTypeId('kokteindo_sea_food_restaurant_type')">اكلات بحرية</a>
            <a class="indoLangText" onclick="koktel_scrollToRestaurantTypeId('kokteindo_sea_food_restaurant_type')">Hidangan laut</a>

        `;

        /* Filter Koktel Meal Type */
    } else if (buttonClicked === 'show koktel meal type page') {

        webGuidanceDiv.classList.add('kokteindo_filter_products_type_div');

        webGuidanceText = `
            <a onclick="koktel_scrollToMealType('kokteindo_special_meal_type')">مميز</a>
            <a onclick="koktel_scrollToMealType('kokteindo_grilled_meal_type')">مشويات</a>
            <a onclick="koktel_scrollToMealType('kokteindo_sweet_meal_type')">حلى</a>
        `;

        /* Filter KFC Meal Type */
    } else if (buttonClicked === 'show kfc meal type page') {

        webGuidanceDiv.classList.add('kokteindo_filter_products_type_div');

        webGuidanceText = `
            <a onclick="koktel_scrollToMealType('kokteindo_special_meal_type')">مميز</a>
            <a onclick="koktel_scrollToMealType('kokteindo_combo_meal_type')">وجبات</a>
            <a onclick="koktel_scrollToMealType('kokteindo_burger_meal_type')">برجر</a>
            <a onclick="koktel_scrollToMealType('kokteindo_sandwich_meal_type')">ساندويتشات</a>
            <a onclick="koktel_scrollToMealType('kokteindo_potatoes_meal_type')">بطاط مثلي</a>
            <a onclick="koktel_scrollToMealType('kokteindo_drinks_type')">مشروبات</a>
            <a onclick="koktel_scrollToMealType('kokteindo_kids_meal_type')">وجبات الاطفال</a>
            <a onclick="koktel_scrollToMealType('kokteindo_breakfast_meal_type')">فطور</a>
            <a onclick="koktel_scrollToMealType('kokteindo_coffee_type')">قهوة</a>
            <a onclick="koktel_scrollToMealType('kokteindo_sweet_meal_type')">حلى</a>
        `;

        /* Filter Supermarket Product Type */
    } else if (buttonClicked === 'show pizza hut meal type page') {

        webGuidanceDiv.classList.add('kokteindo_filter_products_type_div');

        webGuidanceText = `
            <a onclick="koktel_scrollToMealType('kokteindo_special_meal_type')">مميز</a>
        `;

        /* Filter Supermarket Product Type */
    } else if (buttonClicked === 'show kamannana meal type page') {

        webGuidanceDiv.classList.add('kokteindo_filter_products_type_div');

        webGuidanceText = `
            <a onclick="koktel_scrollToMealType('kokteindo_main_meal_type')">الأطباق الرئيسية</a>
            <a onclick="koktel_scrollToMealType('kokteindo_grilled_meal_type')">مشويات</a>
            <a onclick="koktel_scrollToMealType('kokteindo_local_meal_type')">مقبلات وشعبيات</a>
            <a onclick="koktel_scrollToMealType('kokteindo_legumes_meal_type')">بقوليات</a>
            <a onclick="koktel_scrollToMealType('kokteindo_salads_meal_type')">سلطات</a>
            <a onclick="koktel_scrollToMealType('kokteindo_breakfast_meal_type')">فطور</a>
            <a onclick="koktel_scrollToMealType('kokteindo_soup_meal_type')">شوربة</a>
            <a onclick="koktel_scrollToMealType('kokteindo_bread_meal_type')">خبز</a>
            <a onclick="koktel_scrollToMealType('kokteindo_drinks_meal_type')">مشروبات</a>
            <a onclick="koktel_scrollToMealType('kokteindo_sweet_meal_type')">حلى</a>
        `;

        /* Filter Supermarket Product Type */
    } else if (buttonClicked === 'show raidan meal type page') {

        webGuidanceDiv.classList.add('kokteindo_filter_products_type_div');

        webGuidanceText = `
            <a onclick="koktel_scrollToMealType('kokteindo_main_meal_type')">الأطباق الرئيسية</a>
            <a onclick="koktel_scrollToMealType('kokteindo_grilled_meal_type')">مشويات</a>
            <a onclick="koktel_scrollToMealType('kokteindo_starter_meal_type')">مقبلات</a>
            <a onclick="koktel_scrollToMealType('kokteindo_legumes_meal_type')">بقوليات</a>
            <a onclick="koktel_scrollToMealType('kokteindo_side_meal_type')">أطباق جانبية</a>
            <a onclick="koktel_scrollToMealType('kokteindo_salad_meal_type')">سلطات</a>
            <a onclick="koktel_scrollToMealType('kokteindo_soup_meal_type')">شوربة</a>
            <a onclick="koktel_scrollToMealType('kokteindo_breakfast_meal_type')">فطور</a>
            <a onclick="koktel_scrollToMealType('kokteindo_sweet_meal_type')">حلى</a>
            <a onclick="koktel_scrollToMealType('kokteindo_drinks_meal_type')">مشروبات</a>
        `;

        /* Filter Supermarket Product Type */
    } else if (buttonClicked === 'show mamanoura meal type page') {

        webGuidanceDiv.classList.add('kokteindo_filter_products_type_div');

        webGuidanceText = `
            <a onclick="koktel_scrollToMealType('kokteindo_main_meal_type')">الأطباق الرئيسية</a>
            <a onclick="koktel_scrollToMealType('kokteindo_berbeque_meal_type')">مشويات</a>
            <a onclick="koktel_scrollToMealType('kokteindo_side_meal_type')">أطباق جانبية</a>
            <a onclick="koktel_scrollToMealType('kokteindo_starter_meal_type')">مقبلات</a>
            <a onclick="koktel_scrollToMealType('kokteindo_sandwich_meal_type')">ساندويتشات</a>
            <a onclick="koktel_scrollToMealType('kokteindo_pie_meal_type')">فطائر</a>
            <a onclick="koktel_scrollToMealType('kokteindo_bread_meal_type')">خبز</a>
            <a onclick="koktel_scrollToMealType('kokteindo_soup_meal_type')">شوربة</a>
            <a onclick="koktel_scrollToMealType('kokteindo_salad_meal_type')">سلطات</a>
            <a onclick="koktel_scrollToMealType('kokteindo_breakfast_meal_type')">فطور</a>
            <a onclick="koktel_scrollToMealType('kokteindo_sweet_meal_type')">حلى</a>
            <a onclick="koktel_scrollToMealType('kokteindo_drinks_meal_type')">مشروبات</a>
        `;

        /* Filter Supermarket Product Type */
    } else if (buttonClicked === 'show reem albawadi meal type page') {

        webGuidanceDiv.classList.add('kokteindo_filter_products_type_div');

        webGuidanceText = `
            <a onclick="koktel_scrollToMealType('kokteindo_carcass_meal_type')">ذبائح كاملة</a>
            <a onclick="koktel_scrollToMealType('kokteindo_main_meal_type')">الأطباق الرئيسية</a>
            <a onclick="koktel_scrollToMealType('kokteindo_berbeque_meal_type')">مشويات</a>
            <a onclick="koktel_scrollToMealType('kokteindo_local_meal_type')">أكلات شعبية</a>
            <a onclick="koktel_scrollToMealType('kokteindo_fish_meal_type')">سمك</a>
            <a onclick="koktel_scrollToMealType('kokteindo_appetizer_meal_type')">مقبلات</a>
            <a onclick="koktel_scrollToMealType('kokteindo_legumes_meal_type')">بقوليات</a>
            <a onclick="koktel_scrollToMealType('kokteindo_salad_meal_type')">سلطات</a>
            <a onclick="koktel_scrollToMealType('kokteindo_soup_meal_type')">شوربات</a>
            <a onclick="koktel_scrollToMealType('kokteindo_pastry_meal_type')">معجنات</a>
            <a onclick="koktel_scrollToMealType('kokteindo_breakfast_meal_type')">فطور</a>
            <a onclick="koktel_scrollToMealType('kokteindo_sweet_meal_type')">حلى</a>
            <a onclick="koktel_scrollToMealType('kokteindo_ice_cream_meal_type')">ايس كريم</a>
            <a onclick="koktel_scrollToMealType('kokteindo_drinks_meal_type')">مشروبات</a>
        `;

        /* Filter Supermarket Product Type */
    } else if (buttonClicked === 'show alriyan steak house meal type page') {

        webGuidanceDiv.classList.add('kokteindo_filter_products_type_div');

        webGuidanceText = `
            <a onclick="koktel_scrollToMealType('kokteindo_main_meal_type')">الأطباق الرئيسية</a>
            <a onclick="koktel_scrollToMealType('kokteindo_steak_meal_type')">ستيك لحم ودجاج</a>
            <a onclick="koktel_scrollToMealType('kokteindo_berbeque_meal_type')">مشويات</a>
            <a onclick="koktel_scrollToMealType('kokteindo_fried_meal_type')">المقليات</a>
            <a onclick="koktel_scrollToMealType('kokteindo_pizza_meal_type')">بيتزا</a>
            <a onclick="koktel_scrollToMealType('kokteindo_shawarma_meal_type')">سندويتشات</a>
            <a onclick="koktel_scrollToMealType('kokteindo_appetizer_meal_type')">مقبلات</a>
            <a onclick="koktel_scrollToMealType('kokteindo_salad_meal_type')">سلطات</a>
            <a onclick="koktel_scrollToMealType('kokteindo_soup_meal_type')">شوربات</a>
            <a onclick="koktel_scrollToMealType('kokteindo_pastry_meal_type')">معجنات</a>
            <a onclick="koktel_scrollToMealType('kokteindo_macaroni_meal_type')">معكرونات</a>
            <a onclick="koktel_scrollToMealType('kokteindo_manakis_meal_type')">مناقيش وفطائر</a>
            <a onclick="koktel_scrollToMealType('kokteindo_breakfast_meal_type')">فطور</a>
            <a onclick="koktel_scrollToMealType('kokteindo_sweet_meal_type')">حلى</a>
            <a onclick="koktel_scrollToMealType('kokteindo_ice_cream_meal_type')">ايس كريم</a>
            <a onclick="koktel_scrollToMealType('kokteindo_drinks_meal_type')">مشروبات</a>
        `;

        /* Filter Supermarket Product Type */
    } else if (buttonClicked === 'show supermarket product type page') {

        webGuidanceDiv.classList.add('kokteindo_filter_products_type_div');

        webGuidanceText = `
            <a class="arLangText" onclick="koktel_scrollToProductType('kokteindo_oil_product_section')">زيت</a>
            <a class="indoLangText" onclick="koktel_scrollToProductType('kokteindo_oil_product_section')">minyak</a>


            <a class="arLangText" onclick="koktel_scrollToProductType('kokteindo_indomie_product_section')">اندومي</a>
            <a class="indoLangText" onclick="koktel_scrollToProductType('kokteindo_indomie_product_section')">Indomie</a>
        `;

        /* Filter Bread Products Type */
    } else if (buttonClicked === 'show bread type page') {

        webGuidanceDiv.classList.add('kokteindo_filter_products_type_div');

        webGuidanceText = `
            <a class="arLangText" onclick="koktel_scrollToProductType('kokteindo_toast_product_section')">توست</a>
            <a class="indoLangText" onclick="koktel_scrollToProductType('kokteindo_toast_product_section')">Roti</a>


            <a class="arLangText" onclick="koktel_scrollToProductType('kokteindo_pies_product_section')">فطائر</a>
            <a class="indoLangText" onclick="koktel_scrollToProductType('kokteindo_pies_product_section')">Pai</a>
        `;

        /* Filter Medicine Product Type */
    } else if (buttonClicked === 'show medicine type page') {

        webGuidanceDiv.classList.add('kokteindo_filter_products_type_div');

        webGuidanceText = `
            <a class="arLangText" onclick="koktel_scrollToProductType('kokteindo_headache_product_section')">صداع الرأس</a>
            <a class="indoLangText" onclick="koktel_scrollToProductType('kokteindo_headache_product_section')">Sakit Kepala</a>


            <a class="arLangText" onclick="koktel_scrollToProductType('kokteindo_stomachache_product_section')">ألم البطن</a>
            <a class="indoLangText" onclick="koktel_scrollToProductType('kokteindo_stomachache_product_section')">Sakit Perut</a>


            <a class="arLangText" onclick="koktel_scrollToProductType('kokteindo_throat_product_section')">ألم الحلق</a>
            <a class="indoLangText" onclick="koktel_scrollToProductType('kokteindo_throat_product_section')">Sakit Tenggorokan</a>
        `;

        /* Filter Shisha Product Type */
    } else if (buttonClicked === 'show shisha type page') {

        webGuidanceDiv.classList.add('kokteindo_filter_products_type_div');

        webGuidanceText = `
            <a class="arLangText" onclick="koktel_scrollToProductType('kokteindo_alphakhir_product_section')">نكهات الفاخر</a>
            <a class="indoLangText" onclick="koktel_scrollToProductType('kokteindo_alphakhir_product_section')">Rasa Al-Fakher</a>


            <a class="arLangText" onclick="koktel_scrollToProductType('kokteindo_mazaya_product_section')">نكهات مزايا</a>
            <a class="indoLangText" onclick="koktel_scrollToProductType('kokteindo_mazaya_product_section')">Rasa Mazaya</a>


            <a class="arLangText" onclick="koktel_scrollToProductType('kokteindo_majalis_product_section')">نكهات مجالس</a>
            <a class="indoLangText" onclick="koktel_scrollToProductType('kokteindo_majalis_product_section')">Rasa Majlis</a>


            <a class="arLangText" onclick="koktel_scrollToProductType('kokteindo_shisha_product_section')">ارقيلات</a>
            <a class="indoLangText" onclick="koktel_scrollToProductType('kokteindo_shisha_product_section')">Shisha</a>


            <a class="arLangText" onclick="koktel_scrollToProductType('kokteindo_asset_product_section')">مستلزمات</a>
            <a class="indoLangText" onclick="koktel_scrollToProductType('kokteindo_asset_product_section')">Persediaan</a>
        `;
    }


    // Append All The elements inside 'FullScreenGuidanceOverlay'
    webGuidanceDiv.innerHTML = webGuidanceText;
    FullScreenGuidanceOverlay.appendChild(webGuidanceDiv);
    FullScreenGuidanceOverlay.appendChild(fullScreenOverlayExitButton);

    // Hide And Show Different Sections
    document.body.appendChild(FullScreenGuidanceOverlay);


    /* Call a function to show the correct website language */
    setWebsiteLanguage();


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


    // Create a new script element
    let scriptElement = document.createElement('script');

    // Set the src attribute to the desired JavaScript file
    scriptElement.src = "../../ionicons.js";

    // Append the script element to the body tag
    document.body.appendChild(scriptElement);


    // Arrays to store added numbers and current meal prices
    let addedNumbers = [];
    let currentMealPrices = [];

    /* Create the content for adding notes to the meal */
    let koktel_mealInfoOptionsDiv = document.createElement('div');
    koktel_mealInfoOptionsDiv.classList.add('koktel_meal_info_options_div');
    let koktel_mealInfoOptionsTitle = document.createElement('div');
    koktel_mealInfoOptionsTitle.classList.add('koktel_meal_info_options_title');
    let koktel_mealInfoOptionsTitleH2 = document.createElement('h2');
    koktel_mealInfoOptionsTitleH2.innerHTML = `<h2 class="arLangText">اضافة ملاحظة على الطلب <samp style="color: rgb(0, 255, 0);">اختياري</samp></h2><h2 class="indoLangText">Tambahkan catatan pada pesanan <samp style="color: rgb(0, 255, 0);">Opsional</samp></h2>`;
    koktel_mealInfoOptionsTitle.appendChild(koktel_mealInfoOptionsTitleH2);
    koktel_mealInfoOptionsDiv.appendChild(koktel_mealInfoOptionsTitle);
    koktel_meal_info_options_area_id.appendChild(koktel_mealInfoOptionsDiv);

    // Create textarea for user to add notes to the meal
    let koktel_mealInfoNote = document.createElement('div');
    koktel_mealInfoNote.classList.add('koktel_meal_info_note');
    let koktel_mealInfoNoteTextarea = `<textarea placeholder="ملاحظاتك هنا" class="koktel_meal_info_note_textarea arLangText" maxlength="100"></textarea><textarea placeholder="Catatan" class="koktel_meal_info_note_textarea indoLangText" maxlength="100"></textarea>`;
    koktel_mealInfoNote.innerHTML = koktel_mealInfoNoteTextarea;
    koktel_mealInfoOptionsDiv.appendChild(koktel_mealInfoNote);

    // Create title for selecting the number of items
    let koktel_mealInfoOptionsAmountTitle = document.createElement('div');
    koktel_mealInfoOptionsAmountTitle.classList.add('koktel_meal_info_options_amount_title');
    let koktel_mealInfoOptionsAmountTitleH2 = document.createElement('h2');
    koktel_mealInfoOptionsAmountTitleH2.innerHTML = `<h2 class="arLangText">عدد الطلب</h2><h2 class="indoLangText">Jumlah Pesanan</h2>`;
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
        <ion-icon name="remove-outline" id="koktel_minus_icon" style="color: red; opacity: 0; transition: opacity 0.1s ease-in-out" onclick="koktel_updateMealAmountNumber(this)"></ion-icon>`;
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
    koktel_totalPriceDiv.innerHTML = `<h6 class="arLangText" onclick="koktel_createOrderText()">إضافة الطلب<br> = ${currentMealPrice.toLocaleString()} Rp</h6><h6 class="indoLangText" onclick="koktel_createOrderText()">Tambah Permintaan<br> = ${currentMealPrice.toLocaleString()} Rp</h6>`;
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

        koktel_totalPriceDiv.innerHTML = `<h6 class="arLangText" onclick="koktel_createOrderText()">إضافة الطلب<br> = ${totalCurrentMealPrice.toLocaleString()} Rp</h6><h6 class="indoLangText" onclick="koktel_createOrderText()">Tambah Permintaan<br> = ${totalCurrentMealPrice.toLocaleString()} Rp</h6>`;

        /* Get The Minus Icon So You Can Change its Opacity Value */
        let minusIcon = document.getElementById('koktel_minus_icon');
        if (minusIcon) {
            if (mealAmountNumber > 1) {
                minusIcon.style.opacity = '1';
            } else {
                minusIcon.style.opacity = '0';
            }
        }


        /* Call a function to show the correct website language */
        setWebsiteLanguage();
    };




    // Function To Add Or Remove Numbers From (Not Only One Box Must Be Checked) Div
    function koktel_addMoreNumberToPrice(checkboxId, addedNumber) {
        let mealAmountNumberElement = document.getElementById('koktel_amountNumberElement');
        let mealAmountNumber = parseInt(mealAmountNumberElement.innerText);
        let clickedBox = document.getElementById(checkboxId);

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
        koktel_totalPriceDiv.innerHTML = `<h6 class="arLangText" onclick="koktel_createOrderText()">إضافة الطلب<br> = ${totalCurrentMealPrice.toLocaleString()} Rp</h6><h6 class="indoLangText" onclick="koktel_createOrderText()">Tambah Permintaan<br> = ${totalCurrentMealPrice.toLocaleString()} Rp</h6>`;

        koktel_orignal_price.innerText = `${totalCurrentMealPrice.toLocaleString()} Rp`;


        /* Call a function to show the correct website language */
        setWebsiteLanguage();
    }





    // Function To Add Or Remove Numbers From (Only One Box Must Be Checked) Div
    function koktel_resetPriceNumber() {
        let mealAmountNumberElement = document.getElementById('koktel_amountNumberElement');
        let mealAmountNumber = parseInt(mealAmountNumberElement.innerText);

        // Clear the currentMealPrices array
        currentMealPrices = [];

        // Iterate through the checked checkboxes and add their corresponding prices to currentMealPrices
        addedNumbers.forEach(number => {
            currentMealPrices.push(number * mealAmountNumber);
        });

        // Calculate total current meal price considering all added numbers
        let totalCurrentMealPrice = originalMealPrice * mealAmountNumber;
        currentMealPrices.forEach(price => {
            totalCurrentMealPrice += price;
        });

        // Ensure total current meal price never goes below the original meal price
        totalCurrentMealPrice = Math.max(totalCurrentMealPrice, originalMealPrice);

        // Update the displayed total price
        koktel_totalPriceDiv.innerHTML = `<h6 class="arLangText" onclick="koktel_createOrderText()">إضافة الطلب<br> = ${totalCurrentMealPrice.toLocaleString()} Rp</h6><h6 class="indoLangText" onclick="koktel_createOrderText()">Tambah Permintaan<br> = ${totalCurrentMealPrice.toLocaleString()} Rp</h6>`;

        koktel_orignal_price.innerText = `${totalCurrentMealPrice.toLocaleString()} Rp`;


        /* Call a function to show the correct website language */
        setWebsiteLanguage();
    }



    /* Store The Passed minusedNumber Value From Only One Box Must Be Checked Div */
    let clickedMinusedNumber = 0;

    /* Make The Old Box Unchecked And Only The New Box Checked */
    koktel_uncheckOldBox = function (clickedBoxId, minusedNumber) {
        // Get the clicked checkbox element
        let clickedCheckbox = document.getElementById(clickedBoxId);

        // Check if the clicked checkbox is being checked or unchecked
        if (clickedCheckbox.checked) {
            // Subtract the stored clickedMinusedNumber value from currentMealPrices
            let mealAmountNumberElement = document.getElementById('koktel_amountNumberElement');
            let mealAmountNumber = parseInt(mealAmountNumberElement.innerText);
            let index = addedNumbers.indexOf(clickedMinusedNumber);
            if (index !== -1) {
                currentMealPrices[index] -= clickedMinusedNumber * mealAmountNumber;
                if (currentMealPrices[index] <= 0) {
                    currentMealPrices.splice(index, 1);
                    addedNumbers.splice(index, 1);
                }
            }

            // Store the new minusedNumber value
            clickedMinusedNumber = minusedNumber;

            // Add the new minusedNumber to addedNumbers and corresponding currentMealPrices
            addedNumbers.push(minusedNumber);
            currentMealPrices.push(minusedNumber * mealAmountNumber);
        } else {
            // The checkbox is being unchecked, so subtract its value from currentMealPrices
            let index = addedNumbers.indexOf(minusedNumber);
            if (index !== -1) {
                currentMealPrices.splice(index, 1);
                addedNumbers.splice(index, 1);
            }
        }

        // Get the parent div of the clicked checkbox
        let parentDiv = clickedCheckbox.closest('.koktel_meal_info_options_div');

        // Get all checkboxes within the parent div
        let checkboxes = parentDiv.querySelectorAll('input[type="checkbox"]');

        // Uncheck all checkboxes except for the clicked checkbox
        checkboxes.forEach(checkbox => {
            if (checkbox.id !== clickedBoxId) {
                checkbox.checked = false;
            }
        });


        /* Call a function to show the correct website language */
        setWebsiteLanguage();
    }





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
                    // Create a box with the text "تأكد من ملئ جميع الخيارات"
                    let successBox = document.createElement('div');


                    // Get the value of "CurrentWebsiteLanguage" from localStorage
                    let CurrentWebsiteLanguage = localStorage.getItem("CurrentWebsiteLanguage");

                    /* In case if the current website language is set to Arabic */
                    if (CurrentWebsiteLanguage === "ar") {
                        successBox.textContent = 'يرجى ملئ الخيارات المطلوبة';

                        /* In case if the current website language is set to Indonesian */
                    } else if (CurrentWebsiteLanguage === "id") {
                        successBox.textContent = 'Silakan isi opsi yang diperlukan';

                    }

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
                        }, 1000); // Wait for the fade-out transition to complete (1.5s)

                    }, 1000); // Wait for 3 seconds before triggering fade-out
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


        /* Play a success sound effect */
        new Audio('https://koktel-indo.com/success.mp3').play();


        if (document.getElementById('koktel_order_page_icon_div')) {
            document.getElementById('koktel_order_page_icon_div').style.opacity = '1';

        } else {

            // Get the inner text of the meal name
            let ar_restaurantNameLink = document.getElementById('koktel_ar_restaurant_name').innerText;

            // Create Button To Show Orders Page
            let koktel_mealOrderIconDiv = document.createElement('div');
            koktel_mealOrderIconDiv.id = 'koktel_order_page_icon_div';
            let koktel_mealOrderIcon = `<a href='https://koktel-indo/صفحات-مطاعم-اندونيسيا/${ar_restaurantNameLink}/طلباتك-من-مطعم-${ar_restaurantNameLink}.html' id="koktel_order_page_icon"><ion-icon name="cart-outline"></ion-icon></a>`;
            koktel_mealOrderIconDiv.innerHTML = koktel_mealOrderIcon;
            koktel_mealOrderIconDiv.style.opacity = '0';
            document.body.appendChild(koktel_mealOrderIconDiv);
            setTimeout(() => {
                koktel_mealOrderIconDiv.style.opacity = '1';
            }, 1);
        }


        /* Get the raw restaurant name */
        let mealRestaurantRawName = document.getElementById('meal_restaurant_raw_name').innerText;


        // Get the inner text of the localstorage name
        let ar_restaurantLocalStorageName = document.getElementById('koktel_localstorage_restaurant_name').innerText;


        // Check if the element with id 'koktel_ar_meal_name' exist
        let ar_mealNameElement = document.getElementById('koktel_ar_meal_name');
        let ar_mealName = ar_mealNameElement ? ar_mealNameElement.innerText : '';


        // Check if the element with id 'koktel_indo_meal_name' exist
        let indo_mealNameElement = document.getElementById('koktel_indo_meal_name');
        let indo_mealName = indo_mealNameElement ? indo_mealNameElement.innerText : '';


        // Check if the element with id 'koktel_meal_details' exist
        let mealDetailsElement = document.getElementById('koktel_ar_meal_details');
        let ar_mealDetails = mealDetailsElement ? mealDetailsElement.innerText : '';


        // Check if the element with id 'koktel_indo_meal_details' exist
        let mealIndoDetailsElement = document.getElementById('koktel_indo_meal_details');
        let indo_mealDetails = mealIndoDetailsElement ? mealIndoDetailsElement.innerText : '';



        // Get all checked checkboxes
        let checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');

        // Get the Arabic order text from the custom 'ar_checked_order_text' attribute of each checked checkbox
        let ar_orderText = Array.from(checkedCheckboxes).map(checkbox => checkbox.getAttribute('ar_checked_order_text') || '').join('\n');

        // Get the Indonesian order text from the custom 'indo_checked_order_text' attribute of each checked checkbox
        let indo_orderText = Array.from(checkedCheckboxes).map(checkbox => checkbox.getAttribute('indo_checked_order_text') || '').join('\n');



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
            mealRestaurantRawName: mealRestaurantRawName,
            ar_mealName: ar_mealName,
            indo_mealName: indo_mealName,
            ar_mealDetails: ar_mealDetails,
            indo_mealDetails: indo_mealDetails,
            ar_orderText: ar_orderText,
            indo_orderText: indo_orderText, // Use the updated indo_orderText here
            mealAmountNumber: mealAmountNumber,
            noteText: noteText,
            totalCurrentMealPrice: totalCurrentMealPrice,
            mealImgSrc: mealImgSrc // Save the exact image source
        };

        // Get existing restaurant orders from localStorage or initialize as an empty array if not present
        let existingOrders = JSON.parse(localStorage.getItem(ar_restaurantLocalStorageName)) || [];

        // Append the new restaurant order object to the existing orders array
        existingOrders.push(order);

        // Save the updated orders back to localStorage
        localStorage.setItem(ar_restaurantLocalStorageName, JSON.stringify(existingOrders));





        // Create a box with the text "تمت اضافة الطلب"
        let successBox = document.createElement('div');


        // Get the value of "CurrentWebsiteLanguage" from localStorage
        let CurrentWebsiteLanguage = localStorage.getItem("CurrentWebsiteLanguage");

        /* In case if the current website language is set to Arabic */
        if (CurrentWebsiteLanguage === "ar") {
            successBox.textContent = 'تمت اضافة الطلب';

            /* In case if the current website language is set to Indonesian */
        } else if (CurrentWebsiteLanguage === "id") {
            successBox.textContent = 'Sudah Di Tampah';

        }


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


        /* Call a function to show the correct website language */
        setWebsiteLanguage();
    }


    /* Call a function to show the correct website language */
    setWebsiteLanguage();
}

/* Function To Create Restaurant Order Page Content And Final WhatsApp Message */
RestaurantOrderPageFunction = function (orderPageBodyIdName, indo_restaurantName, ar_restaurantName, localStorageName, deliveryFees, restaurantPageLinkName) {

    /* Create Content For The Basic Orders Page */
    let all_order_page_content = `
        <div class="koktel_order_details_div" id="koktel_order_details_div_id" style="display: flex;">
            <h1 id="koktel_restaurant_order_details_title_ar_id" class="koktel_order_details_title arLangText">طلباتك من ${ar_restaurantName}</h1>
            <h1 id="koktel_restaurant_order_details_title_indo_id" class="koktel_order_details_title indoLangText">Pesanan Anda Dari ${indo_restaurantName}</h1>


            <div id='koktel_order_finished_card_area_id' class='koktel_order_finished_card_area'></div>


            <div>
                <h4 id='koktel_delete_all_restaurant_orders_button' class='koktel_delete_all_orders_button_class arLangText' onclick='koktel_ensure_delete_orders_box(this)'>حذف جميع الطلبات</h4>
                <h4 id='koktel_delete_all_restaurant_orders_button' class='koktel_delete_all_orders_button_class indoLangText' onclick='koktel_ensure_delete_orders_box(this)'>Hapus semua pesanan</h4>
            </div>

            
            <div id="koktel_order_check_out_div" style="display: none;"></div>


            <div id='koktel_ensure_delete_all_orders_overlay' class='koktel_ensure_delete_orders_overlay' style='display:none'>
                <div class='koktel_ensure_delete_all_orders_div'>

                    <h6 class="arLangText">متاكد من حذف جميع الطلبات؟</h6>
                    <h6 class="indoLangText">Apakah Anda yakin ingin menghapus semua pesanan</h6>


                    <div id='koktel_ensure_delete_all_orders_answer_div'>

                        <h6 class="arLangText" onclick='koktel_delete_all_restaurant_orders_function("عودة")'>عودة</h6>
                        <h6 class="indoLangText" onclick='koktel_delete_all_restaurant_orders_function("عودة")'>Kembali</h6>


                        <h6 class="arLangText" onclick='koktel_delete_all_restaurant_orders_function("نعم")'>نعم</h6>
                        <h6 class="indoLangText" onclick='koktel_delete_all_restaurant_orders_function("نعم")'>Ya</h6>

                    </div>
                </div>
            </div>


            <a itemprop="url" href="https://koktel-indo.com/صفحات-مطاعم-اندونيسيا/${restaurantPageLinkName}/قائمة-طعام-${restaurantPageLinkName}.html"
            class="koktel_go_back_products_page_button">
            <ion-icon name="arrow-undo-circle-outline"></ion-icon></a>
    
        </div>`;

    /* Set The Inner HTML Code of The 'all_order_page_content' Inside The ${orderPageBodyIdName} Element */
    document.getElementById(orderPageBodyIdName).innerHTML = all_order_page_content;






    // Function to render the orders
    function renderOrders() {
        // Get the container for displaying orders
        koktel_order_finished_card_area_id.innerHTML = ''; // Clear the existing content

        // Get The orders from localStorage
        let orders = JSON.parse(localStorage.getItem(localStorageName));



        // Check if orders is empty or null
        if (!orders || orders.length === 0) {
            // Remove the orders key from localStorage
            localStorage.removeItem(localStorageName);


            // Create the element for each order
            let localStorageOrderCardFinished = document.createElement('div');
            localStorageOrderCardFinished.classList.add('koktel_order_finished_card');
            koktel_order_finished_card_area_id.innerHTML = `
            <h1 class="koktel_there_is_no_orders_text_class arLangText">لاتوجد طلبات بعد..<ion-icon name="telescope-outline"></ion-icon></h1>
            <h1 class="koktel_there_is_no_orders_text_class indoLangText"><ion-icon name="telescope-outline"></ion-icon>..Belum Ada Permintaan</h1>
        `;

            koktel_restaurant_order_details_title_ar_id.innerText = `طلباتك من ${ar_restaurantName}`;
            koktel_restaurant_order_details_title_indo_id.innerText = `Pesanan Anda Dari ${indo_restaurantName}`;

            // Hide These Elements if There is No Any Restaurant Orders
            document.createElement('koktel_delete_all_restaurant_orders_button').style.display = 'none';
            document.getElementById('koktel_order_check_out_div').innerHTML = '';


            /* Call a function to show the correct website language */
            setWebsiteLanguage();
        }


        /* in Case if There is Data in The Orders Key */
        if (localStorage.getItem(localStorageName)) {

            // Parse orders from localStorage
            let orders = JSON.parse(localStorage.getItem(localStorageName));

            // Loop through each order data
            orders.forEach((orderData, index) => {
                // Create the element for each order
                let localStorageOrderCardFinished = document.createElement('div');
                localStorageOrderCardFinished.classList.add('koktel_order_finished_card');

                // letruct the inner HTML content for the order
                let localStorageOrderCardContent = `
                <h2 class="arLangText" onclick="koktel_show_order_details_page(${index})" style=" cursor: pointer;">طلب رقم ${index + 1}</h2>
                <h2 class="indoLangText" onclick="koktel_show_order_details_page(${index})" style=" cursor: pointer;">Nomor Pesanan ${index + 1}</h2>


                    <img src=${orderData.mealImgSrc} alt="مطاعم اندونيسيا - كوكتيل" title="مطاعم اندونيسيا - كوكتيل" onclick="koktel_show_order_details_page(${index})" loading="lazy">

                <div>

                    <h3 class="arLangText" onclick="koktel_show_order_details_page(${index})" style="color: rgb(0, 255, 0);">الإجمالي = ${orderData.totalCurrentMealPrice.toLocaleString()}</h3>
                    <h3 class="indoLangText" onclick="koktel_show_order_details_page(${index})" style="color: rgb(0, 255, 0);">Total = ${orderData.totalCurrentMealPrice.toLocaleString()}</h3>

                </div>
                <div class='koktel_orderFinished_info_and_delete'>

                    <h3 class="arLangText" id="koktel_order_details_h3" onclick="koktel_show_order_details_page(${index})">تفاصيل الطلب</h3>
                    <h3 class="indoLangText" id="koktel_order_details_h3" onclick="koktel_show_order_details_page(${index})">Detail Pesanan</h3>


                    <h3 class="arLangText" onclick="koktel_ensure_delete_orders_box('حذف الطلب', ${index})" style="color: red;">حذف الطلب</h3>
                    <h3 class="indoLangText" onclick="koktel_ensure_delete_orders_box('حذف الطلب', ${index})" style="color: red;">Hapus</h3>

                </div>
                
                
                <div id='koktel_ensure_delete_this_orders_overlay_${index}' class='koktel_ensure_delete_orders_overlay' style='display:none'>
                    <div class='koktel_ensure_delete_all_orders_div'>

                        <h6 class="arLangText">متاكد من حذف هذا الطلب؟</h6>
                        <h6 class="indoLangText">Apakah Anda yakin ingin menghapus permintaan ini?</h6>


                        <div id='koktel_ensure_delete_all_orders_answer_div'>

                            <h6 class="arLangText" onclick='koktel_delete_this_orders_function("عودة", ${index})'>عودة</h6>
                            <h6 class="indoLangText" onclick='koktel_delete_this_orders_function("عودة", ${index})'>Kembali</h6>


                            <h6 class="arLangText" onclick='koktel_delete_this_orders_function("نعم", ${index})'>نعم</h6>
                            <h6 class="indoLangText" onclick='koktel_delete_this_orders_function("نعم", ${index})'>Ya</h6>

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


            /* Calculate total price and tax amount */
            let totalPriceSum = orders.reduce((acc, order) => acc + parseFloat(order.totalCurrentMealPrice.replace(/,/g, '')), 0);
            let taxAmount = totalPriceSum * 0.1;


            // Calculate the total including tax and delivery charge
            let lastTotalPrice = totalPriceSum + taxAmount + deliveryFees;


            /* Create The Bill Card Content */
            let koktel_order_check_out_whatsApp_content = `
                <div id="koktel_order_check_out_whatsApp_div" onclick="koktel_createFinalWhatsAppMessage()">
                    <ion-icon name="logo-whatsapp"></ion-icon>

                    <h5 class="arLangText">إرسال الطلبات</h5>
                    <h5 class="indoLangText">Kirim Permintaan</h5>

                </div>
                <div id="koktel_order_check_out_bill_div">

                    <h6 id="koktel_order_check_out_bill_title" class="arLangText">الفاتورة</h6>
                    <h6 id="koktel_order_check_out_bill_title" class="indoLangText">Tagihan</h6>



                    ${orders.map((order, index) => `
                        <h6 id="koktel_order_check_out_bill_details_text" class="arLangText">المنتج رقم ${index + 1} : ${order.totalCurrentMealPrice.toLocaleString()}</h6>
                        <h6 id="koktel_order_check_out_bill_details_text" class="indoLangText">Produk Nomor ${index + 1} : ${order.totalCurrentMealPrice.toLocaleString()}</h6>
                    `).join('')}
            
                    <h6 class="koktel_order_check_out_bill_total_price arLangText" style="border-top-right-radius: 7px; border-top-left-radius: 7px;">الضريبة : ${taxAmount.toLocaleString()} Rp</h6>
                    <h6 class="koktel_order_check_out_bill_total_price indoLangText" style="border-top-right-radius: 7px; border-top-left-radius: 7px;">Pajak : ${taxAmount.toLocaleString()} Rp</h6>
            
                    <h6 class="koktel_order_check_out_bill_total_price arLangText">التوصيل : ${deliveryFees.toLocaleString()} Rp</h6>
                    <h6 class="koktel_order_check_out_bill_total_price indoLangText">Pengiriman : ${deliveryFees.toLocaleString()} Rp</h6>
            
                    <h6 class="koktel_order_check_out_bill_total_price arLangText" style="border-bottom-right-radius: 7px; border-bottom-left-radius: 7px;">الإجمالي : ${lastTotalPrice.toLocaleString()} Rp</h6>
                    <h6 class="koktel_order_check_out_bill_total_price indoLangText" style="border-bottom-right-radius: 7px; border-bottom-left-radius: 7px;">Total : ${lastTotalPrice.toLocaleString()} Rp</h6>
                </div>
            `;


            koktel_restaurant_order_details_title_ar_id.innerHTML = `طلباتك من ${ar_restaurantName} <spam class="koktel_orders_ready_to_send_text">جاهزة للإرسال</spam>`;
            koktel_restaurant_order_details_title_indo_id.innerHTML = `Pesanan Anda Dari ${indo_restaurantName} <spam class="koktel_orders_ready_to_send_text">Siap Dikirim</spam>`;

            /* Show The Following Code if There is Any Data in The ${localStorageName} Key */
            document.getElementById('koktel_order_check_out_div').innerHTML = koktel_order_check_out_whatsApp_content;
            document.getElementById('koktel_order_check_out_div').style.display = 'flex';
            document.getElementById('koktel_delete_all_restaurant_orders_button').style.display = 'block';
        }

    }


    // Call renderOrders function to initially render orders
    renderOrders();







    /* Function To Show The Ensure Delete Box */
    koktel_ensure_delete_orders_box = function (clickedDeleteButton, index) {
        if (clickedDeleteButton === 'حذف الطلب') {
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
    koktel_delete_all_restaurant_orders_function = function (clickedDeleteAnswer) {

        /* First Check if The Clicked Button is 'عودة' or 'نعم' */
        if (clickedDeleteAnswer === 'عودة') {
            /* Hide The Ensure Box Element */
            document.getElementById('koktel_ensure_delete_all_orders_overlay').style.display = 'none';

        } else {

            /* Play a success sound effect */
            new Audio('https://koktel-indo.com/success.mp3').play();


            /* Hide The Ensure Box Element */
            document.getElementById('koktel_ensure_delete_all_orders_overlay').style.display = 'none';

            // Clear All Data in LocalStorage
            localStorage.removeItem(localStorageName);

            // Create a box with the text "تم حذف جميع الطلبات"
            let successBox = document.createElement('div');

            // Get the value of "CurrentWebsiteLanguage" from localStorage
            let CurrentWebsiteLanguage = localStorage.getItem("CurrentWebsiteLanguage");

            /* In case if the current website language is set to Arabic */
            if (CurrentWebsiteLanguage === "ar") {
                successBox.textContent = `تم حذف جميع طلباتك من ${ar_restaurantName}`;

            } else if (CurrentWebsiteLanguage === "id") {
                successBox.textContent = `Semua pesanan Anda dari ${indo_restaurantName} telah dihapus`;

            }



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
                }, 1000); // Wait for the fade-out transition to complete (1.5s)
            }, 1000); // Wait for 3 seconds before triggering fade-out


            // Call renderOrders function to initially render orders
            renderOrders();
        }

        // Re-enable scrolling
        document.documentElement.style.overflow = 'auto';
    }






    /* Function To Delete Only One Order Data */
    koktel_delete_this_orders_function = function (clickedDeleteAnswer, indexNumber) {

        if (clickedDeleteAnswer === 'عودة') {
            /* Hide The Ensure Box Element */
            document.getElementById(`koktel_ensure_delete_this_orders_overlay_${indexNumber}`).style.display = 'none';
        } else {

            /* Play a success sound effect */
            new Audio('https://koktel-indo.com/success.mp3').play();


            /* Hide The Ensure Box Element */
            document.getElementById(`koktel_ensure_delete_this_orders_overlay_${indexNumber}`).style.display = 'none';

            /* Store The ${localStorageName} Key Data in A Variable */
            let orders = JSON.parse(localStorage.getItem(localStorageName));

            // Check if orders exist and if the index is valid
            if (orders && indexNumber >= 0 && indexNumber < orders.length) {
                // Remove the order with the specified index
                orders.splice(indexNumber, 1);

                // Save the updated orders back to localStorage
                localStorage.setItem(localStorageName, JSON.stringify(orders));

                // Refresh the page or update the display to reflect the changes
                renderOrders();

                // Create a box with the text "تم حذف الطلب"
                let successBox = document.createElement('div');


                // Get the value of "CurrentWebsiteLanguage" from localStorage
                let CurrentWebsiteLanguage = localStorage.getItem("CurrentWebsiteLanguage");

                /* In case if the current website language is set to Arabic */
                if (CurrentWebsiteLanguage === "ar") {
                    successBox.textContent = `تم حذف الطلب`;

                } else if (CurrentWebsiteLanguage === "id") {
                    successBox.textContent = `Permintaan Telah Dihapus`;

                }

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
                    }, 2000); // Wait for the fade-out transition to complete (1.5s)
                }, 700); // Wait for 3 seconds before triggering fade-out
            }


            /* Can a function to show the correct website language */
            setWebsiteLanguage();
        }

        // Re-enable scrolling
        document.documentElement.style.overflow = 'auto';
    }







    // Function to show order details
    koktel_show_order_details_page = function (orderIndexNumber) {
        // Retrieve orders from localStorage
        let orders = JSON.parse(localStorage.getItem(localStorageName));
        if (!orders) return; // Exit if there are no orders

        let order = orders[orderIndexNumber];
        if (!order) return; // Exit if the order is not found

        // Create a new div element to hold the order details content
        let orderDetailsContainer = document.createElement('div');
        orderDetailsContainer.id = 'koktel_order_details_text_div';

        // Get the current website language from localStorage
        let currentWebsiteLanguage = localStorage.getItem('CurrentWebsiteLanguage');

        // Set the variables based on the current language
        let mealDetails = currentWebsiteLanguage === 'ar' ? order.ar_mealDetails : order.indo_mealDetails;
        let orderText = currentWebsiteLanguage === 'ar' ? order.ar_orderText : order.indo_orderText;
        let noteText = currentWebsiteLanguage === 'ar' ? order.noteText : order.indo_noteText;

        // Create order details HTML content
        let orderDetailsContent = `
            <div id="koktel_order_details_text_img">
                <img src=${order.mealImgSrc} alt="مطاعم اندونيسيا - كوكتيل" title="مطاعم اندونيسيا - كوكتيل" id="koktel_web_logo_no_moving" onclick="koktel_show_full_screen_image(this.src)" loading="lazy">
            </div>

            <div>
                <h1 class="koktel_order_details_title arLangText">تفاصيل الطلب رقم ${orderIndexNumber + 1}</h1>
                <h1 class="koktel_order_details_title indoLangText">Detail Pesanan No ${orderIndexNumber + 1}</h1>
            </div>

            <div id="koktel_order_details_text_background">
                ${order.mealRestaurantRawName ? `<h4>${order.mealRestaurantRawName}</h4>` : ''}
                ${order.ar_mealName ? `<h4 class="arLangText">${order.ar_mealName}</h4>` : ''}
                ${order.indo_mealName ? `<h4 class="indoLangText">${order.indo_mealName}</h4>` : ''}


                ${mealDetails ? `<h4>${mealDetails}</h4>` : ''}
                ${orderText ? orderText.split('\n').map(line => `<h4>${line}</h4>`).join('') : ''}
                ${noteText ? `<h4 class="arLangText">الملاحظة: ${noteText}</h4><h4 class="indoLangText">Catatan: ${noteText}</h4>` : ''}

                <h4 class="arLangText" style="color: rgb(255, 166, 0);">عدد الطلب: ${order.mealAmountNumber}</h4>
                <h4 class="indoLangText" style="color: rgb(255, 166, 0);">Jumlah Pesanan: ${order.mealAmountNumber}</h4>

                <h4 class="arLangText" style="color: rgb(0, 255, 0);">سعر الطلب = ${order.totalCurrentMealPrice}</h4>
                <h4 class="indoLangText" style="color: rgb(0, 255, 0);">Harganya = ${order.totalCurrentMealPrice}</h4>
            </div>

            <div id="koktel_order_details_text_bottom_button_div">
                <h5 class="arLangText" onclick="koktel_hide_order_details_page()">عودة</h5>
                <h5 class="indoLangText" onclick="koktel_hide_order_details_page()">Kembali</h5>

                <h5 class="arLangText" style="color: red;" onclick="koktel_ensure_delete_text_orders_box()">حذف الطلب</h5>
                <h5 class="indoLangText" style="color: red;" onclick="koktel_ensure_delete_text_orders_box()">Hapus</h5>
            </div>

            <div id='koktel_ensure_delete_text_orders_overlay' class='koktel_ensure_delete_orders_overlay' style='display:none'>
                <div class='koktel_ensure_delete_all_orders_div'>
                    <h6 class="arLangText">متاكد من حذف هذا الطلب؟</h6>
                    <h6 class="indoLangText">Apakah Anda yakin ingin menghapus permintaan ini</h6>

                    <div id='koktel_ensure_delete_all_orders_answer_div'>
                        <h6 class="arLangText" onclick='koktel_delete_text_orders_function("عودة")'>عودة</h6>
                        <h6 class="indoLangText" onclick='koktel_delete_text_orders_function("عودة")'>Kembali</h6>

                        <h6 class="arLangText" onclick='koktel_delete_text_orders_function("نعم", ${orderIndexNumber})'>نعم</h6>
                        <h6 class="indoLangText" onclick='koktel_delete_text_orders_function("نعم", ${orderIndexNumber})'>Ya</h6>
                    </div>
                </div>
            </div>
        `;

        // Hide the order list container
        document.getElementById('koktel_order_details_div_id').style.display = 'none';

        // Append The Following Elements To Each Other
        orderDetailsContainer.innerHTML = orderDetailsContent;
        document.getElementById(orderPageBodyIdName).appendChild(orderDetailsContainer);

        // Append the overlay to the body to ensure it covers the entire screen
        document.body.appendChild(document.getElementById('koktel_ensure_delete_text_orders_overlay'));


        /* Call a function to make sure to set the correct website language */
        setWebsiteLanguage();
    }




    // Function to hide order details
    koktel_hide_order_details_page = function () {

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
        if (clickedButtonAnswer === 'عودة') {
            /* Hide The Ensure Box Element */
            document.getElementById('koktel_ensure_delete_text_orders_overlay').style.display = 'none';

        } else {

            /* Play a success sound effect */
            new Audio('https://koktel-indo.com/success.mp3').play();


            /* Hide The Ensure Box Element */
            document.getElementById('koktel_ensure_delete_text_orders_overlay').style.display = 'none';

            /* Store The Orders Key Data in A Variable */
            let orders = JSON.parse(localStorage.getItem(localStorageName));

            // Remove the order with the specified index
            orders.splice(indexNumber, 1);

            // Save the updated orders back to localStorage
            localStorage.setItem(localStorageName, JSON.stringify(orders));

            // Check if orders is empty or null
            if (!orders || orders.length === 0) {
                // Remove the orders key from localStorage
                localStorage.removeItem(localStorageName);
            }

            // Refresh the page or update the display to reflect the changes
            renderOrders();

            // Create a box with the text "تم حذف جميع الطلبات"
            let successBox = document.createElement('div');


            // Get the value of "CurrentWebsiteLanguage" from localStorage
            let CurrentWebsiteLanguage = localStorage.getItem("CurrentWebsiteLanguage");

            /* In case if the current website language is set to Arabic */
            if (CurrentWebsiteLanguage === "ar") {
                successBox.textContent = 'تم حذف الطلب';

                /* In case if the current website language is set to Indonesian */
            } else if (CurrentWebsiteLanguage === "id") {
                successBox.textContent = 'Permintaan Telah Dihapus';

            }


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
                }, 1000); // Wait for the fade-out transition to complete (1.5s)
            }, 1000); // Wait for 3 seconds before triggering fade-out


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



    /* Function To Create The Final WhatsApp Message */
    koktel_createFinalWhatsAppMessage = function () {
        // Retrieve orders from localStorage
        let orders = JSON.parse(localStorage.getItem(localStorageName));

        // Initialize an array to store order details
        let orderDetails = [];

        // Initialize a variable to store the grand total
        let grandTotal = 0;

        // Loop through each order and extract relevant information
        orders.forEach((order, index) => {
            // Replace comma and parse to float
            let totalWithDelivery = parseFloat(order.totalCurrentMealPrice.replace(/,/g, ''));
            grandTotal += totalWithDelivery;



            /* in case the 'index' in not 0 then make sure to set a good WhatsApp message structre */
            let indo_orderInfo = `Pesanan Nomor ${index + 1}\n`;
            let ar_orderInfo = `Pesanan Nomor ${index + 1}\n`;

            // Check if indo_mealName exists and has a value
            if (order.indo_mealName) {

                orderInfo += `@- ${order.indo_mealName}`;
            }



            if (order.indo_mealDetails) {

                orderInfo += `- Deskripsi: ${order.indo_mealDetails}\n`;
            }

            if (order.ar_orderText) {
                // Split order.ar_orderText by newline character and prepend each line with its index number
                orderInfo += `@ ${order.indo_orderText.split('\n').map((line) => `${line}`).join('\n@ ')}`;
            }





            orderInfo += `\n- Jumlah Pesanan: ${order.mealAmountNumber}\n`;

            // Conditionally include the noteText if it exists
            if (order.noteText) {
                orderInfo += `- Catatan: ${order.noteText}\n`;
            }

            orderInfo += `- Harganya: ${totalWithDelivery.toLocaleString()} Rp\n\n`;

            orderInfo += `الطلب رقم ${index + 1}\n`;


            // Check if ar_mealName exists and has a value
            if (order.ar_mealName) {

                orderInfo += `@- ${order.ar_mealName}`;
            }





            if (order.ar_mealDetails) {

                orderInfo += `- الوصف: ${order.ar_mealDetails}\n`;
            }

            if (order.ar_orderText) {
                // Split order.ar_orderText by newline character and prepend each line with its index number
                orderInfo += `@ ${order.ar_orderText.split('\n').map((line) => `${line}`).join('\n@ ')}`;
            }


            orderInfo += '\n';


            orderInfo += `- عدد الطلب: ${order.mealAmountNumber}\n`;

            // Conditionally include the noteText if it exists
            if (order.noteText) {
                orderInfo += `- الملاحظات: ${order.noteText}\n`;
            }

            orderInfo += `- السعر: ${totalWithDelivery.toLocaleString()} Rp\n`;
            orderInfo += `___________________________________\n\n`;

            // Push the order information to the array
            orderDetails.push(orderInfo);

        });




        // Get today's date
        let today = new Date();
        let formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

        // Calculate the total price sum and tax amount
        let totalPriceSum = orders.reduce((acc, order) => acc + parseFloat(order.totalCurrentMealPrice.replace(',', '')), 0);
        let taxAmount = totalPriceSum * 0.1;

        // Calculate the grand total
        grandTotal += taxAmount + deliveryFees;

        // Create the final message and join all order details
        let main_finalMessage = `طلبات جديدة من مطعم ${ar_restaurantName}:\n`; // Initial message
        main_finalMessage += `تاريخ إرسال الطلب: ${formattedDate}\n\n`; // Add today's date
        finalMessage += `___________________________________\n\n`;
        finalMessage += orderDetails.join('');

        // Append the tax amount, delivery charge, and grand total to the final message
        finalMessage += `- Pajak: ${taxAmount.toLocaleString()} Rp\n`;
        finalMessage += `- Kiriman: ${deliveryFees.toLocaleString()} Rp\n`;
        finalMessage += `- Harga Akhir: ${grandTotal.toLocaleString()} Rp\n\n`;

        finalMessage += `- الضريبة: ${taxAmount.toLocaleString()} Rp\n`;
        finalMessage += `- التوصيل: ${deliveryFees.toLocaleString()} Rp\n`;
        finalMessage += `- الإجمالي: ${grandTotal.toLocaleString()} Rp\n\n`;


        finalMessage += `Harus Kirim Lokasinya Untuk Mulai Pemenuhan Pesanan..\n`;
        finalMessage += `يجب إرسال موقعك لبدأ تنفيذ الطلب..\n\n`;


        finalMessage += `- Semua Metode Bayaran Tersedia, Baik Online Atau Tunai\n`;
        finalMessage += `- جميع طرق الدفع متوفرة سواء اونلاين او كاش\n\n`;


        finalMessage += `Bank Central Asia (BCA)\nName: samir\nNo Rekening: 1971025609\n\n`;
        finalMessage += `Dana: 087720208728`;



        // Target all elements with the class name 'order_pdf_content_container_div'
        let finalPdfContainerDivs = document.getElementById('final_order_pdf_content_container_div').innerHTML = '';



        let finalPdfContainerDivsContent = `
        
            <h1></h1>

            <div>
            

            
            </div>

        `;


        // Create an h1 element and set its content to the finalMessage
        let firstH1Element = document.createElement('h1');
        firstH1Element.innerText = indo_finalMessage;

        // Create an h1 element and set its content to the finalMessage
        let secondH1Element = document.createElement('h1');
        secondH1Element.innerText = ar_finalMessage;

        // Append both ar and indo h1 element to the 'finalPdfContainerDivs' div
        finalPdfContainerDivs.appendChild(firstH1Element);
        finalPdfContainerDivs.appendChild(secondH1Element);
    }
}



/* Send Data To The 'RestaurantOrderPageFunction' Function To Create Order Page Content */
if (document.getElementById("koktel_kamannana_order_page_body")) {
    RestaurantOrderPageFunction('koktel_kamannana_order_page_body', 'Kamannana', 'كامننا', 'Kamannana_LocalStorage', 30000, 'كامننا');
}

if (document.getElementById("koktel_raidan_order_page_body")) {
    RestaurantOrderPageFunction('koktel_raidan_order_page_body', 'Raidan', 'ريدان', 'Raidan_LocalStorage', 20000, 'ريدان');
}

if (document.getElementById("koktel_mamanoura_order_page_body")) {
    RestaurantOrderPageFunction('koktel_mamanoura_order_page_body', 'Mamanoura', 'ماما نورة', 'Mamanoura_LocalStorage', 20000, 'ماما-نورة');
}

if (document.getElementById("koktel_reem_albawadi_order_page_body")) {
    RestaurantOrderPageFunction('koktel_reem_albawadi_order_page_body', 'Reem Albawadi', 'ريم البوادي', 'Reem_Albawadi_LocalStorage', 20000, 'ريم-البوادي');
}

if (document.getElementById("koktel_koktel_order_page_body")) {
    RestaurantOrderPageFunction('koktel_koktel_order_page_body', 'Koktel', 'Koktel_LocalStorage', 20000, 'كوكتيل');
}

if (document.getElementById("koktel_alriyan_steak_house_order_page_body")) {
    RestaurantOrderPageFunction('koktel_alriyan_steak_house_order_page_body', 'Alriyan Steak House', 'الريان ستيك هاوس', 'Alriyan_Steak_House_LocalStorage', 20000, 'الريان-ستيك-هاوس');
}

if (document.getElementById("koktel_pizza_hut_order_page_body")) {
    RestaurantOrderPageFunction('koktel_pizza_hut_order_page_body', 'Pizza Hut', 'بيتزا هت', 'Pizza_Hut_LocalStorage', 20000, 'بيتزا-هت');
}

if (document.getElementById("koktel_kfc_order_page_body")) {
    RestaurantOrderPageFunction('koktel_kfc_order_page_body', 'KFC', 'كنتاكي', 'KFC_LocalStorage', 20000, 'كنتاكي');
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
        let productName = parentCard.querySelector('.koktel_product_name_div h1').textContent.trim();

        // Extract Indo Product Name
        let indo_productName = parentCard.querySelector('.koktel_product_name_div h2').textContent.trim();

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
            supermarkerBottomCountertext.innerText = `إضافة الطلب = ${addedNumber.toLocaleString()} Rp`;

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
                            indo_productName: product.indo_productName,
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
                            indo_productName: product.indo_productName,
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
                    }, 1000); // Wait for the fade-out transition to complete (1.5s)

                    // Refresh The Page After Adding The Selected Orders
                    setTimeout(() => {
                        location.reload();
                    }, 500);
                }, 1000); // Wait for 3 seconds before triggering fade-out


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
            totalPriceElement.innerText = `إضافة الطلب = ${newTotal.toLocaleString()} Rp`;

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
        clickedProducts[productName] = { productName, indo_productName, currentCount, totalValue, imgSrc };
    }


    // Function To Handle The Click Event On Ion-Icon (Minus) Element
    koktel_minusProductButton = function (subtractedNumber, clickedElement) {
        // Get The Current Total Price From The Displayed Text
        let totalPriceElement = document.getElementById('koktel_supermarket_total_price');
        let currentTotal = parseFloat(totalPriceElement.innerText.split('=')[1].trim().replace(/[^\d.]/g, ''));

        // Calculate The New Total Price By Subtracting The Subtracted Number From The Current Total
        let newTotal = currentTotal - parseFloat(subtractedNumber.replace(/[^\d.]/g, ''));

        // Update The Text Content of The Total Price Display To Display The New Total
        totalPriceElement.innerText = `إضافة الطلب = ${newTotal.toLocaleString()} Rp`;

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

            <h1 id="koktel_supermarket_order_details_title_ar_id" class="koktel_order_details_title arLangText">طلباتك من السوبرماركت</h1>
            <h1 id="koktel_supermarket_order_details_title_indo_id" class="koktel_order_details_title indoLangText">Pesanan Anda dari supermarket</h1>


            <div class='koktel_order_finished_card_area' id='koktel_order_finished_card_area_id'></div>

            <div>
                <h4 class='koktel_delete_all_orders_button_class arLangText' onclick='koktel_ensure_delete_orders_box(this)'>حذف جميع الطلبات</h4>
                <h4 class='koktel_delete_all_orders_button_class indoLangText' onclick='koktel_ensure_delete_orders_box(this)'>Hapus semua pesanan</h4>
            </div>

            <div class="koktel_meal_info_note" id="koktel_meal_info_note_id" style="margin-top: 5px; display: none;">
                <textarea placeholder="ملاحظاتك للسوبرماركت هنا" class="koktel_meal_info_note_textarea arLangText" maxlength="100"></textarea>
                <textarea placeholder="Tanggapan Anda untuk supermarket" class="koktel_meal_info_note_textarea indoLangText" maxlength="100"></textarea>
            </div>

            <div class="koktel_koktel_order_details_bottom_button_div" id='koktel_total_order_price_text'></div>

            <div id="koktel_order_check_out_div" style="display: none;"></div>


            <div id='koktel_ensure_delete_all_orders_overlay' class='koktel_ensure_delete_orders_overlay' style='display:none'>
                <div class='koktel_ensure_delete_all_orders_div'>

                    <h6 class="arLangText">متاكد من حذف جميع الطلبات؟</h6>
                    <h6 class="indoLangText">Apakah Anda yakin ingin menghapus semua pesanan</h6>


                    <div id='koktel_ensure_delete_all_orders_answer_div'>

                        <h6 class="arLangText" onclick='koktel_delete_all_supermarket_orders_function("عودة")'>عودة</h6>
                        <h6 class="indoLangText" onclick='koktel_delete_all_supermarket_orders_function("عودة")'>Kembali</h6>


                        <h6 class="arLangText" onclick='koktel_delete_all_supermarket_orders_function("نعم")'>نعم</h6>
                        <h6 class="indoLangText" onclick='koktel_delete_all_supermarket_orders_function("نعم")'>Ya</h6>

                    </div>

                </div>
            </div>

                
            <a itemprop="url" href="https://koktel-indo.com/%D8%B3%D9%88%D8%A8%D8%B1%D9%85%D8%A7%D8%B1%D9%83%D8%AA-%D8%A7%D9%86%D8%AF%D9%88%D9%86%D9%8A%D8%B3%D9%8A%D8%A7"
            class="koktel_go_back_products_page_button">
            <ion-icon name="arrow-undo-circle-outline"></ion-icon></a>

        </div>`;


    /* Set The Inner HTML Code of The 'all_order_page_content' Inside The 'koktel_supermarket_order_details_body_id' Element */
    document.getElementById('koktel_supermarket_order_details_body_id').innerHTML = all_order_page_content;




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
            koktel_order_finished_card_area_id.innerHTML = `
                <h1 class="koktel_there_is_no_orders_text_class arLangText">لاتوجد طلبات بعد..<ion-icon name="telescope-outline"></ion-icon></h1>
                <h1 class="koktel_there_is_no_orders_text_class indoLangText"><ion-icon name="telescope-outline"></ion-icon>..Belum Ada Permintaan</h1>
            `;

            /* Update The Title Of The Page If there is No Any Orders */
            koktel_supermarket_order_details_title_ar_id.innerHTML = `طلباتك من السوبرماركت`;
            koktel_supermarket_order_details_title_indo_id.innerHTML = `Pesanan Anda dari supermarket`;

            // Hide These Elements if There is No Any Restaurant Orders
            document.getElementById('koktel_order_check_out_div').innerHTML = '';
            koktel_meal_info_note_id.style.display = 'none';

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
                <h2 class="arLangText" style=cursor: text; cursor: text;">منتج رقم ${index + 1}</h2>
                <h2 class="indoLangText" style=cursor: text; cursor: text;">Nomor Produk ${index + 1}</h2>


                <h2 class="arLangText" style="color: aqua; cursor: text;">${orderData.productName}</h2>
                <h2 class="indoLangText" style="color: aqua; cursor: text;">${orderData.indo_productName}</h2>


                <img src="${orderData.productImgSrc}" alt="سوبرماركت اندونيسيا - كوكتيل" title="سوبرماركت اندونيسيا - كوكتيل" onclick="koktel_show_full_screen_image(this.src)" loading="lazy">


                <div class='koktel_orderFinished_info_and_delete'>

                    <h3 class="arLangText" style="color: rgb(255, 166, 0); cursor: text;">العدد = ${orderData.productAmount}</h3>
                    <h3 class="indoLangText" style="color: rgb(255, 166, 0); cursor: text;">Kuantitas = ${orderData.productAmount}</h3>


                    <h3 id="koktel_order_total_price_h3" class="arLangText">الإجمالي = ${orderData.totalPrice.toLocaleString()} Rp</h3>
                    <h3 id="koktel_order_total_price_h3" class="indoLangText">Total = ${orderData.totalPrice.toLocaleString()} Rp</h3>


                    <h3 class="arLangText" onclick="koktel_ensure_delete_orders_box(this, ${index})" style="color: red;">حذف الطلب</h3>
                    <h3 class="indoLangText" onclick="koktel_ensure_delete_orders_box(this, ${index})" style="color: red;">Hapus pesanan</h3>

                </div>

                <div id='koktel_ensure_delete_this_orders_overlay_${index}' class='koktel_ensure_delete_orders_overlay' style='display:none'>
                    <div class='koktel_ensure_delete_all_orders_div'>

                        <h6 class="arLangText">متاكد من حذف هذا الطلب؟</h6>
                        <h6 class="indoLangText">Apakah Anda yakin ingin menghapus permintaan ini?</h6>

                        
                        <div id='koktel_ensure_delete_all_orders_answer_div'>

                            <h6 class="arLangText" onclick='koktel_delete_this_orders_function("عودة", ${index})'>عودة</h6>
                            <h6 class="indoLangText" onclick='koktel_delete_this_orders_function("عودة", ${index})'>Kembali</h6>


                            <h6 class="arLangText" onclick='koktel_delete_this_orders_function("نغم", ${index})'>نعم</h6>
                            <h6 class="indoLangText" onclick='koktel_delete_this_orders_function("نغم", ${index})'>Ya</h6>

                        </div>
                    </div>
                </div>
            `;

                // Assign the HTML content to the created element
                localStorageOrderCardFinished.innerHTML = localStorageOrderCardContent;

                // Append the order element to the parent container
                koktel_order_finished_card_area_id.appendChild(localStorageOrderCardFinished);
            });


            // Calculate total price sum of all products
            let totalPriceSum = orders.reduce((total, order) => total + order.totalPrice, 0);

            // Calculate tax amount based on the total price sum
            let taxAmount = totalPriceSum * 0.1;

            // Add tax amount to the total price sum
            let totalPriceWithTax = totalPriceSum + taxAmount;

            // Add delivery charge to the total price with tax
            let lastTotalPrice = totalPriceWithTax + 20000;

            let koktel_order_check_out_whatsApp_content = `
                <div id="koktel_order_check_out_whatsApp_div" onclick="koktel_createFinalWhatsAppMessage()">
                    <ion-icon name="logo-whatsapp"></ion-icon>

                    <h5 class="arLangText">إرسال الطلبات</h5>
                    <h5 class="indoLangText">Kirim Permintaan</h5>

                </div>
                <div id="koktel_order_check_out_bill_div">

                    <h6 id="koktel_order_check_out_bill_title" class="arLangText">الفاتورة</h6>
                    <h6 id="koktel_order_check_out_bill_title" class="indoLangText">Tagihan</h6>


                    ${orders.map((order, orderIndex) => `
                        <h6 id="koktel_order_check_out_bill_details_text" class="arLangText">المنتج رقم ${orderIndex + 1} : ${order.totalPrice.toLocaleString()} Rp</h6>
                        <h6 id="koktel_order_check_out_bill_details_text" class="indoLangText">Produk Nomor ${orderIndex + 1} : ${order.totalPrice.toLocaleString()} Rp</h6>
                    `).join('')}
            
                    <h6 class="koktel_order_check_out_bill_total_price arLangText" style="border-top-right-radius: 7px; border-top-left-radius: 7px;">الضريبة : ${taxAmount.toLocaleString()} Rp</h6>
                    <h6 class="koktel_order_check_out_bill_total_price indoLangText" style="border-top-right-radius: 7px; border-top-left-radius: 7px;">Pajak : ${taxAmount.toLocaleString()} Rp</h6>
            
                    <h6 class="koktel_order_check_out_bill_total_price arLangText">التوصيل : 20,000 Rp</h6>
                    <h6 class="koktel_order_check_out_bill_total_price indoLangText">Pengiriman : 20,000 Rp</h6>
            
                    <h6 class="koktel_order_check_out_bill_total_price arLangText" style="border-bottom-right-radius: 7px; border-bottom-left-radius: 7px;">الإجمالي : ${lastTotalPrice.toLocaleString()} Rp</h6>
                    <h6 class="koktel_order_check_out_bill_total_price indoLangText" style="border-bottom-right-radius: 7px; border-bottom-left-radius: 7px;">Total : ${lastTotalPrice.toLocaleString()} Rp</h6>

                </div>
            `;


            /* Update The Title Of The Page If there is Any Orders */
            koktel_supermarket_order_details_title_ar_id.innerHTML = `طلباتك من السوبرماركت <spam class="koktel_orders_ready_to_send_text">جاهزة للإرسال</spam>`;
            koktel_supermarket_order_details_title_indo_id.innerHTML = `Pesanan Anda dari supermarket <spam class="koktel_orders_ready_to_send_text">Siap Dikirim</spam>`;

            /* Show The Following Code if There is Any Data in The restaurant_orders Key */
            document.getElementById('koktel_order_check_out_div').innerHTML = koktel_order_check_out_whatsApp_content;
            document.getElementById('koktel_order_check_out_div').style.display = 'flex';
            document.getElementById('koktel_meal_info_note_id').style.display = 'block';
            document.getElementById('koktel_order_check_out_div').style.display = 'flex';
        }
    }



    // Call renderOrders function to initially render orders
    renderOrders();







    /* Function To Show The Ensure Delete Box */
    koktel_ensure_delete_orders_box = function (clickedDeleteButton, index) {

        if (document.getElementById('koktel_ensure_delete_all_orders_overlay')) {


            if (clickedDeleteButton.innerText === 'حذف الطلب') {
                // Construct the ID of the corresponding overlay element
                let overlayId = `koktel_ensure_delete_this_orders_overlay_${index}`;

                // Show the overlay element
                document.getElementById(overlayId).style.display = 'block';
            } else {
                document.getElementById('koktel_ensure_delete_all_orders_overlay').style.display = 'block';
            }

        }
        // Disable Scrolling
        document.documentElement.style.overflow = 'hidden';
    }




    /* Function To Delete All Orders Data */
    koktel_delete_all_supermarket_orders_function = function (clickedDeleteAnswer) {

        /* First Check if The Clicked Button is 'عودة' or 'نعم' */
        if (clickedDeleteAnswer === 'عودة') {
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


            // Get the value of "CurrentWebsiteLanguage" from localStorage
            let CurrentWebsiteLanguage = localStorage.getItem("CurrentWebsiteLanguage");


            /* In case if the current website language is set to Arabic */
            if (CurrentWebsiteLanguage === "ar") {
                successBox.textContent = 'تم حذف جميع طلبات السوبرماركت';

                /* In case if the current website language is set to Indonesian */
            } else if (CurrentWebsiteLanguage === "id") {
                successBox.textContent = 'Semua pesanan supermarket telah dihapus';

            }

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
                }, 2000); // Wait for the fade-out transition to complete (1.5s)
            }, 700); // Wait for 3 seconds before triggering fade-out


            // Call renderOrders function to initially render orders
            renderOrders();


            /* Call a function to show the correct website language */
            setWebsiteLanguage();

        }

        // Re-enable scrolling
        document.documentElement.style.overflow = 'auto';
    }


    /* Function To Delete Only One Order Data */
    koktel_delete_this_orders_function = function (clickedDeleteAnswer, indexNumber) {

        if (clickedDeleteAnswer === 'عودة') {
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
                koktel_order_finished_card_area_id.innerHTML = `
                    <h1 class="koktel_there_is_no_orders_text_class arLangText">لاتوجد طلبات بعد..<ion-icon name="telescope-outline"></ion-icon></h1>
                    <h1 class="koktel_there_is_no_orders_text_class indoLangText"><ion-icon name="telescope-outline"></ion-icon>..Belum Ada permintaan</h1>
                `;

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
                }, 2000); // Wait for the fade-out transition to complete (1.5s)
            }, 700); // Wait for 3 seconds before triggering fade-out


        }

        // Re-enable scrolling
        document.documentElement.style.overflow = 'auto';
    }







    /* Function To Create The Final WhatsApp Message */
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

            // Create the order information in Indonesian
            let orderInfo = `Produk Nomor ${index + 1}- ${order.indo_productName}\n`;
            orderInfo += `- Jumlah Produk: ${order.productAmount}\n`;
            orderInfo += `- Harganya: ${order.totalPrice.toLocaleString()} Rp\n\n`;

            // Append the order information in Arabic
            orderInfo += `المنتج رقم ${index + 1}- ${order.productName}\n`;
            orderInfo += `- العدد: ${order.productAmount}\n`;
            orderInfo += `- الإجمالي: ${order.totalPrice.toLocaleString()} Rp\n`;
            orderInfo += `___________________________________\n\n`;

            // Push the order information to the array
            orderDetails.push(orderInfo);
        });

        // Get today's date
        let today = new Date();
        let formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

        // Calculate total price sum of all products
        let totalPriceSum = orders.reduce((total, order) => total + order.totalPrice, 0);

        // Calculate tax amount based on the total price sum
        let taxAmount = totalPriceSum * 0.1;

        // Calculate the total price with delivery
        let lastTotalPrice = totalPrice + taxAmount + 20000;

        // Create the final message and join all order details
        let finalMessage = "طلبات جديدة من السوبرماركت:\n"; // Initial message
        finalMessage += `تاريخ إرسال الطلب: ${formattedDate}\n`; // Add today's date
        finalMessage += `___________________________________\n\n`;
        finalMessage += orderDetails.join(''); // Join order details

        // Check if noteText is not empty, then add it to the finalMessage
        if (noteText !== '') {
            finalMessage += `الملاحظات: ${noteText}\n`;
            finalMessage += `___________________________________\n\n`;
        }

        finalMessage += `- Pajak: ${taxAmount.toLocaleString()} Rp\n`;
        finalMessage += `- Kiriman: 20,000 Rp\n`;
        finalMessage += `- Harga Akhir: ${lastTotalPrice.toLocaleString()} Rp\n\n`;


        finalMessage += `- الضريبة: ${taxAmount.toLocaleString()} Rp\n`;
        finalMessage += `- التوصيل: 20,000 Rp\n`;
        finalMessage += `- الإجمالي: ${lastTotalPrice.toLocaleString()} Rp\n\n`;


        finalMessage += `Harus Kirim Lokasinya Untuk Mulai Pemenuhan Pesanan..\n`;
        finalMessage += `يجب إرسال موقعك لبدأ تنفيذ الطلب..\n\n`;


        finalMessage += `- Semua Metode Bayaran Tersedia, Baik Online Atau Tunai\n`;
        finalMessage += `- جميع طرق الدفع متوفرة سواء اونلاين او كاش\n\n`;


        finalMessage += `Silakan Gunakan Informasi Berikut Jika Bayar Melalui Transfer Bank\n`;
        finalMessage += `يرجى استخدام المعلومات التالية في حال كان الدفع بالتحويل البنكي\n`;


        finalMessage += `Bank Central Asia (BCA)\nName: samir\nNo Rekening: 1971025609\n\n`;
        finalMessage += `Dana: 087720208728`;

        // Encode the message using encodeURIComponent
        let encodedMessage = encodeURIComponent(finalMessage);

        // Create the WhatsApp URL
        let whatsappURL = `https://wa.me/6282210081028?text=${encodedMessage}`;

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

        // Extract Arabic Product Name
        let productName = parentCard.querySelector('.koktel_product_name_div h1').textContent.trim();


        // Extract Indo Product Name
        let indo_productName = parentCard.querySelector('.koktel_product_name_div h2').textContent.trim();

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
            supermarkerBottomCountertext.innerText = `إضافة الطلب = ${addedNumber.toLocaleString()} Rp`;

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
                            indo_productName: product.indo_productName,
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
                            indo_productName: product.indo_productName,
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
            totalPriceElement.innerText = `إضافة الطلب = ${newTotal.toLocaleString()} Rp`;

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
        clickedProducts[productName] = { productName, indo_productName, currentCount, totalValue, imgSrc };
    }


    // Function To Handle The Click Event On Ion-Icon (Minus) Element
    koktel_minusProductButton = function (subtractedNumber, clickedElement) {
        // Get The Current Total Price From The Displayed Text
        let totalPriceElement = document.getElementById('koktel_supermarket_total_price');
        let currentTotal = parseFloat(totalPriceElement.innerText.split('=')[1].trim().replace(/[^\d.]/g, ''));

        // Calculate The New Total Price By Subtracting The Subtracted Number From The Current Total
        let newTotal = currentTotal - parseFloat(subtractedNumber.replace(/[^\d.]/g, ''));

        // Update The Text Content of The Total Price Display To Display The New Total
        totalPriceElement.innerText = `إضافة الطلب = ${newTotal.toLocaleString()} Rp`;

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
            <h1 class="koktel_order_details_title" id="koktel_order_details_title_id">طلباتك من المخبوزات</h1>


            <div class='koktel_order_finished_card_area' id='koktel_order_finished_card_area_id'></div>

            <div>
                <h4 id='koktel_delete_all_restaurant_orders_button' onclick='koktel_ensure_delete_orders_box(this)' style="display: none;">حذف جميع الطلبات</h4>
            </div>

            <div class="koktel_meal_info_note" id="koktel_meal_info_note_id" style="margin-top: 5px; display: none;">
                <textarea placeholder="ملاحظاتك للمخبوزات هنا" class="koktel_meal_info_note_textarea" maxlength="100"></textarea>
            </div>

            <div class="koktel_koktel_order_details_bottom_button_div" id='koktel_total_order_price_text'></div>

            <div id="koktel_order_check_out_div" style="display: none;"></div>

            <a itemprop="url" href="https://bandar-zuhair.github.io/Koktel/مخبوزات-اندونيسيا.html"
            class="koktel_go_back_products_page_button">
            <ion-icon name="arrow-undo-circle-outline"></ion-icon></a>

        </div>`;


    /* Set The Inner HTML Code of The 'all_order_page_content' Inside The 'koktel_bread_order_details_body_id' Element */
    document.getElementById('koktel_bread_order_details_body_id').innerHTML = all_order_page_content;




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
            // Create the element for each order
            let localStorageOrderCardFinished = document.createElement('div');
            localStorageOrderCardFinished.classList.add('koktel_order_finished_card');
            koktel_order_finished_card_area_id.innerHTML = `
                <h1 id='koktel_there_is_no_orders_text'>لاتوجد طلبات بعد..<ion-icon name="telescope-outline"></ion-icon></h1>
            `;

            /* Update The Title Of The Page If there is No Any Orders */
            koktel_order_details_title_id.innerHTML = `طلباتك من المخبوزات`;

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
                    <h3 style="color: rgb(255, 166, 0); cursor: text;">العدد = ${orderData.productAmount}</h3>
                    <h3 id="koktel_order_total_price_h3">الإجمالي = ${orderData.totalPrice.toLocaleString()} Rp</h3>
                    <h3 style="color: red;" onclick="koktel_ensure_delete_orders_box(this, ${index})">حذف الطلب</h3>
                </div>
                
                <div id='koktel_ensure_delete_all_orders_overlay' class='koktel_ensure_delete_orders_overlay' style='display:none'>
                    <div class='koktel_ensure_delete_all_orders_div'>
                        <h6>متاكد من حذف جميع الطلبات؟</h6>
                        <div id='koktel_ensure_delete_all_orders_answer_div'>
                            <h6 onclick='koktel_delete_all_bread_orders_function(this)'>عودة</h6>
                            <h6 onclick='koktel_delete_all_bread_orders_function(this)'>نعم</h6>
                        </div>
                    </div>
                </div>

                <div id='koktel_ensure_delete_this_orders_overlay_${index}' class='koktel_ensure_delete_orders_overlay' style='display:none'>
                    <div class='koktel_ensure_delete_all_orders_div'>
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


            // Calculate total price sum of all products
            let totalPriceSum = orders.reduce((total, order) => total + order.totalPrice, 0);

            // Calculate tax amount based on the total price sum
            let taxAmount = totalPriceSum * 0.1;

            // Add tax amount to the total price sum
            let totalPriceWithTax = totalPriceSum + taxAmount;

            // Add delivery charge to the total price with tax
            let lastTotalPrice = totalPriceWithTax + 20000;

            let koktel_order_check_out_whatsApp_content = `
                <div id="koktel_order_check_out_whatsApp_div" onclick="koktel_createFinalWhatsAppMessage()">
                    <ion-icon name="logo-whatsapp"></ion-icon>
                    <h5>إرسال الطلبات</h5>
                </div>
                <div id="koktel_order_check_out_bill_div">
                    <h6 id="koktel_order_check_out_bill_title">الفاتورة</h6>
                    ${orders.map((order, orderIndex) => `<h6 id="koktel_order_check_out_bill_details_text">المنتج رقم ${orderIndex + 1} : ${order.totalPrice.toLocaleString()} Rp</h6>`).join('')}
                    <h6 class="koktel_order_check_out_bill_total_price" style="border-top-right-radius: 7px; border-top-left-radius: 7px;">الضريبة : ${taxAmount.toLocaleString()} Rp</h6>
                    <h6 class="koktel_order_check_out_bill_total_price">التوصيل : 20,000 Rp</h6>
                    <h6 class="koktel_order_check_out_bill_total_price" style="border-bottom-right-radius: 7px; border-bottom-left-radius: 7px;">الإجمالي : ${lastTotalPrice.toLocaleString()} Rp</h6>
                </div>
            `;

            /* Update The Title Of The Page If there is Any Orders */
            koktel_order_details_title_id.innerHTML = `طلباتك من المخبوزات <spam class="koktel_orders_ready_to_send_text">جاهزة للإرسال</spam>`;

            /* Show The Following Code if There is Any Data in The restaurant_orders Key */
            document.getElementById('koktel_order_check_out_div').innerHTML = koktel_order_check_out_whatsApp_content;
            document.getElementById('koktel_order_check_out_div').style.display = 'flex';
            document.getElementById('koktel_delete_all_restaurant_orders_button').style.display = 'block';
            document.getElementById('koktel_meal_info_note_id').style.display = 'block';
            document.getElementById('koktel_order_check_out_div').style.display = 'flex';
        }
    }



    // Call renderOrders function to initially render orders
    renderOrders();







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
    koktel_delete_all_bread_orders_function = function (clickedDeleteAnswer) {

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
                // Create the element for each order
                let localStorageOrderCardFinished = document.createElement('div');
                localStorageOrderCardFinished.classList.add('koktel_order_finished_card');
                koktel_order_finished_card_area_id.innerHTML = `
                    <h1 id='koktel_there_is_no_orders_text'>لاتوجد طلبات بعد..<ion-icon name="telescope-outline"></ion-icon></h1>
                `;

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







    /* Function To Create The Final WhatsApp Message */
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

            // Create the order information in Indonesian
            let orderInfo = `Produk Nomor ${index + 1}- ${order.indo_productName}\n`;
            orderInfo += `- Jumlah Produk: ${order.productAmount}\n`;
            orderInfo += `- Harganya: ${order.totalPrice.toLocaleString()} Rp\n\n`;

            // Append the order information in Arabic
            orderInfo += `المنتج رقم ${index + 1}- ${order.productName}\n`;
            orderInfo += `- العدد: ${order.productAmount}\n`;
            orderInfo += `- الإجمالي: ${order.totalPrice.toLocaleString()} Rp\n`;
            orderInfo += `___________________________________\n\n`;

            // Push the order information to the array
            orderDetails.push(orderInfo);
        });

        // Get today's date
        let today = new Date();
        let formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

        // Calculate total price sum of all products
        let totalPriceSum = orders.reduce((total, order) => total + order.totalPrice, 0);

        // Calculate tax amount based on the total price sum
        let taxAmount = totalPriceSum * 0.1;

        // Calculate the total price with delivery
        let lastTotalPrice = totalPrice + taxAmount + 20000;

        // Create the final message and join all order details
        let finalMessage = "طلبات جديدة من المخبوزات:\n"; // Initial message
        finalMessage += `تاريخ إرسال الطلب: ${formattedDate}\n`; // Add today's date
        finalMessage += `___________________________________\n\n`;
        finalMessage += orderDetails.join(''); // Join order details

        // Check if noteText is not empty, then add it to the finalMessage
        if (noteText !== '') {
            finalMessage += `الملاحظات: ${noteText}\n`;
            finalMessage += `___________________________________\n\n`;
        }

        finalMessage += `- Pajak: ${taxAmount.toLocaleString()} Rp\n`;
        finalMessage += `- Kiriman: 20,000 Rp\n`;
        finalMessage += `- Harga Akhir: ${lastTotalPrice.toLocaleString()} Rp\n\n`;


        finalMessage += `- الضريبة: ${taxAmount.toLocaleString()} Rp\n`;
        finalMessage += `- التوصيل: 20,000 Rp\n`;
        finalMessage += `- الإجمالي: ${lastTotalPrice.toLocaleString()} Rp\n\n`;


        finalMessage += `Harus Kirim Lokasinya Untuk Mulai Pemenuhan Pesanan..\n`;
        finalMessage += `يجب إرسال موقعك لبدأ تنفيذ الطلب..\n\n`;


        finalMessage += `- Semua Metode Bayaran Tersedia, Baik Online Atau Tunai\n`;
        finalMessage += `- جميع طرق الدفع متوفرة سواء اونلاين او كاش\n\n`;


        finalMessage += `Silakan Gunakan Informasi Berikut Jika Bayar Melalui Transfer Bank\n`;
        finalMessage += `يرجى استخدام المعلومات التالية في حال كان الدفع بالتحويل البنكي\n`;


        finalMessage += `Bank Central Asia (BCA)\nName: samir\nNo Rekening: 1971025609\n\n`;
        finalMessage += `Dana: 087720208728`;

        // Encode the message using encodeURIComponent
        let encodedMessage = encodeURIComponent(finalMessage);

        // Create the WhatsApp URL
        let whatsappURL = `https://wa.me/6282210081028?text=${encodedMessage}`;

        // Open WhatsApp in a new window
        window.open(whatsappURL, '_blank');
    }

}
/* Up Bread Up */



















/* Down Worker And Driver Booking Down */
if (document.getElementById("koktel_choose_worker_type_section")) {

    /* Create Home Worker WhatsApp Message */
    koktel_whatsApp_worker_message.onclick = function () {

        // Get today's date
        let today = new Date();
        let formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

        // Create the final message And join all order details
        let finalMessage = "طلب جديد حجز شغالة:\n";
        finalMessage += "لمدة 8 ساعات = 200,000 Rp\n";
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
        let whatsappURL = `https://wa.me/6282210081028?text=${encodedMessage}`;

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

    /* Create Home Driver WhatsApp Message */
    koktel_driverTypeWhatsAppMessage = function (driverType) {
        let clickedDriverType;

        if (driverType === 'car') {
            clickedDriverType = 'طلب جديد حجز سائق سيارة';
        } else if (driverType === 'motor') {
            /* clickedDriverType = 'طلب جديد حجز سائق دباب'; */

            /* Delete The Following Code And UnComment The Upeer Code Once this Service is Avaliable */
            // Re-enable scrolling
            document.documentElement.style.overflow = 'auto';
            document.getElementById('koktel_choose_worker_type_section').removeChild(document.getElementById('koktel_driver_type_box_overlay'));
            alert('هذه الخدمة ليست متوفر بعد..');
            return;

        } else {
            // Re-enable scrolling
            document.documentElement.style.overflow = 'auto';
            document.getElementById('koktel_choose_worker_type_section').removeChild(document.getElementById('koktel_driver_type_box_overlay'));
            return;
        }

        // Get today's date
        let today = new Date();
        let formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

        // Create the final message and join all order details
        let finalMessage = `${clickedDriverType}\n`; // Initial message
        finalMessage += "لمدة 8 ساعات = 500,000 Rp\n";
        finalMessage += `تاريخ إرسال الطلب: ${formattedDate}\n\n`; // Add today's date

        // Append additional information to the final message
        finalMessage += `يجب إرسال موقعك لبدأ تنفيذ الطلب..\n\n`;
        finalMessage += `جميع طرق الدفع متوفرة سواء اونلاين او كاش\n\n`;
        finalMessage += `يرجى استخدام المعلومات التالية في حال كان الدفع بالتحويل البنكي\n`;
        finalMessage += `Bank Central Asia (BCA)\nName: samir\nNo Rekening: 1971025609\n\n`;
        finalMessage += `Dana: 087720208728`;

        // Encode the message using encodeURIComponent
        let encodedMessage = encodeURIComponent(finalMessage);

        // Create the WhatsApp URL
        let whatsappURL = `https://wa.me/6282210081028?text=${encodedMessage}`;

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
        let whatsappURL = `https://wa.me/6282210081028?text=${encodedMessage}`;

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
        let productName = parentCard.querySelector('.koktel_product_name_div h1').textContent.trim();

        // Extract Indo Product Name
        let indo_productName = parentCard.querySelector('.koktel_product_name_div h2').textContent.trim();

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
            supermarkerBottomCountertext.innerText = `إضافة الطلب = ${addedNumber.toLocaleString()} Rp`;

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
                            indo_productName: product.indo_productName,
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
                            indo_productName: product.indo_productName,
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
            totalPriceElement.innerText = `إضافة الطلب = ${newTotal.toLocaleString()} Rp`;

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
        clickedProducts[productName] = { productName, indo_productName, currentCount, totalValue, imgSrc };
    }


    // Function To Handle The Click Event On Ion-Icon (Minus) Element
    koktel_minusProductButton = function (subtractedNumber, clickedElement) {
        // Get The Current Total Price From The Displayed Text
        let totalPriceElement = document.getElementById('koktel_supermarket_total_price');
        let currentTotal = parseFloat(totalPriceElement.innerText.split('=')[1].trim().replace(/[^\d.]/g, ''));

        // Calculate The New Total Price By Subtracting The Subtracted Number From The Current Total
        let newTotal = currentTotal - parseFloat(subtractedNumber.replace(/[^\d.]/g, ''));

        // Update The Text Content of The Total Price Display To Display The New Total
        totalPriceElement.innerText = `إضافة الطلب = ${newTotal.toLocaleString()} Rp`;

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
            <h1 class="koktel_order_details_title" id="koktel_order_details_title_id">طلباتك من الصيدلية</h1>


            <div class='koktel_order_finished_card_area' id='koktel_order_finished_card_area_id'></div>

            <div>
                <h4 id='koktel_delete_all_restaurant_orders_button' onclick='koktel_ensure_delete_orders_box(this)' style="display: none;">حذف جميع الطلبات</h4>
            </div>

            <div class="koktel_meal_info_note" id="koktel_meal_info_note_id" style="margin-top: 5px; display: none;">
                <textarea placeholder="ملاحظاتك للسوبرماركت هنا" class="koktel_meal_info_note_textarea" maxlength="100"></textarea>
            </div>

            <div class="koktel_koktel_order_details_bottom_button_div" id='koktel_total_order_price_text'></div>

            <div id="koktel_order_check_out_div" style="display: none;"></div>

            <a itemprop="url" href="https://bandar-zuhair.github.io/Koktel/صيدلية-اندونيسيا.html"
            class="koktel_go_back_products_page_button">
            <ion-icon name="arrow-undo-circle-outline"></ion-icon></a>

        </div>`;


    /* Set The Inner HTML Code of The 'all_order_page_content' Inside The 'koktel_pharmacy_order_details_body_id' Element */
    document.getElementById('koktel_pharmacy_order_details_body_id').innerHTML = all_order_page_content;




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
            koktel_order_finished_card_area_id.innerHTML = `
                <h1 id='koktel_there_is_no_orders_text'>لاتوجد طلبات بعد..<ion-icon name="telescope-outline"></ion-icon></h1>
            `;

            /* Update The Title Of The Page If there is No Any Orders */
            koktel_order_details_title_id.innerHTML = `طلباتك من الصيدلية`;

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
                    <h3 style="color: rgb(255, 166, 0); cursor: text;">العدد = ${orderData.productAmount}</h3>
                    <h3 id="koktel_order_total_price_h3">الإجمالي = ${orderData.totalPrice.toLocaleString()} Rp</h3>
                    <h3 style="color: red;" onclick="koktel_ensure_delete_orders_box(this, ${index})">حذف الطلب</h3>
                </div>
                
                <div id='koktel_ensure_delete_all_orders_overlay' class='koktel_ensure_delete_orders_overlay' style='display:none'>
                    <div class='koktel_ensure_delete_all_orders_div'>
                        <h6>متاكد من حذف جميع الطلبات؟</h6>
                        <div id='koktel_ensure_delete_all_orders_answer_div'>
                            <h6 onclick='koktel_delete_all_pharmacy_orders_function(this)'>عودة</h6>
                            <h6 onclick='koktel_delete_all_pharmacy_orders_function(this)'>نعم</h6>
                        </div>
                    </div>
                </div>

                <div id='koktel_ensure_delete_this_orders_overlay_${index}' class='koktel_ensure_delete_orders_overlay' style='display:none'>
                    <div class='koktel_ensure_delete_all_orders_div'>
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


            // Calculate total price sum of all products
            let totalPriceSum = orders.reduce((total, order) => total + order.totalPrice, 0);

            // Calculate tax amount based on the total price sum
            let taxAmount = totalPriceSum * 0.1;

            // Add tax amount to the total price sum
            let totalPriceWithTax = totalPriceSum + taxAmount;

            // Add delivery charge to the total price with tax
            let lastTotalPrice = totalPriceWithTax + 20000;

            let koktel_order_check_out_whatsApp_content = `
                <div id="koktel_order_check_out_whatsApp_div" onclick="koktel_createFinalWhatsAppMessage()">
                    <ion-icon name="logo-whatsapp"></ion-icon>
                    <h5>إرسال الطلبات</h5>
                </div>
                <div id="koktel_order_check_out_bill_div">
                    <h6 id="koktel_order_check_out_bill_title">الفاتورة</h6>
                    ${orders.map((order, orderIndex) => `<h6 id="koktel_order_check_out_bill_details_text">المنتج رقم ${orderIndex + 1} : ${order.totalPrice.toLocaleString()} Rp</h6>`).join('')}
                    <h6 class="koktel_order_check_out_bill_total_price" style="border-top-right-radius: 7px; border-top-left-radius: 7px;">الضريبة : ${taxAmount.toLocaleString()} Rp</h6>
                    <h6 class="koktel_order_check_out_bill_total_price">التوصيل : 20,000 Rp</h6>
                    <h6 class="koktel_order_check_out_bill_total_price" style="border-bottom-right-radius: 7px; border-bottom-left-radius: 7px;">الإجمالي : ${lastTotalPrice.toLocaleString()} Rp</h6>
                </div>
            `;

            /* Update The Title Of The Page If there is Any Orders */
            koktel_order_details_title_id.innerHTML = `طلباتك من الصيدلية <spam class="koktel_orders_ready_to_send_text">جاهزة للإرسال</spam>`;

            /* Show The Following Code if There is Any Data in The restaurant_orders Key */
            document.getElementById('koktel_order_check_out_div').innerHTML = koktel_order_check_out_whatsApp_content;
            document.getElementById('koktel_order_check_out_div').style.display = 'flex';
            document.getElementById('koktel_delete_all_restaurant_orders_button').style.display = 'block';
            document.getElementById('koktel_meal_info_note_id').style.display = 'block';
            document.getElementById('koktel_order_check_out_div').style.display = 'flex';
        }
    }



    // Call renderOrders function to initially render orders
    renderOrders();









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
    koktel_delete_all_pharmacy_orders_function = function (clickedDeleteAnswer) {

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
                koktel_order_finished_card_area_id.innerHTML = `
                    <h1 id='koktel_there_is_no_orders_text'>لاتوجد طلبات بعد..<ion-icon name="telescope-outline"></ion-icon></h1>
                `;

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







    /* Function To Create The Final WhatsApp Message */
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

            // Create the order information in Indonesian
            let orderInfo = `Produk Nomor ${index + 1}- ${order.indo_productName}\n`;
            orderInfo += `- Jumlah Produk: ${order.productAmount}\n`;
            orderInfo += `- Harganya: ${order.totalPrice.toLocaleString()} Rp\n\n`;

            // Append the order information in Arabic
            orderInfo += `المنتج رقم ${index + 1}- ${order.productName}\n`;
            orderInfo += `- العدد: ${order.productAmount}\n`;
            orderInfo += `- الإجمالي: ${order.totalPrice.toLocaleString()} Rp\n`;
            orderInfo += `___________________________________\n\n`;

            // Push the order information to the array
            orderDetails.push(orderInfo);
        });

        // Get today's date
        let today = new Date();
        let formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

        // Calculate total price sum of all products
        let totalPriceSum = orders.reduce((total, order) => total + order.totalPrice, 0);

        // Calculate tax amount based on the total price sum
        let taxAmount = totalPriceSum * 0.1;

        // Calculate the total price with delivery
        let lastTotalPrice = totalPrice + taxAmount + 20000;

        // Create the final message and join all order details
        let finalMessage = "طلبات جديدة من الصيدلية:\n"; // Initial message
        finalMessage += `تاريخ إرسال الطلب: ${formattedDate}\n`; // Add today's date
        finalMessage += `___________________________________\n\n`;
        finalMessage += orderDetails.join(''); // Join order details

        // Check if noteText is not empty, then add it to the finalMessage
        if (noteText !== '') {
            finalMessage += `الملاحظات: ${noteText}\n`;
            finalMessage += `___________________________________\n\n`;
        }

        finalMessage += `- Pajak: ${taxAmount.toLocaleString()} Rp\n`;
        finalMessage += `- Kiriman: 20,000 Rp\n`;
        finalMessage += `- Harga Akhir: ${lastTotalPrice.toLocaleString()} Rp\n\n`;


        finalMessage += `- الضريبة: ${taxAmount.toLocaleString()} Rp\n`;
        finalMessage += `- التوصيل: 20,000 Rp\n`;
        finalMessage += `- الإجمالي: ${lastTotalPrice.toLocaleString()} Rp\n\n`;


        finalMessage += `Harus Kirim Lokasinya Untuk Mulai Pemenuhan Pesanan..\n`;
        finalMessage += `يجب إرسال موقعك لبدأ تنفيذ الطلب..\n\n`;


        finalMessage += `- Semua Metode Bayaran Tersedia, Baik Online Atau Tunai\n`;
        finalMessage += `- جميع طرق الدفع متوفرة سواء اونلاين او كاش\n\n`;


        finalMessage += `Silakan Gunakan Informasi Berikut Jika Bayar Melalui Transfer Bank\n`;
        finalMessage += `يرجى استخدام المعلومات التالية في حال كان الدفع بالتحويل البنكي\n`;


        finalMessage += `Bank Central Asia (BCA)\nName: samir\nNo Rekening: 1971025609\n\n`;
        finalMessage += `Dana: 087720208728`;

        // Encode the message using encodeURIComponent
        let encodedMessage = encodeURIComponent(finalMessage);

        // Create the WhatsApp URL
        let whatsappURL = `https://wa.me/6282210081028?text=${encodedMessage}`;

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
        let productName = parentCard.querySelector('.koktel_product_name_div h1').textContent.trim();

        // Extract Indo Product Name
        let indo_productName = parentCard.querySelector('.koktel_product_name_div h2').textContent.trim();

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
            supermarkerBottomCountertext.innerText = `إضافة الطلب = ${addedNumber.toLocaleString()} Rp`;

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
                            indo_productName: product.indo_productName,
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
                            indo_productName: product.indo_productName,
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
            totalPriceElement.innerText = `إضافة الطلب = ${newTotal.toLocaleString()} Rp`;

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
        clickedProducts[productName] = { productName, indo_productName, currentCount, totalValue, imgSrc };
    }


    // Function To Handle The Click Event On Ion-Icon (Minus) Element
    koktel_minusProductButton = function (subtractedNumber, clickedElement) {
        // Get The Current Total Price From The Displayed Text
        let totalPriceElement = document.getElementById('koktel_supermarket_total_price');
        let currentTotal = parseFloat(totalPriceElement.innerText.split('=')[1].trim().replace(/[^\d.]/g, ''));

        // Calculate The New Total Price By Subtracting The Subtracted Number From The Current Total
        let newTotal = currentTotal - parseFloat(subtractedNumber.replace(/[^\d.]/g, ''));

        // Update The Text Content of The Total Price Display To Display The New Total
        totalPriceElement.innerText = `إضافة الطلب = ${newTotal.toLocaleString()} Rp`;

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
            <h1 class="koktel_order_details_title" id="koktel_order_details_title_id">طلباتك من المعسلات</h1>


            <div class='koktel_order_finished_card_area' id='koktel_order_finished_card_area_id'></div>

            <div>
                <h4 id='koktel_delete_all_restaurant_orders_button' onclick='koktel_ensure_delete_orders_box(this)' style="display: none;">حذف جميع الطلبات</h4>
            </div>

            <div class="koktel_meal_info_note" id="koktel_meal_info_note_id" style="margin-top: 5px; display: none;">
                <textarea placeholder="ملاحظاتك للمعسلات هنا" class="koktel_meal_info_note_textarea" maxlength="100"></textarea>
            </div>

            <div class="koktel_koktel_order_details_bottom_button_div" id='koktel_total_order_price_text'></div>

            <div id="koktel_order_check_out_div" style="display: none;"></div>

            <a itemprop="url" href="https://bandar-zuhair.github.io/Koktel/معسلات-اندونيسيا.html"
            class="koktel_go_back_products_page_button">
            <ion-icon name="arrow-undo-circle-outline"></ion-icon></a>

        </div>`;


    /* Set The Inner HTML Code of The 'all_order_page_content' Inside The 'koktel_shisha_order_details_body_id' Element */
    document.getElementById('koktel_shisha_order_details_body_id').innerHTML = all_order_page_content;




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
            koktel_order_finished_card_area_id.innerHTML = `
                <h1 id='koktel_there_is_no_orders_text'>لاتوجد طلبات بعد..<ion-icon name="telescope-outline"></ion-icon></h1>
            `;

            /* Update The Title Of The Page If there is No Any Orders */
            koktel_order_details_title_id.innerHTML = `طلباتك من المعسلات`;

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
                    <h3 style="color: rgb(255, 166, 0); cursor: text;">العدد = ${orderData.productAmount}</h3>
                    <h3 id="koktel_order_total_price_h3">الإجمالي = ${orderData.totalPrice.toLocaleString()} Rp</h3>
                    <h3 style="color: red;" onclick="koktel_ensure_delete_orders_box(this, ${index})">حذف الطلب</h3>
                </div>
                
                <div id='koktel_ensure_delete_all_orders_overlay' class='koktel_ensure_delete_orders_overlay' style='display:none'>
                    <div class='koktel_ensure_delete_all_orders_div'>
                        <h6>متاكد من حذف جميع الطلبات؟</h6>
                        <div id='koktel_ensure_delete_all_orders_answer_div'>
                            <h6 onclick='koktel_delete_all_shisha_orders_function(this)'>عودة</h6>
                            <h6 onclick='koktel_delete_all_shisha_orders_function(this)'>نعم</h6>
                        </div>
                    </div>
                </div>

                <div id='koktel_ensure_delete_this_orders_overlay_${index}' class='koktel_ensure_delete_orders_overlay' style='display:none'>
                    <div class='koktel_ensure_delete_all_orders_div'>
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


            // Calculate total price sum of all products
            let totalPriceSum = orders.reduce((total, order) => total + order.totalPrice, 0);

            // Calculate tax amount based on the total price sum
            let taxAmount = totalPriceSum * 0.1;

            // Add tax amount to the total price sum
            let totalPriceWithTax = totalPriceSum + taxAmount;

            // Add delivery charge to the total price with tax
            let lastTotalPrice = totalPriceWithTax + 20000;

            let koktel_order_check_out_whatsApp_content = `
                <div id="koktel_order_check_out_whatsApp_div" onclick="koktel_createFinalWhatsAppMessage()">
                    <ion-icon name="logo-whatsapp"></ion-icon>
                    <h5>إرسال الطلبات</h5>
                </div>
                <div id="koktel_order_check_out_bill_div">
                    <h6 id="koktel_order_check_out_bill_title">الفاتورة</h6>
                    ${orders.map((order, orderIndex) => `<h6 id="koktel_order_check_out_bill_details_text">المنتج رقم ${orderIndex + 1} : ${order.totalPrice.toLocaleString()} Rp</h6>`).join('')}
                    <h6 class="koktel_order_check_out_bill_total_price" style="border-top-right-radius: 7px; border-top-left-radius: 7px;">الضريبة : ${taxAmount.toLocaleString()} Rp</h6>
                    <h6 class="koktel_order_check_out_bill_total_price">التوصيل : 20,000 Rp</h6>
                    <h6 class="koktel_order_check_out_bill_total_price" style="border-bottom-right-radius: 7px; border-bottom-left-radius: 7px;">الإجمالي : ${lastTotalPrice.toLocaleString()} Rp</h6>
                </div>
            `;

            /* Update The Title Of The Page If there is Any Orders */
            koktel_order_details_title_id.innerHTML = `طلباتك من المعسلات <spam class="koktel_orders_ready_to_send_text">جاهزة للإرسال</spam>`;

            /* Show The Following Code if There is Any Data in The restaurant_orders Key */
            document.getElementById('koktel_order_check_out_div').innerHTML = koktel_order_check_out_whatsApp_content;
            document.getElementById('koktel_order_check_out_div').style.display = 'flex';
            document.getElementById('koktel_delete_all_restaurant_orders_button').style.display = 'block';
            document.getElementById('koktel_meal_info_note_id').style.display = 'block';
            document.getElementById('koktel_order_check_out_div').style.display = 'flex';
        }
    }



    // Call renderOrders function to initially render orders
    renderOrders();








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
    koktel_delete_all_shisha_orders_function = function (clickedDeleteAnswer) {

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
                koktel_order_finished_card_area_id.innerHTML = `
                    <h1 id='koktel_there_is_no_orders_text'>لاتوجد طلبات بعد..<ion-icon name="telescope-outline"></ion-icon></h1>
                `;

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







    /* Function To Create The Final WhatsApp Message */
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

            // Create the order information in Indonesian
            let orderInfo = `Produk Nomor ${index + 1}- ${order.indo_productName}\n`;
            orderInfo += `- Jumlah Produk: ${order.productAmount}\n`;
            orderInfo += `- Harganya: ${order.totalPrice.toLocaleString()} Rp\n\n`;

            // Append the order information in Arabic
            orderInfo += `المنتج رقم ${index + 1}- ${order.productName}\n`;
            orderInfo += `- العدد: ${order.productAmount}\n`;
            orderInfo += `- الإجمالي: ${order.totalPrice.toLocaleString()} Rp\n`;
            orderInfo += `___________________________________\n\n`;

            // Push the order information to the array
            orderDetails.push(orderInfo);
        });

        // Get today's date
        let today = new Date();
        let formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

        // Calculate total price sum of all products
        let totalPriceSum = orders.reduce((total, order) => total + order.totalPrice, 0);

        // Calculate tax amount based on the total price sum
        let taxAmount = totalPriceSum * 0.1;

        // Calculate the total price with delivery
        let lastTotalPrice = totalPrice + taxAmount + 20000;

        // Create the final message and join all order details
        let finalMessage = "طلبات جديدة من المعسلات:\n"; // Initial message
        finalMessage += `تاريخ إرسال الطلب: ${formattedDate}\n`; // Add today's date
        finalMessage += `___________________________________\n\n`;
        finalMessage += orderDetails.join(''); // Join order details

        // Check if noteText is not empty, then add it to the finalMessage
        if (noteText !== '') {
            finalMessage += `الملاحظات: ${noteText}\n`;
            finalMessage += `___________________________________\n\n`;
        }

        finalMessage += `- Pajak: ${taxAmount.toLocaleString()} Rp\n`;
        finalMessage += `- Kiriman: 20,000 Rp\n`;
        finalMessage += `- Harga Akhir: ${lastTotalPrice.toLocaleString()} Rp\n\n`;


        finalMessage += `- الضريبة: ${taxAmount.toLocaleString()} Rp\n`;
        finalMessage += `- التوصيل: 20,000 Rp\n`;
        finalMessage += `- الإجمالي: ${lastTotalPrice.toLocaleString()} Rp\n\n`;


        finalMessage += `Harus Kirim Lokasinya Untuk Mulai Pemenuhan Pesanan..\n`;
        finalMessage += `يجب إرسال موقعك لبدأ تنفيذ الطلب..\n\n`;


        finalMessage += `- Semua Metode Bayaran Tersedia, Baik Online Atau Tunai\n`;
        finalMessage += `- جميع طرق الدفع متوفرة سواء اونلاين او كاش\n\n`;


        finalMessage += `Silakan Gunakan Informasi Berikut Jika Bayar Melalui Transfer Bank\n`;
        finalMessage += `يرجى استخدام المعلومات التالية في حال كان الدفع بالتحويل البنكي\n`;


        finalMessage += `Bank Central Asia (BCA)\nName: samir\nNo Rekening: 1971025609\n\n`;
        finalMessage += `Dana: 087720208728`;

        // Encode the message using encodeURIComponent
        let encodedMessage = encodeURIComponent(finalMessage);

        // Create the WhatsApp URL
        let whatsappURL = `https://wa.me/6282210081028?text=${encodedMessage}`;

        // Open WhatsApp in a new window
        window.open(whatsappURL, '_blank');
    }
}
/* Up Shisha Up */






















/* Down Ads Videos And Images Down */
/* Array For Ads Videos/Images Use Only (imgSrc - videoSrc - videoThumbnailSrc) Words */
let koktel_adsVideosArray = [

    {
        videoSrc: "خدمات-اندونيسيا/كوكتيل-اندونيسيا.mp4",
        videoThumbnailSrc: "خدمات-اندونيسيا/خدمات-اندونيسيا.png",
    },

    {
        imgSrc: "خدمات-اندونيسيا/خدمات-اندونيسيا.png",
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





/* Function To Scroll Products Horizontally */
// Check if there are any elements with the class name 'koktelindo_product_slide_div'
let productSlideDivs = document.querySelectorAll('.koktelindo_product_slide_div');
if (productSlideDivs.length > 0) {
    productSlideDivs.forEach(function (productSlideDiv) {
        let isDragging = false;
        let startX;
        let scrollLeft;

        productSlideDiv.addEventListener('mousedown', function (event) {
            isDragging = true;
            startX = event.pageX - productSlideDiv.offsetLeft;
            scrollLeft = productSlideDiv.scrollLeft;
            event.preventDefault(); // Prevent default click behavior
        });

        productSlideDiv.addEventListener('mouseleave', function () {
            isDragging = false;
        });

        productSlideDiv.addEventListener('mouseup', function () {
            isDragging = false;
        });

        productSlideDiv.addEventListener('mousemove', function (event) {
            if (!isDragging) return;
            event.preventDefault(); // Prevent default click behavior
            let x = event.pageX - productSlideDiv.offsetLeft;
            let walk = (x - startX) * 1; // Adjust scrolling speed

            productSlideDiv.scrollLeft = scrollLeft - walk;
        });
    });
}




/* Copy Current Page URL */
if (document.getElementById("koktel_meal_info_section")) {
    document.getElementById('koktel_copy_button').addEventListener('click', function (event) {
        event.preventDefault();  // Prevent the default action

        var currentUrl = window.location.href;

        // Create a temporary input element
        var tempInput = document.createElement('input');
        tempInput.value = currentUrl;
        document.body.appendChild(tempInput);

        // Select the input value
        tempInput.select();
        tempInput.setSelectionRange(0, 99999);  // For mobile devices

        // Copy the text inside the input
        document.execCommand('copy');

        // Remove the temporary input element
        document.body.removeChild(tempInput);


        // Create a box with the text "تم نسخ عنوان الصفحة"
        let successBox = document.createElement('div');


        // Get the value of "CurrentWebsiteLanguage" from localStorage
        let CurrentWebsiteLanguage = localStorage.getItem("CurrentWebsiteLanguage");

        /* In case if the current website language is set to Arabic */
        if (CurrentWebsiteLanguage === "ar") {
            successBox.textContent = `تم نسخ عنوان الصفحة`;

        } else if (CurrentWebsiteLanguage === "id") {
            successBox.textContent = `Judul Halaman Disalin`;

        }

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
    })
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