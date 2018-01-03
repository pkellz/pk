document.addEventListener("DOMContentLoaded",()=>
{
  let keyCodeContainer = document.querySelector('#keyCodeContainer h1 em');
  let btnCodeContainer = document.querySelector('#btnCodeContainer span');
  keyCodeContainer.classList.add('hidden');
  initParticles();
  btnCodeContainer.innerText += "press any key to get its keycode ";

  window.addEventListener('keyup',(e)=>
  {
    keyCodeContainer.classList.remove('hidden');
    btnCodeContainer.innerText = "";

    if(e.keyCode === 32)
      btnCodeContainer.innerText += "Space";
    else
    btnCodeContainer.innerText += e.key;

    keyCodeContainer.innerText = "";
    keyCodeContainer.innerText += e.keyCode;
  });
});

function initParticles()
{
  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
}
