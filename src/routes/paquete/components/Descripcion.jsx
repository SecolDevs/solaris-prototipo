const Descripcion = ({ descripcion }) => {
  return (
    <div className="col-lg-7">
      <div dangerouslySetInnerHTML={{ __html: descripcion }} />
    </div>
  )
}

export default Descripcion
