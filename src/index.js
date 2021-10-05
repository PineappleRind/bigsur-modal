document.body.insertAdjacentHTML('beforeend', '<div id="BIGSURMODAL-CONTAINER"></div>')
var BSM_modalShowing = false
var BSM_queue = []

function BigSurModal(obj) {
    try { this.title = obj.title; if (!obj.title) throw new Error('BIG SUR MODAL: Modal needs a title.') } catch (e) { return console.error(e) }
    try { this.description = obj.description; if (!obj.description) throw new Error('BIG SUR MODAL: Modal needs a description.') } catch (e) { return console.error(e) }
    try { this.buttonContent = obj.buttons; if (!obj.buttons) throw new Error('BIG SUR MODAL: Modal needs buttons.') } catch (e) { return console.error(e) }
    if (obj.theme) this.theme = obj.theme
    else {
        this.theme = 'BSM_theme_light'
        obj.theme = 'BSM_theme_light'
    }
    if (obj.appIcon) this.appIcon = obj.appIcon
    else {
        this.appIcon = 'https://pineapplerind.ga/libraries/bigsur-modal/console_logo.png'
        obj.appIcon = 'https://pineapplerind.ga/libraries/bigsur-modal/console_logo.png'
    }
    this.show = function() {
        this.createdModal = BSM_CreateModal(obj)
    }
    this.close = function() {
        try {
            BSM_DestroyModal(this.createdModal)
            if (!this.createdModal) throw new Error('BIG SUR MODAL: There are no modals currently open to close.')
        } catch (e) {
            console.error(e)
        }
    }
}
var cont = document.getElementById('BIGSURMODAL-CONTAINER')

function BSM_CreateModal(obj) {
    let buttons = ``

    for (let i = 0; i < obj.buttons.length; i++) {
        if (obj.buttons.length >= 3) {
            var vertical = 'vertical'
        } else {
            var vertical = ''
        }
        if (!obj.buttons[i].default) obj.buttons[i].default = false
        try {
            if (!obj.buttons[i].name) throw new Error('bigsur-modal error: Button ' + i + ' needs a name.')
            if (!obj.buttons[i].function) obj.buttons[i].function = ''
            buttons += `<button onclick="${obj.buttons[i].function};BSM_DestroyModal()" class="BSM-btn ${obj.buttons[i].default}">${obj.buttons[i].name}</button>`
        } catch (e) {
            console.error('bigsur-modal internal error:' + e + '. Open an issue on the Github (https://github.com/pineapplerind/bigsur-modal)')
        }
    }
    var html = `
    <div class="BSM-appicon">
        <img src="${obj.appIcon}">
    </div>
    <h1 class="BSM-title">${obj.title}</h1>
    <h2 class="BSM-description">${obj.description}</h1>
    <div class="BSM-btns ${vertical}">
        ${buttons}
    </div>

    `
    if (BSM_modalShowing == false) BSM_modalShowing = true
    else if (BSM_modalShowing = true) return BSM_queue.push(html)
    let modal = BSM_CreateModalHelper(html, obj.theme)
    BSM_SetClose(modal)
    return modal
}

function BSM_CreateModalHelper(html, theme) {
    let BSM_modal = document.createElement('DIV')
    BSM_modal.innerHTML = html
    BSM_modal.classList.add('BSM-modal')
    BSM_modal.classList.add('BSM_theme_' + theme)
    cont.appendChild(BSM_modal)
    cont.classList.add('overlay')
    return BSM_modal
}

function BSM_SetClose(md, db) {
    md.onkeypress = e => {
        if (e.keyCode == 13) db.click()
        else if (e.keyCode == 27) db.click()
    }
}

function BSM_DestroyModal() {
    let modal = cont.children[0]
    modal.style.animationName = 'comeout'
    BSM_modalShowing = false
    cont.classList.remove('overlay')
    setTimeout(function() {
        modal.remove()
    }, 80)
    if (BSM_queue.length == 0) return
    else {
        BSM_CreateModalFromQueue(BSM_queue[0])
    }
    console.log('Modal successfully closed')
}

function BSM_CreateModalFromQueue(html) {
    setTimeout(() => {
        BSM_CreateModalHelper(html)
        BSM_queue.shift()
    }, 100);
}