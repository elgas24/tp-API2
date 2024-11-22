TP2

Sélectionnez la méthode GET.
Entrez l'URL suivante :
https://jsonplaceholder.typicode.com/comments
Cliquez sur Send.
Résultat : Vous recevrez une liste de tous les commentaires.

2. Requête POST sur les todos
Créer une nouvelle tâche dans les "todos".
Sélectionnez la méthode POST.
Entrez l'URL suivante :
https://jsonplaceholder.typicode.com/todos

Dans l'onglet Body, choisir x-www-form-urlencoded.
Ajoutez les champs :
title	Ma tâche
completed	false
userId	1

Cliquez sur Send.

Résultat : Une réponse contenant l'objet créé avec un identifiant généré.

3. Requête PATCH sur les posts
Modifier un post existant (changer le title et le body).
Sélectionnez la méthode PATCH.
Entrez l'URL suivante :
https://jsonplaceholder.typicode.com/posts/1
Dans l'onglet Body, choisir raw et sélectionner le format JSON.
Ajoutez le contenu :
{
  "title": "Titre mis à jour",
  "body": "Contenu mis à jour"
}
Cliquez sur Send.
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