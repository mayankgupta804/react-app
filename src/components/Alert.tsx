import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const Alerts = (props: Props) => {
  return <div className="alert alert-primary">{props.children}</div>;
};

export default Alerts;
