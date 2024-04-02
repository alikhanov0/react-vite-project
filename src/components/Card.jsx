export default function Card(props) {
  return (
    <li>
      <p>
        <strong>{props.title}</strong>
        <br />
        {props.description}
      </p>
    </li>
  );
}
