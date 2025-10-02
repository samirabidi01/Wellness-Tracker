import React from 'react'
import SleepCard from '../components/SleepCard'
import WeeklySleepChart from '../components/charts/WeeklySleepChart'
import Layout from '../components/Layout'

const Sleep = () => {
  return (
      <Layout>
        <div className="space-y-6">
          <SleepCard />
          <WeeklySleepChart />
        </div>
      </Layout>
  )
}

export default Sleep