var siteName=document.getElementById('siteName');
var siteURL=document.getElementById('siteURL');
var siteList;
if(localStorage.getItem('siteList')==null){
     siteList=[];
}else{
    siteList=JSON.parse(localStorage.getItem('siteList'));
    display(siteList);
}
function addSite(){
    if (siteNameValidation()==true && URLValidation()==true){
        var site={
            name:siteName.value,
            address:siteURL.value
        }
        siteList.push(site);
        localStorage.setItem('siteList',JSON.stringify(siteList));
        display(siteList);
        clearForm();
    }else{
       showAlert();
    }
}
function display(sites){
    var cartona=``;
    for(var i=0;i<sites.length;i++){
        cartona+=`<tr>
        <td>${i+1}</td>
        <td>${sites[i].name}</td>
        <td>
            <button class="btn btn-success">
                <i class="fa-solid fa-eye pe-2"></i>
                visit
            </button>
        </td>
        <td>
            <button class="btn btn-danger" onclick="deleteSite(${i})">
                <i class="fa-solid fa-trash-can"></i>
                Delete
            </button>
        </td>
    </tr>`
    }
    document.getElementById('tBody').innerHTML=cartona;
}
function clearForm(){
    siteName.value="";
    siteURL.value="";
}
function deleteSite(index){
    siteList.splice(index,1);
    localStorage.setItem('siteList',JSON.stringify(siteList));
    display(siteList);

}
 function siteNameValidation(){
    var regex=/^[a-z]{3,}$/;
  
    if(regex.test(siteName.value)==true){
        siteName.style.border=" 4px solid #BFD3BB"
        return true;

    }else{
        siteName.style.border=" 4px solid #EB8F95"
        return false;
    }
 }
 function URLValidation(){
    var regex=/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/
    if(regex.test(siteURL.value)==true){
        siteURL.style.border=" 4px solid #BFD3BB"
        return true;
        
    } else{
        siteURL.style.border=" 4px solid #EB8F95"
        return false;
    }
}
 var lightBoxContainer=document.getElementById('lightBoxContainer');
function closeAlert(){
    lightBoxContainer.classList.add("d-none")
    
}
function showAlert(){
    lightBoxContainer.classList.replace("d-none","d-flex")
    
}