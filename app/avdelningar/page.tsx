import HeroSection from '@/components/HeroSection'
import heroimg from '../../public/Wireframe.png'

type Props = {}

export default function Avdelningar({ }: Props) {
    return (
        <div>
            <HeroSection 
                      title="Vara avdelningar" 
                      description="Verksamheten är indelad efter ålder. Varje avdelning har sitt eget program och sina egna utmaningar" 
                      imageUrl={heroimg}
                      mobileImgUrl={heroimg}
                      showButtons={false}
                      variant="subpage"/>
        </div>
    )
}