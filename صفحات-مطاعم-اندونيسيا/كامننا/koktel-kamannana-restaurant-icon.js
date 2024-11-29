



if (document.getElementById("koktel_meal_info_section")) {

    // Create the <h1> element
    let restaurantNameTitle = document.createElement('h1');
    restaurantNameTitle.setAttribute('id', 'meal_restaurant_raw_name');
    restaurantNameTitle.setAttribute('style', 'text-align: end; padding-left: 2px;');
    restaurantNameTitle.innerText = 'Kamannana';

    // Create the first <p> element for the restaurant order page URL name
    let arRestaurantName = document.createElement('p');
    arRestaurantName.setAttribute('id', 'koktel_ar_restaurant_name');
    arRestaurantName.setAttribute('style', 'display: none;');
    arRestaurantName.innerText = 'كامننا';

    // Create the second <p> element for the restaurant order LocalStorage name
    let localStorageRestaurantName = document.createElement('p');
    localStorageRestaurantName.setAttribute('id', 'koktel_localstorage_restaurant_name');
    localStorageRestaurantName.setAttribute('style', 'display: none;');
    localStorageRestaurantName.innerText = 'Kamannana_LocalStorage';

    // Find the div with the class name 'koktel_meal_info_name_area'
    let mealInfoNameArea = document.querySelector('.koktel_meal_info_name_area');

    // Insert the <h1> element at the top of the found div
    mealInfoNameArea.insertBefore(restaurantNameTitle, mealInfoNameArea.firstChild);

    // Append both <p> elements under the <h1> element
    mealInfoNameArea.insertBefore(arRestaurantName, restaurantNameTitle.nextSibling);
    mealInfoNameArea.insertBefore(localStorageRestaurantName, arRestaurantName.nextSibling);







    // Get the value of "CurrentWebsiteLanguage" from localStorage
    let CurrentWebsiteLanguage = localStorage.getItem("CurrentWebsiteLanguage");

    // Get all input elements within the divs with class "koktel_meal_info_option"
    let koktelMealOptions = document.querySelectorAll('.koktel_meal_info_option input[type="checkbox"]');

    // Iterate through each input element and set the label's innerText based on the language
    koktelMealOptions.forEach(input => {
        let label = document.querySelector(`label[for="${input.id}"]`);

        if (CurrentWebsiteLanguage === "ar") {
            // Set the label's innerText to the value of ar_checked_order_text attribute, or fall back to ar_order_display_text
            label.innerText = input.getAttribute('ar_checked_order_text') || input.getAttribute('ar_order_display_text');
        } else if (CurrentWebsiteLanguage === "id") {
            // Set the label's innerText to the value of indo_checked_order_text attribute, or fall back to indo_order_display_text
            label.innerText = input.getAttribute('indo_checked_order_text') || input.getAttribute('indo_order_display_text');
        }
    });

    // Additional styling based on the "CurrentWebsiteLanguage" value
    let koktelMealDivs = document.querySelectorAll('.koktel_meal_info_option');
    let allLabels = document.querySelectorAll('label');

    if (CurrentWebsiteLanguage === "ar") {
        // Set justify-content to flex-start for all koktel_meal_info_option divs
        koktelMealDivs.forEach(div => {
            div.style.justifyContent = 'flex-start';
        });

        // Set direction to ltr for all labels
        allLabels.forEach(label => {
            label.style.direction = 'rtl';
        });

    } else if (CurrentWebsiteLanguage === "id") {
        // Set justify-content to flex-end for all koktel_meal_info_option divs
        koktelMealDivs.forEach(div => {
            div.style.justifyContent = 'flex-end';
        });

        // Set direction to rtl for all labels
        allLabels.forEach(label => {
            label.style.direction = 'ltr';
        });
    }










    /* Create a go back icon for each  */
    let goBackButton = document.createElement('button');
    goBackButton.classList.add('koktel_go_back_products_page_button');
    goBackButton.addEventListener('click', function () {
        history.back(); // Goes back to the previous page in history
    });

    // Create and append the ion-icon to the first <a> element
    let goBackIcon = document.createElement('ion-icon');
    goBackIcon.setAttribute('name', 'arrow-undo-circle-outline');
    goBackButton.appendChild(goBackIcon);

    // Create the second <a> element with class and id attributes
    let shareButton = document.createElement('a');
    shareButton.classList.add('koktel_share_page_url_button');
    shareButton.setAttribute('id', 'koktel_copy_button');

    // Create and append the ion-icon to the second <a> element
    let shareIcon = document.createElement('ion-icon');
    shareIcon.setAttribute('name', 'share-social-outline');
    shareButton.appendChild(shareIcon);

    // Append the <a> elements to the document body or another container
    document.body.appendChild(goBackButton);
    document.body.appendChild(shareButton);
}










/* in Case If There is Any 'restaurant_orders' Data in The LocalStorage Then Show The 'koktel_order_page_icon' Icon. if No Data Found Then Hide it*/
if (localStorage.getItem('Kamannana_LocalStorage')) {

    // Create Button To Show Orders Page
    let koktel_mealOrderIconDiv = document.createElement('div');
    koktel_mealOrderIconDiv.id = 'koktel_order_page_icon_div';
    let koktel_mealOrderIcon = `<a href='https://koktel-indo.com/%D8%B5%D9%81%D8%AD%D8%A7%D8%AA-%D9%85%D8%B7%D8%A7%D8%B9%D9%85-%D8%A7%D9%86%D8%AF%D9%88%D9%86%D9%8A%D8%B3%D9%8A%D8%A7/%D9%83%D8%A7%D9%85%D9%86%D9%86%D8%A7/%D8%B7%D9%84%D8%A8%D8%A7%D8%AA%D9%83-%D9%85%D9%86-%D9%85%D8%B7%D8%B9%D9%85-%D9%83%D8%A7%D9%85%D9%86%D9%86%D8%A7' id="koktel_order_page_icon"><ion-icon name="cart-outline"></ion-icon></a>`;
    koktel_mealOrderIconDiv.innerHTML = koktel_mealOrderIcon;
    document.body.appendChild(koktel_mealOrderIconDiv);

} else {
    /* if There is No Data in The Orders Key Then Check if The 'koktel_order_page_icon_div' Was Visible Then Hide it */
    if (document.getElementById('koktel_order_page_icon_div')) {
        document.getElementById('koktel_order_page_icon_div').style.opacity = '0';
    }
}