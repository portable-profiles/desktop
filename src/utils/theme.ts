
export const ThemeKeys = {
  ColorPrimary: 'ColorPrimary',
  ColorBackground: 'ColorBackground',
  ColorForeground: 'ColorForeground',
  FaintGray: 'FaintGray'
}

export const ThemeDefaults = {
  [ThemeKeys.ColorPrimary]: '#7B1FA2',
  [ThemeKeys.ColorBackground]: '#FFFFFF',
  [ThemeKeys.ColorForeground]: '#000000',
  [ThemeKeys.FaintGray]: '#EEEEEE'
}

/**
 * Function to return a style value for a given key. This will
 * later be updated to leverage styled-component's provider-based
 * theme system. For now it will just return hardcoded values with a similar
 * API signature. 
 * 
 * @param key The theme key to pull
 * @throws when the key does not exist
 */
export function theme(key: string) {
  const value = ThemeDefaults[key];
  if (value) {
    return value;
  }
  throw new Error(`Theme key ${key} not found`);
}
