const weeks2023 = {
    // January
    1: {
        booking_count: 2,
        comprehensive: true
    },
    2: {
        booking_count: 2,
        comprehensive: false
    },
    3: {
        booking_count: 2,
        comprehensive: true
    },
    4: {
        booking_count: 2,
        comprehensive: true
    },
    5: {
        booking_count: 2,
        comprehensive: true
    },
    // February
    6: {
        booking_count: 2,
        comprehensive: true
    },
    7: {
        booking_count: 2,
        comprehensive: false
    },
    8: {
        booking_count: 2,
        comprehensive: true
    },
    9: {
        booking_count: 2,
        comprehensive: true
    },
    //  March
    10: {
        booking_count: 2,
        comprehensive: true
    },
    11: {
        booking_count: 2,
        comprehensive: false
    },
    12: {
        booking_count: 2,
        comprehensive: true
    },
    13: {
        booking_count: 2,
        comprehensive: true
    },
    // April
    14: {
        booking_count: 2,
        comprehensive: true
    },
    15: {
        booking_count: 2,
        comprehensive: true
    },
    16: {
        booking_count: 2,
        comprehensive: true
    },
    17: {
        booking_count: 2,
        comprehensive: false
    },
    // May
    18: {
        booking_count: 2,
        comprehensive: true
    },
    19: {
        booking_count: 2,
        comprehensive: true
    },
    20: {
        booking_count: 2,
        comprehensive: true
    },
    21: {
        booking_count: 2,
        comprehensive: true
    },
    22: {
        booking_count: 2,
        comprehensive: true
    },
    // June
    23: {
        booking_count: 2,
        comprehensive: true
    },
    24: {
        booking_count: 2,
        comprehensive: false
    },
    25: {
        booking_count: 2,
        comprehensive: true
    },
    26: {
        booking_count: 2,
        comprehensive: true
    },
    // July
    27: {
        booking_count: 2,
        comprehensive: true
    },
    28: {
        booking_count: 2,
        comprehensive: true
    },
    29: {
        booking_count: 2,
        comprehensive: false
    },
    30: {
        booking_count: 2,
        comprehensive: true
    },
    31: {
        booking_count: 2,
        comprehensive: true
    },
    // August
    32: {
        booking_count: 2,
        comprehensive: true
    },
    33: {
        booking_count: 2,
        comprehensive: false
    },
    34: {
        booking_count: 2,
        comprehensive: true
    },
    35: {
        booking_count: 2,
        comprehensive: true
    },
    // September
    36: {
        booking_count: 2,
        comprehensive: true
    },
    37: {
        booking_count: 2,
        comprehensive: false
    },
    38: {
        booking_count: 2,
        comprehensive: true
    },
    39: {
        booking_count: 2,
        comprehensive: true
    },
    // October
    40: {
        booking_count: 2,
        comprehensive: true
    },
    41: {
        booking_count: 2,
        comprehensive: true
    },
    42: {
        booking_count: 2,
        comprehensive: false
    },
    43: {
        booking_count: 2,
        comprehensive: true
    },
    44: {
        booking_count: 2,
        comprehensive: true
    },
    // November
    45: {
        booking_count: 2,
        comprehensive: true
    },
    46: {
        booking_count: 2,
        comprehensive: false
    },
    47: {
        booking_count: 2,
        comprehensive: true
    },
    48: {
        booking_count: 0,
        comprehensive: true
    },
    // December
    49: {
        booking_count: 0,
        comprehensive: true
    },
    50: {
        booking_count: 2,
        comprehensive: false
    },
    51: {
        booking_count: 2,
        comprehensive: true
    },
    52: {
        booking_count: 2,
        comprehensive: true
    },
};

window.calendarData = [];

/**
 * Reference for Stack Overflow First day of given week calculator
 * https://stackoverflow.com/a/16354810
 */
function firstDayOfWeek(week, year) { 
    
    if (typeof year === 'undefined') {
        year = (new Date()).getFullYear();
    }

    var date       = firstWeekOfYear(year),
        weekTime   = weeksToMilliseconds(week),
        targetTime = date.getTime() + weekTime;
    
    return date.setTime(targetTime); 
    
}

function weeksToMilliseconds(weeks) {
    return 1000 * 60 * 60 * 24 * 7 * (weeks - 1);
}

function firstWeekOfYear(year) {
    var date = new Date();
    date = firstDayOfYear(date,year);
    date = firstWeekday(date);
    return date;
}

function firstDayOfYear(date, year) {
    date.setYear(year);
    date.setDate(1);
    date.setMonth(0);
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
}

/**
 * Sets the given date as the first day of week of the first week of year.
 */
function firstWeekday(firstOfJanuaryDate) {
	var FIRST_DAY_OF_WEEK = 1; // Monday, according to iso8601
	var WEEK_LENGTH = 7; // 7 days per week
    var day = firstOfJanuaryDate.getDay();
    day = (day === 0) ? 7 : day; // make the days monday-sunday equals to 1-7 instead of 0-6
	var dayOffset=-day+FIRST_DAY_OF_WEEK; // dayOffset will correct the date in order to get a Monday
	if (WEEK_LENGTH-day+1<4) {
		// the current week has not the minimum 4 days required by iso 8601 => add one week
		dayOffset += WEEK_LENGTH;
	}
    return new Date(firstOfJanuaryDate.getTime()+dayOffset*24*60*60*1000);
}

const constructEventData = (date, booking_count, comprehensive) => {
    const eventData = {
        id: date,
        startDate: date,
        endDate: date,
        name: 'Event',
        color: booking_count == 0 ? '#18d26e' : booking_count == 1 ? '#ffc334' : booking_count == 2 ? '#f00' : '',
        comprehensive: comprehensive,
    };
    return eventData;
}

const processYear = (weeks, currentYear) => {
    for (let weekNumber in weeks) {
        const week = weeks[weekNumber];
        const firstDayForCurrentWeek = new Date(firstDayOfWeek(weekNumber, currentYear));
        const dayToModify = new Date(firstDayForCurrentWeek);
        window.calendarData.push(constructEventData(firstDayForCurrentWeek, weeks[weekNumber].booking_count, weeks[weekNumber].comprehensive));
        comprehensive: true
        // Iterate for an additional 4 days to generate date data object for the entire week
        for (let i = 1; i < 5; i++) {
            let nextDayForCurrentWeek = new Date(dayToModify.setDate(dayToModify.getDate() + 1));
            window.calendarData.push(constructEventData(nextDayForCurrentWeek, weeks[weekNumber].booking_count, weeks[weekNumber].comprehensive));
        }
    }
};

(() => {
    processYear(weeks2023, 2023);
    new Calendar('.calendar', {
        dataSource: window.calendarData
    });
})();
