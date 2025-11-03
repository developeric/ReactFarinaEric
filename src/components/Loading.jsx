export const Loading = ({ loading }) => {
  if (!loading) {
    return null;
  }
  return (
    <>
      <h1>Cargando Data... {loading}</h1>
    </>
  );
};
