function handleNavBtn() {
    alert('You are a Home Pro');
}

function handleMessage() {
    var message = "Nothing";
    message = prompt("Enter your thought?");
    alert("Your message "+message);
}

function handleStarted() {
    
    var message = "Null";
    message = prompt("Enter your Home Blogs");
    alert("Your Blogs "+ message + " has been send. Awesome");
}
function handleQuotes() {
    var serviceSearch = document.getElementById("serviceSearch");
    var postalCode = document.getElementById("postalCode");

    alert("The Searched Service " + serviceSearch.value + " Postal Code " + postalCode.value + " Quotes");
    serviceSearch.value = "";
    postalCode.value = "";
}

function handleCompanySearch() {
    var companySearch = document.getElementById("companyValue");
    alert("Searched company found is " + companySearch.value + ".");
    companySearch.value = "";
}