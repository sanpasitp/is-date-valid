
/**
 * Check if parameter date is a valid date
 * 
 * @param {*} y: int
 * @param {*} m: int
 * @param {*} d: int
 */
function isDateValid(y, m, d) {

    var days = getDaysInMonth(y, m);
    return d <= days;
}

function getDaysInMonth(y, m) {

    switch(m) {
        case 2:
            return (y % 4 == 0 && y % 100 != 0) || (y % 400 == 0) ? 29 : 28;
        case 4: case 6: case 9: case 11:
            return 30;
        default:
            return 31

    }
}

module.exports = isDateValid;