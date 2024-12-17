function openInstagram() {
    window.open("https://www.instagram.com/starivlah_zlatibor/", "_blank");
}

function openBooking() {
    window.open("https://www.booking.com/hotel/rs/apartman-stari-vlah.sr.html?label=gen173nr-1BCAsowQFCE2FwYXJ0bWFuLXN0YXJpLXZsYWhIM1gEaMEBiAEBmAEkuAEYyAEM2AEB6AEBiAIBqAIEuALkwfu6BsACAdICJGJlNTU0NjM1LWNmNmItNDYwNy05ZGJhLTU0NmMwZGUzMTkwZNgCBeACAQ&sid=d22a5478d63457686617b5444b28b634&dist=0&keep_landing=1&sb_price_type=total&type=total&");
}

let confirmBtn = document.getElementById("confirmBtn");
let fullScreenDiv = document.getElementById("fullScreenDiv");
let fullName = document.getElementById("fullName");
let fullNameDetailsDiv = document.getElementById("fullNameDetailsDiv");

let phoneNumber = document.getElementById("phoneNumber");
let phoneNumberDetailsDiv = document.getElementById("phoneNumberDetailsDiv");

let emailAddress = document.getElementById("emailAddress");
let emailAddressDetailsDiv = document.getElementById("emailAddressDetailsDiv");

let checkInDate = document.getElementById("checkInDate");
let checkInDateDetailsDiv = document.getElementById("checkInDateDetailsDiv");

let checkOutDate = document.getElementById("checkOutDate");
let checkOutDateDetailsDiv = document.getElementById("checkOutDateDetailsDiv");

let checkInTime = document.getElementById("checkInTime");
let checkInTimeDetailsDiv = document.getElementById("checkInTimeDetailsDiv");

confirmBtn.addEventListener("click", function(event) {
    let fullNameValue = fullName.value;
    let phoneNumberValue = phoneNumber.value;
    let emailAddressValue = emailAddress.value;
    let checkInDateValue = checkInDate.value;
    let checkOutDateValue = checkOutDate.value;

    if(fullNameValue.trim() === "" || phoneNumberValue.trim() === "" || emailAddressValue.trim() === "" || !checkInDateValue || !checkOutDateValue)
    {
        event.preventDefault();
        alert("Obavezna polja moraju biti popunjena!");
    }
    else {
        fullScreenDiv.style.display = "flex";

    let fullNameNewValue = document.createElement("h1");
    fullNameNewValue.innerHTML = fullNameValue;
    fullNameNewValue.className = "fullNameNewValue"
    fullNameDetailsDiv.appendChild(fullNameNewValue);

    let phoneNumberNewValue = document.createElement("h1");
    phoneNumberNewValue.innerHTML = phoneNumberValue;
    phoneNumberNewValue.className = "phoneNumberNewValue";
    phoneNumberDetailsDiv.appendChild(phoneNumberNewValue);

    let emailAddressNewValue = document.createElement("h1");
    emailAddressNewValue.innerHTML = emailAddressValue;
    emailAddressNewValue.className = "emailAddressNewValue";
    emailAddressDetailsDiv.appendChild(emailAddressNewValue);

    let checkInDateNewValue = document.createElement("h1");
    checkInDateNewValue.innerHTML = checkInDateValue;
    checkInDateNewValue.className = "checkInDateNewValue";
    checkInDateDetailsDiv.appendChild(checkInDateNewValue);

    let checkOutDateNewValue = document.createElement("h1");
    checkOutDateNewValue.innerHTML = checkOutDateValue;
    checkOutDateNewValue.className = "checkOutDateNewValue";
    checkOutDateDetailsDiv.appendChild(checkOutDateNewValue);

    let checkInTimeValue = checkInTime.value;
    let checkInTimeNewValue = document.createElement("h1");
    if(!checkInTimeValue)
    {
        checkInTimeNewValue.innerHTML = "Vreme prijave nije navedeno."; 
    }
    else 
    {
        checkInTimeNewValue.innerHTML = checkInTimeValue;
    }

    checkInTimeNewValue.className = "checkInTimeNewValue";
    checkInTimeDetailsDiv.appendChild(checkInTimeNewValue);
}});

let okayBtn = document.getElementById("okayBtn");

okayBtn.addEventListener("click", function() {
    fullScreenDiv.style.display = "none";
})