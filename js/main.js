
// const refs = {
//     days: document.querySelector('[data-value="days"]'),
//     hours: document.querySelector('[data-value="hours"]'),
//     mins: document.querySelector('[data-value="mins"]'),
//     secs: document.querySelector('[data-value="secs"]'),
// }

//  function updateInterface({days, hours, mins, secs}){
//     refs.days.textContent = `${days}`;
//     refs.hours.textContent = `${hours}`;
//     refs.mins.textContent = `${mins}`;
//     refs.secs.textContent = `${secs}`;
// }

class CountdownTimer{
    static description = 'Логика счетчика'
    constructor({selector, targetDate}){
        this.selector = selector;
        this.targetDate = targetDate;
        // this.onTick = onTick;
        this.start();
        this.getRefs();
    }

    // refs = {
    //     days: document.querySelector('[data-value="days"]'),
    //     hours: document.querySelector('[data-value="hours"]'),
    //     mins: document.querySelector('[data-value="mins"]'),
    //     secs: document.querySelector('[data-value="secs"]'),
    // }

    start(){
        const dataID = setInterval(()=>{
        const currentTime = Date.now();
        const deltaTime = (this.targetDate-currentTime);
        const finalTime = this.getTimerComponents(deltaTime);
        // this.onTick(finalTime)
        this.updateInterface(finalTime);
        this.stop(finalTime,dataID)
    },1000)}
    
    stop({days, hours, mins, secs},id){
        if(days === `00` &&
        hours === `00`&&
        mins === `00`&&
        secs === `00`){
           clearInterval(id)
           alert('ПОЗДРАВЛЯЕМ С ДНЕМ КИЕВА') 
        }
    }

    // updateInterface({days, hours, mins, secs}){
    //     this.refs.days.textContent = `${days}`;
    //     this.refs.hours.textContent = `${hours}`;
    //     this.refs.mins.textContent = `${mins}`;
    //     this.refs.secs.textContent = `${secs}`;
    // }



    getRefs(){
        const elementRef = document.querySelector(this.selector);
        return{
            days: elementRef.querySelector('[data-value="days"]'),
            hours: elementRef.querySelector('[data-value="hours"]'),
            mins: elementRef.querySelector('[data-value="mins"]'),
            secs: elementRef.querySelector('[data-value="secs"]'),  
        }
    }

    updateInterface({days, hours, mins, secs}){
        this.getRefs().days.textContent = `${days}`;
        this.getRefs().hours.textContent = `${hours}`;
        this.getRefs().mins.textContent = `${mins}`;
        this.getRefs().secs.textContent = `${secs}`;
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

new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('May 30, 2021'),
});

new CountdownTimer({
    selector: '#timer-2',
    targetDate: new Date('Jun 1, 2021'),
});

new CountdownTimer({
    selector: '#timer-3',
    targetDate: new Date('Jun 30, 2021'),
});
