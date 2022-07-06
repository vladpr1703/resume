export type ActiveCard = "About" | "Portfolio" | "Contact" | "Resume";

export const ActiveCards: TActiveCards = {
  About: "About",
  Portfolio: "Portfolio",
  Contact: "Contact",
  Resume: "Resume",
};

type TActiveCards = {
  [k in ActiveCard]: k;
};
