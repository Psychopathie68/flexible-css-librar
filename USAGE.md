# 🎨 Flexible CSS Library - Guide Ultra-Flexible

## 🚀 La Bibliothèque CSS qui s'adapte à TOUS les styles de sites

Cette bibliothèque CSS est conçue pour s'adapter à **TOUS** les types de sites web :
- 🏢 **Sites corporate/professionnels**
- 🎨 **Sites créatifs/artistiques** 
- 💻 **Sites tech/startup**
- 🏪 **Sites e-commerce**
- 📱 **Sites mobiles**
- 🎭 **Sites vintage/rétro**
- 🌿 **Sites nature/écologiques**
- 💎 **Sites luxe/premium**
- 🌙 **Sites sombres**
- ✨ **Sites minimalistes**

## 📦 Installation

```html
<!-- Ajouter dans le <head> de votre HTML -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Psychopathie68/flexible-css-librar@main/dist/flexible-css.css">
```

## 🎯 Changer de Thème en 1 Ligne !

### Thèmes Prédéfinis

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

## 🎨 Exemples par Style de Site

### 🏢 Site Corporate/Professionnel
```html
<html data-theme="corporate">
<head>
    <title>Mon Entreprise</title>
    <link rel="stylesheet" href="flexible-css.css">
</head>
<body>
    <div class="container">
        <h1>Notre Entreprise</h1>
        
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

### 🎨 Site Créatif/Artistique
```html
<html data-theme="creative">
<head>
    <title>Mon Portfolio</title>
    <link rel="stylesheet" href="flexible-css.css">
</head>
<body>
    <div class="container">
        <h1>Mon Portfolio Créatif</h1>
        
        <div class="alert alert-primary">
            <strong>Nouveau :</strong> Découvrez mes dernières créations !
        </div>
        
        <div class="row">
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h3>Design Graphique</h3>
                        <span class="badge badge-primary">Créatif</span>
                        <p>Logos, identités visuelles, illustrations...</p>
                    </div>
                </div>
            </div>
            
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h3>Photographie</h3>
                        <span class="badge badge-success">Art</span>
                        <p>Portraits, paysages, événements...</p>
                    </div>
                </div>
            </div>
            
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h3>Web Design</h3>
                        <span class="badge badge-warning">Innovant</span>
                        <p>Sites web modernes et responsives...</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
```

### 💻 Site Tech/Startup
```html
<html data-theme="tech">
<head>
    <title>Ma Startup Tech</title>
    <link rel="stylesheet" href="flexible-css.css">
</head>
<body>
    <div class="container">
        <h1>🚀 Innovation Tech</h1>
        
        <div class="alert alert-info">
            <strong>Beta Test :</strong> Testez notre nouvelle fonctionnalité !
        </div>
        
        <div class="row">
            <div class="col-6">
                <div class="card">
                    <div class="card-header">
                        <h3>Fonctionnalités</h3>
                    </div>
                    <div class="card-body">
                        <div class="progress">
                            <div class="progress-bar" style="width: 85%">85%</div>
                        </div>
                        <p>Développement en cours...</p>
                        <button class="btn btn-primary">Tester</button>
                    </div>
                </div>
            </div>
            
            <div class="col-6">
                <div class="card">
                    <div class="card-body">
                        <h3>API Status</h3>
                        <span class="badge badge-success">Online</span>
                        <p>Tous les services fonctionnent parfaitement.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
```

### 🏪 Site E-commerce
```html
<html data-theme="vibrant">
<head>
    <title>Ma Boutique</title>
    <link rel="stylesheet" href="flexible-css.css">
</head>
<body>
    <div class="container">
        <h1>🛍️ Ma Boutique</h1>
        
        <div class="alert alert-success">
            <strong>Promo :</strong> -20% sur tous les produits !
        </div>
        
        <div class="row">
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h3>Produit 1</h3>
                        <span class="badge badge-danger">-20%</span>
                        <p>Description du produit...</p>
                        <button class="btn btn-primary">Ajouter au panier</button>
                    </div>
                </div>
            </div>
            
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h3>Produit 2</h3>
                        <span class="badge badge-warning">Nouveau</span>
                        <p>Description du produit...</p>
                        <button class="btn btn-success">Acheter maintenant</button>
                    </div>
                </div>
            </div>
            
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h3>Panier</h3>
                        <span class="badge badge-primary">3 articles</span>
                        <p>Total : €99.99</p>
                        <button class="btn btn-danger">Commander</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
```

### 🌙 Site Sombre
```html
<html data-theme="dark">
<head>
    <title>Mon Site Sombre</title>
    <link rel="stylesheet" href="flexible-css.css">
</head>
<body>
    <div class="container">
        <h1>🌙 Mode Sombre</h1>
        
        <div class="alert alert-info">
            <strong>Info :</strong> Interface adaptée pour vos yeux !
        </div>
        
        <div class="row">
            <div class="col-6">
                <div class="card">
                    <div class="card-header">
                        <h3>Fonctionnalités</h3>
                    </div>
                    <div class="card-body">
                        <p>Interface sombre pour un confort optimal.</p>
                        <button class="btn btn-primary">Explorer</button>
                    </div>
                </div>
            </div>
            
            <div class="col-6">
                <div class="card">
                    <div class="card-body">
                        <h3>Statistiques</h3>
                        <div class="progress">
                            <div class="progress-bar" style="width: 75%">75%</div>
                        </div>
                        <p>Performance optimale</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
```

### ✨ Site Minimaliste
```html
<html data-theme="minimal">
<head>
    <title>Site Minimaliste</title>
    <link rel="stylesheet" href="flexible-css.css">
</head>
<body>
    <div class="container">
        <h1>Simplicité</h1>
        
        <div class="row">
            <div class="col-8">
                <div class="card">
                    <div class="card-body">
                        <h3>Design épuré</h3>
                        <p>L'essentiel, rien de plus.</p>
                        <button class="btn btn-primary">Découvrir</button>
                    </div>
                </div>
            </div>
            
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h3>Contact</h3>
                        <form>
                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="Email">
                            </div>
                            <button type="submit" class="btn btn-primary">Envoyer</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
```

## 🎨 Personnalisation Avancée

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

### Changer de police selon le thème
```css
/* Police moderne */
[data-theme="modern"] {
    --font-family-base: 'Inter', sans-serif;
}

/* Police classique */
[data-theme="vintage"] {
    --font-family-base: 'Georgia', serif;
}

/* Police tech */
[data-theme="tech"] {
    --font-family-base: 'SF Mono', monospace;
}
```

## 🚀 Composants Universels

### Boutons adaptatifs
```html
<!-- S'adapte automatiquement au thème -->
<button class="btn btn-primary">Bouton Principal</button>
<button class="btn btn-secondary">Bouton Secondaire</button>
<button class="btn btn-success">Succès</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-warning">Attention</button>
<button class="btn btn-info">Information</button>
```

### Cartes adaptatives
```html
<!-- Style automatiquement adapté au thème -->
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

### Alertes contextuelles
```html
<!-- Couleurs adaptées au thème -->
<div class="alert alert-primary">Information</div>
<div class="alert alert-success">Succès</div>
<div class="alert alert-danger">Erreur</div>
<div class="alert alert-warning">Attention</div>
<div class="alert alert-info">Info</div>
```

## 📱 Responsive Universel

Tous les composants sont automatiquement responsives :
- **Mobile** : < 768px
- **Tablet** : 768px - 1024px  
- **Desktop** : > 1024px

```html
<!-- Grille responsive automatique -->
<div class="container">
    <div class="row">
        <div class="col-12 col-md-6 col-lg-4">
            <!-- S'adapte automatiquement -->
        </div>
    </div>
</div>
```

## 🎯 Avantages de cette Bibliothèque

✅ **10 thèmes prédéfinis** pour tous les styles de sites  
✅ **Changement de thème en 1 ligne** avec `data-theme`  
✅ **Composants universels** qui s'adaptent automatiquement  
✅ **Responsive par défaut** sur tous les écrans  
✅ **Personnalisation facile** avec les variables CSS  
✅ **Léger et performant**  
✅ **Compatible tous navigateurs**  

## 🚀 Prêt à utiliser !

Choisissez votre thème et commencez à créer votre site :

```html
<html data-theme="votre-theme">
<head>
    <title>Mon Site</title>
    <link rel="stylesheet" href="flexible-css.css">
</head>
<body>
    <!-- Votre contenu ici -->
</body>
</html>
```

**Cette bibliothèque s'adapte à TOUS vos besoins !** 🎨✨ 