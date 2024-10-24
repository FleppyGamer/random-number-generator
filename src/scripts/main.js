document.addEventListener("DOMContentLoaded", function(){
    const formLimNum = document.getElementById("form-lim-num");
    formLimNum.addEventListener("submit", function(e){
        e.preventDefault();

        let limNum = document.getElementById("lim-num").value;

        console.log(limNum);

        limNum = parseInt(limNum);

        let randomNum = Math.random() * limNum;
        randomNum = Math.round(randomNum);

        if (randomNum < 1){
            randomNum = randomNum + 1;
            alert(randomNum);
        } else{
            alert(randomNum);
        }

    })
})