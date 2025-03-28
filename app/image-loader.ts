interface ImageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

export default function imageLoader({ src, width, quality }: ImageLoaderProps): string {
  // For remote images (starting with http or https), return as is
  if (src.startsWith('http')) {
    return src;
  }
  
  // For local images, prepend the base path
  const basePath = process.env.NODE_ENV === 'production' ? '/tejas-athalye-portfolio' : '';
  return `${basePath}${src}`;
} 