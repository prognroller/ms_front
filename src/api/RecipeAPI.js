import React from "react";
import gql from "graphql-tag/src";
import {useQuery} from "@apollo/client";
import Recipe from "../components/Recipe";

const GET_RECIPES = gql`
  query getRecipe($id: Int!){
    recipe(id: $id) {
      title
      description
      photo {
        title
        description
        url
      }
      tagsCollection {
        items {
          name
        }
      }
    }
  }
`

export default function RecipeAPI() {
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