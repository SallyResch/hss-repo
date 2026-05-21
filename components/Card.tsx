import { CardProps } from "./card.types";

export function Card({ title, description, imageUrl }: CardProps) {
  return (
    <div className="w-full max-w-sm md:max-w-md mx-auto overflow-hidden rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md">
      {/* Render image if imageUrl is provided */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="mb-3 aspect-video w-full rounded-lg object-cover"
        />
      )}

      {/* Card Title and Description */}
      <h3 className="mb-2 text-lg font-bold text-gray-950">{title}</h3>
      <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
    </div>
  );
}
