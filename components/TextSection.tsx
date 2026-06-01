interface TextSectionProps {
  title: string;
  paragraphs: string[];
}

const TextSection = ({
  title,
  paragraphs,
}: TextSectionProps) => {
  return (
    <section className="w-full px-6 py-12 md:px-20 md:py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-3xl font-semibold text-hss-mediumblue md:text-5xl">
          {title}
        </h2>

        <div className="space-y-8">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg leading-relaxed text-black md:text-2xl"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TextSection;