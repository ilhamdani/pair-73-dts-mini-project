import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "../authentications/firebase";


const ProtectedComponent = ({ children, path= "/login" }) => {
  const navigate = useNavigate();

  
  const [user, isLoading] = useAuthState(auth);

  useEffect(() => {
   
    if (!user) {
      navigate(path);
      return;
    }
  }, [user, navigate, path]);

  
  if (isLoading) {
    return;
  } else {
    return children;
  }

};

export default ProtectedComponent;