let formTag = document.querySelector("form");

// Events
formTag.addEventListener("submit", sendComment);

// Functions
function sendComment(event) {
  event.preventDefault();
  commentHandler();
}

function commentHandler() {
  let inputFirstName = document.getElementById("first-name").value;
  let inputLastName = document.getElementById("last-name").value;
  let inputTextArea = document.getElementById("message").value;
  let errorMsg = document.getElementById("error-message");

  if (inputFirstName === "" || inputLastName === "" || inputTextArea === "") {
    errorMsg.style.display = "block";
  }
  else {
    errorMsg.style.display = "none";
    commentBuilder(inputFirstName, inputLastName, inputTextArea);
    formTag.reset();
  }
}

function commentBuilder(inputFirstName, inputLastName, inputTextArea){
  let commentList = document.getElementById("comment-list");
  let createH3 = document.createElement("h3");
  let createP = document.createElement("p");
  let createDivTag1 = document.createElement("div");
  let createDivTag2 = document.createElement("div");
  let createDivTag3 = document.createElement("div");
  let divClasses = {
    parent : "flex space-x-4 text-sm text-gray-500",
    childOne : "flex-1 py-10 border-t border-gray-200",
    childTwo : "prose prose-sm mt-4 max-w-none text-gray-500",
  };
  
  try {
    // h3 formating
    createH3.className = "font-medium text-gray-900";
    createH3.innerText = inputFirstName + " " + inputLastName;

    // divs formating
    createDivTag1.className = divClasses.parent;
    createDivTag2.className = divClasses.childOne;
    createDivTag3.className = divClasses.childTwo;

    // p formating
    createP.innerText = inputTextArea;

    createDivTag1.appendChild(createDivTag2);
    createDivTag2.appendChild(createH3);
    createDivTag2.appendChild(createDivTag3);
    createDivTag3.appendChild(createP);

    commentList.appendChild(createDivTag1);
  } catch (error) {
    console.log(error);
  };
}