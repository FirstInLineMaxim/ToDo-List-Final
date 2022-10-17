// Selectors 
const bubble = document.querySelectorAll(".bubble")
const input = document.querySelector("#taskInput")
const submit = document.querySelector("#submit")
let nonchecked = null;
let checked = document.querySelectorAll('input[type="checkbox"]:checked');
const progress = document.querySelector('.progress-bar')
const totalTasks = document.querySelector("#totalTasks")

// WALLPAPER BUBBLES
const montain = document.querySelector('#Montain')
const montain2 = document.querySelector('#Montain2')
const forest = document.querySelector('#Forest')

// LocalStorage
document.body.style.backgroundColor = localStorage.getItem("newColorbg")


// let tasks = {Done: "", TaskValue:"",};

const tasks = {
    taks1: {done:"template", task:"template"},
}

console.log(tasks)
tasks.task4 = {done:"true", task:"test3"}
// Object.assign({},tasks,{task4: {done:"test", task:"wassup"})
console.log(tasks)

// ADDING li with Inputed Task to ul & the buttons edit delete
const ul = document.querySelector(".list-unstyled")
const handleCLick = () => {
    if (input.value !== "") {
        //Creates the list item with the tasks value 
        const checkbox = document.createElement('input')
        checkbox.setAttribute('type', 'checkbox')
        const li = document.createElement("li")
        const task = document.createElement("input")
        task.value = `${input.value}`
        task.disabled = true
        task.className = "textarea"



        
        //check tasks length
        // const total = Object.keys(tasks).length
        // console.log(total)
        // tasks[`task ${total}`] = {done:"false", task:`${input.value}`}
        
        // creates the edit button 
        const edit = document.createElement("button")
        edit.innerText = "edit"
        edit.className = "edit"

        //creates 
        const del = document.createElement("button")
        del.innerText = "del"
        del.className = "del"

        const div = document.createElement("div")
        div.className = "buttons"


        ul.appendChild(li).appendChild(checkbox)
        li.appendChild(task)
        li.appendChild(edit)
        li.appendChild(del)
        input.value = ""

        nonchecked = document.querySelectorAll('input[type="checkbox"]')
        totalTasks.innerText = `Tasks done ${checked.length} out of ${nonchecked.length}`
        console.log(tasks)


    } else {
        console.log("you need something in here")

    }

};

const taskList = document.querySelector(".list-unstyled") // 
taskList.addEventListener("click", function (e) {
    //checks if uelement in ul is with class edit.
    if (e.target.className === "edit") {
        edit(e.target.previousSibling)
        return
    }
    //checks if element in ul is with class save.
    if (e.target.className === "save") {
        edit(e.target.previousSibling)
        return
    }
    //checks if uelement un ul is with class del.
    if (e.target.className === "del") {
        Remove(e.target.parentElement)
        return
    }

    //COUNT CHECKED BOXES DISPLAY IN PROGRESS
    if (e.target.type === "checkbox") {
        checked = document.querySelectorAll('input[type="checkbox"]:checked')
        totalTasks.innerText = `Tasks done ${checked.length} out of ${nonchecked.length}`
        const percent = 100 / `${nonchecked.length}` * `${checked.length}`
        progress.style.width = `${percent}%`
        const newColorbg = document.body.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
        localStorage.setItem("newColorbg",newColorbg)
        return newColorbg 
    }
})

// CHECKING FOR CHECKED BOXES 
// function checking (e) = {
//     if (e.target == '[type:"checkbox"')

// }

function color(){
    const newColorbg = document.body.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
        localStorage.setItem("newColorbg",newColorbg)
        return newColorbg
}



//SUBMIT ON ENTER KEY PRESS
submit.addEventListener('click', handleCLick)
input.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        submit.click();
    }
});


// DELETE
function Remove(selectedLi) {
    ul.removeChild(selectedLi)
}

// EDIT
function edit(selectedInput) {
    if (selectedInput.disabled === true) {
        selectedInput.disabled = false;
        //CHANGE PENCIL TO SAVE
        selectedInput.nextSibling.className = "save"

    } else {
        selectedInput.disabled = true
        selectedInput.nextSibling.className = "edit"
    }

}

//Typing Title
const typing=new Typed(".text", {
    strings: ["", "Just do it."],
    typeSpeed: 100,
    backSpeed: 40,
    loop: false,
});


// bubble[0].addEventListener("click", () => document.body.style.backgroundImage = "url('\/src/Wallpaper/Montain.jpg')")
// bubble[1].addEventListener("click", () => document.body.style.backgroundImage = "url('\/src/Wallpaper/Montain_2.jpg')")
// bubble[2].addEventListener("click", () => document.body.style.backgroundImage = "url('\/src/Wallpaper/Forest.jpg')")

































// ADDING THE TASK + CHECKBOX
// let checked2 = [0];
// const add = function () {


//     if (input.value !== "" && input.value !== " ") {
//         ul.innerHTML += `<label class="containerMark">
//         <li class="task"><input type="checkbox" class="checkmark">
//             ${input.value}</li>
//              </label>`
//         input.value = ""
//         checked2++
//         document.querySelector('.progress-bar').style.width = checked2 + "%"// progressbar



//     } else {
//         alert("Seems like you have done all")  //alert on no input
//     }
// }