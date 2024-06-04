// alert banner
const AlertBanner = (function AlertBanner() {
    let alertBanner = document.querySelector(".alert-banner");
    let alertBannerMessagesLength = document.querySelectorAll(".alert-banner-message").length;
    let alertMessages = document.querySelector('.alert-banner-content') && document.querySelector('.alert-banner-content').children;
    let activeAlertNo = document.querySelector(".active-alert-number");
    let prevAlertButton = document.querySelector(".alert-prev");
    let nextAlertButton = document.querySelector(".alert-next");
    let activeIndex = 0;


    function attachEvents() {
        if(activeIndex == 0 && !(alertMessages.item(0).classList.contains("show") )){
            alertMessages.item(0).classList.add("show");
        }
        prevAlertButton && prevAlertButton.addEventListener("click", function() {
            document.querySelector('.alert-banner-message.show').classList.remove("show");
            if (activeIndex == 0) {
                alertMessages.item(alertBannerMessagesLength - 1).classList.add("show");
                activeIndex = alertBannerMessagesLength - 1;
            } else {
                alertMessages.item(activeIndex - 1).classList.add("show");
                activeIndex -= 1;
            }
            updateActiveAlert();
            checkDisabledButtons();
        })
        nextAlertButton && nextAlertButton.addEventListener("click", function() {
            document.querySelector('.alert-banner-message.show').classList.remove("show");
            if (activeIndex == alertBannerMessagesLength - 1) {
                alertMessages.item(0).classList.add("show");
                activeIndex = 0;
            } else {
                alertMessages.item(activeIndex + 1).classList.add("show");
                activeIndex += 1;
            }
            updateActiveAlert();
            checkDisabledButtons();
        })
    }

    function checkDisabledButtons() {
        activeIndex == 0 ? prevAlertButton.disabled = true  : prevAlertButton.disabled = false;
        activeIndex == (alertMessages.length - 1) ? nextAlertButton.disabled = true : nextAlertButton.disabled = false;
    }

    function checkHiddenButtons() {
        if (alertMessages.length < 2) {
            prevAlertButton.hidden = true;
            nextAlertButton.hidden = true;
        }
    }

    function updateActiveAlert() {
        activeAlertNo.innerHTML = activeIndex + 1;
    }

    function init() {
        if (!alertBanner) {
            return;
        }
        // add a setTimeout for the functions below in case the code is running on vite server
        attachEvents();
        checkDisabledButtons();
        checkHiddenButtons();
    }

    init();
}());