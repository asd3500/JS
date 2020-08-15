const form = document.querySelector('#signIn')
const login = form.querySelector('#login')
const password = form.querySelector('#password')
const registration = form.querySelector('#registration')
const db =[{
    name: 'kirill',
    password: '123',
    role: 'user'
},{
    name: 'asd3500',
    password: '12345',
    role: 'admin'
},{
    name: 'vasya',
    password: '1727',
    role: 'user'
}]

function sendToBack(data) {
    return new Promise((res,rej)=>{
        setTimeout(() => {
            const {name, password} = data
            const result = db.find(user => {
                if(user.name === name &&
                    user.password === password)
                    {return true}
                return false;
            })
            if(result) res(result)
            else rej('user not found')
        }, 1111);
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if(!login.value || !password.value) return;
    
    const user = {
        name: login.value,
        password: password.value
    }

    sendToBack(user)
        .then(result=>{
            localStorage.setItem('user',JSON.stringify(result))        
            console.log('done')
        })
        .catch(res=> console.log(res))

    login.value = ''
    password.value = ''
})

registration.addEventListener('click', e=>{
    e.preventDefault()
    if(!login.value || !password.value) return;
    
    const newuser = {
        name: login.value,
        password: password.value,
        role: 'user'
    }
    const result = db.find(user => {
        if(user.name === newuser.name &&
            user.password === newuser.password)
            {return true}
        return false;
    })
    if(!result) db.push(newuser)
    else console.log('sss')
})