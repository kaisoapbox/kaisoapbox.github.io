export default function Sidenote(props) {
  return (
    <>
      <sup id={`fnref:${props.id}`} className="sidenote-sup">
        <b>{props.id}</b>
      </sup>
      <span
        id={`fn:${props.id}`}
        className={`sidenote-${props.left ? "left" : "right"}`}
      >
        <b>{props.id}. </b>
        {props.children}
      </span>
    </>
  );
}
