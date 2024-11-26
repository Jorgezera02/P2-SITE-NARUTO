function showModal(character) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    const characters = {
        naruto: '<h2>Naruto Uzumaki</h2><p>O herói do anime...</p>',
        sasuke: '<h2>Sasuke Uchiha</h2><p>O vingador...</p>',
        sakura: '<h2>Sakura Haruno</h2><p>A ninja médica...</p>',
    };
    modalContent.innerHTML = characters[character];
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
