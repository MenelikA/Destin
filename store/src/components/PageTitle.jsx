const PageTitle = ({ title }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <h1>{title}</h1>
    </div>
  );
};


export default PageTitle;