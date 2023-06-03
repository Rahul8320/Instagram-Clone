export type UserType = {
  username: string;
  image?: string;
};

export type CommentType = {
  id: string;
  comment: string;
  user: UserType;
};

export type PostType = {
  id: string;
  createdAt: string;
  image: string;
  description: string;
  user: UserType;
  nofComments?: Number;
  nofLikes?: Number;
  comments: CommentType[];
};
