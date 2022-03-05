let myData = "../newstitle.json";
let container = document.querySelector("#news .container .slider");
let counter = 0;
getData();

function getData() {
  fetch(myData)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      //   console.log(data.data);
      for (let i = 0; i < data.data.length; i++) {
        // console.log(data.data[i]);
        let num = counter + i;
        let myBox = `
       <div class="box" data-cont="${num}">
        <div class="img">
            <img src="${data.data[i].img}" alt="" />
        </div>
        <h2><a href="${data.data[i].url}">${data.data[i].title}</a></h2>
       </div>
       `;
        container.innerHTML += myBox;
      }
      document.querySelectorAll("#news .box").forEach((box) => {
        box.addEventListener("click", (e) => {
          console.log(e.currentTarget.dataset.cont);
        });
      });
    });
}
