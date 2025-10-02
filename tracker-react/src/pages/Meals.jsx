import React from 'react'
import MealsCard from '../components/MealsCard'
import MealsForms from '../components/MealsForms'
import Layout from '../components/Layout'

const Meals = () => {
  return (
      <Layout>
        <div className="space-y-6">
          <MealsCard />
          <MealsForms />
        </div>
      </Layout>
  )
}

export default Meals