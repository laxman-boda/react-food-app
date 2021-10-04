import React from 'react'
import { FeatureContainer,FeatureButton } from "./FeaturesElements"
const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Dish of the day</h1>
            <p>Ginger garlic with Indian Spices</p>
            <FeatureButton>Order Now</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature
