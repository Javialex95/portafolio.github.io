$(document).ready(function(){

var gmail = document.querySelector('#gmail');
gmail.addEventListener('click', showEmail);

function showEmail(){
    $.confirm({
        title: 'Correo',
        content: '' +
        '<form action="" class="formName">' +
        '<div class="form-group">' +
        
        '<input type="text" id="email" value= "alexjls95@gmail.com" class="name form-control" required />' +
        '</div>' +
        '</form>',
        buttons: {
            formSubmit: {
                text: 'Copy',
                btnClass: 'btn-blue',
                action: function () {
                    var email = $("#email");
                    email.select();
                    
                    document.execCommand("copy");
            
                    $.alert('Email copiado');
                }
            },
            cancel: function () {
                //close
            },
        },
        onContentReady: function () {
            // bind to events
            var jc = this;
            this.$content.find('form').on('submit', function (e) {
                // if the user submits the form by pressing enter in the field.
                e.preventDefault();
                jc.$$formSubmit.trigger('click'); // reference the button and click it
            });
        }
    });
}
});

