import React from 'react'
import Layout from '../components/Layout'
import GoalsCard from '../components/GoalsCard'
import DailyGoalProgress from '../components/DailyGoalProgress'

const Goals = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <GoalsCard />
        <DailyGoalProgress />
      </div>
    </Layout>
  )
}

export default Goals