let readline=require("readline-sync"); 


//here is user input 
console.log("Welcome to the Talks to your task constranit of the day:- ");
// let talks=readline.question("Enter your events: ");
// const talksList=[]


// for (var i=0; i<talks; i++){
//     var talkswithtime=readline.question("Enter your talks with time: ");
//     talksList.push(talkswithtime)
// }


const talksList=["study 60min", "breakfast 30min", "python 80min","login thinking 30min", "javascript 90min", "reading bookin 80min", "pair learning 50min", "discussion with friend 40min"]

var startDate = new Date('2022-06-16 09:00:00');
console.log("talksList", talksList)
for(var i=0;i<talksList.length;i++){
    let taketime=parseInt(talksList[i].slice(-5, -3))
    let previoutHour= startDate.getHours()
    let previousMin= startDate.getMinutes()

    startDate.setMinutes( startDate.getMinutes() + taketime );
    var time = startDate.getHours() + ":" + startDate.getMinutes();

    if( (startDate.getHours()>=13) && (startDate.getHours()<14)){ 
        console.log("aijaj", time)
        console.log(`${previoutHour}:${previousMin} - ${time}   Lunch Time`)
    }
    else if(startDate.getHours()>=16 && (startDate.getHours()<17)){
        console.log(`${previoutHour}:${previousMin} - ${time}   Networking Events`)
    }
    
    else{
        console.log(`${previoutHour}:${previousMin} - ${time}   ${talksList[i]}`)
    }
}



