var AddModal = document.getElementById("myAddModal");
var BtnAdd = document.getElementById("myAddBtn");
var CLoseBtnAdd = AddModal.querySelector("#close");
function OpenAddModel(){
  AddModal.style.display = "block";
}
function CloseAddModel(){
  AddModal.style.display = "none";
}
AddBtn.addEventListener("click", function(){
  let NewData = InputAddModol.value;
  if(NewData !== ""){
    InputAddModol.value=""
    ImportNoCheckedItem(NewData);
    CloseAddModel();
    return
  }
  

  //localStorage.setItem("ItemsList", JSON.stringify(Saveitemslist));
});
BtnAdd.onclick = function() {
  OpenAddModel();
  window.addEventListener("keydown", function(e){
    if(e.keyCode == 13){
      let NewData = InputAddModol.value;
      if(NewData !== ""){
        InputAddModol.value=""
        ImportNoCheckedItem(NewData);
        CloseAddModel();
        return
    }}
  })

}
CLoseBtnAdd.onclick = function() {
  CloseAddModel();
}

window.onclick = function(event) {
  if (event.target == AddModal) {
    CloseAddModel();
  }
}