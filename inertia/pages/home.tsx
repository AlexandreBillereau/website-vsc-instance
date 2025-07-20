import HeroBanner from '~/components/HeroBanner/heroBanner'
import Layout from '../layouts/layout/layout'
import { FeatureGrid2Items, FeatureGrid3Items } from '~/components/FeatureGrid/FeatureGrid'
import DetailedFeatureSection, { FeatureDetail } from '~/components/DetailedFeatureSection/DetailedFeatureSection'
import LicenseSection from '~/components/LicenseSection/LicenseSection'
import CallToActionBanner from '~/components/CallToActionBanner/CallToActionBanner'

// Feature definitions (icon, title for grid) - descriptions for detailed view are separate
const featuresForGrid = {
  multipleInstances: { icon: '🚀', title: 'Multiple Editor Instances' },
  smartSync: { icon: '🔄', title: 'Smart Sync' },
  themeCustomization: { icon: '🎨', title: 'Theme Customization' },
  importExport: { icon: '📦', title: 'Import/Export Configurations' },
  instanceSettings: { icon: '🎯', title: 'Instance-Specific Settings' },
}

// Detailed descriptions for the DetailedFeatureSection
const detailedFeaturesData: FeatureDetail[] = [
  {
    id: 'multiple-instances',
    icon: featuresForGrid.multipleInstances.icon,
    title: featuresForGrid.multipleInstances.title,
    description: 'Launch and manage multiple VSCode and Cursor instances in parallel. This allows you to organize your work environments effectively, dedicating separate instances for different projects or tasks without interference. Keep your settings, extensions, and workspaces cleanly separated for maximum productivity.',
  },
  {
    id: 'smart-sync',
    icon: featuresForGrid.smartSync.icon,
    title: featuresForGrid.smartSync.title,
    description: 'Utilize a core template to automatically install a base set of essential extensions across all your instances. While maintaining this common foundation, each instance retains the flexibility to have its own unique extensions, ensuring consistency where needed and customization where desired, without affecting other environments.',
  },
  {
    id: 'theme-customization',
    icon: featuresForGrid.themeCustomization.icon,
    title: featuresForGrid.themeCustomization.title,
    description: 'Personalize each editor instance by assigning it a unique name and a distinct color code. This feature enables you to change the title bar color, providing immediate visual cues for quick identification of the instance you are currently working with, streamlining your workflow when juggling multiple projects.',
  },
  {
    id: 'import-export',
    icon: featuresForGrid.importExport.icon,
    title: featuresForGrid.importExport.title,
    description: 'Easily export your carefully crafted configurations, including settings and extension lists, to share them with your team members or to back them up. Conversely, you can import a configuration file to instantly restore your ideal setup on a new machine or for a new project, ensuring a consistent and efficient development environment.',
  },
  {
    id: 'instance-settings',
    icon: featuresForGrid.instanceSettings.icon,
    title: featuresForGrid.instanceSettings.title,
    description: 'Maintain completely separate settings, extensions, and even UI states for each project or instance. This isolation is ideal for testing new extensions without impacting your primary development environment, or for tailoring an instance specifically to the unique requirements of a particular project or language.',
  },
]

export default function Home() {
  return (
    <Layout>
      <HeroBanner />
      <div className="content-wrapper-dark">
        <FeatureGrid3Items />
      </div>

      <div className="content-wrapper-dark">
        <DetailedFeatureSection features={detailedFeaturesData} />
      </div>

      <div className="content-wrapper-dark">
        <LicenseSection />
      </div>

      <div className="content-wrapper-dark">
        <CallToActionBanner 
          downloadUrl="#" 
          buttonText="Download Now"
          subText="Ready to streamline your multi-instance workflow? Get VSCode Instance Manager today!"
        />
      </div>

      {/* TODO: Add Final Call to Action Section */}
    </Layout>
  )
}