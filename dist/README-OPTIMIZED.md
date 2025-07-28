# 🚀 Flexible CSS Library - Version Optimisée

## 📦 Installation

### CSS Optimisé
```html
<link rel="stylesheet" href="flexible-css-optimized.css">
```

### Système de Thèmes JavaScript
```html
<script src="themes.js"></script>
```

## 🎯 Utilisation

### Initialisation
```javascript
const themeManager = new FlexibleThemeManager();
```

### Changer de thème
```javascript
themeManager.setTheme('dark');
themeManager.setTheme('vibrant');
themeManager.setTheme('corporate');
```

### Écouter les changements
```javascript
document.addEventListener('themeChange', (e) => {
    console.log('Nouveau thème:', e.detail.theme);
});
```

## 📊 Avantages

- ✅ **Taille réduite** : ~30KB au lieu de 102KB
- ✅ **Performance** : Chargement plus rapide
- ✅ **Flexibilité** : Thèmes dynamiques
- ✅ **Maintenance** : Un seul fichier CSS
- ✅ **Compatibilité** : Tous navigateurs modernes

## 🎨 Thèmes Disponibles

- 🎨 **modern** - Thème moderne (par défaut)
- 🌙 **dark** - Thème sombre
- ⚪ **minimal** - Thème minimaliste
- 🌈 **vibrant** - Thème coloré
- 💼 **corporate** - Thème professionnel
- 🎭 **creative** - Thème créatif
- 💻 **tech** - Thème tech/startup
- 📷 **vintage** - Thème rétro
- 🌿 **nature** - Thème écologique
- 💎 **luxury** - Thème luxe

## 🔧 API JavaScript

```javascript
// Récupérer le thème actuel
const currentTheme = themeManager.getCurrentTheme();

// Récupérer tous les thèmes
const themes = themeManager.getAvailableThemes();

// Ajouter un thème personnalisé
themeManager.addTheme('custom', {
    primary: '#ff6b35',
    secondary: '#4ecdc4',
    // ... autres propriétés
});

// Supprimer un thème
themeManager.removeTheme('custom');
```

## 📁 Structure des Fichiers

```
dist/
├── flexible-css-optimized.css    # CSS optimisé (~30KB)
├── themes.js                     # Système de thèmes JavaScript
└── demo-optimized.html          # Démonstration
```

## 🚀 Démarrage Rapide

1. Incluez les fichiers CSS et JS
2. Initialisez le gestionnaire de thèmes
3. Changez de thème avec `setTheme()`

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="flexible-css-optimized.css">
</head>
<body>
    <button onclick="themeManager.setTheme('dark')">Mode Sombre</button>
    <button onclick="themeManager.setTheme('vibrant')">Mode Coloré</button>
    
    <script src="themes.js"></script>
    <script>
        const themeManager = new FlexibleThemeManager();
    </script>
</body>
</html>
```
