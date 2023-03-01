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
      return element;
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

    const toolBox = {
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
        return element;
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
    const trainingData = {
      elements : {
        title : "Lorem Ipsum",
        paragraph : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        circle : "",
      },
      colorSet : ["#1e1e1e", "#ffffff"],
      elementSet : {
        root : {
          //type set
          type : "div",
          id : "root",
          //box set
          width : "430px",
          height : "932px",
          boxSizing : "border-box",
          //font set
          fontFamily : "Inter",
          fontSize : "12px",
          //color set
          color : 0,
          backgroundColor : 1,
          //display set
          display : "flex",
          flexDirection : "column",
          justifyContent : "center",
          alignItems : "center",
          //debug set
          border : "1px solid black"
        },
        title : {
          //type set
          type : "div",
          id : "title",
          //box set
          width: "50%",
          height: "auto",
          boxSizing : "border-box",
          //font set
          fontFamily : "inherit",
          fontSize: "2em",
          //color set
          color : 0,
          //display set
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          //debug set
          border: "1px solid red",
        },
        paragraph : {
          //type set
          type : "div",
          id : "paragraph",
          //box set
          width: "auto",
          height: "auto",
          boxSizing : "border-box",
          //font set
          fontFamily: "inherit",
          fontSize: "1em",
          textAlign: "justify",
          //display set
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        },
        circle : {
          //type set
          type : "div",
          id : "circle",
          //box set
          width: "82px",
          height: "82px",
          boxSizing : "border-box",
          //color set
          color : 0,
          backgroundColor : 0,
          //border set
          borderColor : 0,
          borderRadius : "50%",
          //display set
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }
        // main : {

        // },
        // footer : {

        // }

      },
      setForm : function() {
        //root
        //type set
        let root = document.createElement(this.elementSet.root.type);
        root.id = this.elementSet.root.id;
        //box set
        root.style.width = this.elementSet.root.width;
        root.style.height = this.elementSet.root.height;
        root.style.boxSizing = this.elementSet.root.boxSizing;
        //font set
        root.style.fontFamily = this.elementSet.root.fontFamily;
        //color set
        root.style.color = this.colorSet[this.elementSet.root.color];
        root.style.backgroundColor = this.colorSet[this.elementSet.root.backgroundColor];
        //display set
        root.style.display = this.elementSet.root.display;
        root.style.flexDirection = this.elementSet.root.flexDirection;
        root.style.justifyContent = this.elementSet.root.justifyContent;
        root.style.alignItems = this.elementSet.root.alignItems;
        //debug set
        root.style.border = "1px solid black";
        root.style.marginTop = "1%";
        root.style.marginBottom = "1%";
        //type set
        let title = document.createElement(this.elementSet.title.type);
        title.id = this.elementSet.title.id;
        //content set
        title.textContent = this.elements.title;
        //font set
        title.style.fontFamily = this.elementSet.title.fontFamily;
        title.style.fontSize = this.elementSet.title.fontSize;
        //color set
        title.style.color = this.colorSet[this.elementSet.title.color];
        title.style.backgroundColor = this.colorSet[this.elementSet.title.backgroundColor];
        //box set
        title.style.width = this.elementSet.title.width;
        title.style.height = this.elementSet.title.height;
        title.style.boxSizing = this.elementSet.title.boxSizing;
        title.style.borderBottom = "1px solid black";
        title.style.textAlign = "center";
        //debug set
        //title.style.border = "1px solid black";
        title.style.marginTop = "1%";
        title.style.marginBottom = "1%";
        //type set
        let paragraph = document.createElement(this.elementSet.paragraph.type);
        paragraph.id = this.elementSet.paragraph.id;
        paragraph.textContent = this.elements.paragraph;
        //font set
        paragraph.style.fontFamily = this.elementSet.paragraph.fontFamily;
        paragraph.style.fontSize =  this.elementSet.paragraph.fontSize;
        //color set
        paragraph.style.color = this.colorSet[this.elementSet.paragraph.color];
        paragraph.style.backgroundColor = this.colorSet[this.elementSet.paragraph.backgroundColor];
        //box set
        paragraph.style.width = this.elementSet.paragraph.width;
        paragraph.style.height = this.elementSet.paragraph.height;
        paragraph.style.boxSizing = this.elementSet.paragraph.boxSizing;
        //debug set
        //paragraph.style.border = "1px solid black";
        paragraph.style.marginTop = "1%";
        paragraph.style.marginBottom = "1%";
        let circle = document.createElement(this.elementSet.circle.type);
        circle.id = this.elementSet.circle.id;
        circle.style.width = this.elementSet.circle.width;
        circle.style.height = this.elementSet.circle.height;
        circle.style.color = this.colorSet[this.elementSet.circle.color];
        circle.style.backgroundColor = this.colorSet[this.elementSet.circle.backgroundColor];
        circle.style.borderRadius = this.elementSet.circle.borderRadius;
        circle.style.borderColor = this.colorSet[this.elementSet.circle.borderColor];
        //debug set
        //circle.style.border = "1px solid black";
        circle.style.marginTop = "1%";
        circle.style.marginBottom = "1%";
        root.appendChild(title);
        root.appendChild(paragraph);
        root.appendChild(circle);
        return root;
      },
      changeColor: function() {
        if(this.colorSet[0] === "#1E1E1E"){
          this.colorSet[0] = "#FFFFFF";
          this.colorSet[1] = "#1E1E1E";
          root.style.color = this.colorSet[this.elementSet.root.color];
          root.style.backgroundColor = this.colorSet[this.elementSet.root.backgroundColor];
          title.style.color = this.colorSet[this.elementSet.title.color];
          title.style.backgroundColor = this.colorSet[this.elementSet.title.backgroundColor];
          paragraph.style.color = this.colorSet[this.elementSet.paragraph.color];
          paragraph.style.backgroundColor = this.colorSet[this.elementSet.paragraph.backgroundColor];
          circle.style.color = this.colorSet[this.elementSet.circle.color];
          circle.style.borderColor = this.colorSet[this.elementSet.circle.borderColor];
          circle.style.backgroundColor = this.colorSet[this.elementSet.circle.backgroundColor];
        }else {
          this.colorSet[0] = "#1E1E1E";
          this.colorSet[1] = "#FFFFFF";
          root.style.color = this.colorSet[this.elementSet.root.color];
          root.style.backgroundColor = this.colorSet[this.elementSet.root.backgroundColor];
          title.style.color = this.colorSet[this.elementSet.title.color];
          title.style.backgroundColor = this.colorSet[this.elementSet.title.backgroundColor];
          paragraph.style.color = this.colorSet[this.elementSet.paragraph.color];
          paragraph.style.backgroundColor = this.colorSet[this.elementSet.paragraph.backgroundColor];
          circle.style.color = this.colorSet[this.elementSet.circle.color];
          circle.style.borderColor = this.colorSet[this.elementSet.circle.borderColor];
          circle.style.backgroundColor = this.colorSet[this.elementSet.circle.backgroundColor];
        }
      }
    }
    console.log(trainingData);
    document.body.appendChild(trainingData.setForm());
    document.body.addEventListener("click", function(){
      trainingData.changeColor();
    })