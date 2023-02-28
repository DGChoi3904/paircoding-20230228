const trainingXIIData = {
  "title" : "Lorem Ipsum",
  "paragraph" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  "color" : ["#1e1e1e", "#ffffff", "#888888"]}



    let root=document.querySelector('#root');
    root.style.border="1px solid black"
    root.style.width="430px"
    root.style.height="932px"
    root.style.color="white"
    root.style.display="flex"
    root.style.flexDirection="column"
    root.style.justifyContent="center"
    root.style.alignItems="center"


    let a=document.createElement('div');
    a.setAttribute('class','title')
    // a.style.border="1px solid black"
    a.style.width="147px"
    a.style.height="100px"
    // a.style.textDecoration="underline"
    a.style.textDecorationThickness="2px"
    a.style.fontWeight="400"
    a.textContent=trainingXIIData["title"]
    a.style.marginBottom="20px"
    a.style.display="flex"
    a.style.fontSize="24px"
    a.style.color="black"
    a.style.flexDirection="column"
    a.style.justifyContent="end"
    a.style.alignItems="center"
    a.style.borderBottom="2px solid black"
    a.style.fontFamily="'inter',sans-serif"






    console.log(root)
    root.appendChild(a);
    let b=document.createElement('div');
    b.setAttribute('class','main')
    b.style.width="70%"
    b.style.height="35%"
    b.style.fontWeight="400"
    b.textContent=trainingXIIData["paragraph"]
    b.style.display="flex"
    b.style.fontSize="12px"
    b.style.color="black"
    b.style.flexDirection="column"
    b.style.alignItems="center"
    b.style.textAlign="justify"
    b.style.fontFamily="'inter',sans-serif"






    root.appendChild(b);

    let c=document.createElement('div');
    c.setAttribute('class','circle')
    c.style.border="1px soild black"
    c.style.width="82px"
    c.style.height="82px"
    c.style.display="flex"
    c.style.backgroundColor="#5A5A5A"
    c.style.borderRadius="50%"
    c.style.alignItems="center"
    // c.textContent=trainingXIIData["color"]
  root.appendChild(c);