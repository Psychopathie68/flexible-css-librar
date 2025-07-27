# Guide de Déploiement - Flexible CSS Library

## 🚀 Déploiement sur GitHub Pages

### Étape 1 : Créer un repository GitHub
1. Va sur [GitHub.com](https://github.com)
2. Clique sur "New repository"
3. Nomme-le `flexible-css-library`
4. Rends-le public
5. Clique sur "Create repository"

### Étape 2 : Pousser ton code
```bash
# Initialiser Git (si pas déjà fait)
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "Initial commit - Flexible CSS Library"

# Ajouter le remote GitHub
git remote add origin https://github.com/TON_USERNAME/flexible-css-library.git

# Pousser le code
git push -u origin main
```

### Étape 3 : Activer GitHub Pages
1. Va dans les **Settings** de ton repository
2. Scroll jusqu'à **Pages**
3. Dans **Source**, sélectionne **Deploy from a branch**
4. Choisis la branche **main** et le dossier **docs**
5. Clique **Save**

### Étape 4 : Ton site sera disponible à :
`https://TON_USERNAME.github.io/flexible-css-library`

## 🌐 Autres options de déploiement

### **Netlify (Gratuit)**
1. Va sur [Netlify.com](https://netlify.com)
2. Connecte ton compte GitHub
3. Sélectionne ton repository
4. Netlify détectera automatiquement le dossier `docs`
5. Clique **Deploy**

### **Vercel (Gratuit)**
1. Va sur [Vercel.com](https://vercel.com)
2. Connecte ton compte GitHub
3. Importe ton repository
4. Vercel déploiera automatiquement

### **Firebase Hosting (Gratuit)**
```bash
# Installer Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialiser
firebase init hosting

# Déployer
firebase deploy
```

## 📦 Préparer pour la distribution

### Créer un package NPM
```bash
# Modifier package.json
npm publish
```

### Créer un CDN
- **jsDelivr** : `https://cdn.jsdelivr.net/gh/TON_USERNAME/flexible-css-library@main/dist/flexible-css.css`
- **unpkg** : `https://unpkg.com/flexible-css-library@1.0.0/dist/flexible-css.css`

## 🔄 Mise à jour automatique
Configure GitHub Actions pour recompiler automatiquement :

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-node@v2
      with:
        node-version: '16'
    - run: npm install
    - run: npm run build
    - uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./docs
``` 