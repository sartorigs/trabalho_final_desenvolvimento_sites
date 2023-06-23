$(document).ready(function() {

    $('#btn-voltar').on('click', function () {
        window.location.href = "../index.html"
      });
    
    $('.slider').on('input', function(){
        $(this).parent('.ranges').children('div').children().text($(this).val())
    });

    $('.btn-calcular').on('click', function(){
        let altura = $('.ranges input').eq(0).val() / 100

        let peso = $('.ranges input').eq(1).val()
        let result = peso / (altura * altura);
        console.log(altura)
        console.log(peso)
        console.log(result)
        $('#resultado > span').text(result.toFixed(2))

    })
  });
  