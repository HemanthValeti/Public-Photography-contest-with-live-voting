const todossUl = document.querySelector('.todoss');
const input = document.querySelector('#add');
const saveBtn = document.querySelector('#save');

const gettodoss = () => {
    let todoss;
    if (localStorage.getItem('todoss') === null) {
        todoss = [];
    } else {
        todoss = JSON.parse(localStorage.getItem('todoss'));
    }
    return todoss;
};

const savetodoss = inputData => {
    const todoss = gettodoss();
    todoss.push(inputData);
    localStorage.setItem('todoss', JSON.stringify(todoss));
};

const addtodoss = e => {
    e.preventDefault();

    const file = input.files[0];
    if (file) {
        let li = document.createElement('li');
        let img = document.createElement('img');
        const reader = new FileReader();

        reader.onload = function (e) {
            img.src = e.target.result;
            li.appendChild(img);
            img.style.width = '60%'; 
            savetodoss(e.target.result); // Save image data to local storage
        };

        reader.readAsDataURL(file);

        todossUl.appendChild(li);
        input.value = ''; // Clear the input
    }
};

const deletetodoss = (todoss, imageData) => {
    const targetIndex = todoss.indexOf(imageData);
    todoss.splice(targetIndex, 1);
    localStorage.setItem('todoss', JSON.stringify(todoss));
};

saveBtn.addEventListener('click', addtodoss);

window.addEventListener('DOMContentLoaded', () => {
    const todoss = gettodoss();

    todoss.forEach(imageData => {
        let li = document.createElement('li');
        let img = document.createElement('img');
        img.src = imageData;
        li.appendChild(img);
        img.style.width = '60%'; 

        todossUl.appendChild(li);

        li.addEventListener('dblclick', () => {
            deletetodoss(todoss, imageData);
            todossUl.removeChild(li);
        });
    });
});
