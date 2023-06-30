import { getcustomers,getSinglecustomer,updatecustomer,createcustomer } from "../Controller/controllers.js"
import { booknow ,login } from "../Controller/customersAuthentication.js"


const Apiroutes = (app)=>{
    app.route('/data')
       .get(getcustomers)
       .put(updatecustomer)
    app.route("/datas/:id")
       .get(getSinglecustomer)//get single tuple
       .post(createcustomer)//create data
       .delete()//you can delete a single data
       .put()//create a single entry

       //auth user
    app.route('/book/booknow')
       .post(booknow)


   app.route('/auth/login')
      .post(login)

}
export default Apiroutes;