import { CardProps } from "./card.types";

export function Card({ title, description, imageUrl, age }: CardProps) {
  let borderClass = "border-gray-200";

  if (imageUrl) {
    if (imageUrl.includes("kid.")) borderClass = "border-[#4caf50]";
    else if (imageUrl.includes("kidd.")) borderClass = "border-[#2196f3]";
    else if (imageUrl.includes("teen.")) borderClass = "border-[#ff5722]";
    else if (imageUrl.includes("adult.")) borderClass = "border-[#e91e63]";
    else if (imageUrl.includes("family")) borderClass = "border-[#7b1fa2]";
  }

  return (
    <div
      className={`w-full bg-white rounded-[32px] p-6 shadow-sm border-[3px] flex flex-col justify-between min-h-[460px] transition-all hover:shadow-md ${borderClass}`}
    >
      <div>
        <div className="flex justify-between items-start mb-6">
          {imageUrl && (
            <img
              src={imageUrl}
              alt={title}
              className="w-24 h-24 object-contain"
            />
          )}
          {age && (
            <span className="text-xl font-bold text-[#0d335d] mt-2 whitespace-nowrap">
              {age}
            </span>
          )}
        </div>

        <h3 className="mb-5 text-2xl font-bold text-[#0d335d] break-words">
          {title}
        </h3>

        <p className="text-sm text-gray-800 leading-relaxed font-normal whitespace-pre-line">
          {description}
        </p>
      </div>
    </div>
  );
}
