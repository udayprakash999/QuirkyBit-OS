const apps = document.querySelectorAll(".screen .app");
const popups = document.querySelectorAll(".screen .popup");

// function appOpen(){
//    popUp.classList.add("active");
// };
// closeApp.addEventListener("click",()=>{
//     popUp.classList.remove("active");
// });

apps.forEach((app, index) => {
  app.addEventListener("click", () => {
    popups[index].classList.add("active");
  });
});

popups.forEach((popup) => {
  const closeApp = popup.querySelector(".popup-top i");

  closeApp.addEventListener("click", (event) => {
    event.stopPropagation();
    popup.classList.remove("active");
  });
});

function timeEst() {
  const timeElm = document.getElementById("phone-time");
  const now = new Date();
  const time = new Intl.DateTimeFormat("en-US", {
    Timezone: "America/New_york",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).format(now);
  timeElm.textContent = time;
}
timeEst();
setInterval(timeEst, 1000);

//battry

navigator.getBattery().then((b) => {
  const div = document.querySelector(".battery");
  function update() {
    div.textContent = Math.round(b.level * 100) + "%";
  }
  update();
  b.addEventListener("levelchange", update);
});

// photo app
const uploadphoto = document.getElementById("uploadphoto");
const uploadphotoBtn = document.getElementById("uploadphotoBtn");
const photoList = document.getElementById("photoList");

uploadphotoBtn.addEventListener("click", () => {
  const files = uploadphoto.files;

  if (files.length > 0) {
    Array.from(files).forEach((files) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        const PhotoContainer = document.createElement("div");
        PhotoContainer.classList.add("photo-container-t");

        const img = document.createElement("img");
        img.src = e.target.result;
        img.classList.add("photo-thumbnail");

        PhotoContainer.appendChild(img);
        photoList.appendChild(PhotoContainer);
      };
      reader.readAsDataURL(files);
    });
  }
});

// notes add functionallity
const addnotesBtn = document.getElementById("addnotes");
const notesContainer = document.getElementById("notes-container");
function createNote(content = "") {
  const note = document.createElement("div");
  note.classList.add("note");

  note.innerHTML = `<textarea>${content}</textarea><span><i class="fa-solid fa-trash-can"></i></span>`;

  notesContainer.appendChild(note);
  note.querySelector("span").addEventListener("click", () => {
    note.remove();
  });
}
addnotesBtn.addEventListener("click", () => createNote());

// docs app
const docsContainer = document.getElementById("docs-container");
const docs = document.getElementById("docs");
const savedocBtn = document.getElementById("savedocBtn");
const docSaved = document.getElementById("docSaved");

savedocBtn.addEventListener("click", () => {
  const content = docs.value.trim();

  if (content == "") {
    alert("Pllss type somthngg!!! ;(");
    return;
  }
  const docTxt = document.createElement("p");
  docTxt.textContent = content;
  docSaved.append(docTxt);

  docs.value = "";
});
