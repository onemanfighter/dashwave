import TemplatePointers from "./TemplatePointer";

function LandingIntro() {
  return (
    <div className="hero min-h-full rounded-l-xl bg-transparent">
      <div className="hero-content py-12">
        <div className="max-w-md">
          <h1 className="text-3xl text-center font-bold text-white">
            <img
              src="/logo192.png"
              className="w-12 inline-block mr-2 mask mask-circle"
              alt="dashwind-logo"
            />
            Dashboard
          </h1>
          {/*  pointers component */}
          <div className=" text-white">
            <TemplatePointers />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingIntro;
