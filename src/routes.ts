import { About, Contact, Portfolio } from "./components/content-card";

export const routes = [
  {
    path: "/about",
    component: About,
  },
  { path: "/contact", component: Contact },
  { path: "/portfolio", component: Portfolio },
];
