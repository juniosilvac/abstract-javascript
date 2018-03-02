$(function()
{
    var elementIds = ['contact','name','email','phone','website','message','submit'];   
    // $contact = $('#contact');
    // $name = $('#name');
    // $email = $('#email');
    // $phone = $('#phone');
    // $website = $('#website');
    // $message = $('#message');    
    // $submit = $('#submit');    
    var elements = getElements(elementIds);    
    
    fill();

    //$('#contact').on('submit', function(event){
        elements.contact.on('submit', function(event){
        event.preventDefault();

        // var payload = {
        //     name: $name.val(),
        //     email: $email.val(),
        //     phone: $phone.val(),
        //     website: $website.val(),
        //     message: $message.val()
        // }
        var values = getPayload(elements);
        var payload = clearPayload(values);
        
        // $contact.attr('disabled',true);
        // $name.attr('disabled',true);
        // $email.attr('disabled',true);
        // $phone.attr('disabled',true);
        // $website.attr('disabled',true);
        // $message.attr('disabled',true);
        // $submit.attr('disabled',true);
        setDisable(elements, true);

        setTimeout(function(){
            // $name.val('');
            // $email.val('');
            // $phone.val('');
            // $website.val('');
            // $message.val('');

            clearForm(elements);
            elements.name.focus();
            setDisable(elements, false);
            alert('Mensagem enviada com sucesso');
            
            // $name.attr('disabled',false);
            // $email.attr('disabled',false);
            // $phone.attr('disabled',false);
            // $website.attr('disabled',false);
            // $message.attr('disabled',false);
            // $submit.attr('disabled',false);
            

        },2000)
    })
})

function fill(){
    $('#name').val('Junio');
    $('#email').val('junio@contato.com');
    $('#phone').val('+5531 91111-1111');
    $('#website').val('https://www.junio.com.br');
    $('#message').val('A mensagem a ser enviada');    
}

function getElements(ids) {
    return ids.reduce(function(acc, id) {
        acc[id] = $('#'+id);        
        return acc;    
    },{});
}

function getPayload(elements) {
    return Object.keys(elements).reduce(function (acc, prop) {
        acc[prop] = elements[prop].val();
        return acc;
    },{});
}

function clearPayload(payload) {
    Object.keys(payload).forEach(function (prop) {
        if(payload[prop] == '') {
            delete payload[prop]
        }
    }); 
    
    return payload;  
}

function setDisable(elements, state) {
    Object.keys(elements).forEach(function (prop) {
        elements[prop].attr('disabled',state);
        
    }); 
    
    return elements;  
}

function clearForm(elements, state) {
    Object.keys(elements).forEach(function (prop) {
        elements[prop].val('');        
    }); 
    
    return elements;  
}