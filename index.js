
let myLeads =[]
const inputel = document.getElementById("input-el")

const savebtn = document.getElementById("save-btn")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const ulEl = document.getElementById("ul-el")

leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    renderLeads()
})


tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify( myLeads ) )
        renderLeads()

    });

    
})

savebtn.addEventListener("click", function() {
    myLeads.push(inputel.value)
    inputel.value =""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    renderLeads()
})  


function renderLeads(){

    listofitems = ""
    for(let i =0; i<myLeads.length; i++){
        listofitems +="<li><a target = '_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
    }
    ulEl.innerHTML =listofitems



    
}