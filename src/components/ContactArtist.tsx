import React, { useRef, useState } from 'react'

interface IProps {
    email: string
}

export const ContactArtist: React.FC<IProps> = ({ email }) => {

    const msgRef = useRef<HTMLTextAreaElement>(null)
    const [isDisabeld, setIsDisabeld] = useState(false)


    const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault()
        const msg = msgRef.current?.value
        if (msg) {
            
            
            msgRef.current.value = ""
        }
        setIsDisabeld(true)
    }

   
    
    return (
        <div className="contact-artist full main-container">
            <form onSubmit={handleSubmit} className="flex column">
                <label>
                    <h3>Write your message</h3>
                    <textarea name="" ref={msgRef} placeholder="Enter your message" disabled={isDisabeld}></textarea>
                </label>
                {!isDisabeld && <button className='btn'>Send</button>}
                {isDisabeld && <button onClick={() => setIsDisabeld(false)} className='btn'>Send Another Message</button>}
            </form>
            <a href={`mailto:natinadav932@gmail.com?subject="New Message from Me"`}>sadsada</a>
        </div>
    )
}
