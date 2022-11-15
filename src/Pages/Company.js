import React, { useState } from "react";
import Slider from "../Components/Slider";
import Tabs from "../Components/Tabs";
import { people } from "../assets/data";
const Company = () => {
  const [client, setClients] = useState(people);
  return (
    <div className="w-full">
      <Tabs client={client} />
    </div>
  );
};

export default Company;
