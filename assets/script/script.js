$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
   });



//Formulario

const button = document.querySelector('button');

   function addLoading() {
    button.innerHTML = '<div class="spin"></div>'
}

   function removeLoading() {
    button.innerHTML = 'Envie os dados'
}