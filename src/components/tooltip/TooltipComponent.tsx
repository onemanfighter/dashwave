/**
 * Author: Amit raikwar
 * Last updated: 04 Feb, 2024
 */
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 * Prop types for the tooltip component.
 */
interface ITooltipComponentProps {
  title: string;
  children: React.ReactNode;
  position?: "tooltip-top" | "bottom" | "left" | "tooltip-right";
  disable?: boolean;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Functional component for the tooltip.
 *
 * @param props ITooltipComponentProps
 * @returns JSX.Element
 */
function TooltipComponent(props: ITooltipComponentProps) {
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

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Export the TooltipComponent.
export default TooltipComponent;
export type { ITooltipComponentProps };

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// End of file.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
