const container = document.querySelector('#container');

const firstParagraph = document.createElement('p');
firstParagraph.textContent="Hey I’m red!";
firstParagraph.classList.add('red-paragraph');
firstParagraph.style.cssText = 'color:red';

const h3 = document.createElement('h3');
h3.textContent = "I’m a blue h3!";
h3.setAttribute('style', 'color:blue');
container.appendChild(h3);

const secondDiv = document.createElement('div');
secondDiv.classList.add('secondDiv');
secondDiv.setAttribute ('style', 'background-color:pink');
container.appendChild(secondDiv);


const heading = document.createElement('h1');
heading.textContent = "This is the second heading";
secondDiv.appendChild(heading);

const divParagraph = document.createElement('p');
divParagraph.textContent = "Alaikum salaam";
secondDiv.insertBefore(divParagraph, heading);

container.appendChild(firstParagraph);

const logE = (e) => e.target.setAttribute('style', 'font-size:99px')
const hoverE = (e) => e.target.setAttribute('style', 'border-radius:100vw; padding:32px')

const btn = document.querySelector('#btn');
btn.addEventListener('click', logE);
btn.addEventListener('mouseo', hoverE);

