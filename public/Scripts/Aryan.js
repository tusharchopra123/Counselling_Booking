
$(function(){
    let mDate = $('#Date')
    let Slot = $('#Slot')
    let Available = $('#Available')
    let tbl_students = $('#students')
    let slots_booked = $('#slots_booked')
    function formatDate() {
            var d = new Date()
            month = '' + (d.getMonth() + 1)
            day = '' + d.getDate()
            year = d.getFullYear()
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
            console.log(year+"-"+month+"-"+day)
        return [year, month, day].join('-');
    }
 $('#btnSlotAdd').click(function(){
     var cdate = formatDate();
     console.log(mDate.val())
        if(mDate.val()!=""&& mDate.val()>cdate){
            console.log("here")
        $.get('/api/Aryan/slots',(data)=>{
            var flag=1
            for(i=0;i<data.length;i++){
                if(data[i].Date == mDate.val() && data[i].slot==Slot.val()){
                    flag=0
                }
            }
            if(flag){
                if(Available.val()>0 && Available.val()<4){
                 $.post('/api/Aryan',{
                     Date: mDate.val(),
                    Slot: Slot.val(),
                    Available: Available.val()
                 },{ 
                }
                )
                setTimeout(() => {
                     location.reload()
                    }, 1000);
                }else{
                    alert("Pls select avalilable from 1-3")
                }
            }else{
                alert("You have added the slot already")
            }
            
        })
    }else{
        if(mDate.val()=="")alert("please choose a date")
        else alert("please select a future date")
    }
    })
    function refreshStudentsTable(students){
        tbl_students.empty()
        tbl_students.append(
           `
            <thead class="bg-info text-white">
            <tr>
            <th>Name</th>
            <th class="wrap">Description</th>
            <th>Date</th>
            <th>Slot</th>
            </tr>       
            </thead>  
            `
        )
        var index=0
        for(student of students){
            var desc = student.description.split('\n').join('<br>');
            if(index%2==0){
            tbl_students.append(
                `
                <tr class="table-light">
                <td> ${student.name}</td>
                <td class="wrap"> ${desc}</td>
                <td class="Date_sp"> ${student.date}</td>
                <td> ${student.slot}</td>
                </tr>                
                
                `
            )
            }else{
                tbl_students.append(
                    `
                    
                    <tr class ="table-info">
                    <td> ${student.name}</td>
                    <td class="wrap"> ${desc}</td>
                    <td class="Date_sp"> ${student.date}</td>
                    <td> ${student.slot}</td>
                    </tr>                
                    
                    `
                )
            }
            index++
        }
    }
    function refreshSlotsTable(slots){
        slots_booked.empty()
        slots_booked.append(
           `
           <thead class="bg-info text-white">
           <tr>
            <th>Date</th>
            <th>Slot</th>
            <th>Available</th>
           </tr>     
           </thead>
            `
        )
        var index=0;
        var k = formatDate();
        var j=0;
        for(slot of slots){
            if(slot.Date>=k){
            if(slot.available>0){
            if(j%2==0){
            slots_booked.append(
                `
                <tr class="table-light">
                <td> ${slot.Date}</td>
                <td> ${slot.slot}</td>
                <td> ${slot.available}</td>
                </tr>                
                `
            )
            }else{
                slots_booked.append(
                    `
                    <tr class="table-info">
                    <td> ${slot.Date}</td>
                    <td> ${slot.slot}</td>
                    <td> ${slot.available}</td>
                    </tr>                
                    `
                )
            }
            j++;
            }
        }
            index++
        }
    }
$.get('/api/Aryan',(data)=>{
    refreshStudentsTable(data)
})
$.get('/api/Aryan/slots',(data)=>{
    refreshSlotsTable(data)
})

})