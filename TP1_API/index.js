require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Configurer la connexion à la base de données PostgreSQL
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Routes de l'API

// GET : Récupérer tous les articles
app.get('/articles', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM articles');
    res.json(result.rows);
  } catch (error) {
    res.status(500).send('Erreur lors de la récupération des articles.');
  }
});

// GET : Récupérer un article par ID
app.get('/articles/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM articles WHERE id = $1', [id]);
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).send('Article non trouvé.');
    }
  } catch (error) {
    res.status(500).send('Erreur lors de la récupération de l\'article.');
  }
});

// POST : Créer un nouvel article
app.post('/articles', async (req, res) => {
  const { title, content, author } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO articles (title, content, author) VALUES ($1, $2, $3) RETURNING *',
      [title, content, author]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).send('Erreur lors de la création de l\'article.');
  }
});

// PATCH : Mettre à jour un article
app.patch('/articles/:id', async (req, res) => {
  const { id } = req.params;
  const { title, content, author } = req.body;
  try {
    const result = await pool.query(
      'UPDATE articles SET title = $1, content = $2, author = $3 WHERE id = $4 RETURNING *',
      [title, content, author, id]
    );
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).send('Article non trouvé.');
    }
  } catch (error) {
    res.status(500).send('Erreur lors de la mise à jour de l\'article.');
  }
});

// DELETE : Supprimer un article
app.delete('/articles/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM articles WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).send('Article non trouvé.');
    }
  } catch (error) {
    res.status(500).send('Erreur lors de la suppression de l\'article.');
  }
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`API en cours d'exécution sur http://localhost:${port}`);
});