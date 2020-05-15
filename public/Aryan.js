
$(function(){
    let Date = $('#Date')
    let Slot = $('#Slot')
    let Available = $('#Available')
    let tbl_students = $('#students')
    let slots_booked = $('#slots_booked')
$('#btnSlotAdd').click(function(){
    $.post('/api/Aryan',{
        Date: Date.val(),
        Slot: Slot.val(),
        Available: Available.val()
    },{ 

    }
    )
})
    function refreshStudentsTable(students){
        tbl_students.empty()
        tbl_students.append(
           `<tr>
            <th>Name</th>
            <th>Description</th>
            <th>Date</th>
            <th>Slot</th>
            </tr>         
            `
        )
        for(student of students){
            tbl_students.append(
                `
                <tr>
                <td> ${student.name}</td>
                <td> ${student.description}</td>
                <td> ${student.Date}</td>
                <td> ${student.slot}</td>
                </tr>                
                
                `
            )
        }
    }
    function refreshSlotsTable(slots){
        slots_booked.empty()
        slots_booked.append(
           `<tr>
           <th>Date</th>
           <th>Slot</th>
           <th>Available</th>
           </tr>     
            `
        )
        for(slot of slots){
            slots_booked.append(
                `
                <tr>
                <td> ${slot.Date}</td>
                <td> ${slot.slot}</td>
                <td> ${slot.available}</td>
                </tr>                
                `
            )
        }
    }
$.get('/api/Aryan',(data)=>{
    refreshStudentsTable(data)
})
$.get('/api/Aryan/slots',(data)=>{
    refreshSlotsTable(data)
})

})