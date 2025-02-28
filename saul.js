const title = document.getElementById('animated-title');

title.addEventListener('mouseenter', () => {
  const letters = title.querySelectorAll('span');
  letters.forEach((letter, index) => {
    const x = (Math.random() - 0.5) * 2; 
    const y = (Math.random() - 0.5) * 2;
    const r = Math.random(); 

    letter.style.setProperty('--x', x);
    letter.style.setProperty('--y', y);
    letter.style.setProperty('--r', r);
  });

});