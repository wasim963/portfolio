const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const assetPath = (fileName) => `${basePath}/assets/${fileName}`;
