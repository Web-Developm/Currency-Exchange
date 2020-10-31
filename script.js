
  document.getElementById("number").addEventListener("input",function(e)
  {
    let num=e.target.value;

    document.getElementById("USA").innerHTML=num *0.013+"$";
    document.getElementById("UK").innerHTML=num *0.011+ "£";
    document.getElementById("Canada").innerHTML=num *0.018+"$";
    document.getElementById("Japanese").innerHTML=num *0.013+"¥";
    document.getElementById("Pakistan").innerHTML=num * 2.15+"Rs";
    document.getElementById("Nepal").innerHTML=num * 1.60+"Rs";

  });
