/**
 * Get the title of the sub navigation bar.
 *
 * @param pathName path name of the current page.
 */
export default function getSubNavTitle(pathName: string): string[] {
  return pathName.split("/").map((item, index) => {
    if (index === 0) return "";
    if (index === pathName.split("/").length - 1) return item.toUpperCase();
    return item.toUpperCase() + " > ";
  });
}
