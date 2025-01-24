# Redux-React-web-application-ArgentBank-project

Dixième projet du parcours **"Intégrateur web"** chez OpenClassroom. <br> L'objectif est d'implémentez le front-end d'une application bancaire avec React et Redux.

![Image de présentation du projet](https://github.com/user-attachments/assets/8583cddc-a969-492f-ba4e-6d2d8f57a6e4)

## Objectifs du Projet

## Phase 1: Créer un système d'authentification

- **Développement d'une application front-end complète avec React** : Implémenter un tableau de bord utilisateur responsive, basé sur des maquettes. Utiliser React pour créer des composants réutilisables et optimisés.
- **Gestion des données avec Redux** : Mettre en place une gestion d'état centralisée et cohérente dans l'application. Comprendre l'importance de Redux pour gérer des applications avec des flux de données complexes.
- **Intégration front-end/back-end via API REST** : Configurer et consommer des endpoints API pour la communication entre le client et le serveur. Tester les routes API fournies avec Swagger et Postman.
- **Authentification des utilisateurs** : Implémenter les fonctionnalités d'inscription, de connexion, et de déconnexion. Assurer la sécurité et la gestion des erreurs pour les connexions utilisateur.
- **Green Code et optimisation des performances** : Optimiser les images et leur poids pour un chargement rapide. Créer des composants réutilisables pour limiter la redondance et améliorer l'efficacité.

## Phase 2: Modéliser l'API pour la gestion des transactions

- **Documentation et modélisation des routes API avec Swagger** : Décrire les endpoints nécessaires pour les fonctionnalités de l'application. Exporter un fichier YAML décrivant les routes pour la phase 2 (transactions).
- **Gestion des transactions utilisateur** : Concevoir des endpoints API pour afficher et modifier les transactions utilisateur. Proposer un design API en tenant compte des bonnes pratiques.
- **Déploiement et gestion du projet avec des outils modernes** : Utiliser Vite pour initialiser et gérer le projet React. Travailler avec un dépôt GitHub, gérer les issues et suivre l'avancement du projet.

## Technologies Utilisées

- React
- React Router
- Redux
- SASS
- Node.js
- Vite
- MongoDB

## Installation :

### Prérequis :

Argent Bank utilise la stack technique suivante :

- [Git](https://git-scm.com)
- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

### Installation

Cloner le repository:

- git clone https://github.com/QuentinDch/ArgentBank-opc-p10

### Installation et lancement du Back-end :

Veuillez vous assurer d'avoir les bonnes versions et de télécharger les deux packages. Vous pouvez vérifier cela en utilisant les commandes suivantes dans votre terminal :

```bash
# Check Node.js version
node --version

# Check Mongo version
mongo --version
```

1. Faites un fork de ce dépôt
1. Clonez le dépôt sur votre ordinateur
1. Ouvrez une fenêtre de terminal dans le projet cloné
1. Exécutez les commandes suivantes :

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev:server

# Populate database with two users
npm run populate-db
```

Votre serveur devrait maintenant fonctionner à l'adresse http://localhost:3001, et vous devriez avoir deux utilisateurs dans votre base de données MongoDB !

## Données de la base de données peuplée

Une fois que vous exécutez le script populate-db, vous devriez avoir deux utilisateurs dans votre base de données :

### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

## API Documentation

Pour en savoir plus sur le fonctionnement de l'API, une fois que vous avez démarré votre environnement local, vous pouvez visiter : http://localhost:3001/api-docs

### Installation et lancement du Front-end :

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev
```

Le front-end sera lancé à l'URL suivante : http://localhost:3000/
