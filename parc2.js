//키 값이 문자열인 것에 주의.
const trainingXIIData = {
  "title" : "Lorem Ipsum",
  "paragraph" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  "color" : ["#1e1e1e", "#ffffff", "#888888"],
  items : function() {

  }
};


//for문 다음 활용법 for ~ in 객체
for(const key in trainingXIIData) {
  if(key == "color"){
    for(let color in value){
      console.log(color);
    } 
  }else {
      console.log(value);
  }
}