import { Windowcontrol } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const galleryImports = import.meta.glob(
  "../../public/images/gallary/*.{png,jpg,jpeg,gif,webp}",
  { eager: true, as: "url" }
);

const galleryImages = Object.entries(galleryImports)
  .map(([path, src]) => ({
    src,
    name: path.split("/").pop() || "Photo",
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

const Gallery = () => {
  const { openWindow } = useWindowStore();
  const hasImages = galleryImages.length > 0;

  const openImage = (name, src) => openWindow("imgfile", { name, image: src });

  return (
    <>
      <div id="window-header">
        <Windowcontrol target="photos" />
        <h2>Gallery</h2>
      </div>

      <div className="bg-white text-black p-4 w-[1100px] max-w-[95vw] min-w-[320px] max-h-[75vh] overflow-auto box-border">
        {hasImages ? (
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
            {galleryImages.map(({ src, name }) => (
              <div
                key={name}
                className="bg-gray-100 rounded-lg shadow-sm border border-gray-200 overflow-hidden w-full max-w-[360px]"
              >
                <button
                  type="button"
                  className="w-full text-left"
                  onClick={() => openImage(name, src)}
                  title={`Open ${name}`}
                >
                  <img src={src} alt={name} className="w-full h-52 object-cover" />
                  <div className="p-2 text-center text-sm font-medium truncate">
                    {name}
                  </div>
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-sm text-gray-600">
            <p>No images found in gallery.</p>
          </div>
        )}
      </div>
    </>
  );
};

const GalleryWindow = WindowWrapper(Gallery, "photos");

export default GalleryWindow;
