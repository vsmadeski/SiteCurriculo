let osOptions = ["Android", "Windows Phone", "iOS"];
let device = platform.os.family;

if(!osOptions.includes(device)){
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */ 
    particlesJS.load('particles-js', '/js/particles.json', function() {
    });
}

$("form").submit( (event) => {
    event.preventDefault();
    Swal({
        title: "Sucesso!",
        text: "Mensagem enviada. Obrigado pelo seu contato!",
        type: "success"
    }).then(() => {
        $("form").off("submit").submit();
    });
});
