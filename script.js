//performing action using XMLHttpRequest method method
document.getElementById('btn1').onclick = () => {

    let xhttp = new XMLHttpRequest();
    xhttp.onload = () => {
        let jsonobj = JSON.parse(xhttp.responseText);

        let contents = `<tr><th> Name </th><th> Department </th><th> Year </th><th>  College  </th><tr>`
        for (elements of jsonobj) {
            contents += "<tr><td>" + elements.name + "</td><td>" + elements.department + "</td><td>" + elements.year + "</td><td>" + elements.college + "</td></tr>";
        }
        document.getElementById("tabledetail1").innerHTML = contents;
    }
    xhttp.open("GET", "doc.json");
    xhttp.send();
}


//performing action using Fetch method
document.getElementById('btn2').onclick = () => {

    let resfetch = fetch("doc.json");
    resfetch.then((response) => response.json()).then(jsonobj => {
        let contents = `<tr><th> Name </th><th> Department </th><th> Year </th><th>  College  </th><tr>`
        for (elements of jsonobj) {
            contents += "<tr><td>" + elements.name + "</td><td>" + elements.department + "</td><td>" + elements.year + "</td><td>" + elements.college + "</td></tr>";
        }
        document.getElementById("tabledetail2").innerHTML = contents;
    });

    

}