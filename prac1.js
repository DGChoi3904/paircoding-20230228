//AboutMe 객체 완성
const AboutMe = {
  myName:"",
  age:0,
  gender:"",
  githubAddress:"",
  address: {
    city : "",
    state : "",
    dong : "",
    postNumber : 0,
    hostName : ""
  },
  totalAddress:function(){
    return `${city}시 ${state}구 ${dong}동, 우편번호: ${postNumber}`
  }
}
// 똑같이 따라칠게요.. 네
function Itsme(myName,age, gender,githubAddress,acity,astate,adong,apostNumber,ahostName){
  const AboutMe={
    myName:myName,
    age:age,
    gender:gender,
    githubAddress:githubAddress,
    address: {
      city : acity,
      state : astate,
      dong : adong,
      postNumber : apostNumber,
      hostName : ahostName
  },
  totalAddress:function(){
    return `${this.address.city}시 ${this.address.state}구 ${this.address.dong}동, 우편번호: ${this.address.postNumber}`
  }
} 
}
// 입력 
let test=Itsme("이름",20,"여자","깃허브","도시","구","동",1,"호스트");
console.table(test);
console.log(test.totalAddress());
// 따로 열었는데 서버가 연결이 안된다고 뜨네요
// 확인하러 갈게요.

//따라쳐도 상관없지만 이름은 자신이 보기 편한것으로 하는걸 추천드려요.
//그리고 연습이 되면 totalAddress 함수 말고도 자신의 함수(여기선 Method)를 만들어보세요.
//깜빡했는데 라이브 쉐어는 스크립트 링크가 잘 안되는 것 같아 테스트는 따로 VSCode 창 열어서 하셔야 할 것 같아요.
//일단 저는 트레이닝 11의 데이터만 parc2에 작성해놓고 있겠습니다.
//테스트용 함수.
//궁금한게 있으면 주석으로 달아주세요. 
function makeAboutMe(myName, age, gender, githubAddress, addCity, addState, addDong, addPostNum, addHostN ){
  const AboutMe  = {
    myName:myName,
    age:age,
    gender:gender,
    githubAddress:githubAddress,
    address: {
      city : addCity, 
      state : addState, 
      dong : addDong,
      postNumber : addPostNum,
      hostName : addHostN
    },
    totalAddress: function(){
      return `${this.address.city}시 ${this.address.state}구 ${this.address.dong}동, 우편번호: ${this.address.postNumber}`
    }
  }
}

let DGC = makeAboutMe("최모씨", 30, "남", "깃허브주소", "도시", "구", "동", 99000, "호스트이름")
console.table(DGC);
console.log(DGC.totalAddress());

/*
const 이름 = {
  키 : 값 
  이 형식대로 키 값을 추가해보세요.
  전 adress 객체를 만들어보겠습니다.
  키 : {} <- 키값에 객체(object)를 넣는 방법.
}
 */

const address = {
  city : "",
  state : "",
  dong : "",
  postNumber : 0,
  hostName : ""
}