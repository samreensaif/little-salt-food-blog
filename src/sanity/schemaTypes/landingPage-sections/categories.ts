export const categories = {
    title: 'Categories',
    name: 'categories',
    type: 'object',
    fields: [
        {
            title: 'Category Title',
            name: 'categoryTitle',
            type: 'string',
        },
        {
            title: 'Category Card',
            name: 'categoryCard',
            type:'array',
            of:[

                {
                    title:'Category Card Entry',
                    name:'categoryCardEntry',
                    type:'object',
                    fields:[
                        {
                            title: 'Category Card Title',
                            name: 'categoryCardTitle',
                            type: 'string',
                        },
                        {
                            title:'Category Card Image',
                            name:'categoryCardImage',
                            type:'image',
                        },
                        {
                            title:'Category Card Date',
                            name:'categoryCardDate',
                            type:'string',
                        },
                        {
                            title:'Category Card Minutes',
                            name:'categoryCardMinutes',
                            type:'string',
                        },
                        {
                            title: 'Category Card Button',
                            name: 'categoryCardButton',
                            type: 'string',
                        },
                        {
                            title: 'Category Card Paragrapgy',
                            name: 'categoryCardParagrapgy',
                            type: 'string',
                        }

                    ]
                }
            ]
        }
    ],
}