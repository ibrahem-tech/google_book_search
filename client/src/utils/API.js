import axios from "axios";

export default{
    getBook: function (query){
        return axios.get('https://www.googleapis.com/books/v1/volumes?q=${query}');
    },

    deleteBook: function (id){
        return axios.delete("/api/books/" + id).then(result => result.data)
    }
}