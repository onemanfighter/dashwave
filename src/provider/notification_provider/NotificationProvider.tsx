import NotificationComponent from "../../components/notification/NotificationComponent";

export interface INotificationProviderProps {
  children: React.ReactNode;
}

export default function NotificationProvider(
  props: INotificationProviderProps
) {
  return (
    <div>
      <NotificationComponent />
      {props.children}
    </div>
  );
}
