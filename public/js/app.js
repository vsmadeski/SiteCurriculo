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

// Fade-in effect for every object in class effect-fadein
$(".effect-fadein").css("opacity", 0);
setTimeout(()=>{
   let animateds = $(".effect-fadein").toArray();

   for(let i=0; i<animateds.length; i++){
        let param ={i: i, animatedObj: animateds[i] };
        let animate = function(){
            setTimeout(() => {
                $(this.animatedObj).addClass("animation-fadein");
            } , (this.i+1)*500);
        };
        let bound = animate.bind(param);
        bound();
   }
}, 100);
