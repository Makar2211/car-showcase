"use client";

import { SerachManufacturer } from "./SerachManufacturer";
import { useState } from "react";

export const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const handelSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handelSearch}>
      <div className="serachbar__item">
        <SerachManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};
