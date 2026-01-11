
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');


const modal1 = document.getElementById('modal1');
const modal2 = document.getElementById('modal2');


const closeBtns = document.querySelectorAll('.close');


btn1.addEventListener('click', () => {
    modal1.style.display = 'flex';
    modal2.style.display = 'none';
});


btn2.addEventListener('click', () => {
    modal2.style.display = 'flex';
    modal1.style.display = 'none';
});


closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        modal1.style.display = 'none';
        modal2.style.display = 'none';
    });
});


window.addEventListener('click', (e) => {
    if (e.target === modal1) modal1.style.display = 'none';
    if (e.target === modal2) modal2.style.display = 'none';
});
