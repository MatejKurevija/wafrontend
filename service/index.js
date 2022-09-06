import axios from "axios";
import $router from "@/router";

//vezan uz konkretni backend
let Service = axios.create({
   /* baseURL: "http://localhost:3100/", */
baseURL: "https://backendmatej2.herokuapp.com/",
    timeout: 3000,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

/* PRIJE SVAKOG */

Service.interceptors.request.use((request) => {
    try {
        request.headers['Authorization'] = 'Bearer ' + Auth.getToken();
    } catch (e) {
        console.error(e);
    }
    return request;
});

Service.interceptors.response.use((response) => response, (error) => {
    if (error.response.status == 401 || error.response.status == 401) {
        Auth.logout()
        //$router.go()
    }
})


let Proizvodi = {
    async getAll(proizvodi) {

        let response = await Service.get(`/Proizvod?${proizvodi}`)
        let data = response.data
        data = data.map((doc) => {
            return {
                imgURL: doc.imageurl,
                id: doc._id,
                Proizvod: doc.Proizvod,
                ProizvodModel: doc.ProizvodModel,
                Cijena: doc.Cijena,
                Opis: doc.Opis,
                NajboljaUporaba: doc.NajboljaUporaba,

            }
        })
        return data
    },



}


/* KORISNICI */


let Auth = {

    async login(username, password) {

        try {
            let response = await Service.post("/auth", {
                username: username,
                password: password
            });

            let user = response.data

            localStorage.setItem("user", JSON.stringify(user));
            return true;
        } catch (error) {
            return false
        }


    },
    async register(username,
        password,
        firstname,
        country,
        city,
        state,
        about,
        adress,
        lastname) {
        let response = await Service.post("/users", {
            username,
            password,
            firstname,
            country,
            city,
            state,
            about,
            adress,
            lastname
        })
        let user = response.data

        localStorage.setItem("user", JSON.stringify(user));

        return true;
    },
    logout() {
        localStorage.removeItem('user');
    },
    getUser() {
        return JSON.parse(localStorage.getItem('user'))
    },
    getToken() {
        let user = Auth.getUser();
        if (user && user.token) {

            return user.token;
        }
    },
    authenticated() {
        let user = Auth.getUser()
        if (user && user.token) {
            return true
        }
        return false
    },
    state: {
        get authenticated() {
            return Auth.authenticated();
        },
    },
}

/* SHOPING CART */

let ShopingCart = {
    async getAll(shopingcart) {

        let response = await Service.get(`/ShopingCart?${shopingcart}`)
        let data = response.data
        data = data.map((doc) => {
            return {

                Auth: doc.Auth,
                id: doc._id,
                Proizvod: doc.Proizvod,
                ProizvodModel: doc.ProizvodModel,
                Cijena: doc.Cijena,
                Opis: doc.Opis,
                NajboljaUporaba: doc.NajboljaUporaba,

            }
        })
        return data
    },
    add(Cart) {
        return Service.post("/ShopingCart", Cart);
    },
    async deleteitems(id) {
        await Service.delete(`/ShopingCart/${id}`)
    },


}

/* SUPPORT */
let support = {
    addNewsuppTicket(Supp) {
        return Service.post("/Support", Supp)
    },
}


export { Proizvodi, Auth, ShopingCart, support }







/* username,
        password,
        firstname,
        country,
        city,
        state,
        about,
        adress,
        lastname */
