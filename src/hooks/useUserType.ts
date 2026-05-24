import { useState, useEffect } from "react";

export type UserType = "empresa" | "consumidor";

export function useUserType() {
  const [userType, setUserTypeState] = useState<UserType>("empresa");

  useEffect(() => {
    // Initial load
    const saved = localStorage.getItem("revitta_user_type") as UserType;
    if (saved === "consumidor" || saved === "empresa") {
      setUserTypeState(saved);
    }

    // Listener for changes in other components
    const handleStorageChange = () => {
      const current = localStorage.getItem("revitta_user_type") as UserType;
      if (current === "consumidor" || current === "empresa") {
        setUserTypeState(current);
      }
    };

    window.addEventListener("revitta_user_type_changed", handleStorageChange);
    return () => {
      window.removeEventListener("revitta_user_type_changed", handleStorageChange);
    };
  }, []);

  const setUserType = (type: UserType) => {
    localStorage.setItem("revitta_user_type", type);
    setUserTypeState(type);
    window.dispatchEvent(new Event("revitta_user_type_changed"));
  };

  const toggleUserType = () => {
    const next = userType === "empresa" ? "consumidor" : "empresa";
    setUserType(next);
  };

  return {
    userType,
    setUserType,
    toggleUserType,
    isConsumer: userType === "consumidor",
  };
}
