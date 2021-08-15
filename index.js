
document.body.insertAdjacentHTML('beforeend','<div id="BIGSURMODAL-CONTAINER"></div>')

let style = `<style name="Big Sur Modal Styles">
#BIGSURMODAL-CONTAINER {
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    pointer-events:none;
    display:flex;
    align-items:center;
    justify-content:center
}
#BIGSURMODAL-CONTAINER.overlay {
    background:rgba(255,255,255,0.5);
}
.BSM-modal {
    border-radius: 10px;
    background:rgba(228,227,227);
    color:black;
    padding:20px;
    margin:0;
    border: 1px solid rgb(162,162,162);
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, Helvetica, sans-serif;
    min-width:265px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 10px 50px rgba(0,0,0,0.2)
}
.BSM-modal .BSM-title {
    font-weight:700;
    color:rgb(28,28,28);
    line-height:18px;
    text-align:center;
    margin:0;
    max-width:265px;
    font-size:14px;
}
.BSM-modal .BSM-description {
    font-size:12px;
    color:rgb(45,45,45);
    margin-top: 4px;
    letter-spacing:-0.3px;
} 
.BSM-modal .BSM-btns {
    width:100%;
    display:flex;
    margin-top:5px;
    margin-bottom:0;
}
.BSM-modal .BSM-btns button {
    width:50%;
    margin:5px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius:10px;
    background: linear-gradient(rgb(40,145,255),rgb(2,122,255));
    color:white
}
</style>`
document.head.insertAdjacentHTML('beforeend',style)
function BigSurModal(obj) {
    this.title = obj.title;
    this.description = obj.desc;
    this.buttonContent = obj.buttons;
    if (obj.appIcon) this.appIcon = obj.appIcon
    else appIcon = '';
    this.init = function() {
         BSM_CreateModal(obj.title,obj.desc,obj.buttons,obj.appIcon)
    }
}

function BSM_CreateModal(t,d,bc) {
    var cont = document.getElementById('BIGSURMODAL-CONTAINER')
    let buttons = ``
    for (let i = 0; i < bc.length; i++) {
        buttons += `<button class="BSM-btn ${bc[i].default}">${bc[i].name}</button>`
    }
    var html = `

    <h1 class="BSM-title">${t}</h1>
    <h2 class="BSM-description">${d}</h1>
    <div class="BSM-btns">
        ${buttons}
    </div>

    `
    console.log(html)
    let BSM_modal = document.createElement('DIV')
    BSM_modal.innerHTML = html
    BSM_modal.classList.add('BSM-modal')
    cont.appendChild(BSM_modal)
    cont.classList.add('overlay')
}