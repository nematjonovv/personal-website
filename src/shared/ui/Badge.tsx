
function Badge({ title }: { title: string }) {
  return (
    <div className="bg-(--accent) uppercase text-(--secondary) font-bold py-1 px-3 inline-block font-mono text-sm border-2">
      {title}
    </div>
  );
}

export default Badge;