// Constructor
function Forecast(d, t, u, i, m)
{
    this.day = d;
    this.temperature = t;
    this.unit = u;
    this.image = i;
    this.message = m;

    // Methods
    this.celsiusTemp = function () {
        // Is the temp already in this unit?
        if (this.unit == "C")
        {
            return this.temperature + " C";
        }
        else
        {
            return Math.round( (5/9) * (this.temperature - 32) ) + " C"; // Convert and return cel
        }

    }

    this.fahrenheitTemp = function () {
        // Is the temp already in this unit?
        if (this.unit == "F")
        {
            return this.temperature + " F";
        }
        else
        {
            return Math.round( (this.temperature * (9/5)) + 32 ) + " F"; // Convert and return fah
        }
    }


}

var dayTracker = 0;

// Generate Forecast Function
function generateRandomForecast()
{
    // Day 
    var d = dayNumToString(dayTracker++);
    var t = randNumInRange(-50, 100);
    var u = "C";
    var i = weatherImages[Math.floor( Math.random() * weatherImages.length )];
    var m = quotes[Math.floor( Math.random() * quotes.length )];

    return new Forecast(d,t,u,i,m);
    
    // inner functions

    function randNumInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function dayNumToString(num) 
    {
        // Clamp dayTracker between 0 and 6
        if (dayTracker >= 7)
        {
            dayTracker = 0;
        }

        // Return day in string using number
        if (dayTracker == 0)
        {
            return "Monday";
        }
        else if (dayTracker == 1)
        {
            return "Tuesday";
        }
        else if (dayTracker == 2)
        {
            return "Wednesday";
        }
        else if (dayTracker == 3)
        {
            return "Thursday";
        }
        else if (dayTracker == 4)
        {
            return "Friday";
        }
        else if (dayTracker == 5)
        {
            return "Saturday";
        }
        else if (dayTracker == 6)
        {
            return "Sunday";
        }
    }
}



