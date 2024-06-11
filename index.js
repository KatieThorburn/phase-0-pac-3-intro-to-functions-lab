function shout(string){
    return string.toUpperCase();
}
console.log(shout("Hello!"));

function whisper(string){
    return string.toLowerCase();
}
console.log(whisper("Hello!"));

function logShout(string){
    const spy = string.toUpperCase();
    console.log(spy);
}
logShout("Hello!");

function logWhisper(string){
    const spy = string.toLowerCase();
    console.log(spy);
}
logWhisper("Hello!");

function sayHiToHeadphonedRoommate(string){
    if (string === "hello"){
        const answer = "I can't hear you!"
        return answer
    }
    else if (string ==="HELLO"){
        const answer ="YES INDEED!"
        return answer
    }
    else if (string === "Let's have dinner together!"){
        const answer ="I would love to!"
        return answer
    }
}
console.log(sayHiToHeadphonedRoommate("hello"));
console.log(sayHiToHeadphonedRoommate("HELLO"));
console.log(sayHiToHeadphonedRoommate("Let's have dinner together!"));