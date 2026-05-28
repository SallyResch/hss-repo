import HeroSection from '@/components/HeroSection'
import StartSection from '@/app/bli-scout/StartSection'
import TextSection from '@/components/TextSection'
import VanligaFragor from '@/app/bli-scout/FAQSection'
import ClothingSection  from '@/app/bli-scout/ClothingSection'
import heroimg from '../../public/Wireframe.png'
type Props = {}

export default function BliScout({ }: Props) {
    return (
        <div>
          <HeroSection 
          title="Bli Scout" 
          description="Har du eller dit barn funderingar på att bli scout, nedan följer information om vad som kan förväntas av dig eller dit barn" 
          imageUrl={heroimg}
          mobileImgUrl={heroimg}
          showButtons={false}
          variant="subpage"/>
        
          <StartSection/>
          <TextSection
              title="Hur fungerar verksamheten?"
              paragraphs={[
              "Vi har möten en gång i veckan under terminstid. Mötena är cirka 2 timmar långa och varierar i innehåll.",
              "Förutom veckans möten arrangerar vi regelbundet hajker (övernattningar) och läger under helger och lov.",
              "Verksamheten är indelad i avdelningar efter ålder. Varje avdelning har sina egna ledare och sitt eget program anpassat efter åldersgruppen.",
              ]}
          />
          <TextSection
              title="Vad föräldrar behöver veta"
              paragraphs={[
              "Som förälder är du alltid välkommen att delta i verksamheten. Vi uppskattar föräldraengagemang och många av våra aktiviteter kräver stöd från föräldrar.",
              "Alla våra ledare är utbildade i Trygga Möten och har registerutdrag. Vi arbetar aktivt för att skapa en trygg och inkluderande miljö för alla barn och unga.",
              "Kommunikation sker främst via e-post. Du kommer få information om hur du får tillgång till dessa kanaler efter registrering.",
              ]}
          />
          <ClothingSection/>
          <VanligaFragor/>
        </div>
    )
}