import React from "react";

const ShoeCard = ({ imageUrl, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = (imageUrl) => {
    // console.log(imageUrl);
    if (bigShoeImg !== imageUrl.bigShoe) {
      changeBigShoeImage(imageUrl.bigShoe);
    }
  };

  return (
    <>
      <div
        className={`border-2 rounded-xl
        ${
          bigShoeImg === imageUrl.bigShoe
            ? "border-coral-red"
            : "border-transparent"
        }
        cursor-pointer max-sm:flex-1 `}
        onClick={() => handleClick(imageUrl)}
      >
        <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
          <img
            src={imageUrl.thumbnail}
            alt="Shoe Collection"
            width={127}
            height={103}
            className="object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default ShoeCard;
