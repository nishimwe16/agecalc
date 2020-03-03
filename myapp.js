class Agethen {

    constructor(yearthen, monththen, datethen, hourthen, minutethen, secondthen) {

        getInput();
        
        this.year = yearthen;
        this.month = monththen;
        this.date = datethen;
        this.hour = hourthen;
        this.minute = minutethen;
        this.second = secondthen;

    }}

    class Agenow {

    constructor(yearnow, monthnow, datenow, hournow, minutenow, secondnow){
        var date = new Date()

        date.getFullYear() = yearnow;
        date.getMonth() = monthnow;
        date.getDate() = datenow;
        date.getHours() = hournow;
        date.getMinutes() = minutenow;
        date.getSeconds() = secondnow;
    }



}


function getInput() {
            
    var x = document.getElementById('dateid').value.split('-')
    year = x[0]
    month = x[1]
    var y = x[2].split(':')
    z = y[0].split('T')
    date = z[0]
    hour = z[1]
    minute = y[1]
    second = y[2]
    
}
