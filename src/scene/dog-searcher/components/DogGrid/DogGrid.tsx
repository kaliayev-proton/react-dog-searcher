import { Img } from "../../../../common/Img/Img";

export interface DogGrid {
  dogs?: string[];
}

export const DogGrid = ({ dogs = [] }: DogGrid) => {
  return (
    <div>
      {dogs.map((dog, i: number) => (
        <Img key={dog} src={dog} alt={`dog-image-${i}`} />
      ))}
    </div>
  );
};
