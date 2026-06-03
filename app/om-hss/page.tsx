import HeroSection from '@/components/HeroSection'
import heroimg from '../../public/Wireframe.png'

type Props = {}

export default function OmHss({ }: Props) {
    return (
        <div>
          <HeroSection 
          title="Om HSS" 
          description="Hässelby Strands Sjöscoutkår - En traditionsrik ideell ungdomsverksamhet sedan många år." 
          imageUrl={heroimg}
          mobileImgUrl={heroimg}
          showButtons={false}
          variant="subpage"/>
        </div>
    )
}