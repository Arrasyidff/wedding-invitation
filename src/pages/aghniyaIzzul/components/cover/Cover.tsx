import './cover.scss'

function Cover() {
  return (
    <section className='aghniya__cover'>
        <div className="aghniya__cover-header">
            <h2>SAVE THE DATE</h2>
            {window.innerWidth} x {window.innerHeight}
            <p>FOR THE WEDDING OF</p>
        </div>

        <div className='aghniya__cover-content'>
        </div>

        <div className='aghniya__cover-invitation'>
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