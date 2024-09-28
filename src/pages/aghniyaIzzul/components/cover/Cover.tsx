import './cover.scss'
import coverImg from '@assets/images/cover-img.png'

function Cover() {
  return (
    <section className='agniya__cover'>
        <div className="agniya__cover-header">
            <h2>SAVE THE DATE</h2>
            <p>FOR THE WEDDING OF</p>
        </div>

        <div className='agniya__cover-content'>
          <img src={coverImg} alt="cover-image" />
        </div>

        <div className='agniya__cover-invitation'>
            <span>KEPADA YTH.</span>
            <span>BAPAK/IBU/SAUDARA/I</span>
            <h1>BPK. ANDRE</h1>
            <span>DI TEMPAT</span>
        </div>

        <button className='agniya__cover-open'>
            BUKA UNDANGAN
        </button>
    </section>
  )
}

export default Cover