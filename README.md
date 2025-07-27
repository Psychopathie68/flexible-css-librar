# 🎨 Flexible CSS Library

> **La bibliothèque CSS ultra-flexible avec 10 thèmes prédéfinis pour TOUS les styles de sites web**

[![npm version](https://badge.fury.io/js/flexible-css-library.svg)](https://badge.fury.io/js/flexible-css-library)
[![GitHub stars](https://img.shields.io/github/stars/Psychopathie68/flexible-css-librar.svg)](https://github.com/Psychopathie68/flexible-css-librar)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🚀 Installation

### Via CDN (Recommandé)
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flexible-css-library@1.0.0/dist/flexible-css.css">
```

### Via NPM
```bash
npm install flexible-css-library
```

### Via Yarn
```bash
yarn add flexible-css-library
```

## 🎯 Utilisation Ultra-Simple

### Changer de thème en 1 ligne !
```html
<!-- Thème moderne (par défaut) -->
<html data-theme="modern">

<!-- Thème sombre -->
<html data-theme="dark">

<!-- Thème minimaliste -->
<html data-theme="minimal">

<!-- Thème coloré/vibrant -->
<html data-theme="vibrant">

<!-- Thème professionnel -->
<html data-theme="corporate">

<!-- Thème créatif -->
<html data-theme="creative">

<!-- Thème tech/startup -->
<html data-theme="tech">

<!-- Thème vintage/rétro -->
<html data-theme="vintage">

<!-- Thème nature/écologique -->
<html data-theme="nature">

<!-- Thème luxe/premium -->
<html data-theme="luxury">
```

### Exemple complet
```html
<!DOCTYPE html>
<html data-theme="corporate">
<head>
    <title>Mon Site</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flexible-css-library@1.0.0/dist/flexible-css.css">
</head>
<body>
    <div class="container">
        <h1>Mon Site Professionnel</h1>
        
        <div class="row">
            <div class="col-6">
                <div class="card">
                    <div class="card-header">
                        <h3>Nos Services</h3>
                    </div>
                    <div class="card-body">
                        <p>Solutions professionnelles adaptées à vos besoins.</p>
                        <button class="btn btn-primary">En savoir plus</button>
                    </div>
                </div>
            </div>
            
            <div class="col-6">
                <div class="card">
                    <div class="card-body">
                        <h3>Contact</h3>
                        <form>
                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="Votre email">
                            </div>
                            <button type="submit" class="btn btn-primary">Nous contacter</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
```

## 🎨 Thèmes Disponibles

### 🎨 Moderne
Parfait pour les sites web contemporains avec un design épuré et professionnel.

### 🌙 Sombre
Interface sombre pour un confort optimal, idéal pour les applications nocturnes.

### ✨ Minimaliste
Design épuré et fonctionnel, l'essentiel rien de plus.

### 🌈 Coloré/Vibrant
Sites e-commerce dynamiques avec des couleurs vives et attrayantes.

### 🏢 Corporate
Sites professionnels avec un style sérieux et crédible.

### 🎭 Créatif
Portfolios et sites artistiques avec des couleurs expressives.

### 💻 Tech
Startups et sites technologiques avec un style moderne et innovant.

### 🎭 Vintage
Sites rétro et classiques avec un charme nostalgique.

### 🌿 Nature
Sites écologiques avec des couleurs naturelles et apaisantes.

### 💎 Luxe
Sites premium et exclusifs avec un style sophistiqué.

## 🚀 Composants Universels

### Boutons
```html
<button class="btn btn-primary">Principal</button>
<button class="btn btn-secondary">Secondaire</button>
<button class="btn btn-success">Succès</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-warning">Attention</button>
<button class="btn btn-info">Information</button>
```

### Cartes
```html
<div class="card">
    <div class="card-header">
        <h3>Titre de la carte</h3>
    </div>
    <div class="card-body">
        <p>Contenu de la carte</p>
        <button class="btn btn-primary">Action</button>
    </div>
</div>
```

### Alertes
```html
<div class="alert alert-primary">Information</div>
<div class="alert alert-success">Succès</div>
<div class="alert alert-danger">Erreur</div>
<div class="alert alert-warning">Attention</div>
<div class="alert alert-info">Info</div>
```

### Formulaires
```html
<form>
    <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" class="form-control" placeholder="votre@email.com">
    </div>
    <button type="submit" class="btn btn-primary">Envoyer</button>
</form>
```

### Badges
```html
<span class="badge badge-primary">Nouveau</span>
<span class="badge badge-success">Validé</span>
<span class="badge badge-danger">Urgent</span>
```

### Barres de progression
```html
<div class="progress">
    <div class="progress-bar" style="width: 75%">75%</div>
</div>
```

### Grille responsive
```html
<div class="container">
    <div class="row">
        <div class="col-12 col-md-6 col-lg-4">
            <!-- Contenu responsive -->
        </div>
    </div>
</div>
```

## 🎨 Personnalisation

### Créer son propre thème
```css
:root {
    /* Couleurs personnalisées */
    --primary-color: #votre-couleur;
    --secondary-color: #votre-couleur;
    --success-color: #votre-couleur;
    --danger-color: #votre-couleur;
    --warning-color: #votre-couleur;
    --info-color: #votre-couleur;
    
    /* Typographie personnalisée */
    --font-family-base: 'Votre Police', sans-serif;
    --font-family-heading: 'Votre Police', serif;
    
    /* Espacements personnalisés */
    --spacing-md: 1.5rem;
    --spacing-lg: 2rem;
    
    /* Bordures personnalisées */
    --border-radius-md: 0.5rem;
    --border-radius-lg: 1rem;
}
```

## 📱 Responsive

Tous les composants sont automatiquement responsives :
- **Mobile** : < 768px
- **Tablet** : 768px - 1024px  
- **Desktop** : > 1024px

## 🎯 Avantages

✅ **10 thèmes prédéfinis** pour tous les styles de sites  
✅ **Changement de thème en 1 ligne** avec `data-theme`  
✅ **Composants universels** qui s'adaptent automatiquement  
✅ **Responsive par défaut** sur tous les écrans  
✅ **Personnalisation facile** avec les variables CSS  
✅ **Léger et performant**  
✅ **Compatible tous navigateurs**  

## 📖 Documentation

- [Guide d'utilisation complet](USAGE.md)
- [Démonstration interactive](demo-themes.html)
- [GitHub Repository](https://github.com/Psychopathie68/flexible-css-librar)

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
- 🐛 Signaler un bug
- 💡 Proposer une fonctionnalité
- 📝 Améliorer la documentation
- 🎨 Ajouter de nouveaux thèmes

## 📄 Licence

MIT License - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🙏 Remerciements

Merci à tous les contributeurs qui ont participé à ce projet !

---

**Cette bibliothèque s'adapte à TOUS vos besoins !** 🎨✨ 