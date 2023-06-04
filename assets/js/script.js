const ctx = document.getElementById('chart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: 'Graph',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

/*------------------------------------------------filter table---------------------------------------- */
var myArray = [
    {'name':'Michael', 'age':'30', 'birthdate':'11/10/1989'},
    {'name':'Mila', 'age':'32', 'birthdate':'10/1/1989'},
    {'name':'Paul', 'age':'29', 'birthdate':'10/14/1990'},
    {'name':'Dennis', 'age':'25', 'birthdate':'11/29/1993'},
    {'name':'Tim', 'age':'27', 'birthdate':'3/12/1991'},
    {'name':'Erik', 'age':'24', 'birthdate':'10/31/1995'},
]


buildTable(myArray)



 $('th').on('click', function(){
     var column = $(this).data('colname')
     var order = $(this).data('order')
     var text = $(this).html()
     text = text.substring(0, text.length - 1);
     
     
     
     if (order == 'desc'){
        myArray = myArray.sort((a, b) => a[column] > b[column] ? 1 : -1)
        $(this).data("order","asc");
        text += '&#9660'
     }else{
        myArray = myArray.sort((a, b) => a[column] < b[column] ? 1 : -1)
        $(this).data("order","desc");
        text += '&#9650'
     }

    $(this).html(text)
    buildTable(myArray)
    })


   
 
    
function buildTable(data){
    var table = document.getElementById('myTable')
    table.innerHTML = ''
    for (var i = 0; i < data.length; i++){
        var colname = `name-${i}`
        var colage = `age-${i}`
        var colbirth = `birth-${i}`

        var row = `<tr>
                        <td>${data[i].name}</td>
                        <td>${data[i].age}</td>
                        <td>${data[i].birthdate}</td>
                   </tr>`
        table.innerHTML += row
    }
}

/*--------------------------------------------------------------------sidebar toggle------------------------------------------------------*/
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.querySelector('.sidebar-col');
const mainPage = document.querySelector('.main-page');
const menuIcon = document.getElementById('menu-icon');

menuBtn.addEventListener('click', function() {
  sidebar.classList.toggle('open');
  mainPage.classList.toggle('open');
  if (sidebar.classList.contains('open')) {
    menuIcon.textContent = 'close';
  } else {
    menuIcon.textContent = 'menu';
  }
});