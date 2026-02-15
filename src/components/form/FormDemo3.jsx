import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo3 = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "all" })

    const submitHandler = (data) => {
        console.log(data)
    }

    const validationSchema = {
        nameValidater: {
            required: {
                value: true,
                message: "name is required"
            },

        },
        contactValidater:{
            required:{
                value:true,
                message:"contect is required"
            },
            pattern:{
                value:/^[6-9]{1}[0-9]{9}$/,
                message:"invalid contect"
            },

        },
        promoCodeValidater:{
            required:{
                value:true,
                message:"promocode is required"
            },
            validate:(params)=>{
                return params == "2026" || "invalid Promocode"

            },
        },
        hobbiesValidater:{
            required:{
                value:true,
                message:"hobbeies are required"
            },
            validate:(params)=>{
                return params?.length>=2 ||"min 2 hobbies is required"
            }

        }


    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>FormDemo3</h2>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>NAME :</label>
                    <input type='text'{...register("name",validationSchema.nameValidater)}></input>
                    {errors.name?.message}
                </div>
                <div>
                    <label>CONTACT :</label>
                    <input type="text" {...register("contact",validationSchema.contactValidater)}></input> 
                    {errors.contact?.message}
                </div>
                <div>
                    <label>PromoCode :</label>
                    <input type='text' {...register("promocode",validationSchema.promoCodeValidater)}></input>
                    {errors.promocode?.message}
                </div>
                <div>
                    <label>Hobbies :</label>
                   Cricket: <input type='checkbox' {...register("hobbies",validationSchema.hobbiesValidater)} value="cricket"></input>
                   Singing: <input type='checkbox' {...register("hobbies",validationSchema.hobbiesValidater)} value="singing"></input>
                   Travel: <input type='checkbox' {...register("hobbies",validationSchema.hobbiesValidater)} value="travel"></input>
                   {errors.hobbies?.message}

                </div>
                <div>
                    <input type="submit"></input> 
                </div>
            </form>
        </div>
    )
}
