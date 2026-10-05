interface ButtonProps {
  label: string;
  variant: "primary" | "secondary";
}

export default function Button({ label, variant }: ButtonProps) {
  return (
    <button className={`button button--${variant}`} type="button">
      {label}
    </button>
  );
}