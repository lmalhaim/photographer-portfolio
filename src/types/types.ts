export enum Category {
  All = "All",
  Portrait = "Portrait",
  People = "People",
  Pets = "Pets",
  Places = "Places",
}

export type Image = {
  url: string;
  caption: string;
  date: Date;
  location: string;
  category?: Category[];
};


export enum Tabs {
  Gallery = "Gallery",
  About = "About",
  Contact = "Contact",
}

