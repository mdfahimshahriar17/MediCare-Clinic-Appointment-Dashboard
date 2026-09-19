// [REQ-6] Render prop: reusable list rendering with renderItem
export default function FilterableList({ items, renderItem }) {
  return (
    <>
      {items.map((item) => renderItem(item))}
    </>
  );
}