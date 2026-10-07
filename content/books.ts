export type BookStatus = "reading" | "read";

export interface Book {
  title: string;
  author?: string;
  status: BookStatus;
  bookUrl?: string;
  note?: string;
  accent: string;
  cover?: string;
}

const amazon = (query: string) => `https://www.amazon.com/s?k=${query}`;

export const books: Book[] = [
  {
    title: "Rule of Life",
    author: "Richard Templar",
    status: "reading",
    accent: "#8b7cf6",
    cover: "/covers/rule-of-life.jpg",
    bookUrl: amazon("Rule+of+Life+Richard+Templar"),
  },
  {
    title: "Emotional Intelligence",
    author: "Daniel Goleman",
    status: "read",
    accent: "#4f8cff",
    cover: "/covers/emotional-intelligence.jpg",
    bookUrl: amazon("Emotional+Intelligence+Daniel+Goleman"),
  },
  {
    title: "The 80/20 Principle",
    author: "Richard Koch",
    status: "read",
    accent: "#f5a524",
    cover: "/covers/80-20-principle.jpg",
    bookUrl: amazon("The+80%2F20+Principle+Richard+Koch"),
  },
  {
    title: "Secret of the Secret Place",
    author: "Bob Sorge",
    status: "reading",
    accent: "#34c98e",
    cover: "/covers/secret-of-the-secret-place.jpg",
    bookUrl: amazon("Secret+of+the+Secret+Place+Bob+Sorge"),
  },
  {
    title: "The Power of Discipline",
    author: "Daniel Walter",
    status: "read",
    accent: "#ef5f7b",
    cover: "/covers/power-of-discipline.jpg",
    bookUrl: amazon("The+Power+of+Discipline+Daniel+Walter"),
  },
  {
    title: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
    status: "read",
    accent: "#ff8a3d",
    cover: "/covers/win-friends.jpg",
    bookUrl: amazon("How+to+Win+Friends+and+Influence+People+Dale+Carnegie"),
  },
  {
    title: "The Art of Minimalism",
    author: "Olivia Telford",
    status: "reading",
    accent: "#7d8590",
    cover: "/covers/art-of-minimalism.jpg",
    bookUrl: amazon("The+Art+of+Minimalism+Olivia+Telford"),
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    status: "read",
    accent: "#45b8d4",
    cover: "/covers/psychology-of-money.jpg",
    bookUrl: amazon("The+Psychology+of+Money+Morgan+Housel"),
  },
  {
    title: "The Courage to Be Disliked",
    author: "Ichiro Kishimi & Fumitake Koga",
    status: "read",
    accent: "#d97757",
    cover: "/covers/courage-to-be-disliked.jpg",
    bookUrl: amazon("The+Courage+to+Be+Disliked+Kishimi"),
  },
  {
    title: "The 48 Laws of Power",
    author: "Robert Greene",
    status: "read",
    accent: "#caa044",
    cover: "/covers/48-laws-of-power.jpg",
    bookUrl: "https://www.amazon.com/s?k=The%2B48%2BLaws%2Bof%2BPower&ref=cs_503_search",
  },
  {
    title: "Ikigai",
    author: "Héctor García & Francesc Miralles",
    status: "read",
    accent: "#e86a92",
    cover: "/covers/ikigai.jpg",
    bookUrl: amazon("Ikigai+Hector+Garcia"),
  },
];
