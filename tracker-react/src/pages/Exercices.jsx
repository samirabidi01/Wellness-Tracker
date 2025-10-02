import React from 'react'
import ExercicesCard from '../components/ExercicesCard'
import Layout from '../components/Layout'
import WellnessTracker from '../components/Welness'

const Exercices = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <ExercicesCard />
        <WellnessTracker />
      </div>
    </Layout>
  )
}

export default Exercices