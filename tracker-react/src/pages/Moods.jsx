import React from 'react'
import MoodsCard from '../components/MoodsCard'
import MoodCalendar from '../components/MoodCalendar'
import Layout from '../components/Layout'

const Moods = () => {
  return (
  
      <Layout>
        <div className="space-y-6">
          <MoodsCard />
          <MoodCalendar />
        </div>
      </Layout>
 
  )
}

export default Moods