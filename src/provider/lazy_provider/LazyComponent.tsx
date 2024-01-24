import * as React from "react";
import PageLoadingComponent from "../../components/page_loading/PageLoading";

export interface ILazyComponentProviderProps {
  children: React.ReactNode;
}

export default function LazyComponentProvider(
  props: ILazyComponentProviderProps
) {
  return (
    <React.Suspense fallback={<PageLoadingComponent />}>
      {props.children}
    </React.Suspense>
  );
}
