import { createClient } from "@/prismicio";
import SmallBackgroundImage from "@/slices/SmallBackgroundImage";

const BackgroundOfSmallImages = async ({ uid }: any) => {
  const client = createClient();
  const backgroundOfSmallImages = await client.getByUID(
    "background_of_small_images",
    uid
  );

  return (
    <div>
      {backgroundOfSmallImages.data.slices.map((slice, i) => (
        // <div
        //   key={"small-image-" + i}
        //   className="max-w-[100px] absolute -z-10"
        //   style={{
        //     top: slice.primary.top + "px",
        //     right: slice.primary.right + "px",
        //     bottom: slice.primary.bottom + "px",
        //     left: slice.primary.left + "px",
        //   }}
        // >
        //   <PrismicNextImage
        //     loading="eager"
        //     field={slice.primary.small_background_image}
        //   />
        // </div>
        <SmallBackgroundImage
          context={null}
          index={i}
          slices={backgroundOfSmallImages.data.slices}
          key={"small-image-" + i}
          slice={slice}
        />
      ))}
    </div>
  );
};

export default BackgroundOfSmallImages;
