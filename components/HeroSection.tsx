import Image from 'next/image'
import heroImage from '@/public/hero.jpg'
const HeroSection = () => {
  return (
    <section >
      HeroSectionComponent
      <Image
        src={heroImage}
        alt="HSS Hero Image"
        fill
        priority
        className="object-cover"
      />
      </section>
  )
}

export default HeroSection