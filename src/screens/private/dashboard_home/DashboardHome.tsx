import * as React from "react";

export interface IDashboardHomeProps {}

export default function DashboardHome(props: IDashboardHomeProps) {
  return (
    <div className="p-2">
      <div className="card shadow-lg compact side bg-base-100">
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            necessitatibus incidunt ut officiis explicabo inventore.
          </p>
          <div className="justify-end card-actions">
            <button className="btn btn-primary">Button</button>
          </div>
        </div>
      </div>
    </div>
  );
}
