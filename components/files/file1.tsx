type Item = {
  id: number;
  title: string;
  description: string;
};

type Props = {
  data: Item[];
};

export default function File1({ data }: Props) {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id} className="mb-3 border p-3 rounded shadow">
          <h2 className="font-semibold">{item.title}</h2>
          <p>{item.description}</p>
        </li>
      ))}
    </ul>
  );
}
