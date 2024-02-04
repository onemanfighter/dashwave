//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Page loading component props.
 */
interface IPageLoadingComponentProps {}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Page loading component.
 *
 * @param props  The page loading component props.
 * @returns The page loading component.
 */
function PageLoadingComponent(props: IPageLoadingComponentProps) {
  return (
    <div className=" h-full w-full justify-center items-center flex ">
      <span className="loading loading-spinner loading-lg text-primary"></span>
    </div>
  );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Export the PageLoading component.
export default PageLoadingComponent;
export type { IPageLoadingComponentProps };

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
