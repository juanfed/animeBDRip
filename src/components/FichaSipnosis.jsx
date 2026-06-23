const FichaSipnosis = ({ paragraphs = [] }) => {
  return (
    <section className="sipnosis">
      <div className="sipnosis__tittle">
        <h2>Sinopsis</h2>
      </div>
      <div className="sipnosis__paragraph">
        {paragraphs.filter(Boolean).map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>
    </section>
  )
}

export default FichaSipnosis
