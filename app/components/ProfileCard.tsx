import React from 'react'

interface ProfileCardProps {
    nama: string,
    gelar: string,
    jabatan: string,

}

const ProfileCard: React.FC<ProfileCardProps> = ({nama, jabatan, gelar}) => {
    return (
        <div className="flex items-center w-full justify-center py-8">

            <div className="max-w-xs">
                <div className="bg-[#fad6b3] shadow-xl rounded-lg py-3 w-56">
                    <div className="photo-wrapper p-2">
                        <img className="w-32 h-32 rounded-full mx-auto" src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="John Doe" />
                    </div>
                    <div className="p-2">
                        <h3 className="text-center text-xl text-[#3E362E] font-medium leading-8">{nama}</h3>
                        <h3 className="text-center text-xl text-[#3E362E] font-medium leading-8">{gelar}</h3>
                        <div className="text-center text-[#9d866f] text-xs font-semibold">
                            <p>{jabatan}</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>

    )
}

export default ProfileCard
