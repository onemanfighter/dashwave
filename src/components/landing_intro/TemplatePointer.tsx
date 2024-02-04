//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Template pointers for the landing page.
 *
 * @returns The template pointers component.
 */
function TemplatePointers() {
  return (
    <>
      <h1 className="text-2xl mt-8 font-bold">Management tool dashboard</h1>
      <p className="py-2 mt-4">
        ✓ <span className="font-semibold">Light/dark</span> mode toggle
      </p>
      <p className="py-2 ">
        ✓ <span className="font-semibold">Redux toolkit</span> and other utility
        libraries configured
      </p>
      <p className="py-2">
        ✓ <span className="font-semibold">Calendar, Modal, Sidebar </span>{" "}
        components
      </p>
      <p className="py-2  ">
        ✓ User-friendly <span className="font-semibold">documentation</span>
      </p>
      <p className="py-2  mb-4">
        ✓ <span className="font-semibold">Daisy UI</span> components,{" "}
        <span className="font-semibold">Tailwind CSS</span> support
      </p>
    </>
  );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Export the TemplatePointers component.
export default TemplatePointers;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
