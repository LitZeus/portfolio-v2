interface ImageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

export default function imageLoader({ src, width, quality }: ImageLoaderProps): string {
  // For remote images (starting with http or https), return as is
  if (src.startsWith('http')) {
    // Add width and quality parameters for remote images if provided
    const url = new URL(src);
    if (width) url.searchParams.set('w', width.toString());
    if (quality) url.searchParams.set('q', quality.toString());
    return url.toString();
  }
  
  // For local images, prepend the base path
  const basePath = process.env.NODE_ENV === 'production' ? '/tejas-athalye-portfolio' : '';
  return `${basePath}${src}`;
} 