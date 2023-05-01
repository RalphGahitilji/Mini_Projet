<?php
//Recuperation des donnees du formulaire
    $nom=$_POST['nom'];
    $prenom=$_POST['prenom'];
    $birth=$_POST['birth'];

//Connexion a la base de donnees
    require'connexion.php';
//preparation a la requette SQL de la base de donnees
    $requete="INSERT INTO `personne`(nom,prenom,birth) VALUES('$nom','$prenom','$birth')";
    $query=mysqli_query($connexion,$requete);
    if(isset($query)){
        echo "<h1>Insertion avec success</h1>";
    }
    else{
        echo"<h1>Erreur d'insertion</h1>";
    }
?>