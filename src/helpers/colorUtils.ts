export const hexToRGBA = (hexColor: string, alpha: number) => {
  const [r, g, b] = (hexColor.match(/\w\w/g) || []).map(x => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
}