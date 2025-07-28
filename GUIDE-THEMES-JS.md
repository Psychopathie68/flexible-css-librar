# 🎨 Guide Complet - Système de Thèmes JavaScript

## 📋 Table des Matières

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Utilisation de Base](#utilisation-de-base)
4. [API JavaScript](#api-javascript)
5. [Exemples Pratiques](#exemples-pratiques)
6. [Personnalisation](#personnalisation)
7. [Performance](#performance)
8. [Dépannage](#dépannage)

## 🚀 Introduction

Le système de thèmes JavaScript de Flexible CSS Library permet de changer dynamiquement l'apparence de votre site web en modifiant les variables CSS en temps réel. Cette approche offre plusieurs avantages :

- ✅ **Performance** : CSS unique de ~30KB au lieu de 102KB
- ✅ **Flexibilité** : Changement de thème sans rechargement
- ✅ **Maintenance** : Un seul fichier CSS à maintenir
- ✅ **Compatibilité** : Fonctionne sur tous les navigateurs modernes

## 📦 Installation

### 1. Inclure les fichiers

```html
<!DOCTYPE html>
<html>
<head>
    <!-- CSS optimisé -->
    <link rel="stylesheet" href="flexible-css-optimized.css">
</head>
<body>
    <!-- Votre contenu -->
    
    <!-- Système de thèmes JavaScript -->
    <script src="themes.js"></script>
</body>
</html>
```

### 2. Initialisation

```javascript
// Initialise automatiquement le gestionnaire de thèmes
const themeManager = new FlexibleThemeManager();
```

## 🎯 Utilisation de Base

### Changer de thème

```javascript
// Thèmes disponibles
themeManager.setTheme('modern');    // 🎨 Moderne (par défaut)
themeManager.setTheme('dark');      // 🌙 Sombre
themeManager.setTheme('minimal');   // ⚪ Minimal
themeManager.setTheme('vibrant');   // 🌈 Vibrant
themeManager.setTheme('corporate'); // 💼 Corporate
themeManager.setTheme('creative');  // 🎭 Créatif
themeManager.setTheme('tech');      // 💻 Tech
themeManager.setTheme('vintage');   // 📷 Vintage
themeManager.setTheme('nature');    // 🌿 Nature
themeManager.setTheme('luxury');    // 💎 Luxe
```

### Interface utilisateur simple

```html
<!-- Boutons de thème -->
<button onclick="themeManager.setTheme('dark')">Mode Sombre</button>
<button onclick="themeManager.setTheme('vibrant')">Mode Coloré</button>
<button onclick="themeManager.setTheme('corporate')">Mode Pro</button>

<!-- Sélecteur de thème -->
<select onchange="themeManager.setTheme(this.value)">
    <option value="modern">🎨 Moderne</option>
    <option value="dark">🌙 Sombre</option>
    <option value="vibrant">🌈 Vibrant</option>
    <option value="corporate">💼 Corporate</option>
</select>
```

## 🔧 API JavaScript

### Méthodes principales

```javascript
// Changer de thème
themeManager.setTheme('dark');

// Récupérer le thème actuel
const currentTheme = themeManager.getCurrentTheme();
console.log(currentTheme); // "dark"

// Récupérer tous les thèmes disponibles
const themes = themeManager.getAvailableThemes();
console.log(themes); // ["modern", "dark", "minimal", ...]

// Ajouter un thème personnalisé
themeManager.addTheme('custom', {
    primary: '#ff6b35',
    secondary: '#4ecdc4',
    success: '#45b7d1',
    danger: '#ff4757',
    warning: '#ffa502',
    info: '#2ed573',
    light: '#f1f2f6',
    dark: '#2f3542',
    bg: '#ffffff',
    bgSecondary: '#f8f9fa',
    text: '#2f3542',
    textSecondary: '#747d8c',
    border: '#dfe4ea',
    borderRadius: '0.5rem',
    shadow: '0 4px 15px rgba(255, 107, 53, 0.2)',
    font: "'Inter', 'Segoe UI', 'Roboto', sans-serif"
});

// Supprimer un thème
themeManager.removeTheme('custom');
```

### Événements

```javascript
// Écouter les changements de thème
document.addEventListener('themeChange', (e) => {
    console.log('Nouveau thème:', e.detail.theme);
    console.log('Données du thème:', e.detail.themeData);
    
    // Exemple : mettre à jour l'interface
    updateThemeDisplay(e.detail.theme);
});

function updateThemeDisplay(themeName) {
    // Mettre à jour l'affichage du thème actuel
    document.getElementById('current-theme').textContent = themeName;
    
    // Mettre à jour les boutons actifs
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-theme') === themeName) {
            btn.classList.add('active');
        }
    });
}
```

## 🎨 Exemples Pratiques

### 1. Interface de sélection de thème

```html
<div class="theme-selector">
    <h3>🎨 Choisir un thème</h3>
    
    <!-- Boutons de thème -->
    <div class="theme-buttons">
        <button class="theme-btn" data-theme="modern">🎨 Moderne</button>
        <button class="theme-btn" data-theme="dark">🌙 Sombre</button>
        <button class="theme-btn" data-theme="vibrant">🌈 Vibrant</button>
        <button class="theme-btn" data-theme="corporate">💼 Corporate</button>
    </div>
    
    <!-- Sélecteur -->
    <select id="theme-select">
        <option value="modern">🎨 Moderne</option>
        <option value="dark">🌙 Sombre</option>
        <option value="vibrant">🌈 Vibrant</option>
        <option value="corporate">💼 Corporate</option>
    </select>
    
    <!-- Affichage du thème actuel -->
    <div id="current-theme-display">
        Thème actuel : <span id="current-theme">Moderne</span>
    </div>
</div>

<script>
const themeManager = new FlexibleThemeManager();

// Gestion des boutons
document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const theme = btn.getAttribute('data-theme');
        themeManager.setTheme(theme);
    });
});

// Gestion du sélecteur
document.getElementById('theme-select').addEventListener('change', (e) => {
    themeManager.setTheme(e.target.value);
});

// Mise à jour de l'affichage
document.addEventListener('themeChange', (e) => {
    document.getElementById('current-theme').textContent = e.detail.theme;
    
    // Mettre à jour les boutons actifs
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-theme') === e.detail.theme) {
            btn.classList.add('active');
        }
    });
    
    // Mettre à jour le sélecteur
    document.getElementById('theme-select').value = e.detail.theme;
});
</script>
```

### 2. Sauvegarde automatique

```javascript
// Sauvegarde automatique dans localStorage
document.addEventListener('themeChange', (e) => {
    localStorage.setItem('user-theme', e.detail.theme);
});

// Restauration au chargement
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('user-theme');
    if (savedTheme && themeManager.getAvailableThemes().includes(savedTheme)) {
        themeManager.setTheme(savedTheme);
    }
});
```

### 3. Thème basé sur les préférences système

```javascript
// Détecter les préférences système
function detectSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'modern';
}

// Appliquer le thème système
const systemTheme = detectSystemTheme();
themeManager.setTheme(systemTheme);

// Écouter les changements de préférences système
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    const newTheme = e.matches ? 'dark' : 'modern';
    themeManager.setTheme(newTheme);
});
```

## 🎨 Personnalisation

### Créer un thème personnalisé

```javascript
// Définition d'un thème personnalisé
const customTheme = {
    // Couleurs principales
    primary: '#ff6b35',
    secondary: '#4ecdc4',
    success: '#45b7d1',
    danger: '#ff4757',
    warning: '#ffa502',
    info: '#2ed573',
    light: '#f1f2f6',
    dark: '#2f3542',
    
    // Couleurs de base
    bg: '#ffffff',
    bgSecondary: '#f8f9fa',
    text: '#2f3542',
    textSecondary: '#747d8c',
    border: '#dfe4ea',
    
    // Propriétés de design
    borderRadius: '0.5rem',
    shadow: '0 4px 15px rgba(255, 107, 53, 0.2)',
    font: "'Inter', 'Segoe UI', 'Roboto', sans-serif"
};

// Ajouter le thème
themeManager.addTheme('custom', customTheme);

// Utiliser le thème
themeManager.setTheme('custom');
```

### Modifier un thème existant

```javascript
// Récupérer un thème existant
const modernTheme = themeManager.themes.modern;

// Modifier certaines propriétés
const modifiedTheme = {
    ...modernTheme,
    primary: '#ff6b35',
    borderRadius: '1rem',
    shadow: '0 8px 25px rgba(255, 107, 53, 0.3)'
};

// Remplacer le thème
themeManager.themes.modern = modifiedTheme;
themeManager.setTheme('modern');
```

## ⚡ Performance

### Optimisations recommandées

1. **Chargement différé**
```javascript
// Charger le système de thèmes après le contenu principal
window.addEventListener('load', () => {
    const script = document.createElement('script');
    script.src = 'themes.js';
    script.onload = () => {
        window.flexibleTheme = new FlexibleThemeManager();
    };
    document.head.appendChild(script);
});
```

2. **Thème par défaut dans le CSS**
```css
:root {
    --primary-color: #007bff; /* Thème moderne par défaut */
    --secondary-color: #6c757d;
    /* ... autres variables */
}
```

3. **Sauvegarde intelligente**
```javascript
// Sauvegarder seulement si l'utilisateur a fait un choix
let userHasChosenTheme = false;

document.addEventListener('themeChange', (e) => {
    if (userHasChosenTheme) {
        localStorage.setItem('user-theme', e.detail.theme);
    }
});

// Marquer que l'utilisateur a fait un choix
function userThemeChoice(theme) {
    userHasChosenTheme = true;
    themeManager.setTheme(theme);
}
```

## 🔧 Dépannage

### Problèmes courants

1. **Le thème ne change pas**
```javascript
// Vérifier que le gestionnaire est initialisé
console.log(themeManager.getCurrentTheme());

// Vérifier que le thème existe
console.log(themeManager.getAvailableThemes());

// Forcer la mise à jour
themeManager.setTheme('modern');
```

2. **Erreurs de console**
```javascript
// Vérifier que le fichier themes.js est chargé
if (typeof FlexibleThemeManager === 'undefined') {
    console.error('Le fichier themes.js n\'est pas chargé');
}

// Vérifier que le CSS est chargé
if (!document.querySelector('link[href*="flexible-css"]')) {
    console.error('Le CSS Flexible n\'est pas chargé');
}
```

3. **Styles non appliqués**
```css
/* Vérifier que les variables CSS sont définies */
:root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    /* ... */
}
```

### Debug

```javascript
// Mode debug pour voir les changements
const originalSetTheme = themeManager.setTheme;
themeManager.setTheme = function(themeName) {
    console.log('Changement de thème vers:', themeName);
    console.log('Variables CSS avant:', getComputedStyle(document.documentElement).getPropertyValue('--primary-color'));
    
    originalSetTheme.call(this, themeName);
    
    console.log('Variables CSS après:', getComputedStyle(document.documentElement).getPropertyValue('--primary-color'));
};
```

## 📚 Ressources

- [Démonstration interactive](demo-theme-switcher.html)
- [Documentation complète](README.md)
- [Exemples de code](examples/)
- [Guide de migration](MIGRATION.md)

---

**🎉 Félicitations !** Vous maîtrisez maintenant le système de thèmes JavaScript de Flexible CSS Library. Votre site web peut maintenant changer d'apparence en temps réel avec une performance optimale ! 