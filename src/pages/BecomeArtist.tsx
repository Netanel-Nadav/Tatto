import { useRef, useState } from 'react'


interface Worktime {
    sunday?: {
        start: string
        end: string
    }
    monday?: {
        start: string
        end: string
    }
    tuesday?: {
        start: string
        end: string
    }
    ednesday?: {
        start: string
        end: string
    }
    thursday?: {
        start: string
        end: string
    }
    friday?: {
        start: string
        end: string
    }
}


export const BecomeArtist: React.FC = () => {

    const userNameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const phoneRef = useRef<HTMLInputElement>(null)
    const descriptionRef = useRef<HTMLTextAreaElement>(null)
    const [services, setServices] = useState<string[]>([])
    const [protfolio, setProtfolio] = useState<string[]>([])
    const [availability, setAvailability] = useState<Date[]>([])
    const [workTime, setWorkTime] = useState<Worktime | null>(null)


    // PROFILE IMG
    const [profileImgName, setProfileImgName] = useState<null | string | undefined>(null)
    const [profileImg, setProfileImg] = useState<any>(null)


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    const handleSelect = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
        if (services.includes(target.value)) return
        setServices(prevServices => [...prevServices, target.value])
    }

    const removeService = (e: React.MouseEvent<HTMLButtonElement>) => {
        const serviceToDelete = e.currentTarget.innerHTML
        const filteredServices = services.filter(service => service !== serviceToDelete)
        setServices(filteredServices)
    }

    const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        const day = e.target.closest('.wrapper')?.parentElement?.firstChild?.textContent
        const formatDay = day?.slice(0, day.length - 1)
        
        const x =  e.target.className;
        

        if (!formatDay) return
        setWorkTime(prevWorkTime => ({ ...prevWorkTime, [formatDay]: e.target.value }))
    }

    const handleProfileImgUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files

        const fileName = e.target.files?.item(0)?.name;
        setProfileImgName(fileName)

        if (!files) return
        const blob = new Blob([files[0]], { type: files[0].type })
        const fr = new FileReader()
        fr.readAsDataURL(blob)
        fr.addEventListener('load', () => {
            const res = fr.result
            setProfileImg(res)
        })
    }


    const handleProtfolioImgUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (!files) return
        for (let i = 0; i < files.length; i++) {
            const blob = new Blob([files[i]], { type: files[i].type })
            const fr = new FileReader()
            fr.readAsDataURL(blob)
            fr.addEventListener('load', () => {
                const res = fr.result
                setProtfolio((prevPhotos: any) => [...prevPhotos, res])
            })
        }
    }


    console.log(workTime);
    
    return (
        <div className="become-artist">
            <form className='flex column g-2' onSubmit={handleSubmit}>
                <h1>Become one of our many <span>tattoo</span> Artists</h1>

                <span className='file-title'>Profile Image</span>
                <label className='flex file-holder align-center g-1'>
                    <input type="file" placeholder='Profile Image' onChange={handleProfileImgUpload} />
                    {profileImg && <img src={profileImg} alt="" />}
                    <span>{profileImgName}</span>
                </label>


                <label className='flex column'>
                    <span>Full name</span>
                    <input type="text" placeholder='Enter your name' ref={userNameRef} />
                </label>


                <div className="holder flex g-1">
                    <label className='flex column even'>
                        <span>Email</span>
                        <input type="email" placeholder='Enter your Email' ref={emailRef} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
                    </label>
                    <label className='flex column even'>
                        <span>Phone</span>
                        <input type="phone" placeholder='Enter your phone number' ref={phoneRef} />
                    </label>
                </div>

                <label className='flex column'>
                    <span>Description</span>
                    <textarea placeholder='Please write a little description about yourself' ref={descriptionRef}></textarea>
                </label>

                <label className='flex column'>
                    <span>Services</span>
                    <select name="services" onChange={handleSelect}>
                        <option value="realistic">Realistic</option>
                        <option value="colorful">Colorful</option>
                        <option value="letter">Letters</option>
                        <option value="black-and-white">Black and White</option>
                    </select>
                    {services.length > 0 &&
                        <div className='services-wrapper flex g-2 justify-center'>
                            {services.map(service => <span key={service} onClick={removeService}>{service}</span>)}
                        </div>}
                </label>

                <span className='file-title'>Protfolio</span>
                <label className='file-holder'>
                    <input type="file" placeholder='Protfolio Images' onChange={handleProtfolioImgUpload} multiple />
                    {protfolio.length > 0 &&
                        <div className="protfolio-container flex">
                            {protfolio.map(workImg =>
                                <div className="img-container" key={workImg}>
                                    <img src={workImg} alt={workImg} />
                                </div>)}
                        </div>
                    }
                </label>

                <div className="container flex g-2">
                    <label className='flex column'>
                        <span className='day-name'>Sunday:</span>
                        <div className="wrapper flex g-1">
                            <input type="time" className='start' onChange={handleDate} />
                            <input type="time" className='end' onChange={handleDate} />
                        </div>
                    </label>
                    <label className='flex column'>
                        <span>Monday:</span>
                        <div className="wrapper flex g-1">
                            <input type="time" onChange={handleDate} />
                            <input type="time" onChange={handleDate} />
                        </div>
                    </label>
                    <label className='flex column'>
                        <span>Tuesday:</span>
                        <div className="wrapper flex g-1">
                            <input type="time" onChange={handleDate} />
                            <input type="time" onChange={handleDate} />
                        </div>
                    </label>
                    <label className='flex column'>
                        <span>Wednesday:</span>
                        <div className="wrapper flex g-1">
                            <input type="time" onChange={handleDate} />
                            <input type="time" onChange={handleDate} />
                        </div>
                    </label>
                    <label className='flex column'>
                        <span>Thursday:</span>
                        <div className="wrapper flex g-1">
                            <input type="time" onChange={handleDate} />
                            <input type="time" onChange={handleDate} />
                        </div>
                    </label>
                    <label className='flex column'>
                        <span>Friday:</span>
                        <div className="wrapper flex g-1">
                            <input type="time" onChange={handleDate} />
                            <input type="time" onChange={handleDate} />
                        </div>
                    </label>
                </div>
                <button>Signup</button>
            </form>
        </div>
    )
}