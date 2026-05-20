import Image from "next/image";
import heroImage from "@/public/hero.jpg";
import hasselbyLogo from "@/public/hasselbylogo.png";
import whiteLine from "@/public/whiteline.png";
const HeroSection = () => {
  return (
    <section className="relative w-full h-146.25 md:h-202.5 mt-21.25 overflow-hidden">
      <Image
        src={heroImage}
        alt="HSS Hero Image"
        fill
        priority
        className="object-cover object-bottom"
        sizes="100vw"
      />

      <div
        className="absolute  flex flex-col items-center pt-5 pr-10 pb-5 pl-10.75 gap-5 w-73.5 md:w-177 md:h-133.5 h-58.25 bg-[#003660E5] rounded-br-2xl rounded-bl-2xl
                   top-38.5 left-12 "
      >
        
        <span className="text-[#F4C430] font-bold text-sm md:font-semibold md:text-6xl ">Välkommen till</span>
        <Image
          src={hasselbyLogo}
          alt="HasselbyLogo"
          className="object-contain w-53.5 h-12.75 md:w-127 md:h-30.25 md:bg-opacity-1 bg-opacity-0"
        />
        

        <svg width="502" height="12" viewBox="0 0 502 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.415856 9.99177L24.753 2.96795C28.1319 1.99279 31.7082 1.9258 35.1212 2.77375L58.7962 8.6558C62.0723 9.46975 65.5012 9.44121 68.7634 8.57283L90.306 2.83825C93.652 1.94756 97.1719 1.94079 100.521 2.81859L122.053 8.4618C125.404 9.33983 128.924 9.33281 132.271 8.44144L153.363 2.8238C156.673 1.94226 160.154 1.92551 163.472 2.77516L185.671 8.45958C188.867 9.27799 192.216 9.293 195.419 8.50329L218.887 2.71798C222.182 1.90558 225.63 1.94516 228.906 2.83301L248.884 8.24766C252.182 9.1417 255.655 9.17551 258.97 8.34587L281.459 2.71853C284.708 1.90542 288.11 1.92145 291.351 2.76515L311.795 8.08619C315.387 9.0209 319.167 8.93801 322.714 7.8468L338.443 3.00766C341.701 2.0054 345.161 1.85233 348.494 2.56296L376.133 8.45508C379.114 9.09047 382.2 9.03633 385.157 8.29681L407.966 2.59128C410.891 1.85945 413.945 1.79872 416.897 2.41364L448.23 8.93956C450.663 9.44626 453.169 9.49513 455.619 9.08365L500.911 1.47931" stroke="white" strokeWidth="3"/>
</svg>


        <p className="text-xs text-[#F4C430] md:w-127 md:text-2xl  md:h-26.25 md:font-semibold  italic leading-relaxed">
          Här väntar Äventyret. Oavsett vem du är eller var du kommer ifrån
          finns det ett äventyr som väntar
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
