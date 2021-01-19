//feel free to copy the code
(function () {
  var readyInterval = setInterval(function () {
 
      if ("complete" == document.readyState.toLowerCase()) {
       var ProjectNameItems=document.getElementsByClassName("project-name");
       if (ProjectNameItems!=null)
       { 

         var ItemsLength=ProjectNameItems.length;
         for(var i=0;i<ItemsLength;i++)
         {
           
           if(ProjectNameItems[i].hasAttribute("data-projectlink"))
           {
             var link=ProjectNameItems[i].getAttribute("data-projectlink").toString();
             if(!(link==""))
             {
            
              ProjectNameItems[i].classList.add("Project-Link");
              ProjectNameItems[i].setAttribute("title","Click link to view the project")
              ProjectNameItems[i].onclick=()=>{
                window.open(link,"_blank");
              }
              
             }
           }
         }
       }
        clearInterval(readyInterval);
      }
  }, 1);
})();