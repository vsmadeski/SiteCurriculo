let typeds = $(".typer-class");

let options = {
    showCursor: false,
    strings: ["", "Put final text here"],
    typeSpeed: 10
}

for(element of typeds){
    let dummy = element.innerHTML;
    element.innerHTML = "";
    options.strings[1] = dummy;
    new Typed(element, options);
}

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', '/js/particles.json', function() {
});