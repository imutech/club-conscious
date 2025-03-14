const BASE_SIZE = 16; // Base size for 1rem

function remToPixels(rem: string): number {
  return parseFloat(rem) * BASE_SIZE;
}

export const theme = {
  colors: {
    primary: "#3498db",
    secondary: "#2ecc71",
    // ...add more colors...
  },
  typography: {
    baseText: {
      fontSize: remToPixels("1rem"),
      color: "#fff",
    },
    sizing: {
      sm: {
        fontSize: remToPixels("0.8rem"),
      },
      md: {
        fontSize: remToPixels("1rem"),
      },
      lg: {
        fontSize: remToPixels("1.2rem"),
      },
    },
    // ...add more typography settings...
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    // ...add more spacing...
  },
  appBackgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
  safeArea: {
    flex: 1,
  },
};
