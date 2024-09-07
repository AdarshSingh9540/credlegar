import React from 'react'

export default function Actions() {
  return (
    <div className='w-full bg-gray-800 grid grid-cols-3 p-5 gap-5 h-40 rounded-xl'>
      <div className="h-full bg-primary p-2 rounded-lg hover:shadow-2xl text-center">
        <section >
            <p className=' text-primary-foreground font-semibold text-center pt-10 text-lg'>Add Work Experience</p>
        </section>
      </div>
      <div className="h-full bg-primary rounded-lg hover:shadow-2xl">
      <section >
            <p className='text-primary-foreground font-semibold text-center pt-10 text-lg'>Edit Work Experience</p>
        </section>
      </div>
      <div className="h-full bg-primary rounded-lg hover:shadow-2xl">
      <section >
            <p className='text-primary-foreground font-semibold text-center pt-10 text-lg'>Remove Work Experience</p>
        </section>
      </div>
    </div>
  )
}
