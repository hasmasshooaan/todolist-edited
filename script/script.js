var AddBtn = document.querySelector(".add");
var AddModal = document.getElementById("myAddModal");
var InputAddModol = AddModal.querySelector("input");
var BtnEdit = document.querySelector("#myEditBtn");
var IncompletetTaskBtn = document.querySelector("#incompletettask");
var CompletetTaskBtn = document.querySelector("#completettask");
var ItemsList = JSON.parse(localStorage.getItem("ItemsList"));
var CheckedItemsList = JSON.parse(localStorage.getItem("CheckedItemsList"));
window.onload=function(){
    SetTime();
    GetNoCheckedItemfromlocalstorge(ItemsList)
    GetCheckedItemfromlocalstorge(CheckedItemsList)
}
//This function converts the number of  month to the string of month
function MnumberTostring(month){
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return monthNames[month];
}
function SetTime(){
    let now= new Date();
    let Day = now.getDay();
    let Month = now.getMonth();
    let Year = now.getFullYear();
    let timesection = document.querySelector(".Present");
    let DayTime = timesection.querySelector(".day-time");
    let MonthTime = timesection.querySelector(".month-time");
    let YearTime = timesection.querySelector(".year-time");
    Month = MnumberTostring(Month)
    DayTime.textContent = Day;
    MonthTime.textContent = Month;
    YearTime.textContent = Year;
}

function GetNoCheckedItemfromlocalstorge(ItemsList){

    if(Array.isArray(ItemsList) && ItemsList.length != 0){
        ItemsList.forEach(element => {
            ImportNoCheckedItem(element)
        }); 
}}
function GetCheckedItemfromlocalstorge(CheckedItemsList){
    if(Array.isArray(CheckedItemsList) && CheckedItemsList.length != 0){
        CheckedItemsList.forEach(element => {
            ImportCheckedItem(element)
        }); 
}}

function ImportNoCheckedItem(title){
    let todolist = document.querySelector(".todo-list");
        todolist.innerHTML +=  `<div class="todo-item" data-index="${title}">
                                    <div  class="left-section">
                                        <div data-index="${title}" class="basis disable" id="check-box" style="border-radius:50%;">
                                            <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 3.67771L4.12899 6L9 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>                
                                        </div>    
                                        <span class="subtitle">${title}</span>
                                    </div>
                                    <div class="right-section">
                                        <svg class="edit" id="myEditBtn" data-index="${title}" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1026_60)"><path opacity="0.2" d="M15.9259 9.25926L10.7407 4.07408L13.1759 1.63889C13.2448 1.5689 13.327 1.51332 13.4176 1.47538C13.5082 1.43745 13.6055 1.41791 13.7037 1.41791C13.8019 1.41791 13.8992 1.43745 13.9898 1.47538C14.0804 1.51332 14.1625 1.5689 14.2315 1.63889L18.3611 5.76852C18.4311 5.83745 18.4867 5.9196 18.5246 6.01021C18.5625 6.10082 18.5821 6.19807 18.5821 6.2963C18.5821 6.39453 18.5625 6.49178 18.5246 6.58239C18.4867 6.67299 18.4311 6.75515 18.3611 6.82408L15.9259 9.25926Z" fill="#557BDD"/><path d="M6.7315 18.1482H2.59261C2.39616 18.1482 2.20775 18.0701 2.06883 17.9312C1.92991 17.7923 1.85187 17.6039 1.85187 17.4074V13.2685C1.85153 13.1723 1.87017 13.077 1.90671 12.9881C1.94326 12.8991 1.99699 12.8182 2.06484 12.75L13.1759 1.63889C13.2449 1.5689 13.327 1.51332 13.4176 1.47538C13.5082 1.43745 13.6055 1.41791 13.7037 1.41791C13.802 1.41791 13.8992 1.43745 13.9898 1.47538C14.0804 1.51332 14.1626 1.5689 14.2315 1.63889L18.3611 5.76852C18.4311 5.83745 18.4867 5.9196 18.5246 6.01021C18.5626 6.10082 18.5821 6.19807 18.5821 6.2963C18.5821 6.39453 18.5626 6.49178 18.5246 6.58239C18.4867 6.67299 18.4311 6.75515 18.3611 6.82408L7.25002 17.9352C7.18184 18.003 7.10094 18.0568 7.01197 18.0933C6.92299 18.1299 6.82769 18.1485 6.7315 18.1482V18.1482Z" stroke="#557BDD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.7407 4.07407L15.9259 9.25926" stroke="#557BDD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.3333 6.66667L4.44446 15.5556" stroke="#557BDD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.99073 18.1019L1.89813 13.0093" stroke="#557BDD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_1026_60"><rect width="20" height="20" fill="white"/></clipPath></defs></svg> 
                                        <svg class="delete" id="deleteIcon" data-index="${title}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-index="${title}">    <path opacity="0.2" d="M18.75 5.25V19.5C18.75 19.6989 18.671 19.8897 18.5303 20.0303C18.3897 20.171 18.1989 20.25 18 20.25H6C5.80109 20.25 5.61032 20.171 5.46967 20.0303C5.32902 19.8897 5.25 19.6989 5.25 19.5V5.25H18.75Z" fill="#F85757"/>    <path d="M20.25 5.25H3.75" stroke="#F85757" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>    <path d="M9.75 9.75V15.75" stroke="#F85757" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>    <path d="M14.25 9.75V15.75" stroke="#F85757" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>    <path d="M18.75 5.25V19.5C18.75 19.6989 18.671 19.8897 18.5303 20.0303C18.3897 20.171 18.1989 20.25 18 20.25H6C5.80109 20.25 5.61032 20.171 5.46967 20.0303C5.32902 19.8897 5.25 19.6989 5.25 19.5V5.25" stroke="#F85757" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>    <path d="M15.75 5.25V3.75C15.75 3.35218 15.592 2.97064 15.3107 2.68934C15.0294 2.40804 14.6478 2.25 14.25 2.25H9.75C9.35218 2.25 8.97064 2.40804 8.68934 2.68934C8.40804 2.97064 8.25 3.35218 8.25 3.75V5.25" stroke="#F85757" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                    </div>
                                </div>`;
    DeleteItem();
    AddCheckedIcon();
    SelectEditBtn();
    IncompletetFilter()
}
function ImportCheckedItem(title){
    let todolist = document.querySelector(".todo-list");
        todolist.innerHTML +=  `<div class="todo-item" data-index="${title}">
                                    <div class="left-section">
                                        <div data-index="${title}"  class="basis active" id="check-box" style="border-radius:50%;" data-checked="true">
                                            <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 3.67771L4.12899 6L9 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>                
                                        </div>    
                                        <span class="subtitle">${title}</span>
                                    </div>
                                    <div class="right-section">
                                        <svg class="edit" id="myEditBtn" data-index="${title}" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: none;"><g clip-path="url(#clip0_1026_60)"><path opacity="0.2" d="M15.9259 9.25926L10.7407 4.07408L13.1759 1.63889C13.2448 1.5689 13.327 1.51332 13.4176 1.47538C13.5082 1.43745 13.6055 1.41791 13.7037 1.41791C13.8019 1.41791 13.8992 1.43745 13.9898 1.47538C14.0804 1.51332 14.1625 1.5689 14.2315 1.63889L18.3611 5.76852C18.4311 5.83745 18.4867 5.9196 18.5246 6.01021C18.5625 6.10082 18.5821 6.19807 18.5821 6.2963C18.5821 6.39453 18.5625 6.49178 18.5246 6.58239C18.4867 6.67299 18.4311 6.75515 18.3611 6.82408L15.9259 9.25926Z" fill="#557BDD"></path><path d="M6.7315 18.1482H2.59261C2.39616 18.1482 2.20775 18.0701 2.06883 17.9312C1.92991 17.7923 1.85187 17.6039 1.85187 17.4074V13.2685C1.85153 13.1723 1.87017 13.077 1.90671 12.9881C1.94326 12.8991 1.99699 12.8182 2.06484 12.75L13.1759 1.63889C13.2449 1.5689 13.327 1.51332 13.4176 1.47538C13.5082 1.43745 13.6055 1.41791 13.7037 1.41791C13.802 1.41791 13.8992 1.43745 13.9898 1.47538C14.0804 1.51332 14.1626 1.5689 14.2315 1.63889L18.3611 5.76852C18.4311 5.83745 18.4867 5.9196 18.5246 6.01021C18.5626 6.10082 18.5821 6.19807 18.5821 6.2963C18.5821 6.39453 18.5626 6.49178 18.5246 6.58239C18.4867 6.67299 18.4311 6.75515 18.3611 6.82408L7.25002 17.9352C7.18184 18.003 7.10094 18.0568 7.01197 18.0933C6.92299 18.1299 6.82769 18.1485 6.7315 18.1482V18.1482Z" stroke="#557BDD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.7407 4.07407L15.9259 9.25926" stroke="#557BDD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.3333 6.66667L4.44446 15.5556" stroke="#557BDD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.99073 18.1019L1.89813 13.0093" stroke="#557BDD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_1026_60"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg> 
                                        <svg class="delete" id="deleteIcon" data-index="${title}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">    <path opacity="0.2" d="M18.75 5.25V19.5C18.75 19.6989 18.671 19.8897 18.5303 20.0303C18.3897 20.171 18.1989 20.25 18 20.25H6C5.80109 20.25 5.61032 20.171 5.46967 20.0303C5.32902 19.8897 5.25 19.6989 5.25 19.5V5.25H18.75Z" fill="#F85757"></path>    <path d="M20.25 5.25H3.75" stroke="#F85757" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>    <path d="M9.75 9.75V15.75" stroke="#F85757" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>    <path d="M14.25 9.75V15.75" stroke="#F85757" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>    <path d="M18.75 5.25V19.5C18.75 19.6989 18.671 19.8897 18.5303 20.0303C18.3897 20.171 18.1989 20.25 18 20.25H6C5.80109 20.25 5.61032 20.171 5.46967 20.0303C5.32902 19.8897 5.25 19.6989 5.25 19.5V5.25" stroke="#F85757" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>    <path d="M15.75 5.25V3.75C15.75 3.35218 15.592 2.97064 15.3107 2.68934C15.0294 2.40804 14.6478 2.25 14.25 2.25H9.75C9.35218 2.25 8.97064 2.40804 8.68934 2.68934C8.40804 2.97064 8.25 3.35218 8.25 3.75V5.25" stroke="#F85757" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                    </div>
                                </div>`;
                                
    DeleteItem();
    AddCheckedIcon();
    SelectEditBtn();
    IncompletetFilter()
}
function DeleteItem(){
    var  DeleteBtns = document.querySelectorAll("#deleteIcon");
    DeleteBtns.forEach((DeleteIcon)=>{
          DeleteIcon.addEventListener('click', function(){

              console.log('click delete');
              let DataIndex = this.getAttribute("data-index");
              let SelectedItem = document.querySelectorAll(`.todo-item[data-index="${DataIndex}"]`)[0];
              SelectedItem.parentNode.removeChild(SelectedItem);
        })
    })
};
function AddCheckedIcon(){
    var  CheckIcons = document.querySelectorAll("#check-box");
    CheckIcons.forEach((checkIcon)=>{
        checkIcon.addEventListener('click', function(){
            let SelectedItem = this.getAttribute("data-Index");
            let EditIcon = document.querySelector(`#myEditBtn[data-Index="${SelectedItem}"]`);    
            if(this.classList.contains('disable')){
                EditIcon.style.display = "none";
            }else{
                EditIcon.style.display = "inline";
            }
            this.classList.toggle("disable");
            this.classList.toggle("active");
            if(IncompletetTaskBtn.classList.contains("active")){
                IncompletetFilter()
            }else{
                completetFilter()
            }
        })
    })
}
function IncompletetFilter(){
    CompletetTaskBtn.classList.add("disable");
    CompletetTaskBtn.classList.remove("active");
    IncompletetTaskBtn.classList.add("active");
    IncompletetTaskBtn.classList.remove("disable");
    let CheckBox = document.querySelectorAll('#check-box');
    CheckBox.forEach(function(element){
        
        if(element.classList.contains('active') ){//getAttribute("data-checked")== "true"
            element.parentNode.parentNode.style.display = "none"
        }else{
            element.parentNode.parentNode.style.display = "flex"
        }
    })
}
function completetFilter(){
    IncompletetTaskBtn.classList.add("disable");
    IncompletetTaskBtn.classList.remove("active");
    CompletetTaskBtn.classList.add("active");
    CompletetTaskBtn.classList.remove("disable");
    let CheckBox = document.querySelectorAll('#check-box');
    CheckBox.forEach(function(element){
        console.log(element.classList.contains('active'))
        if(!element.classList.contains('active')){
            element.parentNode.parentNode.style.display = "none"
        }else{
            element.parentNode.parentNode.style.display = "flex"
        }
    })
}
IncompletetTaskBtn.onclick = function(){
    IncompletetFilter()
}

CompletetTaskBtn.onclick = function(){
    completetFilter()
}
window.onbeforeunload = function(){
    var Saveitemslist = []
    var SaveCheckeditemslist = []
    let FalseItem = document.querySelectorAll('#check-box.disable')//.getAttribute('data-index')
    let TrueItem = document.querySelectorAll('#check-box.active')
    FalseItem.forEach(function(FalseElement){
        Saveitemslist.push(FalseElement.getAttribute('data-index'))
    })
    TrueItem.forEach(function(TrueElement){
        SaveCheckeditemslist.push(TrueElement.getAttribute('data-index'))
    })
    localStorage.setItem("ItemsList", JSON.stringify(Saveitemslist))
    //SaveCheckeditemslist
    localStorage.setItem("CheckedItemsList", JSON.stringify(SaveCheckeditemslist))
} 