let btn = document.getElementById('btn');
let light = document.getElementById('light');

const toggleLight = () => {
    btn.classList.toggle('active') 
    light.classList.toggle('on')
}