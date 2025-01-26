import { Artist } from "../models/Artist";

import img1 from '../assets/imgs/tattoo1.jpg'
import img2 from '../assets/imgs/tattoo2.jpg'


export const asyncStorage = {
    query,
    getById,
    saveToStorage,
    loadFromStorage
}


const tottoArtists = [
    {
        _id: '1',
        fullname: 'Netanel Nadav',
        email: 'Natinadav932@gmail.com',
        userName: 'Nati',
        password: '123',
        description: 'wow a fucking amazing artist ',
        specialty: ['triable', 'monospace', 'Watermelone'],
        location: {
            city: 'Tel Aviv',
            country: 'israel',
            address: 'Rotchiled 13'
        },
        workImgs: ['https://cdn.pixabay.com/photo/2017/04/18/11/55/artist-2238785_960_720.jpg', 'https://cdn.pixabay.com/photo/2014/06/25/01/02/tattoo-376822_960_720.jpg', 'https://cdn.pixabay.com/photo/2017/01/30/08/36/tattoo-2020311_960_720.jpg', 'https://img.freepik.com/free-photo/man-doing-tattoo-tattoo-salon_1157-24948.jpg?w=1380&t=st=1672130685~exp=1672131285~hmac=f067cb78d41a278bfd903d2e78ecb93d761f8077892390cff9be28f8774d276f', 'https://img.freepik.com/free-photo/man-tattooing-with-gloves-medium-shot_23-2149525953.jpg?w=1380&t=st=1672130707~exp=1672131307~hmac=4d47b1bdc837ff8cc6a0bd45a44586ce27a67518bec0be6e7968b5695d2b9331', 'https://img.freepik.com/free-photo/hands-gloves-doing-tattoo_23-2147834092.jpg?w=826&t=st=1672130717~exp=1672131317~hmac=9c4810c089c48e309238a2df1b62698974830ce843be106659f8b240748b0392', 'https://img.freepik.com/free-photo/tattoo-artist-doing-his-job-medium-shot_23-2149525947.jpg?w=1380&t=st=1672130731~exp=1672131331~hmac=092fe1d08dfb96959151cd8aedfd7e23c41ed5a9a146e747cff3be626984b2ef'],
        rating: 4.6,
        comments: [{ aboutUser: '1', fromUser: '2', txt: 'wow amazing really' }],
        imgUrl: img1
    },
    {
        _id: '2',
        fullname: 'Daniella Shamai',
        email: 'daniella@test.com',
        userName: 'Dani',
        password: '123',
        description: 'i really wanted to **** when we were at school',
        specialty: ['doubleD', 'sexyAss', 'triable'],
        location: {
            city: 'Hertzliya',
            country: 'israel',
            address: 'Hanadiv 13'
        },
        workImgs: ['https://cdn.pixabay.com/photo/2018/03/28/11/51/tattoo-3268988_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/03/26/23/15/owl-1281791_960_720.jpg', 'https://cdn.pixabay.com/photo/2018/04/05/13/56/people-3292901_960_720.jpg', 'https://cdn.pixabay.com/photo/2017/08/06/19/38/hand-2595610_960_720.jpg', 'https://cdn.pixabay.com/photo/2014/12/04/00/06/tattoo-artist-556036_960_720.jpg'],
        rating: 4.8,
        comments: [{ aboutUser: '2', fromUser: '1', txt: 'We had a great NIGHT' }],
        imgUrl: img2
    },
    {
        _id: '1',
        fullname: 'Netanel Nadav',
        email: 'Natinadav932@gmail.com',
        userName: 'Nati',
        password: '123',
        description: 'wow a fucking amazing artist ',
        specialty: ['triable', 'monospace', 'Watermelone'],
        location: {
            city: 'Tel Aviv',
            country: 'israel',
            address: 'Rotchiled 13'
        },
        workImgs: ['https://cdn.pixabay.com/photo/2017/04/18/11/55/artist-2238785_960_720.jpg', 'https://cdn.pixabay.com/photo/2014/06/25/01/02/tattoo-376822_960_720.jpg', 'https://cdn.pixabay.com/photo/2017/01/30/08/36/tattoo-2020311_960_720.jpg', 'https://img.freepik.com/free-photo/man-doing-tattoo-tattoo-salon_1157-24948.jpg?w=1380&t=st=1672130685~exp=1672131285~hmac=f067cb78d41a278bfd903d2e78ecb93d761f8077892390cff9be28f8774d276f', 'https://img.freepik.com/free-photo/man-tattooing-with-gloves-medium-shot_23-2149525953.jpg?w=1380&t=st=1672130707~exp=1672131307~hmac=4d47b1bdc837ff8cc6a0bd45a44586ce27a67518bec0be6e7968b5695d2b9331', 'https://img.freepik.com/free-photo/hands-gloves-doing-tattoo_23-2147834092.jpg?w=826&t=st=1672130717~exp=1672131317~hmac=9c4810c089c48e309238a2df1b62698974830ce843be106659f8b240748b0392', 'https://img.freepik.com/free-photo/tattoo-artist-doing-his-job-medium-shot_23-2149525947.jpg?w=1380&t=st=1672130731~exp=1672131331~hmac=092fe1d08dfb96959151cd8aedfd7e23c41ed5a9a146e747cff3be626984b2ef'],
        rating: 4.6,
        comments: [{ aboutUser: '1', fromUser: '2', txt: 'wow amazing really' }],
        imgUrl: img1
    },
    {
        _id: '2',
        fullname: 'Daniella Shamai',
        email: 'daniella@test.com',
        userName: 'Dani',
        password: '123',
        description: 'i really wanted to **** when we were at school',
        specialty: ['doubleD', 'sexyAss', 'triable'],
        location: {
            city: 'Hertzliya',
            country: 'israel',
            address: 'Hanadiv 13'
        },
        workImgs: ['https://cdn.pixabay.com/photo/2018/03/28/11/51/tattoo-3268988_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/03/26/23/15/owl-1281791_960_720.jpg', 'https://cdn.pixabay.com/photo/2018/04/05/13/56/people-3292901_960_720.jpg', 'https://cdn.pixabay.com/photo/2017/08/06/19/38/hand-2595610_960_720.jpg', 'https://cdn.pixabay.com/photo/2014/12/04/00/06/tattoo-artist-556036_960_720.jpg'],
        rating: 4.8,
        comments: [{ aboutUser: '2', fromUser: '1', txt: 'We had a great NIGHT' }],
        imgUrl: img2
    },
    {
        _id: '1',
        fullname: 'Netanel Nadav',
        email: 'Natinadav932@gmail.com',
        userName: 'Nati',
        password: '123',
        description: 'wow a fucking amazing artist ',
        specialty: ['triable', 'monospace', 'Watermelone'],
        location: {
            city: 'Tel Aviv',
            country: 'israel',
            address: 'Rotchiled 13'
        },
        workImgs: ['https://cdn.pixabay.com/photo/2017/04/18/11/55/artist-2238785_960_720.jpg', 'https://cdn.pixabay.com/photo/2014/06/25/01/02/tattoo-376822_960_720.jpg', 'https://cdn.pixabay.com/photo/2017/01/30/08/36/tattoo-2020311_960_720.jpg', 'https://img.freepik.com/free-photo/man-doing-tattoo-tattoo-salon_1157-24948.jpg?w=1380&t=st=1672130685~exp=1672131285~hmac=f067cb78d41a278bfd903d2e78ecb93d761f8077892390cff9be28f8774d276f', 'https://img.freepik.com/free-photo/man-tattooing-with-gloves-medium-shot_23-2149525953.jpg?w=1380&t=st=1672130707~exp=1672131307~hmac=4d47b1bdc837ff8cc6a0bd45a44586ce27a67518bec0be6e7968b5695d2b9331', 'https://img.freepik.com/free-photo/hands-gloves-doing-tattoo_23-2147834092.jpg?w=826&t=st=1672130717~exp=1672131317~hmac=9c4810c089c48e309238a2df1b62698974830ce843be106659f8b240748b0392', 'https://img.freepik.com/free-photo/tattoo-artist-doing-his-job-medium-shot_23-2149525947.jpg?w=1380&t=st=1672130731~exp=1672131331~hmac=092fe1d08dfb96959151cd8aedfd7e23c41ed5a9a146e747cff3be626984b2ef'],
        rating: 4.6,
        comments: [{ aboutUser: '1', fromUser: '2', txt: 'wow amazing really' }],
        imgUrl: img1
    },
    {
        _id: '2',
        fullname: 'Daniella Shamai',
        email: 'daniella@test.com',
        userName: 'Dani',
        password: '123',
        description: 'i really wanted to **** when we were at school',
        specialty: ['doubleD', 'sexyAss', 'triable'],
        location: {
            city: 'Hertzliya',
            country: 'israel',
            address: 'Hanadiv 13'
        },
        workImgs: ['https://cdn.pixabay.com/photo/2018/03/28/11/51/tattoo-3268988_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/03/26/23/15/owl-1281791_960_720.jpg', 'https://cdn.pixabay.com/photo/2018/04/05/13/56/people-3292901_960_720.jpg', 'https://cdn.pixabay.com/photo/2017/08/06/19/38/hand-2595610_960_720.jpg', 'https://cdn.pixabay.com/photo/2014/12/04/00/06/tattoo-artist-556036_960_720.jpg'],
        rating: 4.8,
        comments: [{ aboutUser: '2', fromUser: '1', txt: 'We had a great NIGHT' }],
        imgUrl: img2
    },
    {
        _id: '1',
        fullname: 'Netanel Nadav',
        email: 'Natinadav932@gmail.com',
        userName: 'Nati',
        password: '123',
        description: 'wow a fucking amazing artist ',
        specialty: ['triable', 'monospace', 'Watermelone'],
        location: {
            city: 'Tel Aviv',
            country: 'israel',
            address: 'Rotchiled 13'
        },
        workImgs: ['https://cdn.pixabay.com/photo/2017/04/18/11/55/artist-2238785_960_720.jpg', 'https://cdn.pixabay.com/photo/2014/06/25/01/02/tattoo-376822_960_720.jpg', 'https://cdn.pixabay.com/photo/2017/01/30/08/36/tattoo-2020311_960_720.jpg', 'https://img.freepik.com/free-photo/man-doing-tattoo-tattoo-salon_1157-24948.jpg?w=1380&t=st=1672130685~exp=1672131285~hmac=f067cb78d41a278bfd903d2e78ecb93d761f8077892390cff9be28f8774d276f', 'https://img.freepik.com/free-photo/man-tattooing-with-gloves-medium-shot_23-2149525953.jpg?w=1380&t=st=1672130707~exp=1672131307~hmac=4d47b1bdc837ff8cc6a0bd45a44586ce27a67518bec0be6e7968b5695d2b9331', 'https://img.freepik.com/free-photo/hands-gloves-doing-tattoo_23-2147834092.jpg?w=826&t=st=1672130717~exp=1672131317~hmac=9c4810c089c48e309238a2df1b62698974830ce843be106659f8b240748b0392', 'https://img.freepik.com/free-photo/tattoo-artist-doing-his-job-medium-shot_23-2149525947.jpg?w=1380&t=st=1672130731~exp=1672131331~hmac=092fe1d08dfb96959151cd8aedfd7e23c41ed5a9a146e747cff3be626984b2ef'],
        rating: 4.6,
        comments: [{ aboutUser: '1', fromUser: '2', txt: 'wow amazing really' }],
        imgUrl: img1
    },
    {
        _id: '2',
        fullname: 'Daniella Shamai',
        email: 'daniella@test.com',
        userName: 'Dani',
        password: '123',
        description: 'i really wanted to **** when we were at school',
        specialty: ['doubleD', 'sexyAss', 'triable'],
        location: {
            city: 'Hertzliya',
            country: 'israel',
            address: 'Hanadiv 13'
        },
        workImgs: ['https://cdn.pixabay.com/photo/2018/03/28/11/51/tattoo-3268988_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/03/26/23/15/owl-1281791_960_720.jpg', 'https://cdn.pixabay.com/photo/2018/04/05/13/56/people-3292901_960_720.jpg', 'https://cdn.pixabay.com/photo/2017/08/06/19/38/hand-2595610_960_720.jpg', 'https://cdn.pixabay.com/photo/2014/12/04/00/06/tattoo-artist-556036_960_720.jpg'],
        rating: 4.8,
        comments: [{ aboutUser: '2', fromUser: '1', txt: 'We had a great NIGHT' }],
        imgUrl: img2
    },
    {
        _id: '1',
        fullname: 'Netanel Nadav',
        email: 'Natinadav932@gmail.com',
        userName: 'Nati',
        password: '123',
        description: 'wow a fucking amazing artist ',
        specialty: ['triable', 'monospace', 'Watermelone'],
        location: {
            city: 'Tel Aviv',
            country: 'israel',
            address: 'Rotchiled 13'
        },
        workImgs: ['https://cdn.pixabay.com/photo/2017/04/18/11/55/artist-2238785_960_720.jpg', 'https://cdn.pixabay.com/photo/2014/06/25/01/02/tattoo-376822_960_720.jpg', 'https://cdn.pixabay.com/photo/2017/01/30/08/36/tattoo-2020311_960_720.jpg', 'https://img.freepik.com/free-photo/man-doing-tattoo-tattoo-salon_1157-24948.jpg?w=1380&t=st=1672130685~exp=1672131285~hmac=f067cb78d41a278bfd903d2e78ecb93d761f8077892390cff9be28f8774d276f', 'https://img.freepik.com/free-photo/man-tattooing-with-gloves-medium-shot_23-2149525953.jpg?w=1380&t=st=1672130707~exp=1672131307~hmac=4d47b1bdc837ff8cc6a0bd45a44586ce27a67518bec0be6e7968b5695d2b9331', 'https://img.freepik.com/free-photo/hands-gloves-doing-tattoo_23-2147834092.jpg?w=826&t=st=1672130717~exp=1672131317~hmac=9c4810c089c48e309238a2df1b62698974830ce843be106659f8b240748b0392', 'https://img.freepik.com/free-photo/tattoo-artist-doing-his-job-medium-shot_23-2149525947.jpg?w=1380&t=st=1672130731~exp=1672131331~hmac=092fe1d08dfb96959151cd8aedfd7e23c41ed5a9a146e747cff3be626984b2ef'],
        rating: 4.6,
        comments: [{ aboutUser: '1', fromUser: '2', txt: 'wow amazing really' }],
        imgUrl: img1
    },
    {
        _id: '2',
        fullname: 'Daniella Shamai',
        email: 'daniella@test.com',
        userName: 'Dani',
        password: '123',
        description: 'i really wanted to **** when we were at school',
        specialty: ['doubleD', 'sexyAss', 'triable'],
        location: {
            city: 'Hertzliya',
            country: 'israel',
            address: 'Hanadiv 13'
        },
        workImgs: ['https://cdn.pixabay.com/photo/2018/03/28/11/51/tattoo-3268988_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/03/26/23/15/owl-1281791_960_720.jpg', 'https://cdn.pixabay.com/photo/2018/04/05/13/56/people-3292901_960_720.jpg', 'https://cdn.pixabay.com/photo/2017/08/06/19/38/hand-2595610_960_720.jpg', 'https://cdn.pixabay.com/photo/2014/12/04/00/06/tattoo-artist-556036_960_720.jpg'],
        rating: 4.8,
        comments: [{ aboutUser: '2', fromUser: '1', txt: 'We had a great NIGHT' }],
        imgUrl: img2
    },
    {
        _id: '1',
        fullname: 'Netanel Nadav',
        email: 'Natinadav932@gmail.com',
        userName: 'Nati',
        password: '123',
        description: 'wow a fucking amazing artist ',
        specialty: ['triable', 'monospace', 'Watermelone'],
        location: {
            city: 'Tel Aviv',
            country: 'israel',
            address: 'Rotchiled 13'
        },
        workImgs: ['https://cdn.pixabay.com/photo/2017/04/18/11/55/artist-2238785_960_720.jpg', 'https://cdn.pixabay.com/photo/2014/06/25/01/02/tattoo-376822_960_720.jpg', 'https://cdn.pixabay.com/photo/2017/01/30/08/36/tattoo-2020311_960_720.jpg', 'https://img.freepik.com/free-photo/man-doing-tattoo-tattoo-salon_1157-24948.jpg?w=1380&t=st=1672130685~exp=1672131285~hmac=f067cb78d41a278bfd903d2e78ecb93d761f8077892390cff9be28f8774d276f', 'https://img.freepik.com/free-photo/man-tattooing-with-gloves-medium-shot_23-2149525953.jpg?w=1380&t=st=1672130707~exp=1672131307~hmac=4d47b1bdc837ff8cc6a0bd45a44586ce27a67518bec0be6e7968b5695d2b9331', 'https://img.freepik.com/free-photo/hands-gloves-doing-tattoo_23-2147834092.jpg?w=826&t=st=1672130717~exp=1672131317~hmac=9c4810c089c48e309238a2df1b62698974830ce843be106659f8b240748b0392', 'https://img.freepik.com/free-photo/tattoo-artist-doing-his-job-medium-shot_23-2149525947.jpg?w=1380&t=st=1672130731~exp=1672131331~hmac=092fe1d08dfb96959151cd8aedfd7e23c41ed5a9a146e747cff3be626984b2ef'],
        rating: 4.6,
        comments: [{ aboutUser: '1', fromUser: '2', txt: 'wow amazing really' }],
        imgUrl: img1
    },
    {
        _id: '2',
        fullname: 'Daniella Shamai',
        email: 'daniella@test.com',
        userName: 'Dani',
        password: '123',
        description: 'i really wanted to **** when we were at school',
        specialty: ['doubleD', 'sexyAss', 'triable'],
        location: {
            city: 'Hertzliya',
            country: 'israel',
            address: 'Hanadiv 13'
        },
        workImgs: ['https://cdn.pixabay.com/photo/2018/03/28/11/51/tattoo-3268988_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/03/26/23/15/owl-1281791_960_720.jpg', 'https://cdn.pixabay.com/photo/2018/04/05/13/56/people-3292901_960_720.jpg', 'https://cdn.pixabay.com/photo/2017/08/06/19/38/hand-2595610_960_720.jpg', 'https://cdn.pixabay.com/photo/2014/12/04/00/06/tattoo-artist-556036_960_720.jpg'],
        rating: 4.8,
        comments: [{ aboutUser: '2', fromUser: '1', txt: 'We had a great NIGHT' }],
        imgUrl: img2
    },
    {
        _id: '1',
        fullname: 'Netanel Nadav',
        email: 'Natinadav932@gmail.com',
        userName: 'Nati',
        password: '123',
        description: 'wow a fucking amazing artist ',
        specialty: ['triable', 'monospace', 'Watermelone'],
        location: {
            city: 'Tel Aviv',
            country: 'israel',
            address: 'Rotchiled 13'
        },
        workImgs: ['https://cdn.pixabay.com/photo/2017/04/18/11/55/artist-2238785_960_720.jpg', 'https://cdn.pixabay.com/photo/2014/06/25/01/02/tattoo-376822_960_720.jpg', 'https://cdn.pixabay.com/photo/2017/01/30/08/36/tattoo-2020311_960_720.jpg', 'https://img.freepik.com/free-photo/man-doing-tattoo-tattoo-salon_1157-24948.jpg?w=1380&t=st=1672130685~exp=1672131285~hmac=f067cb78d41a278bfd903d2e78ecb93d761f8077892390cff9be28f8774d276f', 'https://img.freepik.com/free-photo/man-tattooing-with-gloves-medium-shot_23-2149525953.jpg?w=1380&t=st=1672130707~exp=1672131307~hmac=4d47b1bdc837ff8cc6a0bd45a44586ce27a67518bec0be6e7968b5695d2b9331', 'https://img.freepik.com/free-photo/hands-gloves-doing-tattoo_23-2147834092.jpg?w=826&t=st=1672130717~exp=1672131317~hmac=9c4810c089c48e309238a2df1b62698974830ce843be106659f8b240748b0392', 'https://img.freepik.com/free-photo/tattoo-artist-doing-his-job-medium-shot_23-2149525947.jpg?w=1380&t=st=1672130731~exp=1672131331~hmac=092fe1d08dfb96959151cd8aedfd7e23c41ed5a9a146e747cff3be626984b2ef'],
        rating: 4.6,
        comments: [{ aboutUser: '1', fromUser: '2', txt: 'wow amazing really' }],
        imgUrl: img1
    },
    {
        _id: '2',
        fullname: 'Daniella Shamai',
        email: 'daniella@test.com',
        userName: 'Dani',
        password: '123',
        description: 'i really wanted to **** when we were at school',
        specialty: ['doubleD', 'sexyAss', 'triable'],
        location: {
            city: 'Hertzliya',
            country: 'israel',
            address: 'Hanadiv 13'
        },
        workImgs: ['https://cdn.pixabay.com/photo/2018/03/28/11/51/tattoo-3268988_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/03/26/23/15/owl-1281791_960_720.jpg', 'https://cdn.pixabay.com/photo/2018/04/05/13/56/people-3292901_960_720.jpg', 'https://cdn.pixabay.com/photo/2017/08/06/19/38/hand-2595610_960_720.jpg', 'https://cdn.pixabay.com/photo/2014/12/04/00/06/tattoo-artist-556036_960_720.jpg'],
        rating: 4.8,
        comments: [{ aboutUser: '2', fromUser: '1', txt: 'We had a great NIGHT' }],
        imgUrl: img2
    },
    {
        _id: '1',
        fullname: 'Netanel Nadav',
        email: 'Natinadav932@gmail.com',
        userName: 'Nati',
        password: '123',
        description: 'wow a fucking amazing artist ',
        specialty: ['triable', 'monospace', 'Watermelone'],
        location: {
            city: 'Tel Aviv',
            country: 'israel',
            address: 'Rotchiled 13'
        },
        workImgs: ['https://cdn.pixabay.com/photo/2017/04/18/11/55/artist-2238785_960_720.jpg', 'https://cdn.pixabay.com/photo/2014/06/25/01/02/tattoo-376822_960_720.jpg', 'https://cdn.pixabay.com/photo/2017/01/30/08/36/tattoo-2020311_960_720.jpg', 'https://img.freepik.com/free-photo/man-doing-tattoo-tattoo-salon_1157-24948.jpg?w=1380&t=st=1672130685~exp=1672131285~hmac=f067cb78d41a278bfd903d2e78ecb93d761f8077892390cff9be28f8774d276f', 'https://img.freepik.com/free-photo/man-tattooing-with-gloves-medium-shot_23-2149525953.jpg?w=1380&t=st=1672130707~exp=1672131307~hmac=4d47b1bdc837ff8cc6a0bd45a44586ce27a67518bec0be6e7968b5695d2b9331', 'https://img.freepik.com/free-photo/hands-gloves-doing-tattoo_23-2147834092.jpg?w=826&t=st=1672130717~exp=1672131317~hmac=9c4810c089c48e309238a2df1b62698974830ce843be106659f8b240748b0392', 'https://img.freepik.com/free-photo/tattoo-artist-doing-his-job-medium-shot_23-2149525947.jpg?w=1380&t=st=1672130731~exp=1672131331~hmac=092fe1d08dfb96959151cd8aedfd7e23c41ed5a9a146e747cff3be626984b2ef'],
        rating: 4.6,
        comments: [{ aboutUser: '1', fromUser: '2', txt: 'wow amazing really' }],
        imgUrl: img1
    },
    {
        _id: '2',
        fullname: 'Daniella Shamai',
        email: 'daniella@test.com',
        userName: 'Dani',
        password: '123',
        description: 'i really wanted to **** when we were at school',
        specialty: ['doubleD', 'sexyAss', 'triable'],
        location: {
            city: 'Hertzliya',
            country: 'israel',
            address: 'Hanadiv 13'
        },
        workImgs: ['https://cdn.pixabay.com/photo/2018/03/28/11/51/tattoo-3268988_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/03/26/23/15/owl-1281791_960_720.jpg', 'https://cdn.pixabay.com/photo/2018/04/05/13/56/people-3292901_960_720.jpg', 'https://cdn.pixabay.com/photo/2017/08/06/19/38/hand-2595610_960_720.jpg', 'https://cdn.pixabay.com/photo/2014/12/04/00/06/tattoo-artist-556036_960_720.jpg'],
        rating: 4.8,
        comments: [{ aboutUser: '2', fromUser: '1', txt: 'We had a great NIGHT' }],
        imgUrl: img2
    },
    {
        _id: '2',
        fullname: 'Daniella Shamai',
        email: 'daniella@test.com',
        userName: 'Dani',
        password: '123',
        description: 'i really wanted to **** when we were at school',
        specialty: ['doubleD', 'sexyAss', 'triable'],
        location: {
            city: 'Hertzliya',
            country: 'israel',
            address: 'Hanadiv 13'
        },
        workImgs: ['https://cdn.pixabay.com/photo/2018/03/28/11/51/tattoo-3268988_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/03/26/23/15/owl-1281791_960_720.jpg', 'https://cdn.pixabay.com/photo/2018/04/05/13/56/people-3292901_960_720.jpg', 'https://cdn.pixabay.com/photo/2017/08/06/19/38/hand-2595610_960_720.jpg', 'https://cdn.pixabay.com/photo/2014/12/04/00/06/tattoo-artist-556036_960_720.jpg'],
        rating: 4.8,
        comments: [{ aboutUser: '2', fromUser: '1', txt: 'We had a great NIGHT' }],
        imgUrl: img2
    }
]



async function query(entityType: string, delay = 500): Promise<Artist[]> {
    let entities: any = localStorage.getItem(entityType)
    entities = entities ? JSON.parse(entities) : tottoArtists
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(entities)
        }, delay)
    })
}

async function getById(entityType: string, entityId: string) {
    const entities = await query(entityType)
    const entity = entities.find(currEntity => currEntity._id === entityId)
    return entity
}

// async function post(entityType: string, newEntity: Artist) {
//     const entities = query(entityType)

// }

function saveToStorage(key: string, data: any) {
    return localStorage.setItem(key, JSON.stringify(data))
}

function loadFromStorage(key: string) {
    const data = localStorage.getItem(key)
    if (!data) return 
    return JSON.parse(data)
}