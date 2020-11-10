import React from "react";
import gql from "graphql-tag/src";
import {useQuery} from "@apollo/client";
import RecipeFull from "../components/RecipeFull";

const GET_RECIPES = gql`
  query getRecipe($id: String!){
    recipe(id: $id) {
      title
      description
      photo {
        title
        description
        url
      }
      chef {
        name
      }
      tagsCollection {
        items {
          name
        }
      }
    }
  }
`

export default function RecipeAPI({match}) {
  const {loading, data} = useQuery(GET_RECIPES, {
    variables: {
      id: match.params.id,
    }
  })

  return (
    loading ? 'loading...' : <RecipeFull { ...data.recipe } />
  )
}