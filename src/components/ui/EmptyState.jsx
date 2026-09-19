export default function EmptyState({ message }) {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-center">
      <div className="mb-3 text-3xl">🔍</div>

      <p className="text-sm font-medium text-[#0F172A]">
        {message}
      </p>

      <p className="mt-1 text-xs text-[#64748B]">
        Try changing your search or filter.
      </p>
    </div>
  );
}