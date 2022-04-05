async function main() {

    let userChoice;
    do {
        output("1. Create a new profile:\n2. View previous profile:\n3. Quit application:")
        userChoice = await input("Please select an option:")

        switch (Number(userChoice)) {
            case 1:
                let theirName = false;
                while (!theirName) {

                    let firstName = await input("Please enter your first name: ");
                    theirName = checkName(firstName)

                    if (!theirName) {
                        output("Your first name contained numeric. Please re-enter your name without a numeric! ");
                    } else {
                        output("Your first name is: " + firstName);
                    }
                }


                let theirName2 = false;
                while (!theirName2) {

                    let lastName = await input("Please enter your last name: ");
                    theirName2 = checkName(lastName)

                    if (!theirName2) {
                        output("Your last name contained numeric. Please re-enter your name without a numeric! ");
                    } else {
                        output("Your last name is: " + lastName);
                    }
                }

                let theirAddress = false;
                while (!theirAddress) {

                    let year = await input("Please enter your adress: ");
                    theirAddress = validCharForStreetAddress(year)

                    if (!theirAddress) {
                        output("Not a valid address: ");
                    } else {
                        output("Your address is: " + year);
                        output()
                    }
                }

                let theirYear = false;
                while (!theirYear) {

                    let year = await input("Please enter a date in the format YYYY-MM-DD: ");
                    theirYear = checkDate(year)

                    if (!theirYear) {
                        output("Not a date! Pick a range from ");
                    } else {
                        output("Your purchased date input: " + year);
                    }
                }

                break;

            case 2:
                let userPrevious = await input("Please enter a number: ");
                // Take in a string from the user, return false if it contains any non-numeric characters or true if it doesnt.
                if (!checkNumber(userPrevious)) {
                    output("Not a number!");
                }

                let theirAddre = await input("Please enter your address:");
                while (checkAddress(theirAddre)) {
                    output("That is not a mailing address! Please try again!");
                }


                break;


            case 3:
                output("Goodbye!");
                break;

            default:
                output("That is not a valid menu choice.");
                break;
        }
    }

    while (userChoice != 3);

    function checkName(nameCheck) {
        let nameValue = true;
        const searchName = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

        for (item of searchName) {
            if (nameCheck.includes(item)) {
                nameValue = false;
            }
        }
        return nameValue;
    }

    function checkYear(inputValue)
    // Take in a string from the user, return true if it is a number between 1900 and the current year, or false if it isn't.
    {
        /*
        let outputValue = false;
        if (Number(inputValue) >= 1900 && Number(inputValue <= new Date().getFullYear()))
        {
            outputValue = true;
        }
        return outputValue;
        */
        return Number(inputValue) >= 1900 && Number(inputValue <= new Date().getFullYear());
    }

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

    function validCharForStreetAddress(c) {
        return ",#-/ !@$%^*(){}|[]\\".indexOf(c) >= 0;
    }
}