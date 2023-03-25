const form = document.querySelector('form');
const uname = document.getElementById('name');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const cards = document.querySelector('.cards');
const enrollBtn = document.querySelector('.enroll-btn');
const image = document.getElementById('image');
const male = document.getElementById('male');
const female = document.getElementById('female');
const skills = document.getElementById('skills');
var img;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let values = [];
    checkboxes.forEach((ele) => {
        values.push(ele.value);
    });
    if(!uname.value || !email.value || !phone.value || !skills.value)
    alert("Enter ALL the fields to Enroll");
else {
    cards.innerHTML += `
        <div class="card">
            <div class="card-body">
                <h5>Name: ${uname.value}</h5>
                <p class="gender">Gender: ${male.checked ? male.value : female.checked ? female.value : 'other'}</p>
                <p class="email">Email: ${email.value}</p>
                <p class="phone">Phone No: ${phone.value}</p>
                <p class="skills">Skills: ${skills.value}</p>
            </div>
            <div class="image">
                <img src=${img} alt="Image"/>
            </div>
        </div>
    `;
}
form.reset();
});
image.addEventListener('change',(e) => {
img = URL.createObjectURL(event.target.files[0]);
})