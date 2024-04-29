import { useState, useCallback } from "react";
export const MyHook = () => {
  const [process, setProcess] = useState("waiting");

  const request = useCallback(
    async (
      url,
      method = "GET",
      body = null,
      headers = { "Content-type": "application/json" }
    ) => {
      setProcess("loading");

      try {
        const response = await fetch(url, {
          method,
          body,
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY": "9KWQ7WJ-Q0E41WA-P1SBPF7-MCFWNET",
          },
        });
        if (!response.ok) {
          throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }

        const data = await response.json();
        return data;
      } catch (e) {
        setProcess("error");
        throw e;
      }
    },
    []
  );

  const clearError = useCallback(() => {
    setProcess("loading");
  }, []);

  return { request, clearError, process, setProcess };
};
