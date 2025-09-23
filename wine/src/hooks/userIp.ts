import { useEffect } from "react";

export const useClientIp = () => {
  useEffect(() => {
    const fetchIp = async () => {
      try {
        const storedIp = localStorage.getItem("ipAddress");
        if (storedIp) return; // already stored

        const res = await fetch("https://api.ipify.org?format=json");
        const data = await res.json();

        if (data?.ip) {
          localStorage.setItem("ipAddress", data.ip);
        }
      } catch (err) {
        console.error("Failed to fetch IP address", err);
      }
    };

    fetchIp();
  }, []);
};
