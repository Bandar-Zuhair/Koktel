/* in Case If There is Any 'restaurant_orders' Data in The LocalStorage Then Show The 'koktel_order_page_icon' Icon. if No Data Found Then Hide it*/
if (localStorage.getItem('Alriyan_Steak_House_LocalStorage')) {

    // Create Button To Show Orders Page
    let koktel_mealOrderIconDiv = document.createElement('div');
    koktel_mealOrderIconDiv.id = 'koktel_order_page_icon_div';
    let koktel_mealOrderIcon = `<a href='https://bandar-zuhair.github.io/Koktel/صفحات-مطاعم-اندونيسيا/الريان-ستيك-هاوس/طلباتك-من-مطعم-الريان-ستيك-هاوس.html' id="koktel_order_page_icon"><ion-icon name="cart-outline"></ion-icon></a>`;
    koktel_mealOrderIconDiv.innerHTML = koktel_mealOrderIcon;
    document.body.appendChild(koktel_mealOrderIconDiv);

} else {
    /* if There is No Data in The Orders Key Then Check if The 'koktel_order_page_icon_div' Was Visible Then Hide it */
    if (document.getElementById('koktel_order_page_icon_div')) {
        document.getElementById('koktel_order_page_icon_div').style.opacity = '0';
    }
}