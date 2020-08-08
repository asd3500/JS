const inp = document.querySelector('.to-do-list__input')
inp.addEventListener('keydown', (e)=>{
    if(e.keyCode !== 13) return
    const text = inp.value
    inp.value = ''
    if(text === '') return
    let newItem = document.querySelector('.to-do-list__item')
    newItem = newItem.cloneNode(true)
    newItem.classList.remove('display-none')
    const newItemText = newItem.querySelector('.to-do-list__text')
    newItemText.innerHTML = text
    addDel(newItem)
    addDone(newItem)
    inp.after(newItem)
})

function addDel(node) {
    const del = node.querySelector('.to-do-list__delete')
    del.addEventListener('click', ()=>{
        const item = del.parentElement
        item.remove()
    })
}
function addDone(node) {
    const done = node.querySelector('.to-do-list__checkbox')
    done.addEventListener('click', ()=>{
        done.classList.add('display-none')
        const item = done.parentElement.querySelector('.to-do-list__text')
        item.style.textDecoration = 'line-through'
    })
}
addDel(document)
addDone(document)