function procenti(){
    let c = document.querySelector("#c").value;
    let cc = document.querySelector("#cc").value;

    let x = Math.floor((Math.random() * 100) + 1);
    document.querySelector("#score-text").style.visibility = "visible";
    document.querySelector("#score-text").innerText = x+"%";

    if(x == 0){
        document.querySelector("#score-text").innerText = x+"%. Šis cilvēks nav priekš tevis.";
    }
    else if(x>0 && x <50){document.querySelector("#score-text").innerText = x+"%. Šis cilvēks nav gluži tev piemērots.";}
    else if(x>50 && x <65){document.querySelector("#score-text").innerText = x+"%. Šis cilvēks ir gandrīz tev piemērots.";}
    else{
        document.querySelector("#score-text").innerText = x+"%. Šis cilvēks ir priekš tevis.";
    }
    }
