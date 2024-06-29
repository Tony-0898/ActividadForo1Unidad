module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier', // Añade esta línea
    'plugin:prettier/recommended', // Y esta línea
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'], // Añade 'prettier' aquí
  // ... resto de tu configuración ...
  rules: {
    // ... otras reglas ...
    'prettier/prettier': 'error', // Añade esta regla
  },
};
