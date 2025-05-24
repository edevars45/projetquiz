<?php
//recupération du contenu des formulaires !!!! VERIFIER LA CONCORDANCE DES CHAMPS
$nom = $_POST["nom"];

$tel = $_POST["tel"];
$mail = $_POST["mail"];
$message = $_POST["message"];

$to = "devarsesther@gmail.com"; // Mettez l'email de réception
$from = "contact@d-webdesign.fr"; // Adresse email du destinataire de l'envoi, celui rattaché à votre domaine LWS.

// Ne pas modifier les lignes ci-dessous

$JOUR = date("Y-m-d");  // Jour de l'envoi de l'email
$HEURE = date("H:i"); // Heure d'envoi de l'email

$Subject = "CONTACT CLIENT - $JOUR $HEURE";
$mail_Data = "NOM - $nom \n";

$mail_Data .= "TELEPHONE - $tel \n";
$mail_Data .= "MAIL - $mail  \n";

$mail_Data .= "MESSAGE - $message \n";
// A adapter en fonction de nom et de nombre des rubriques
$mail_Data .= " $Subject
\n";
$mail_Data .= "
\n";
$mail_Data .= "
\n";
$mail_Data .= "Etc.
\n";
$mail_Data .= " \n";
$mail_Data .= " \n";
$headers  = "MIME-Version: 1.0 \n";
   $headers .= "Content-type: text/html; charset=utf-8 \n";
   $headers .= "From: $from  \n";
   $headers .= "Disposition-Notification-To: $from  \n";

   // Message de Priorité haute
   // -------------------------
   $headers .= "X-Priority: 1  \n";
   $headers .= "X-MSMail-Priority: High \n";

   $CR_Mail = TRUE;

   $CR_Mail = @mail ($to, $Subject, $mail_Data, $headers);
 
   if ($CR_Mail === FALSE)   echo " <h4 style="font-size:3em; font-family:Arial; margin-top: 5vh; padding:2vw;
   text-align:center; border: 3px black outset" >ERREUR ENVOI</h4>
 \n";
   else                      echo " <h4 style="font-size:3em; font-family:Arial; margin-top: 5vh; padding:2vw;
   text-align:center; border: 3px black outset" >MAIL ENVOYE</h4>
 \n";  
?>
<a href="default_index.html"> <h3 style="font-size:3em; font-family:Arial; margin-top: 5vh; padding:2vw;
 text-align:center; border: 3px black outset" >RETOUR</h3></a>