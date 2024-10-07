export const validate = (config: Record<string, any>) => {
  const requiredKeys = ['POSTS_URL', 'USERS_URL', 'COMMENTS_URL'];

  // Validación de que existan las variables necesarias
  requiredKeys.forEach((key) => {
    if (!config[key]) {
      throw new Error(`Missing required environment variable: ${key}`);
    }
  });

  return config;
};
