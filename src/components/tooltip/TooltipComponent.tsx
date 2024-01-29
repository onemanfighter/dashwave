/**
 * Proptypes for the tooltip component.
 */
export interface ITooltipComponentProps {
  title: string;
  children: React.ReactNode;
  position?: "tooltip-top" | "bottom" | "left" | "tooltip-right";
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
  const position = props.position ? props.position : "tooltip-top";
  return (
    <div
      className={`${show ? " tooltip" : ""} ${position}`}
      data-tip={props.title}
    >
      {props.children}
    </div>
  );
}