import HeroSection from '@/components/HeroSection'
import heroimg from '../../public/Wireframe.png'
import Image from 'next/image'
import RoundedWave from "@/app/assets/RoundedWave.svg";
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
        <div className='flex flex-row  justify-between'>
          <div>LOGGA</div>
          <div>Avdelning</div>
          <div>Ålder</div>
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
          <div>LOGGA</div>
          <div>Avdelning</div>
          <div>Ålder</div>
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
          <div>LOGGA</div>
          <div>Avdelning</div>
          <div>Ålder</div>
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
          <div>LOGGA</div>
          <div>Avdelning</div>
          <div>Ålder</div>
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
          <div>LOGGA</div>
          <div>Avdelning</div>
          <div>Ålder</div>
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