import HeroBanner from '~/components/HeroBanner/heroBanner'
import Layout from '../layouts/layout/layout'
import {  FeatureGrid3Items } from '~/components/FeatureGrid/FeatureGrid'

export default function Home() {
  return (
    <Layout>
      <HeroBanner />
      <div className="content-wrapper-dark">
        <FeatureGrid3Items />
      </div>
    </Layout>
  )
}