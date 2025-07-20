import HeroBanner from '~/components/HeroBanner/heroBanner'
import Layout from '../layouts/layout/layout'
import { FeatureGrid3Items } from '~/components/FeatureGrid/FeatureGrid'
import DetailedFeatureSection, { FeatureDetail } from '~/components/DetailedFeatureSection/DetailedFeatureSection'
import LicenseSection from '~/components/LicenseSection/LicenseSection'
import CallToActionBanner from '~/components/CallToActionBanner/CallToActionBanner'

// Feature definitions (icon, title for grid) - descriptions for detailed view are separate
const featuresForGrid = {
  multipleInstances: { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_22_35)">
                            <path d="M9.27661 11.9015C9.8813 12.2015 10.4344 12.5953 10.9172 13.0828C11.4 13.5703 11.7985 14.1234 12.0985 14.7234C17.0579 13.3171 19.4438 10.9968 20.6063 8.81713C21.7782 6.62338 21.886 4.24213 21.6375 2.36244C19.7579 2.11401 17.3766 2.22182 15.1829 3.39369C13.0032 4.55619 10.6829 6.94682 9.27661 11.9015ZM18 14.6296V18.4828C18 19.6734 17.3719 20.7796 16.3454 21.3843L12.1969 23.8453C11.85 24.0515 11.4188 24.0562 11.0672 23.8546C10.7157 23.6531 10.5 23.2828 10.5 22.8749V17.4984C10.5 16.439 10.0782 15.4218 9.32817 14.6718C8.57817 13.9218 7.56098 13.4999 6.50161 13.4999H1.12505C0.72192 13.4999 0.34692 13.2843 0.145358 12.9328C-0.0562045 12.5812 -0.051517 12.1499 0.154733 11.8031L2.61567 7.65463C3.22505 6.62807 4.32661 5.99994 5.51723 5.99994H9.37036C13.2047 -0.178181 19.1625 -0.398493 22.6829 0.248382C23.2266 0.34682 23.6532 0.773382 23.7516 1.31713C24.3985 4.83744 24.1782 10.7953 18 14.6296ZM1.32661 23.9953C0.576608 24.014 -0.014017 23.4234 0.00473297 22.6734C0.0469205 20.9062 0.360983 17.7984 1.9688 16.1953C3.5813 14.5828 6.19223 14.5828 7.80473 16.1953C9.41723 17.8078 9.41723 20.4187 7.80473 22.0312C6.20161 23.639 3.0938 23.9531 1.32661 23.9953ZM3.67973 20.9718C4.27973 20.939 5.14223 20.7984 5.61567 20.3296C6.15005 19.7953 6.15005 18.9234 5.61567 18.389C5.0813 17.8546 4.20942 17.8546 3.67505 18.389C3.20161 18.8624 3.06567 19.7249 3.03286 20.3249C3.00942 20.6999 3.30942 20.9953 3.68442 20.9765L3.67973 20.9718ZM15.375 6.74994C15.375 6.25266 15.5726 5.77575 15.9242 5.42412C16.2759 5.07249 16.7528 4.87494 17.25 4.87494C17.7473 4.87494 18.2242 5.07249 18.5759 5.42412C18.9275 5.77575 19.125 6.25266 19.125 6.74994C19.125 7.24723 18.9275 7.72414 18.5759 8.07577C18.2242 8.4274 17.7473 8.62494 17.25 8.62494C16.7528 8.62494 16.2759 8.4274 15.9242 8.07577C15.5726 7.72414 15.375 7.24723 15.375 6.74994Z" fill="#172B4D"/>
                            </g>
                            <defs>
                <clipPath id="clip0_22_35">
                    <rect width="24" height="24" fill="white"/>
                </clipPath>
            </defs>
        </svg>, title: 'Multiple Editor Instances' },
  smartSync: { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.40625 8.77031C5.6625 5.81719 8.59219 3.75 12 3.75C13.8609 3.75 15.6469 4.49063 16.9641 5.80781L19.4109 8.25H16.875C16.2516 8.25 15.75 8.75156 15.75 9.375C15.75 9.99844 16.2516 10.5 16.875 10.5H22.125C22.7484 10.5 23.25 9.99844 23.25 9.375V4.125C23.25 3.50156 22.7484 3 22.125 3C21.5016 3 21 3.50156 21 4.125V6.66094L18.5578 4.21406C16.8188 2.475 14.4609 1.5 12 1.5C7.65938 1.5 3.93281 4.13438 2.33437 7.88906C2.09062 8.46094 2.35781 9.12188 2.92969 9.36563C3.50156 9.60938 4.1625 9.34219 4.40625 8.77031ZM21.6562 16.1297C21.9 15.5578 21.6375 14.8969 21.0656 14.6531C20.4937 14.4094 19.8328 14.6719 19.5891 15.2438C18.3281 18.1922 15.4031 20.25 12 20.25C10.1391 20.25 8.35313 19.5094 7.03594 18.1922L4.58906 15.75H7.125C7.74844 15.75 8.25 15.2484 8.25 14.625C8.25 14.0016 7.74844 13.5 7.125 13.5H1.875C1.25156 13.5 0.75 14.0016 0.75 14.625V19.875C0.75 20.4984 1.25156 21 1.875 21C2.49844 21 3 20.4984 3 19.875V17.3391L5.44219 19.7812C7.18125 21.525 9.53906 22.5 12 22.5C16.3359 22.5 20.0531 19.875 21.6562 16.1297Z" fill="#172B4D"/>
</svg>, title: 'Smart Sync' },
  themeCustomization: { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_34_42)">
    <path d="M21.75 12.1031C21.75 12.2297 21.7031 12.3469 21.5531 12.4781C21.375 12.6234 21.0797 12.75 20.7188 12.75H16.125C13.6406 12.75 11.625 14.7656 11.625 17.25C11.625 17.5688 11.6578 17.8781 11.7234 18.1781C11.8781 18.9141 12.2016 19.6359 12.3984 20.0812C12.4312 20.1562 12.4641 20.2219 12.4875 20.2828C12.7219 20.8219 12.75 21.0047 12.75 21.0844C12.75 21.3328 12.6609 21.5297 12.5719 21.6375C12.5297 21.6891 12.4969 21.7125 12.4781 21.7219C12.4641 21.7312 12.4406 21.7359 12.4031 21.7406C12.2672 21.7453 12.1359 21.75 12 21.75C6.61406 21.75 2.25 17.3859 2.25 12C2.25 6.61406 6.61406 2.25 12 2.25C17.3859 2.25 21.75 6.61406 21.75 12C21.75 12.0328 21.75 12.0656 21.75 12.1031ZM24 12.1266C24 12.0844 24 12.0422 24 12C24 5.37188 18.6281 0 12 0C5.37188 0 0 5.37188 0 12C0 18.6281 5.37188 24 12 24C12.1641 24 12.3328 23.9953 12.4969 23.9906C13.9875 23.9297 15 22.5797 15 21.0844C15 20.4047 14.7141 19.7578 14.4328 19.1156C14.2312 18.6562 14.025 18.1922 13.9266 17.7141C13.8938 17.5641 13.8797 17.4094 13.8797 17.25C13.8797 16.0078 14.8875 15 16.1297 15H20.7188C22.4297 15 23.9859 13.8375 24.0047 12.1266H24ZM7.5 12C7.5 11.6022 7.34196 11.2206 7.06066 10.9393C6.77936 10.658 6.39782 10.5 6 10.5C5.60218 10.5 5.22064 10.658 4.93934 10.9393C4.65804 11.2206 4.5 11.6022 4.5 12C4.5 12.3978 4.65804 12.7794 4.93934 13.0607C5.22064 13.342 5.60218 13.5 6 13.5C6.39782 13.5 6.77936 13.342 7.06066 13.0607C7.34196 12.7794 7.5 12.3978 7.5 12ZM7.5 9C7.89782 9 8.27936 8.84196 8.56066 8.56066C8.84196 8.27936 9 7.89782 9 7.5C9 7.10218 8.84196 6.72064 8.56066 6.43934C8.27936 6.15804 7.89782 6 7.5 6C7.10218 6 6.72064 6.15804 6.43934 6.43934C6.15804 6.72064 6 7.10218 6 7.5C6 7.89782 6.15804 8.27936 6.43934 8.56066C6.72064 8.84196 7.10218 9 7.5 9ZM13.5 6C13.5 5.60218 13.342 5.22064 13.0607 4.93934C12.7794 4.65804 12.3978 4.5 12 4.5C11.6022 4.5 11.2206 4.65804 10.9393 4.93934C10.658 5.22064 10.5 5.60218 10.5 6C10.5 6.39782 10.658 6.77936 10.9393 7.06066C11.2206 7.34196 11.6022 7.5 12 7.5C12.3978 7.5 12.7794 7.34196 13.0607 7.06066C13.342 6.77936 13.5 6.39782 13.5 6ZM16.5 9C16.8978 9 17.2794 8.84196 17.5607 8.56066C17.842 8.27936 18 7.89782 18 7.5C18 7.10218 17.842 6.72064 17.5607 6.43934C17.2794 6.15804 16.8978 6 16.5 6C16.1022 6 15.7206 6.15804 15.4393 6.43934C15.158 6.72064 15 7.10218 15 7.5C15 7.89782 15.158 8.27936 15.4393 8.56066C15.7206 8.84196 16.1022 9 16.5 9Z" fill="white"/>
    </g>
    <defs>
    <clipPath id="clip0_34_42">
    <rect width="24" height="24" fill="white"/>
    </clipPath>
    </defs>
</svg>, title: 'Theme Customization' },
  importExport: { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_34_47)">
    <path d="M13.125 1.125C13.125 0.501562 12.6234 0 12 0C11.3766 0 10.875 0.501562 10.875 1.125V13.7859L6.42188 9.33281C5.98125 8.89219 5.26875 8.89219 4.83281 9.33281C4.39687 9.77344 4.39219 10.4859 4.83281 10.9219L11.2031 17.2969C11.6438 17.7375 12.3562 17.7375 12.7922 17.2969L19.1719 10.9219C19.6125 10.4812 19.6125 9.76875 19.1719 9.33281C18.7313 8.89688 18.0188 8.89219 17.5828 9.33281L13.1297 13.7859L13.125 1.125ZM6.0375 14.25H3C1.34531 14.25 0 15.5953 0 17.25V21C0 22.6547 1.34531 24 3 24H21C22.6547 24 24 22.6547 24 21V17.25C24 15.5953 22.6547 14.25 21 14.25H17.9625L15.7125 16.5H21C21.4125 16.5 21.75 16.8375 21.75 17.25V21C21.75 21.4125 21.4125 21.75 21 21.75H3C2.5875 21.75 2.25 21.4125 2.25 21V17.25C2.25 16.8375 2.5875 16.5 3 16.5H8.2875L6.0375 14.25ZM20.25 19.125C20.25 18.8266 20.1315 18.5405 19.9205 18.3295C19.7095 18.1185 19.4234 18 19.125 18C18.8266 18 18.5405 18.1185 18.3295 18.3295C18.1185 18.5405 18 18.8266 18 19.125C18 19.4234 18.1185 19.7095 18.3295 19.9205C18.5405 20.1315 18.8266 20.25 19.125 20.25C19.4234 20.25 19.7095 20.1315 19.9205 19.9205C20.1315 19.7095 20.25 19.4234 20.25 19.125Z" fill="white"/>
    </g>
    <defs>
    <clipPath id="clip0_34_47">
    <rect width="24" height="24" fill="white"/>
    </clipPath>
    </defs>
</svg>, title: 'Import/Export Configurations' },
  instanceSettings: { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_34_55)">
    <path d="M17.2266 4.91719C17.1891 4.58906 17.0484 4.275 16.7953 4.02188L13.3266 0.548438C12.5953 -0.182812 11.4094 -0.182812 10.6734 0.548438L7.20469 4.02188C6.95625 4.27031 6.81094 4.58906 6.77344 4.91719C6.72656 5.35313 6.86719 5.80781 7.20469 6.14531L10.9406 9.88125C11.1891 10.1297 11.5078 10.275 11.8359 10.3125C11.9484 10.3266 12.0563 10.3266 12.1688 10.3125C12.4969 10.275 12.8109 10.1344 13.0641 9.88125L16.7953 6.14062C17.1328 5.80312 17.2734 5.35313 17.2266 4.9125V4.91719ZM10.3078 11.8359C10.2703 11.5078 10.1297 11.1937 9.87656 10.9406L6.14062 7.20469C5.80312 6.86719 5.35313 6.72656 4.9125 6.77344C4.58438 6.81094 4.27031 6.95156 4.01719 7.20469L0.548438 10.6734C-0.182812 11.4047 -0.182812 12.5906 0.548438 13.3266L4.02188 16.8C4.27031 17.0484 4.58906 17.1938 4.91719 17.2313C5.35313 17.2781 5.80781 17.1375 6.14531 16.8L9.88125 13.0641C10.1297 12.8156 10.275 12.4969 10.3125 12.1688C10.3266 12.0563 10.3266 11.9484 10.3125 11.8359H10.3078ZM11.8312 13.6922C11.5031 13.7297 11.1891 13.8703 10.9359 14.1234L7.20469 17.8594C6.86719 18.1969 6.72656 18.6469 6.77344 19.0875C6.81094 19.4156 6.95156 19.7297 7.20469 19.9828L10.6781 23.4562C11.4094 24.1875 12.5953 24.1875 13.3312 23.4562L16.8047 19.9828C17.0531 19.7344 17.1984 19.4156 17.2359 19.0875C17.2828 18.6516 17.1422 18.1969 16.8047 17.8594L13.0687 14.1234C12.8203 13.875 12.5016 13.7297 12.1734 13.6922C12.0609 13.6781 11.9531 13.6781 11.8406 13.6922H11.8312ZM13.6875 12.1688C13.725 12.4969 13.8656 12.8109 14.1188 13.0641L17.8594 16.7953C18.1969 17.1328 18.6469 17.2734 19.0875 17.2266C19.4156 17.1891 19.7297 17.0484 19.9828 16.7953L23.4562 13.3219C24.1875 12.5906 24.1875 11.4047 23.4562 10.6688L19.9828 7.19531C19.7344 6.94688 19.4156 6.80156 19.0875 6.76406C18.6516 6.71719 18.1969 6.85781 17.8594 7.19531L14.1234 10.9312C13.875 11.1797 13.7297 11.4984 13.6922 11.8266C13.6781 11.9391 13.6781 12.0469 13.6922 12.1594L13.6875 12.1688ZM12 2.40469L14.6766 5.08125L12 7.75781L9.32344 5.08125L12 2.40469ZM2.40469 12L5.08125 9.32344L7.75781 12L5.08125 14.6766L2.40469 12ZM12 21.5953L9.32344 18.9188L12 16.2422L14.6766 18.9188L12 21.5953ZM21.5953 12L18.9188 14.6766L16.2422 12L18.9188 9.32344L21.5953 12Z" fill="white"/>
    </g>
    <defs>
    <clipPath id="clip0_34_55">
    <rect width="24" height="24" fill="white"/>
    </clipPath>
    </defs>
</svg>, title: 'Instance-Specific Settings' },
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