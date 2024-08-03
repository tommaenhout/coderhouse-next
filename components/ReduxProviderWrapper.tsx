'use client';
import { Provider } from "react-redux";
import { store } from "@/app/store";



export default function ReduxProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <Provider store={store}>
        {children}
    </Provider>
  );
}