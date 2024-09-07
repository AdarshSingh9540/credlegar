import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import React from 'react'

function Signup() {
  return (
    <div >
      <RegisterLink className="text-white w-24 font-bold bg-red-500 flex justify-center items-center rounded-lg p-3">Sign up</RegisterLink>
    </div>
  )
}

export default Signup