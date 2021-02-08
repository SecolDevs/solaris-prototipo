const ImagenPaquete = ({ datos }) => {
  const { data } = datos

  return (
    <img
      src={data.full_url}
      className="img-fluid rounded"
      loading="lazy"
      alt=""
    />
  )
}

export default ImagenPaquete
