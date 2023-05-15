import React from 'react'

export const Search = () => {
  return (
      <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
<button className="navbar-toggler" type="button" aria-expanded="false" aria-label="Toggle navigation">
 <span className="navbar-toggler-icon" />
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
 <form className="form-inline my-2 my-lg-0">
   <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Buscar" />
   <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
 </form>
</div>
</nav>

 </>
 )
}
