$(document).ready(function () {

    $('#btn-voltar').on('click', function () {
        window.location.href = "../index.html"
    });

    $('#btn-enviar').on('click', function(){
        var nome = $("input[name='nome']").val();
        var email = $("input[name='email']").val();
        var telefone = $("input[name='telefone']").val();
        var senha = $("input[name='senha']").val();

        var obj = {
            "nome": nome,
            "email": email,
            "telefone": telefone,
            "senha": senha
        };

        var json = JSON.stringify(obj, null, 8);
        $('#result').text(json)
    })

    
    


});
