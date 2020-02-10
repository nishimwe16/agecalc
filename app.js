
function prince() {
   setInterval(  function all (){
      var secondnow
      var minutenow
      var hournow
      var daynow
      var monthnow
      var yearnow
      
      const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      
      
      var x = document.getElementById('dateid').value.split('-')
      yearthen = x[0]
      monththen = x[1]
      var y = x[2].split(':')
      z = y[0].split('T')
      datethen = z[0]
      hourthen = z[1]
      minutethen = y[1]
      secondthen = y[2]
      
      
      var date = new Date()
      
      yearnow = date.getFullYear()
      monthnow = date.getMonth()
      datenow = date.getDate()
      hournow = date.getHours()
      minutenow = date.getMinutes()
      secondnow = date.getSeconds()
      
      for (i = yearnow; i <= yearthen; i--) {
        year = i;
        if (year % 4 === 0) {
         month[1] = 29;
       }
      
        
      }
      
      if (secondnow < secondthen) {
        secondnow += 60
        minutenow -= 1
      }
      if (minutenow < minutethen) {
        minutenow += 60
        hournow -= 1
      }
      if (hournow < hourthen) {
        hournow += 24
        datenow -= 1
      }
      if (datenow < datethen) {
        datenow += month[monthnow - 1]
        monthnow -= 1
      }
      if (monthnow < monththen) {
        monthnow += 12
        yearnow -= 1
      }
      
      var seconds = secondnow - secondthen
      var minutes = minutenow - minutethen
      var hours = hournow - hourthen
      var days = datenow - datethen
      var months = (monthnow - monththen) +1;
      var years = yearnow - yearthen
      
      console.log(years);
        
        document.getElementById('display').innerHTML = 'You have ' + years + ' years ' + months + ' months ' + days +
        ' days ' +  hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds.'
      }, 1000);
}