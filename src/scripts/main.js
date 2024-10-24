document.addEventListener("DOMContentLoaded", function(){
    const formLimNum = document.getElementById("form-lim-num");
    formLimNum.addEventListener("submit", function(e){
        e.preventDefault();

        let limNum = document.getElementById("lim-num").value;
        limNum = parseInt(limNum);

        let randomNum = Math.random() * limNum;
        randomNum = Math.round(randomNum);

        const result = document.querySelector(".chosen-number");
        const chosenNumVal = document.getElementById("chosen-number-value");

        if (randomNum < 1){
            randomNum = randomNum + 1;
            
            result.style.display = "block";
            chosenNumVal.innerText = randomNum;
        } else{
            result.style.display = "block";
            chosenNumVal.innerText = randomNum;
        }

    })
})