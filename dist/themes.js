/**
 * Flexible CSS Library - Theme System
 * Système de thèmes dynamique pour Flexible CSS Library
 */

class FlexibleThemeManager {
  constructor() {
    this.currentTheme = 'modern';
    this.themes = {
      // Thème moderne (par défaut)
      modern: {
        primary: '#007bff',
        secondary: '#6c757d',
        success: '#28a745',
        danger: '#dc3545',
        warning: '#ffc107',
        info: '#17a2b8',
        light: '#f8f9fa',
        dark: '#343a40',
        bg: '#ffffff',
        bgSecondary: '#f8f9fa',
        text: '#212529',
        textSecondary: '#6c757d',
        border: '#dee2e6',
        borderRadius: '0.375rem',
        shadow: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)',
        font: "'Inter', 'Segoe UI', 'Roboto', sans-serif"
      },

      // Thème sombre
      dark: {
        primary: '#0d6efd',
        secondary: '#6c757d',
        success: '#198754',
        danger: '#dc3545',
        warning: '#ffc107',
        info: '#0dcaf0',
        light: '#f8f9fa',
        dark: '#212529',
        bg: '#121212',
        bgSecondary: '#1e1e1e',
        text: '#ffffff',
        textSecondary: '#adb5bd',
        border: '#495057',
        borderRadius: '0.375rem',
        shadow: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.3)',
        font: "'Inter', 'Segoe UI', 'Roboto', sans-serif"
      },

      // Thème minimaliste
      minimal: {
        primary: '#000000',
        secondary: '#666666',
        success: '#333333',
        danger: '#ff0000',
        warning: '#ffaa00',
        info: '#0066cc',
        light: '#fafafa',
        dark: '#000000',
        bg: '#ffffff',
        bgSecondary: '#f8f8f8',
        text: '#333333',
        textSecondary: '#666666',
        border: '#e0e0e0',
        borderRadius: '0.25rem',
        shadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        font: "'Inter', 'Segoe UI', 'Roboto', sans-serif"
      },

      // Thème vibrant
      vibrant: {
        primary: '#ff6b6b',
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
        shadow: '0 4px 15px rgba(255, 107, 107, 0.2)',
        font: "'Inter', 'Segoe UI', 'Roboto', sans-serif"
      },

      // Thème corporate
      corporate: {
        primary: '#2c3e50',
        secondary: '#34495e',
        success: '#27ae60',
        danger: '#e74c3c',
        warning: '#f39c12',
        info: '#3498db',
        light: '#ecf0f1',
        dark: '#2c3e50',
        bg: '#ffffff',
        bgSecondary: '#f8f9fa',
        text: '#2c3e50',
        textSecondary: '#7f8c8d',
        border: '#bdc3c7',
        borderRadius: '0.375rem',
        shadow: '0 2px 10px rgba(44, 62, 80, 0.1)',
        font: "'Open Sans', 'Arial', sans-serif"
      },

      // Thème créatif
      creative: {
        primary: '#e91e63',
        secondary: '#9c27b0',
        success: '#4caf50',
        danger: '#f44336',
        warning: '#ff9800',
        info: '#2196f3',
        light: '#fce4ec',
        dark: '#880e4f',
        bg: '#ffffff',
        bgSecondary: '#fafafa',
        text: '#212121',
        textSecondary: '#757575',
        border: '#e0e0e0',
        borderRadius: '0.75rem',
        shadow: '0 6px 20px rgba(233, 30, 99, 0.15)',
        font: "'Playfair Display', 'Georgia', serif"
      },

      // Thème tech
      tech: {
        primary: '#6366f1',
        secondary: '#8b5cf6',
        success: '#10b981',
        danger: '#ef4444',
        warning: '#f59e0b',
        info: '#06b6d4',
        light: '#f8fafc',
        dark: '#0f172a',
        bg: '#ffffff',
        bgSecondary: '#f1f5f9',
        text: '#1e293b',
        textSecondary: '#64748b',
        border: '#e2e8f0',
        borderRadius: '0.5rem',
        shadow: '0 4px 15px rgba(99, 102, 241, 0.15)',
        font: "'SF Mono', 'Monaco', 'Inconsolata', monospace"
      },

      // Thème vintage
      vintage: {
        primary: '#8b4513',
        secondary: '#a0522d',
        success: '#556b2f',
        danger: '#b22222',
        warning: '#daa520',
        info: '#4682b4',
        light: '#f5f5dc',
        dark: '#2f4f4f',
        bg: '#faf0e6',
        bgSecondary: '#f5f5dc',
        text: '#2f4f4f',
        textSecondary: '#696969',
        border: '#d2b48c',
        borderRadius: '0',
        shadow: '0 4px 8px rgba(139, 69, 19, 0.2)',
        font: "'Baskerville', 'Times New Roman', serif"
      },

      // Thème nature
      nature: {
        primary: '#2d5a27',
        secondary: '#4a7c59',
        success: '#6b8e23',
        danger: '#8b0000',
        warning: '#daa520',
        info: '#4682b4',
        light: '#f0f8f0',
        dark: '#2f4f2f',
        bg: '#fafafa',
        bgSecondary: '#f0f8f0',
        text: '#2f4f2f',
        textSecondary: '#556b2f',
        border: '#90ee90',
        borderRadius: '0.375rem',
        shadow: '0 2px 8px rgba(45, 90, 39, 0.1)',
        font: "'Georgia', 'Times New Roman', serif"
      },

      // Thème luxury
      luxury: {
        primary: '#d4af37',
        secondary: '#b8860b',
        success: '#228b22',
        danger: '#b22222',
        warning: '#daa520',
        info: '#4682b4',
        light: '#fff8dc',
        dark: '#2f2f2f',
        bg: '#ffffff',
        bgSecondary: '#fff8dc',
        text: '#2f2f2f',
        textSecondary: '#696969',
        border: '#daa520',
        borderRadius: '0.5rem',
        shadow: '0 4px 15px rgba(212, 175, 55, 0.2)',
        font: "'Georgia', 'Times New Roman', serif"
      }
    };

    this.init();
  }

  /**
   * Initialise le gestionnaire de thèmes
   */
  init() {
    // Récupère le thème sauvegardé ou utilise le thème par défaut
    const savedTheme = localStorage.getItem('flexible-theme');
    if (savedTheme && this.themes[savedTheme]) {
      this.setTheme(savedTheme);
    } else {
      this.setTheme(this.currentTheme);
    }

    // Ajoute les événements pour les boutons de thème
    this.addThemeButtons();
  }

  /**
   * Change le thème actuel
   * @param {string} themeName - Nom du thème
   */
  setTheme(themeName) {
    if (!this.themes[themeName]) {
      console.warn(`Thème "${themeName}" non trouvé. Utilisation du thème par défaut.`);
      themeName = 'modern';
    }

    this.currentTheme = themeName;
    const theme = this.themes[themeName];

    // Applique les variables CSS
    const root = document.documentElement;
    
    // Couleurs principales
    root.style.setProperty('--primary-color', theme.primary);
    root.style.setProperty('--secondary-color', theme.secondary);
    root.style.setProperty('--success-color', theme.success);
    root.style.setProperty('--danger-color', theme.danger);
    root.style.setProperty('--warning-color', theme.warning);
    root.style.setProperty('--info-color', theme.info);
    root.style.setProperty('--light-color', theme.light);
    root.style.setProperty('--dark-color', theme.dark);

    // Couleurs de base
    root.style.setProperty('--bg-primary', theme.bg);
    root.style.setProperty('--bg-secondary', theme.bgSecondary);
    root.style.setProperty('--text-primary', theme.text);
    root.style.setProperty('--text-secondary', theme.textSecondary);
    root.style.setProperty('--border-color', theme.border);

    // Propriétés de design
    root.style.setProperty('--border-radius', theme.borderRadius);
    root.style.setProperty('--shadow', theme.shadow);
    root.style.setProperty('--font-family-base', theme.font);
    root.style.setProperty('--font-family-heading', theme.font);

    // Met à jour l'attribut data-theme
    root.setAttribute('data-theme', themeName);

    // Sauvegarde le thème
    localStorage.setItem('flexible-theme', themeName);

    // Déclenche un événement personnalisé
    this.dispatchThemeChangeEvent(themeName);

    console.log(`Thème "${themeName}" appliqué avec succès !`);
  }

  /**
   * Récupère le thème actuel
   * @returns {string} Nom du thème actuel
   */
  getCurrentTheme() {
    return this.currentTheme;
  }

  /**
   * Récupère la liste des thèmes disponibles
   * @returns {Object} Objet contenant tous les thèmes
   */
  getAvailableThemes() {
    return Object.keys(this.themes);
  }

  /**
   * Ajoute un nouveau thème
   * @param {string} name - Nom du thème
   * @param {Object} theme - Configuration du thème
   */
  addTheme(name, theme) {
    this.themes[name] = theme;
    console.log(`Nouveau thème "${name}" ajouté !`);
  }

  /**
   * Supprime un thème
   * @param {string} name - Nom du thème à supprimer
   */
  removeTheme(name) {
    if (this.themes[name]) {
      delete this.themes[name];
      console.log(`Thème "${name}" supprimé !`);
    }
  }

  /**
   * Déclenche un événement de changement de thème
   * @param {string} themeName - Nom du thème
   */
  dispatchThemeChangeEvent(themeName) {
    const event = new CustomEvent('themeChange', {
      detail: {
        theme: themeName,
        themeData: this.themes[themeName]
      }
    });
    document.dispatchEvent(event);
  }

  /**
   * Ajoute automatiquement les boutons de thème
   */
  addThemeButtons() {
    // Cherche les éléments avec data-theme-toggle
    const themeToggles = document.querySelectorAll('[data-theme-toggle]');
    
    themeToggles.forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const themeName = toggle.getAttribute('data-theme-toggle');
        this.setTheme(themeName);
      });
    });

    // Cherche les éléments avec data-theme-select
    const themeSelects = document.querySelectorAll('[data-theme-select]');
    
    themeSelects.forEach(select => {
      select.addEventListener('change', (e) => {
        const themeName = e.target.value;
        if (themeName) {
          this.setTheme(themeName);
        }
      });
    });
  }

  /**
   * Crée un sélecteur de thème
   * @param {string} containerSelector - Sélecteur du conteneur
   * @param {Object} options - Options de configuration
   */
  createThemeSelector(containerSelector, options = {}) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const {
      label = 'Choisir un thème',
      showCurrent = true,
      className = 'theme-selector'
    } = options;

    const wrapper = document.createElement('div');
    wrapper.className = className;

    if (label) {
      const labelElement = document.createElement('label');
      labelElement.textContent = label;
      wrapper.appendChild(labelElement);
    }

    const select = document.createElement('select');
    select.setAttribute('data-theme-select', '');

    // Ajoute les options
    Object.keys(this.themes).forEach(themeName => {
      const option = document.createElement('option');
      option.value = themeName;
      option.textContent = this.formatThemeName(themeName);
      if (themeName === this.currentTheme) {
        option.selected = true;
      }
      select.appendChild(option);
    });

    wrapper.appendChild(select);

    if (showCurrent) {
      const currentTheme = document.createElement('div');
      currentTheme.className = 'current-theme';
      currentTheme.textContent = `Thème actuel : ${this.formatThemeName(this.currentTheme)}`;
      wrapper.appendChild(currentTheme);
    }

    container.appendChild(wrapper);
    this.addThemeButtons();
  }

  /**
   * Crée des boutons de thème
   * @param {string} containerSelector - Sélecteur du conteneur
   * @param {Object} options - Options de configuration
   */
  createThemeButtons(containerSelector, options = {}) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const {
      className = 'theme-buttons',
      buttonClassName = 'theme-btn',
      showIcons = true
    } = options;

    const wrapper = document.createElement('div');
    wrapper.className = className;

    Object.keys(this.themes).forEach(themeName => {
      const button = document.createElement('button');
      button.className = buttonClassName;
      button.setAttribute('data-theme-toggle', themeName);
      button.setAttribute('title', this.formatThemeName(themeName));
      
      if (showIcons) {
        button.innerHTML = `${this.getThemeIcon(themeName)} ${this.formatThemeName(themeName)}`;
      } else {
        button.textContent = this.formatThemeName(themeName);
      }

      if (themeName === this.currentTheme) {
        button.classList.add('active');
      }

      wrapper.appendChild(button);
    });

    container.appendChild(wrapper);
    this.addThemeButtons();
  }

  /**
   * Formate le nom du thème pour l'affichage
   * @param {string} themeName - Nom du thème
   * @returns {string} Nom formaté
   */
  formatThemeName(themeName) {
    return themeName.charAt(0).toUpperCase() + themeName.slice(1);
  }

  /**
   * Retourne l'icône pour un thème
   * @param {string} themeName - Nom du thème
   * @returns {string} Icône
   */
  getThemeIcon(themeName) {
    const icons = {
      modern: '🎨',
      dark: '🌙',
      minimal: '⚪',
      vibrant: '🌈',
      corporate: '💼',
      creative: '🎭',
      tech: '💻',
      vintage: '📷',
      nature: '🌿',
      luxury: '💎'
    };
    return icons[themeName] || '🎨';
  }
}

// Export pour utilisation dans d'autres modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = FlexibleThemeManager;
}

// Export global pour utilisation dans le navigateur
if (typeof window !== 'undefined') {
  window.FlexibleThemeManager = FlexibleThemeManager;
  
  // Initialise automatiquement si le script est chargé
  document.addEventListener('DOMContentLoaded', () => {
    window.flexibleTheme = new FlexibleThemeManager();
  });
} 