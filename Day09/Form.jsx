import {useForm} from "reacr-hook-form"

function Form(){
    const{register, handleSubmit}=useForm();

    function submitForm(data){
        console.log(data);
    }

    console.log("Render");


    return(
        <>
        <form onSubmit={handleSubmit(submitForm)}>
        <div>
            <label htmlFor="first">Name</label>
            <input id="first"{...register('name',
                {required:"Name can't be empty"}
            )} />
            {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
            <label htmlFor="second">Age</label>
            <input id="second"{...register('age',
                {
                    min:{
                        value:10,
                        message:"Minimum Age should be 18"
                    },
                    max:{
                        value:80,
                        message:"Maximum Age should be 80"
                    }
                }
            )} />
            {errors.age && <span>{errors.age.message}</span>}
        </div>
        <div>
            <label htmlFor="third">Password</label>
            <input id="third"{...register('password',
                {
                    minLength:{
                        value:8,
                        message:"Maximum Length of password should be 8"
                    },
                    maxLength:{
                        value:20,
                        message:"Maximum Length of password should be 20"
                    }
                }
            )} />
            {errors.password && <span>{errors.password.message}</span>}
        </div>
        <button>Submit</button>
        </form>
        </>
    )
}