var modal = document.getElementById('modal-window');
var krest = document.getElementById("krest");
var button = document.getElementById('button');
var dark = document.getElementById("bg");

button.onclick = function() {
    modal.classList.add('open');
    dark.setAttribute('style', 'display: block');
    document.body.classList.add('over');
}; 

krest.onclick = function() {
    modal.classList.remove('open');
    dark.setAttribute('style', 'display: none');
    document.body.classList.remove('over');
};

dark.onclick = function() {
    modal.classList.remove('open');
    dark.setAttribute('style', 'display: none');
    document.body.classList.remove('over');
};


