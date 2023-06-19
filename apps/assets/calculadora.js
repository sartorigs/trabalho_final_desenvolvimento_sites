$(document).ready(function() {

  $('#btn-voltar').on('click', function () {
    window.location.href = "../index.html"
  });

  var currentNumber = '';

  $('.numero').on('click', function() {
    currentNumber += $(this).text();
    $('#visor span').text(currentNumber);
  });

  $('#btn-equals').on('click', function(){
    let result = eval($('#visor span').text())
    currentNumber = ''
    $('#visor span').text(result)
  });

  $('#btn-clear').on('click', function(){
    currentNumber = ''
    $('#visor span').text('')
  })
});
