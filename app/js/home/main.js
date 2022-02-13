"use strict"


//console.log("main.js imported");

if(!("webkitSpeechRecognition") in window){
    alert("Connect in Chrome Browser");
}else{
    const speech = new webkitSpeechRecognition;

    document.getElementById("rcdStart").addEventListener("click",()=>{
        speech.start();
    });
    document.getElementById("rcdStop").addEventListener("click",()=>{
        speech.stop();
    });

    speech.addEventListener("result", (event)=>{
        console.log(event);
        const { transcript } = event["results"][0][0];
        console.log(transcript);
        resultListView(transcript);
    });

    function resultListView(transcript){
        document.getElementById("resultList").value = transcript;
    }
}
