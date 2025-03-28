export const getImagePath = (path: string) => {
  // Remove any leading slashes
  const cleanPath = path.replace(/^\/+/, '');
  
  // In development, use the path as is
  if (process.env.NODE_ENV === 'development') {
    return `/${cleanPath}`;
  }
  
  // In production, prepend the basePath
  return `/tejas-athalye-portfolio/${cleanPath}`;
}; 