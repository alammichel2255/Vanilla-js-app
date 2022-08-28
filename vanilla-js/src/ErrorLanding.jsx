import { RandomMeal } from "./RandomMeal"

export const ErrorLanding = () => {
    return (
        <>
            <h1>404 Error: The Meal You Are Looking For Was Not Found!</h1>
            <p>Have you considered giving our meal of the day a try?</p>
            <RandomMeal />
        </>
    )
}