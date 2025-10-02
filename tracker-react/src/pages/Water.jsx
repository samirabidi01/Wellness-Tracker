import React from 'react'
import WaterCard from '../components/WaterCard'
import WeeklyWaterChart from '../components/charts/WeeklyWaterChart'
import Layout from '../components/Layout'

const Water = () => {
  return (
    <Layout>
      <div className="space-y-6">
    <WaterCard/>
    <WeeklyWaterChart/>
    </div>
    </Layout>
  )
}

export default Water