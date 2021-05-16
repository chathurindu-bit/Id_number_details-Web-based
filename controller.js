window.addEventListener("load",initialize);

function initialize(){
    btnClickShow.addEventListener("click",idController);
    btnClickClear.addEventListener("click",clear);
}

function idController(){
    var l = document.getElementById('inpt').value;
    var birthyear;
    var len; 
    var temp;
    var month;
    var sex;
    var date;

    function getInputs(){
        var y = document.getElementById('year');
        y.innerHTML = birthyear;

        var m = document.getElementById('month');
        m.innerHTML = month;

        var d = document.getElementById('date');
        d.innerHTML = date;

        var s = document.getElementById('sex');
        s.innerHTML = sex;
    }

    function sexfunc(){
        if(len < 500){
            sex =  "Male";
        }else sex =  "Female";
    }

    function convert(){
        if(len>500){
            temp = len-500;
        }else temp = len;
    }

    function monthfunc(){
        if(temp>0 && temp<32){
            month = "January";
            date = temp-31;           
        }
        else if(temp>=32 && temp<61){
             month = "February";
            date = temp-31;
        }
        else if(temp>=61 && temp<92){
            month = "March";
        date = temp-60;
        }
        else if(temp>=92 && temp<122){
            month = "April";
            date = temp-91;
        }
        else if(temp>=122 && temp<153){
            month = "May";
            date = temp-121;
        }else if(temp>=153 && temp<183){
            month = "June";
            date = temp-152;
        }else if(temp>=183 && temp<=213){
            month = "July";
            date = temp-182;
        }else if(temp>=214 && temp<=244){
            month = "August";
            date = 0 + (temp-213);
        }else if(temp>=245 && temp<=274){
            month = "September";
            date = temp-244;
        }else if(temp>=275 && temp<=305){
            month = "October";
            date = temp-274;
        }else if(temp>=306 && temp<=335){
            month = "November";
            date = temp-305;
        }else if(temp>=336 && temp<=366){
            month = "December";
            date = temp-335;
        }    
    }
    
    if(l.length==12){
    function yearfunc(){
        birthyear = parseInt(l.substring(0,4));
    }
    yearfunc();

    function selectLen(){
        len = l.substring(4,7);
    }
    selectLen();

    convert();
    monthfunc();
    sexfunc();
    getInputs();   
    
    }
    else if(l.length==10){
        function yearfunc(){
            birthyear = parseInt("19" + l.substring(0,2));
        }
        yearfunc();
    
        function selectLen(){
            len = l.substring(2,5);
        }
        selectLen();
            
        convert();
        monthfunc();
        sexfunc();
        getInputs(); 
        
                        
    }else window.alert("Not a valid number");
}

function clear(){
    document.getElementById('inpt').value = "";
    document.getElementById('year').innerHTML = "----------";
    document.getElementById('month').innerHTML = "----------";
    document.getElementById('date').innerHTML = "----------";
    document.getElementById('sex').innerHTML = "----------";
}

