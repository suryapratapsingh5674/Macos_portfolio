import { Windowcontrol } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Image = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile?.data;

  if (!data) return null;

  const { name, imageUrl, image } = data;
  const src = imageUrl || image;

  if (!src) return null;

  return (
    <>
      <div id="window-header">
        <Windowcontrol target="imgfile" />
        <h2>{name}</h2>
      </div>

      <div className="preview bg-white text-black p-4 w-full box-border overflow-auto">
        <div className="w-full h-full flex items-center justify-center">
          <img
            src={src}
            alt={name}
            className="max-w-[70vw] max-h-[50vh] object-contain rounded-md"
          />
        </div>
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(Image, "imgfile");

export default ImageWindow;
