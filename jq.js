$(document).ready (function(){
	$("#recup").hide();
	$("#pswd_info").hide();
	   $("#recupMdp").click(function(){
		   $("#login").hide();
		   $("#MDP").hide();
		   $("#recup").show();
		   return false;
	   })
	  
});
 function recupValeur(valeurChamp) {

if	(valeurChamp.length<6){
	$("#pswd_info").show();
	return false;
}

};

	
