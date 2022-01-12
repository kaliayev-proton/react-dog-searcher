import { useState, ChangeEvent } from "react";
import { Select } from "../../common/Select/Select";
import {
  useGetAllDogsQuery,
  useGetLineageQuery,
} from "../../services/dogs/dogs";
import { DogGrid } from "./components/DogGrid/DogGrid";

export const DogSearcher = () => {
  const [value, setValue] = useState("");
  const [skip, setSkip] = useState(true);

  const { data = {}, isLoading } = useGetAllDogsQuery();
  const lineage = useGetLineageQuery(value, { skip });

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
    setSkip(false);
  };

  return (
    <div>
      <Select
        options={Object.keys(data).map((itemKey) => ({
          value: itemKey,
          label: itemKey,
        }))}
        onChange={handleChange}
        value={value}
      />
      <DogGrid dogs={lineage.data} />
    </div>
  );
};
