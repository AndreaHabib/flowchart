import React, { useState, useEffect, Fragment } from "react";
import { Button } from "@mui/material";
import { signOut, auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        if (isMounted) navigate("/auth");
      }
    });
    return () => {
      isMounted = false;
    };
  }, [navigate]);

  return <Button onClick={signOut}>Sign out</Button>;
}
