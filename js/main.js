
const refs = {
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]'),
}

//! Делаем класс 

class CountdownTimer{
    static description = 'Логика счетчика'
    constructor({selector, targetDate}){
        this.selector = selector;
        this.targetDate = targetDate;
    }
   
    start(){
            const dataID = setInterval(()=>{
            const currentTime = Date.now();
            const deltaTime = (this.targetDate-currentTime);
            const finalTime = this.getTimerComponents(deltaTime);
            this.updateInterface(finalTime);
            this.stop(finalTime,dataID)
        },1000)
    }

    stop({days, hours, mins, secs},id){
        if(days === `00` &&
        hours === `00`&&
        mins === `00`&&
        secs === `00`){
           clearInterval(id)
           alert('Finish') 
        }
    }
    
    updateInterface({days, hours, mins, secs}){
        refs.days.textContent = `${days}`;
        refs.hours.textContent = `${hours}`;
        refs.mins.textContent = `${mins}`;
        refs.secs.textContent = `${secs}`;
    }

    pad(value){
        return String(value).padStart(2,'0');
    }

    getTimerComponents(time){
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        return {days, hours, mins, secs};
    }
}

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('May 30, 2021'),
});

timer.start();

// //! Преобразовует число в строку и дописывает слева, до 2-х символов 0.
// //! 1=01 2=02 12=12
// function pad(value){
//     return String(value).padStart(2,'0');
// }

// //! Берет UNIX время и проверяте сколко есть дней-часов-минут-секунд
// function getTimerComponents(time){
//     const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//     const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//     const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
//     return {days, hours, mins, secs};
// }