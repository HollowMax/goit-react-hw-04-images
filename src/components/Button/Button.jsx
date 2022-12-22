export function Button({ loadMore }) {
  return (
    <>
      <button type="button" className="Button" onClick={loadMore}>
        Load more
      </button>
    </>
  );
}
