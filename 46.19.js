function showRows(rows){
    let star = '';
    for(let i = 1; i <= rows; i++){
        star += "*";
        console.log(star);
    }
}

showRows(10);
