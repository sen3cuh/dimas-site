import React from 'react'

const Home = () => {
  return (
    <div className="container">
      <div className="row my-5 align-items-center">
        <div className="col-lg">
          <h1>Hello, I'm Dimas</h1>
          <p>
            I'm a software engineering student at the University of Alberta and
            a current software engineer intern at Bioconversion Databank
            Foundation.{' '}
          </p>
          <p>
            I love arguing about real-world problems and (sometimes) building
            something to solve them. I'm currently interested in web development
            and machine learning. Check out my projects{' '}
            <a className="text-dark" href="/portfolio">
              here.
            </a>
          </p>
        </div>
        <div className="col-lg">
          <div className="row justify-content-center">
            <img src="./assets/profile.jpg" className="rounded-circle w-75" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
