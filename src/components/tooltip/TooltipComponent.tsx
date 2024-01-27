/**
 * Proptypes for the tooltip component.
 */
export interface ITooltipComponentProps {
  title: string;
  children: React.ReactNode;
  disable?: boolean;
}

/**
 * Functional component for the tooltip.
 *
 * @param props ITooltipComponentProps
 * @returns JSX.Element
 */
export default function TooltipComponent(props: ITooltipComponentProps) {
  const show = props.disable !== null && props.disable === true ? false : true;
  return (
    <div className={show ? " tooltip" : ""} data-tip={props.title}>
      {props.children}
    </div>
  );
}
