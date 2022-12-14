/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import { baseUrl } from '../config'

function Index() {
  const [types, setTypes] = React.useState([])

  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${baseUrl}/all`)
      const json = await res.json()
      setTypes(json)
      console.log("Fetch your data in here")
    }
    getData()
    console.log(types)
  }, [types])

  return <section className="index-page">
    <div className="header">
      <p className="header-title">What's hurting?</p>
    </div>
    <div className="index-box">

      {types.map((type, index) => {
        return <div key={index}>
          <Link to={`/types/${type.id}`}>
            <div className="index">
              <div>
                <p className="index-name">{type.name[0].toUpperCase() + type.name.slice(1)}</p>
              </div>    
              <div>      
                <figure className="index-image">
                  <img src={type.image} alt={type.name} />
                </figure>
              </div>
            </div>
          </Link>
        </div>
      })}

    </div>
    <Footer />
  </section>
}

export default Index
