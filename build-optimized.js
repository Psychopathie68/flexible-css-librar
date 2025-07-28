const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Build optimisé Flexible CSS Library...');

// Créer le dossier dist s'il n'existe pas
if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
}

// Compiler le CSS optimisé
console.log('📦 Compilation du CSS optimisé...');
try {
    execSync('sass src/flexible-optimized.scss:dist/flexible-css-optimized.css --style compressed', { stdio: 'inherit' });
    console.log('✅ CSS optimisé compilé avec succès !');
} catch (error) {
    console.error('❌ Erreur lors de la compilation du CSS:', error.message);
    process.exit(1);
}

// Copier le fichier JavaScript des thèmes
console.log('📁 Copie du système de thèmes JavaScript...');
try {
    fs.copyFileSync('src/themes.js', 'dist/themes.js');
    console.log('✅ Fichier themes.js copié !');
} catch (error) {
    console.error('❌ Erreur lors de la copie du fichier themes.js:', error.message);
}

// Créer un fichier de démonstration optimisé
console.log('🎨 Création de la démonstration optimisée...');
const demoContent = `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexible CSS Library - Version Optimisée</title>
    <link rel="stylesheet" href="flexible-css-optimized.css">
    <style>
        .demo-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }
        .theme-switcher {
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--bg-primary);
            border: 1px solid var(--border-color);
            border-radius: var(--border-radius);
            padding: 1rem;
            box-shadow: var(--shadow-lg);
            z-index: 1000;
        }
        .theme-btn {
            display: block;
            width: 100%;
            padding: 0.5rem;
            margin: 0.25rem 0;
            border: 1px solid var(--border-color);
            border-radius: var(--border-radius);
            background: var(--bg-primary);
            color: var(--text-primary);
            cursor: pointer;
            transition: all 0.3s;
        }
        .theme-btn:hover {
            background: var(--bg-secondary);
            border-color: var(--primary-color);
        }
        .theme-btn.active {
            background: var(--primary-color);
            color: white;
        }
        .demo-section {
            margin: 2rem 0;
            padding: 2rem;
            border: 1px solid var(--border-color);
            border-radius: var(--border-radius);
            background: var(--bg-primary);
        }
        .component-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1rem;
            margin-top: 1rem;
        }
    </style>
</head>
<body>
    <div class="theme-switcher">
        <h3>🎨 Thèmes</h3>
        <button class="theme-btn active" data-theme-toggle="modern">🎨 Moderne</button>
        <button class="theme-btn" data-theme-toggle="dark">🌙 Sombre</button>
        <button class="theme-btn" data-theme-toggle="minimal">⚪ Minimal</button>
        <button class="theme-btn" data-theme-toggle="vibrant">🌈 Vibrant</button>
        <button class="theme-btn" data-theme-toggle="corporate">💼 Corporate</button>
        <button class="theme-btn" data-theme-toggle="creative">🎭 Créatif</button>
        <button class="theme-btn" data-theme-toggle="tech">💻 Tech</button>
        <button class="theme-btn" data-theme-toggle="vintage">📷 Vintage</button>
        <button class="theme-btn" data-theme-toggle="nature">🌿 Nature</button>
        <button class="theme-btn" data-theme-toggle="luxury">💎 Luxe</button>
    </div>

    <div class="demo-container">
        <h1>🎨 Flexible CSS Library - Version Optimisée</h1>
        <p>CSS unique de ~30KB au lieu de 102KB !</p>
        
        <div class="demo-section">
            <h2>🧩 Composants</h2>
            <div class="component-grid">
                <div>
                    <h3>Boutons</h3>
                    <button class="btn btn-primary">Principal</button>
                    <button class="btn btn-secondary">Secondaire</button>
                    <button class="btn btn-success">Succès</button>
                    <button class="btn btn-danger">Danger</button>
                </div>
                
                <div>
                    <h3>Cartes</h3>
                    <div class="card">
                        <div class="card-header">
                            <h4>Exemple</h4>
                        </div>
                        <div class="card-body">
                            <p>Cette carte s'adapte au thème !</p>
                            <button class="btn btn-primary">Action</button>
                        </div>
                    </div>
                </div>
                
                <div>
                    <h3>Alertes</h3>
                    <div class="alert alert-primary">Info</div>
                    <div class="alert alert-success">Succès</div>
                    <div class="alert alert-danger">Erreur</div>
                </div>
            </div>
        </div>
        
        <div class="demo-section">
            <h2>📝 Formulaire</h2>
            <div class="form-group">
                <label class="form-label">Nom</label>
                <input type="text" class="form-control" placeholder="Votre nom">
            </div>
            <div class="form-group">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" placeholder="votre@email.com">
            </div>
            <button class="btn btn-primary">Envoyer</button>
        </div>
        
        <div class="demo-section">
            <h2>📊 Statistiques</h2>
            <div class="row">
                <div class="col-md-6">
                    <h4>Avant (10 thèmes séparés)</h4>
                    <ul>
                        <li>📦 Taille : 102KB</li>
                        <li>⚡ Performance : Lente</li>
                        <li>🔧 Maintenance : Complexe</li>
                        <li>📱 Compatibilité : Limitée</li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <h4>Après (CSS unique + JS)</h4>
                    <ul>
                        <li>📦 Taille : ~30KB</li>
                        <li>⚡ Performance : Rapide</li>
                        <li>🔧 Maintenance : Simple</li>
                        <li>📱 Compatibilité : Tous navigateurs</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <script src="themes.js"></script>
    <script>
        const themeManager = new FlexibleThemeManager();
        
        // Met à jour les boutons actifs
        function updateActiveButtons() {
            const currentTheme = themeManager.getCurrentTheme();
            document.querySelectorAll('.theme-btn').forEach(btn => {
                btn.classList.remove('active');
                if (btn.getAttribute('data-theme-toggle') === currentTheme) {
                    btn.classList.add('active');
                }
            });
        }
        
        // Écoute les changements de thème
        document.addEventListener('themeChange', () => {
            updateActiveButtons();
        });
        
        updateActiveButtons();
    </script>
</body>
</html>`;

fs.writeFileSync('dist/demo-optimized.html', demoContent);
console.log('✅ Démonstration optimisée créée !');

// Créer un fichier README pour la version optimisée
const readmeContent = `# 🚀 Flexible CSS Library - Version Optimisée

## 📦 Installation

### CSS Optimisé
\`\`\`html
<link rel="stylesheet" href="flexible-css-optimized.css">
\`\`\`

### Système de Thèmes JavaScript
\`\`\`html
<script src="themes.js"></script>
\`\`\`

## 🎯 Utilisation

### Initialisation
\`\`\`javascript
const themeManager = new FlexibleThemeManager();
\`\`\`

### Changer de thème
\`\`\`javascript
themeManager.setTheme('dark');
themeManager.setTheme('vibrant');
themeManager.setTheme('corporate');
\`\`\`

### Écouter les changements
\`\`\`javascript
document.addEventListener('themeChange', (e) => {
    console.log('Nouveau thème:', e.detail.theme);
});
\`\`\`

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

\`\`\`javascript
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
\`\`\`

## 📁 Structure des Fichiers

\`\`\`
dist/
├── flexible-css-optimized.css    # CSS optimisé (~30KB)
├── themes.js                     # Système de thèmes JavaScript
└── demo-optimized.html          # Démonstration
\`\`\`

## 🚀 Démarrage Rapide

1. Incluez les fichiers CSS et JS
2. Initialisez le gestionnaire de thèmes
3. Changez de thème avec \`setTheme()\`

\`\`\`html
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
\`\`\`
`;

fs.writeFileSync('dist/README-OPTIMIZED.md', readmeContent);
console.log('✅ README optimisé créé !');

// Afficher les statistiques
const stats = fs.statSync('dist/flexible-css-optimized.css');
const sizeKB = Math.round(stats.size / 1024);

console.log('\n📊 Statistiques de build :');
console.log(`📦 Taille CSS optimisé : ${sizeKB}KB`);
console.log(`📈 Réduction : ${Math.round((102 - sizeKB) / 102 * 100)}%`);
console.log(`⚡ Performance améliorée !`);

console.log('\n🎉 Build optimisé terminé avec succès !');
console.log('📁 Fichiers créés dans le dossier dist/');
console.log('🌐 Ouvrez demo-optimized.html pour tester !'); 