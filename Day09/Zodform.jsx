import {useForm} from 'reacr-hook-form'
import {zodREsolver} from '@hookform/resolvers/zod';
import {z} from 'zod'

const formSchema=z.object({
    name:z.string().min(3,"Minimum length should be 3").max(20,"Maximum length should be 20"),
    age:z.coerce().number().min(10,"Minimum age should be 10").max(80,"Maximum age should be 80"),
    password:z.string().min(5,"Minimum Password should be 5").max(20,"Maximum Password should be 20"),
})
  
function ZodForm(){
    const{register, handleSubmit, formState:{errors}}=useForm({
        resolver:zodResolver(formSchema)
    });

    function submitForm(data){
        console.log(data);
    }

    console.log("Render");


    return(
        <>
        <form onSubmit={handleSubmit(submitForm)}>
        <div>
            <label htmlFor="first">Name</label>
            <input id="first"{...register('name')} />
            {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
            <label htmlFor="second">Age</label>
            <input id="second"{...register('age')} />
            {errors.age && <span>{errors.age.message}</span>}
        </div>
        <div>
            <label htmlFor="third">Password</label>
            <input id="third"{...register('password')} />
            {errors.password && <span>{errors.password.message}</span>}
        </div>
        <button>Submit</button>
        </form>
        </>
    )
}