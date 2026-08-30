function saveContact() {
    let name = document.getElementById("contactName").value;
    let mobile = document.getElementById("mobileNumber").value;
    if (name === "" || mobile === "") {
        alert("Please enter Contact Name and Mobile Number");
        return;
    }
    let table = document.getElementById("contactTable");
    let newRow = table.insertRow();
    let nameCell = newRow.insertCell(0);
    let mobileCell = newRow.insertCell(1);
    nameCell.innerHTML = name;
    mobileCell.innerHTML = mobile;
    document.getElementById("contactName").value = "";
    document.getElementById("mobileNumber").value = "";
}