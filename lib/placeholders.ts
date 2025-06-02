// Generate placeholder image data URLs
export const createPlaceholder = (width: number, height: number, color: string = '#F8F8F8', text?: string) => {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${color}"/>
      ${text ? `<text x="50%" y="50%" font-family="Arial, sans-serif" font-size="16" fill="#1A1A1F" text-anchor="middle" dominant-baseline="middle">${text}</text>` : ''}
    </svg>
  `
  return `data:image/svg+xml;base64,${btoa(svg)}`
}

export const placeholders = {
  hero: createPlaceholder(1440, 810, '#D1D1D2', 'Hero Background'),
  vogue: createPlaceholder(144, 104, '#E8E8E8', 'Vogue'),
  aesop: createPlaceholder(144, 104, '#E0E0E0', 'Aesop'),
  feature1: createPlaceholder(540, 410, '#F0F0F0', 'Feature 1'),
  feature2: createPlaceholder(540, 410, '#E8E8E8', 'Feature 2'),
  testimonial: createPlaceholder(350, 388, '#E0E0E0', 'Testimonial'),
  project1: createPlaceholder(540, 540, '#F8F8F8', 'Project 1'),
  project2: createPlaceholder(540, 540, '#F0F0F0', 'Project 2'),
  project3: createPlaceholder(540, 540, '#E8E8E8', 'Project 3'),
  project4: createPlaceholder(540, 540, '#E0E0E0', 'Project 4'),
}