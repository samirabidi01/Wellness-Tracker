import React from 'react'
import StepsCard from '../components/StepsCard'
import WeeklyStepsChart from '../components/charts/WeeklyStepsChart'
import Layout from '../components/Layout'

const Steps = () => {
  return (
      <Layout>
        <div className="space-y-6">
          <StepsCard />
          <WeeklyStepsChart />
        </div>
      </Layout>
  )
}

export default Steps