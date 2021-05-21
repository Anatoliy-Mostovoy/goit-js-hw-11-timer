
// new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Jul 17, 2019'),
//   });

const refs = {
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    min: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]'),
}

const timer = {
    start(){
        const targetDate = new Date('May 30, 2021');// День Киева
        setInterval(()=>{
            const currentTime = Date.now();
            const deltaTime = (targetDate-currentTime);
            const {days, hours, mins, secs} = getTimerComponents(deltaTime)
            // console.log(`${days}:${hours}:${mins}:${secs}`)
            refs.days.textContent = `${days}`;
            refs.hours.textContent = `${hours}`;
            refs.min.textContent = `${mins}`;
            refs.secs.textContent = `${secs}`
        },1000)
    }
}

timer.start()

//! Преобразовует число в строку и дописывает слева, до 2-х символов 0.
//! 1=01 2=02 12=12
function pad(value){
    return String(value).padStart(2,'0');
}

//! Берет UNIX время и проверяте сколко есть дней-часов-минут-секунд
function getTimerComponents(time){
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    return {days, hours, mins, secs};
}


