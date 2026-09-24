# Albéa & Co — Studio créatif

Application (un seul fichier `index.html`) qui crée, à partir des photos de votre lampe en albâtre et avec **Agnes AI (gratuit)** :
- 🎬 **TikTok** : vidéos verticales 9:16 ultra réalistes, lampe seule, **avec une femme qui présente la lampe** ou avec des mains ;
- 📸 **Photo produit** : packshots fond blanc et photos lifestyle (avec ou sans présentatrice) jusqu'en 4K ;
- 🌐 **Site web** : bannières et visuels (16:9, 21:9, 3:2…) ;
- ♾️ **Création en continu** : enchaîne les créations sans limite de nombre jusqu'à ce que vous arrêtiez.

## 1. Mettre la clé API Agnes
1. Allez sur https://platform.agnes-ai.com/settings/apiKeys.
2. Cliquez sur l'icône **copier** à côté de votre clé (la clé affichée `sk-J7Y93...yPOAxY` est raccourcie : il faut la copier avec l'icône).
3. Au choix :
   - collez-la dans l'app (bloc « Connexion Agnes AI ») puis **Tester ma clé** ;
   - ou ouvrez `index.html` dans un éditeur de texte et remplissez `var AGNES_API_KEY = "";` tout en haut.

⚠️ Ne publiez jamais (GitHub, site public…) un fichier qui contient votre clé.

## 2. Utiliser
Double-cliquez sur `index.html` (ou ouvrez-le dans Safari/Chrome). Ajoutez vos photos, choisissez vos réglages, lancez.

Limites du plan gratuit Agnes (gérées automatiquement par l'app) : 1 nouvelle vidéo par minute, 10 photos 2K par minute.
Le nombre total n'est pas limité par l'app : en mode continu, elle tourne tant que vous ne l'arrêtez pas.

## 3. (Seulement si besoin) Relais
Si l'app affiche « Impossible de joindre Agnes depuis ce navigateur », c'est qu'Agnes bloque les appels directs depuis une page web. Solution gratuite en 5 min :
1. Créez un compte sur https://dash.cloudflare.com → **Workers & Pages** → **Create** → **Create Worker**.
2. Remplacez le code par le contenu de `proxy/agnes-worker.js`, puis **Deploy**.
3. Copiez l'adresse du worker (ex. `https://agnes-relais.votrenom.workers.dev`) et mettez-la dans `index.html` :
   `var AGNES_BASE = "https://agnes-relais.votrenom.workers.dev";`
