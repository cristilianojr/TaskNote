
var task_id = 0;


function addNewtask() {
    let container_task =  document.getElementById('container-task');
    
    let task = document.createElement('section', className='task');
    task.className = 'task';
    task.id = `task_${task_id}`;

    let task_checkbox_input = document.createElement('input');
    task_checkbox_input.className = 'task checkbox-input';
    task_checkbox_input.type = 'checkbox';
    task_checkbox_input.disabled = true
    task_checkbox_input.onclick = () => {applyLineThrouth(task_checkbox_input.parentElement)}

    let task_text_input = document.createElement('input');
    task_text_input.className = 'task text-input';
    task_text_input.type = 'text';
    task_text_input.onchange = () => {desblockCheckBox(task_checkbox_input.parentElement)}
    task_text_input.onkeyup = () => {desblockCheckBox(task_checkbox_input.parentElement)}
    task_text_input.onkeydown = () => {desblockCheckBox(task_checkbox_input.parentElement)}
    task_text_input.onclick = () => {desblockCheckBox(task_checkbox_input.parentElement)}
    task_text_input.onmousedown = () => {desblockCheckBox(task_checkbox_input.parentElement)}
    task_text_input.onmouseup = () => {desblockCheckBox(task_checkbox_input.parentElement)}

    task.appendChild(task_checkbox_input);
    task.appendChild(task_text_input);

    container_task.appendChild(task);

    task_id += 1;
}

function desblockCheckBox (parent){
    let element_text = document.getElementById(parent.id)
    let text_input = element_text.querySelector('.text-input')
    let checkbox_input = element_text.querySelector('.checkbox-input')
    console.log('Chamando')
    if(text_input.value.length > 0){
        checkbox_input.disabled = false
    }else{
        checkbox_input.disabled = true
    }

}

function applyLineThrouth(parent) {
    let element_text = document.getElementById(parent.id)
    let text_input = element_text.querySelector('.text-input')
    let checkbox_input = element_text.querySelector('.checkbox-input')
    
    // if(checkbox_input.checked == true){
    //     text_input.style.textDecoration = 'line-through'
    // }else {
    // text_input.style.textDecoration = 'none'
    // }

    text_input.style.textDecoration = checkbox_input.checked ? 'line-through':'none'  

}

function dellElement(){
    let task = document.querySelectorAll('.task')

    function getParentElement(element, index, array){
        // console.log(element.querySelector('.checkbox-input').checked)
        let checkbox = element.querySelector('.checkbox-input')
        if(checkbox && checkbox.checked){
            element.remove()
        }
    }
    task.forEach(getParentElement);
   

}


