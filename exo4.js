
  // Déclaration des variables
var PU, QTECOM, PORT, TOT, REM, TR, PAP;

// Saisie du prix unitaire et de la quantité commandée
PU = parseInt(prompt("Entrez le prix à l'unité"));
QTECOM = parseInt(prompt("Entrez la quantité commandée"));

// Initialisation des variables
PORT = 0;
TOT = PU * QTECOM;
REM = 0;
TR = TOT - REM;

// Calculs en fonction des conditions
if (TOT < 100) {
    REM = 0;
    TR = TOT - REM;
    PAP = TR + PORT + 6;
    
} else if (TOT >= 100 && TOT <= 200) {
    REM = (5 * TOT) / 100;
    TR = TOT - REM;
    PAP = TR + PORT + 6;
    } 
    
    
    else if (TOT >= 100 && TOT <= 300) {
    PAP = TR + 6;}
    


        else if (TR >= 300 && TR > 500) {
         REM = (10 * TOT) / 100;
        TR = TOT - REM;
        PORT = (2 * TR) / 100;
        PAP = TR + PORT;}


        if (TR < 500) {
        REM = (10 * TOT) / 100;
         TR = TOT - REM;
        PAP = TR + PORT}

 

        if (TR >500){
        PORT =0;
        alert("Prix total de " + TOT + "€ avec une remise de 10% (-" + REM + "€) soit " + TR + "€ et frais de port " + PORT + "€ à payer soit au total"+ PAP+"€");}

        else if ( TR < 500){
        PORT = (2 * TR) / 100;
        alert("Prix total de " + TOT + "€ avec une remise de 10% (-" + REM + "€) soit " + TR + "€ et frais de port " + PORT + "€ à payer.soit au total"+ PAP+"€");}
