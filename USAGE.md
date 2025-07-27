# Guide d'Utilisation - Flexible CSS Library

## 🚀 Installation Rapide

### 1. Télécharger le CSS
```html
<!-- Ajouter dans le <head> de votre HTML -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Psychopathie68/flexible-css-librar@main/dist/flexible-css.css">
```

### 2. Ou télécharger localement
```bash
# Télécharger le fichier CSS
wget https://raw.githubusercontent.com/Psychopathie68/flexible-css-librar/main/dist/flexible-css.css
```

## 🎯 Utilisation Simple

### Boutons
```html
<!-- Bouton primaire -->
<button class="btn btn-primary">Mon Bouton</button>

<!-- Bouton avec différentes tailles -->
<button class="btn btn-primary btn-sm">Petit</button>
<button class="btn btn-primary btn-lg">Grand</button>

<!-- Boutons avec couleurs -->
<button class="btn btn-success">Succès</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-warning">Attention</button>
```

### Cartes
```html
<div class="card">
    <div class="card-header">
        <h3>Titre de ma carte</h3>
    </div>
    <div class="card-body">
        <p>Contenu de ma carte</p>
        <button class="btn btn-primary">Action</button>
    </div>
</div>
```

### Alertes
```html
<div class="alert alert-primary">
    <strong>Info :</strong> Votre message ici.
</div>

<div class="alert alert-success">
    <strong>Succès :</strong> Opération réussie !
</div>

<div class="alert alert-danger">
    <strong>Erreur :</strong> Quelque chose s'est mal passé.
</div>
```

### Formulaires
```html
<form>
    <div class="form-group">
        <label for="nom">Nom</label>
        <input type="text" id="nom" class="form-control" placeholder="Votre nom">
    </div>
    
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
    <div class="progress-bar" style="width: 50%">50%</div>
</div>
```

### Toggles
```html
<label class="toggle">
    <input type="checkbox" class="toggle-input">
    <span class="toggle-switch"></span>
    <span class="toggle-label">Activer les notifications</span>
</label>
```

### Navigation
```html
<!-- Breadcrumbs -->
<nav class="breadcrumb">
    <span class="breadcrumb-item">
        <a href="#">Accueil</a>
    </span>
    <span class="breadcrumb-item active">
        Page actuelle
    </span>
</nav>

<!-- Pagination -->
<nav class="pagination">
    <a href="#" class="pagination-item pagination-prev">‹</a>
    <a href="#" class="pagination-item">1</a>
    <a href="#" class="pagination-item active">2</a>
    <a href="#" class="pagination-item">3</a>
    <a href="#" class="pagination-item pagination-next">›</a>
</nav>
```

### Système de grille
```html
<div class="container">
    <div class="row">
        <div class="col-6">
            <p>Cette colonne prend 6/12 de la largeur</p>
        </div>
        <div class="col-6">
            <p>Cette colonne aussi</p>
        </div>
    </div>
    
    <div class="row">
        <div class="col-4">
            <p>Colonne 4/12</p>
        </div>
        <div class="col-4">
            <p>Colonne 4/12</p>
        </div>
        <div class="col-4">
            <p>Colonne 4/12</p>
        </div>
    </div>
</div>
```

## 🎨 Personnalisation

### Changer les couleurs
```css
:root {
    --primary-color: #007bff;    /* Couleur primaire */
    --secondary-color: #6c757d;  /* Couleur secondaire */
    --success-color: #28a745;    /* Couleur succès */
    --danger-color: #dc3545;     /* Couleur danger */
    --warning-color: #ffc107;    /* Couleur attention */
    --info-color: #17a2b8;       /* Couleur info */
}
```

### Changer la typographie
```css
:root {
    --font-family-base: 'Arial', sans-serif;
    --font-size-base: 16px;
    --font-weight-normal: 400;
    --font-weight-bold: 700;
}
```

### Changer les espacements
```css
:root {
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 3rem;
}
```

## 📱 Responsive

La bibliothèque est automatiquement responsive ! Les composants s'adaptent à tous les écrans :
- **Mobile** : < 768px
- **Tablet** : 768px - 1024px  
- **Desktop** : > 1024px

## 🔧 Exemples d'intégration

### Page de contact simple
```html
<!DOCTYPE html>
<html>
<head>
    <title>Contact</title>
    <link rel="stylesheet" href="flexible-css.css">
</head>
<body>
    <div class="container">
        <h1>Contactez-nous</h1>
        
        <div class="card">
            <div class="card-header">
                <h2>Formulaire de contact</h2>
            </div>
            <div class="card-body">
                <form>
                    <div class="form-group">
                        <label for="nom">Nom</label>
                        <input type="text" id="nom" class="form-control">
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" class="form-control">
                    </div>
                    
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" class="form-control" rows="4"></textarea>
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Envoyer</button>
                </form>
            </div>
        </div>
    </div>
</body>
</html>
```

### Dashboard simple
```html
<!DOCTYPE html>
<html>
<head>
    <title>Dashboard</title>
    <link rel="stylesheet" href="flexible-css.css">
</head>
<body>
    <div class="container">
        <h1>Mon Dashboard</h1>
        
        <div class="row">
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h3>Utilisateurs</h3>
                        <span class="badge badge-primary">1,234</span>
                    </div>
                </div>
            </div>
            
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h3>Ventes</h3>
                        <span class="badge badge-success">€5,678</span>
                    </div>
                </div>
            </div>
            
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h3>Progression</h3>
                        <div class="progress">
                            <div class="progress-bar" style="width: 75%">75%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
```

## 🎯 C'est tout !

Avec ces quelques classes CSS, vous pouvez créer des interfaces modernes et professionnelles. La bibliothèque est :
- ✅ **Simple à utiliser**
- ✅ **Responsive par défaut**
- ✅ **Facilement personnalisable**
- ✅ **Légère et performante**

**Commencez par copier les exemples ci-dessus et adaptez-les à vos besoins !** 