// Search for the botton
document.querySelector("#add-time")
// When I click the botton
.addEventListener("click", cloneField)
// Do an action
function cloneField() {
   //Clone Fields
   const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)
   //Put the in #schedule-itens
   document.querySelector("#schedule-itens").appendChild(newFieldContainer)
   //Clean fields
    const fields = newFieldContainer.querySelectorAll("input")
    fields.forEach(function(field) {
        //catch the field needed and clean it
        field.value = ""
    });
}
    

    