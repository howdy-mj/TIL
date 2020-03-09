const aBtn = document.querySelectorAll(".section");
// console.log(aBtn);

function accoridon() {

    aBtn.forEach( function (btn) {
        // btn.addEventListener("click", console.log("yes"));

        btn.addEventListener("click", function() {
            this.classList.toggle("active");

            var content = this.nextElementSibling;
            // console.log(content.scrollHeight);

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        })
    })

}

function init(){
    accoridon();
}
init();