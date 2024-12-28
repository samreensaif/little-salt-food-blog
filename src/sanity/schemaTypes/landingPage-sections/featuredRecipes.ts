export const featuredRecipes = {
    title: 'Featured Recipes',
    name: 'featuredRecipes',
    type: 'object',
    fields: [
        //ek dafa ka title
        {
            title: 'Title',
            name: 'title',
            type: 'string',
        },

        //bar bar wala card
        {
            title: 'Recipes',
            name: 'recipes',
            type: 'array',
            of: [
                {
                    title:'Recipe Entry',
                    name:'recipeEntry',
                    type: 'object',
                    fields: [
                        {
                            title: 'Date',
                            name: 'date',
                            type: 'string',                       
                        
                        },
                        {
                            title: 'Minutes',
                            name: 'minutes',
                            type: 'string',
                        }
                        ,
                        {
                            title: 'Recipe Image',
                            name: 'recipeImage',
                            type: 'image',
                            
                        },
                        {
                            title: 'Recipe Title',
                            name: 'recipeTitle',
                            type: 'string',
                        },
                        {
                            title: 'Description',
                            name: 'description',
                            type: 'string',
                        },
                        {
                            title: 'Button Text',
                            name: 'buttonText',
                            type: 'string',
                        },
                        {
                            title:'Detail Description',
                            name:'detailDescription',
                            type:'string',
                        }
                    ],
                }
                ],
        },
    ],
}