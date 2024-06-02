import React from 'react'
import ProfileCard from './ProfileCard'

const AboutUs = () => {
    return (
        <div className='flex flex-col w-full  justify-center pt-20 md:gap-5'  style={{ backgroundImage: "url('/desa2.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <ProfileCard
                nama={'Asep Solehuddin'}
                jabatan={'Kepala Desa'}
                gelar='SH.I'
            />
            <div className="flex flex-col md:flex-row justify-between w-full">
                <ProfileCard
                    nama={'Lena Erida R'}
                    jabatan={'Bendahara'}
                    gelar='SPD.I'
                />
                <ProfileCard
                    nama={'Ridwan Ahadiyan'}
                    jabatan={'Sekretaris Desa'}
                    gelar='SE'
                />
            </div>

            <div className="flex flex-col md:flex-row justify-between w-full">
                <ProfileCard
                    nama={'Dadang'}
                    jabatan={'Kasi Kesra'}
                    gelar='Karyana'
                />
                <ProfileCard
                    nama={'Emus'}
                    jabatan={'Kasi Pelayanan'}
                    gelar='Mustari'
                />
                <ProfileCard
                    nama={'Didin'}
                    jabatan={'Kasi Pemerintahan'}
                    gelar='Saepudin'
                />

            </div>
            <div className="flex flex-col md:flex-row justify-between w-full">
                <ProfileCard
                    nama={'Haerul'}
                    jabatan={'Kaur Perencanaan'}
                    gelar='Taufiq'
                />
                <ProfileCard
                    nama={'Fipit Sofiatul'}
                    jabatan={'Kaur Keuangan'}
                    gelar='M,S.Kep.Ner'
                />
                <ProfileCard
                    nama={'UAS'}
                    jabatan={'Kaur Umum'}
                    gelar='-'
                />

            </div>
            <div className="flex flex-col md:flex-row justify-between w-full">
                <ProfileCard
                    nama={'Saripudin'}
                    jabatan={'Kadus I'}
                    gelar='-'
                />
                <ProfileCard
                    nama={'Odas Suparman'}
                    jabatan={'Kadus II'}
                    gelar='-'
                />
                <ProfileCard
                    nama={'Yayat'}
                    jabatan={'Kadus III'}
                    gelar='Sutirahman'
                />
                <ProfileCard
                    nama={'Ujang Syamsudin'}
                    jabatan={'Kadus IV'}
                    gelar='-'
                />
                <ProfileCard
                    nama={'Usep Saepudin'}
                    jabatan={'Kadus V'}
                    gelar='-'
                />

            </div>

            <div className="flex flex-col md:flex-row justify-between w-full">
                <ProfileCard
                    nama={'Tata Kawawita'}
                    jabatan={'Staff I'}
                    gelar='-'
                />
                <ProfileCard
                    nama={'Setiawan Faruzi'}
                    jabatan={'Staff II'}
                    gelar='-'
                />
            </div>






        </div>
    )
}

export default AboutUs
