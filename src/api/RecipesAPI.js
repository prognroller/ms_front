import React from "react";
import gql from "graphql-tag/src";
import {useQuery} from "@apollo/client";
import Recipe from "../components/Recipe";

const GET_RECIPES = gql`
  query getRecipes($skip: Int, $limit: Int) {
    recipeCollection(skip: $skip, limit: $limit) {
      items {
        id
        title
        photo {
          title
          description
          url
        }
      }
    }
  }
`

export default function RecipesAPI() {
  const {loading, data} = useQuery(GET_RECIPES, {
    variables: {
      limit: 100,
      skip: 0
    }
  })

  return (
    loading
      ? 'loading...'
      :
      <section className="recipes">
        {
          data.recipeCollection.items.map((props, idx) => <Recipe key={idx}  { ...props } /> )
        }
      </section>
  )
}