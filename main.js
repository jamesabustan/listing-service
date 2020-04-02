
document.addEventListener("DOMContentLoaded", function(event) { 

    const itemPrice = document.getElementById('iprice')

    form.addEventListener('submit', (e) => {
       if (itemPrice.value < 1 || itemPrice.value == null) {
           alert('Please enter price');
       } else {
        e.preventDefault();
       }
    });






  });
