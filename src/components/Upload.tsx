import { ChangeEvent, useState } from 'react'

export const Upload: React.FC = () => {

    const [imgString, setImgString] = useState<string[]>([])


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files

        if(!files) return
        const blob = new Blob([files[0]], { type: files[0].type })
        const fr = new FileReader()
        fr.readAsDataURL(blob)
        fr.addEventListener('load', () => {
            const res = fr.result
            setImgString((prevState: any) => [...prevState, res])
        })
    }

    return (
        <>
            <input type="file" onChange={handleChange} />
            {imgString?.length && imgString.map(image => (
                <img src={image} alt="" />
            ))}
        </>
    )
}
