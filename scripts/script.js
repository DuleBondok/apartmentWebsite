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
let announcmentDiv = document.getElementById("announcmentDiv");

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

let numberOfAdults = document.getElementById("numberOfAdults");
let numberOfKids = document.getElementById("numberOfKids");

let totalPrice;

const today = new Date().toISOString().split('T')[0];
checkInDate.setAttribute("min", today);

const tomorrow = new Date();
tomorrow.setDate(new Date().getDate() + 1);
const formattedTomorrow = tomorrow.toISOString().split('T')[0];

checkOutDate.setAttribute("min", formattedTomorrow);

confirmBtn.addEventListener("click", function(event) {
    let fullNameValue = fullName.value;
    let phoneNumberValue = phoneNumber.value;
    let emailAddressValue = emailAddress.value;
    let checkInDateValue = checkInDate.value;
    let checkOutDateValue = checkOutDate.value;
    let numberOfAdultsValue = numberOfAdults.value;
    let numberOfKidsValue = numberOfKids.value;

    let numberOfAdultsParse = parseInt(numberOfAdultsValue, 10);
    let numberOfKidsParse = parseInt(numberOfKidsValue, 10);

    if(fullNameValue.trim() === "" || phoneNumberValue.trim() === "" || emailAddressValue.trim() === "" || !checkInDateValue || !checkOutDateValue || !numberOfAdultsValue)
    {
        event.preventDefault();
        alert("Obavezna polja moraju biti popunjena!");
    }
    else {

    const checkIn = new Date(checkInDateValue);
    const checkOut = new Date(checkOutDateValue);

    if (checkOut <= checkIn) {
        event.preventDefault();
        alert("Datum odjave mora biti posle datuma prijave!");
        return;
    }

    if (numberOfAdultsValue > 4 || numberOfAdultsValue < 1) {
        event.preventDefault();
        alert("Broj odraslih može biti najmanje 1, a najviše 4.");
        return;
    }

    if(numberOfKidsValue > 3 || numberOfKidsValue < 0)
    {
        event.preventDefault();
        alert("Broj dece može biti najmanje 0, a najviše 3.");
        return;
    }

    if((numberOfAdultsParse + numberOfKidsParse) > 4)
    {
        event.preventDefault();
        alert("Maksimalan broj osoba je 4!");
        return;
    }

    const nights = Math.round((checkOut - checkIn) / (1000 * 60 * 60 * 24));
    console.log(nights);
    totalPrice = (numberOfAdultsParse * 15 + numberOfKidsParse * 5) * nights;
    console.log(totalPrice);
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

    let announcmentHeader = document.createElement("h1");
    announcmentHeader.innerHTML = `Poštovani, ukupna cena vašeg boravka od ${nights} noćenja iznosi ${totalPrice}e.`;
    announcmentHeader.className = "announcmentHeader";
    announcmentDiv.appendChild(announcmentHeader);
}});

let okayBtn = document.getElementById("okayBtn");

okayBtn.addEventListener("click", function() {
    fullScreenDiv.style.display = "none";
})

document.addEventListener("DOMContentLoaded", function () {
    const checkInTime = document.getElementById("checkInTime");

    flatpickr(checkInTime, {
        enableTime: true,           // Enables time selection
        noCalendar: true,           // Disables calendar (time-only picker)
        dateFormat: "H:i",          // Sets 24-hour format (HH:mm)
        time_24hr: true, 
        minuteIncrement: 30             // Ensures 24-hour time format
    });
});