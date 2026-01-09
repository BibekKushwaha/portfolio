import ContactSection from '@/components/ContactSection'
import Experience from '@/components/experience'
import Hero from '@/components/hero'
import AppShowcase from '@/components/project'
import SkillsSection from '@/components/skill'
import TechStack from '@/components/tech_stack'


const HomePge = () => {
  return (
    <div className='mt-18'>
      <Hero/>
      <TechStack/>
      <SkillsSection/>
      <AppShowcase/>
      <Experience/>
      <ContactSection/>   
      </div>
  )
}

export default HomePge

