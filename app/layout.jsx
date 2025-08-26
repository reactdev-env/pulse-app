import React from 'react'
import '@/assets/styles/global.css'

export const metadata={
    title:'Property Pulse',
    keywords:'Rental, Property, Sales',
    description:'To find the perfect rental property',
}

const layout = ({children}) => {
  return (
    <div>
      <html>
        <body>
            <main>
                {children}
            </main>
        </body>
      </html>
    </div>
  )
}

export default layout
