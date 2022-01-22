var student= [];
var num= 0;

function get(x){
    return document.getElementById(x);
}

function addmarks(){
    if (get("math").value == "" || get("science").value == "" || get("english").value == "" ||get("sst").value == "" || get("hindi").value == "" ){
        get("info").innerText=`Please Enter the marks`;
    } else {
        if (get("math").value > 100 || get("science").value > 100 || get("english").value > 100 || get("sst").value > 100 || get("hindi").value > 100  || get("english").value < 0 || get("math").value < 0 || get("science").value < 0 || get("sst").value < 0 || get("hindi").value < 0){
            get("info").innerText=`Please Enter the marks in between 0 and 100.`;
        } else {
            window['student'+num]={
                name: (get("name").value).toLowerCase(),
                math: get("math").value,
                science:  get("science").value,
                english:  get("english").value,
                hindi: get("hindi").value,
                sst: get("sst").value

            }
            student.push(window['student'+num]);
            num++;
            get("info").innerText=`Data of ${num} Student/s has been stored.`;
            get("math").value="";
            get("science").value="";
            get("english").value="";
            get("sst").value="";
            get("hindi").value="";
        }
    }
}

function result(){
    var input= get("stuname").value.toLowerCase();
    var output= get("output");
    for (var i = 0; i < student.length; i++) {
        if (student[i].name === input) {
            var avgmarks= Math.round(Number(student[i].math)+Number(student[i].english)+Number(student[i].science)+Number(student[i].hindi)+Number(student[i].sst))/3;
            output.innerHTML=`<h4>Maths Marks: ${student[i].math}</h4>
                              <h4>Science Marks: ${student[i].science}</h4>
                              <h4>English Marks: ${student[i].english}</h4>
                              <h4>SST Marks: ${student[i].sst}</h4>
                              <h4>Hindi Marks: ${student[i].hindi}</h4>
                              <h4>Average Marks: ${avgmarks}</h4>
            `;
            break;
        } else {
            output.innerHTML="<h4>Student Not found</h4>";
        }
        
    }
}