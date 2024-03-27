import React from "react";

interface FilesContainerProps {
     children: React.ReactNode;
}
  

const FilesContainer: React.FC<FilesContainerProps> = ({ children })=> {
  return (
    <>
      <ul className="flex flex-col justify-end text-start -space-y-px">
      {children}
      </ul>
    </>
  );
};

export default FilesContainer;
