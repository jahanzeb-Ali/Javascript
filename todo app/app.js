// let input_value = document.getElementById('input-fleid');
let btn = document.getElementById('btn')
let para = document.getElementById("para")
let list = document.getElementById('add-item')
btn.addEventListener("click", function() {
    let input_value = document.getElementById('input-field').value
    if(input_value !== ""){
        list.innerHTML += `     <li class="mt-3" >
        <div class="d-flex justify-content-between ">
            <div class="box1">
                <label for='check1' class="d-flex align-items-center">
                    <input type="checkbox" name="task" id="check1">
                    <span class="px-3">${input_value}</span>
                </label>
            </div>
            <div class="box2">
                <i class="fa-solid fa-trash px-3" role="button"></i>
                <i class="fa-solid fa-pen-to-square" role="button"></i>
            </div>
        </div>
    </li>`;
    }else{
        alert("Add task!!!!")
    }

  input_value.value = "";
})