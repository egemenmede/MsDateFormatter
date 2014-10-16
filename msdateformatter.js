/**
 * User: DeliPenguen - Egemen Mede
 * Date: 16.10.2014
 * Time: 13:56
 * Web: http://www.delipenguen.com
 */

msDateFormatter = function(){    
    function msDateToDate(myDate, seperator){
        var shortDate = null;
        var dt = new Date(new Date(parseInt(myDate.substr(6))));
        var month = dt.getMonth() + 1;
        var monthString = month > 9 ? month : '0' + month;
        var day = dt.getDate();
        var dayString = day > 9 ? day : '0' + day;
        var year = dt.getFullYear();
        shortDate = dayString + seperator + monthString + seperator + year;
        return shortDate;
    }

    return{
        convert: msDateToDate
    }
}();