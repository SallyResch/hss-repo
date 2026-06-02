import HeroSection from '@/components/HeroSection'
import heroimg from '../../public/Wireframe.png'
import type { Metadata } from 'next'

type Props = {}

export const metadata: Metadata = {
    title: 'HSS | Om HSS',
    description: 'Om Hässelby Strands Sjöscoutkår',
}
export default function OmHss({ }: Props) {
    return (
        <div>
            <HeroSection
                title="Om HSS"
                description="Hässelby Strands Sjöscoutkår - En traditionsrik ideell ungdomsverksamhet sedan många år"
                imageUrl={heroimg}
                mobileImgUrl={heroimg}
                showButtons={false}
                variant="subpage" />
        </div>
    )
}