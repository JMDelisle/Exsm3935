async function main() {
    
    
    let userChoice;
    let clientArray = [];

    do {
        output("1. Create a new profile:\n2. View previous profile:\n3. Quit application:");
        let userChoice = await input("Please select an option:");


        switch (Number(userChoice)) {
            case 1:
                //FirstName
                let theirName = false;
                while (!theirName) {

                    let firstName = await input("Please enter your first name: ");
                    theirName = checkName(firstName);


                    if (!theirName) {
                        output("Your first name contained numeric. Please re-enter your name without a numeric! ");

                    } else {
                        clientArray.push(firstName)
                        output("Your first name is: " + firstName);

                    }
                }

                //LastName
                let theirName2 = false;
                while (!theirName2) {

                    let lastName = await input("Please enter your last name: ");
                    theirName2 = checkName(lastName);

                    if (!theirName2) {
                        output("Your last name contained numeric. Please re-enter your name without a numeric! ");
                    } else {
                        clientArray.push(lastName);
                        output("Your last name is: " + lastName);
                    }
                }
                //Address
                let theirAddress = false;
                while (!theirAddress) {

                    let address = await input("Please enter your address: ");
                    theirAddress = validateMail(address);

                    if (!theirAddress) {
                        output("Not a valid address: ");

                    } else {
                        clientArray.push(address);
                        output("Your address is: " + address);
                    }
                }
                //DateOfPurchase
                let dateOfPurchase = false;
                while (!dateOfPurchase) {

                    let purchaseDate = await input("Please enter your purchase date YYYY-MM-DD: ");
                    dateOfPurchase = checkDate(purchaseDate);

                    if (!dateOfPurchase) {
                        output("That is not a valid date:");
                    } else {
                        clientArray.push(purchaseDate);
                        output("Your purchase date is: " + purchaseDate);
                    }
                }


                //Brand
                let theirBrand = false;
                while (!theirBrand) {

                    let brand = await input("Please enter brand of the vehicle: ");
                    theirBrand = checkBrand(brand);

                    if (!theirBrand) {
                        output("Is not a valid brand! Please selecta valid brand: ");
                    } else {
                        clientArray.push(brand);
                        output("Your preferred brand is: " + brand);
                    }
                }

                //Model
                let vehicleModel = false;
                while (!vehicleModel) {

                    let models = await input("Please choose your model you've selected: ");
                    vehicleModel = checkMake(models);

                    if (!vehicleModel) {
                        output("Not a brand, please select the right brand: ");
                    } else {
                        clientArray.push(models);
                        output("Your preferred brand is: " + models);
                    }
                }
                // Client Year
                let theirYear = false;
                while (!theirYear) {

                    let clientYear = await input("Please enter car year: YYYY-MM-DD: ");
                    theirYear = checkDate(clientYear);

                    if (!theirYear) {
                        output("Not a date! No month above 12 or days above 31: ");
                    } else {
                        clientArray.push(clientYear);
                        output("Your purchased date input: " + clientYear);
                    }
                }


                //VehicleVin
                let vehicleVin = false;
                while (!vehicleVin) {

                    let vins = await input("Please enter your VIN: ");
                    vehicleVin = carVin(vins);

                    if (!vehicleVin) {
                        output("Must be a valid VIN using only numerical or alphabetic: ");
                    } else {
                        clientArray.push(vins);
                        output("Your vehicle VIN is: " + vins);
                    }
                }
                break;

            case 2:

                let clientString = "";
                for (let i = 0; i < clientArray.length; i++) {
                    clientString += clientArray[i] + " ,\n";
                }
                output(clientString)

                break;

            case 3:
                output("Have a good day!");
                break;

            default:
                output("That is not a valid menu choice.");
                break;

        }
    }

    while (userChoice != 3);

}





/*------------------------------------------------------------*/

function checkDate(inputValue)
// Take in a string from the user, return true if it is a date in the format YYYY-MM-DD where MM<=12 and DD<=31, and false if it isn't.
{
    let outputValue = true;
    let inputDate = inputValue.split("-");
    // Validate Year
    if (!checkYear(inputDate[0])) {
        outputValue = false;
    }
    // Validate Month
    if (inputDate[1] < 1 || inputDate[1] > 12 || !Number.isInteger(Number(inputDate[1]))) {
        outputValue = false;
    }
    // Validate Day
    if (inputDate[2] < 1 || inputDate[2] > 31 || !Number.isInteger(Number(inputDate[2]))) {
        outputValue = false;
    }

    return outputValue;
}

function checkName(nameCheck) {
    let nameValue = /[0-9]+/;
    if (nameCheck.match(nameValue)) {
        return false;
    } else {
        return true;
    }
}


function validateMail(mailAdress) {
    let mailValue = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mailAdress.match(mailValue)) {
        return false;
    } else {
        return true;
    }
}

function checkBrand(nameCheck) {
    let nameValue = false;
    const searchName = ["chevrolet", "ford", "gmc", "kia", "bmw", "volvo", "saab", "mitsubishi"];

    for (item of searchName) {
        if (nameCheck.toLowerCase().includes(item)) {
            nameValue = true;
        }
    }
    return nameValue;
}

function checkMake(theirMake) {
    let makeValue = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (theirMake.match(makeValue)) {
        
        return false;
    } else {
        return true;
    }
}


function checkYear(inputValue) {
    let outputValue = false;

    return Number(inputValue) >= 1900 && Number(inputValue <= new Date().getFullYear()+1);
}

function carVin(inputValue) {
    let nameValue = true;

    if (inputValue.length != 17) {
        nameValue = false;
    } else if (inputValue.match("^[A-Z0-9]*$") == null); {

    }
    return nameValue;
}