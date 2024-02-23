type Post = {
  readonly id: string
  title: string
  body: string
}

type Comments = {
  readonly id: string
  postId: string
  body: string
}

type Users = {
  readonly _id: string
  name: string
  posts: Post[]
  comments: Comments[]
}

enum Direction {
  Up,
  Down = 4,
  Left,
  Right
}

console.log(Direction.Up);
console.log(Direction.Left);

interface User1 {
  id: string;    
  email: string;
}

interface User1 {
  name: string;
}

const UserTest: User1 = {
  id: "1",
  email: "2",
  name: "2"
}