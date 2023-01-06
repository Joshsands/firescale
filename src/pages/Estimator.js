import * as React from "react";
import Estimatortool from '../components/Estimatortool';
import Labor from '../components/Labor';
import Permit from '../components/Permit';


const Pricing = () => {
  return (
    <div>
      <Estimatortool />
      <Labor />
      <Permit />
    </div>
  );
};

export default Pricing;