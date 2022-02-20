
document.body.insertAdjacentHTML('beforeend', '<div id="BIGSURMODAL-CONTAINER"></div>')
var cont = document.getElementById('BIGSURMODAL-CONTAINER')

var bigSur = {
    Modal: function (obj) {
        var BSM_modalShowing = false
        var BSM_queue = []
        try { this.title = obj.title; if (!obj.title) throw new Error('bigsur-modal error: Modal needs a title.') } catch (e) { return console.error(e) }
        try { this.description = obj.description; if (!obj.description) throw new Error('bigsur-modal error: Modal needs a description.') } catch (e) { return console.error(e) }
        try { this.buttonContent = obj.buttons; if (!obj.buttons) throw new Error('bigsur-modal error: Modal needs buttons.') } catch (e) { return console.error(e) }
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
        this.init = function () {
            let vertical = false, buttons = document.createElement('DIV')
            buttons.classList.add('BSM-btns')
            for (let i = 0; i < obj.buttons.length; i++) {
                if (obj.buttons.length >= 3 && obj.buttons.length <= 10) vertical = true
                else if (obj.buttons.length > 10) return console.error('bigsur-modal error: Maximum 10 buttons')
                if (!obj.buttons[i].default) obj.buttons[i].default = false
                try {
                    if (!obj.buttons[i].name) throw new Error('bigsur-modal error: Button ' + i + ' needs a name.')
                    let button = document.createElement('button')
                    button.onclick = () => {
                        obj.buttons[i].function ? obj.buttons[i].function() : false
                        this.close()
                    }
                    button.classList.add('BSM-btn')
                    button.classList.add(`BSM-default-${obj.buttons[i].default}`)
                    button.innerText = obj.buttons[i].name
                    buttons.appendChild(button)

                } catch (e) {
                    console.error('bigsur-modal internal error:' + e + '. Open an issue on the Github (https://github.com/pineapplerind/bigsur-modal)')
                }
            }
            var modal = document.createElement('DIV')
            modal.innerHTML = `<div class="BSM-appicon">
            <img src="${obj.appIcon}">
        </div>
        <h1 class="BSM-title">${obj.title}</h1>
        <h2 class="BSM-description">${obj.description}</h1>`
            modal.appendChild(buttons)

            if (BSM_modalShowing == false) BSM_modalShowing = true
            else if (BSM_modalShowing = true) return BSM_queue.push(modal)
            modal = BSM_CreateModalHelper(modal, obj.theme)
            modal.focus()
            this.createdModal = modal
        }
        this.close = function () {
            try {
                let modal = cont.children[0]
                modal.style.animationName = 'comeout'
                BSM_modalShowing = false
                cont.classList.remove('overlay')
                setTimeout(function () {
                    modal.remove()
                }, 80)
                if (BSM_queue.length == 0) return
                else {
                    BSM_CreateModalFromQueue(BSM_queue[0])
                }
                console.log('Modal successfully closed')

                if (!this.createdModal) throw new Error('bigsur-modal error: There are no modals currently open to close.')
            } catch (e) {
                console.error(e)
            }
        }


        function BSM_CreateModalHelper(html, theme) {
            html.classList.add('BSM-modal')
            html.classList.add('BSM_theme_' + theme)
            cont.appendChild(html)
            html.onkeydown = e => {
                console.log(this)
                console.log('yah')
                if (e.keyCode == 13) html.querySelector('.BSM-default-false').click()
                else if (e.keyCode == 27) this.close()
            }
            trapFocus(html)
            cont.classList.add('overlay')
            return html
        }


        function BSM_CreateModalFromQueue(html) {
            setTimeout(() => {
                BSM_CreateModalHelper(html)
                BSM_queue.shift()
            }, 100);
        }

        function trapFocus(element) {
            var focusableEls = element.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
            var firstFocusableEl = focusableEls[0];
            var lastFocusableEl = focusableEls[focusableEls.length - 1];
            var KEYCODE_TAB = 9;

            element.addEventListener('keydown', function (e) {
                var isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);

                if (!isTabPressed) {
                    return;
                }

                if (e.shiftKey) /* shift + tab */ {
                    if (document.activeElement === firstFocusableEl) {
                        lastFocusableEl.focus();
                        e.preventDefault();
                    }
                } else /* tab */ {
                    if (document.activeElement === lastFocusableEl) {
                        firstFocusableEl.focus();
                        e.preventDefault();
                    }
                }
            });
        }
    }
}