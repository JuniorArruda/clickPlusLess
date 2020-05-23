const btnAction = (btnId) => {

    let display = document.getElementById("display").innerHTML
    switch (btnId) {
        case "buttonPlusId":
            display++; break;
        case "buttonLessId":
            display--; break;
    }
    document.getElementById("display").innerHTML = display

}




