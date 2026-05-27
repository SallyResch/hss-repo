import HeroSection from '@/components/HeroSection'
import heroimg from '../../public/Wireframe.png'
import Image from 'next/image'
import RoundedWave from "@/app/assets/RoundedWave.svg";
import kidIcon from "@/app/assets/kid.svg";
import kiddIcon from "@/app/assets/kidd.svg";
import teenIcon from "@/app/assets/teen.svg";
import adultIcon from "@/app/assets/adult.svg";
import familyIcon from "@/app/assets/family.svg";
import bigBlueWave from "@/public/Wave - Blue.png"
type Props = {}

export default function Avdelningar({ }: Props) {
  return (
    <div>
      <HeroSection
        title="Avdelningar"
        description="Verksamheten är indelad efter ålder. Varje avdelning har sitt eget program och sina egna utmaningar"
        imageUrl={heroimg}
        mobileImgUrl={heroimg}
        showButtons={false}
        variant="subpage" />
      <div className='m-auto max-w-[1000]'>
        <Image src={bigBlueWave} height={6} alt='a wave to get feeling of the sea' />
        <div className='flex flex-row  justify-between'>
          <Image src={kidIcon} width={100} alt='Spårare Scouter' />
          <div className='text-hss-green'>Sjöhumlor/Spårare</div>
          <div>8-9 år</div>
        </div>
        <div className='min-w-xs max-w-5xl justify-center'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Excepturi autem facilis dolores aspernatur eligendi ratione, quia,
          praesentium beatae, aliquid dicta repellendus.
          Natus cumque repellat est harum, quas quos dolorum architecto.
        </div>
        <Image src={RoundedWave} height={3} width={1000} alt='Blue wave for the feeling of the sea' />
      </div>
      <div className='m-auto max-w-[1000]'>
        <div className='flex flex-row  justify-between'>
          <Image src={kiddIcon} width={100} alt='Kapare' />
          <div className='text-hss-skyblue'>Kapare/Upptäckare</div>
          <div>10-11 år</div>
        </div>
        <div className='min-w-xs max-w-5xl justify-center'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Excepturi autem facilis dolores aspernatur eligendi ratione, quia,
          praesentium beatae, aliquid dicta repellendus.
          Natus cumque repellat est harum, quas quos dolorum architecto.
        </div>
        <Image src={RoundedWave} height={3} width={1000} alt='Blue wave for the feeling of the sea' />
      </div>
      <div className='m-auto max-w-[1000]'>
        <div className='flex flex-row  justify-between'>
          <Image src={teenIcon} width={100} alt='Spårare Scouter' />
          <div className='text-hss-orange'>Konvojen/Äventyrare</div>
          <div>12-14 år</div>
        </div>
        <div className='min-w-xs max-w-5xl justify-center'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Excepturi autem facilis dolores aspernatur eligendi ratione, quia,
          praesentium beatae, aliquid dicta repellendus.
          Natus cumque repellat est harum, quas quos dolorum architecto.
        </div>
        <Image src={RoundedWave} height={3} width={1000} alt='Blue wave for the feeling of the sea' />
      </div>
      <div className='m-auto max-w-[1000] min-w-[300]'>
        <div className='flex flex-row  justify-between'>
          <Image src={adultIcon} width={100} alt='Spårare Scouter' />
          <div className='text-hss-pink'>Utmanare</div>
          <div>15 + år</div>
        </div>
        <div className='min-w-xs max-w-5xl justify-center'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Excepturi autem facilis dolores aspernatur eligendi ratione, quia,
          praesentium beatae, aliquid dicta repellendus.
          Natus cumque repellat est harum, quas quos dolorum architecto.
        </div>
        <Image src={RoundedWave} height={3} width={1000} alt='Blue wave for the feeling of the sea' />
      </div>
      <div className='m-auto max-w-[1000]'>
        <div className='flex flex-row  justify-between'>
          <Image src={familyIcon} width={100} alt='Spårare Scouter' />
          <div className='text-hss-darkblue'>Familjescouting</div>
          <div>Alla åldrar</div>
        </div>
        <div className='min-w-xs max-w-5xl justify-center'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Excepturi autem facilis dolores aspernatur eligendi ratione, quia,
          praesentium beatae, aliquid dicta repellendus.
          Natus cumque repellat est harum, quas quos dolorum architecto.
        </div>
        <Image src={RoundedWave} height={3} width={1000} alt='Blue wave for the feeling of the sea' />
      </div>
    </div>
  )
}