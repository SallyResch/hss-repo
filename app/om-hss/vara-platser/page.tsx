import HeroSection from "@/components/HeroSection";
import varaplasterhero from "@/public/varaplasterhero.png";
export default function VaraPlatser() {
  return (
    <div>
      <HeroSection
        title="Våra platser"
        description="Ruffen och Myset är våra två sjöscoutplatser. Här håller vi möten, läger och äventyr året runt."
        imageUrl={varaplasterhero}
        mobileImgUrl={varaplasterhero}
        showButtons={false}
        variant="subpage"
      />
    </div>
  );
}
