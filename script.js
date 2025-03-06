function showMedicinalUses() {
    const medicinalUses = document.getElementById('medicinal-uses');
    if (medicinalUses.style.display === 'none' || medicinalUses.style.display === '') {
        medicinalUses.style.display = 'block';
    } else {
        medicinalUses.style.display = 'none';
    }
}

// Add active class to the clicked button
const navButtons = document.querySelectorAll('.nav-button');
navButtons.forEach(button => {
    button.addEventListener('click', function() {
        navButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});