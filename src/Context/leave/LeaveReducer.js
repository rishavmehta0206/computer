import React, { useReducer } from "react";
import LeaveContext from "./LeaveContext";

const reducerFun = (state,{type,payload}) => {

};

const initialValue = {};

const LeaveReducer = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFun, initialValue);
  return <LeaveContext.Provider>{children}</LeaveContext.Provider>;
};

export default LeaveReducer;
