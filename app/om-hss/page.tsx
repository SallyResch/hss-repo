import HeroSection from '@/components/HeroSection'
import heroimg from '../../public/Wireframe.png'

type Props = {}

export default function OmHss({ }: Props) {
    return (
        <div>
          <HeroSection 
          title="Bli Scout" 
          description="Har du eller dit barn funderingar på att bli scout, nedan följer information om vad som kan förväntas av dig eller dit barn" 
          imageUrl={heroimg}
          mobileImgUrl={heroimg}
          showButtons={false}
          variant="subpage"/>
        </div>
    )
}