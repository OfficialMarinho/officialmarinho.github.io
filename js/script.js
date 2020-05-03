const splasScreen = document.querySelector('.splash-screen');

document.addEventListener('DOMContentLoaded', (e)=> {
  setTimeout(()=>{
    splasScreen.classList.add('display-none');
  }, 1400);
});

console.log(`%c ________________________________________
< Mooooooooooooooooooooooooooooooooooooo >
 ----------------------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`, "font-family:monospace");