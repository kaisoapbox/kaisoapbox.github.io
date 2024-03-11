export default function Aside(props) {
  return (
    <details>
      <summary>{props.summary}</summary>
      {props.children}
    </details>
  );
}
