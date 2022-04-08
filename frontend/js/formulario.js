
$('#form-contato').submit(function(){
    var nome = $('#nome');
    var email = $('#email');
    var mensagem = $('#mensagem');
    var erro = $('.alert');
    var campo = $('#campo-erro');

    erro.addClass('d-none');
    $('.is-invalid').removeClass('is-invalid');

    if(nome.val() == ''){
       erro.removeClass('d-none');
       campo.html('Nome');
       nome.focus();
       nome.addClass('is-invalid');
       return false;
    }
    if(email.val() == ''){
        erro.removeClass('d-none');
        campo.html('E-mail');
        email.focus();
        email.addClass('is-invalid');
        return false;
     }
     if(mensagem.val() == ''){
        erro.removeClass('d-none');
        campo.html('Mensagem');
        mensagem.focus();
        mensagem.addClass('is-invalid');
        return false;
     }
        
    return true;
});
