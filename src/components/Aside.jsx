export default function Aside(props) {
  return (
    <details open={props.open || false}>
      <summary>{props.summary}</summary>
      {props.children}
    </details>
  );
}
