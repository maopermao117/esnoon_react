'use client';
type Props = {
  title: string;

  ItemName: String[];
}

export default function Mydropdown({ title, ItemName }: Props) {
  return (
    <details className="dropdown">
      <summary className="btn btn-ghost btn-sm text-mint-900">{title}</summary>
      <ul className="menu dropdown-content bg-mint-100 rounded-box shadow w-52 p-2">
        {ItemName.map((name,i) => (
          <li key={i}><a>{name}</a></li>
        ))}
      </ul>
    </details>
  );
}