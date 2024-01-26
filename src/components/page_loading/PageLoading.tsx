export interface IPageLoadingComponentProps {}

export default function PageLoadingComponent(
  props: IPageLoadingComponentProps
) {
  return (
    <div className=" h-full w-full justify-center items-center flex ">
      <span className="loading loading-spinner loading-lg text-primary"></span>
    </div>
  );
}
