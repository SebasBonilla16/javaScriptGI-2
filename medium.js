 const monthNumber = prompt( "Please enter a number between 1 and 12:");
 const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
 ];

if (monthNumber >= 1 && monthNumber <=12){
    const monthName = monthNames [monthNumber-1];
        console.log(`${monthNumber} corresponds to the month of ${monthName}`);
    } else {
        console.log("Invalid Number. Please enter a number between 1 and 12:")
    }