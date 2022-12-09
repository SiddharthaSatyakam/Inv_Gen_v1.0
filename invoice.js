$(document).ready(function () {
    let dat = new Date();
    let day= dat.getDate();
    if(day<10){day="0"+day;}
    let month= dat.getMonth()+1;
    if(month<10){month="0"+month;}
    let yer=dat.getFullYear();
    let todDate=yer+"-"+month+"-"+day;
    document.getElementById("datePick").setAttribute('max', todDate)
    document.getElementById("addRow").addEventListener("click", addRow)
    document.getElementById("remRow").addEventListener("click", removeRow);
    function addRow() {

        let table = document.getElementById("billItem");
        let rowCount = table.rows.length;
        let row = table.insertRow(rowCount);
        row.className = "billRow";

        let cell1 = row.insertCell(0);
        cell1.id = "desc"
        let ele1 = document.createElement("input")
        ele1.className = "ele1"
        ele1.type = "text"
        ele1.placeholder = "Enter the item"
        cell1.appendChild(ele1);

        let cell2 = row.insertCell(1);
        cell2.id = "remain"
        let ele2 = document.createElement("input")
        ele2.type = "number"
        ele2.className = "billItem1u"
        cell2.appendChild(ele2);

        let cell3 = row.insertCell(2);
        cell3.id = "remain1"
        let ele3 = document.createElement("input")
        ele3.type = "number"
        ele3.className = "billItem1q"
        cell3.appendChild(ele3);

        let cell4 = row.insertCell(3);
        cell4.id = "xyz"
        let ele4 = document.createElement("output")
        ele4.type = "input"
        ele4.className = "billItem1a"
        cell4.appendChild(ele4);

    }

    document.getElementById("btn").addEventListener('click', eachAmount);
    function eachAmount() {
        let elemens = document.querySelectorAll(".billItem1u");
        let elemens1 = document.querySelectorAll(".billItem1q");
        let elemens2 = document.querySelectorAll(".billItem1a");
        let arr = [];
        let c = 0;
        for (let i = 1; i < elemens.length; i++) {
            let a = elemens[i].value;
            if (isNaN(a)) { alert("Please enter Unit Cost as a number"); a = 0; }
            let b = elemens1[i].value;
            if (isNaN(b)) { alert("Please enter the qty/hr as a number"); b = 0; }
            elemens2[i].value = a * b;
            arr[c] = a * b;
            c++;
        }
        let sum = 0;
        for (let j = 0; j < arr.length; j++) {
            sum += arr[j];
        }
        document.getElementById("subT").value = sum
        console.log(document.getElementById("taxSelector").value)
        let taxCalc = ((parseInt(document.getElementById("taxSelector").value)) * sum) / 100;
        let allSum = sum + taxCalc
        document.getElementById("tot").value = taxCalc
        document.getElementById("netAm").value = allSum
        document.getElementById("invTot").value = allSum
    }

    function removeRow() {
        let table1 = document.getElementById("billItem");
        let tabler = table1.getElementsByTagName("tr");
        let rowCount1 = tabler.length;
        while(rowCount1>1){table1.querySelectorAll("tr")[rowCount1 - 1].remove(); eachAmount();}
    }

    document.getElementById("print").addEventListener('click',print);
    function print(){
        document.getElementById("addRow").style.visibility='hidden';
        document.getElementById("remRow").style.visibility='hidden';
        document.getElementById("btn").style.visibility='hidden';
        window.print();
    }

})


