import React from "react";
import { useForm } from "react-hook-form";

const CityForm = () => {

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="city"
                    placeholder="City"
                    ref={register({ required: true })}
                />
                {errors.city && <span>This field is required</span>}
                <input
                    name="country"
                    placeholder="Country"
                    ref={register({ required: true })}
                />
                {errors.country && <span>This field is required</span>}
                <input type="submit" />
            </form>
        </>
    )
};

export default CityForm;