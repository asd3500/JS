// set scales
const clockScales = document.querySelectorAll('.clock__scale')
clockScales.forEach((scale, index) => {
    let rotate = 30*index + 2.2 + 'deg'
    scale.style.transform = 'Rotate('+rotate+')'
})

let time = {}





// set arrows
const clock = setInterval(() => {
    time.date = new Date()
    time.day = time.date.getDate();
    if(time.day !== time.prevDay) {
        const wDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
        time.prevDay = time.day
        time.dateStr = `${wDays[time.date.getDay()]} ${('0' + time.day).slice(-2)}.${('0' + (1+time.date.getMonth())).slice(-2)}.${time.date.getFullYear()}`
        document.querySelector('.clock__date').textContent = time.dateStr
    }

    

    time.hour = time.date.getHours()
    time.min = time.date.getMinutes()
    time.sec = time.date.getSeconds()
    if(time.hour>12) time.hour -= 12
    time.hour = (90 + 30*time.hour) + 30*(time.min/60)
    time.min = (90 + 6*time.min)
    time.sec = (90 + 6*time.sec)

    function rotate(deg) {
        return `Rotate(${deg}deg)`
    }

    let arrow = document.querySelector('.clock__arrow_hour')
    arrow.style.transform = rotate(time.hour)
    arrow = arrow.nextElementSibling
    arrow.style.transform = rotate(time.min)
    arrow = arrow.nextElementSibling
    arrow.style.transform = rotate(time.sec)
}, 1000);


// clearTimeout(clock);


