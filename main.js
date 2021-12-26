function identifySound(){
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/_r5YtEynT/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
  
  
function gotResults(error, results) {
    console.log(results);
}