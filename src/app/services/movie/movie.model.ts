export interface IMovie {
  _id: string,
  title: string,
  description: string,
  imageUrl: string,
  isSaved?: boolean;
}