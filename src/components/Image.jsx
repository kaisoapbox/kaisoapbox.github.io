export default function Image(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <figure>
        <img
          src={props.src || ""}
          width={props.size || "100%"}
          height={props.size || "100%"}
          alt={props.alt || ""}
        ></img>
        <figcaption>{props.caption || ""}</figcaption>
      </figure>
    </div>
  );
}
