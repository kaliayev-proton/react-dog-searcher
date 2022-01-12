import { useEffect } from "react";
import {} from "react-redux";
import { useGetAllDogsQuery } from "../../services/dogs/dogs";
import { RootState, useDispatch, useSelector } from "../../state";

export const DogSearcher = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetAllDogsQuery();
  console.log(data);
  useEffect(() => {
    console.log("Dispatch");
    // dispatch()
  }, []);

  return (
    <div>
      <input type="text" />
      <ul>
        <li>Raza 1</li>
      </ul>
    </div>
  );
};
