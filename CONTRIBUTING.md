# Guide de Contribution - Flexible CSS Library

Merci de votre intérêt pour contribuer à Flexible CSS Library ! Ce guide vous aidera à comprendre comment participer au projet.

## 🚀 Démarrage rapide

### Prérequis
- Node.js (version 14 ou supérieure)
- npm ou yarn
- Connaissance de base en CSS/SCSS

### Installation
```bash
# Cloner le repository
git clone https://github.com/votre-username/flexible-css-library.git
cd flexible-css-library

# Installer les dépendances
npm install
```

### Scripts disponibles
```bash
# Build de développement (avec watch)
npm run dev

# Build de production
npm run build

# Lancer la documentation
npm run docs
```

## 📁 Structure du projet

```
flexible-css-library/
├── src/                    # Code source SCSS
│   ├── _variables.scss     # Variables CSS
│   ├── _reset.scss         # Reset CSS
│   ├── _grid.scss          # Système de grille
│   ├── _buttons.scss       # Composants boutons
│   ├── _cards.scss         # Composants cartes
│   ├── _utilities.scss     # Classes utilitaires
│   └── main.scss           # Fichier principal
├── dist/                   # Fichiers compilés
│   └── flexible-css.css    # CSS final
├── docs/                   # Documentation
│   ├── index.html          # Page de démonstration
│   └── themes.html         # Démonstration des thèmes
├── package.json            # Configuration npm
├── README.md               # Documentation principale
├── QUICKSTART.md           # Guide de démarrage rapide
└── LICENSE                 # Licence MIT
```

## 🎯 Types de contributions

### 1. Rapporter un bug
- Utilisez le template d'issue "Bug Report"
- Décrivez clairement le problème
- Incluez des étapes pour reproduire le bug
- Ajoutez des captures d'écran si nécessaire

### 2. Proposer une fonctionnalité
- Utilisez le template d'issue "Feature Request"
- Expliquez le besoin et l'utilisation
- Proposez une solution si possible
- Discutez avec l'équipe avant de commencer

### 3. Améliorer la documentation
- Corriger des erreurs
- Ajouter des exemples
- Améliorer la clarté
- Traduire en d'autres langues

### 4. Ajouter des composants
- Créez un nouveau fichier SCSS dans `src/`
- Suivez les conventions de nommage
- Ajoutez des exemples dans la documentation
- Testez sur différents navigateurs

## 📝 Conventions de code

### SCSS
- Utilisez des variables CSS pour la personnalisation
- Suivez la structure BEM pour les classes
- Commentaires en français
- Indentation de 2 espaces

```scss
// ✅ Bon
.component {
  color: var(--primary-color);
  padding: var(--spacing-md);
  
  &--variant {
    background-color: var(--bg-secondary);
  }
  
  &__element {
    border: var(--border-width) solid var(--border-color);
  }
}

// ❌ Éviter
.component {
  color: #007bff;
  padding: 1rem;
}
```

### HTML
- Utilisez des classes sémantiques
- Incluez des attributs d'accessibilité
- Validez votre HTML

```html
<!-- ✅ Bon -->
<button class="btn btn-primary" type="button" aria-label="Soumettre">
  Soumettre
</button>

<!-- ❌ Éviter -->
<button class="btn btn-primary">
  Soumettre
</button>
```

### Git
- Messages de commit en français
- Utilisez des préfixes conventionnels
- Commits atomiques

```bash
# ✅ Bon
feat: ajouter le composant modal
fix: corriger l'alignement des boutons
docs: mettre à jour la documentation des thèmes

# ❌ Éviter
update
fix bug
add stuff
```

## 🧪 Tests

### Tests manuels
- Testez sur différents navigateurs
- Vérifiez la responsivité
- Testez l'accessibilité
- Validez les performances

### Tests automatisés
```bash
# Vérifier la compilation SCSS
npm run build

# Linter CSS (si configuré)
npm run lint
```

## 📋 Checklist avant soumission

- [ ] Le code suit les conventions du projet
- [ ] Les tests passent
- [ ] La documentation est mise à jour
- [ ] Les exemples fonctionnent
- [ ] Le code est compatible avec les navigateurs cibles
- [ ] Les performances ne sont pas dégradées

## 🔄 Processus de contribution

1. **Fork** le repository
2. **Clone** votre fork localement
3. **Créez** une branche pour votre fonctionnalité
   ```bash
   git checkout -b feature/nouveau-composant
   ```
4. **Développez** votre fonctionnalité
5. **Testez** votre code
6. **Commitez** vos changements
   ```bash
   git add .
   git commit -m "feat: ajouter le composant modal"
   ```
7. **Poussez** vers votre fork
   ```bash
   git push origin feature/nouveau-composant
   ```
8. **Créez** une Pull Request

## 🎨 Ajouter un nouveau composant

### 1. Créer le fichier SCSS
```scss
// src/_modal.scss
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-modal);
  // ... autres styles
}
```

### 2. Importer dans main.scss
```scss
// src/main.scss
@import 'modal';
```

### 3. Ajouter la documentation
```html
<!-- docs/index.html -->
<div class="mb-xl">
  <h3>Modal</h3>
  <button class="btn btn-primary" onclick="openModal()">Ouvrir Modal</button>
  
  <div class="modal" id="exampleModal">
    <!-- Contenu du modal -->
  </div>
</div>
```

### 4. Ajouter des exemples
- Différentes variantes
- Utilisation responsive
- Accessibilité
- JavaScript nécessaire

## 🐛 Résolution de problèmes

### Erreurs de compilation SCSS
```bash
# Vérifier la syntaxe
npx sass --check src/main.scss

# Compiler avec plus de détails
npx sass src/main.scss dist/flexible-css.css --style expanded
```

### Problèmes de performance
- Minimisez l'utilisation de sélecteurs complexes
- Évitez les animations coûteuses
- Optimisez les images et icônes

### Compatibilité navigateur
- Testez sur Chrome, Firefox, Safari, Edge
- Vérifiez la compatibilité mobile
- Utilisez des polyfills si nécessaire

## 📞 Support

- **Issues** : Pour les bugs et demandes de fonctionnalités
- **Discussions** : Pour les questions générales
- **Email** : Pour les questions privées

## 🏆 Reconnaissance

Les contributeurs seront mentionnés dans :
- Le fichier README.md
- Les releases GitHub
- La documentation

---

**Merci de contribuer à Flexible CSS Library ! 🎨** 