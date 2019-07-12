// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

// const header = document.querySelector('.header-container')
// header.appendChild(headerCreater());


// function headerCreater( ){
//     const header = document.createElement('div')
//     const title = document.createElement('h1')
//     const date = document.createElement('span')
//     const temperature = document.createElement('span')

//     header.classList.add('header');
//     date.classList.add('date');
//     temperature.classList.add('temp');

//     title.textContent = 'lambda times';
//     date.textContent = '(s)march 28, 2019';
//     temperature.textContent = '98';

//     header.append(date);
//     header.append(title);
//     header.append(temp);

//     return header;
// }

const mainHeader = document.querySelector('.header-container')
mainHeader.appendChild(headerCreate());

 function headerCreate() {

    const header = document.createElement('div');
    const title = document.createElement('h1');
    const date = document.createElement('p');
    const temp = document.createElement('p');

    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    date.textContent = '(s)march 28, 2019';
    title.textContent = 'lambda times';
    temp.textContent = '98';

    header.append(date);
    header.append(title);
    header.append(temp);


    return header;
}