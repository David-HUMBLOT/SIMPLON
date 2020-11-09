
let tab1;
let tab2;
let tab3;

tab1 = [ 4, 8,  7, 9 ,1 ,5 ,4 ,6 ];
tab2 = [ 7, 6, 5, 2,1, 3, 7, 4 ];
tab3 = [0];
console.log(tab1);
console.log(tab2);
var txt3 ='';
for (i=0 ; i< tab1.length ; i++)
 {
    tab3 [i] = tab1[i] + tab2[i];
txt3=txt3+"<td>"+tab3[i]+"</td>";
console.log(txt3);
}
document.getElementById("T3").innerHTML= txt3;
var txt2='';
for (i=0; i< tab2.length;i++){
    tab2[0];
    txt2 = txt2 + "<td>" + tab2[i] + "</td>";
    console.log(txt2);
}
document.getElementById("T2").innerHTML= txt2;
var txt1='';
for (i=0; i< tab2.length;i++){
    tab2[0];
    txt1 = txt1 + "<td>" + tab1[i] + "</td>";
    console.log(txt1);
}
document.getElementById("T1").innerHTML= txt1;





