//time and date printing
let timeBar = document.querySelector("#time");
let datebar = document.querySelector("#date");
let monthUpperBar = document.querySelector("#monthInWordsUpperBar");
let yearUpperBar = document.querySelector("#yearUpperBar");
let hourHand = document.querySelector("#hour_hand");
let minuteHand = document.querySelector("#minute_hand");
let secondsHand = document.querySelector("#seconds_hand");
//// timebar print start
const timeBarPrinter = () => {
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    let ampm = "AM";
    if (hours > 12){
        hours -= 12;
        ampm = "PM";
    }
    timeBar.innerHTML = `${hours}:${minutes}:${seconds} ${ampm}`;}


//time an date printing end
//analog clock 
const analogClockFuntion = () => {  
    let d = new Date();
    let s = d.getSeconds();
    let r = document.querySelector(':root');
    let secondsDeg = s*6;
    r.style.setProperty('--degree-seconds',`${secondsDeg}deg`);
    let m = d.getMinutes();
    let minutesDeg = m*6;
    r.style.setProperty('--degree-minutes',`${minutesDeg}deg`);
    let h = d.getHours();
    h = h/2;
    let hoursDeg = (h*60)+(m*0.5);
    r.style.setProperty('--degree-hours',`${hoursDeg}deg`);
}
//analog animation end
//month finder
const dateBarFunction = () => {
        
    let d = new Date();
    let date = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    let monthInWords;
    switch(month){
        case 0:
        monthInWords="January";
         break;
         case 1:
        monthInWords="February";
        break;
        case 2:
        monthInWords="March";
        break;
        case 3:
        monthInWords="April";
        break;
        case 4:
        monthInWords="May";
        break;
        case 5:
        monthInWords="June";
        break;
        case 6:
        monthInWords="July";
        break;
        case 7:
        monthInWords="August";
        break;
        case 8:
        monthInWords="September";
        break;
        case 9:
        monthInWords="October";
        break;
        case 10:
        monthInWords="November";
        break;
        case 11:
        monthInWords="December";
        break;    
        }
        let realMonth = month+1;
        datebar.innerHTML = `${date}/${realMonth}/${year}`;
        monthUpperBar.innerHTML = monthInWords;
        yearUpperBar.innerHTML = year;
}

//month finder end

///calendar functions  
const monthTotalDays=(month,year)=>{
    if (month==0 || month==2 || month==4 || month==6 || month==7 || month==9 || month==11){
        return 31;
    }
    else if (month==3||month==5||month==8||month==10){
        return 30;    
    }
    else{
        if (year%4==0){
            return 28;
        }
        else{
            return 29;
        }
    }
}

const firstWeekDay=(month,year)=>{
    let d = new Date(year,month,1);
    let day = d.getDay();
    return day;    
}
const calendarStartFinder=(valueGiven,month,year)=>{
    let valueFinderj = (valueGiven-1)
        let runTimeOfI =(monthTotalDays(month,year)+(valueGiven-1));
        console.log(runTimeOfI);
       for (let i=valueGiven;i<=runTimeOfI;i++){
            let j = (valueFinderj-i)*-1;
            let calendarBoxId=`#calendar_box-${i}`;
            let calendarBox=document.querySelector(calendarBoxId);
            calendarBox.innerHTML=`<p>${j}</p>`;
        }
}
const dateColorChanger=(valueGiven,date)=>{
    let datePlaceFinder = (valueGiven+date);
    let calendarBoxId=`#calendar_box-${datePlaceFinder}`;
    let calendarBox=document.querySelector(calendarBoxId);
    calendarBox.classList.add("calendar_box-background");
}
const calendarPrinter=()=>{
    let d = new Date();
    let date = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    let firstWeekDay1 =firstWeekDay(month,year);

    switch (firstWeekDay1){
        case 0:
        calendarStartFinder(1,month,year);
        dateColorChanger(0,date);
        break;
        case 1:
        calendarStartFinder(2,month,year);   
        break;
        case 2:
        calendarStartFinder(3,month,year);   
        break;
        case 3:
        calendarStartFinder(4,month,year);   
        break;
        case 4:
        calendarStartFinder(5,month,year);   
        break;
        case 5:
        calendarStartFinder(6,month,year);   
        break;
        case 6:
        calendarStartFinder(7,month,year);   
        break;
    }

}
//all functions called
const allFunctionActivater = () => {
    calendarPrinter();
    analogClockFuntion();
    timeBarPrinter();
    dateBarFunction();
}

document.addEventListener("DOMContentLoaded",allFunctionActivater);    
setInterval(()=>{
    timeBarPrinter();
    dateBarFunction();
}, 1000);
