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
        <h2 className="text-3xl font-bold mb-6 text-hss-mediumblue">
          {title}
        </h2>

        <div className="space-y-8">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg mb-4 leading-relaxed text-hss-mediumblue"
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