    //키 값이 문자열인 것에 주의.
    const trainingXIIData = {
      title : "Lorem Ipsum",
      paragraph : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      color : ["#1e1e1e", "#ffffff"],
    };
    const rootSet = {
      display : "flex",
      flexDirection : "column",
      justifyContent : "center",
      alignItems : "center",
      width : "430px",
      height : "932px",
      boxSizing : "border-box",
      fontFamily : "Inter",
      color : trainingXIIData["color"][0],
      
      padding : "10% 5%",
    }
    const div1Set = {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
      fontSize: "24px",
      textContent : trainingXIIData["title"],
    }
    const hrSet = {
      width: "60%",
      borderColor : trainingXIIData["color"][0],
    }
    const div2Set = {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "12px",
      textAlign: "justify",
      lineHeight: "130%"
    }
    const div3Set = {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }
    const circleSet = {
      width: "82px",
      height: "82px",
      boxSizing: "border-box",
      borderColor: "#FFFFFF",
      borderRadius: "50%",
      backgroundColor: "#FFFFFF"
    }
  
    function createElement(elementName, textContent) {
      let element = document.createElement(elementName);
      element.textContent = textContent;
      return element;
    }
    function setSize(element, width, height, boxSizing ){
      element.style.width = width;
      element.style.height = height;
      element.style.boxSizing = boxSizing;
      return element;
    }
    function setflex(element, flexDir, jContent, aItems) {
      element.style.display = "flex";
      element.style.flexDirection = flexDir;
      element.style.justifyContent = jContent;
      element.style.alignItems = aItems;
      return element;
    }
    function setFont(element, fFam) {
      element.style.fontFamily = fFam;
      return elementName;
    }
    function setFontSize(element, fSize) {
      element.style.fontSize = fSize;
      return element;
    }
    function setFontAlign(element, tAlign) {
      element.style.textAlign = tAlign;
      return element;
    }
    function setCircle(element, bRadius, bgColor){
      element.style.borderRadius = bRadius;
      element.style.bgColor = bgColor;
    }

    const trainingData = {
      title : "Lorem Ipsum",
      paragraph : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      color : ["#1e1e1e", "#ffffff"],
      createElement: function(elementName, textContent) {
        let element = document.createElement(elementName);
        element.textContent = textContent;
        return element;
      },
      setSize: function(element, width, height, boxSizing ){
        element.style.width = width;
        element.style.height = height;
        element.style.boxSizing = boxSizing;
        return element;
      },
      setflex: function(element, flexDir, jContent, aItems) {
        element.style.display = "flex";
        element.style.flexDirection = flexDir;
        element.style.justifyContent = jContent;
        element.style.alignItems = aItems;
        return element;
      },
      setFont: function(element, fFam) {
        element.style.fontFamily = fFam;
        return elementName;
      },
      setFontSize: function(element, fSize) {
        element.style.fontSize = fSize;
        return element;
      },
      setFontAlign: function(element, tAlign) {
        element.style.textAlign = tAlign;
        return element;
      },
      setCircle: function(element, bRadius, bgColor){
        element.style.borderRadius = bRadius;
        element.style.bgColor = bgColor;
      }
    }