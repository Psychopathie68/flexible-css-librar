# Guide de Démarrage Rapide - Flexible CSS Library

## 🚀 Installation en 30 secondes

### 1. Inclure le CSS
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flexible-css-library@1.0.0/dist/flexible-css.min.css">
```

### 2. Structure HTML de base
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Projet</title>
    <link rel="stylesheet" href="flexible-css.min.css">
</head>
<body>
    <div class="container">
        <h1>Bonjour le monde !</h1>
        <button class="btn btn-primary">Mon premier bouton</button>
    </div>
</body>
</html>
```

## 🎯 Exemples rapides

### Page d'accueil simple
```html
<nav class="navbar">
    <div class="container">
        <a class="navbar-brand" href="#">Mon Site</a>
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="#">Accueil</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">À propos</a>
            </li>
        </ul>
    </div>
</nav>

<div class="container">
    <div class="row">
        <div class="col-md-8">
            <h1>Bienvenue</h1>
            <p>Contenu principal de votre page.</p>
            <button class="btn btn-primary">En savoir plus</button>
        </div>
        <div class="col-md-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Sidebar</h5>
                    <p class="card-text">Contenu de la sidebar.</p>
                </div>
            </div>
        </div>
    </div>
</div>
```

### Formulaire de contact
```html
<div class="container">
    <h2>Contactez-nous</h2>
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label class="form-label">Nom</label>
                <input type="text" class="form-control" placeholder="Votre nom">
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" placeholder="votre@email.com">
            </div>
        </div>
    </div>
    <div class="form-group">
        <label class="form-label">Message</label>
        <textarea class="form-control" rows="5" placeholder="Votre message"></textarea>
    </div>
    <button class="btn btn-primary">Envoyer</button>
</div>
```

### Galerie de produits
```html
<div class="container">
    <h2>Nos Produits</h2>
    <div class="row">
        <div class="col-md-4 mb-md">
            <div class="card">
                <img src="produit1.jpg" class="card-img-top" alt="Produit 1">
                <div class="card-body">
                    <h5 class="card-title">Produit 1</h5>
                    <p class="card-text">Description du produit.</p>
                    <button class="btn btn-primary">Acheter</button>
                </div>
            </div>
        </div>
        <div class="col-md-4 mb-md">
            <div class="card">
                <img src="produit2.jpg" class="card-img-top" alt="Produit 2">
                <div class="card-body">
                    <h5 class="card-title">Produit 2</h5>
                    <p class="card-text">Description du produit.</p>
                    <button class="btn btn-primary">Acheter</button>
                </div>
            </div>
        </div>
        <div class="col-md-4 mb-md">
            <div class="card">
                <img src="produit3.jpg" class="card-img-top" alt="Produit 3">
                <div class="card-body">
                    <h5 class="card-title">Produit 3</h5>
                    <p class="card-text">Description du produit.</p>
                    <button class="btn btn-primary">Acheter</button>
                </div>
            </div>
        </div>
    </div>
</div>
```

## 🎨 Personnalisation rapide

### Changer les couleurs
```css
:root {
    --primary-color: #ff6b6b;
    --secondary-color: #4ecdc4;
    --success-color: #45b7d1;
}
```

### Changer la police
```css
:root {
    --font-family-base: 'Roboto', sans-serif;
    --font-family-heading: 'Playfair Display', serif;
}
```

### Utiliser un thème prédéfini
```html
<html data-theme="dark">
    <!-- Votre contenu -->
</html>
```

## 📱 Responsive en un coup d'œil

| Classe | Mobile | Tablet | Desktop |
|--------|--------|--------|---------|
| `col-12` | 100% | 100% | 100% |
| `col-md-6` | 100% | 50% | 50% |
| `col-lg-4` | 100% | 100% | 33.33% |
| `d-none d-md-block` | Caché | Visible | Visible |

## 🛠️ Classes utiles à retenir

### Layout
- `container` - Conteneur centré
- `row` - Ligne de grille
- `col-*` - Colonnes responsive

### Espacement
- `m-*` - Marges (xs, sm, md, lg, xl)
- `p-*` - Padding (xs, sm, md, lg, xl)
- `gap-*` - Espacement entre éléments

### Couleurs
- `text-*` - Couleurs de texte
- `bg-*` - Couleurs de fond
- `border-*` - Couleurs de bordure

### Affichage
- `d-flex` - Flexbox
- `d-none` - Caché
- `text-center` - Texte centré

## ⚡ Prochaines étapes

1. **Explorer la documentation complète** - Consultez le README.md
2. **Voir les exemples** - Ouvrez docs/index.html
3. **Personnaliser** - Modifiez les variables CSS
4. **Contribuer** - Rejoignez le projet sur GitHub

## 🆘 Besoin d'aide ?

- 📖 **Documentation complète** : README.md
- 🎯 **Exemples interactifs** : docs/index.html
- 🐛 **Signaler un bug** : GitHub Issues
- 💬 **Questions** : GitHub Discussions

---

**Vous êtes prêt à créer de beaux sites web ! 🎨** 