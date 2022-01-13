import { Img } from "../../../../common/Img/Img";
import "./dog-grid.css";

export interface DogGridProps {
  dogs?: string[];
}

export const DogGrid = ({ dogs = [] }: DogGridProps) => {
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
