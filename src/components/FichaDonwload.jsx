import Logos from './Logos.js'

const FichaDonwload = () => {
  return (
    <section className="donwload">
      <div className="donwload__table">
        <table>
          <thead>
            <tr>
              <th>Resolución</th>
              <th>Formato</th>
              <th>Peso</th>
              <th>Servidores</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1080p BD</td>
              <td>MKV</td>
              <td>1GB x capítulo</td>
              <td>Mega - Drive</td>
            </tr>
            <tr>
              <td>1080p Ligero</td>
              <td>MKV</td>
              <td>450M x capítulo</td>
              <td>Mega - Drive</td>
            </tr>
            <tr>
              <td>720p Ligero</td>
              <td>MKV</td>
              <td>130M x capítulo</td>
              <td>Mega - Drive</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="donwload__enlaces">
        <div className="donwload__enlaces--tittle">
          <h2>Enlaces</h2>
        </div>

        <div className="donwload__enlaces--link">
          <h3>Mega</h3>
          <figure>
            <img src={Logos.mega} alt="Mega" loading="lazy" />
          </figure>
        </div>

        <div className="donwload__enlaces--link">
          <h3>Mediafire</h3>
          <figure>
            <img src={Logos.mediafire} alt="Mediafire" loading="lazy" />
          </figure>
        </div>

        <div className="donwload__enlaces--link">
          <h3>Drive</h3>
          <figure>
            <img src={Logos.drive} alt="Google Drive" loading="lazy" />
          </figure>
        </div>
      </div>
    </section>
  )
}

export default FichaDonwload
