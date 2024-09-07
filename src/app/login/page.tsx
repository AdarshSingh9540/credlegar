import Login from "@/components/Login";
import Onboarding from "@/components/Onboarding";
import React from "react";

function page() {
  const data = true;
  return <div>{data ? <Onboarding /> : <Login />}</div>;
}

export default page;
