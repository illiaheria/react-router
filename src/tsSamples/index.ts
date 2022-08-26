function f() {
  return { x: 10, y: 3 };
}
type P = ReturnType<typeof f>;

type Post = {
  id: string;
  title?: string;
};

interface IPost {
  id: string;
  title: string;
  name: string;
  isValid: boolean;
}

type A = Partial<IPost>;
type B = Required<Post>;
type C = Readonly<IPost>;

const ownObj: C = {
  id: "132",
  title: "Title",
  name: "Illia",
  isValid: false,
};
//
interface CatInfo {
  age: number;
  name: string;
}

type CatName = "vaska" | "stepka" | "cat";
const cats: Record<CatName, CatInfo> = {
  vaska: { age: 12, name: "some" },
  stepka: { age: 12, name: "some" },
  cat: { age: 12, name: "some" },
};
