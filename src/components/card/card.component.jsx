export default function Card({ name, title, introduction, imageUrl }) {
  console.log(imageUrl)
  return (
    <div className="card">
      <div
        className="card__photo_container"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="card__info">
        <h2 className="name">{name}</h2>
        {title && <h3 className="title">{title}</h3>}
        <p className="introduction">{introduction}</p>
      </div>
    </div>
  )
}
