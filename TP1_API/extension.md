TP2

Sélectionnez la méthode GET.
Entrez cet URL:
https://jsonplaceholder.typicode.com/comments
Envoyez la requête.
Résultat : Vous recevrez une liste de tous les commentaires.

2. faire un POST sur les todos
Création d'une tâche "todos".
Sélectionnez la méthode POST.
Entrez l'URL suivante :
https://jsonplaceholder.typicode.com/todos

Dans le Body, choisir x-www-form-urlencoded.
Ajoutez les champs :
title	Ma tâche
completed	false
userId	1

 Et envoyer la requête.

Résultat : Une réponse affirmant la création de l'objet avec un identifiant auto-généré.

3. Requête PATCH 
Modifier le post existant (modifier title et body).
Sélectionnez la méthode PATCH.
Entrez l'URL suivante :
https://jsonplaceholder.typicode.com/posts/1
Dans body, choisir raw et sélectionner le format JSON.
Ajoutez le contenu :
{
  "title": "Titre mis à jour",
  "body": "Contenu mis à jour"
}
Envoyer la requête 
Résultat : Vous recevrez l'objet mis à jour.

4. Requête GET : commentaires associés au post 1
Sélectionnez la méthode GET.
https://jsonplaceholder.typicode.com/posts/1/comments
Cliquez sur Send.

Résultat : Une liste des commentaires associés au post 1.

5. Requête GET : photos de l'album 2
Sélectionnez la méthode GET.
https://jsonplaceholder.typicode.com/albums/2/photos
Cliquez sur Send.
Résultat : Une liste des photos associées à l'album 2.
