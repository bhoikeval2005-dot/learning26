import { useForm } from "react-hook-form";

export const FormDemo2 = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    console.log("errors ....", errors);

    const validationSchema = {
        ageValidater: {
            required: {
                value: true,
                message: "age is required"
            },
            min: {
                value: 18,
                message: "min age should be 18"
            },
            max: {
                value: 60,
                message: "max  age should be  60"
            },
        },
        addressValidater: {
            required: {
                value: true,
                message: "address is require"
            },
            minLength: {
                value: 10,
                message: "minlength should be 10"
            },
            mixLength: {
                value: 50,
                message: "minlength should be 50"
            }

        }
    }


    const submitHandler = (data) => {
        alert("form submited")
        console.log(data)


    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>FormDemo2</h2>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label >NAME :</label>
                    <input type='text' {...register("name", { required: { value: true, message: "name is require" } })}></input>
                    {errors.name && errors.name.message}
                </div>
                <div>
                    <label>AGE :</label>
                    <input type='number'{...register("age", validationSchema.ageValidater)}></input>
                    {errors.age && errors.age.message}
                </div>
                <div>
                    <label>ADDRESS :</label>
                    <input type="text" {...register("address", validationSchema.addressValidater)}></input>
                    {errors.address?.message}

                </div>
                <div>
                    <input type="submit"></input>

                </div>
            </form>
        </div>
    )

}
