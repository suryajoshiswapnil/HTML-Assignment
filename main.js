
document.onclick = function(e){
    e = e || window.event;
   // console.log("event from > " + e.target.id);
    var id = parseInt(document.getElementsByClassName("active")[0].id);
    if ( e.target.id == "prev")
    {
       
        if( id  == 1 )
            new_id = 3
        else
            new_id = id - 1; 
        //console.log(act[0].id);
       // var new_id = ( ( id - 1 ) % 3 ) + 1 ;
       // console.log(document.getElementById(new_id));
      // console.log(id +" > "+new_id); 
       document.getElementById(new_id).className = "feedback-b active";
         
        document.getElementById(id).className = "feedback-b";    
    }
    else if( e.target.id == "next")
    {  
        if( id  == 3 )
            new_id = 1
        else
            new_id = id + 1; 
         
       // console.log(act[0].id);
        // var new_id = ( ( id + 1 ) % 3 ) - 1;
       // console.log(id +" > "+new_id);
        document.getElementById(new_id).className = "feedback-b active";
        
        document.getElementById(id).className = "feedback-b";    
    }
}