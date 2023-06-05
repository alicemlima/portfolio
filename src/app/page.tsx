import Landing from "@/src/components/Landing"
import TrajectorySection from "@/src/components/TrajectorySection"
import ProjectsSection from "@/src/components/ProjectsSection"
import DivLogos from "../components/DivLogos"
import ContactSection from "@/src/components/ContactSection"
export default function Home() {
  return (
    <main className='mx-auto'>
      <Landing />
      <DivLogos />
      <TrajectorySection />
      <ProjectsSection />
      <ContactSection/>
    </main>
  )
}