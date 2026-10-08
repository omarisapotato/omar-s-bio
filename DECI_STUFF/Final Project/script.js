const UUIDComponents = "abcdef1234567890";
const statuses = ["Pending", "In Progress", "Completed"];
let TaskObjects = JSON.parse(localStorage.getItem("Tasks")) || [];
class Task {
    
    
    generateUUID() {
        let UUID = ""
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                UUID += UUIDComponents.charAt(Math.floor(Math.random() * 16));
            }
            if (i < 3) {
                UUID += '-'
            }
        }
        return(UUID);
    }

    constructor(title, description, dueDate, priority, status) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.id = this.generateUUID();
        this.priority = priority;
        this.status = status;
        TaskObjects.push(this);
        localStorage.setItem("Tasks", JSON.stringify(TaskObjects))
    }

    get status() {
        return(this._status)
    }

    set status(newStatus) {
        if (statuses.includes(newStatus)) {
            this._status = newStatus;
            console.log(this._status);
            return;
        } else {
            console.log('Incorrect Status Entered')
            return;
        }
    }
}

const TaskOne = new Task('1', '2', '3', '4', 'Pending');
const submitButton = document.getElementById('addTaskSubmit');
const formReqFields = document.querySelectorAll('.required-option');

function formValidityCheck() {
    console.log('smth changed')
    let unenteredOption = false
    for (let i = 0; i < formReqFields.length; i++) {
        if (formReqFields[i].value == '') {
            unenteredOption = true;
            break;
        }
    }
    if (unenteredOption == true) {
        submitButton.disabled = true;
    } else {
        submitButton.disabled = false;
    }
}

document.getElementById('addTaskForm').addEventListener('change', formValidityCheck);
document.getElementById('addTaskForm').addEventListener('input', formValidityCheck);

submitButton.addEventListener('click', function() {
    alert('hi');
})