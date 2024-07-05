export const Spinner = () => {
  return (
    <div
      style={{
        display: "flex", // Sets the display to flex to use flexbox properties
        flexDirection: "column", // Aligns children (Spinner and ErrorMessage) vertically
        alignItems: "center", // Centers children horizontally in the container
        justifyContent: "center", // Centers children vertically in the container
        width: "100%", // Ensures the div takes full width of its parent
        height: "300px", // Provides a fixed height for the div
      }}
    >
      <div className="lds-hourglass" />
    </div>
  );
};
