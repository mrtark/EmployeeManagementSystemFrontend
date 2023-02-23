import React from 'react'

export default function Footer(props) {
  return (
    <>

      <div className="my-5 fixed-bottom1">
        <footer className="text-center text-white" style={{"backgroundColor":"#f1f1f1"}}>
          <div className="container pt-4">
            <section className="mb-4">
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                
                role="button"
                data-mdb-ripple-color="dark"
              ><i className={props.iconf}></i></a>
            </section>
          </div>
          <div className="text-center text-dark p-3" style={{"backgroundColor":"rgba(0, 0, 0, 0.2)"}}>
            © 2023 : 
            <a className="text-dark" href="https://mrtark.com/"> mrtark.com</a>
          </div>
        </footer>

      </div>
    </>
  )
}
