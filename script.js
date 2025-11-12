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

    /*function addTask(text) {
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
    
    }*/
   
    function addTask(text) {
    const listItem = document.createElement('li');
    listItem.textContent = text;
    
    // --- DÉBUT DU CODE CORRIGÉ ---
    const deleteButton = document.createElement('button'); // CHANGEMENT : 'span' -> 'button'
    deleteButton.textContent = 'Supprimer';
    deleteButton.className = 'delete-btn';

    // CHANGEMENT : Utilisation de addEventListener pour une meilleure pratique
    deleteButton.addEventListener('click', function() {
        // 'this' ne fonctionne pas de la même manière avec addEventListener,
        // on cible donc directement listItem qui est le parent.
        // On utilise une méthode propre pour retirer l'élément du DOM.
        listItem.remove(); // Suppression propre de l'élément du DOM
    });

    listItem.appendChild(deleteButton);
    // --- FIN DU CODE CORRIGÉ ---
    
    taskList.appendChild(listItem);
}
});