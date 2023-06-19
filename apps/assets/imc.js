$(document).ready(function() {

    $('#btn-voltar').on('click', function () {
        window.location.href = "../index.html"
      });
    
    $('.slider').on('input', function(){
        $(this).parent('.ranges').children('div').children().text($(this).val())
    });

    $('.btn-calcular').on('click', function(){
        let altura = $('input').eq(0).val() / 100

        let peso = $('input').eq(1).val()
        let result = peso / (altura * altura);
        $('#resultado > span').text(result.toFixed(2))

    })
  });
  