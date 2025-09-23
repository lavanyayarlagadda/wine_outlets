export const getClientIdentifierForPayload = (): { userId: number | string; userIp: string } => {
  const storedUserId = localStorage.getItem("userId");
  const storedIp = localStorage.getItem("ipAddress") || ""; // fallback IP

  if (storedUserId) {
    // userId exists → send userId and empty IP
    return { userId: Number(storedUserId), userIp: "" };
  } else {
    // no userId → send IP and a default userId (like 0 or -1 depending on backend)
    return { userId: "", userIp: storedIp };
  }
};
