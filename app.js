var fnameNode = document.getElementById('fname');
var lnameNode = document.getElementById('lname');
var fatnameNode = document.getElementById('fatname');
var connameNode = document.getElementById('conname');
var zipNode = document.getElementById('zip');
// var fnameVal = document.getElementById('fname').value;
// var lnameVal = document.getElementById('lname').value;
// var fatnameval = document.getElementById('fatname').value;

// function handleSubmit(e) {
//     e.preventDefault();
//     console.log('submission', fnameInput);
//     // console.log('submission', { fnameInput, lnameInput, fatnameInput });
// }

function selectZipCode() {
    // var conName = connameNode.value;
    var zipCode = ''
    var slcon = document.getElementById('country').value;
    // if (conName !== '') {
    //     switch (conName) {
    //         case 'pakistan':
    //             zipCode = "123pak"
    //             break;
    //         case 'india':
    //             zipCode = "456ind"

    //             break;
    //         case 'usa':
    //             zipCode = "789usa"
    //             break;

    //         default:
    //             zipCode = 'XXXX'
    //             break;
    //     }
    // }
    // zipNode.value = zipCode;
    if (slcon.value !== '') {
        /*

        HELLO


        */
        switch (slcon) {
            case 'pak':
                zipCode = "123pak"
                break;
            case 'ind':
                zipCode = "456ind"

                break;
            case 'usa':
                zipCode = "789usa"
                break;

            default:
                zipCode = 'XXXX'
                break;
        }
    }
    zipNode.value = zipCode;
}

function handleSubmit(e) {
    e.preventDefault(); // Stops the form from reloading
    var formData = {
        fname: fnameNode.value,
        lname: lnameNode.value,
        fatname: fatnameNode.value
    }
    if (formData.fname === '' || formData.lname === '' || formData.fatname === '') {
        alert("Fill out all the fields")
        return;
    }
    console.log('submission', formData);
    // console.log('submission', { fnameInput, lnameInput, fatnameInput });
}