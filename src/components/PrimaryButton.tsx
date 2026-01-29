type Props = {
  children: React.ReactNode;
  href?: string;
};

export default function PrimaryButton({ children, href }: Props) {
  const classes =
    "inline-flex items-center justify-center min-h-[44px] px-8 rounded-xl " +
    "bg-[var(--color-accent)] text-black font-medium " +
    "transition-all duration-300 ease-out " +
    "hover:shadow-[0_0_30px_var(--color-accent)] hover:scale-[1.03]";

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return <button className={classes}>{children}</button>;
}
