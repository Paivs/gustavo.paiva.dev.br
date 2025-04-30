"use client";

import * as React from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { useState, useEffect } from "react";

export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "system",
  enableSystem = true,
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  } else {
    return (
      <NextThemeProvider
        attribute={attribute}
        defaultTheme={defaultTheme}
        enableSystem={enableSystem}
      >
        {children}
      </NextThemeProvider>
    );
  }
}
