import { Windowcontrol } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile?.data;

  if (!data) return null;

  const { name, image, subtitle, description } = data;
  const paragraphs = Array.isArray(description) ? description : [];

  return (
    <>
      <div id="window-header">
        <Windowcontrol target="txtfile" />
        <h2>{name}</h2>
      </div>

      <div className="bg-white text-black p-6 space-y-4 w-full max-w-[720px] min-w-[320px] box-border max-h-[70vh] overflow-auto">
        {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}

        {image && (
          <div className="overflow-hidden rounded-lg border border-gray-100">
            <img src={image} alt={name} className="w-full h-auto object-cover" />
          </div>
        )}

        <div className="space-y-3 leading-relaxed text-[15px] break-words">
          {paragraphs.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
