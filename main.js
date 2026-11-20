import * as api from './API.js'
import * as ui from './UI.js'
// getCards, addToBoard, titleVa


// INPUT VALIDATORS
ui.titleInpt.addEventListener('input',ui.titleValidator)
ui.descriptionInpt.addEventListener('input',ui.descriptionValidator)

//search Input
ui.searchInput.addEventListener('input' , ui.searchByTitle)

//form submition
ui.creatCardForm.addEventListener('submit',(event) => {
  ui.submitForm(event)
} )

ui.openModal.addEventListener('click', function(){
  ui.ticketModal.style.display = "flex"
})
ui.HiddBtn.addEventListener('click', function(){
  ui.ticketModal.style.display = "none"
})

// ui.uiFilter.addEventListener('click', ui.openUiFilter)
ui.openUiFilter()