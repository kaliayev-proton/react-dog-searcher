import { Img } from "../../../../common/Img/Img";
import "./dog-grid.css";

export interface DogGrid {
  dogs?: string[];
}

export const DogGrid = ({ dogs = [] }: DogGrid) => {
  return (
    <div className="dog-grid">
      {dogs.map((dog, i: number) => (
        <Img
          key={dog}
          src={dog}
          alt={`dog-image-${i}`}
          className="dog-grid-img"
        />
      ))}
    </div>
  );
};
