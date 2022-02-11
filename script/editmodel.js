// Get the modal
var EditModal = document.getElementById("myEditModal");
var Cancel = EditModal.querySelector("#close");
var InputEditModol = EditModal.querySelector("input")
var CLoseBtnEdit = EditModal.querySelector("#EditBtn");
function CloseEditModel(){
    EditModal.style.display = "none";
}
function OpenEditModel(){
    EditModal.style.display = "block";
}

function SelectEditBtn(){
    let EditBtns = document.querySelectorAll("#myEditBtn");
    EditBtns.forEach((EditIcon)=>{
        EditIcon.addEventListener('click', function(){
            let EditBtnModal = document.querySelector("#EditBtn");
            let RightSection = EditIcon.parentNode;
            let TodoItem =  RightSection.parentNode;
            let EditText = TodoItem.querySelector(".subtitle");
            let PreviousText = this.getAttribute("data-index")
            InputEditModol.value = PreviousText
            InputEditModol.focus()
            OpenEditModel();

            EditBtnModal.addEventListener('click', function(){
              let NewParament = InputEditModol.value;
              EditText.textContent =  NewParament;
              RightSection.querySelector('#myEditBtn').removeAttribute('data-index')
              RightSection.querySelector('#myEditBtn').setAttribute("data-index", NewParament)
              RightSection.querySelector('#deleteIcon').removeAttribute('data-index')
              RightSection.querySelector('#deleteIcon').setAttribute("data-index", NewParament)
              TodoItem.removeAttribute('data-index')
              TodoItem.setAttribute("data-index", NewParament)
              TodoItem.querySelector('.subtitle').removeAttribute('data-index')
              TodoItem.querySelector('.subtitle').setAttribute("data-index", NewParament)//#check-box
              TodoItem.querySelector('#check-box').removeAttribute('data-index')
              TodoItem.querySelector('#check-box').setAttribute("data-index", NewParament)
            })
            window.addEventListener("keydown", function(e){
              if(e.keyCode == 13){
                let NewParament = InputEditModol.value;
                EditText.textContent =  NewParament;
                RightSection.querySelector('#myEditBtn').removeAttribute('data-index')
                RightSection.querySelector('#myEditBtn').setAttribute("data-index", NewParament)
                RightSection.querySelector('#deleteIcon').removeAttribute('data-index')
                RightSection.querySelector('#deleteIcon').setAttribute("data-index", NewParament)
                TodoItem.removeAttribute('data-index')
                TodoItem.setAttribute("data-index", NewParament)
                TodoItem.querySelector('.subtitle').removeAttribute('data-index')
                TodoItem.querySelector('.subtitle').setAttribute("data-index", NewParament)//#check-box
                TodoItem.querySelector('#check-box').removeAttribute('data-index')
                TodoItem.querySelector('#check-box').setAttribute("data-index", NewParament)
                CloseEditModel()
              }
            })
        })
    })}
CLoseBtnEdit.onclick = function() {
  CloseEditModel();
}
Cancel.onclick = function() {
    CloseEditModel();
  }

window.onclick = function(event) {
  if (event.target == EditModal) {
    CloseEditModel();
  }
};