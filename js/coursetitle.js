let mycourses = "../coursestitle.json";
let mycoursesContainer = document.querySelector("#courses .container .slider");
let counterCourse = 0;
getData();

function getData() {
  fetch(mycourses)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      //   console.log(data.data);
      for (let i = 0; i < data.data.length; i++) {
        // console.log(data.data[i]);
        let num = counterCourse + i;
        let myBox = `
       <div class="box" data-cont="${num}">
        <div class="img">
            <img src="${data.data[i].img}" alt="" />
        </div>
        <h2>${data.data[i].title}</h2>
       </div>
       `;
        mycoursesContainer.innerHTML += myBox;
      }
      document.querySelectorAll("#courses .box").forEach((box) => {
        box.addEventListener("click", (e) => {
          console.log(e.currentTarget.dataset.cont);
        });
      });
    });
}
