$(function(){
    let consellor = $('#consellors')
    let Dates = $('#date')
    let slots = $('#slots')
    let name = $('#name')
    let Description = $('#description')
    Dates.attr("disabled","true")
    slots.attr("disabled","true")
    var count = 0
    $('#btnScheduldeadd').click(function(){
        var text;
        if(consellor.val()==1)text = 'Raj'
        else if(consellor.val()==2)text = 'Prem'
        else text = 'Aryan'
        var request = '/api/'+text+'/slots'
        let available;
        var bool;
        $.get('/api/students/list',(data)=>{
            var flag=1;
            for(i=0;i<data.length;i++){
                if(data[i].date==Dates.val()&&data[i].slot==slots.val()&&data[i].name == name.val()){
                    alert("Thie user already exist")
                    flag=0
                    break;
                }
            }
            if(flag){
            $.get(request,(data)=>{
                for(i=0;i<data.length;i++){
                    if(data[i].Date== Dates.val() && data[i].slot == slots.val()){
                        console.log("Here in the loop",data[i].available)
                        available = data[i].available
                        console.log(available)
                    if(available==0){
                        alert("This slot is not available")
                        location.reload(true)
                    }else{
                        available = available - 1;
                    if(consellor.val()==1){
                        console.log("Raj")
                        $.post('/api/students/R',{
                            Date: Dates.val(),
                            Slot: slots.val(),
                            available: available
                        },{
                        })
                    }else if(consellor.val()==2){
                        $.post('/api/students/P',{
                            Date: Dates.val(),
                            Slot: slots.val(),
                            available: available
                        },{
            
                        })
                    }else{
                        $.post('/api/students/A',{
                            Date: Dates.val(),
                            Slot: slots.val(),
                            available: available
                        },{
            
                        })
                    }
                    $.post('/api/students',{
                        Date: Dates.val(),
                        Slot: slots.val(),
                        consellor_id: consellor.val(),
                        name: name.val(),
                        Description: Description.val(),
                    },{ 
                    }
                    
                    )
                    setTimeout(() => {
                        alert("Your Response has beed recorded Successfully")
                        name.val('')
                        Description.val('')
                        location.reload()
                       }, 2000);
                }
                }
            }
            })
        }
        })
    
        
        console.log("IN the button")
        
        console.log(consellor.val())
    
    
        // 
    })
    function refreshConsellors(consellors_list){
        $.each(consellors_list, function(key, value) {
            var $option = $("<option/>", {
                  value: value.consellor_id,
                 text: value.name
            });
            consellor.append($option)
       });       
    }
$.get('/api/consellors',(data)=>{
    console.log("Get of consellors")
    refreshConsellors(data)
})

});
function my_consellor(){
var date = document.getElementById('date')
var consellor = document.getElementById('consellors')
var text  = consellor.options[consellor.selectedIndex].text;
date.options.length=1;
var request =  '/api/'+text+'/Dates'
console.log(request)
$.get(request,(data)=>{
    for(dates of data){
        var opt = document.createElement('option');
        opt.appendChild( document.createTextNode(dates.Date));
        opt.value = dates.Date;
        date.appendChild(opt); 
    }
})
date.removeAttribute("disabled");
}
function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);
    if (elt.selectedIndex == -1)
        return null;
    return elt.options[elt.selectedIndex].text;
}
function my_date(){
    var date = document.getElementById("date").value
    console.log(date)
    var slot = document.getElementById("slots")
    console.log(slot.length)
    slot.options.length=1;
    var text = getSelectedText('consellors');
    var request = '/api/'+ text +'/slots'
    $.get(request,(data)=>{
        var index=0
        for(i=0;i<data.length;i++){
            if(data[i].Date===date){
                index++
                if(data[i].available==0){
                    index--
                }else{
                var opt = document.createElement('option');
                opt.appendChild( document.createTextNode(data[i].slot));
                opt.value = data[i].slot;
                slot.appendChild(opt); 
                }
            }
        }
        if(index==0){
            alert("All slots booked for this Date")
        }
    })
    slot.removeAttribute("disabled");
}