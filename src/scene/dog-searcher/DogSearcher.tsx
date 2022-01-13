import { useState, ChangeEvent } from "react";
import { Select } from "../../common/Select/Select";
import {
  useGetAllDogsQuery,
  useGetLineageQuery,
} from "../../service/dogs/dogs";
import { DogGrid } from "./components/DogGrid/DogGrid";
import "./dog-searcher.css";

export const DogSearcher = () => {
  const [value, setValue] = useState("");
  const [skip, setSkip] = useState(true);

  const { data = {} } = useGetAllDogsQuery();
  const lineage = useGetLineageQuery(value, { skip });

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value) {
      setValue(event.target.value);
      setSkip(false);
    }
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
        className="dog-searcher-select"
      />
      {lineage.isLoading && <div>Loading...</div>}
      <DogGrid dogs={lineage.data} />
    </div>
  );
};
