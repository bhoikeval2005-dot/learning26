import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo4 = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm({ mode: "all" })
    const password = watch("password")
    console.log("watching...", password)

    const validationSchema = {
        passwordValidater: {
            required: {
                value: true,
                message: "password is require"
            }
        },
        confromPassword: {
            required: {
                value: true,
                message: "confrom password is require"
            },
            validate: (params) => {
                return params == password || "password is invalid"
            }
        }

    }

    const submitHandler = (data) => {
        console.log(data)
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>FormDemo4</h2>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label >Password:-</label>
                    <input type='password' {...register("password",validationSchema.passwordValidater)}></input>
                    {errors.password?.message}
                </div>
                <div>
                    <label >ConfromPassword:-</label>
                    <input type='password' {...register("confrompassword",validationSchema.confromPassword)}></input>
                    {errors.confrompassword?.message}
                </div>
                <div>
                    <input type='submit'></input>
                </div>
                

            </form>
        </div>
    )
}
