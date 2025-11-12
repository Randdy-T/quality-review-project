document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche le rechargement de la page

        const taskText = taskInput.value.trim();

        if (taskText) {
            addTask(taskText);
            taskInput.value = ''; // Vide le champ de saisie
            taskInput.focus();
        }
    });

    function addTask(text) {
    const listItem = document.createElement('li');
    listItem.textContent = text;
    
    // --- DEBUT DU NOUVEAU CODE ---
    const deleteButton = document.createElement('span');
    deleteButton.textContent = 'Supprimer';
    deleteButton.className = 'delete-btn';

    // Logique de suppression
    deleteButton.onclick = function() {
        var parent = this.parentElement;
        parent.style.display = 'none';
    }

    listItem.appendChild(deleteButton);
    // --- FIN DU NOUVEAU CODE ---
    
    taskList.appendChild(listItem);
}
});