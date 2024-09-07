import React from 'react'

export default function Actions() {
  return (
    <div className='w-full bg-gray-800 grid grid-cols-3 p-5 gap-5 h-40 rounded-xl'>
      <div className="h-full bg-primary p-2 rounded-lg hover:shadow-2xl">
        <section >
            <p className='text-sm text-primary-foreground font-semibold'>Add Work Experience</p>
        </section>
      </div>
      <div className="h-full bg-primary rounded-lg hover:shadow-2xl"></div>
      <div className="h-full bg-primary rounded-lg hover:shadow-2xl"></div>
    </div>
  )
}
