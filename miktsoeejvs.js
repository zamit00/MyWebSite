function tshuva(k){
    
    const text = document.getElementById(k).innerText;
    const pElement = document.getElementById('tshuvak');
    pElement.innerText=text;
}
function gotohome(){
    window.location.href = 'https://zamit00.github.io/MyWebSite/';
   
}

let hishquizContainer = document.getElementById('hishquiz-container');

function navmiksoee(nav) { 
    const navm = document.getElementById(nav);
    if(nav==='hishquiz-container'){
        navm.style.display = "block";
    }
    else{
        document.getElementById('hishquiz-container').style.display = "none";
    document.getElementById('tshuvak').innerText='';
    }
     
}










 

