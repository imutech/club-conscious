const BASE_SIZE = 16; // Base size for 1rem

function remToPixels(rem: string): number {
  return parseFloat(rem) * BASE_SIZE;
}

export const theme = {
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: remToPixels("2rem"),
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: remToPixels("1rem"), // Optional: Add padding if needed
    marginVertical: remToPixels("0.5rem"), // Optional: Add spacing between rows
  },
  colors: {
    primary: "#CB2790",
    secondary: "#191A53",
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
    headings: {
      h1: {
        fontSize: remToPixels("2rem"),
        fontWeight: "bold",
        color: "#fff", // Default color for headings
      },
      h2: {
        fontSize: remToPixels("1.75rem"),
        fontWeight: "bold",
        color: "#fff",
      },
      h3: {
        fontSize: remToPixels("1.5rem"),
        fontWeight: "bold",
        color: "#fff",
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
