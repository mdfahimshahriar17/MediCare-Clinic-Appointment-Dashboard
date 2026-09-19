export default function FallbackUI({ error, onRetry }) {
  return (
    <div className="rounded-xl border border-[#E2E8F0] bg-white p-8 text-center shadow-[0_1px_2px_rgba(15,23,42,0.06)]">
      <div className="text-3xl">⚠️</div>

      <h2 className="mt-3 text-lg font-semibold text-[#0F172A]">
        Something went wrong
      </h2>

      <p className="mt-1 text-sm text-[#64748B]">
        We couldn't display this section. Please try again.
      </p>

      <details className="mx-auto mt-4 max-w-xl text-left">
        <summary className="cursor-pointer text-xs font-semibold text-[#64748B]">
          Show error details
        </summary>

        <p className="mt-2 rounded-lg bg-[#F1F5F9] p-3 text-xs text-[#64748B]">
          {error?.message || "Unknown error"}
        </p>
      </details>

      <button
        onClick={onRetry}
        className="mt-5 rounded-lg bg-[#0F766E] px-4 py-2 text-sm font-semibold text-white"
      >
        Try Again
      </button>
    </div>
  );
}