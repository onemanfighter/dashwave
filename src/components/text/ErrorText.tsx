//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * ErrorText component props.
 */
interface ErrorTextProps {
  styleClass?: string;
  children: React.ReactNode;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * ErrorText component.
 *
 * @param styleClass  The style class.
 * @param children  The children of the component.
 * @returns The ErrorText component.
 */
function ErrorText({ styleClass, children }: ErrorTextProps) {
  return <p className={`text-center  text-error ${styleClass}`}>{children}</p>;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Export the ErrorText component.
export default ErrorText;
export type { ErrorTextProps };

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
