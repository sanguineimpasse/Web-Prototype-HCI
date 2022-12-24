const selectPickupTime = document.getElementById('pickup-time');
const selectDropoffTime = document.getElementById('dropoff-time');

window.addEventListener('load', () =>{
    populateElements();
});

/*
    I SWEAR THERE IS A MUCH MORE ELEGANT WAY TO 
    DOING THIS BUT I DONT HAVE TIME ANYMORE SOOOOO
*/
function populateElements(){
    
    //create for the 12am(s)
    var optionElement = document.createElement("option");
    optionElement.value = '12am'; optionElement.text = '12:00 AM';
    selectPickupTime.add(optionElement);

    var optionElement = document.createElement("option");
    optionElement.value = '12am'; optionElement.text = '12:00 AM';
    selectDropoffTime.add(optionElement);


    var optionElement = document.createElement("option");
    optionElement.value = '1230am'; optionElement.text = '12:30 AM';
    selectPickupTime.add(optionElement);

    var optionElement = document.createElement("option");
    optionElement.value = '1230am'; optionElement.text = '12:30 AM';
    selectDropoffTime.add(optionElement);

    // Loop through the array of options
    for (var i = 1; i < 12; i++) {
        // Create a new option element
        var optionElement = document.createElement("option");

        // Set the option element's value and text
        optionElement.value = i + "am";
        optionElement.text = i + ":00 AM";

        // Add the option element to the select element
        selectPickupTime.add(optionElement);

        //do it again for the :30 s
        var optionElement = document.createElement("option");
        optionElement.value = i + "30am"; optionElement.text = i + ":30 AM";
        selectPickupTime.add(optionElement);

        //for the dropoff time/////////////////////////////////////////
        var optionElement = document.createElement("option");

        // Set the option element's value and text
        optionElement.value = i + "am";
        optionElement.text = i + ":00 AM";

        // Add the option element to the select element
        selectDropoffTime.add(optionElement);

        //do it again for the :30 s
        var optionElement = document.createElement("option");
        optionElement.value = i + "30am"; optionElement.text = i + ":30 AM";
        selectDropoffTime.add(optionElement);
    }

    //create for the 12pm(s)
    var optionElement = document.createElement("option");
    optionElement.value = '12pm'; optionElement.text = '12:00 PM';
    selectPickupTime.add(optionElement);

    var optionElement = document.createElement("option");
    optionElement.value = '12pm'; optionElement.text = '12:00 PM';
    selectDropoffTime.add(optionElement);


    var optionElement = document.createElement("option");
    optionElement.value = '1230pm'; optionElement.text = '12:30 PM';
    selectPickupTime.add(optionElement);

    var optionElement = document.createElement("option");
    optionElement.value = '1230pm'; optionElement.text = '12:30 PM';
    selectDropoffTime.add(optionElement);

    // Loop through the array of options
    for (var i = 1; i < 12; i++) {
        // Create a new option element
        var optionElement = document.createElement("option");

        // Set the option element's value and text
        optionElement.value = i + "pm";
        optionElement.text = i + ":00 PM";

        // Add the option element to the select element
        selectPickupTime.add(optionElement);

        //do it again for the :30 s
        var optionElement = document.createElement("option");
        optionElement.value = i + "30pm"; optionElement.text = i + ":30 PM";
        selectPickupTime.add(optionElement);

        //for the dropoff time/////////////////////////////////////////
        var optionElement = document.createElement("option");

        // Set the option element's value and text
        optionElement.value = i + "pm";
        optionElement.text = i + ":00 PM";

        // Add the option element to the select element
        selectDropoffTime.add(optionElement);

        //do it again for the :30 s
        var optionElement = document.createElement("option");
        optionElement.value = i + "30pm"; optionElement.text = i + ":30 PM";
        selectDropoffTime.add(optionElement);
    }
}

//this doesn't work idk
/* function populateElementsTest(){
    for(var i = 1; i < 12; i++){
        let outputOptionElement;
        outputOptionElement = generateOption(i);

        selectPickupTime.add(outputOptionElement);
    }

    outputOptionElement = generateOption();
    selectDropoffTime.add(outputOptionElement);
}

function generateOption(i){
    // Create a new option element
    var optionElement = document.createElement("option");

    // Set the option element's value and text
    optionElement.value = i + "am";
    optionElement.text = i + ":00 AM";

    return optionElement;
} */