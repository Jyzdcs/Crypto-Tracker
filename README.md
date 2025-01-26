# Crypto Tracker

**Crypto Tracker** est une application web développée pour suivre les prix des **100 principales crypto-monnaies** en temps réel. Ce projet a été réalisé dans le but de maîtriser les appels API grâce à **TanStack Query** et d'explorer une architecture front-end moderne avec **React Router** et **SCSS**.

---

## 🚀 Objectifs du projet

1. Suivre les prix des crypto-monnaies les plus importantes avec des données à jour.
2. Comprendre et maîtriser les appels API grâce à **TanStack Query**.
3. Créer une interface utilisateur moderne, responsive et facile à utiliser.
4. Explorer l'intégration de **React Router** pour une navigation fluide.

---

## 🛠️ Technologies utilisées

- **React** : Construction de composants interactifs pour l'application.
- **TanStack Query** : Gestion avancée des appels API et des données asynchrones.
- **React Router** : Implémentation d'une navigation dynamique.
- **SCSS** : Stylisation avec un préprocesseur CSS avancé.
- **JavaScript ES6+** : Utilisation des fonctionnalités modernes de JavaScript.

---

## 📂 Structure du projet

```plaintext
📦 Crypto Tracker
├── 📂 src
│   ├── 📂 components        // Composants réutilisables
│   │   ├── 📂 Card          // Composants liés aux cartes des cryptos
│   │   ├── 📂 Header        // Composants pour le header de l'application
│   │   └── 📂 Search        // Composants pour la barre de recherche
│   │
│   ├── 📂 tools             // Fonctions utilitaires et helpers
│   │
│   ├── 📂 routes            // Pages principales de l'application
│   │   ├── home.lazy.jsx    // Chargement dynamique de la page d'accueil
│   │   └── home.scss        // Style SCSS pour la page d'accueil
│   │
│   ├── App.css              // Styles globaux pour l'application
│   ├── App.jsx              // Point d'entrée des composants React
│   ├── index.css            // Fichier de styles globaux
│   └── main.jsx             // Point d'entrée principal de React
```
## 🌟 Fonctionnalités principales
1. Tableau des crypto-monnaies :
   - Affiche les 100 principales crypto-monnaies (nom, prix, capitalisation boursière, variation).
   - Mise à jour des données en temps réel grâce à TanStack Query.
2. Page détail d’une crypto-monnaie :
   - Informations détaillées (historique des prix, volume d’échange).
   - Graphique interactif des prix.
3. Recherche dynamique :
   - Barre de recherche pour trouver une crypto-monnaie spécifique.
4. Gestion des erreurs et chargements :
   - Pages d’erreur en cas de problème API.
   - Indicateurs de chargement lors de la récupération des données.

## 💻 Comment lancer le projet ?

1. Clone le dépôt :
```bash
git clone https://github.com/Jyzdcs/Crypto-Tracker.git
cd crypto-tracker
```
2. Installer les dépendances :
```bash
npm install
```
3. Lance le serveur de développement :
```bash
npm start
```  
4. Ouvre ton navigateur sur http://localhost:3000.
