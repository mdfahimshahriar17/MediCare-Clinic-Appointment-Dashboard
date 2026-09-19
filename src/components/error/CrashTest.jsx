import { useState } from "react";

export default function CrashTest() {
  const [shouldCrash, setShouldCrash] = useState(false);

  if (shouldCrash) {
    throw new Error("Crash Test: Error Boundary is working.");
  }

  return (
    <button
      onClick={() => setShouldCrash(true)}
      className="rounded-lg border border-[#DC2626] px-4 py-2 text-sm font-semibold text-[#DC2626]"
    >
      Crash Test
    </button>
  );
}