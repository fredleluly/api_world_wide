let dataApi = fetch('https://api.covid19api.com/summary').then(data => data.json()).then(ress => {
   check22(ress.Countries)}).catch(err => console.log(err))

function check22(ress){

   let cards2 = []
   let confirm2 = []
   let original = []   
   ress.forEach(element => {
      original.push([String(element.Country),element.TotalConfirmed])
   });
   original = original.sort(function(a, b){
      console.log(a,b)
      return a[1] - b[1]
   })
   // console.log(original[0][1])
   original.forEach(sudah => {
      cards2.push(sudah[0])
      confirm2.push(sudah[1])
   })
   var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'horizontalBar',

    // The data for our dataset
    data: {
        labels: cards2.reverse(),
        datasets: [{
            label: 'Covid 19 World Wide',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: confirm2.reverse()
        }]
    },

    // Configuration options go here
    options: {}
});
}
