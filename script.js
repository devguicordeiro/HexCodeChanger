function colorChanger(){
    let hexNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
    let hexCodejs="";

    for(let i = 0; i < 6; i++){
        let randomHex = Math.floor(Math.random() * hexNumbers.length);

        hexCodejs += hexNumbers[randomHex]
    }

    document.getElementById("hexCode").innerHTML = hexCodejs;
    document.getElementsByTagName("body")[0].style.background = "#" + hexCodejs;
}