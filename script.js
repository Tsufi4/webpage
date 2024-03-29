document.addEventListener('DOMContentLoaded', () => {
    fetch('students.json')
        .then(response => response.json())
        .then(data => {
            createStudentMenu(data);
            createProfileCards(data);
        })
        .catch(error => console.error('Error:', error));
});

function createStudentMenu(students) {
    const menu = document.getElementById('student-menu');
    students.forEach(student => {
        let menuItem = document.createElement('a');
        menuItem.href = `#${student.id}`;
        menuItem.textContent = student.name;
        menuItem.addEventListener('click', (event) => {
            event.preventDefault();
            showStudentCard(student.id);
        });
        menu.appendChild(menuItem);
    });
}

function createProfileCards(students) {
    const main = document.querySelector('main');
    students.forEach(student => {
        let card = document.createElement('section');
        card.id = student.id;
        card.className = 'profile-card';
        card.style.display = 'none'; // Initially hide the card
        card.innerHTML = `
            <h2>${student.name}</h2>
            <p>${student.bio}</p>
            <img src="${student.photo}" alt="Photo of ${student.name}" style="width:700px; height:700px; border-radius: 13px;   display: block;
            margin-left: auto;
            margin-right: auto;
            ">
        `;
        main.appendChild(card);
    });
}

function showStudentCard(id) {
    const cards = document.querySelectorAll('.profile-card');
    cards.forEach(card => {
        card.style.display = card.id === id ? 'block' : 'none';
    });
}
