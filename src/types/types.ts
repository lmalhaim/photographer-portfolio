export const CategoryList = ["All", "Portrait", "People", "Pets", "Places"] as const;
export type Category = typeof CategoryList[number];
export type Image = {
  url: string;
  caption: string;
  date: Date;
  location: string;
  category?: Category[];
};


export const TabList = ["Gallery" , "About" , "Contact"] as const; 
export type Tab = typeof TabList[number];


export type SortBy = "Location" | "Date" | "Relevance"; 


