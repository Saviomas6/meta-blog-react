interface Theme {
  bodyColor: string;
  text: string;
  cardBg: string;
  categoryBg: string;
}

export const darkTheme: Theme = {
  bodyColor: "#181a2a",
  text: "#fff",
  cardBg: "#242535",
  categoryBg: "#181a2a",
};

export const lightTheme: Theme = {
  bodyColor: "#ffffff",
  text: "#000",
  cardBg: "#ececec",
  categoryBg: "#ececec",
};
