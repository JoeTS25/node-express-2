function timeWord (hh,mm) {
    let hours = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
                 "eleven", "twelve"];
    
    let minutes = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
    "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen",
    "nineteen", "twenty", "thirty", "fourty", "fifty"];
   
    if (hh > 23 && mm > 59) {
        console.error("Invalid hour and minute value");
        return "Invalid hour and minute value"
    };
    if (mm > 59) {
        console.error("Invalid minute value");
        return "Invalid minute value"
    };

    if (hh < 0 || hh > 23) {
        console.error("Invalid hour value");
        return "Invalid hour value"
    };


    if (hh == 0 && mm == 0) {
        
        return "midnight"
    };

    if (hh == 12 && mm == 0) {
       
        return "noon"
    };

    if (mm == 0) {
        minute = "o'clock";
        
    };

    if (mm > 0 && mm < 10) {
        minute = "oh " + minutes[mm - 1]
    };
    
    if (mm > 9 && mm < 20) {
        minute = minutes[mm - 1];
    };

    if (mm > 20 && mm < 60) {
        minute = minutes[17 + Math.floor(mm/10)] + " " + minutes[(mm % 10) - 1];
    }

    if (hh == 12) {
        
        return hours[hh-1] + " " + minute + " PM";
    };
    
    if (hh < 12) {
   
    return hours[hh-1] + " " + minute + " AM"
    };

    if (hh > 12 && hh < 24) {
        
        return hours[hh-13] + " " + minute + " PM";
    };
    
}

module.exports = timeWord



