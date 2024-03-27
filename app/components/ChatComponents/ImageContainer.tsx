import Image from "next/image";
import React from "react";

interface ImageContainerProps {
  image: string;
}
const ImageContainer: React.FC<ImageContainerProps> = ({ image }) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-1 rounded-lg overflow-hidden">
        <div className="aspect-w-16 aspect-h-9">
          <img
            className="w-full object-cover"
            src={image}
            alt="Deep Learning"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageContainer;
