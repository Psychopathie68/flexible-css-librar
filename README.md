# Flexible CSS Library

Une bibliothèque CSS moderne, flexible et configurable pour tous types de sites web. Cette bibliothèque offre un système de design complet avec des composants réutilisables, un système de grille responsive et des utilitaires CSS.

## 🚀 Caractéristiques

- **Système de variables CSS** pour une personnalisation facile
- **Composants réutilisables** (boutons, cartes, formulaires, etc.)
- **Système de grille responsive** avec Flexbox
- **Utilitaires CSS** complets
- **Thèmes prédéfinis** (dark, minimal, colorful)
- **Animations et transitions** fluides
- **Accessibilité** intégrée
- **Support mobile-first**

## 📦 Installation

### Via CDN
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flexible-css-library@1.0.0/dist/flexible-css.min.css">
```

### Via npm
```bash
npm install flexible-css-library
```

### Téléchargement direct
Téléchargez les fichiers CSS depuis le dossier `dist/` et incluez-les dans votre projet.

## 🎨 Configuration

### Variables CSS personnalisées
Vous pouvez personnaliser l'apparence en redéfinissant les variables CSS :

```css
:root {
  --primary-color: #your-color;
  --font-family-base: 'Your Font', sans-serif;
  --border-radius: 8px;
  --spacing-md: 1.5rem;
}
```

### Thèmes prédéfinis
Utilisez les thèmes prédéfinis en ajoutant l'attribut `data-theme` :

```html
<!-- Thème sombre -->
<html data-theme="dark">

<!-- Thème minimal -->
<html data-theme="minimal">

<!-- Thème coloré -->
<html data-theme="colorful">
```

## 📐 Système de Grille

### Container
```html
<div class="container">
  <!-- Contenu centré avec largeur maximale -->
</div>

<div class="container-fluid">
  <!-- Contenu pleine largeur -->
</div>
```

### Grille responsive
```html
<div class="row">
  <div class="col-12 col-md-6 col-lg-4">
    <!-- Colonne qui prend 12/12 sur mobile, 6/12 sur tablette, 4/12 sur desktop -->
  </div>
</div>
```

### Alignement
```html
<div class="row row-center row-middle">
  <!-- Centré horizontalement et verticalement -->
</div>
```

## 🎯 Composants

### Boutons
```html
<!-- Boutons de base -->
<button class="btn btn-primary">Bouton principal</button>
<button class="btn btn-secondary">Bouton secondaire</button>
<button class="btn btn-success">Succès</button>
<button class="btn btn-danger">Danger</button>

<!-- Boutons outline -->
<button class="btn btn-outline-primary">Outline principal</button>

<!-- Tailles -->
<button class="btn btn-primary btn-sm">Petit</button>
<button class="btn btn-primary btn-lg">Grand</button>

<!-- Boutons avec icônes -->
<button class="btn btn-primary btn-icon">
  <i class="icon">★</i>
</button>

<!-- Boutons de chargement -->
<button class="btn btn-primary btn-loading">Chargement...</button>
```

### Cartes
```html
<div class="card">
  <div class="card-header">
    <h5 class="card-title">Titre de la carte</h5>
  </div>
  <div class="card-body">
    <p class="card-text">Contenu de la carte</p>
    <a href="#" class="btn btn-primary">Action</a>
  </div>
  <div class="card-footer">
    Pied de carte
  </div>
</div>

<!-- Cartes avec images -->
<div class="card">
  <img src="image.jpg" class="card-img-top" alt="Image">
  <div class="card-body">
    <h5 class="card-title">Titre</h5>
    <p class="card-text">Description</p>
  </div>
</div>

<!-- Cartes avec overlay -->
<div class="card">
  <img src="image.jpg" alt="Image">
  <div class="card-img-overlay">
    <h5 class="card-title">Titre sur image</h5>
  </div>
</div>
```

### Formulaires
```html
<div class="form-group">
  <label class="form-label">Nom</label>
  <input type="text" class="form-control" placeholder="Votre nom">
  <div class="form-text">Aide pour le champ</div>
</div>

<div class="form-check">
  <input type="checkbox" class="form-check-input" id="check">
  <label class="form-check-label" for="check">Accepter les conditions</label>
</div>
```

### Alertes
```html
<div class="alert alert-success">
  Opération réussie !
</div>

<div class="alert alert-danger">
  Une erreur s'est produite.
</div>
```

### Badges
```html
<span class="badge badge-primary">Nouveau</span>
<span class="badge badge-success">Actif</span>
<span class="badge badge-warning">En attente</span>
```

### Navigation
```html
<!-- Navigation simple -->
<ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" href="#">Accueil</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">À propos</a>
  </li>
</ul>

<!-- Onglets -->
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" href="#">Onglet 1</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Onglet 2</a>
  </li>
</ul>
```

### Navbar
```html
<nav class="navbar navbar-expand-lg">
  <div class="container">
    <a class="navbar-brand" href="#">Logo</a>
    
    <button class="navbar-toggler" type="button">
      <span>☰</span>
    </button>
    
    <div class="navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Accueil</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

## 🛠️ Utilitaires

### Espacement
```html
<!-- Margin -->
<div class="m-md">Marge moyenne</div>
<div class="mt-lg">Marge top large</div>
<div class="mb-sm">Marge bottom petite</div>

<!-- Padding -->
<div class="p-lg">Padding large</div>
<div class="px-md">Padding horizontal moyen</div>
<div class="py-sm">Padding vertical petit</div>
```

### Couleurs
```html
<!-- Couleurs de texte -->
<p class="text-primary">Texte principal</p>
<p class="text-success">Texte succès</p>

<!-- Couleurs de fond -->
<div class="bg-primary">Fond principal</div>
<div class="bg-light">Fond clair</div>
```

### Bordures
```html
<div class="border">Bordure</div>
<div class="border border-primary">Bordure colorée</div>
<div class="rounded">Coins arrondis</div>
<div class="rounded-lg">Coins très arrondis</div>
```

### Ombres
```html
<div class="shadow">Ombre normale</div>
<div class="shadow-lg">Ombre large</div>
<div class="shadow-none">Pas d'ombre</div>
```

### Typographie
```html
<p class="text-center">Texte centré</p>
<p class="text-uppercase">TEXTE EN MAJUSCULES</p>
<p class="font-weight-bold">Texte en gras</p>
<p class="font-size-lg">Texte plus grand</p>
```

### Affichage
```html
<div class="d-flex">Flexbox</div>
<div class="d-none">Caché</div>
<div class="d-md-block">Visible sur tablette+</div>
```

## 🎭 Animations

```html
<!-- Animations d'apparition -->
<div class="fade-in">Apparition en fondu</div>
<div class="slide-in-up">Glissement vers le haut</div>
<div class="scale-in">Agrandissement</div>

<!-- Transitions -->
<div class="transition">Transition normale</div>
<div class="transition-fast">Transition rapide</div>
```

## 📱 Responsive

La bibliothèque utilise une approche mobile-first avec des breakpoints :

- **sm**: 576px (petits écrans)
- **md**: 768px (tablettes)
- **lg**: 992px (desktop)
- **xl**: 1200px (grands écrans)
- **xxl**: 1400px (très grands écrans)

```html
<!-- Classes responsive -->
<div class="d-none d-md-block">Caché sur mobile, visible sur tablette+</div>
<div class="col-12 col-md-6 col-lg-4">Grille responsive</div>
<div class="text-center text-md-left">Centré sur mobile, aligné à gauche sur tablette+</div>
```

## 🎨 Personnalisation avancée

### Créer un thème personnalisé
```css
[data-theme="custom"] {
  --primary-color: #ff6b6b;
  --secondary-color: #4ecdc4;
  --bg-primary: #f8f9fa;
  --text-primary: #2c3e50;
  --border-radius: 12px;
  --shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}
```

### Variables disponibles
```css
/* Couleurs */
--primary-color, --secondary-color, --success-color, --danger-color
--warning-color, --info-color, --light-color, --dark-color

/* Typographie */
--font-family-base, --font-size-base, --font-weight-normal
--line-height-base

/* Espacement */
--spacing-xs, --spacing-sm, --spacing-md, --spacing-lg, --spacing-xl

/* Bordures */
--border-radius, --border-width, --border-color

/* Ombres */
--shadow-sm, --shadow, --shadow-md, --shadow-lg, --shadow-xl

/* Transitions */
--transition-fast, --transition-base, --transition-slow
```

## 🔧 Build

Pour compiler la bibliothèque :

```bash
# Installer les dépendances
npm install

# Build de développement
npm run dev

# Build de production
npm run build

# Lancer la documentation
npm run docs
```

## 📄 Licence

MIT License - voir le fichier LICENSE pour plus de détails.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## 📞 Support

Pour toute question ou problème :

- Ouvrez une issue sur GitHub
- Consultez la documentation en ligne
- Contactez-nous via email

---

**Flexible CSS Library** - Une bibliothèque CSS moderne et flexible pour tous vos projets web ! 🎨 