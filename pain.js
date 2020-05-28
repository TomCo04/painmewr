function calcul() {

	const poidsFarine = document.getElementById('farine').value;
	if (poidsFarine < 100 ){ 
		alert("sans déconner on mange plus de pain. Donc s'il te plait au moins 100g");
}
	else {
		var quantiteSel = Math.round((18/1000)*poidsFarine);
		var quantitelevure = Math.round((45/1000)*poidsFarine);
		var quantiteEau = Math.round((600/1000)*poidsFarine);
		console.log(poidsFarine,quantitelevure,quantiteEau,quantiteSel);
		document.getElementById('sel').innerHTML = quantiteSel;
		document.getElementById('levure').innerHTML = quantitelevure;
		document.getElementById('eau').innerHTML = quantiteEau;
}

}