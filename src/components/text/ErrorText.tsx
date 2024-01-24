interface ErrorTextProps {
  styleClass?: string;
  children: React.ReactNode;
}

function ErrorText({ styleClass, children }: ErrorTextProps) {
  return <p className={`text-center  text-error ${styleClass}`}>{children}</p>;
}

export default ErrorText;
