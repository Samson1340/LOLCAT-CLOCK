const time = document.querySelector("#time");
const welComeMsg = document.querySelector("#welcome");
const wakeTime = document.querySelector("#wake-time");
const lunchTime = document.querySelector("#lunch-time");
const napTime = document.querySelector("#nap-time");
// the current time and welcome message part

function timeSetter(){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    hour = checkMandS(hour);
    minute = checkMandS(minute);
    second = checkMandS(second);
    time.textContent = hour +":"+  minute  +":"+ second;
    welCome(hour);
};
function checkMandS(s){
    let minute;
    minute = s < 10 ? "0" + s : s; 
    return minute;
}
setInterval(timeSetter, 1000);

function welCome(hour) {
    (hour >= 18 && hour < 6) ? welComeMsg.textContent = "Good Evening" 
    : (hour >= 6 && hour < 12) ? welComeMsg.textContent = "Good Morning" 
    : welComeMsg.textContent = "Good Afternoon";
}

// End

// Creating the select option using javascript 

for(let x = 0; x < 24; x++){
    let option = document.createElement('option');
    option.setAttribute('value', x);
    let startTime;
    let endTime;
    if(x == 23){
        startTime = checkPMandAM(x);
        endTime = 0 + "AM";
        let optionText = document.createTextNode(startTime +"-"+ endTime);
        option.appendChild(optionText);
        wakeTime.appendChild(option);

    }
    else{
        startTime = checkPMandAM(x);
        endTime = checkPMandAM(x + 1);
        optionText = document.createTextNode(startTime +"-"+ endTime);
        option.appendChild(optionText);
        wakeTime.appendChild(option);
    }
    
}

for(let x = 0; x < 24; x++){
    let option = document.createElement('option');
    option.setAttribute('value', x);
    let startTime;
    let endTime;
    if(x == 23){
        startTime = checkPMandAM(x);
        endTime = 0 + "AM";
        let optionText = document.createTextNode(startTime +"-"+ endTime);
        option.appendChild(optionText);
        lunchTime.appendChild(option);

    }
    else{
        startTime = checkPMandAM(x);
        endTime = checkPMandAM(x + 1);
        optionText = document.createTextNode(startTime +"-"+ endTime);
        option.appendChild(optionText);
        lunchTime.appendChild(option);
        
    }
    
}

for(let x = 0; x < 24; x++){
    let option = document.createElement('option');
    option.setAttribute('value', x);
    let startTime;
    let endTime;
    if(x == 23){
        startTime = checkPMandAM(x);
        endTime = 0 + "AM";
        let optionText = document.createTextNode(startTime +"-"+ endTime);
        option.appendChild(optionText);
        napTime.appendChild(option);

    }
    else{
        startTime = checkPMandAM(x);
        endTime = checkPMandAM(x + 1);
        optionText = document.createTextNode(startTime +"-"+ endTime);
        option.appendChild(optionText);
        napTime.appendChild(option);
    }
    
}
function checkPMandAM(x) {
    let timeChecked;
    timeChecked = x >= 0 && x < 12 ? x + "AM" : x + "PM";
    return timeChecked;
}

// end of the three select option 

const btnChange = document.querySelector("#btn-change");
const image1 = document.querySelector("#image1");


btnChange.addEventListener("click", function(){
    
    if(btnChange.innerHTML == "PARTY TIME!"){
        btnChange.innerHTML = "PARTY OVER!"
        btnChange.classList.add("btn-blue");
        image1.src = "./pic2.png";
        
    }
    else{
        btnChange.classList.remove("btn-blue");
        btnChange.innerHTML = "PARTY TIME!";
        image1.src = "./pic1.png";
        
    }
})