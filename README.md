# OpenClassrooms-Locationvelo
Student project from openclassrooms.com 

---- In English -----
Title :  Developer in Creation of Web
Applications

Project 3 : 

Front-End development : 
Single page application for bike reservation in the city of Nantes (France).  
Developed the project with Object-Oriented Programming in JavaScript and jQuery (no plugin used).
Brought in different API’s: Google Maps API, JCDecaux API, Session & Local storage, Canvas HTML5 API.
Built the responsive design with CSS3 Media Queries and Bootstrap. 

Currently finishing the responsive design for the project.


---------- In French --------  

Formation Développeur/se Web Junior - Projet 3

Enoncé : 

Vous devez développer une page de type "Single page Application" simulant la réservation de vélos dans une ville. Ces vélos sont répartis dans de nombreuses stations dans la ville. L'utilisateur doit pouvoir réserver un vélo depuis son navigateur (à condition qu'il reste des vélos disponibles à la station !). La réservation est alors temporairement enregistrée sur le navigateur du visiteur.

Cette application doit notamment, en s'appuyant sur JavaScript, afficher une carte avec la liste des stations de location de vélos disponibles dans la ville. 

L’application doit être développée en JavaScript côté client. Vous ne devez écrire aucun code côté serveur (l’utilisation de PHP ou d'un serveur Node.js, notamment, est interdite).

Vous allez développer une carte permettant de réserver des vélos
Vous allez développer une carte interactive permettant de réserver un vélo
Instructions
Diaporama
Vous devez afficher en haut de la page un diaporama de photos et de textes expliquant le fonctionnement de l'application. La logique du diaporama doit être écrite par vos soins. L’utilisation de tout plugin automatisant la logique de l’application est proscrite.

Le diaporama passe automatiquement à la diaporama suivante toutes les 5 secondes. L’utilisateur peut toutefois choisir de mettre le diaporama en pause. Il peut également reculer ou avancer manuellement à l’aide d’un clic de souris, ainsi qu’avec les touches gauche et droite de son clavier.

Carte des vélos
En-­dessous du diaporama se trouve une carte affichant en temps réel la liste des stations de location de vélos ainsi que leur disponibilité.  La localisation de toutes les stations de vélos est affichée à l’aide de marqueurs.

La localisation et l'état de chaque station (ouverte, en travaux, combien de vélos et de places sont disponibles, etc.) est fourni via la plateforme OpenData de JC Decaux.

Les données doivent provenir de l'API temps réel.

Un clic sur un marqueur affiche l’état de la station dans un panneau construit en HTML et CSS à côté de la carte. 

La carte doit être générée dynamiquement via un service de cartographie. Pour vous aider, voici une liste d'API de cartographie disponibles gratuitement :

OpenStreetMap
OpenLayers
LeafletJS
MapQuest
Mapbox
Réservation d'un vélo
Il doit être possible de réserver un vélo disponible à la station sélectionnée en :

indiquant son nom et son prénom,
signant dans un champ libre implémenté à l’aide de l’API HTML5 Canvas.
Vous devez écrire vous même le code du Canvas. Aucun plugin n’est autorisé. Vous devez être capable d’expliquer votre code lors de la soutenance.

Une fois la réservation validée,  un vélo est marqué comme réservé à cette station.

Pour ce projet, la réservation ne sera pas communiquée à un serveur. Seul le navigateur de l'utilisateur "retiendra" que le vélo a été réservé.

Les données de réservation seront stockées dans le navigateur à l’aide de l’API Web Storage et affichées en dessous du panneau. L'état de la réservation (s’il y en a une) est ainsi affiché, avec un décompte dynamique du temps restant avant expiration de la réservation.

Une réservation expire automatiquement au bout de 20 minutes et également lorsque le navigateur web se referme.

Le nom et le prénom sont toutefois conservés par le navigateur pour préremplir le formulaire de réservation lors d'un prochain usage, même si le navigateur a été fermé.

Il ne peut y avoir qu'une réservation à la fois. Si une nouvelle réservation a lieu, elle remplace la précédente.


Contraintes techniques
Le code JavaScript doit être conçu en Programmation Orientée Objet

Vous pouvez vous appuyer sur :

une librairie CSS telle que Bootstrap ou pure css,
une bibliothèque telle que jQuery pour manipuler le DOM.
Aucun plugin jQuery (ou autre) ne doit être utilisé pour la logique du diaporama.

Le code doit exploiter une API cartographique et l'API temps réel de API JCDecaux. Il doit également utiliser les API Web Storage et Canvas.

Ressources complémentaires
En plus des cours du parcours, vous pouvez consulter des ressources extérieures pour vous aider. Par exemple, la documentation du Mozilla Developer Network sur l’élément <canvas>  .

Livrables attendus
Une fois votre application terminée, vous devez l'héberger. Vous pouvez utiliser l’hébergeur de votre choix, à la condition qu’il n’ajoute pas de publicité dénaturant  votre page. Certains fournisseurs d’accès proposent un hébergement adapté. Des sites comme Heroku, Hostinger, Free, Nexgate, Github Pages, ou Google Sites offrent une solution gratuite adapté à ce projet. Vous pouvez également opter pour l’hébergeur payant de votre choix.

N'hésitez pas à demander conseil à votre mentor si vous avez des difficultés à choisir votre hébergeur.

Vous devez également livrer les éléments suivants :

Code source complet du projet (HTML/CSS/JavaScript et autres fichiers nécessaires, zippés)
URL du site hébergé
Support de présentation tel que défini pour la 2ème partie de la soutenance.
Les 2 premiers livrables devront être déposés sur le site au plus tard 48h avant la soutenance. Le support de présentation devra obligatoirement être présenté pendant la soutenance. 

Soutenance
La soutenance se déroule en 3 étapes :

Dans un premier temps, vous vous positionnez comme un développeur disposant de 15 minutes pour présenter son travail à son CTO, chef de projet ou responsable dans l’entreprise (selon le choix de votre mentor validateur).
Dans un second temps vous utiliserez votre support de présentation pour présenter, dans un temps compris entre 8 et 10 minutes :
ce que vous avez compris du rôle de développeur Front End et en quoi votre projet répond bien à ce rôle
les difficultés rencontrées et comment vous les avez résolues
les perspectives d’amélioration : comment feriez-vous évoluer l’application si vous étiez libre d'en fixer les contraintes ?
Enfin,  votre mentor reprendra pleinement son rôle de validateur pour un échange Questions/Réponses compris entre 5 et 10 minutes.
 

Référentiel d'évaluation
La validation du projet implique l'acquisition de l'ensemble des compétences qui y sont associées

Chaque compétence est validée si tous les critères d'évaluation définis dans ce référentiel sont validés.

Pour ce projet, la validation sera effectuée par un mentor validateur.

Votre mentor accompagnateur vous inscrira pour cette soutenance dès que vous aurez défini avec lui une date de complétion de ce projet. 

 Créer des objets simples en JavaScript, contenant des méthodes et des propriétés
Le code JavaScript est développé en Orienté Objet
Le diaporama est conforme et fonctionnel
Aucun plugin n’est utilisé pour la logique de l’application (Diaporama, Canvas, Carte)
Récupérer des données de formulaires en utilisant le langage JavaScript
Le canvas est fonctionnel
Le nom et prénom utilisent l’API LocalStorage
Les informations de réservations utilisent l’API SessionStorage
Les données de réservation sont affichées en dessous de la carte, s'il y a une réservation en cours
Faire des requêtes HTTP en langage JavaScript
La carte est récupérée dynamiquement depuis un web service cartographique
Les informations sur les stations utilisent l’API Live de JC Decaux
Présenter une réalisation de manière professionnelle
La soutenance est préparée
La tenue et l'attitude sont appropriées
Le support de présentation est soigné,  respecte la structure imposée et le temps imparti
Le temps de présentation est respecté
Les réponses aux questions sont pertinentes
 

Compétences à valider
Récupérer des données de formulaires en utilisant le langage JavaScript
Créer des objets simples en JavaScript, contenant des méthodes et des propriétés
Présenter une réalisation de manière professionnelle
Faire des requêtes HTTP en langage JavaScript



