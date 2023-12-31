window.addEventListener('load', () => {
    const form = document.querySelector('#new-task');
    const input = document.querySelector('#new-task-input');
    const list_element = document.querySelector('#tasks');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const task = input.value;

        if (!task) {
            alert("Please fill out your next task");
            return;
        } 
    //     <div class="taskOne">
    //     <div class="content">
    //         <input type="text" style="text-align: center;" class="new-task-input"  value="A New Task" readonly>
    //     </div>

    //     <div class="actions">
    //         <button class="edit add-new-task" id="edit">Edit</button>
    //         <button class="delete add-new-task" id="delete">Delete</button>
    //     </div>
    // </div>

// For each task
        const task_element = document.createElement("div");
        task_element.classList.add('taskOne');
        //For Input div
        const task_content_element = document.createElement('div');
        task_content_element.classList.add('content');
    
        //Adds new div for the added task 
        task_element.appendChild(task_content_element);
        // For the actual input
        const task_input_element = document.createElement('input');
        task_input_element.classList.add('new-task-input');
        task_input_element.type = 'text';
        task_input_element.value = task;
        task_input_element.setAttribute('readonly', 'readonly');

        task_content_element.appendChild(task_input_element);

        // Adds another div for actions
        const task_actions_element = document.createElement('div');
        task_actions_element.classList.add('actions')
        // For edit button
        const task_edit_element = document.createElement('button');
        task_edit_element.classList.add('edit');
        task_edit_element.innerHTML = 'Edit';
        //For delete button
        const task_delete_element = document.createElement('button');
        task_delete_element.classList.add('delete');
        task_delete_element.innerHTML = "Delete";

        task_actions_element.appendChild(task_edit_element);
        task_actions_element.appendChild(task_delete_element);
        task_element.appendChild(task_actions_element);
        list_element.appendChild(task_element);

        input.value = " ";

        task_edit_element.addEventListener('click', () => {
            if(task_edit_element.innerText.toLowerCase() == 'edit'){
                task_input_element.removeAttribute('readonly');
                task_input_element.focus();
                task_edit_element.innerText = 'Save';
            } else {
                task_input_element.setAttribute('readonly', 'readonly');
                task_edit_element.innerText = 'Edit';
            }
        });
        task_delete_element.addEventListener('click', () => {
            list_element.removeChild(task_element);
        })
    })
})
