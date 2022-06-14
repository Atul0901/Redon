 const printDate = function(){
     let currentDate = new Date()
     console.log(currentDate)
 }

 const printMonth = function(){
      let currentdate = new Date()
      let currentMonth = currentdate.getMonth() + 1
      console.log('The current month is ' +currentMonth)

 }

  const getBatchInfo = function() {
      getBatchInformation = "Radon, W3D3, the topic for today is Nodejs module system’ "
     console.log(getBatchInformation)
  }
 module.exports.printDate = printDate
 module.exports.getcurrentMounth = printMonth
 module.exports.getBatchInfo = getBatchInfo
 
 
