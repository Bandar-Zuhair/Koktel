/* Code to reload the sounds to make sure there is no latency */
let clickSoundEffect = new Audio('https://koktel-indo.com/click.ogg');
clickSoundEffect.preload = 'auto';

let successSoundEffect = new Audio('https://koktel-indo.com/success.ogg');
successSoundEffect.preload = 'auto';

let errorSoundEffect = new Audio('https://koktel-indo.com/error.ogg');
errorSoundEffect.preload = 'auto';

let isSoundEffectCooldown = false; // Flag to manage cooldown

function playSoundEffect(soundName) {

    if (isSoundEffectCooldown) return; // If in cooldown, do nothing

    isSoundEffectCooldown = true; // Set cooldown
    setTimeout(() => {
        isSoundEffectCooldown = false; // Reset cooldown after 150 milliseconds
    }, 150);

    let soundEffect;

    if (soundName === 'click') {
        soundEffect = clickSoundEffect;
    } else if (soundName === 'success') {
        soundEffect = successSoundEffect;
    } else if (soundName === 'error') {
        soundEffect = errorSoundEffect;
    }

    if (soundEffect) {
        soundEffect.currentTime = 0; // Ensure the audio plays from the start
        soundEffect.play();
    }
}




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


        /* Styling For Restaurant Cards Inner Info */
        document.querySelectorAll('.koktel_product_type_title').forEach(element => {
            element.style.direction = 'rtl';
        });


        /* Styling For Supermarket Cards Inner Pick Or Unpick Product */
        document.querySelectorAll('.koktel_add_product_button_div').forEach(element => {
            element.style.direction = 'rtl';
        });


        /* Styling For Restaurant Cards Inner Info */
        document.querySelectorAll('.koktelindo_product_slide_div').forEach(element => {
            element.style.flexDirection = 'row';
        });


        /* Styling For Restaurant Meal Details */
        document.querySelectorAll('.koktel_orignal_price_div').forEach(element => {
            element.style.justifyContent = 'flex-start';
        });


        /* Styling For Restaurant Meal Details */
        document.querySelectorAll('.finished_product_card_image_and_controllers_div').forEach(element => {
            element.style.flexDirection = 'row-reverse';
        });



        /* Change the orders page link icon direction */
        if (document.getElementById("koktel_order_page_icon_div")) {
            document.getElementById("koktel_order_page_icon_div").style.left = '0';
            document.getElementById("koktel_order_page_icon_div").style.right = '';
        }



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


        /* Styling For Restaurant Cards Inner Info */
        document.querySelectorAll('.koktel_product_type_title').forEach(element => {
            element.style.direction = 'ltr';
        });


        /* Styling For Supermarket Cards Inner Pick Or Unpick Product */
        document.querySelectorAll('.koktel_add_product_button_div').forEach(element => {
            element.style.direction = 'ltr';
        });


        /* Styling For Restaurant Cards Inner Info */
        document.querySelectorAll('.koktelindo_product_slide_div').forEach(element => {
            element.style.flexDirection = 'row-reverse';
        });


        /* Styling For Restaurant Meal Details */
        document.querySelectorAll('.koktel_orignal_price_div').forEach(element => {
            element.style.justifyContent = 'flex-end';
        });


        /* Styling For Restaurant Meal Details */
        document.querySelectorAll('.finished_product_card_image_and_controllers_div').forEach(element => {
            element.style.flexDirection = 'row';
        });




        /* Change the orders page link icon direction */
        if (document.getElementById("koktel_order_page_icon_div")) {
            document.getElementById("koktel_order_page_icon_div").style.left = '';
            document.getElementById("koktel_order_page_icon_div").style.right = '0';
        }
    }


    /* Show all the website body smoothly */
    setTimeout(function () {
        document.body.style.opacity = "1";
    }, 100);
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
    document.body.style.position = '';
    document.body.style.overflow = '';
    window.scrollTo(0, parseInt(document.body.style.top || '0') * -1);
    document.body.style.top = '';


    // Hide And Reset All Data Stored inside The 'FullScreenGuidanceOverlay' Element
    let FullScreenGuidanceOverlay = document.getElementById('koktel_full_screen_guidance_overlay');
    document.body.removeChild(FullScreenGuidanceOverlay);
    FullScreenGuidanceOverlay.innerHTML = '';
}




/* Function For Showing Full Screen Images */
function koktel_show_full_screen_image(src) {

    // Disable scrolling
    const scrollY = window.scrollY;
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';


    /* Create A Div To Contain The Big Image or Video */
    let FullScreenImgOverlay = document.createElement('div');
    FullScreenImgOverlay.classList.add("koktel_full_screen_img_overlay");

    /* onclick to close the full screen image mood */
    FullScreenImgOverlay.onclick = function () {

        // Re-enable scrolling
        document.body.style.position = '';
        document.body.style.overflow = '';
        window.scrollTo(0, parseInt(document.body.style.top || '0') * -1);
        document.body.style.top = '';

        FullScreenImgOverlay.style.display = 'none';

        /* Reset All Data Stored Inside The Full Screen Overlay Element */
        FullScreenImgOverlay.innerHTML = '';
    }


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

    /* Append FullScreenImgOverlay to the body */
    document.body.appendChild(FullScreenImgOverlay);

}

/* Open Website Guidance */
function koktel_websiteGuidance(buttonClicked) {

    // Disable scrolling
    const scrollY = window.scrollY;
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';


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
            <a href="https://koktel-indo.com" class="arLangText">1- في الصفحة الرئيسية انزل الى قسم اختيار الخدمة.</a>
            <a href="https://koktel-indo.com" class="indoLangText">1- Di halaman beranda, buka bagian pemilihan layanan</a>


            <a class="arLangText">2- بعد اختيار الخدمة، خذ نظرة على تعليمات الخدمة.</a>
            <a class="indoLangText">2- Setelah memilih layanan, lihat petunjuk layanan</a>
        `;

        /* Website Language */
    } else if (buttonClicked === 'website language') {

        webGuidanceDiv.classList.add('web_guidance_div');

        webGuidanceText = `
            <a onclick="playSoundEffect('success'); changeWebsiteLanguageFunction('ar')">العربية - Arabic</a>
            <a onclick="playSoundEffect('success'); changeWebsiteLanguageFunction('id')">الإندونيسية - Indonesian</a>
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

        webGuidanceDiv.classList.add('koktel_filter_products_type_div');

        webGuidanceText = `
            <a class="arLangText" onclick="koktel_scrollToRestaurantTypeId('koktel_special_restaurant_type')">مطاعم مميزة</a>
            <a class="indoLangText" onclick="koktel_scrollToRestaurantTypeId('koktel_special_restaurant_type')">Restoran Spesial</a>


            <a class="arLangText" onclick="koktel_scrollToRestaurantTypeId('koktel_fast_food_restaurant_type')">وجبات سريعة</a>
            <a class="indoLangText" onclick="koktel_scrollToRestaurantTypeId('koktel_fast_food_restaurant_type')">Makanan Cepat Saji</a>


            <a class="arLangText" onclick="koktel_scrollToRestaurantTypeId('koktel_arabic_restaurant_type')">أكلات عربية</a>
            <a class="indoLangText" onclick="koktel_scrollToRestaurantTypeId('koktel_arabic_restaurant_type')">Makanan Arab</a>


            <a class="arLangText" onclick="koktel_scrollToRestaurantTypeId('koktel_sea_food_restaurant_type')">أكلات بحرية</a>
            <a class="indoLangText" onclick="koktel_scrollToRestaurantTypeId('koktel_sea_food_restaurant_type')">Hidangan Laut</a>

        `;

        /* Filter Koktel Meal Type */
    } else if (buttonClicked === 'show koktel meal type page') {

        webGuidanceDiv.classList.add('koktel_filter_products_type_div');

        webGuidanceText = `
            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_special_meal_type')">مميز</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_special_meal_type')">Spesial</a>

            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_main_meal_type')">الأطباق الرئيسية</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_main_meal_type')">Main Dishes</a>

            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_grilled_meal_type')">مشويات</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_grilled_meal_type')">Barbeque</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_local_meal_type')">أكلات شعبية</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_local_meal_type')">Arabic Dishes</a>

            
            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_side_meal_type')">أطباق جانبية</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_side_meal_type')">Side Dishes</a>

            
            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_seafood_type')">أكلات بحرية</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_seafood_type')">Seafood</a>

            
            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_sandwitch_type')">سندويتشات</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_sandwitch_type')">Sandwitch</a>

            
            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_salads_type')">سلطات</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_salads_type')">Salads</a>

            
            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_pastry_meal_type')">معجنات</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_pastry_meal_type')">Pastry</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_breakfast_type')">فطور</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_breakfast_type')">Beakfast</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_sweet_meal_type')">حلى</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_sweet_meal_type')">Dessert</a>
        `;

        /* Filter KFC Meal Type */
    } else if (buttonClicked === 'show kfc meal type page') {

        webGuidanceDiv.classList.add('koktel_filter_products_type_div');

        webGuidanceText = `
            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_special_meal_type')">مميز</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_special_meal_type')">Spesial</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_combo_meal_type')">وجبات</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_combo_meal_type')">Combo</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_burger_meal_type')">برجر</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_burger_meal_type')">Burger</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_sandwich_meal_type')">ساندويتشات</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_sandwich_meal_type')">Sandwich</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_potatoes_meal_type')">بطاط مقلي</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_potatoes_meal_type')">Kentang Goreng</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_drinks_type')">مشروبات</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_drinks_type')">Drinks</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_kids_meal_type')">وجبات الاطفال</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_kids_meal_type')">Kids Meal</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_breakfast_meal_type')">فطور</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_breakfast_meal_type')">Sarapan</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_coffee_type')">قهوة</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_coffee_type')">Kopi</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_sweet_meal_type')">حلى</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_sweet_meal_type')">Dessert</a>
        `;

        /* Filter Supermarket Product Type */
    } else if (buttonClicked === 'show pizza hut meal type page') {

        webGuidanceDiv.classList.add('koktel_filter_products_type_div');

        webGuidanceText = `
            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_special_meal_type')">مميز</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_special_meal_type')">Spesial</a>

            
            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_pizza_meal_type')">بيتزا</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_pizza_meal_type')">Pizza</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_pasta_meal_type')">باستا</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_pasta_meal_type')">Pasta</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_appetizer_meal_type')">مقبلات</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_appetizer_meal_type')">Apperaizer</a>
        `;

        /* Filter Supermarket Product Type */
    } else if (buttonClicked === 'show kamannana meal type page') {

        webGuidanceDiv.classList.add('koktel_filter_products_type_div');

        webGuidanceText = `
            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_main_meal_type')">الأطباق الرئيسية</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_main_meal_type')">Main Dishes</a>

            
            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_grilled_meal_type')">مشويات</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_grilled_meal_type')">Barbeque</a>

            
            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_local_meal_type')">مقبلات وشعبيات</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_local_meal_type')">Side Dishes</a>

            
            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_legumes_meal_type')">بقوليات</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_legumes_meal_type')">Kacang Kacangan</a>

            
            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_salads_meal_type')">سلطات</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_salads_meal_type')">Salads</a>

            
            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_breakfast_meal_type')">فطور</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_breakfast_meal_type')">Breakfast</a>

            
            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_soup_meal_type')">شوربة</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_soup_meal_type')">Soup</a>

            
            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_bread_meal_type')">خبز</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_bread_meal_type')">Roti</a>

            
            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_sweet_meal_type')">حلى</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_sweet_meal_type')">Dessert</a>

            
            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_drinks_meal_type')">مشروبات</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_drinks_meal_type')">Drinks</a>

            
        `;

        /* Filter Supermarket Product Type */
    } else if (buttonClicked === 'show raidan meal type page') {

        webGuidanceDiv.classList.add('koktel_filter_products_type_div');

        webGuidanceText = `
            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_main_meal_type')">الأطباق الرئيسية</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_main_meal_type')">Main Course</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_grilled_meal_type')">مشويات</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_grilled_meal_type')">Grilled</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_starter_meal_type')">مقبلات</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_starter_meal_type')">Apperaizer</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_legumes_meal_type')">بقوليات</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_legumes_meal_type')">Kacang Kacangan</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_side_meal_type')">أطباق جانبية</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_side_meal_type')">Side Dishes</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_salad_meal_type')">سلطات</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_salad_meal_type')">Salads</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_soup_meal_type')">شوربة</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_soup_meal_type')">Soup</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_breakfast_meal_type')">فطور</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_breakfast_meal_type')">Breakfast</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_sweet_meal_type')">حلى</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_sweet_meal_type')">Dessert</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_drinks_meal_type')">مشروبات</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_drinks_meal_type')">Drinks</a>
        `;

        /* Filter Supermarket Product Type */
    } else if (buttonClicked === 'show mamanoura meal type page') {

        webGuidanceDiv.classList.add('koktel_filter_products_type_div');

        webGuidanceText = `
            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_main_meal_type')">الأطباق الرئيسية</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_main_meal_type')">Rice Dishes</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_berbeque_meal_type')">مشويات</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_berbeque_meal_type')">Barbeque</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_side_meal_type')">أطباق جانبية</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_side_meal_type')">Side Dishes</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_starter_meal_type')">مقبلات</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_starter_meal_type')">Appetizers</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_sandwich_meal_type')">ساندويتشات</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_sandwich_meal_type')">Sandwiches</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_pie_meal_type')">فطائر</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_pie_meal_type')">Damascus Pie</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_bread_meal_type')">خبز</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_bread_meal_type')">Roti</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_soup_meal_type')">شوربة</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_soup_meal_type')">Soups</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_salad_meal_type')">سلطات</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_salad_meal_type')">Salads</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_breakfast_meal_type')">فطور</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_breakfast_meal_type')">Breakfast</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_sweet_meal_type')">حلى</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_sweet_meal_type')">Sweets</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_drinks_meal_type')">مشروبات</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_drinks_meal_type')">Drinks</a>
        `;

        /* Filter Supermarket Product Type */
    } else if (buttonClicked === 'show reem albawadi meal type page') {

        webGuidanceDiv.classList.add('koktel_filter_products_type_div');

        webGuidanceText = `
            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_carcass_meal_type')">ذبائح كاملة</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_carcass_meal_type')">Special Tes</a>

            
            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_main_meal_type')">الأطباق الرئيسية</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_main_meal_type')">Main Dishes</a>

            
            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_berbeque_meal_type')">مشويات</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_berbeque_meal_type')">Berbeque</a>

            
            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_local_meal_type')">أكلات شعبية</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_local_meal_type')">Arabic Dishes</a>

            
            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_fish_meal_type')">سمك</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_fish_meal_type')">Fishes</a>

            
            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_appetizer_meal_type')">مقبلات</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_appetizer_meal_type')">Appetizer</a>
            
            
            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_salad_meal_type')">سلطات</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_salad_meal_type')">Salads</a>

            
            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_soup_meal_type')">شوربات</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_soup_meal_type')">Soup</a>

            
            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_pastry_meal_type')">معجنات</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_pastry_meal_type')">Pastry</a>

            
            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_breakfast_meal_type')">فطور</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_breakfast_meal_type')">Breakfast</a>

            
            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_sweet_meal_type')">حلى</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_sweet_meal_type')">Dessert</a>

            
            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_ice_cream_meal_type')">ايس كريم</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_ice_cream_meal_type')">Ice Cream</a>

            
            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_drinks_meal_type')">مشروبات</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_drinks_meal_type')">Drinks</a>

            
        `;

        /* Filter Supermarket Product Type */
    } else if (buttonClicked === 'show alriyan steak house meal type page') {

        webGuidanceDiv.classList.add('koktel_filter_products_type_div');

        webGuidanceText = `
            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_main_meal_type')">الأطباق الرئيسية</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_main_meal_type')">Hidangan Utama</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_steak_meal_type')">ستيك لحم ودجاج</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_steak_meal_type')">Steak Daging Dan Ayam</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_berbeque_meal_type')">مشويات</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_berbeque_meal_type')">Berbeque</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_fried_meal_type')">المقليات</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_fried_meal_type')">Goreng</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_pizza_meal_type')">بيتزا</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_pizza_meal_type')">Pizza</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_shawarma_meal_type')">سندويتشات</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_shawarma_meal_type')">Sandwitch</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_appetizer_meal_type')">مقبلات</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_appetizer_meal_type')">Appetizers</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_legumes_meal_type')">بقوليات</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_legumes_meal_type')">Kacang kacangan</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_salad_meal_type')">سلطات</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_salad_meal_type')">Salad</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_soup_meal_type')">شوربات</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_soup_meal_type')">Soup</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_pastry_meal_type')">معجنات</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_pastry_meal_type')">kue kering</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_macaroni_meal_type')">معكرونات</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_macaroni_meal_type')">Pasta</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_manakis_meal_type')">مناقيش وفطائر</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_manakis_meal_type')">Manakis Dan Fatayer</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_breakfast_meal_type')">فطور</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_breakfast_meal_type')">Sarapan</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_sweet_meal_type')">حلى</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_sweet_meal_type')">Mempermanis</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_ice_cream_meal_type')">ايس كريم</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_ice_cream_meal_type')">Ice Krim</a>


            <a class="arLangText" onclick="koktel_scrollToMealType('koktel_drinks_meal_type')">مشروبات</a>
            <a class="indoLangText" onclick="koktel_scrollToMealType('koktel_drinks_meal_type')">Minuman</a>


        `;

        /* Filter Supermarket Product Type */
    } else if (buttonClicked === 'show supermarket product type page') {

        webGuidanceDiv.classList.add('koktel_filter_products_type_div');

        webGuidanceText = `
            <a class="arLangText" onclick="koktel_scrollToProductType('koktel_arabic_food_product_section')">المواد الغذائية العربية</a>
            <a class="indoLangText" onclick="koktel_scrollToProductType('koktel_arabic_food_product_section')">Makanan Arab</a>

            
            <a class="arLangText" onclick="koktel_scrollToProductType('koktel_indomie_product_section')">اندومي</a>
            <a class="indoLangText" onclick="koktel_scrollToProductType('koktel_indomie_product_section')">Indomie</a>


            <a class="arLangText" onclick="koktel_scrollToProductType('koktel_drinks_product_section')">مشروبات</a>
            <a class="indoLangText" onclick="koktel_scrollToProductType('koktel_drinks_product_section')">Minuman</a>


            <a class="arLangText" onclick="koktel_scrollToProductType('koktel_chocolate_product_section')">شوكولاتة</a>
            <a class="indoLangText" onclick="koktel_scrollToProductType('koktel_chocolate_product_section')">Cokelat</a>


            <a class="arLangText" onclick="koktel_scrollToProductType('koktel_cheese_product_section')">أجبان</a>
            <a class="indoLangText" onclick="koktel_scrollToProductType('koktel_cheese_product_section')">Keju</a>


            <a class="arLangText" onclick="koktel_scrollToProductType('koktel_jam_product_section')">مربى</a>
            <a class="indoLangText" onclick="koktel_scrollToProductType('koktel_jam_product_section')">Selai</a>


            <a class="arLangText" onclick="koktel_scrollToProductType('koktel_chips_product_section')">شبس</a>
            <a class="indoLangText" onclick="koktel_scrollToProductType('koktel_chips_product_section')">Keripik</a>


            <a class="arLangText" onclick="koktel_scrollToProductType('koktel_sauces_product_section')">صلصات</a>
            <a class="indoLangText" onclick="koktel_scrollToProductType('koktel_sauces_product_section')">Saus</a>


            <a class="arLangText" onclick="koktel_scrollToProductType('koktel_oil_product_section')">زيت</a>
            <a class="indoLangText" onclick="koktel_scrollToProductType('koktel_oil_product_section')">minyak</a>


            <a class="arLangText" onclick="koktel_scrollToProductType('koktel_sweet_product_section')">حليب مكثف</a>
            <a class="indoLangText" onclick="koktel_scrollToProductType('koktel_sweet_product_section')">Susu Kental</a>


            <a class="arLangText" onclick="koktel_scrollToProductType('koktel_biscuit_product_section')">بسكوت</a>
            <a class="indoLangText" onclick="koktel_scrollToProductType('koktel_biscuit_product_section')">Biskuit</a>


            <a class="arLangText" onclick="koktel_scrollToProductType('koktel_candy_product_section')">حلوى</a>
            <a class="indoLangText" onclick="koktel_scrollToProductType('koktel_candy_product_section')">Permen</a>


            <a class="arLangText" onclick="koktel_scrollToProductType('koktel_ice_cream_product_section')">أيس كريم</a>
            <a class="indoLangText" onclick="koktel_scrollToProductType('koktel_ice_cream_product_section')">Es krim</a>


            <a class="arLangText" onclick="koktel_scrollToProductType('koktel_crunchy_cereal_product_section')">رقائق الذرة + مكسرات</a>
            <a class="indoLangText" onclick="koktel_scrollToProductType('koktel_crunchy_cereal_product_section')">Jagung + Kacang Kacangan</a>


            <a class="arLangText" onclick="koktel_scrollToProductType('koktel_tea_product_section')">شاي</a>
            <a class="indoLangText" onclick="koktel_scrollToProductType('koktel_tea_product_section')">Teh</a>


            <a class="arLangText" onclick="koktel_scrollToProductType('koktel_frozen_food_product_section')">طعام مثلج</a>
            <a class="indoLangText" onclick="koktel_scrollToProductType('koktel_frozen_food_product_section')">Makanan Beku</a>


            <a class="arLangText" onclick="koktel_scrollToProductType('koktel_teeth_product_section')">عناية اللأسنان</a>
            <a class="indoLangText" onclick="koktel_scrollToProductType('koktel_teeth_product_section')">Perawatan Gigi</a>


            <a class="arLangText" onclick="koktel_scrollToProductType('koktel_tissue_product_section')">مناديل</a>
            <a class="indoLangText" onclick="koktel_scrollToProductType('koktel_tissue_product_section')">Tisu</a>


            <a class="arLangText" onclick="koktel_scrollToProductType('koktel_soap_product_section')">صابون</a>
            <a class="indoLangText" onclick="koktel_scrollToProductType('koktel_soap_product_section')">Sabun</a>


            <a class="arLangText" onclick="koktel_scrollToProductType('koktel_shampoo_product_section')">شامبو</a>
            <a class="indoLangText" onclick="koktel_scrollToProductType('koktel_shampoo_product_section')">Makanan Beku</a>


            <a class="arLangText" onclick="koktel_scrollToProductType('koktel_skin_care_product_section')">عناية البشرة</a>
            <a class="indoLangText" onclick="koktel_scrollToProductType('koktel_skin_care_product_section')">Perawatan Kulit</a>
        `;

        /* Filter Bread Products Type */
    } else if (buttonClicked === 'show bread type page') {

        webGuidanceDiv.classList.add('koktel_filter_products_type_div');

        webGuidanceText = `
            <a class="arLangText" onclick="koktel_scrollToProductType('koktel_toast_product_section')">توست</a>
            <a class="indoLangText" onclick="koktel_scrollToProductType('koktel_toast_product_section')">Roti</a>


            <a class="arLangText" onclick="koktel_scrollToProductType('koktel_pies_product_section')">فطائر</a>
            <a class="indoLangText" onclick="koktel_scrollToProductType('koktel_pies_product_section')">Pai</a>
        `;

        /* Filter Pharmacy Product Type */
    } else if (buttonClicked === 'show pharmacy type page') {

        webGuidanceDiv.classList.add('koktel_filter_products_type_div');

        webGuidanceText = `
            <a class="arLangText" onclick="koktel_scrollToProductType('koktel_headache_product_section')">ألم الرأس</a>
            <a class="indoLangText" onclick="koktel_scrollToProductType('koktel_headache_product_section')">Sakit Kepala</a>


            <a class="arLangText" onclick="koktel_scrollToProductType('koktel_heartburn_product_section')">الحموضة / الحرقان</a>
            <a class="indoLangText" onclick="koktel_scrollToProductType('koktel_heartburn_product_section')">Keasaman / Rasa Terbakar</a>


            <a class="arLangText" onclick="koktel_scrollToProductType('koktel_joints_and_bruises_product_section')">المفاصل / الكدمات</a>
            <a class="indoLangText" onclick="koktel_scrollToProductType('koktel_joints_and_bruises_product_section')">Sendi / Memar</a>


            <a class="arLangText" onclick="koktel_scrollToProductType('koktel_women_care_product_section')">عناية المرأة</a>
            <a class="indoLangText" onclick="koktel_scrollToProductType('koktel_women_care_product_section')">Perawatan Wanita</a>

            
            <a class="arLangText" onclick="koktel_scrollToProductType('koktel_baby_care_product_section')">العناية بالأطفال</a>
            <a class="indoLangText" onclick="koktel_scrollToProductType('koktel_baby_care_product_section')">Penitipan Anak</a>


            <a class="arLangText" onclick="koktel_scrollToProductType('koktel_honey_product_section')">عسل</a>
            <a class="indoLangText" onclick="koktel_scrollToProductType('koktel_honey_product_section')">Madu</a>


            <a class="arLangText" onclick="koktel_scrollToProductType('koktel_vicks_product_section')">فكس</a>
            <a class="indoLangText" onclick="koktel_scrollToProductType('koktel_vicks_product_section')">Vicks</a>
        `;


    } else if (buttonClicked === 'show health and beauty product type page') {

        webGuidanceDiv.classList.add('koktel_filter_products_type_div');

        webGuidanceText = `
            <a class="arLangText" onclick="koktel_scrollToProductType('ask_for_a_meeting_products_slide_div_id')">حجز موعد</a>
            <a class="indoLangText" onclick="koktel_scrollToProductType('ask_for_a_meeting_products_slide_div_id')">Buat Janji Temu</a>


            <a class="arLangText" onclick="koktel_scrollToProductType('koktel_special_product_section')">مميز</a>
            <a class="indoLangText" onclick="koktel_scrollToProductType('koktel_special_product_section')">Special</a>


            <a class="arLangText" onclick="koktel_scrollToProductType('koktel_back_bone_pain_product_section')">ألم الظهر</a>
            <a class="indoLangText" onclick="koktel_scrollToProductType('koktel_back_bone_pain_product_section')">Back Bone Pain</a>
        `;

        /* Filter Shisha Product Type */
    } else if (buttonClicked === 'show shisha type page') {

        webGuidanceDiv.classList.add('koktel_filter_products_type_div');

        webGuidanceText = `
            <a class="arLangText" onclick="koktel_scrollToProductType('koktel_alphakhir_product_section')">الفاخر</a>
            <a class="indoLangText" onclick="koktel_scrollToProductType('koktel_alphakhir_product_section')">Rasa Al-Fakher</a>


            <a class="arLangText" onclick="koktel_scrollToProductType('koktel_mazaya_product_section')">مزايا</a>
            <a class="indoLangText" onclick="koktel_scrollToProductType('koktel_mazaya_product_section')">Rasa Mazaya</a>


            <a class="arLangText" onclick="koktel_scrollToProductType('koktel_majalis_product_section')">مجالس</a>
            <a class="indoLangText" onclick="koktel_scrollToProductType('koktel_majalis_product_section')">Rasa Majlis</a>
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
        document.body.style.position = '';
        document.body.style.overflow = '';
        window.scrollTo(0, parseInt(document.body.style.top || '0') * -1);
        document.body.style.top = '';


        // Hide And Reset All Data Stored inside The 'FullScreenGuidanceOverlay' Element
        let FullScreenGuidanceOverlay = document.getElementById('koktel_full_screen_guidance_overlay');
        document.body.removeChild(FullScreenGuidanceOverlay);
        FullScreenGuidanceOverlay.innerHTML = '';
    }
}









// Variable to store the most top empty cell row number
let restaurant_mostTopEmptyCellRowNumberValue;
let supermarket_mostTopEmptyCellRowNumberValue;
let bread_mostTopEmptyCellRowNumberValue;
let pharmacy_mostTopEmptyCellRowNumberValue;
let shisha_mostTopEmptyCellRowNumberValue;

// Declare the Google Apps Script Web App URL globally
let googleSheetWebAppURL = 'https://script.google.com/macros/s/AKfycbwIboZDiAmYDAmMUkx9eIo7Obtbbb_8YHYx-5PaRgAq7UIcO-Tuk9B0gsQAAHLCOysv/exec';

// Function to fetch data from the Google Sheets with target column number
async function fetchDataFromGoogleSheet(targetColumnNumber) {

    console.log('fetchDataFromGoogleSheet');

    // Target all elements with the class name 'koktel_download_order_pdf_div_class'
    let allDownloadButtons = document.querySelectorAll('.koktel_download_order_pdf_div_class');

    // Loop through each element and make it unclickable
    allDownloadButtons.forEach(button => {
        button.style.pointerEvents = 'none';  // Disable click events
        button.style.opacity = '0.5';         // Optionally, make it visually look disabled
    });



    try {
        // Use the globally defined URL with the column number as a query parameter
        let response = await fetch(`${googleSheetWebAppURL}?column=${targetColumnNumber}`);

        // Parse the response as JSON
        let data = await response.json();

        // Process the fetched data
        processSheetData(targetColumnNumber, data);

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to process the fetched data and find the most top empty cell row number
function processSheetData(targetColumnNumber, data) {

    console.log(`insert Done Text is Done ${targetColumnNumber} and ${data}`);

    // Get the first empty row number from the data
    let firstEmptyRow = data.firstEmptyRow;

    // Format the number to be 6 digits with leading zeros (if needed)
    /* restaurant_mostTopEmptyCellRowNumberValue = String(firstEmptyRow - 1).padStart(6, '0'); */

    // Get the current year as a four-digit number
    let currentYear = new Date().getFullYear();
    // Extract the last two digits of the year
    let lastTwoNumbersOfTheCurrentYear = currentYear % 100;


    if (targetColumnNumber === 1 /* Restaurant */) {
        restaurant_mostTopEmptyCellRowNumberValue = firstEmptyRow - 1;

    } else if (targetColumnNumber === 2 /* Supermarket */) {
        supermarket_mostTopEmptyCellRowNumberValue = firstEmptyRow - 1;

        koktel_createFinalWhatsApp_Products_Message('supermarket_orders', 'السوبرماركت', `su_${lastTwoNumbersOfTheCurrentYear}_${supermarket_mostTopEmptyCellRowNumberValue}`, 2)

    } else if (targetColumnNumber === 3 /* Bread */) {
        bread_mostTopEmptyCellRowNumberValue = firstEmptyRow - 1;

        koktel_createFinalWhatsApp_Products_Message('bread_orders', 'المخبوزات', `br_${lastTwoNumbersOfTheCurrentYear}_${bread_mostTopEmptyCellRowNumberValue}`, 3)

    } else if (targetColumnNumber === 4 /* Pharmacy */) {
        pharmacy_mostTopEmptyCellRowNumberValue = firstEmptyRow - 1;

        koktel_createFinalWhatsApp_Products_Message('pharmacy_orders', 'الصيدلية', `ph_${lastTwoNumbersOfTheCurrentYear}_${pharmacy_mostTopEmptyCellRowNumberValue}`, 4)

    } else if (targetColumnNumber === 5 /* Shisha */) {
        shisha_mostTopEmptyCellRowNumberValue = firstEmptyRow - 1;

        koktel_createFinalWhatsApp_Products_Message('shisha_orders', 'المعسلات', `sh_${lastTwoNumbersOfTheCurrentYear}_${shisha_mostTopEmptyCellRowNumberValue}`, 5)
    }

    // Target all elements with the class name 'koktel_download_order_pdf_div_class'
    let allDownloadButtons = document.querySelectorAll('.koktel_download_order_pdf_div_class');

    // Loop through each element and make it unclickable
    allDownloadButtons.forEach(button => {
        button.style.pointerEvents = 'auto';  // Disable click events
        button.style.opacity = '1';         // Optionally, make it visually look disabled
    });
}


// Function to insert "Done" text in the passed column number
async function insertDoneInColumn(targetColumnNumber) {

    console.log('insert Done Text is Done');

    try {
        await fetch(googleSheetWebAppURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'no-cors', // Disable CORS, but you won't get a response back
            body: JSON.stringify({
                action: 'insertDone',  // Action for inserting "Done"
                column: targetColumnNumber // Target column number
            })
        });

    } catch (error) {
    }
}



/* Function To Create The Final WhatsApp Message */
koktel_createFinalWhatsApp_Products_Message = function (localStorageName, storeName, orderIdName, targetColumnNumber) {

    // Get data orders from localStorage
    let orders = JSON.parse(localStorage.getItem(localStorageName));

    // Initialize variables
    let indoOrderInfo = '';
    let arOrderInfo = '';
    let grandTotal = 0;

    // Get the text inside the textarea (noteText)
    let noteTextarea = document.querySelector('.koktel_meal_info_note_textarea');
    let noteText = noteTextarea ? noteTextarea.value.trim() : ''; // Check if textarea exists

    // Loop through each order and extract relevant information
    orders.forEach((order, index) => {
        // Add each order's total price to the grand total
        grandTotal += order.totalPrice;

        // Add separators and order numbers
        indoOrderInfo += `-----------------------------\n`;
        indoOrderInfo += `Produk Nomor ${index + 1}:\n`;

        arOrderInfo += `-----------------------------\n`;
        arOrderInfo += `المنتج رقم ${index + 1}:\n`;

        // Add product details
        if (order.indo_productName) {
            indoOrderInfo += `Nama: ${order.indo_productName}\n`;
        }
        indoOrderInfo += `Jumlah: ${order.productAmount}\n`;
        indoOrderInfo += `Harga: ${order.totalPrice.toLocaleString()} Rp\n`;

        if (order.productName) {
            arOrderInfo += `الإسم: ${order.productName}\n`;
        }
        arOrderInfo += `العدد: ${order.productAmount}\n`;
        arOrderInfo += `الإجمالي: ${order.totalPrice.toLocaleString()} Rp\n`;

        // Add notes if available
        if (noteText) {
            indoOrderInfo += `Catatan: ${noteText}\n`;
            arOrderInfo += `الملاحظات: ${noteText}\n`;
        }
    });

    // Add final totals
    let taxAmount = grandTotal * 0.1;
    let deliveryFees = 20000; // Fixed delivery fee
    let lastTotalPrice = grandTotal + taxAmount + deliveryFees;


    // Get today's date
    let today = new Date();
    let formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;


    indoOrderInfo += `-----------------------------\n`;
    indoOrderInfo += `Pajak: ${taxAmount.toLocaleString()} Rp\n`;
    indoOrderInfo += `Kiriman: ${deliveryFees.toLocaleString()} Rp\n`;
    indoOrderInfo += `Harga Akhir: ${lastTotalPrice.toLocaleString()} Rp\n`;

    arOrderInfo += `-----------------------------\n`;
    arOrderInfo += `الضريبة: ${taxAmount.toLocaleString()} Rp\n`;
    arOrderInfo += `التوصيل: ${deliveryFees.toLocaleString()} Rp\n`;
    arOrderInfo += `الإجمالي: ${lastTotalPrice.toLocaleString()} Rp\n`;

    // Combine the final message
    let mainFinalMessage = `
        === طلب جديد من ${storeName} ===
        📅 تاريخ إرسال الطلب: ${formattedDate}
        🏷️ ${orderIdName}


        🔹 الطلب (بالعربي):
        ${arOrderInfo}

        📍 يرجى إرسال موقعك + رقم هاتفك لبدء تنفيذ الطلب.
        جميع طرق الدفع متوفرة سواءً أونلاين أو كاش.



        🔹 Pesanan (Indonesian):
        ${indoOrderInfo}

        📍 Harus Kirim Lokasi + Nomor Telepon Untuk Mulai Pemenuhan Pesanan..
        Semua Metode Bayaran Tersedia, Baik Online Atau Tunai
    `;

    // Call a function to insert a "Done" mark in the Google Sheet
    insertDoneInColumn(targetColumnNumber);

    // Send the final WhatsApp message
    sendTheFinalOrderThroughLiveChatWidget(mainFinalMessage);
};











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
        document.body.style.position = '';
        document.body.style.overflow = '';
        window.scrollTo(0, parseInt(document.body.style.top || '0') * -1);
        document.body.style.top = '';

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
        document.body.style.position = '';
        document.body.style.overflow = '';
        window.scrollTo(0, parseInt(document.body.style.top || '0') * -1);
        document.body.style.top = '';

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


        // Set the orignal meal price based on the price in the h6 inside the 'koktel_totalPriceDiv' div
        document.getElementById("koktel_orignal_price").innerText = `${totalCurrentMealPrice.toLocaleString()} Rp`;


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
                let requiredDiv = document.getElementById('koktel_required_div_' + index);

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


        /* Play a sound effect */
        playSoundEffect('success');


        if (document.getElementById('koktel_order_page_icon_div')) {
            document.getElementById('koktel_order_page_icon_div').style.opacity = '1';

        } else {

            // Get the inner text of the meal name
            let ar_restaurantNameLink = document.getElementById('koktel_ar_restaurant_name').innerText;

            // Create Button To Show Orders Page
            let koktel_mealOrderIconDiv = document.createElement('div');
            koktel_mealOrderIconDiv.id = 'koktel_order_page_icon_div';
            let koktel_mealOrderIcon = `<a href='https://koktel-indo.com/صفحات-مطاعم-اندونيسيا/${ar_restaurantNameLink}/طلباتك-من-مطعم-${ar_restaurantNameLink}' id="koktel_order_page_icon"><ion-icon name="cart-outline"></ion-icon></a>`;
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

        // Filter checkboxes that have either 'indo_checked_order_text' or 'ar_checked_order_text' attribute
        let filteredCheckboxes = Array.from(checkedCheckboxes).filter(checkbox =>
            checkbox.hasAttribute('indo_checked_order_text') ||
            checkbox.hasAttribute('ar_checked_order_text') ||
            checkbox.hasAttribute('indo_special_order_request_text') ||
            checkbox.hasAttribute('ar_special_order_request_text')
        );

        // Get the Arabic order text from the 'ar_checked_order_text' attribute of each filtered checkbox
        let ar_orderText = filteredCheckboxes.map(checkbox => checkbox.getAttribute('ar_checked_order_text') || '').join('\n');

        // Get the Indonesian order text from the 'indo_checked_order_text' attribute of each filtered checkbox
        let indo_orderText = filteredCheckboxes.map(checkbox => checkbox.getAttribute('indo_checked_order_text') || '').join('\n');




        // Get the Arabic order text from the 'ar_checked_order_text' attribute of each filtered checkbox
        let ar_specialOrderRequestText = filteredCheckboxes.map(checkbox => checkbox.getAttribute('ar_special_order_request_text') || '').join(', ');

        // Get the Indonesian special order request text from the 'indo_special_order_request_text' attribute of each filtered checkbox
        let indo_specialOrderRequestText = filteredCheckboxes.map(checkbox => checkbox.getAttribute('indo_special_order_request_text') || '').join(' + ');




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
            indo_orderText: indo_orderText,
            ar_specialOrderRequestText: ar_specialOrderRequestText,
            indo_specialOrderRequestText: indo_specialOrderRequestText,
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
            }, 2000); // Wait for the fade-out transition to complete (1.5s)
        }, 700); // Wait for 3 seconds before triggering fade-out


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


            // Get the div with the id 'final_order_pdf_content_container_div'
            let pdfContainerDiv = document.getElementById('final_order_pdf_content_container_div');
            // Clear existing content
            pdfContainerDiv.innerHTML = '';


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
                    <h2 class="indoLangText" onclick="koktel_show_order_details_page(${index})" style=" cursor: pointer;">Pesanan Nomor ${index + 1}</h2>


                    <div class="finished_product_card_image_and_controllers_div">

                        <img src=${orderData.mealImgSrc} alt="مطاعم اندونيسيا - كوكتيل" title="مطاعم اندونيسيا - كوكتيل" onclick="koktel_show_order_details_page(${index})" loading="lazy">

                        <div class='koktel_orderFinished_info_and_delete'>
                        
                            <h3 class="arLangText" onclick="koktel_show_order_details_page(${index})" style="color: rgb(0, 255, 0);">الإجمالي = ${orderData.totalCurrentMealPrice.toLocaleString()}</h3>
                            <h3 class="indoLangText" onclick="koktel_show_order_details_page(${index})" style="color: rgb(0, 255, 0);">Total = ${orderData.totalCurrentMealPrice.toLocaleString()}</h3>


                            <h3 class="arLangText" id="koktel_order_details_h3" onclick="koktel_show_order_details_page(${index})">تفاصيل الطلب</h3>
                            <h3 class="indoLangText" id="koktel_order_details_h3" onclick="koktel_show_order_details_page(${index})">Detail Pesanan</h3>


                            <h3 class="arLangText" onclick="koktel_ensure_delete_orders_box('حذف الطلب', ${index})" style="color: red;">حذف الطلب</h3>
                            <h3 class="indoLangText" onclick="koktel_ensure_delete_orders_box('حذف الطلب', ${index})" style="color: red;">Hapus</h3>

                        </div>
                    
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
                <div id="koktel_order_check_out_bill_div">

                    <h6 id="koktel_order_check_out_bill_title" class="arLangText">الفاتورة</h6>
                    <h6 id="koktel_order_check_out_bill_title" class="indoLangText">Tagihan</h6>



                    ${orders.map((order, index) => `
                        <h6 id="koktel_order_check_out_bill_details_text" class="arLangText">المنتج رقم ${index + 1} : ${order.totalCurrentMealPrice.toLocaleString()}</h6>
                        <h6 id="koktel_order_check_out_bill_details_text" class="indoLangText">Pesanan Nomor ${index + 1} : ${order.totalCurrentMealPrice.toLocaleString()}</h6>
                    `).join('')}
            
                    <h6 class="koktel_order_check_out_bill_total_price arLangText" style="border-top-right-radius: 7px; border-top-left-radius: 7px;">الضريبة : ${taxAmount.toLocaleString()} Rp</h6>
                    <h6 class="koktel_order_check_out_bill_total_price indoLangText" style="border-top-right-radius: 7px; border-top-left-radius: 7px;">Pajak : ${taxAmount.toLocaleString()} Rp</h6>
            
                    <h6 class="koktel_order_check_out_bill_total_price arLangText">التوصيل : ${deliveryFees.toLocaleString()} Rp</h6>
                    <h6 class="koktel_order_check_out_bill_total_price indoLangText">Pengiriman : ${deliveryFees.toLocaleString()} Rp</h6>
            
                    <h6 class="koktel_order_check_out_bill_total_price arLangText" style="border-bottom-right-radius: 7px; border-bottom-left-radius: 7px;">الإجمالي : ${lastTotalPrice.toLocaleString()} Rp</h6>
                    <h6 class="koktel_order_check_out_bill_total_price indoLangText" style="border-bottom-right-radius: 7px; border-bottom-left-radius: 7px;">Total : ${lastTotalPrice.toLocaleString()} Rp</h6>

                </div>

                <div class="koktel_download_order_pdf_and_whatsapp_number_div_class" onclick="koktel_createFinalWhatsApp_Resaurant_Message()">
                
                    <ion-icon name="cloud-upload-outline"></ion-icon>
                    <h5 class="arLangText">إرسال الطلبات</h5>
                    <h5 class="indoLangText">Kirim Orders</h5>

                </div>
            `;


            koktel_restaurant_order_details_title_ar_id.innerHTML = `طلباتك من ${ar_restaurantName} <spam class="koktel_orders_ready_to_send_text">جاهزة للإرسال</spam>`;
            koktel_restaurant_order_details_title_indo_id.innerHTML = `Pesanan Anda Dari ${indo_restaurantName} <spam class="koktel_orders_ready_to_send_text">Siap Dikirim</spam>`;

            /* Show The Following Code if There is Any Data in The ${localStorageName} Key */
            document.getElementById('koktel_order_check_out_div').innerHTML = koktel_order_check_out_whatsApp_content;
            document.getElementById('koktel_order_check_out_div').style.display = 'flex';
            document.getElementById('koktel_delete_all_restaurant_orders_button').style.display = 'block';


            /* Call a function to show the correct website language */
            setWebsiteLanguage();
        }

    }


    // Call renderOrders function to initially render orders
    renderOrders();







    /* Function To Show The Ensure Delete Box */
    koktel_ensure_delete_orders_box = function (clickedDeleteButton, index) {
        if (clickedDeleteButton === 'حذف الطلب') {
            // letruct the ID of the corresponding overlay element
            let overlayId = `koktel_ensure_delete_this_orders_overlay_${index}`;

            // Show the overlay element
            document.getElementById(overlayId).style.display = 'block';
        } else {
            document.getElementById('koktel_ensure_delete_all_orders_overlay').style.display = 'block';
        }

        // Disable scrolling
        const scrollY = window.scrollY;
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = '100%';
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
        document.body.style.position = '';
        document.body.style.overflow = '';
        window.scrollTo(0, parseInt(document.body.style.top || '0') * -1);
        document.body.style.top = '';
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
        document.body.style.position = '';
        document.body.style.overflow = '';
        window.scrollTo(0, parseInt(document.body.style.top || '0') * -1);
        document.body.style.top = '';
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
        let specialOrderRequestText = currentWebsiteLanguage === 'ar' ? order.ar_specialOrderRequestText : order.indo_specialOrderRequestText;
        let noteText = currentWebsiteLanguage === 'ar' ? order.noteText : order.indo_noteText;

        // Set the direction based on the current language
        let direction = currentWebsiteLanguage === 'ar' ? 'rtl' : 'ltr';

        // Create order details HTML content
        let orderDetailsContent = `
            <div id="koktel_order_details_text_img">
                <img src=${order.mealImgSrc} alt="مطاعم اندونيسيا - كوكتيل" title="مطاعم اندونيسيا - كوكتيل" id="koktel_web_logo_no_moving" onclick="koktel_show_full_screen_image(this.src)" loading="lazy">
            </div>

            <div>
                <h1 class="koktel_order_details_page_text_title arLangText">تفاصيل الطلب رقم ${orderIndexNumber + 1}</h1>
                <h1 class="koktel_order_details_page_text_title indoLangText">Detail Pesanan No ${orderIndexNumber + 1}</h1>
            </div>

            <div id="koktel_order_details_text_background">
                ${order.mealRestaurantRawName ? `<h4>${order.mealRestaurantRawName}</h4>` : ''}
                ${order.ar_mealName ? `<h4 class="arLangText">${order.ar_mealName}${specialOrderRequestText ? ` (${specialOrderRequestText})` : ''}</h4>` : ''}
                ${order.indo_mealName ? `<h4 class="indoLangText" style="direction: ltr">${order.indo_mealName}${specialOrderRequestText ? ` (${specialOrderRequestText})` : ''}</h4>` : ''}
                ${mealDetails ? `<h5 style="direction: ${direction}">${mealDetails}</h5>` : ''}
                ${orderText ? orderText.split('\n').map(line => `<h4 style="direction: ${direction}">${line}</h4>`).join('') : ''}
                ${noteText ? `<h4 class="arLangText">الملاحظة: ${noteText}</h4><h4 class="indoLangText">Catatan: ${noteText}</h4>` : ''}

                <h4 class="arLangText" style="color: rgb(255, 166, 0);">عدد الطلب: ${order.mealAmountNumber}</h4>
                <h4 class="indoLangText" style="color: rgb(255, 166, 0);">Jumlah Pesanan: ${order.mealAmountNumber}</h4>

                <h4 class="arLangText" style="color: rgb(0, 255, 0);">سعر الطلب = ${order.totalCurrentMealPrice}</h4>
                <h4 class="indoLangText" style="color: rgb(0, 255, 0);">Harganya = ${order.totalCurrentMealPrice}</h4>
            </div>

            <div id="koktel_order_details_text_bottom_button_div">
                <h5 class="arLangText" onclick="koktel_hide_order_details_page()">عودة</h5>
                <h5 class="indoLangText" onclick="koktel_hide_order_details_page()">Kembali</h5>

                <h5 class="arLangText koktel_delete_order_text_page_button" style="color: red;">حذف الطلب</h5>
                <h5 class="indoLangText koktel_delete_order_text_page_button" style="color: red;">Hapus</h5>
            </div>

            <div id='koktel_ensure_delete_text_orders_overlay' class='koktel_ensure_delete_orders_overlay' style='display:none'>
                <div class='koktel_ensure_delete_all_orders_div'>
                    <h6 class="arLangText">متاكد من حذف هذا الطلب؟</h6>
                    <h6 class="indoLangText">Apakah Anda yakin ingin menghapus permintaan ini</h6>

                    <div id='koktel_ensure_delete_all_orders_answer_div'>
                        <h6 class="arLangText" onclick='koktel_delete_text_orders_function("عودة")'>عودة</h6>
                        <h6 class="indoLangText" onclick='koktel_delete_text_orders_function("عودة")'>Kembali</h6>

                        <h6 class="arLangText koktel-confirm-delete">نعم</h6>
                        <h6 class="indoLangText koktel-confirm-delete">Ya</h6>
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

        // Add event listener to the delete button
        document.querySelectorAll('.koktel_delete_order_text_page_button').forEach(button => {
            button.addEventListener('click', () => {
                // Show the ensure delete overlay
                document.getElementById('koktel_ensure_delete_text_orders_overlay').style.display = 'block';

                // Ensure the correct index is passed when confirming deletion
                document.querySelectorAll('.koktel-confirm-delete').forEach(confirmButton => {
                    confirmButton.onclick = () => koktel_delete_text_orders_function("نعم", orderIndexNumber);
                });
            });
        });

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

        // Disable scrolling
        const scrollY = window.scrollY;
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = '100%';

    }

    /* if The Clicked Button From The Order Text Page */
    koktel_delete_text_orders_function = function (clickedButtonAnswer, indexNumber) {
        if (clickedButtonAnswer === 'عودة') {
            // Hide the ensure box element
            document.getElementById('koktel_ensure_delete_text_orders_overlay').style.display = 'none';
        } else {
            // Play a success sound effect
            new Audio('https://koktel-indo.com/success.mp3').play();

            // Hide the ensure box element
            document.getElementById('koktel_ensure_delete_text_orders_overlay').style.display = 'none';

            // Retrieve the orders from localStorage
            let orders = JSON.parse(localStorage.getItem(localStorageName));


            let orderPassedIndexNumber = indexNumber;
            // Update
            // Log the current state of orders and orderPassedIndexNumber
            console.log("Current orders:", orders);
            console.log("Index to delete:", orderPassedIndexNumber);

            // Check if orders and orderPassedIndexNumber are valid
            if (orders && orderPassedIndexNumber !== undefined && orderPassedIndexNumber >= 0 && orderPassedIndexNumber < orders.length) {
                // Remove the order with the specified index
                orders.splice(orderPassedIndexNumber, 1);

                // Save the updated orders back to localStorage
                localStorage.setItem(localStorageName, JSON.stringify(orders));

                // Check if orders is empty
                if (orders.length === 0) {
                    // Remove the orders key from localStorage
                    localStorage.removeItem(localStorageName);
                }
            } else {
                console.error("Invalid orders or index number:", orders, orderPassedIndexNumber);
            }

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

            // Trigger the slide and fade-in animation
            setTimeout(() => {
                successBox.style.transform = 'translate(-50%, -50%)'; // Slide animation
                successBox.style.opacity = '1'; // Fade-in animation
            }, 10);

            // Remove the success box after 3 seconds
            setTimeout(() => {
                successBox.style.opacity = '0';
                setTimeout(() => {
                    successBox.remove();
                }, 1000); // Wait for the fade-out transition to complete (1.5s)
            }, 3000); // Wait for 3 seconds before triggering fade-out

            // Remove the order details content from the container
            let orderDetailsContainer = document.getElementById('koktel_order_details_text_div');
            if (orderDetailsContainer) {
                orderDetailsContainer.remove();
            }

            // Show the order list container
            document.getElementById('koktel_order_details_div_id').style.display = 'flex';

            // Refresh the page or update the display to reflect the changes
            renderOrders();
        }

        // Re-enable scrolling
        document.body.style.position = '';
        document.body.style.overflow = '';
        window.scrollTo(0, parseInt(document.body.style.top || '0') * -1);
        document.body.style.top = '';
    };




    /* Function To Create The Final WhatsApp Message */
    koktel_createFinalWhatsApp_Resaurant_Message = async function () {
        // Wait for the fetchDataFromGoogleSheet to complete before proceeding
        await fetchDataFromGoogleSheet(1);

        // Get data orders from localStorage
        let orders = JSON.parse(localStorage.getItem(localStorageName));

        // Initialize variables
        let indoOrderInfo = '';
        let arOrderInfo = '';
        let grandTotal = 0;

        // Loop through each order and extract relevant information
        orders.forEach((order, index) => {
            // Replace comma and parse to float
            let totalWithDelivery = parseFloat(order.totalCurrentMealPrice.replace(/[,Rp\s]/g, ''));
            grandTotal += totalWithDelivery;


            // Add a clear separator for each order
            indoOrderInfo += `-----------------------------\n`;
            indoOrderInfo += `Pesanan Nomor ${index + 1}:\n`;

            arOrderInfo += `-----------------------------\n`;
            arOrderInfo += `الطلب رقم ${index + 1}:\n`;

            // Indonesian Order Information
            if (order.indo_mealName) {
                indoOrderInfo += `Nama Makanan: ${order.indo_mealName}\n`;
                if (order.indo_specialOrderRequestText) {
                    indoOrderInfo += `Permintaan Khusus: ${order.indo_specialOrderRequestText}\n`;
                }
            }
            if (order.indo_orderText) {
                indoOrderInfo += `Detail Pesanan:\n${order.indo_orderText.split('\n').join('\n')}\n`;
            }
            indoOrderInfo += `Jumlah Pesanan: ${order.mealAmountNumber}\n`;
            if (order.noteText) indoOrderInfo += `Catatan: ${order.noteText}\n`;
            indoOrderInfo += `Harga: ${totalWithDelivery.toLocaleString()} Rp\n`;

            // Arabic Order Information
            if (order.ar_mealName) {
                arOrderInfo += `اسم الطعام: ${order.ar_mealName}\n`;
                if (order.ar_specialOrderRequestText) {
                    arOrderInfo += `طلب خاص: ${order.ar_specialOrderRequestText}\n`;
                }
            }
            if (order.ar_orderText) {
                arOrderInfo += `تفاصيل الطلب:\n${order.ar_orderText.split('\n').join('\n')}\n`;
            }
            arOrderInfo += `عدد الطلب: ${order.mealAmountNumber}\n`;
            if (order.noteText) arOrderInfo += `الملاحظات: ${order.noteText}\n`;
            arOrderInfo += `السعر: ${totalWithDelivery.toLocaleString()} Rp\n`;


            console.log(totalWithDelivery);
            console.log(totalWithDelivery.toLocaleString());
            console.log(order.totalCurrentMealPrice);
            console.log(parseFloat(order.totalCurrentMealPrice));
        });


        // Get today's date
        let today = new Date();
        let formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
        let taxAmount = grandTotal * 0.1;
        grandTotal += taxAmount + deliveryFees;



        // Get the current year as a four-digit number
        let currentYear = new Date().getFullYear();
        // Extract the last two digits of the year
        let lastTwoNumbersOfTheCurrentYear = currentYear % 100;



        // Create the main message
        let mainMessage = `
            === طلب جديد من مطعم ${ar_restaurantName} ===

            📅 تاريخ إرسال الطلب: ${formattedDate}
            🏷️ re_${lastTwoNumbersOfTheCurrentYear}_${restaurant_mostTopEmptyCellRowNumberValue}

            🔹 الطلب (بالعربي):
            ${arOrderInfo}
            -----------------------------
            - الضريبة: ${taxAmount.toLocaleString()} Rp
            - التوصيل: ${deliveryFees.toLocaleString()} Rp
            - الإجمالي: ${grandTotal.toLocaleString()} Rp

            📍 يرجى إرسال موقعك + رقم هاتفك لبدء تنفيذ الطلب.
            جميع طرق الدفع متوفرة سواءً أونلاين أو كاش.



            🔹 Pesanan (Indonesian):
            ${indoOrderInfo}
            -----------------------------
            - Pajak: ${taxAmount.toLocaleString()} Rp
            - Kiriman: ${deliveryFees.toLocaleString()} Rp
            - Harga Akhir: ${grandTotal.toLocaleString()} Rp

            📍 Harus Kirim Lokasi + Nomor Telepon Untuk Mulai Pemenuhan Pesanan..
            Semua Metode Bayaran Tersedia, Baik Online Atau Tunai
        `;

        // Send the main message through Tidio chat widget
        sendTheFinalOrderThroughLiveChatWidget(mainMessage);
    };





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
    RestaurantOrderPageFunction('koktel_koktel_order_page_body', 'Koktel', 'كوكتيل', 'Koktel_LocalStorage', 20000, 'كوكتيل');
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

    /* Function to create all supermarket  */
    function createProductCards(products, containerId) {
        let container = document.getElementById(containerId);

        products.forEach(product => {
            let productCard = document.createElement('div');
            productCard.classList.add('koktel_product_card');
            productCard.classList.add('koktel_animation');

            productCard.innerHTML = `
                <div class="koktel_product_card_info">
                    <div class="koktel_product_card_img koktel_animation">
                        <img src="${product.imageSRC}.jpg" alt="سوبرماركت اندونيسيا - كوكتيل" title="سوبرماركت اندونيسيا - كوكتيل" onclick="koktel_show_full_screen_image('${product.imageSRC}.jpg')" loading="lazy">
                    </div>
                    <div>
                        <a>
                            <div class="koktel_product_name_div">
                                <h1 class="arLangText">${product.ar_name}</h1>
                                <h2 class="indoLangText">${product.indo_name}</h2>
                            </div>
                            <div class="koktel_product_price">
                                <h3>${product.price}</h3>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="koktel_add_product_button_div">
                    <h4 class="arLangText" onclick="koktel_addProductButton('${product.price}', this)">اضافة</h4>
                    <h4 class="indoLangText" onclick="koktel_addProductButton('${product.price}', this)">Tambah</h4>
                    <h5 style="display: none;">1</h5>
                    <ion-icon name="remove-outline" style="display: none;" onclick="koktel_minusProductButton('${product.price}', this)"></ion-icon>
                </div>
            `;

            container.appendChild(productCard);
        });
    }



    /* Call a function to craete all supermarket product */
    createProductCards(arabicFoodProducts, 'all_arabic_food_products_slide_div_id');
    createProductCards(indomieProducts, 'all_indomie_products_slide_div_id');
    createProductCards(drinksProducts, 'all_drinks_products_slide_div_id');
    createProductCards(chocolateProducts, 'all_chocolate_products_slide_div_id');
    createProductCards(cheeseProducts, 'all_cheese_products_slide_div_id');
    createProductCards(jamProducts, 'all_jam_products_slide_div_id');
    createProductCards(chipsProducts, 'all_chips_products_slide_div_id');
    createProductCards(saucesProducts, 'all_sauces_products_slide_div_id');
    createProductCards(oilProducts, 'all_oil_products_slide_div_id');
    createProductCards(sweetProducts, 'all_sweet_products_slide_div_id');
    createProductCards(biscuitProducts, 'all_biscuit_products_slide_div_id');
    createProductCards(candyProducts, 'all_candy_products_slide_div_id');
    createProductCards(iceCreamProducts, 'all_ice_cream_products_slide_div_id');
    createProductCards(crunchyCerealProducts, 'all_crunchy_cereal_products_slide_div_id');
    createProductCards(soapProducts, 'all_soap_products_slide_div_id');
    createProductCards(shampooProducts, 'all_shampoo_products_slide_div_id');
    createProductCards(teaProducts, 'all_tea_products_slide_div_id');
    createProductCards(frozenFoodProducts, 'all_frozen_food_products_slide_div_id');
    createProductCards(teethProducts, 'all_teeth_products_slide_div_id');
    createProductCards(skinCareProducts, 'all_skin_care_products_slide_div_id');
    createProductCards(tissueProducts, 'all_tissue_products_slide_div_id');



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


    /* Scroll To Clicked Product type */
    koktel_scrollToProductType = function (RestaurantElementIdName) {

        // Re-enable scrolling
        document.body.style.position = '';
        document.body.style.overflow = '';
        window.scrollTo(0, parseInt(document.body.style.top || '0') * -1);
        document.body.style.top = '';


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


            // Create The Text To Display The Total Price
            supermarkerBottomCounterDiv.innerHTML = `<h6 class="arLangText">إضافة الطلب<br> = ${addedNumber.toLocaleString()}</h6><h6 class="indoLangText">Tambah Permintaan<br> = ${addedNumber.toLocaleString()}</h6>`;


            // Append The Container Div To The Body of The Document
            document.body.appendChild(supermarkerBottomCounterDiv);

            // Attach a click event listener to the 'supermarkerBottomCounterDiv' element
            supermarkerBottomCounterDiv.addEventListener('click', function () {


                supermarkerBottomCounterDiv.style.pointerEvents = 'none';
                supermarkerBottomCounterDiv.innerHTML = `<h6 class="arLangText" style="background: darkgray;">تمت إضافة<br>الطلب بنجاح</h6><h6 class="indoLangText" style="background: darkgray;">Permintaan Telah<br>Berhasil Ditambahkan</h6>`;

                /* Call a function to show the correct website language */
                setWebsiteLanguage();



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
                    let koktel_mealOrderIcon = `<a href='https://koktel-indo.com/%D8%B7%D9%84%D8%A8%D8%A7%D8%AA%D9%83-%D9%85%D9%86-%D8%A7%D9%84%D8%B3%D9%88%D8%A8%D8%B1%D9%85%D8%A7%D8%B1%D9%83%D8%AA' id="koktel_order_page_icon"><ion-icon name="cart-outline"></ion-icon></a>`;
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
            let totalPriceElement = document.getElementById('koktel_product_bottom_counter_div');
            let currentTotal = parseFloat(totalPriceElement.innerText.split('=')[1].trim().replace(/[^\d.]/g, ''));

            // Calculate The New Total Price By Adding The Added Number To The Current Total
            let newTotal = currentTotal + parseFloat(addedNumber.replace(/[^\d.]/g, ''));

            // Update The Text Content of The Total Price Display To Display The New Total
            totalPriceElement.innerHTML = `<h6 class="arLangText">إضافة الطلب<br> = ${newTotal.toLocaleString()} Rp</h6><h6 class="indoLangText">Tambah Permintaan<br> = ${newTotal.toLocaleString()} Rp</h6>`;

            // Ensure 'supermarkerBottomCounterDiv' is visible
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



        /* Call a function to show the correct website language */
        setWebsiteLanguage();
    }


    // Function To Handle The Click Event On Ion-Icon (Minus) Element
    koktel_minusProductButton = function (subtractedNumber, clickedElement) {
        // Get The Current Total Price From The Displayed Text
        let totalPriceElement = document.getElementById('koktel_product_bottom_counter_div');
        let currentTotal = parseFloat(totalPriceElement.innerText.split('=')[1].trim().replace(/[^\d.]/g, ''));

        // Calculate The New Total Price By Subtracting The Subtracted Number From The Current Total
        let newTotal = currentTotal - parseFloat(subtractedNumber.replace(/[^\d.]/g, ''));

        // Update The Text Content of The Total Price Display To Display The New Total
        totalPriceElement.innerHTML = `<h6 class="arLangText">إضافة الطلب<br> = ${newTotal.toLocaleString()} Rp</h6><h6 class="indoLangText">Tambah Permintaan<br> = ${newTotal.toLocaleString()} Rp</h6>`;

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

            // Get the 'supermarkerBottomCounterDiv' element
            let supermarkerBottomCounterDiv = document.getElementById('koktel_product_bottom_counter_div');

            // Check if NewTotal is 0 And Hide The 'upermarkerBottomCounterDiv' Element
            if (newTotal === 0) {
                supermarkerBottomCounterDiv.style.display = 'none';
            }
        }


        /* Call a function to show the correct website language */
        setWebsiteLanguage();
    }
}

/* Function To Create Supermarket Orders Details Page Content And Final WhatsApp Message */
if (document.getElementById("koktel_supermarket_order_details_body_id")) {

    /* Create Content For The Basic Orders Page */
    let all_order_page_content = `
        <div class="koktel_order_details_div" id="koktel_order_details_div_id" style="display: flex;">

            <h1 id="koktel_supermarket_order_details_title_ar_id" class="koktel_order_details_title arLangText">طلباتك من السوبرماركت</h1>
            <h1 id="koktel_supermarket_order_details_title_indo_id" class="koktel_order_details_title indoLangText">Pesanan Anda dari Supermarket</h1>


            <div class='koktel_order_finished_card_area' id='koktel_order_finished_card_area_id'></div>

            <div>
                <h4 id='koktel_delete_all_restaurant_orders_button' class='koktel_delete_all_orders_button_class arLangText' onclick='koktel_ensure_delete_orders_box(this)'>حذف جميع الطلبات</h4>
                <h4 id='koktel_delete_all_restaurant_orders_button' class='koktel_delete_all_orders_button_class indoLangText' onclick='koktel_ensure_delete_orders_box(this)'>Hapus semua pesanan</h4>
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
            koktel_supermarket_order_details_title_indo_id.innerHTML = `Pesanan Anda dari Supermarket`;

            // Hide These Elements if There is No Any Restaurant Orders
            document.getElementById('koktel_order_check_out_div').innerHTML = '';
            document.getElementById('koktel_meal_info_note_id').style.display = 'none';

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

                // letruct the inner HTML content for the order
                let localStorageOrderCardContent = `
                    <h2 class="arLangText" style=cursor: text; cursor: text;">منتج رقم ${index + 1}</h2>
                    <h2 class="indoLangText" style=cursor: text; cursor: text;">Nomor Produk ${index + 1}</h2>


                    <h2 class="arLangText" style="color: aqua; cursor: text;">${orderData.productName}</h2>
                    <h2 class="indoLangText" style="color: aqua; cursor: text;">${orderData.indo_productName}</h2>


                    <div class="finished_product_card_image_and_controllers_div">

                        <img src="${orderData.productImgSrc}" alt="سوبرماركت اندونيسيا - كوكتيل" title="سوبرماركت اندونيسيا - كوكتيل" onclick="koktel_show_full_screen_image(this.src)" loading="lazy">


                        <div class='koktel_orderFinished_info_and_delete'>

                            <h3 class="arLangText" style="color: rgb(255, 166, 0); cursor: text;">العدد = ${orderData.productAmount}</h3>
                            <h3 class="indoLangText" style="color: rgb(255, 166, 0); cursor: text;">Kuantitas = ${orderData.productAmount}</h3>


                            <h3 id="koktel_order_total_price_h3" class="arLangText">الإجمالي = ${orderData.totalPrice.toLocaleString()} Rp</h3>
                            <h3 id="koktel_order_total_price_h3" class="indoLangText">Total = ${orderData.totalPrice.toLocaleString()} Rp</h3>


                            <h3 class="arLangText" onclick="koktel_ensure_delete_orders_box('حذف الطلب', ${index})" style="color: red;">حذف الطلب</h3>
                            <h3 class="indoLangText" onclick="koktel_ensure_delete_orders_box('حذف الطلب', ${index})" style="color: red;">Hapus</h3>

                        </div>

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

                <div class="koktel_download_order_pdf_and_whatsapp_number_div_class" onclick="fetchDataFromGoogleSheet(2)">
                
                    <ion-icon name="cloud-upload-outline"></ion-icon>
                    <h5 class="arLangText">إرسال الطلبات</h5>
                    <h5 class="indoLangText">Kirim Orders</h5>

                </div>
            `;


            /* Update The Title Of The Page If there is Any Orders */
            koktel_supermarket_order_details_title_ar_id.innerHTML = `طلباتك من السوبرماركت <spam class="koktel_orders_ready_to_send_text">جاهزة للإرسال</spam>`;
            koktel_supermarket_order_details_title_indo_id.innerHTML = `Pesanan Anda dari Supermarket <spam class="koktel_orders_ready_to_send_text">Siap Dikirim</spam>`;

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


            if (clickedDeleteButton === 'حذف الطلب') {
                // letruct the ID of the corresponding overlay element
                let overlayId = `koktel_ensure_delete_this_orders_overlay_${index}`;

                // Show the overlay element
                document.getElementById(overlayId).style.display = 'block';
            } else {
                document.getElementById('koktel_ensure_delete_all_orders_overlay').style.display = 'block';
            }

        }

        // Disable scrolling
        const scrollY = window.scrollY;
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = '100%';
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
                successBox.textContent = 'Semua pesanan Supermarket telah dihapus';

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
        document.body.style.position = '';
        document.body.style.overflow = '';
        window.scrollTo(0, parseInt(document.body.style.top || '0') * -1);
        document.body.style.top = '';
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
                document.getElementById('koktel_delete_all_restaurant_orders_button').display = 'none';
                document.getElementById('koktel_order_check_out_div').innerHTML = '';
            }





            // Refresh the page or update the display to reflect the changes
            renderOrders();

            // Create a box with the text "تم حذف جميع الطلبات"
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


            /* Can a function to show the correct website language */
            setWebsiteLanguage();
        }

        // Re-enable scrolling
        document.body.style.position = '';
        document.body.style.overflow = '';
        window.scrollTo(0, parseInt(document.body.style.top || '0') * -1);
        document.body.style.top = '';
    }
}
/* Up Supermarket Code Up */











/* Down Bread Down */
/* Function To Add Orders And Create bread_orders Key in the localStorage */
if (document.getElementById("koktel_bread_section")) {

    /* Function to create all supermarket  */
    function createProductCards(products, containerId) {
        let container = document.getElementById(containerId);

        products.forEach(product => {
            let productCard = document.createElement('div');
            productCard.classList.add('koktel_product_card');
            productCard.classList.add('koktel_animation');

            productCard.innerHTML = `
                <div class="koktel_product_card_info">
                    <div class="koktel_product_card_img koktel_animation">
                        <img src="${product.imageSRC}.jpg" alt="مخبوزات اندونيسيا - كوكتيل" title="مخبوزات اندونيسيا - كوكتيل" onclick="koktel_show_full_screen_image('${product.imageSRC}.jpg')" loading="lazy">
                    </div>
                    <div>
                        <a>
                            <div class="koktel_product_name_div">
                                <h1 class="arLangText">${product.ar_name}</h1>
                                <h2 class="indoLangText">${product.indo_name}</h2>
                            </div>
                            <div class="koktel_product_price">
                                <h3>${product.price}</h3>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="koktel_add_product_button_div">
                    <h4 class="arLangText" onclick="koktel_addProductButton('${product.price}', this)">اضافة</h4>
                    <h4 class="indoLangText" onclick="koktel_addProductButton('${product.price}', this)">Tambah</h4>
                    <h5 style="display: none;">1</h5>
                    <ion-icon name="remove-outline" style="display: none;" onclick="koktel_minusProductButton('${product.price}', this)"></ion-icon>
                </div>
            `;

            container.appendChild(productCard);
        });
    }



    /* Call a function to craete all supermarket product */
    createProductCards(breadProducts, 'all_bread_products_slide_div_id');
    createProductCards(piesProducts, 'all_pies_products_slide_div_id');





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

    /* Scroll To Clicked Product type */
    koktel_scrollToProductType = function (RestaurantElementIdName) {

        // Re-enable scrolling
        document.body.style.position = '';
        document.body.style.overflow = '';
        window.scrollTo(0, parseInt(document.body.style.top || '0') * -1);
        document.body.style.top = '';

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
        let breadBottomCounterDiv = document.getElementById('koktel_product_bottom_counter_div');

        // Get the parent card element of the clicked h4 element
        let parentCard = clickedElement.closest('.koktel_product_card');

        // Extract Arabic Product Name
        let productName = parentCard.querySelector('.koktel_product_name_div h1').textContent.trim();


        // Extract Indo Product Name
        let indo_productName = parentCard.querySelector('.koktel_product_name_div h2').textContent.trim();

        // Extract img src
        let imgSrc = parentCard.querySelector('.koktel_product_card_img img').src;


        // Check if The Container Div Exists
        if (!breadBottomCounterDiv) {
            // If The Container Doesn't Exist, Then Create New One
            breadBottomCounterDiv = document.createElement('div');
            breadBottomCounterDiv.id = 'koktel_product_bottom_counter_div';


            breadBottomCounterDiv.innerHTML = `<h6 class="arLangText">إضافة الطلب<br> = ${addedNumber.toLocaleString()}</h6><h6 class="indoLangText">Tambah Permintaan<br> = ${addedNumber.toLocaleString()}</h6>`;


            // Append The Container Div To The Body of The Document
            document.body.appendChild(breadBottomCounterDiv);

            // Attach a click event listener to the 'breadBottomCounterDiv' element
            breadBottomCounterDiv.addEventListener('click', function () {


                breadBottomCounterDiv.style.pointerEvents = 'none';
                breadBottomCounterDiv.innerHTML = `<h6 class="arLangText" style="background: darkgray;">تمت إضافة<br>الطلب بنجاح</h6><h6 class="indoLangText" style="background: darkgray;">Permintaan Telah<br>Berhasil Ditambahkan</h6>`;

                /* Call a function to show the correct website language */
                setWebsiteLanguage();

                

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

                    // Remove the element from the DOM after the fade-out animation completes
                    setTimeout(() => {
                        successBox.remove();
                    }, 2000); // Wait for the fade-out transition to complete (1.5s)

                    // Refresh The Page After Adding The Selected Orders
                    setTimeout(() => {
                        location.reload();
                    }, 1200);
                }, 700); // Wait for 3 seconds before triggering fade-out


                if (!document.getElementById('koktel_order_page_icon')) {
                    // Create Button To Show Orders Page
                    let koktel_mealOrderIconDiv = document.createElement('div');
                    koktel_mealOrderIconDiv.id = 'koktel_order_page_icon_div';
                    let koktel_mealOrderIcon = `<a href='https://koktel-indo.com/%D8%B7%D9%84%D8%A8%D8%A7%D8%AA%D9%83-%D9%85%D9%86-%D8%A7%D9%84%D9%85%D8%AE%D8%A8%D9%88%D8%B2%D8%A7%D8%AA' id="koktel_order_page_icon"><ion-icon name="cart-outline"></ion-icon></a>`;
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
            let totalPriceElement = document.getElementById('koktel_product_bottom_counter_div');
            let currentTotal = parseFloat(totalPriceElement.innerText.split('=')[1].trim().replace(/[^\d.]/g, ''));

            // Calculate The New Total Price By Adding The Added Number To The Current Total
            let newTotal = currentTotal + parseFloat(addedNumber.replace(/[^\d.]/g, ''));

            // Update The Text Content of The Total Price Display To Display The New Total
            totalPriceElement.innerHTML = `<h6 class="arLangText">إضافة الطلب<br> = ${newTotal.toLocaleString()} Rp</h6><h6 class="indoLangText">Tambah Permintaan<br> = ${newTotal.toLocaleString()} Rp</h6>`;

            // Ensure 'breadBottomCounterDiv' is visible
            breadBottomCounterDiv.style.display = 'flex';
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


        /* Call a function to show the correct website language */
        setWebsiteLanguage();
    }


    // Function To Handle The Click Event On Ion-Icon (Minus) Element
    koktel_minusProductButton = function (subtractedNumber, clickedElement) {
        // Get The Current Total Price From The Displayed Text
        let totalPriceElement = document.getElementById('koktel_product_bottom_counter_div');
        let currentTotal = parseFloat(totalPriceElement.innerText.split('=')[1].trim().replace(/[^\d.]/g, ''));

        // Calculate The New Total Price By Subtracting The Subtracted Number From The Current Total
        let newTotal = currentTotal - parseFloat(subtractedNumber.replace(/[^\d.]/g, ''));

        // Update The Text Content of The Total Price Display To Display The New Total
        totalPriceElement.innerHTML = `<h6 class="arLangText">إضافة الطلب<br> = ${newTotal.toLocaleString()} Rp</h6><h6 class="indoLangText">Tambah Permintaan<br> = ${newTotal.toLocaleString()} Rp</h6>`;

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

            // Get the 'breadBottomCounterDiv' element
            let breadBottomCounterDiv = document.getElementById('koktel_product_bottom_counter_div');

            // Check if NewTotal is 0 And Hide The 'upermarkerBottomCounterDiv' Element
            if (newTotal === 0) {
                breadBottomCounterDiv.style.display = 'none';
            }
        }


        /* Call a function to show the correct website language */
        setWebsiteLanguage();
    }
}

/* Function To Create Pharmacy Orders Details Page Content And Final WhatsApp Message */
if (document.getElementById("koktel_bread_order_details_body_id")) {

    /* Create Content For The Basic Orders Page */
    let all_order_page_content = `
        <div class="koktel_order_details_div" id="koktel_order_details_div_id" style="display: flex;">

            <h1 id="koktel_supermarket_order_details_title_ar_id" class="koktel_order_details_title arLangText">طلباتك من المخبوزات</h1>
            <h1 id="koktel_supermarket_order_details_title_indo_id" class="koktel_order_details_title indoLangText">Pesanan Anda dari Roti</h1>


            <div class='koktel_order_finished_card_area' id='koktel_order_finished_card_area_id'></div>

            <div>
                <h4 id='koktel_delete_all_restaurant_orders_button' class='koktel_delete_all_orders_button_class arLangText' onclick='koktel_ensure_delete_orders_box(this)'>حذف جميع الطلبات</h4>
                <h4 id='koktel_delete_all_restaurant_orders_button' class='koktel_delete_all_orders_button_class indoLangText' onclick='koktel_ensure_delete_orders_box(this)'>Hapus semua pesanan</h4>
            </div>

            <div class="koktel_meal_info_note" id="koktel_meal_info_note_id" style="margin-top: 5px; display: none;">
                <textarea placeholder="ملاحظاتك للمخبوزات هنا" class="koktel_meal_info_note_textarea arLangText" maxlength="100"></textarea>
                <textarea placeholder="Tanggapan Anda untuk supermarket" class="koktel_meal_info_note_textarea indoLangText" maxlength="100"></textarea>
            </div>

            <div class="koktel_koktel_order_details_bottom_button_div" id='koktel_total_order_price_text'></div>

            <div id="koktel_order_check_out_div" style="display: none;"></div>


            <div id='koktel_ensure_delete_all_orders_overlay' class='koktel_ensure_delete_orders_overlay' style='display:none'>
                <div class='koktel_ensure_delete_all_orders_div'>

                    <h6 class="arLangText">متاكد من حذف جميع الطلبات؟</h6>
                    <h6 class="indoLangText">Apakah Anda yakin ingin menghapus semua pesanan</h6>


                    <div id='koktel_ensure_delete_all_orders_answer_div'>

                        <h6 class="arLangText" onclick='koktel_delete_all_bread_orders_function("عودة")'>عودة</h6>
                        <h6 class="indoLangText" onclick='koktel_delete_all_bread_orders_function("عودة")'>Kembali</h6>


                        <h6 class="arLangText" onclick='koktel_delete_all_bread_orders_function("نعم")'>نعم</h6>
                        <h6 class="indoLangText" onclick='koktel_delete_all_bread_orders_function("نعم")'>Ya</h6>

                    </div>

                </div>
            </div>

                
            <a itemprop="url" href="https://koktel-indo.com/%D9%85%D8%AE%D8%A8%D9%88%D8%B2%D8%A7%D8%AA-%D8%A7%D9%86%D8%AF%D9%88%D9%86%D9%8A%D8%B3%D9%8A%D8%A7"
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
                <h1 class="koktel_there_is_no_orders_text_class arLangText">لاتوجد طلبات بعد..<ion-icon name="telescope-outline"></ion-icon></h1>
                <h1 class="koktel_there_is_no_orders_text_class indoLangText"><ion-icon name="telescope-outline"></ion-icon>..Belum Ada Permintaan</h1>
            `;

            /* Update The Title Of The Page If there is No Any Orders */
            koktel_supermarket_order_details_title_ar_id.innerHTML = `طلباتك من المخبوزات`;
            koktel_supermarket_order_details_title_indo_id.innerHTML = `Pesanan Anda dari Roti`;

            // Hide These Elements if There is No Any Restaurant Orders
            document.getElementById('koktel_order_check_out_div').innerHTML = '';
            document.getElementById('koktel_meal_info_note_id').style.display = 'none';


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

                // letruct the inner HTML content for the order
                let localStorageOrderCardContent = `
                    <h2 class="arLangText" style=cursor: text; cursor: text;">منتج رقم ${index + 1}</h2>
                    <h2 class="indoLangText" style=cursor: text; cursor: text;">Nomor Produk ${index + 1}</h2>


                    <h2 class="arLangText" style="color: aqua; cursor: text;">${orderData.productName}</h2>
                    <h2 class="indoLangText" style="color: aqua; cursor: text;">${orderData.indo_productName}</h2>


                    <div class="finished_product_card_image_and_controllers_div">

                        <img src="${orderData.productImgSrc}" alt="سوبرماركت اندونيسيا - كوكتيل" title="سوبرماركت اندونيسيا - كوكتيل" onclick="koktel_show_full_screen_image(this.src)" loading="lazy">


                        <div class='koktel_orderFinished_info_and_delete'>

                            <h3 class="arLangText" style="color: rgb(255, 166, 0); cursor: text;">العدد = ${orderData.productAmount}</h3>
                            <h3 class="indoLangText" style="color: rgb(255, 166, 0); cursor: text;">Kuantitas = ${orderData.productAmount}</h3>


                            <h3 id="koktel_order_total_price_h3" class="arLangText">الإجمالي = ${orderData.totalPrice.toLocaleString()} Rp</h3>
                            <h3 id="koktel_order_total_price_h3" class="indoLangText">Total = ${orderData.totalPrice.toLocaleString()} Rp</h3>


                            <h3 class="arLangText" onclick="koktel_ensure_delete_orders_box('حذف الطلب', ${index})" style="color: red;">حذف الطلب</h3>
                            <h3 class="indoLangText" onclick="koktel_ensure_delete_orders_box('حذف الطلب', ${index})" style="color: red;">Hapus</h3>

                        </div>

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
                
                <div class="koktel_download_order_pdf_and_whatsapp_number_div_class" onclick="fetchDataFromGoogleSheet(3)">
                
                    <ion-icon name="cloud-upload-outline"></ion-icon>
                    <h5 class="arLangText">إرسال الطلبات</h5>
                    <h5 class="indoLangText">Kirim Orders</h5>

                </div>
            `;

            /* Update The Title Of The Page If there is Any Orders */
            koktel_supermarket_order_details_title_ar_id.innerHTML = `طلباتك من المخبوزات <spam class="koktel_orders_ready_to_send_text">جاهزة للإرسال</spam>`;
            koktel_supermarket_order_details_title_indo_id.innerHTML = `Pesanan Anda dari Roti <spam class="koktel_orders_ready_to_send_text">Siap Dikirim</spam>`;

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


            if (clickedDeleteButton === 'حذف الطلب') {
                // letruct the ID of the corresponding overlay element
                let overlayId = `koktel_ensure_delete_this_orders_overlay_${index}`;

                // Show the overlay element
                document.getElementById(overlayId).style.display = 'block';
            } else {
                document.getElementById('koktel_ensure_delete_all_orders_overlay').style.display = 'block';
            }

        }

        // Disable scrolling
        const scrollY = window.scrollY;
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = '100%';
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


            // Get the value of "CurrentWebsiteLanguage" from localStorage
            let CurrentWebsiteLanguage = localStorage.getItem("CurrentWebsiteLanguage");

            /* In case if the current website language is set to Arabic */
            if (CurrentWebsiteLanguage === "ar") {
                successBox.textContent = 'تم حذف جميع طلبات المخبوزات';

                /* In case if the current website language is set to Indonesian */
            } else if (CurrentWebsiteLanguage === "id") {
                successBox.textContent = 'Semua pesanan Roti telah dihapus';

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
        document.body.style.position = '';
        document.body.style.overflow = '';
        window.scrollTo(0, parseInt(document.body.style.top || '0') * -1);
        document.body.style.top = '';
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
                    <h1 class="koktel_there_is_no_orders_text_class arLangText">لاتوجد طلبات بعد..<ion-icon name="telescope-outline"></ion-icon></h1>
                    <h1 class="koktel_there_is_no_orders_text_class indoLangText"><ion-icon name="telescope-outline"></ion-icon>..Belum Ada permintaan</h1>
                `;

                // Hide These Elements if There is No Any Restaurant Orders
                document.getElementById('koktel_delete_all_restaurant_orders_button').display = 'none';
                document.getElementById('koktel_order_check_out_div').innerHTML = '';
            }





            // Refresh the page or update the display to reflect the changes
            renderOrders();

            // Create a box with the text "تم حذف جميع الطلبات"
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


            /* Call a function to show the correct website language */
            setWebsiteLanguage();
        }

        // Re-enable scrolling
        document.body.style.position = '';
        document.body.style.overflow = '';
        window.scrollTo(0, parseInt(document.body.style.top || '0') * -1);
        document.body.style.top = '';
    }
}
/* Up Bread Up */



















/* Down Worker And Driver Booking Down */
if (document.getElementById("koktel_choose_worker_type_section")) {

    document.getElementById("koktel_whatsApp_worker_message").onclick = function () {
        // Get today's date
        let today = new Date();
        let formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

        // Create the final message with Arabic and Indonesian translations
        let finalMessage = "✨ طلب جديد حجز شغالة ✨\n"; // Arabic
        finalMessage += "🕒 لمدة 8 ساعات\n"; // Arabic
        finalMessage += `📅 تاريخ إرسال الطلب: ${formattedDate}\n\n`; // Arabic
        finalMessage += "📍 يجب إرسال موقعك + رقم هاتفك لبدء تنفيذ الطلب..\n"; // Arabic
        finalMessage += "💳 جميع طرق الدفع متوفرة سواء أونلاين أو كاش\n\n"; // Arabic


        finalMessage += "✨ Permintaan Baru Pemesanan Pekerja Rumah Tangga ✨\n"; // Indonesian
        finalMessage += "🕒 Untuk 8 Jam\n\n"; // Indonesian
        finalMessage += `📅 Tanggal Permintaan Dikirim: ${formattedDate}\n`; // Indonesian
        finalMessage += "📍 Harap Kirim Lokasi + Nomor Telepon Anda Untuk Memulai Pesanan..\n"; // Indonesian
        finalMessage += "💳 Semua Metode Pembayaran Tersedia, Baik Online Maupun Tunai\n\n"; // Indonesian



        finalMessage += "🏦 Bank Central Asia (BCA)\n";
        finalMessage += "🔹 Name: Samir\n";
        finalMessage += "🔹 No Rekening: 1971025609\n\n";

        finalMessage += "💰 Dana: 087720208728";

        // Send the message to the live chat widget
        sendTheFinalOrderThroughLiveChatWidget(finalMessage);
    };







    /* Create Home Driver WhatsApp Message */
    koktel_driverTypeWhatsAppMessage = function (driverType) {
        let clickedDriverType;

        if (driverType === 'car') {
            clickedDriverType = "🚗 طلب جديد حجز سائق سيارة"; // Arabic
            clickedDriverType += "\n🚗 Permintaan Baru Pemesanan Sopir Mobil"; // Indonesian
        } else if (driverType === 'motor') {
            // Notify that the service isn't available and close the overlay
            alert("❌ هذه الخدمة ليست متوفرة بعد..\n❌ Layanan Ini Belum Tersedia..");

            // Restore scrolling and close the overlay
            document.body.style.position = '';
            document.body.style.overflow = '';
            window.scrollTo(0, parseInt(document.body.style.top || '0') * -1);
            document.body.style.top = '';
            document.getElementById('koktel_choose_worker_type_section').removeChild(document.getElementById('koktel_driver_type_box_overlay'));
            return;
        } else {
            // Cancel and close the overlay
            document.body.style.position = '';
            document.body.style.overflow = '';
            window.scrollTo(0, parseInt(document.body.style.top || '0') * -1);
            document.body.style.top = '';
            document.getElementById('koktel_choose_worker_type_section').removeChild(document.getElementById('koktel_driver_type_box_overlay'));
            return;
        }

        // Get today's date
        let today = new Date();
        let formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

        // Create the message with translations
        let finalMessage = `${clickedDriverType}\n\n`;

        finalMessage += "🕒 لمدة 8 ساعات\n"; // Arabic
        finalMessage += `📅 تاريخ إرسال الطلب: ${formattedDate}\n`; // Arabic
        finalMessage += "📍 يجب إرسال موقعك + رقم هاتفك لبدء تنفيذ الطلب..\n"; // Arabic
        finalMessage += "💳 جميع طرق الدفع متوفرة سواء أونلاين أو كاش\n\n"; // Arabic


        finalMessage += "🕒 Untuk 8 Jam\n"; // Indonesian
        finalMessage += `📅 Tanggal Permintaan Dikirim: ${formattedDate}\n`; // Indonesian
        finalMessage += "📍 Harap Kirim Lokasi + Nomor Telepon Anda Untuk Memulai Pesanan..\n"; // Indonesian
        finalMessage += "💳 Semua Metode Pembayaran Tersedia, Baik Online Maupun Tunai\n\n"; // Indonesian


        finalMessage += "🏦 Bank Central Asia (BCA)\n";
        finalMessage += "🔹 Name: Samir\n";
        finalMessage += "🔹 No Rekening: 1971025609\n\n";

        finalMessage += "💰 Dana: 087720208728";

        // Send the message to the live chat widget
        sendTheFinalOrderThroughLiveChatWidget(finalMessage);

        // Close the overlay and restore scrolling
        document.body.style.position = '';
        document.body.style.overflow = '';
        window.scrollTo(0, parseInt(document.body.style.top || '0') * -1);
        document.body.style.top = '';
        document.getElementById('koktel_choose_worker_type_section').removeChild(document.getElementById('koktel_driver_type_box_overlay'));
    };








    /* Choose Driver Type Car Or Motor */
    document.getElementById("koktel_whatsApp_driver_message").onclick = function () {

        // Disable scrolling
        const scrollY = window.scrollY;
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = '100%';


        let driverTypeBox = document.createElement("div");
        driverTypeBox.id = 'koktel_driver_type_box_overlay';

        driverTypeBox.innerHTML = `
                <div id="koktel_driver_type_box">
                    <div id="koktel_driver_type_box_title">
    
                        <h3 class="arLangText">نوع السائق</h3>    
                        <h3 class="indoLangText">Tipe pengemudi</h3>
    
                    </div>
    
                    <div id="koktel_driver_type_box_options">
    
                        <h4 class="arLangText" onclick="koktel_driverTypeWhatsAppMessage('car')">سيارة</h4>
                        <h4 class="indoLangText" onclick="koktel_driverTypeWhatsAppMessage('car')">Mobil</h4>
    
                        <h4 class="arLangText" onclick="koktel_driverTypeWhatsAppMessage('motor')">دباب</h4>
                        <h4 class="indoLangText" onclick="koktel_driverTypeWhatsAppMessage('motor')">Motor</h4>
    
                        <h4 class="arLangText" onclick="koktel_driverTypeWhatsAppMessage('cancel')" style="background-color: gray;">إلغاء</h4>
                        <h4 class="indoLangText" onclick="koktel_driverTypeWhatsAppMessage('cancel')" style="background-color: gray;">Cancel</h4>
    
    
                    </div>
                </div
            `;

        document.getElementById('koktel_choose_worker_type_section').appendChild(driverTypeBox)


        // Call a function to make sure website using the correct language
        setWebsiteLanguage();
    }
}
/* Up Worker And Driver Booking Up */

















/* Down Massage Worker Down */
if (document.getElementById("koktel_choose_massage_person_section")) {

    /* Craete Massage Person Type WhatsApp Message */
    function koktel_massageWorkerTypeMessage(workerType) {
        // Define the worker type specific message header
        let ar_messageType = (workerType === 'female') ? 'انثى' : 'ذكر';

        // Define the worker type specific message header
        let indo_messageType = (workerType === 'female') ? 'Wanita' : 'Pria';


        // Get today's date
        let today = new Date();
        let formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;


        // Create the final message And join all order details
        let finalMessage = `طلب جديد حجز مساج ${ar_messageType}\n`;
        finalMessage += `تاريخ إرسال الطلب: ${formattedDate}\n\n`; // Add today's date


        // Append the grand total to the final message
        finalMessage += `يجب إرسال موقعك لبدأ تنفيذ الطلب..\n`;
        finalMessage += `جميع طرق الدفع متوفرة سواء اونلاين او كاش\n\n\n`;


        finalMessage += `Permintaan Baru Untuk Memesan Layanan Pijat ${indo_messageType}\n\n`;
        finalMessage += `Harus Kirim Lokasinya Untuk Mulai Pemenuhan Pesanan..\n`;
        finalMessage += `Semua Metode Bayaran Tersedia, Baik Online Atau Tunai\n\n`;


        finalMessage += `Bank Central Asia (BCA)\nName: samir\nNo Rekening: 1971025609\n\n`;
        finalMessage += `Dana: 087720208728`;

        // Encode the message using encodeURIComponent
        let encodedMessage = encodeURIComponent(finalMessage);

        // Create the WhatsApp URL
        let whatsappURL = `https://wa.me/6287720208728?text=${encodedMessage}`;

        // Open WhatsApp in a new window
        window.open(whatsappURL, '_blank');
    }
}
/* Up Massage Worker Up */






















/* Down Pharmacy Down */
/* Function To Add Orders And Create pharmacy_orders Key in the localStorage */
if (document.getElementById("koktel_pharmacy_section")) {

    /* Function to create all supermarket  */
    function createProductCards(products, containerId) {
        let container = document.getElementById(containerId);

        products.forEach(product => {
            let productCard = document.createElement('div');
            productCard.classList.add('koktel_product_card');
            productCard.classList.add('koktel_animation');

            productCard.innerHTML = `
                <div class="koktel_product_card_info">
                    <div class="koktel_product_card_img koktel_animation">
                        <img src="${product.imageSRC}.jpg" alt="صيدلية اندونيسيا - كوكتيل" title="صيدلية اندونيسيا - كوكتيل" onclick="koktel_show_full_screen_image('${product.imageSRC}.jpg')" loading="lazy">
                    </div>
                    <div>
                        <a>
                            <div class="koktel_product_name_div">
                                <h1 class="arLangText">${product.ar_name}</h1>
                                <h2 class="indoLangText">${product.indo_name}</h2>
                            </div>
                            <div class="koktel_product_price">
                                <h3>${product.price}</h3>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="koktel_add_product_button_div">
                    <h4 class="arLangText" onclick="koktel_addProductButton('${product.price}', this)">اضافة</h4>
                    <h4 class="indoLangText" onclick="koktel_addProductButton('${product.price}', this)">Tambah</h4>
                    <h5 style="display: none;">1</h5>
                    <ion-icon name="remove-outline" style="display: none;" onclick="koktel_minusProductButton('${product.price}', this)"></ion-icon>
                </div>
            `;

            container.appendChild(productCard);
        });
    }



    /* Call a function to craete all supermarket product */
    createProductCards(headacheProducts, 'all_headache_products_slide_div_id');
    createProductCards(heartburnProducts, 'all_heartburn_products_slide_div_id');
    createProductCards(jointsAndBruisesProducts, 'all_joints_and_bruises_products_slide_div_id');
    createProductCards(womenCareProducts, 'all_women_care_products_slide_div_id');
    createProductCards(babyCareProducts, 'all_baby_care_products_slide_div_id');
    createProductCards(honeyProducts, 'all_honey_products_slide_div_id');
    createProductCards(vicksProducts, 'all_vicks_products_slide_div_id');


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

    /* Scroll To Clicked Product type */
    koktel_scrollToProductType = function (RestaurantElementIdName) {

        // Re-enable scrolling
        document.body.style.position = '';
        document.body.style.overflow = '';
        window.scrollTo(0, parseInt(document.body.style.top || '0') * -1);
        document.body.style.top = '';


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
        let pharmacyBottomCounterDiv = document.getElementById('koktel_product_bottom_counter_div');

        // Get the parent card element of the clicked h4 element
        let parentCard = clickedElement.closest('.koktel_product_card');

        // Extract Arabic Product Name
        let productName = parentCard.querySelector('.koktel_product_name_div h1').textContent.trim();


        // Extract Indo Product Name
        let indo_productName = parentCard.querySelector('.koktel_product_name_div h2').textContent.trim();

        // Extract img src
        let imgSrc = parentCard.querySelector('.koktel_product_card_img img').src;


        // Check if The Container Div Exists
        if (!pharmacyBottomCounterDiv) {
            // If The Container Doesn't Exist, Then Create New One
            pharmacyBottomCounterDiv = document.createElement('div');
            pharmacyBottomCounterDiv.id = 'koktel_product_bottom_counter_div';


            pharmacyBottomCounterDiv.innerHTML = `<h6 class="arLangText">إضافة الطلب<br> = ${addedNumber.toLocaleString()}</h6><h6 class="indoLangText">Tambah Permintaan<br> = ${addedNumber.toLocaleString()}</h6>`;


            // Append The Container Div To The Body of The Document
            document.body.appendChild(pharmacyBottomCounterDiv);

            // Attach a click event listener to the 'pharmacyBottomCounterDiv' element
            pharmacyBottomCounterDiv.addEventListener('click', function () {


                pharmacyBottomCounterDiv.style.pointerEvents = 'none';
                pharmacyBottomCounterDiv.innerHTML = `<h6 class="arLangText" style="background: darkgray;">تمت إضافة<br>الطلب بنجاح</h6><h6 class="indoLangText" style="background: darkgray;">Permintaan Telah<br>Berhasil Ditambahkan</h6>`;

                /* Call a function to show the correct website language */
                setWebsiteLanguage();



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

                    // Remove the element from the DOM after the fade-out animation completes
                    setTimeout(() => {
                        successBox.remove();
                    }, 2000); // Wait for the fade-out transition to complete (1.5s)

                    // Refresh The Page After Adding The Selected Orders
                    setTimeout(() => {
                        location.reload();
                    }, 1200);
                }, 700); // Wait for 3 seconds before triggering fade-out


                if (!document.getElementById('koktel_order_page_icon')) {
                    // Create Button To Show Orders Page
                    let koktel_mealOrderIconDiv = document.createElement('div');
                    koktel_mealOrderIconDiv.id = 'koktel_order_page_icon_div';
                    let koktel_mealOrderIcon = `<a href='https://koktel-indo.com/%D8%B7%D9%84%D8%A8%D8%A7%D8%AA%D9%83-%D9%85%D9%86-%D8%A7%D9%84%D8%B5%D9%8A%D8%AF%D9%84%D9%8A%D8%A9' id="koktel_order_page_icon"><ion-icon name="cart-outline"></ion-icon></a>`;
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
            let totalPriceElement = document.getElementById('koktel_product_bottom_counter_div');
            let currentTotal = parseFloat(totalPriceElement.innerText.split('=')[1].trim().replace(/[^\d.]/g, ''));

            // Calculate The New Total Price By Adding The Added Number To The Current Total
            let newTotal = currentTotal + parseFloat(addedNumber.replace(/[^\d.]/g, ''));

            // Update The Text Content of The Total Price Display To Display The New Total
            totalPriceElement.innerHTML = `<h6 class="arLangText">إضافة الطلب<br> = ${newTotal.toLocaleString()} Rp</h6><h6 class="indoLangText">Tambah Permintaan<br> = ${newTotal.toLocaleString()} Rp</h6>`;

            // Ensure 'pharmacyBottomCounterDiv' is visible
            pharmacyBottomCounterDiv.style.display = 'flex';
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


        /* Call a function to show the correct website language */
        setWebsiteLanguage();
    }




    // Function To Handle The Click Event On Ion-Icon (Minus) Element
    koktel_minusProductButton = function (subtractedNumber, clickedElement) {
        // Get The Current Total Price From The Displayed Text
        let totalPriceElement = document.getElementById('koktel_product_bottom_counter_div');
        let currentTotal = parseFloat(totalPriceElement.innerText.split('=')[1].trim().replace(/[^\d.]/g, ''));

        // Calculate The New Total Price By Subtracting The Subtracted Number From The Current Total
        let newTotal = currentTotal - parseFloat(subtractedNumber.replace(/[^\d.]/g, ''));

        // Update The Text Content of The Total Price Display To Display The New Total
        totalPriceElement.innerHTML = `<h6 class="arLangText">إضافة الطلب<br> = ${newTotal.toLocaleString()} Rp</h6><h6 class="indoLangText">Tambah Permintaan<br> = ${newTotal.toLocaleString()} Rp</h6>`;

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

            // Get the 'pharmacyBottomCounterDiv' element
            let pharmacyBottomCounterDiv = document.getElementById('koktel_product_bottom_counter_div');

            // Check if NewTotal is 0 And Hide The 'upermarkerBottomCounterDiv' Element
            if (newTotal === 0) {
                pharmacyBottomCounterDiv.style.display = 'none';
            }
        }


        /* Call a function to show the correct website language */
        setWebsiteLanguage();
    }
}

/* Function To Create Pharmacy Orders Details Page Content And Final WhatsApp Message */
if (document.getElementById("koktel_pharmacy_order_details_body_id")) {

    /* Create Content For The Basic Orders Page */
    let all_order_page_content = `
        <div class="koktel_order_details_div" id="koktel_order_details_div_id" style="display: flex;">

            <h1 id="koktel_supermarket_order_details_title_ar_id" class="koktel_order_details_title arLangText">طلباتك من الصيدلية</h1>
            <h1 id="koktel_supermarket_order_details_title_indo_id" class="koktel_order_details_title indoLangText">Pesanan Anda dari Supermarket</h1>


            <div class='koktel_order_finished_card_area' id='koktel_order_finished_card_area_id'></div>

            <div>
                <h4 id='koktel_delete_all_restaurant_orders_button' class='koktel_delete_all_orders_button_class arLangText' onclick='koktel_ensure_delete_orders_box(this)'>حذف جميع الطلبات</h4>
                <h4 id='koktel_delete_all_restaurant_orders_button' class='koktel_delete_all_orders_button_class indoLangText' onclick='koktel_ensure_delete_orders_box(this)'>Hapus semua pesanan</h4>
            </div>

            <div class="koktel_meal_info_note" id="koktel_meal_info_note_id" style="margin-top: 5px; display: none;">
                <textarea placeholder="ملاحظاتك للصيدلية هنا" class="koktel_meal_info_note_textarea arLangText" maxlength="100"></textarea>
                <textarea placeholder="Tanggapan Anda untuk supermarket" class="koktel_meal_info_note_textarea indoLangText" maxlength="100"></textarea>
            </div>

            <div class="koktel_koktel_order_details_bottom_button_div" id='koktel_total_order_price_text'></div>

            <div id="koktel_order_check_out_div" style="display: none;"></div>


            <div id='koktel_ensure_delete_all_orders_overlay' class='koktel_ensure_delete_orders_overlay' style='display:none'>
                <div class='koktel_ensure_delete_all_orders_div'>

                    <h6 class="arLangText">متاكد من حذف جميع الطلبات؟</h6>
                    <h6 class="indoLangText">Apakah Anda yakin ingin menghapus semua pesanan</h6>


                    <div id='koktel_ensure_delete_all_orders_answer_div'>

                        <h6 class="arLangText" onclick='koktel_delete_all_pharmacy_orders_function("عودة")'>عودة</h6>
                        <h6 class="indoLangText" onclick='koktel_delete_all_pharmacy_orders_function("عودة")'>Kembali</h6>


                        <h6 class="arLangText" onclick='koktel_delete_all_pharmacy_orders_function("نعم")'>نعم</h6>
                        <h6 class="indoLangText" onclick='koktel_delete_all_pharmacy_orders_function("نعم")'>Ya</h6>

                    </div>

                </div>
            </div>

                
            <a itemprop="url" href="https://koktel-indo.com/%D8%B5%D9%8A%D8%AF%D9%84%D9%8A%D8%A9-%D8%A7%D9%86%D8%AF%D9%88%D9%86%D9%8A%D8%B3%D9%8A%D8%A7"
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
                <h1 class="koktel_there_is_no_orders_text_class arLangText">لاتوجد طلبات بعد..<ion-icon name="telescope-outline"></ion-icon></h1>
                <h1 class="koktel_there_is_no_orders_text_class indoLangText"><ion-icon name="telescope-outline"></ion-icon>..Belum Ada Permintaan</h1>
            `;

            /* Update The Title Of The Page If there is No Any Orders */
            koktel_supermarket_order_details_title_ar_id.innerHTML = `طلباتك من الصيدلية`;
            koktel_supermarket_order_details_title_indo_id.innerHTML = `Pesanan Anda dari Abotik`;

            // Hide These Elements if There is No Any Restaurant Orders
            document.getElementById('koktel_order_check_out_div').innerHTML = '';
            document.getElementById('koktel_meal_info_note_id').style.display = 'none';

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

                // letruct the inner HTML content for the order
                let localStorageOrderCardContent = `
                    <h2 class="arLangText" style=cursor: text; cursor: text;">منتج رقم ${index + 1}</h2>
                    <h2 class="indoLangText" style=cursor: text; cursor: text;">Nomor Produk ${index + 1}</h2>


                    <h2 class="arLangText" style="color: aqua; cursor: text;">${orderData.productName}</h2>
                    <h2 class="indoLangText" style="color: aqua; cursor: text;">${orderData.indo_productName}</h2>


                    <div class="finished_product_card_image_and_controllers_div">

                        <img src="${orderData.productImgSrc}" alt="صيدلية اندونيسيا - كوكتيل" title="صيدلية اندونيسيا - كوكتيل" onclick="koktel_show_full_screen_image(this.src)" loading="lazy">


                        <div class='koktel_orderFinished_info_and_delete'>

                            <h3 class="arLangText" style="color: rgb(255, 166, 0); cursor: text;">العدد = ${orderData.productAmount}</h3>
                            <h3 class="indoLangText" style="color: rgb(255, 166, 0); cursor: text;">Kuantitas = ${orderData.productAmount}</h3>


                            <h3 id="koktel_order_total_price_h3" class="arLangText">الإجمالي = ${orderData.totalPrice.toLocaleString()} Rp</h3>
                            <h3 id="koktel_order_total_price_h3" class="indoLangText">Total = ${orderData.totalPrice.toLocaleString()} Rp</h3>


                            <h3 class="arLangText" onclick="koktel_ensure_delete_orders_box('حذف الطلب', ${index})" style="color: red;">حذف الطلب</h3>
                            <h3 class="indoLangText" onclick="koktel_ensure_delete_orders_box('حذف الطلب', ${index})" style="color: red;">Hapus</h3>

                        </div>

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

                <div class="koktel_download_order_pdf_and_whatsapp_number_div_class" onclick="fetchDataFromGoogleSheet(4)">
                
                    <ion-icon name="cloud-upload-outline"></ion-icon>
                    <h5 class="arLangText">إرسال الطلبات</h5>
                    <h5 class="indoLangText">Kirim Orders</h5>

                </div>
            `;

            /* Update The Title Of The Page If there is Any Orders */
            koktel_supermarket_order_details_title_ar_id.innerHTML = `طلباتك من الصيدلية <spam class="koktel_orders_ready_to_send_text">جاهزة للإرسال</spam>`;
            koktel_supermarket_order_details_title_indo_id.innerHTML = `Pesanan Anda dari Abotik <spam class="koktel_orders_ready_to_send_text">Siap Dikirim</spam>`;

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


            if (clickedDeleteButton === 'حذف الطلب') {
                // letruct the ID of the corresponding overlay element
                let overlayId = `koktel_ensure_delete_this_orders_overlay_${index}`;

                // Show the overlay element
                document.getElementById(overlayId).style.display = 'block';
            } else {
                document.getElementById('koktel_ensure_delete_all_orders_overlay').style.display = 'block';
            }

        }

        // Disable scrolling
        const scrollY = window.scrollY;
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = '100%';
    }




    /* Function To Delete All Orders Data */
    koktel_delete_all_pharmacy_orders_function = function (clickedDeleteAnswer) {

        /* First Check if The Clicked Button is 'عودة' or 'نعم' */
        if (clickedDeleteAnswer === 'عودة') {
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


            // Get the value of "CurrentWebsiteLanguage" from localStorage
            let CurrentWebsiteLanguage = localStorage.getItem("CurrentWebsiteLanguage");


            /* In case if the current website language is set to Arabic */
            if (CurrentWebsiteLanguage === "ar") {
                successBox.textContent = 'تم حذف جميع طلبات الصيدلية';

                /* In case if the current website language is set to Indonesian */
            } else if (CurrentWebsiteLanguage === "id") {
                successBox.textContent = 'Semua pesanan Abotik telah dihapus';

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
        document.body.style.position = '';
        document.body.style.overflow = '';
        window.scrollTo(0, parseInt(document.body.style.top || '0') * -1);
        document.body.style.top = '';
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


            /* Can a function to show the correct website language */
            setWebsiteLanguage();
        }

        // Re-enable scrolling
        document.body.style.position = '';
        document.body.style.overflow = '';
        window.scrollTo(0, parseInt(document.body.style.top || '0') * -1);
        document.body.style.top = '';
    }
}
/* Up Pharmacy Up */



















/* Down Shisha Down */
/* Function To Add Orders And Create shisha_orders Key in the localStorage */
if (document.getElementById("koktel_shisha_section")) {

    /* Function to create all supermarket  */
    function createProductCards(products, containerId) {
        let container = document.getElementById(containerId);

        products.forEach(product => {
            let productCard = document.createElement('div');
            productCard.classList.add('koktel_product_card');
            productCard.classList.add('koktel_animation');

            productCard.innerHTML = `
                <div class="koktel_product_card_info">
                    <div class="koktel_product_card_img koktel_animation">
                        <img src="${product.imageSRC}.jpg" alt="سوبرماركت اندونيسيا - كوكتيل" title="سوبرماركت اندونيسيا - كوكتيل" onclick="koktel_show_full_screen_image('${product.imageSRC}.jpg')" loading="lazy">
                    </div>
                    <div>
                        <a>
                            <div class="koktel_product_name_div">
                                <h1 class="arLangText">${product.ar_name}</h1>
                                <h2 class="indoLangText">${product.indo_name}</h2>
                            </div>
                            <div class="koktel_product_price">
                                <h3>${product.price}</h3>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="koktel_add_product_button_div">
                    <h4 class="arLangText" onclick="koktel_addProductButton('${product.price}', this)">اضافة</h4>
                    <h4 class="indoLangText" onclick="koktel_addProductButton('${product.price}', this)">Tambah</h4>
                    <h5 style="display: none;">1</h5>
                    <ion-icon name="remove-outline" style="display: none;" onclick="koktel_minusProductButton('${product.price}', this)"></ion-icon>
                </div>
            `;

            container.appendChild(productCard);
        });
    }



    /* Call a function to craete all supermarket product */
    createProductCards(alfakherProducts, 'all_alfakher_products_slide_div_id');
    createProductCards(majalisProducts, 'all_majalis_products_slide_div_id');
    createProductCards(mazayaProducts, 'all_mazaya_products_slide_div_id');




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

    /* Scroll To Clicked Product type */
    koktel_scrollToProductType = function (RestaurantElementIdName) {

        // Re-enable scrolling
        document.body.style.position = '';
        document.body.style.overflow = '';
        window.scrollTo(0, parseInt(document.body.style.top || '0') * -1);
        document.body.style.top = '';


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
        let shishaBottomCounterDiv = document.getElementById('koktel_product_bottom_counter_div');

        // Get the parent card element of the clicked h4 element
        let parentCard = clickedElement.closest('.koktel_product_card');

        // Extract product name
        let productName = parentCard.querySelector('.koktel_product_name_div h1').textContent.trim();

        // Extract Indo Product Name
        let indo_productName = parentCard.querySelector('.koktel_product_name_div h2').textContent.trim();

        // Extract img src
        let imgSrc = parentCard.querySelector('.koktel_product_card_img img').src;


        // Check if The Container Div Exists
        if (!shishaBottomCounterDiv) {
            // If The Container Doesn't Exist, Then Create New One
            shishaBottomCounterDiv = document.createElement('div');
            shishaBottomCounterDiv.id = 'koktel_product_bottom_counter_div';


            // Create The Text To Display The Total Price
            shishaBottomCounterDiv.innerHTML = `<h6 class="arLangText">إضافة الطلب<br> = ${addedNumber.toLocaleString()}</h6><h6 class="indoLangText">Tambah Permintaan<br> = ${addedNumber.toLocaleString()}</h6>`;


            // Append The Container Div To The Body of The Document
            document.body.appendChild(shishaBottomCounterDiv);

            // Attach a click event listener to the 'shishaBottomCounterDiv' element
            shishaBottomCounterDiv.addEventListener('click', function () {


                shishaBottomCounterDiv.style.pointerEvents = 'none';
                shishaBottomCounterDiv.innerHTML = `<h6 class="arLangText" style="background: darkgray;">تمت إضافة<br>الطلب بنجاح</h6><h6 class="indoLangText" style="background: darkgray;">Permintaan Telah<br>Berhasil Ditambahkan</h6>`;

                /* Call a function to show the correct website language */
                setWebsiteLanguage();


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
                    let koktel_mealOrderIcon = `<a href='https://koktel-indo.com/%D8%B7%D9%84%D8%A8%D8%A7%D8%AA%D9%83-%D9%85%D9%86-%D8%A7%D9%84%D9%85%D8%B9%D8%B3%D9%84%D8%A7%D8%AA' id="koktel_order_page_icon"><ion-icon name="cart-outline"></ion-icon></a>`;
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
            let totalPriceElement = document.getElementById('koktel_product_bottom_counter_div');
            let currentTotal = parseFloat(totalPriceElement.innerText.split('=')[1].trim().replace(/[^\d.]/g, ''));

            // Calculate The New Total Price By Adding The Added Number To The Current Total
            let newTotal = currentTotal + parseFloat(addedNumber.replace(/[^\d.]/g, ''));

            // Update The Text Content of The Total Price Display To Display The New Total
            totalPriceElement.innerHTML = `<h6 class="arLangText">إضافة الطلب<br> = ${newTotal.toLocaleString()} Rp</h6><h6 class="indoLangText">Tambah Permintaan<br> = ${newTotal.toLocaleString()} Rp</h6>`;

            // Ensure 'shishaBottomCounterDiv' is visible
            shishaBottomCounterDiv.style.display = 'flex';
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



        /* Call a function to show the correct website language */
        setWebsiteLanguage();
    }



    // Function To Handle The Click Event On Ion-Icon (Minus) Element
    koktel_minusProductButton = function (subtractedNumber, clickedElement) {
        // Get The Current Total Price From The Displayed Text
        let totalPriceElement = document.getElementById('koktel_product_bottom_counter_div');
        let currentTotal = parseFloat(totalPriceElement.innerText.split('=')[1].trim().replace(/[^\d.]/g, ''));

        // Calculate The New Total Price By Subtracting The Subtracted Number From The Current Total
        let newTotal = currentTotal - parseFloat(subtractedNumber.replace(/[^\d.]/g, ''));

        // Update The Text Content of The Total Price Display To Display The New Total
        totalPriceElement.innerHTML = `<h6 class="arLangText">إضافة الطلب<br> = ${newTotal.toLocaleString()} Rp</h6><h6 class="indoLangText">Tambah Permintaan<br> = ${newTotal.toLocaleString()} Rp</h6>`;

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

            // Get the 'shishaBottomCounterDiv' element
            let shishaBottomCounterDiv = document.getElementById('koktel_product_bottom_counter_div');

            // Check if NewTotal is 0 And Hide The 'upermarkerBottomCounterDiv' Element
            if (newTotal === 0) {
                shishaBottomCounterDiv.style.display = 'none';
            }
        }


        /* Call a function to show the correct website language */
        setWebsiteLanguage();
    }
}

/* Function To Create shisha_orders Orders Details Page Content And Final WhatsApp Message */
if (document.getElementById("koktel_shisha_order_details_body_id")) {

    /* Create Content For The Basic Orders Page */
    let all_order_page_content = `
        <div class="koktel_order_details_div" id="koktel_order_details_div_id" style="display: flex;">

            <h1 id="koktel_supermarket_order_details_title_ar_id" class="koktel_order_details_title arLangText">طلباتك من المعسلات</h1>
            <h1 id="koktel_supermarket_order_details_title_indo_id" class="koktel_order_details_title indoLangText">Pesanan Anda dari Supermarket</h1>


            <div class='koktel_order_finished_card_area' id='koktel_order_finished_card_area_id'></div>

            <div>
                <h4 id='koktel_delete_all_restaurant_orders_button' class='koktel_delete_all_orders_button_class arLangText' onclick='koktel_ensure_delete_orders_box(this)'>حذف جميع الطلبات</h4>
                <h4 id='koktel_delete_all_restaurant_orders_button' class='koktel_delete_all_orders_button_class indoLangText' onclick='koktel_ensure_delete_orders_box(this)'>Hapus semua pesanan</h4>
            </div>

            <div class="koktel_meal_info_note" id="koktel_meal_info_note_id" style="margin-top: 5px; display: none;">
                <textarea placeholder="ملاحظاتك للمعسلات هنا" class="koktel_meal_info_note_textarea arLangText" maxlength="100"></textarea>
                <textarea placeholder="Tanggapan Anda untuk supermarket" class="koktel_meal_info_note_textarea indoLangText" maxlength="100"></textarea>
            </div>

            <div class="koktel_koktel_order_details_bottom_button_div" id='koktel_total_order_price_text'></div>

            <div id="koktel_order_check_out_div" style="display: none;"></div>


            <div id='koktel_ensure_delete_all_orders_overlay' class='koktel_ensure_delete_orders_overlay' style='display:none'>
                <div class='koktel_ensure_delete_all_orders_div'>

                    <h6 class="arLangText">متاكد من حذف جميع الطلبات؟</h6>
                    <h6 class="indoLangText">Apakah Anda yakin ingin menghapus semua pesanan</h6>


                    <div id='koktel_ensure_delete_all_orders_answer_div'>

                        <h6 class="arLangText" onclick='koktel_delete_all_shisha_orders_function("عودة")'>عودة</h6>
                        <h6 class="indoLangText" onclick='koktel_delete_all_shisha_orders_function("عودة")'>Kembali</h6>


                        <h6 class="arLangText" onclick='koktel_delete_all_shisha_orders_function("نعم")'>نعم</h6>
                        <h6 class="indoLangText" onclick='koktel_delete_all_shisha_orders_function("نعم")'>Ya</h6>

                    </div>

                </div>
            </div>

                
            <a itemprop="url" href="https://koktel-indo.com/%D9%85%D8%B9%D8%B3%D9%84%D8%A7%D8%AA-%D8%A7%D9%86%D8%AF%D9%88%D9%86%D9%8A%D8%B3%D9%8A%D8%A7"
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
                <h1 class="koktel_there_is_no_orders_text_class arLangText">لاتوجد طلبات بعد..<ion-icon name="telescope-outline"></ion-icon></h1>
                <h1 class="koktel_there_is_no_orders_text_class indoLangText"><ion-icon name="telescope-outline"></ion-icon>..Belum Ada Permintaan</h1>
            `;

            /* Update The Title Of The Page If there is No Any Orders */
            koktel_supermarket_order_details_title_ar_id.innerHTML = `طلباتك من المعسلات`;
            koktel_supermarket_order_details_title_indo_id.innerHTML = `Pesanan Anda dari Shisha`;

            // Hide These Elements if There is No Any Restaurant Orders
            document.getElementById('koktel_order_check_out_div').innerHTML = '';
            document.getElementById('koktel_meal_info_note_id').style.display = 'none';


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

                // letruct the inner HTML content for the order
                let localStorageOrderCardContent = `
                    <h2 class="arLangText" style=cursor: text; cursor: text;">منتج رقم ${index + 1}</h2>
                    <h2 class="indoLangText" style=cursor: text; cursor: text;">Nomor Produk ${index + 1}</h2>


                    <h2 class="arLangText" style="color: aqua; cursor: text;">${orderData.productName}</h2>
                    <h2 class="indoLangText" style="color: aqua; cursor: text;">${orderData.indo_productName}</h2>


                    <div class="finished_product_card_image_and_controllers_div">

                        <img src="${orderData.productImgSrc}" alt="معسلات اندونيسيا - كوكتيل" title="معسلات اندونيسيا - كوكتيل" onclick="koktel_show_full_screen_image(this.src)" loading="lazy">


                        <div class='koktel_orderFinished_info_and_delete'>

                            <h3 class="arLangText" style="color: rgb(255, 166, 0); cursor: text;">العدد = ${orderData.productAmount}</h3>
                            <h3 class="indoLangText" style="color: rgb(255, 166, 0); cursor: text;">Kuantitas = ${orderData.productAmount}</h3>


                            <h3 id="koktel_order_total_price_h3" class="arLangText">الإجمالي = ${orderData.totalPrice.toLocaleString()} Rp</h3>
                            <h3 id="koktel_order_total_price_h3" class="indoLangText">Total = ${orderData.totalPrice.toLocaleString()} Rp</h3>


                            <h3 class="arLangText" onclick="koktel_ensure_delete_orders_box('حذف الطلب', ${index})" style="color: red;">حذف الطلب</h3>
                            <h3 class="indoLangText" onclick="koktel_ensure_delete_orders_box('حذف الطلب', ${index})" style="color: red;">Hapus</h3>

                        </div>

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

                <div class="koktel_download_order_pdf_and_whatsapp_number_div_class" onclick="fetchDataFromGoogleSheet(5)">
                
                    <ion-icon name="cloud-upload-outline"></ion-icon>
                    <h5 class="arLangText">إرسال الطلبات</h5>
                    <h5 class="indoLangText">Kirim Orders</h5>

                </div>
            `;

            /* Update The Title Of The Page If there is Any Orders */
            koktel_supermarket_order_details_title_ar_id.innerHTML = `طلباتك من المعسلات <spam class="koktel_orders_ready_to_send_text">جاهزة للإرسال</spam>`;
            koktel_supermarket_order_details_title_indo_id.innerHTML = `Pesanan Anda dari Shisha <spam class="koktel_orders_ready_to_send_text">Siap Dikirim</spam>`;

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


            if (clickedDeleteButton === 'حذف الطلب') {
                // letruct the ID of the corresponding overlay element
                let overlayId = `koktel_ensure_delete_this_orders_overlay_${index}`;

                // Show the overlay element
                document.getElementById(overlayId).style.display = 'block';
            } else {
                document.getElementById('koktel_ensure_delete_all_orders_overlay').style.display = 'block';
            }

        }

        // Disable scrolling
        const scrollY = window.scrollY;
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = '100%';
    }




    /* Function To Delete All Orders Data */
    koktel_delete_all_shisha_orders_function = function (clickedDeleteAnswer) {

        /* First Check if The Clicked Button is 'عودة' or 'نعم' */
        if (clickedDeleteAnswer === 'عودة') {
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


            // Get the value of "CurrentWebsiteLanguage" from localStorage
            let CurrentWebsiteLanguage = localStorage.getItem("CurrentWebsiteLanguage");


            /* In case if the current website language is set to Arabic */
            if (CurrentWebsiteLanguage === "ar") {
                successBox.textContent = 'تم حذف جميع طلبات المعسلات';

                /* In case if the current website language is set to Indonesian */
            } else if (CurrentWebsiteLanguage === "id") {
                successBox.textContent = 'Semua pesanan Supermarket telah dihapus';

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
        document.body.style.position = '';
        document.body.style.overflow = '';
        window.scrollTo(0, parseInt(document.body.style.top || '0') * -1);
        document.body.style.top = '';
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
                    <h1 class="koktel_there_is_no_orders_text_class arLangText">لاتوجد طلبات بعد..<ion-icon name="telescope-outline"></ion-icon></h1>
                    <h1 class="koktel_there_is_no_orders_text_class indoLangText"><ion-icon name="telescope-outline"></ion-icon>..Belum Ada permintaan</h1>
                `;

                // Hide These Elements if There is No Any Restaurant Orders
                document.getElementById('koktel_delete_all_restaurant_orders_button').display = 'none';
                document.getElementById('koktel_order_check_out_div').innerHTML = '';
            }





            // Refresh the page or update the display to reflect the changes
            renderOrders();

            // Create a box with the text "تم حذف جميع الطلبات"
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


            /* Can a function to show the correct website language */
            setWebsiteLanguage();
        }

        // Re-enable scrolling
        document.body.style.position = '';
        document.body.style.overflow = '';
        window.scrollTo(0, parseInt(document.body.style.top || '0') * -1);
        document.body.style.top = '';
    }
}
/* Up Shisha Up */









/* Down Health And Beauty Code Down */
/* Function To Add Orders And Create health_and_beauty_orders Key in the localStorage */
if (document.getElementById("koktel_helth_and_beauty_section")) {

    /* Function to create all supermarket  */
    function createProductCards(products, containerId) {
        let container = document.getElementById(containerId);

        products.forEach(product => {
            let productCard = document.createElement('div');
            productCard.classList.add('koktel_product_card');
            productCard.classList.add('koktel_animation');

            productCard.innerHTML = `
                <div class="koktel_product_card_info">
                    <div class="koktel_product_card_img koktel_animation">
                        <img src="${product.imageSRC}.jpg" alt="الصحة والجمال اندونيسيا - كوكتيل" title="الصحة والجمال اندونيسيا - كوكتيل" onclick="koktel_show_full_screen_image('${product.imageSRC}.jpg')" loading="lazy">
                    </div>
                    <div>
                        <a>
                            <div class="koktel_product_name_div">
                                <h1 class="arLangText">${product.ar_name}</h1>
                                <h2 class="indoLangText">${product.indo_name}</h2>
                            </div>
                            <div class="koktel_product_price">
                                <h3>${product.price}</h3>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="koktel_add_product_button_div">
                    <h4 class="arLangText" onclick="koktel_addProductButton('${product.price}', this)">اضافة</h4>
                    <h4 class="indoLangText" onclick="koktel_addProductButton('${product.price}', this)">Tambah</h4>
                    <h5 style="display: none;">1</h5>
                    <ion-icon name="remove-outline" style="display: none;" onclick="koktel_minusProductButton('${product.price}', this)"></ion-icon>
                </div>
            `;

            container.appendChild(productCard);
        });
    }



    /* Call a function to craete all supermarket product */
    createProductCards(backbBonePainProducts, 'all_back_bone_pain_products_slide_div_id');



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

    /* Scroll To Clicked Product type */
    koktel_scrollToProductType = function (RestaurantElementIdName) {

        // Re-enable scrolling
        document.body.style.position = '';
        document.body.style.overflow = '';
        window.scrollTo(0, parseInt(document.body.style.top || '0') * -1);
        document.body.style.top = '';


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
        let helthAndBeautyBottomCounterDiv = document.getElementById('koktel_product_bottom_counter_div');

        // Get the parent card element of the clicked h4 element
        let parentCard = clickedElement.closest('.koktel_product_card');

        // Extract product name
        let productName = parentCard.querySelector('.koktel_product_name_div h1').textContent.trim();

        // Extract Indo Product Name
        let indo_productName = parentCard.querySelector('.koktel_product_name_div h2').textContent.trim();

        // Extract img src
        let imgSrc = parentCard.querySelector('.koktel_product_card_img img').src;


        // Check if The Container Div Exists
        if (!helthAndBeautyBottomCounterDiv) {
            // If The Container Doesn't Exist, Then Create New One
            helthAndBeautyBottomCounterDiv = document.createElement('div');
            helthAndBeautyBottomCounterDiv.id = 'koktel_product_bottom_counter_div';


            // Create The Text To Display The Total Price
            helthAndBeautyBottomCounterDiv.innerHTML = `<h6 class="arLangText">إضافة الطلب<br> = ${addedNumber.toLocaleString()}</h6><h6 class="indoLangText">Tambah Permintaan<br> = ${addedNumber.toLocaleString()}</h6>`;


            // Append The Container Div To The Body of The Document
            document.body.appendChild(helthAndBeautyBottomCounterDiv);

            // Attach a click event listener to the 'helthAndBeautyBottomCounterDiv' element
            helthAndBeautyBottomCounterDiv.addEventListener('click', function () {


                helthAndBeautyBottomCounterDiv.style.pointerEvents = 'none';
                helthAndBeautyBottomCounterDiv.innerHTML = `<h6 class="arLangText" style="background: darkgray;">تمت إضافة<br>الطلب بنجاح</h6><h6 class="indoLangText" style="background: darkgray;">Permintaan Telah<br>Berhasil Ditambahkan</h6>`;

                /* Call a function to show the correct website language */
                setWebsiteLanguage();


                
                // Check if 'health_and_beauty_orders' key exists in localStorage
                if (localStorage.getItem('health_and_beauty_orders')) {
                    // Get the existing data from localStorage
                    let existingOrders = JSON.parse(localStorage.getItem('health_and_beauty_orders'));

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
                    localStorage.setItem('health_and_beauty_orders', JSON.stringify(existingOrders));
                } else {
                    // If 'health_and_beauty_orders' key doesn't exist, create a new one with the clicked product data
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
                    localStorage.setItem('health_and_beauty_orders', JSON.stringify(newOrders));
                }


                // Create a box with the text "تم حذف جميع الطلبات"
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
                    let koktel_mealOrderIcon = `<a href='https://koktel-indo.com/%D8%B7%D9%84%D8%A8%D8%A7%D8%AA%D9%83-%D9%85%D9%86-%D8%A7%D9%84%D8%B5%D8%AD%D8%A9-%D9%88%D8%A7%D9%84%D8%AC%D9%85%D8%A7%D9%84' id="koktel_order_page_icon"><ion-icon name="cart-outline"></ion-icon></a>`;
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
            let totalPriceElement = document.getElementById('koktel_product_bottom_counter_div');
            let currentTotal = parseFloat(totalPriceElement.innerText.split('=')[1].trim().replace(/[^\d.]/g, ''));

            // Calculate The New Total Price By Adding The Added Number To The Current Total
            let newTotal = currentTotal + parseFloat(addedNumber.replace(/[^\d.]/g, ''));

            // Update The Text Content of The Total Price Display To Display The New Total
            totalPriceElement.innerHTML = `<h6 class="arLangText">إضافة الطلب<br> = ${newTotal.toLocaleString()} Rp</h6><h6 class="indoLangText">Tambah Permintaan<br> = ${newTotal.toLocaleString()} Rp</h6>`;

            // Ensure 'helthAndBeautyBottomCounterDiv' is visible
            helthAndBeautyBottomCounterDiv.style.display = 'flex';
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



        /* Call a function to show the correct website language */
        setWebsiteLanguage();
    }


    // Function To Handle The Click Event On Ion-Icon (Minus) Element
    koktel_minusProductButton = function (subtractedNumber, clickedElement) {
        // Get The Current Total Price From The Displayed Text
        let totalPriceElement = document.getElementById('koktel_product_bottom_counter_div');
        let currentTotal = parseFloat(totalPriceElement.innerText.split('=')[1].trim().replace(/[^\d.]/g, ''));

        // Calculate The New Total Price By Subtracting The Subtracted Number From The Current Total
        let newTotal = currentTotal - parseFloat(subtractedNumber.replace(/[^\d.]/g, ''));

        // Update The Text Content of The Total Price Display To Display The New Total
        totalPriceElement.innerHTML = `<h6 class="arLangText">إضافة الطلب<br> = ${newTotal.toLocaleString()} Rp</h6><h6 class="indoLangText">Tambah Permintaan<br> = ${newTotal.toLocaleString()} Rp</h6>`;

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

            // Get the 'helthAndBeautyBottomCounterDiv' element
            let helthAndBeautyBottomCounterDiv = document.getElementById('koktel_product_bottom_counter_div');

            // Check if NewTotal is 0 And Hide The 'upermarkerBottomCounterDiv' Element
            if (newTotal === 0) {
                helthAndBeautyBottomCounterDiv.style.display = 'none';
            }
        }


        /* Call a function to show the correct website language */
        setWebsiteLanguage();
    }
}

/* Function To Create Health And Beauty Orders Details Page Content And Final WhatsApp Message */
if (document.getElementById("koktel_helth_and_beauty_order_details_body_id")) {

    /* Create Content For The Basic Orders Page */
    let all_order_page_content = `
        <div class="koktel_order_details_div" id="koktel_order_details_div_id" style="display: flex;">

            <h1 id="koktel_health_and_beauty_order_details_title_ar_id" class="koktel_order_details_title arLangText">طلباتك من الصحة والجمال</h1>
            <h1 id="koktel_health_and_beauty_order_details_title_indo_id" class="koktel_order_details_title indoLangText">Pesanan Anda dari Health And Beauty</h1>


            <div class='koktel_order_finished_card_area' id='koktel_order_finished_card_area_id'></div>

            <div>
                <h4 id='koktel_delete_all_restaurant_orders_button' class='koktel_delete_all_orders_button_class arLangText' onclick='koktel_ensure_delete_orders_box(this)'>حذف جميع الطلبات</h4>
                <h4 id='koktel_delete_all_restaurant_orders_button' class='koktel_delete_all_orders_button_class indoLangText' onclick='koktel_ensure_delete_orders_box(this)'>Hapus semua pesanan</h4>
            </div>

            <div class="koktel_meal_info_note" id="koktel_meal_info_note_id" style="margin-top: 5px; display: none;">
                <textarea placeholder="ملاحظاتك للصحة والجمال هنا" class="koktel_meal_info_note_textarea arLangText" maxlength="100"></textarea>
                <textarea placeholder="Tanggapan Anda untuk Health And Beauty" class="koktel_meal_info_note_textarea indoLangText" maxlength="100"></textarea>
            </div>

            <div class="koktel_koktel_order_details_bottom_button_div" id='koktel_total_order_price_text'></div>

            <div id="koktel_order_check_out_div" style="display: none;"></div>


            <div id='koktel_ensure_delete_all_orders_overlay' class='koktel_ensure_delete_orders_overlay' style='display:none'>
                <div class='koktel_ensure_delete_all_orders_div'>

                    <h6 class="arLangText">متاكد من حذف جميع الطلبات؟</h6>
                    <h6 class="indoLangText">Apakah Anda yakin ingin menghapus semua pesanan</h6>


                    <div id='koktel_ensure_delete_all_orders_answer_div'>

                        <h6 class="arLangText" onclick='koktel_delete_all_health_and_beauty_orders_function("عودة")'>عودة</h6>
                        <h6 class="indoLangText" onclick='koktel_delete_all_health_and_beauty_orders_function("عودة")'>Kembali</h6>


                        <h6 class="arLangText" onclick='koktel_delete_all_health_and_beauty_orders_function("نعم")'>نعم</h6>
                        <h6 class="indoLangText" onclick='koktel_delete_all_health_and_beauty_orders_function("نعم")'>Ya</h6>

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
            koktel_supermarket_order_details_title_indo_id.innerHTML = `Pesanan Anda dari Supermarket`;

            // Hide These Elements if There is No Any Restaurant Orders
            document.getElementById('koktel_order_check_out_div').innerHTML = '';
            document.getElementById('koktel_meal_info_note_id').style.display = 'none';

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

                // letruct the inner HTML content for the order
                let localStorageOrderCardContent = `
                    <h2 class="arLangText" style=cursor: text; cursor: text;">منتج رقم ${index + 1}</h2>
                    <h2 class="indoLangText" style=cursor: text; cursor: text;">Nomor Produk ${index + 1}</h2>


                    <h2 class="arLangText" style="color: aqua; cursor: text;">${orderData.productName}</h2>
                    <h2 class="indoLangText" style="color: aqua; cursor: text;">${orderData.indo_productName}</h2>


                    <div class="finished_product_card_image_and_controllers_div">

                        <img src="${orderData.productImgSrc}" alt="سوبرماركت اندونيسيا - كوكتيل" title="سوبرماركت اندونيسيا - كوكتيل" onclick="koktel_show_full_screen_image(this.src)" loading="lazy">


                        <div class='koktel_orderFinished_info_and_delete'>

                            <h3 class="arLangText" style="color: rgb(255, 166, 0); cursor: text;">العدد = ${orderData.productAmount}</h3>
                            <h3 class="indoLangText" style="color: rgb(255, 166, 0); cursor: text;">Kuantitas = ${orderData.productAmount}</h3>


                            <h3 id="koktel_order_total_price_h3" class="arLangText">الإجمالي = ${orderData.totalPrice.toLocaleString()} Rp</h3>
                            <h3 id="koktel_order_total_price_h3" class="indoLangText">Total = ${orderData.totalPrice.toLocaleString()} Rp</h3>


                            <h3 class="arLangText" onclick="koktel_ensure_delete_orders_box('حذف الطلب', ${index})" style="color: red;">حذف الطلب</h3>
                            <h3 class="indoLangText" onclick="koktel_ensure_delete_orders_box('حذف الطلب', ${index})" style="color: red;">Hapus</h3>

                        </div>

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

                <div class="koktel_download_order_pdf_and_whatsapp_number_div_class" onclick="fetchDataFromGoogleSheet(2)">
                
                    <ion-icon name="cloud-upload-outline"></ion-icon>
                    <h5 class="arLangText">إرسال الطلبات</h5>
                    <h5 class="indoLangText">Kirim Orders</h5>

                </div>
            `;


            /* Update The Title Of The Page If there is Any Orders */
            koktel_supermarket_order_details_title_ar_id.innerHTML = `طلباتك من السوبرماركت <spam class="koktel_orders_ready_to_send_text">جاهزة للإرسال</spam>`;
            koktel_supermarket_order_details_title_indo_id.innerHTML = `Pesanan Anda dari Supermarket <spam class="koktel_orders_ready_to_send_text">Siap Dikirim</spam>`;

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


            if (clickedDeleteButton === 'حذف الطلب') {
                // letruct the ID of the corresponding overlay element
                let overlayId = `koktel_ensure_delete_this_orders_overlay_${index}`;

                // Show the overlay element
                document.getElementById(overlayId).style.display = 'block';
            } else {
                document.getElementById('koktel_ensure_delete_all_orders_overlay').style.display = 'block';
            }

        }

        // Disable scrolling
        const scrollY = window.scrollY;
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = '100%';
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
                successBox.textContent = 'Semua pesanan Supermarket telah dihapus';

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
        document.body.style.position = '';
        document.body.style.overflow = '';
        window.scrollTo(0, parseInt(document.body.style.top || '0') * -1);
        document.body.style.top = '';
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
                document.getElementById('koktel_delete_all_restaurant_orders_button').display = 'none';
                document.getElementById('koktel_order_check_out_div').innerHTML = '';
            }





            // Refresh the page or update the display to reflect the changes
            renderOrders();

            // Create a box with the text "تم حذف جميع الطلبات"
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


            /* Can a function to show the correct website language */
            setWebsiteLanguage();
        }

        // Re-enable scrolling
        document.body.style.position = '';
        document.body.style.overflow = '';
        window.scrollTo(0, parseInt(document.body.style.top || '0') * -1);
        document.body.style.top = '';
    }
}
/* Up Health And Beauty Code Up */








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
            textarea.style.height = '6vmax';

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
            }, 2000); // Wait for the fade-out transition to complete (1.5s)
        }, 700); // Wait for 3 seconds before triggering fade-out
    })
}




/* Insert new click data in the google sheet */
function insertNewClick(columnName) {
    const scriptURL = "https://script.google.com/macros/s/AKfycbyU-p7z3tHF0I1K0GCmjcRG3CaG0NPkGyMPTvhlGPISxwIYrt6ueD7O2iHSza9SPOP3/exec";

    // Trim the column name before passing it
    fetch(`${scriptURL}?columnName=${encodeURIComponent(columnName.trim())}`)
        .then(response => response.text())
        .then(data => console.log("Response:", data))
        .catch(error => console.error("Error:", error));
}

/* Open WhatsApp Chat */
function koktel_whatsApp() {

    insertNewClick('koktel-indo.com');

    // Create the WhatsApp URL with the phone number.
    let whatsappURL = 'https://wa.me/+6287720208728';

    // Open the WhatsApp chat window in a new tab.
    window.open(whatsappURL, '_blank');
}




/* Open WhatsApp Chat */
function koktel_book_doctor_meeting_whatsApp() {

    // Get today's date
    let today = new Date();
    let formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;


    let bookDoctorWhatsAppMessage = `جحز جديد مع الطيب\n`;
    bookDoctorWhatsAppMessage += `تاريخ إرسال الحجز ${formattedDate}\n\n`;

    bookDoctorWhatsAppMessage += `Reservasi Baru Dengan Doctor\n\n`;

    bookDoctorWhatsAppMessage += `جميع طرق الدفع متوفرة سواء اونلاين او كاش\n`;
    bookDoctorWhatsAppMessage += `Semua Metode Bayaran Tersedia, Baik Online Atau Tunai\n\n`;
    bookDoctorWhatsAppMessage += `Bank Central Asia\nName: samir\nNo Rekening: 1971025609\n\nDana: 087720208728`;

    // Encode the message using encodeURIComponent
    let encodedMessage = encodeURIComponent(bookDoctorWhatsAppMessage);

    // Create the WhatsApp URL
    let whatsappURL = `https://wa.me/6287720208728?text=${encodedMessage}`;

    // Open WhatsApp in a new window
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

// This function will be called when a right-click event is detected
function disableRightClick(event) {
    event.preventDefault();
}

/* Prevent the shortcut control + U to open page inspect */
document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && (event.key === 'u' || event.key === 'U' || event.key === 's' || event.key === 'S')) {
        event.preventDefault();
    }
});







document.addEventListener("DOMContentLoaded", () => {
    // Select all elements with the class "koktel_animation" for animation
    const elementsToAnimate = document.querySelectorAll(".koktel_animation");

    // Set up IntersectionObserver for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add intro animation class and remove outro class
                entry.target.classList.add("intro_animation");
                entry.target.classList.remove("outro_animation");

                // Unobserve the element after the first animation
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each element for scroll animations
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});














async function sendTheFinalOrderThroughLiveChatWidget(orderMessage) {
    if (window.tidioChatApi) {
        tidioChatApi.messageFromVisitor(orderMessage);
    } else {

        // Retry the function after a short delay
        setTimeout(() => {
            sendTheFinalOrderThroughLiveChatWidget(orderMessage);
        }, 1000); // Retry after 1 second
    }
}










































// Function to download the PDF file with the given name and send the link via Tawk.to chat
/* async function downloadPdfWithCustomName(pdfName) {
    let { jsPDF } = window.jspdf;

    // Function to capture content with a white background
    async function captureCanvas(section) {
        try {
            section.style.backgroundColor = "white"; // Ensure white background
            let canvas = await html2canvas(section, {
                scale: 2,
                backgroundColor: "white",
                useCORS: true,
            });
            return canvas;
        } catch (error) {
            console.error("Error capturing canvas:", error);
            return null;
        }
    }

    let section = document.getElementById("final_order_pdf_content_container_div");
    let canvas = await captureCanvas(section);

    if (!canvas) {
        alert("Failed to capture content for PDF.");
        return;
    }

    // Generate the PDF with a white background
    let pdf = new jsPDF();
    pdf.setFillColor(255, 255, 255); // White color
    pdf.rect(0, 0, pdf.internal.pageSize.width, pdf.internal.pageSize.height, "F");
    pdf.addImage(
        canvas.toDataURL("image/jpeg"),
        "JPEG",
        10,
        10,
        190,
        (canvas.height * 190) / canvas.width
    );

    // Convert the PDF to a Blob for uploading
    let pdfBlob = new Blob([pdf.output("blob")], { type: "application/pdf" });

    // Upload the file to File.io
    try {
        let uploadResponse = await uploadToFileIo(pdfBlob, `${pdfName}.pdf`);
        let fileLink = uploadResponse.link;

        // Send the file link to the Tawk.to chat widget
        if (typeof Tawk_API !== "undefined") {
            Tawk_API.addEvent("new_pdf_generated", {
                message: `طلب جديد: ${pdfName}`,
                link: fileLink,
            });
            alert("The PDF link has been sent to the Tawk.to chat!");
        } else {
            alert("Tawk.to is not available. Please try again later.");
        }
    } catch (error) {
        console.error("Error uploading PDF to File.io:", error);
        alert("Failed to upload the PDF.");
    }
} */

// Function to upload a file to File.io
/* async function uploadToFileIo(fileBlob, fileName) {
    let formData = new FormData();
    formData.append("file", fileBlob, fileName); // Ensure the correct file name

    let response = await fetch("https://file.io", {
        method: "POST",
        body: formData,
    });

    if (!response.ok) {
        throw new Error("Failed to upload file to File.io.");
    }

    return await response.json(); // File.io returns JSON with the download link
} */






