import React from 'react'
import Layout from '../components/Layout'
import WaterCard from '../components/WaterCard'
import SleepCard from '../components/SleepCard'
import StepsCard from '../components/StepsCard'
import MoodsCard from '../components/MoodsCard'
import MealsCard from '../components/MealsCard'
import ExercicesCard from '../components/ExercicesCard'

const Dashboard = () => {
  return (
    <Layout>
      <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
        {/* Water */}
        <WaterCard />
        {/* Sleep */}
        <SleepCard />
        {/* Steps */}
        <StepsCard />
        {/* Mood */}
        <MoodsCard />
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Meals card */}
        <MealsCard />
        {/* Exercide */}
        <ExercicesCard />
      </section>
    </Layout>
  )
}

export default Dashboard